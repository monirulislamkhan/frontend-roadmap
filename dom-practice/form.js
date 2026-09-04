'use strict';

// form.js — enquiry form practice
// Everything below is yours to write. One step per turn.

// ---------- Data (given, like properties.js — not learning code) ----------

const locations = {
  India: ['Noida', 'Gurgaon', 'Ghaziabad', 'Delhi', 'Kolkata'],
  UAE: ['Dubai', 'Abu Dhabi', 'Sharjah'],
  Qatar: ['Doha', 'Al Rayyan'],
};

function priceLabel(price) {
  const lakhs = 100000;
  const cr = 10000000;

  if (price == null || price === 0) {
    return 'Price on request';
  }

  let finalPrice;
  if (price >= cr) {
    finalPrice = `${(price / cr).toFixed(2)} Cr`;
  } else {
    finalPrice = `${(price / lakhs).toFixed(2)} L`;
  }
  return `₹ ${finalPrice}`;
}

//
const enquiry = document.querySelector('#enquiry');
const result = document.querySelector('#result');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');
const countrySelect = document.querySelector('#country');
const citySelect = document.querySelector('#city');
const codeSelect = document.querySelector('#code');
const areaInput = document.querySelector('#area');
const budgetRange = document.querySelector('#budget');
const budgetValue = document.querySelector('#budget-value');
const visitInput = document.querySelector('#visit');
const localityInput = document.querySelector('#locality');
const visitTimeInput = document.querySelector('#visit-time');
const typesSelect = document.querySelector('#types');
const docsInput = document.querySelector('#docs');
const agentInput = document.querySelector('#agent');
const sourceInput = document.querySelector('#source');
const resetButton = document.querySelector('#clear');

// Error Variables
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');
const countryError = document.querySelector('#country-error');
const cityError = document.querySelector('#city-error');
const bhkError = document.querySelector('#bhk-error');
const statusError = document.querySelector('#status-error');
const termsError = document.querySelector('#terms-error');

budgetRange.addEventListener('input', (event) => {
  budgetValue.textContent = priceLabel(+event.target.value);
});
function fillCities(country) {
  if (!country) {
    citySelect.innerHTML = '<option value="">Select a Country first</option>';
    return;
  }
  const cities = locations[country] ?? [];
  citySelect.innerHTML =
    '<option value="">Select a City</option>' +
    cities
      .map(
        (city) => `
      <option value="${city}">${city}</option>
    `
      )
      .join('');
}

countrySelect.addEventListener('change', (e) => {
  fillCities(e.target.value);
});

enquiry.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;

  document.querySelectorAll('.error').forEach((el) => {
    el.hidden = true;
  });
  document.querySelectorAll('.invalid').forEach((el) => el.classList.remove('invalid'));
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const country = countrySelect.value;
  const city = citySelect.value;
  const code = codeSelect.value;
  const phone = phoneInput.value.trim();
  const area = areaInput.valueAsNumber;
  const budget = budgetRange.valueAsNumber;
  const visit = visitInput.value;
  const visitTime = visitTimeInput.value;
  const locality = localityInput.value.trim();
  const agent = agentInput.value;
  const message = messageInput.value.trim();
  const source = sourceInput.value;

  const types = [...typesSelect.selectedOptions].map((option) => option.value);

  const docs = [...docsInput.files].map((file) => ({
    size: file.size,
    name: file.name,
    type: file.type,
  }));

  const bhk = document.querySelector('input[name="bhk"]:checked')?.value ?? '';
  const status = document.querySelector('input[name="status"]:checked')?.value ?? '';

  const amenities = [...document.querySelectorAll('input[name="amenity"]')]
    .filter((item) => item.checked)
    .map((amenity) => amenity.value);

  const terms = document.querySelector('#terms').checked;

  if (!name) {
    nameError.textContent = 'Name is required';
    nameError.hidden = false;
    nameInput.classList.add('invalid');
    isValid = false;
  }

  if (!email || !email.includes('@')) {
    emailError.textContent = 'Enter a valid email address';
    emailError.hidden = false;
    emailInput.classList.add('invalid');
    isValid = false;
  }

  if (!phone || phone.length !== 10) {
    phoneError.textContent = 'Enter a 10-digit phone number';
    phoneError.hidden = false;
    phoneInput.classList.add('invalid');
    isValid = false;
  }

  if (!country) {
    countryError.textContent = 'Country is required';
    countryError.hidden = false;
    countrySelect.classList.add('invalid');
    isValid = false;
  }

  if (!city) {
    cityError.textContent = 'City is required';
    cityError.hidden = false;
    citySelect.classList.add('invalid');
    isValid = false;
  }

  if (!bhk) {
    bhkError.textContent = 'BHK is required';
    bhkError.hidden = false;
    isValid = false;
  }

  if (!status) {
    statusError.textContent = 'Select buy or rent';
    statusError.hidden = false;
    isValid = false;
  }
  if (!terms) {
    termsError.textContent = 'Please agree to be contacted';
    termsError.hidden = false;
    isValid = false;
  }

  if (!isValid) return;

  const enquiryData = {
    name,
    email,
    country,
    city,
    code,
    phone,
    area,
    budget,
    locality,
    visit,
    visitTime,
    status,
    bhk,
    types,
    amenities,
    docs,
    message,
    agent,
    source,
    terms,
  };
  console.log(enquiryData);
  result.hidden = false;
  result.textContent = 'Enquiry sent';
  clearForm();
});

function clearForm() {
  enquiry.reset();
  fillCities('');
  budgetValue.textContent = priceLabel(budgetRange.valueAsNumber);
}

resetButton.addEventListener('click', () => {
  clearForm();
});
