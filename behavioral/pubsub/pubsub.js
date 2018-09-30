class TopicManager {
  constructor() {
    this.topics = {}
    this.subUid = -1
  }

  publish(topic, args) {
    if( !this.topics[topic] ) {
      return false
    }
    const subscribers = this.topics[topic] || []
    subscribers.forEach(s => s.onMessage(topic, args))
  }

  subscribe(topic, onMessage) {
    if( !this.topics[topic] ) {
      this.topics[topic] = []
    }
    const token = (++this.subUid).toString()
    this.topics[topic].push({token, onMessage})
    return token
  }

  unsubscribe(token) {
    for( let i in this.topics ) {
      for( let j in this.topics[i] ) {
        if( this.topics[i][j].token === token ) {
          this.topics[i].splice(j, 1)
          return token
        }
      }
    }
    return null
  }
}

const q = new TopicManager()
const messageLogger = (topic, data) => {
  console.log(`Logging: ${topic}: ${data}`)
}
q.publish('inbox/newMessage', 'Message 1')
const subscriberToken = q.subscribe('inbox/newMessage', messageLogger)
q.publish('inbox/newMessage', 'Message 2')
q.publish('inbox/newMessage', 'Message 3')
q.unsubscribe(subscriberToken)
q.publish('inbox/newMessage', 'Message 4')
