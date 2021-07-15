const galleryItems = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
]
//  Получаем ссылки на элементы------------------------------------------------------------->
const galleryRef = document.querySelector('.js-gallery')
galleryRef.classList.add('grid')

const modalRefs = {
  lightBoxRef: document.querySelector('.js-lightbox'),
  lightBoxOverlayRef: document.querySelector('.lightbox__overlay'),
  lightBoxContentRef: document.querySelector('.lightbox__content'),
  lightBoxImageRef: document.querySelector('.lightbox__image'),
  btnModalCloseRef: document.querySelector('.lightbox__button'),
}

// Создаем и вешаем гроздь из <li> со ссылкой и картинкой внутри----------------------------->
galleryItems.map(item => {
  const galleryItemEl = document.createElement('li')
  galleryItemEl.classList.add('gallery__item')

  const galleryLink = document.createElement('a')
  galleryLink.classList.add('gallery__link')
  galleryLink.href = item.original

  const galleryImage = document.createElement('img')
  galleryImage.classList.add('gallery__image')
  galleryImage.src = item.preview
  galleryImage.setAttribute('data-source', item.original)
  galleryImage.alt = item.description

  galleryLink.appendChild(galleryImage)
  galleryItemEl.appendChild(galleryLink)
  galleryRef.appendChild(galleryItemEl)
})

// Делегируем событие клика на родительский узел и открываем модалку по клику на картинке--------------------------------------------->
galleryRef.addEventListener('click', onGalleryClick)

function onGalleryClick(event) {
  event.preventDefault()

  const target = event.target

  if (target.nodeName !== 'IMG') return
  onModalOpen()
}

// Закрываем модалку кнопкой----------------------------------------------------------->
modalRefs.btnModalCloseRef.addEventListener('click', onModalClose)

// Закрываем модалку через lightbox---------------------------------------------------->
modalRefs.lightBoxOverlayRef.addEventListener('click', onLightBoxModalClose)
function onLightBoxModalClose(event) {
  if (event.currentTarget === event.target) {
    onModalClose()
  }
}

// Закрываем модалку через ESC--------------------------------------------------------->
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onModalClose()
  }
}

// Двигаем картинки кнопками---------------------------------------------------------->

function onLeftRigthKeyPictureMove(event) {
  const galleryAllImg = galleryRef.querySelectorAll('img')
  galleryAllImg.forEach(img => {
    // console.log(img.src)
    let currentModalImgSrc = modalRefs.lightBoxImageRef.src;
    const nextSiblingSrc = img.parentNode.parentNode.nextSibling.firstChild.firstChild.getAttribute('data-source');
    console.log(img.parentNode.parentNode.nextSibling.firstChild.firstChild.getAttribute('data-source'));
    if (currentModalImgSrc === img.getAttribute('data-source')) {
      console.log('lol');
      currentModalImgSrc = nextSiblingSrc
      // console.log(nextSiblingSrc);
    }
    // console.log(modalRefs.lightBoxImageRef.src);
    // console.log(img.getAttribute('data-source'));
  })
  // if (event.code === 'ArrowLeft') {
  //   // modalRefs.lightBoxImageRef.src = 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg'

  //   const currentImageSrcInGallery = galleryRef.firstElementChild.firstElementChild.href
  //   console.log(currentImageSrcInGallery)

  //   const nextImageSrcInGallery = galleryRef.firstElementChild.nextElementSibling.firstElementChild.href
  //   console.log(nextImageSrcInGallery)

  //   const currentModalImageSrc = modalRefs.lightBoxImageRef.src
  //   console.log(currentModalImageSrc)
  //   if (currentModalImageSrc === currentImageSrcInGallery) {
  //     modalRefs.lightBoxImageRef.src = 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg'
  //   }
  // } else if (event.code === 'ArrowRight') {
  //   console.log('right')
  // }
}

// Коллбэк открытия модалки----------------------------------------------------------->
function onModalOpen() {
  modalRefs.lightBoxRef.classList.add('is-open')
  modalRefs.lightBoxImageRef.src = event.target.getAttribute('data-source')
  modalRefs.lightBoxImageRef.alt = event.description
  window.addEventListener('keydown', onEscKeyPress)
  window.addEventListener('keydown', onLeftRigthKeyPictureMove)
}

// Коллбек закрытия модалки ----------------------------------------------------------->
function onModalClose(event) {
  modalRefs.lightBoxRef.classList.remove('is-open')
  modalRefs.lightBoxImageRef.src = ''
  window.removeEventListener('keydown', onEscKeyPress)
  window.removeEventListener('keydown', onLeftRigthKeyPictureMove)
}
