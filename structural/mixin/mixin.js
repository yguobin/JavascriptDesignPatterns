function Car(settings) {
  this.model = settings.model || 'no model provided'
  this.color = settings.color || 'no color provided'
}

function Mixin() {}
Mixin.prototype = {
  driveForward: () => { console.log('drive forward')},
  driveBackward: () => { console.log('drive backward')},
  driveSideways: () => { console.log('drive sideways')}
}

function augument(receivingClass, givingClass) {
  if (arguments[2]) {
    for( let i=2; i<arguments.length; i++ ) {
      receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]]
    }
  } else {
    for( var methodName in givingClass.prototype ) {
      if( !Object.hasOwnProperty(receivingClass.prototype, methodName) ) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName]
      }
    }
  }
}

augument(Car, Mixin, 'driveForward', 'driveBackward')
const myCar = new Car({
  model: 'Ford Escort',
  color: 'blue',
})
myCar.driveForward()
myCar.driveBackward()

augument(Car, Mixin)
const mySportsCar = new Car({
  model: 'Porsche',
  color: 'red',
})
mySportsCar.driveSideways()
