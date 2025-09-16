const express = require("express")
const {MongoClient} = require("mongodb")
const app = express()
let db;
async function connectDb(){
    try {
        const client = new MongoClient("mongodb://localhost:27017")
        await client.connect()
        db = client.db("sectionE")
        console.log("database connected..")
    } catch (error) {
        console.log(error)    
    }
}

connectDb()


app.get("/seed", async (req, res)=>{
   let dbresponse = await db.collection("employee").insertMany(
        [
  { empid: 101, name: "Amit Kumar" },
  { empid: 102, name: "Priya Sharma" },
  { empid: 103, name: "Rohit Gupta" },
  { empid: 104, name: "Sneha Joshi" },
  { empid: 105, name: "Vikas Singh" }
]
    )
    res.send(dbresponse)
})

app.get("/view", async (req, res)=>{
    let data = await db.collection("employee").find().toArray()
    res.send(data)
})

app.get("/delete/:id", async (req, res)=>{
    const clientId = Number(req.params.id)
    // await db.collection("employee").deleteOne({empid : clientId})
    await db.collection("employee").deleteMany({empid : {$gt : clientId}})
    res.redirect("/view")

})



app.get("/update/:id/:name", async (req, res)=>{
     const clientId = Number(req.params.id)
    //  await db.collection("employee").updateOne({empid: clientId}, {$set : {name : "Himanshu"}})
     await db.collection("employee").updateMany(
        {empid: {$lt : clientId}}, 
        {$set : {name : req.params.name}}
    )

    
     res.redirect("/view")
})

app.listen(3000, ()=>{
    console.log("Server started...")
})




