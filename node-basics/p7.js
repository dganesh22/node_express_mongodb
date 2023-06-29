// cluser
const cluster = require('cluster') 

// isMaster => true = single thread

// isWorker => true = multi thread

if(cluster.isMaster) {
    console.log('node is running in single thread')
} else {
    console.log('no action')
}