function MacBook() {
  this.cost = function() { return 997; }
  this.screenSize = function() { return 11.6; }
}
function Memory(macBook) {
  let v = macBook.cost()
  macBook.cost = function() { return v + 75 }
}
function Engraving(macBook) {
  let v = macBook.cost()
  macBook.cost = function() { return v + 200 }
}
function Insurance(macBook) {
  let v = macBook.cost()
  macBook.cost = function() { return v + 250 }
}
const mb = new MacBook()
Memory(mb)
Engraving(mb)
Insurance(mb)
console.log(`Cost: ${mb.cost()} screenSize: ${mb.screenSize()}`)
