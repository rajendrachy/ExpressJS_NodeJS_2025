const express = require("express")
const ejs = require("ejs")
const {ObjectId} = require("mongodb")
const {connectMongo} = require("./utils/connectDb")

const app = express()

app.use(express.urlencoded())

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

let db ;

connectMongo()
.then(data => db = data)

app.get("/", async (req, res)=>{
    try {
        let data = await db.collection("students").find().toArray()
        res.render("dashboard", {students: data})
    } catch (error) {
        
    }
})



app.post("/add-student", async (req, res)=>{
    try {
       await db.collection("students").insertOne(req.body)
       res.redirect("/")
    } catch (error) {
        res.send(error)
    }
})

app.post("/filter", async(req, res)=>{
    try {
       
        let data = await db.collection("students").find(
            {marks: {$gt : req.body.minMarks}}).toArray()
        res.render("dashboard", {students: data})
    } catch (error) {
        res.send(error)
    }
})

app.delete("/delete/:id", async (req, res)=>{
    console.log(req.params.id)
    await db.collection("students").deleteOne({_id : new ObjectId(req.params.id)})
    res.redirect("/")
})


app.listen(3000, ()=>{
    console.log('server started..')
})