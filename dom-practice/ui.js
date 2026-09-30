import { properties, priceLabel } from './properties.js';

// ---------- Render ----------
function renderCards(list, propertyItem) {
  if (!list.length) {
    propertyItem.innerHTML = '<p class="empty">No properties found</p>';
    return;
  }

  propertyItem.innerHTML = list
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

function applyFilters(city, search) {
  let list = properties;

  if (city !== 'all') {
    list = list.filter((property) => property.city === city);
  }

  if (search) {
    list = list.filter((item) => item.name.toLowerCase().includes(search));
  }
  renderCards(list);
}

export { renderCards, applyFilters };
