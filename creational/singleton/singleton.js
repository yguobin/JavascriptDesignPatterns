const singleton = function() {
  let instance;
  let init = () => {
    let privateMethod = () => { console.log('I am private') }
    let privateVar = 'I am also private'
    let privateRandomVar = Math.random()
    return {
      publicMethod: function() {
        console.log('Public can see me!')
      },
      publicProperty: 'I am also public',
      getRandomaNumber: () => { return privateVar },
    }
  }
  return {
    getInstance: () => {
      if( !instance ) {
        instance = init();
      }
      return instance
    }
  }
}()

const singleA = singleton.getInstance()
const singleB = singleton.getInstance()
console.log(singleA === singleB)
console.log(singleA.getRandomaNumber() === singleB.getRandomaNumber())
