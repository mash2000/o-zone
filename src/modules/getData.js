'use strict';

export default getData;

function getData() {
    return fetch('https://o-zone-42e77-default-rtdb.firebaseio.com/goods.json')
        .then((res) => res.json());
}