import Tab from "./Tab.js"

const ul = document.querySelector('ul').children
console.log(ul)

for (const entry of ul) {
  entry.addEventListener('click', () => {
    const tab = new Tab(entry)
    document.body.append(tab.render())

    const main = document.querySelector('main')
    main.setAttribute('style', 'display:none')
  })

}

