const basketModule = () => {
  const basket = []
  function doSomethingPrivate() { }
  return {
    addItem: (values) => { basket.push(values) },
    getItemCount: () => { return basket.length },
    doSomething: doSomethingPrivate,
    getTotal: () => {
      return basket.reduce((total, item) => { return total + item.price }, 0)
    },
  }
}

let busket1 = basketModule()
busket1.addItem({
  item: 'bread',
  price: 0.5,
})
busket1.addItem({
  item: 'buffer',
  price: 0.3,
})
console.log(`busket1 items: ${busket1.getItemCount()}, total: ${busket1.getTotal()}`)

let busket2 = basketModule()
busket2.addItem({
  item: 'Book',
  price: 1.0,
})
console.log(`busket1 items: ${busket2.getItemCount()}, total: ${busket2.getTotal()}`)
