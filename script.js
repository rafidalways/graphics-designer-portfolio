document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lightbox functionality
const portfolioItems = document.querySelectorAll('.portfolio-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = item.src;
  });
});

closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Custom cursor
const customCursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, .btn, .portfolio-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    customCursor.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    customCursor.classList.remove('hover');
  });
});