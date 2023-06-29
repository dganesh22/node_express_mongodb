// os module

const os = require('os')

const user = os.userInfo()
console.log('user info =', user)

console.log('uptime of system =', os.uptime() , 'ms')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    arch: os.arch(),
    cpu: os.cpus(),
    avgLoad: os.loadavg()
}

console.log('current os =', currentOS)