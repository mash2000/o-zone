import { saleFilter, searchFilter } from "./filters"
import load from "./load"
import renderGoods from "./renderGoods"

const sale = () => {
  const checkLabel = document.getElementById('discount-checkbox')

  checkLabel.addEventListener('click', (e) => {

    const check = document.querySelector('.filter-check_checkmark')

    check.classList.toggle('checked')

    if (check.classList.contains('checked')){
      load().then((data) => {
        renderGoods(saleFilter(data))
      })
    } else {
      load().then((data) => {
        renderGoods(searchFilter(data, ''))
      })
    }
  })
}

export default sale