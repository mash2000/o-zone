const postData = () => {
  return fetch('https://o-zone-42e77-default-rtdb.firebaseio.com/goods/24', {
    method: 'DELETE'
  })
  // return fetch('https://o-zone-42e77-default-rtdb.firebaseio.com/goods.json', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         id: 24,
  //         title: "Игра Onrush (PS4 Sony)",
  //         price: 1794,
  //         sale: true,
  //         img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
  //         category: "Игры и софт"
  //       }),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8'
  //       },
  //     })
  //     .then(response => response.json())
}

export default postData