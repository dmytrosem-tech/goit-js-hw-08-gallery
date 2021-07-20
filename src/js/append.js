export function setGalleryItems(gallery) {
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

// // Создаем и вешаем гроздь из <li> со ссылкой и картинкой внутри----------------------------->
// const itemsToAppend = galleryItems.map(item => {
//  const galleryItemElement = document.createElement('li')
//   galleryItemElement.classList.add('gallery__item')
//   // galleryItemElArr.push(galleryItemElement)

//   const galleryLink = document.createElement('a')
//   galleryLink.classList.add('gallery__link')
//   galleryLink.href = item.original

//   const galleryImage = document.createElement('img')
//   galleryImage.classList.add('gallery__image')
//   galleryImage.src = item.preview
//   galleryImage.setAttribute('data-source', item.original)
//   galleryImage.alt = item.description
//   console.log(galleryItemElArr);

//   galleryLink.appendChild(galleryImage)
//   galleryItemElement.appendChild(galleryLink)
//   // galleryRef.appendChild(galleryItemEl)
// })
