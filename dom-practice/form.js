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
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const messageInput = document.querySelector('#message');
const countrySelect = document.querySelector('#country');
const citySelect = document.querySelector('#city');
const areaInput = document.querySelector('#area');
const budgetRange = document.querySelector('#budget');
const budgetValue = document.querySelector('#budget-value');
const visitInput = document.querySelector('#visit');
const localityInput = document.querySelector('#locality');
const codeSelect = document.querySelector('#code');
const visitTimeInput = document.querySelector('#visit-time');
const typesSelect = document.querySelector('#types');
const docsInput = document.querySelector('#docs');
const agentInput = document.querySelector('#agent');
const sourceInput = document.querySelector('#source');

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
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const phone = phoneInput.value.trim();

  const types = [...typesSelect.selectedOptions].map((option) => option.value);

  const docs = [...docsInput.files].map((file) => ({
    size: file.size,
    name: file.name,
    type: file.type,
  }));

  const bhk = document.querySelector('input[name="bhk"]:checked')?.value ?? '';
  const status = document.querySelector('input[name="status"]:checked')?.value ?? '';

  const amenties = [...document.querySelectorAll('input[name="amenity"]')]
    .filter((item) => item.checked)
    .map((amenity) => amenity.value);

  const terms = document.querySelector('#terms').checked;
  const locality = localityInput.value;
  const visitTime = visitTimeInput.value;
  const enquiryData = {
    name,
    email,
    country,
    city,
    locality,
    code,
    phone,
    area,
    budget,
    visit,
    visitTime,
    status,
    bhk,
    types,
    amenties,
    docs,
    message,
    agent,
    source,
    terms,
  };
  console.log(enquiryData);
});
