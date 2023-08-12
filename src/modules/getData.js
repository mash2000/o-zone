const getData = () => {
  return fetch('https://o-zone-42e77-default-rtdb.firebaseio.com/goods.json')
      .then((response) => {
        return response.json()
      })
}

export default getData