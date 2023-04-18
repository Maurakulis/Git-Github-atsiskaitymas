import { Lorem } from "./data.js"

export default class Tab {
  #heading
  #mediaContentUri
  #closeIcon
  #tab
  constructor(heading, mediaContentUri) {
    this.#heading = heading
    this.#mediaContentUri = mediaContentUri
  }

  render() {
    this.#tab = document.createElement('div')
    this.#tab.setAttribute('id', 'tab')
    const headingText = document.createElement('h3')
    headingText.append(document.createTextNode(this.#heading))

    this.#closeIcon = document.createElement('i')
    this.#closeIcon.classList.add('fa-solid', 'fa-xmark')
    this.close()

    const headingDiv = document.createElement('div')
    headingDiv.classList.add('headingDiv')
    headingDiv.append(headingText, this.#closeIcon)

    let mediaContent
    if (this.#mediaContentUri.includes('.mp4')) {
      mediaContent = document.createElement('video')
      mediaContent.setAttribute('autoplay', '')

    } else {
      console.log('foto')
      mediaContent = document.createElement('img')
    }
    const mediaDiv = document.createElement('div')
    mediaDiv.classList.add('mediaDiv')

    mediaContent.setAttribute('src', this.#mediaContentUri)
    mediaDiv.append(mediaContent)

    const ptext = document.createElement('p')
    ptext.innerHTML = Lorem

    this.#tab.append(headingDiv, mediaDiv, ptext)

    return this.#tab
  }

  close() {
    this.#closeIcon.addEventListener('click', () => {
      this.#tab.remove()
      const main = document.querySelector('main')
      main.setAttribute('style', 'display:run-in')

    })
  }
}