const lightbox = GLightbox({
  selector: '.glightbox',
  touchNavigation: true,
  loop: false,
  zoomable: true,
});

// group ka total nikalna, click ke waqt
let total = 0;
document.addEventListener(
  'click',
  function (event) {
    const link = event.target.closest('a.glightbox');
    if (!link) return;
    total = document.querySelectorAll('a.glightbox[data-gallery="' + link.dataset.gallery + '"]').length;
  },
  true
);

const counterEl = document.createElement('div');
counterEl.className = 'gcounter';

function paint(index) {
  counterEl.textContent = index + 1 + ' / ' + total;
}

lightbox.on('open', function () {
  const container = document.querySelector('.glightbox-container');
  if (container && !container.contains(counterEl)) container.appendChild(counterEl);
  paint(lightbox.index);
});

lightbox.on('slide_changed', function (data) {
  // console.log(data); // ye line sirf check ke liye
  paint(data.current.index);
});
