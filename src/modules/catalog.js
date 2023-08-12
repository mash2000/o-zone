import { categoryFilter } from "./filters"
import load from "./load"
import renderGoods from "./renderGoods"

const catalog = () => {
  const btnCatalog = document.querySelector('.catalog-button > button')
  const catalogModal = document.querySelector('.catalog')
  const catalogModalItems = catalogModal.querySelectorAll('li')

  let isOpen = false

  btnCatalog.addEventListener('click', () => {
    isOpen = !isOpen

    if (isOpen){
      catalogModal.style.display = 'block'
    } else {
      catalogModal.style.display = ''
    }
  })

  catalogModalItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent

      load().then((data) => {
        renderGoods(categoryFilter(data, text))
      })
    })
  })
}

export default catalog