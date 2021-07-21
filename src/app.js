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

let activeIndex = 0
const imagesSrcArr = []
const imagesArr = document.querySelectorAll('img')

//  Получаем ссылки на элементы------------------------------------------------------------->
const galleryRef = document.querySelector('.js-gallery')

const modalRefs = {
  lightBoxRef: document.querySelector('.js-lightbox'),
  lightBoxOverlayRef: document.querySelector('.lightbox__overlay'),
  lightBoxContentRef: document.querySelector('.lightbox__content'),
  lightBoxImageRef: document.querySelector('.lightbox__image'),
  btnModalCloseRef: document.querySelector('.lightbox__button'),
}

// Cоздаем гроздь и вешаем через шаблонные строки------------------------------------------------->
const createdGalleryItems = setGalleryItems(galleryItems)
function setGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
  </li>`
    })
    .join('')
}
galleryRef.insertAdjacentHTML('beforeend', createdGalleryItems)

// Делегируем событие клика на родительский узел и открываем модалку по клику на картинке--------------------------------------------->
galleryRef.addEventListener('click', onGalleryClick)
function onGalleryClick(event) {
  event.preventDefault()
  const target = event.target

  if (target.nodeName !== 'IMG') return
  onModalOpen()
}

// Закрываем модалку кнопкой------------------------------------------------------------------------------->
modalRefs.btnModalCloseRef.addEventListener('click', onModalClose)

// Закрываем модалку через lightbox------------------------------------------------------------------------>
modalRefs.lightBoxOverlayRef.addEventListener('click', onLightBoxModalClose)
function onLightBoxModalClose(event) {
  if (event.currentTarget === event.target) {
    onModalClose()
  }
}

// Закрываем модалку через ESC---------------------------------------------------------------->
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onModalClose()
  }
}

// Коллбэк открытия модалки------------------------------------------------------------------>

function onModalOpen() {
  imagesArr.forEach(img => {
    const imageSrc = img.src
    imagesSrcArr.push(imageSrc)
    if (img.src === event.target.src) {
      activeIndex = imagesSrcArr.indexOf(event.target.src)
    }
  })

  modalRefs.lightBoxRef.classList.add('is-open')
  modalRefs.lightBoxImageRef.src = event.target.getAttribute('data-source')
  modalRefs.lightBoxImageRef.alt = event.description
  window.addEventListener('keydown', onEscKeyPress)
  window.addEventListener('keydown', onLeftRightKeyPress)
}

// Коллбек закрытия модалки ----------------------------------------------------------------->
function onModalClose(event) {
  modalRefs.lightBoxRef.classList.remove('is-open')
  modalRefs.lightBoxImageRef.src = ''
  window.removeEventListener('keydown', onEscKeyPress)
  window.removeEventListener('keydown', onLeftRightKeyPress)
}

// Функция для действий по кнопкам "влево" и "вправо"---------------------------------------->
function onLeftRightKeyPress() {
  if (event.code === 'ArrowRight' && activeIndex < galleryItems.length - 1) {
    activeIndex += 1
    modalRefs.lightBoxImageRef.src = galleryItems[activeIndex].original
    return
  } else if (event.code === 'ArrowRight' && activeIndex === galleryItems.length - 1) {
    activeIndex = 0
    modalRefs.lightBoxImageRef.src = galleryItems[activeIndex].original
    return
  } else if (event.code === 'ArrowLeft' && activeIndex > 0) {
    activeIndex -= 1
    modalRefs.lightBoxImageRef.src = galleryItems[activeIndex].original
    return
  } else if (event.code === 'ArrowLeft' && activeIndex === 0) {
    activeIndex = galleryItems.length - 1
    modalRefs.lightBoxImageRef.src = galleryItems[activeIndex].original
    return
  }
}
