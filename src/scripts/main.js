import data from '../DATA.json';

const hamburgerBtnElement = document.querySelector('#hamburger');
const navElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');
const sidebarLinkElement = document.querySelectorAll('.sidebar__list .link');
// const postsContainer = document.querySelector('.posts');

// postsContainer.innerHTML = '';
let postsContainer = '';
data.restaurants.forEach((restaurant) => {
  postsContainer += `
  <a href="javascript:void(0)" class="card" data-title="Click to read more about the restaurant ${restaurant.name}">
  <img class="card__thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name} Restoran" role="article">
  <div class="card__content" aria-hidden="true">
      <div class="card__information">
          <small><i class="card__icon--gold fas fa-star"></i> ${restaurant.rating}</small>
          <small> - </small>
          <small class="card__location" >${restaurant.city}</small>
      </div>
      <h3 class="card__name">${restaurant.name}</h3>
      <div class="card__description">
        ${restaurant.description}
      </div>
  </div>
</a>
  `;
});

document.querySelector('.posts').innerHTML = postsContainer;

// Ketika hamburger ditekan drawer muncul dengan class open + trigge hamburger animate
hamburgerBtnElement.addEventListener('click', (event) => {
  navElement.classList.toggle('sidebar--open');
  hamburgerBtnElement.classList.toggle('animate');
  event.stopPropagation(); /* diperlukan untuk mencegah terjadinya perambatan event yang sama. */
});

// Close drawer + remove trigger hamburger animate saat klik area diluar drawer
mainElement.addEventListener('click', (event) => {
  navElement.classList.remove('sidebar--open');
  hamburgerBtnElement.classList.remove('animate');
  event.stopPropagation(); /* diperlukan untuk mencegah terjadinya perambatan event yang sama. */
});

// Untuk warna sidebar
for (let i = 0; i < sidebarLinkElement.length; i += 1) {
  sidebarLinkElement[i].addEventListener('click', () => {
    const current = document.querySelector('.sidebar__list .link--active');
    current.className = current.className.replace('link--active', '');
    this.classList.toggle('link--active');
  });
}
