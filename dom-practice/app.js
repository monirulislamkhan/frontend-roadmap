'use strict';
// app.js — DOM practice
// properties.js is loaded before this file, so `properties` is available here.
// Write everything below yourself. One step at a time.

// STEP 1 — search box
// Grab #search, listen for the right event, log what the user typed.
const search = document.querySelector('#search');
search.addEventListener('input', function (event) {
  const text = event.target.value.toLowerCase();
  const found = properties.filter((item) => item.name.toLowerCase().includes(text));
  renderCards(found);
});

const listing = document.querySelector('#listing');

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
renderCards(properties);

const cityButtons = document.querySelectorAll('button[data-city]');
cityButtons.forEach((button) =>
  button.addEventListener('click', function () {
    cityButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    const cityName = button.dataset.city;
    const conditionWiseCities = cityName === 'all' ? properties : properties.filter((item) => item.city === cityName);
    renderCards(conditionWiseCities);
  })
);

const switchTheme = document.getElementById('theme');
switchTheme.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('dark');
});

// STEP 2 — render the cards
// Write renderCards(list) that puts one card per property into #listing.
// Card markup to aim for:
//   <div class="card" data-id="1">
//     <h3>Skyline Towers</h3>
//     <p class="meta">3 BHK in Noida</p>
//     <span class="price">₹ 75.00 L</span>
//   </div>
// You already have priceLabel() and the bhk/type line from earlier sessions.
// Call renderCards(properties) once so the page is not empty.

// STEP 3 — "No results"
// When the list is empty, show <p class="empty">No properties found</p> instead.

// STEP 4 — wire the search to the list
// On every keystroke: filter by name, then render.
// Remember: lowercase both sides.

// STEP 5 — city filter buttons
// Clicking a button filters the list, and that button gets the "active" class.
// Only one button should be active at a time. "all" clears the city filter.
// The city is in data-city.

// STEP 6 — dark mode
// #theme toggles the "dark" class on <body>. The CSS is already written.

// STEP 7 — event delegation
// One listener on #listing, not one per card.
// On click, find the clicked card and toggle "selected" on it.
// event.target.closest(".card") is the tool.
