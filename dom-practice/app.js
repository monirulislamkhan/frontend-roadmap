import { properties } from './properties.js';
import { renderCards, applyFilters } from './ui.js';

// app.js — DOM practice
const search = document.querySelector('#search');
const listing = document.querySelector('#listing');
const cityButtons = document.querySelectorAll('button[data-city]');
const themeButton = document.querySelector('#theme');

// ---------- State ----------
// The two filters the user can change. Everything on screen is built from these.

let currentCity = 'all';
let currentSearch = '';

// ---------- Search ----------
search.addEventListener('input', function (event) {
  currentSearch = event.target.value.toLowerCase();
  applyFilters(currentCity, currentSearch, properties, listing);
});

// ---------- City filters ----------
cityButtons.forEach((button) =>
  button.addEventListener('click', function () {
    cityButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    currentCity = button.dataset.city;
    applyFilters(currentCity, currentSearch, properties, listing);
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
renderCards(properties, listing);

// ---------- STEP 8 — combine both filters (still to write)
