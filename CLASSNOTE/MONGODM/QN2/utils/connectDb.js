const {MongoClient} = require("mongodb");

module.exports.connectMongo = async() => {
     try {
  const client = new MongoClient("mongodb://localhost:27017/testing_rc");
   await client.connect();
   let db = client.db("testingproject");
   console.log("Database connected");
   return db;

     }  catch(error) {
      console.log(error);
     }
}








