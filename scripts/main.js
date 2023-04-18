import Tab from "./Tab.js"
import { MediaMap } from "./data.js"

const ul = document.querySelector('ul').children

for (const entry of ul) {
  entry.addEventListener('click', (event) => {
    console.log()
    const tab = new Tab(entry.textContent, MediaMap[entry.textContent])
    document.body.append(tab.render())

    const main = document.querySelector('main')
    main.setAttribute('style', 'display:none')
  })

}

