const express = require("express")
const ejs = require("ejs")
const {ObjectId} = require("mongodb")
const {connectMongo} = require("./utils/connectDb")

const app = express()

app.use(express.urlencoded())

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

let db;

connectMongo()
.then(data => db = data)

app.get("/", async (req, res)=>{
    try {
        let data = await db.collection("students").find().toArray()
        res.render("dashboard", {students: data})
    } catch (error) {
        console.log(error);
    }
})







app.post("/add-student", async (req, res)=>{
    try {
        let {name, section, marks} = req.body;
       await db.collection("students").insertOne({name, section, marks: Number(marks)})
       res.redirect("/")
    } catch (error) {
        res.send(error);
    }
})




app.post("/filter", async(req, res)=>{
    try {
       
        let data = await db.collection("students").find(
            {marks: {$gt : Number(req.body.minMarks)}}).toArray()
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


app.get("/update-form/:id",async (req, res)=>{
    try {
        console.log(req.params.id)
        let data = await db.collection("students").
        find({_id: new ObjectId(req.params.id)}).toArray()
        res.render("updateform", {student: data})
    } catch (error) {
        console.log("error")
    }
})






app.post("/update-student",async (req, res)=>{
    try {

       await db.collection("students").updateOne(
        {_id: new ObjectId(req.body.id)},
        {$set :{
            name: req.body.name,
            section: req.body.section,
            marks: Number(req.body.marks)
        }}
       ) 

       res.redirect("/")
    } catch (error) {
        console.log("error")
    }
})


app.listen(3000, ()=>{
    console.log('server started..')
})
