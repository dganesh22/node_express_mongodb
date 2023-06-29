const vm = require('vm')

let user = {
    name: "Raj",
    email: "raj@gmaill.com",
    mobile: "998877445566"
};

console.log('before =', user)

vm.createContext(user)
vm.runInContext(`name="Manoj";email="manoj@gmail.com"`, user)

console.log('after =', user)