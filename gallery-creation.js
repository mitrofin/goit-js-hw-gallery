import images from './gallery-items.js';

/* console.log(images); */
const containerImages = document.querySelector('.js-gallery');

const createImagesGallary = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link"
  href="${original}">
  <img class="gallery__image"
  src ="${preview}"
  data-source="${original}"
  alt = "${description}"/>
  </a>
  </li>`;
};
const makeItemsGallery = images.map(createImagesGallary).join('');
containerImages.insertAdjacentHTML('beforeend', makeItemsGallery);

const lightBox = document.querySelector(".lightbox");
const openModal = document.querySelector('.lightbox__image');
const closeModal = document.querySelector('[data-action="close-lightbox"]');

containerImages.addEventListener('click', onClick);

function onClick(evt) { 
   evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  lightBox.classList.add("is-open");
  openModal.src = evt.target.dataset.source;
  openModal.alt = evt.target.alt;

};

closeModal.addEventListener('click', onCloseModal);
function onCloseModal(evt) {
  if (evt.target.nodeName === 'IMG') {
    return;
  }
  lightBox.classList.remove('is-open');
  openModal.removeAttribute('src');
  openModal.removeAttribute("alt");
};



  

