// large content text file

const fs = require('fs')

for(let i=0; i< 500; i++) {
    fs.writeFileSync('./content/sub/big.txt', `Hello world ${i}\n`, {flag: 'a'})
}

console.log('write completed')