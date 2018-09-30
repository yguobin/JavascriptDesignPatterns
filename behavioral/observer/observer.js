class Subject {
  constructor() {
    this.observers = []
    this.counter = 0
  }
  addObserver(observer) {
    this.observers.push(observer)
    console.log(`Observer ${observer.name} added`)
  }
  removeObserver(observer) {
    this.observers = this.observers.filter(o => o !== observer)
  }
  notify() {
    this.observers.forEach(o => o.update(this))
  }
  startTimer() {
    setInterval((() => {
      this.counter++
      this.notify()
    }).bind(this), 1000)
  }
}

class Observer {
  constructor(name, mul, ttl) {
    this.name = name
    this.mul = mul
    this.ttl = ttl
  }
  update(s) {
    console.log(`${this.name} multiplied the counter to ${s.counter * this.mul}`)
    if( s.counter >= this.ttl ) {
      console.log(`${this.name} had enough, exiting...`)
      s.removeObserver(this)
    }
  }
}

const subject = new Subject()
subject.addObserver(new Observer('observer1', 2, 10))
subject.addObserver(new Observer('observer2', 3, 20))
subject.startTimer()
