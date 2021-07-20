export function onGalleryClick(event) {
  event.preventDefault()

  const target = event.target

  if (target.nodeName !== 'IMG') return
  onModalOpen()
}

let activeIndex = 0
const imagesSrcArr = []
const imagesArr = document.querySelectorAll('img')
export function onModalOpen() {
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

export function onLightBoxModalClose(event) {
  if (event.currentTarget === event.target) {
    onModalClose()
  }
}

export function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onModalClose()
  }
}
export function onModalClose(event) {
  modalRefs.lightBoxRef.classList.remove('is-open')
  modalRefs.lightBoxImageRef.src = ''
  window.removeEventListener('keydown', onEscKeyPress)
  window.removeEventListener('keydown', onLeftRightKeyPress)
}

// export let activeIndex = 0
// export const imagesSrcArr = []
// export const imagesArr = document.querySelectorAll('img')
// export function onModalOpen() {
//   imagesArr.forEach(img => {
//     const imageSrc = img.src
//     imagesSrcArr.push(imageSrc)
//     if (img.src === event.target.src) {
//       activeIndex = imagesSrcArr.indexOf(event.target.src)
//     }
//   })

//   modalRefs.lightBoxRef.classList.add('is-open')
//   modalRefs.lightBoxImageRef.src = event.target.getAttribute('data-source')
//   modalRefs.lightBoxImageRef.alt = event.description
//   window.addEventListener('keydown', onEscKeyPress)
//   window.addEventListener('keydown', onLeftRightKeyPress)
// }
