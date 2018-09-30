const CarManager = {
  requestInfo: function(model, id) {
    return `The information for ${model} with ID ${id} is foobar`
  },
  buyVehicle: function(model, id) {
    return `You have successfully purchased item ${id}, a ${model}`
  },
  arrangeViewing: function(model, id) {
    return `You have successfully booked a viewing of ${model} (${id})`
  },
  execute: function(name) {
    return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1))
  }
}

console.log(CarManager.execute("arrangeViewing", 'Ferrari', '14523'))
console.log(CarManager.execute('requestInfo', 'Ford Mondeo', '54323'))
console.log(CarManager.execute('buyVehicle', 'Ford Escort', '34232'))
