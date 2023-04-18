export default class Tab {
  #props
  #closeIcon
  #tab
  constructor(props, closeIcon, tab) {
    this.#props = props
    this.#closeIcon = closeIcon
    this.#tab = tab
  }

  render() {
    this.#tab = document.createElement('div')
    this.#tab.setAttribute('id', 'tab')
    const txt = document.createElement('p')
    txt.append(document.createTextNode('ll'))

    this.#closeIcon = document.createElement('i')
    this.#closeIcon.classList.add('fa-solid', 'fa-x')
    this.close()

    this.#tab.append(this.#closeIcon, txt)

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