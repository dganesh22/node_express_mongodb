const net = require('net')

const server = net.createServer(function (socket) {
    socket.end("My new message is here.")
})

// is used to handle run time error 
server.on("error", (err) => {
    if (err) throw err;
});

server.listen(() => {
    let address = server.address()
    console.log(`server port %j`, address); // ipV6
});