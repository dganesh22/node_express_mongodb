const http = require('http')
const fs = require('fs')
const port =3200

http.createServer((req,res) => {
    const fStream = fs.createReadStream('./content/sub/big.txt', 'utf-8')
    fStream.on('open', () => {
        fStream.pipe(res)
    })

    fStream.on('error', (err) => {
        res.end(err)
    })
}).listen(port)

console.log(`server is running @ http://localhost:${port}`)