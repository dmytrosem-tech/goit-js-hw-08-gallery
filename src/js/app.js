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
import { galleryRef } from './refs'
import { modalRefs } from './refs'
console.log(modalRefs)

// Cоздаем гроздь и вешаем через шаблонные строки------------------------------------------------->
const createdGalleryItems = setGalleryItems(galleryItems)
import { setGalleryItems } from './append'
galleryRef.insertAdjacentHTML('beforeend', createdGalleryItems)

// Делегируем событие клика на родительский узел и открываем модалку по клику на картинке--------------------------------------------->
galleryRef.addEventListener('click', onGalleryClick)
import { onGalleryClick } from './callbacks'
console.log(onGalleryClick())

// Закрываем модалку кнопкой------------------------------------------------------------------------------->
modalRefs.btnModalCloseRef.addEventListener('click', onModalClose)

// Закрываем модалку через lightbox------------------------------------------------------------------------>
modalRefs.lightBoxOverlayRef.addEventListener('click', onLightBoxModalClose)
import { onLightBoxModalClose } from './callbacks'

// Закрываем модалку через ESC---------------------------------------------------------------->
import { onEscKeyPress } from './callbacks'

// Коллбэк открытия модалки------------------------------------------------------------------>
import { onModalOpen } from './callbacks'

// Коллбек закрытия модалки ----------------------------------------------------------------->
import { onModalClose } from './callbacks'

// Функция для действий по кнопкам "влево" и "вправо"---------------------------------------->
import { onLeftRightKeyPress } from './left-right'
