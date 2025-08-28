const express = require('express')
const ejs = require('ejs')

const app = express()

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

let list = ["1", "2", "3"]

app.get("/", (req, res)=>{

    res.render("test", 
        {
            name: "<h1>chitkara</h1>", 
            listItem : list,
            var1: true,
        })



    // let listItem = list.map(elem => `<li>${elem}</li>`).join(" ")
    // console.log(listItem)
    // let html = `
    //     <ul>
    //         ${listItem}
    //     </ul>
    // `

    // res.send(html)
    // res.sendFile(__dirname + "/index.html")
})

app.get("/data", (req, res)=>{
    res.json({message: "hello world"})
})

app.listen(3000, ()=>{
    console.log('server started..')
})








