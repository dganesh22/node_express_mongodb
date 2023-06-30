const { MongoClient, ServerApiVersion  }  = require('mongodb')

const uri = "mongodb+srv://aprilbep2023:test1234@cluster0.hm5vgyw.mongodb.net/?retryWrites=true&w=majority"

// const uri = "mongodb://localhost:27017"


const client = new MongoClient(uri, {
    serverApi: {
        version:ServerApiVersion.v1,
        deprecationErrors: true,
        strict: true
    }
})

module.exports = { client }

// async function  main() {
//     try {
//         await client.connect()

//         console.log(`mongodb connected`)
//     } finally {
//        await client.close()
//     }
// }

// main().catch(err => console.log(err.message))