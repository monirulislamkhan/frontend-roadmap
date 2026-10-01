import { priceLabel } from './properties.js';

// ---------- Render ----------
function renderCards(list, listingElement) {
  if (!list.length) {
    listingElement.innerHTML = '<p class="empty">No properties found</p>';
    return;
  }

  listingElement.innerHTML = list
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

function applyFilters(city, search, propertyList, listingElement) {
  let allProperties = propertyList;

  if (city !== 'all') {
    allProperties = allProperties.filter((property) => property.city === city);
  }

  if (search) {
    allProperties = allProperties.filter((item) => item.name.toLowerCase().includes(search));
  }
  renderCards(allProperties, listingElement);
}

export { renderCards, applyFilters };
