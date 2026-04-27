'use strict';

/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
  });
}

/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 50 ? header.classList.add("active")
    : header.classList.remove("active");
});

/**
 * MODAL FOR IMAGES
 */

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalCloseBtn = document.querySelector('.modal-close');

  if (!modal || !modalImg) return;

  const allImages = document.querySelectorAll(
    '.work-post-link img.img-cover, ' +
    '.gallery-grid-img, ' +
    '.cta-image'
  );

  allImages.forEach(img => {
    img.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'block';
      modalImg.src = this.src;
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

/**
 * MODAL FOR REVIEWS
 */

document.addEventListener('DOMContentLoaded', function() {
  const reviewsModal = document.getElementById('reviewsModal');
  const reviewsBtn = document.getElementById('reviewsBtn');
  const ctaReviewsBtn = document.getElementById('ctaReviewsBtn');
  const reviewsModalCloseBtn = document.getElementById('closeReviewsModalBtn');

  function openReviewsModal() {
    if (reviewsModal) reviewsModal.style.display = 'flex';
  }

  function closeReviewsModal() {
    if (reviewsModal) reviewsModal.style.display = 'none';
  }

  if (reviewsBtn) {
    reviewsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openReviewsModal();
    });
  }

  if (ctaReviewsBtn) {
    ctaReviewsBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openReviewsModal();
    });
  }

  if (reviewsModalCloseBtn) {
    reviewsModalCloseBtn.addEventListener('click', closeReviewsModal);
  }

  window.addEventListener('click', function(e) {
    if (e.target === reviewsModal) {
      closeReviewsModal();
    }
  });
});