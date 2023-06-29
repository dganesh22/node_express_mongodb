// http module

const http = require('http')
let port = 3000

// node controller = function(req,res) {}

http.createServer(function (req,res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(`<div>
                <h1>Welcome to NODE http server module</h1>
                <p>this is our first message</p>
            </div>`)
}).listen(port)

console.log(`server is started running @ http://localhost:${port}`)

// ipV4 port num = 4 digits
// ipv6 port num = 5 digits