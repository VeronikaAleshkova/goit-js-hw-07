import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>
  `;
}).join('');
}

galleryContainer.addEventListener('click', onImageClick);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});

function onImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== IMG) {
    return;
  }
}
// var lightbox = $('.gallery a').simpleLightbox({ galleryItems });
