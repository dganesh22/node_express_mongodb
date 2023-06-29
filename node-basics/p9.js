// dgram => used for communication through UDP (user defined protocal)
// IPv4 port


// listening data 

const dgram = require('dgram')
const socket = dgram.createSocket('udp4')

// node event => on(name,callback)
socket.on("message", function (msg,err) {
    if(err)
        console.log(err)
    console.log('message =', msg.toString())
})

socket.bind(3300)