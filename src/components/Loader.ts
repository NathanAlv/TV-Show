const $ = document.querySelector.bind(document)

const loaderArea = <HTMLDivElement>$('#loader-area')

export const showLoader = () => {
  const src = '/img/Pacman.svg'
  const htmlLoader = `<img src="${src}" alt="Aguarde um momento" />`
  loaderArea.innerHTML = htmlLoader
}

export const hideLoader = () => {
  loaderArea.innerHTML = ''
}