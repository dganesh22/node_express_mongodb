// event emitter
// events module
const EventEmitter = require('events')

const x = new EventEmitter() // class instance / ref

// on =>  ref.on(title,callback) declare the event
// emit =>  ref.emit(title)  call the event

x.on('myResponse1', (name,email) => {
    console.log(`data received of user = ${name} and with email id = ${email}`)
})

x.on('myResponse2', () => {
    console.log('non param response method')
})

x.emit('myResponse2') 
 x.emit('myResponse1', "Ram", "Ram@gmail.com")