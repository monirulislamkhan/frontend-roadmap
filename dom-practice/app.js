'use strict';

// app.js — DOM practice
// properties.js loads before this file, so `properties` is available here.
const search = document.querySelector('#search');
const listing = document.querySelector('#listing');
const cityButtons = document.querySelectorAll('button[data-city]');
const themeButton = document.querySelector('#theme');

// ---------- State ----------
// The two filters the user can change. Everything on screen is built from these.

// ---------- Render ----------
function renderCards(list) {
  if (!list.length) {
    listing.innerHTML = `<p class="empty">No properties found</p>`;
    return;
  }
  listing.innerHTML = list
    .map(
      (property) => `<div class="card" data-id="${property.id}">
      <h3>${property.name}</h3>
      <p class="meta">
        ${property.bhk > 0 ? property.bhk + ' BHK' : property.type} in ${property.city}
      </p>
      <span class="price">${priceLabel(property.price)}</span>
    </div>`
    )
    .join('');
}

// ---------- Search ----------
search.addEventListener('input', (e) => {
  const text = e.target.value.toLowerCase();
  const searhResult = properties.filter((item) => item.name.toLowerCase().includes(text));
  renderCards(searhResult);
});

// ---------- City filters ----------
cityButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const cityFound = button.dataset.city;

    const singleCity = properties.filter((item) => item.city === cityFound);

    renderCards(singleCity);
  });
});

// ---------- Theme ----------

// ---------- Card selection ----------

// ---------- First paint ----------
renderCards(properties);

// ---------- STEP 8 — combine both filters (still to write)
