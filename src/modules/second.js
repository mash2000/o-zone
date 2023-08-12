import load from "./load";
import postData from "./postData";
import renderGoods from "./renderGoods";

const second = () => {
  const cartBtn = document.getElementById('cart')

  load().then((data) => {
    renderGoods(data)
  })
}

export default second