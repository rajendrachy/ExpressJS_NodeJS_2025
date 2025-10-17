const {MongoClient} = require("mongodb")


module.exports.connectMongo = async ()=>{
    try {
        const client = new MongoClient("mongodb://localhost:27017")
        await client.connect()
        let db = client.db("sectione-project")
        console.log('Database connected..')
        return db;
    } catch (error) {
        console.log(error)
    }
}












