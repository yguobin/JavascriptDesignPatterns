const simpleModule = (function() {
  let counter = 0;
  return {
    incrementCounter: () => { ++counter },
    resetCounter: () => { counter = 0 },
    getCounter: () => { return counter }
  }
})();

simpleModule.incrementCounter()
simpleModule.incrementCounter()
console.log(`Counter after 2 increments: ${simpleModule.getCounter()}` )
simpleModule.resetCounter()
console.log(`Counter after reset: ${simpleModule.getCounter()}` )
