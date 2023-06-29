const numbers = require('./content/numbers')
const names = require('./content/names')
const methods = require('./content/method')

methods.sayHi(names.user1)
methods.sayHi(names.user2)
methods.sayHi(names.user3)

console.log( "sum = ", methods.sum(numbers.x,numbers.y,numbers.z))