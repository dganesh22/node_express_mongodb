const { readFile, writeFile } = require('fs')

// asynchronous 
console.log('started')

// first file read
readFile('./content/sub/first.txt', 'utf-8', (err,res1) => {
    if(err) {
        console.log(err)
        return 
    }
    const first = res1
    // second file read
    readFile('./content/sub/second.txt', 'utf-8', (err,res2) => {
        if(err) {
            console.log(err)
            return
        }
        const second = res2
        // write file
        writeFile('./content/sub/write-async.txt', `Here is Asynchronous result = \n ${first} \n\n ${second}`, (err,res3) => {
            if(err) {
                console.log(err)
                return
            }
            console.log('completed')
        })
    })
})