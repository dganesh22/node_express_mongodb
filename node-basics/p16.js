const path = require('path')

console.log('path sep =', path.sep)

// join path = /content/sub/test.txt
const filePath= path.join(`/content/`, 'sub', 'test.txt')
console.log('filePath =', filePath)


// base path  = test.txt
const base = path.basename(filePath)
console.log('base path =', base)

// absolute path
const absolute = path.resolve(__dirname, 'content', 'sub' , 'test.txt')
console.log('absolute path =', absolute)