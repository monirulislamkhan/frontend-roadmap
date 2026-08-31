'use strict';

// app.js — DOM practice
// properties.js loads before this file, so `properties` is available here.
const search = document.querySelector('#search');
const listing = document.querySelector('#listing');
const cityButtons = document.querySelectorAll('button[data-city]');
const themeButton = document.querySelector('#theme');

// ---------- State ----------
// The two filters the user can change. Everything on screen is built from these.

let currentCity = 'all';
let currentSearch = '';

// ---------- Render ----------
function renderCards(list) {
  if (!list.length) {
    listing.innerHTML = '<p class="empty">No properties found</p>';
    return;
  }

  listing.innerHTML = list
    .map(
      (item) => `
    <div class="card" data-id="${item.id}">
      <h3>${item.name}</h3>
      <p class="meta">${item.bhk > 0 ? item.bhk + ' BHK' : item.type} in ${item.city}</p>
      <span class="price">${priceLabel(item.price)}</span>
    </div>`
    )
    .join('');
}

// ---------- Search ----------
search.addEventListener('input', function (event) {
  currentSearch = event.target.value.toLowerCase();
  applyFilters();
});

// ---------- City filters ----------
cityButtons.forEach((button) =>
  button.addEventListener('click', function () {
    cityButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    currentCity = button.dataset.city;
    applyFilters();
  })
);

// ---------- Theme ----------
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ---------- Card selection ----------
listing.addEventListener('click', function (event) {
  const card = event.target.closest('.card');
  if (!card) return;
  card.classList.toggle('selected');
});

// ---------- First paint ----------
renderCards(properties);

// ---------- STEP 8 — combine both filters (still to write)
function applyFilters() {
  let list = properties;

  if (currentCity !== 'all') {
    list = list.filter((property) => property.city === currentCity);
  }

  if (currentSearch) {
    list = list.filter((item) => item.name.toLowerCase().includes(currentSearch));
  }
  renderCards(list);
}
