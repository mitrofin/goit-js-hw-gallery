const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.getElementById('gallery');

const makeItemGallery = ({ url, alt }) => {
  return `<li class=itemStyle><img src ="${url}"alt = "${alt}"/></li>`;
};
const makeItemsGallery = images.map(makeItemGallery).join('');

galleryRef.insertAdjacentHTML('beforeend', makeItemsGallery);

/* images.forEach(el =>
  galleryRef.insertAdjacentHTML(
    'beforeend',
    `<li class=itemStyle><img src="${el.url}" alt="${el.alt}"></li>`,
  ),
); */

/* console.log(makeItemGallery); */
