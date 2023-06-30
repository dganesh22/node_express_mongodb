const { client } = require('./dbconnect')
const dbName = "userdb"

async function  main() {
    try {
       await client.connect()
       console.log('mongodb connected')
       const db = client.db(dbName)
       const collection = db.collection('users')
        const finResp = await  collection.deleteOne({email: "michel@gmail.com"}) /* deleteOne() - to delete single user data */
        console.log(`delete success..`, finResp)
    } finally {
       await client.close()
    }
}


main().catch(err => console.log(err.message))