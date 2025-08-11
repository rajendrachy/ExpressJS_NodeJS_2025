// const http = require('http')
// const fs = require('fs')


// const server = http.createServer((request, response)=>{
//     if(request.url == "/"){
//         response.write("Home page")
//         response.end()
//     }else if(request.url == "/login"){
//         fs.readFile('./login.html','utf-8',(err,data)=>{
//             // response.setHeader('Content-Type', 'text/html')
//             // console.log(response.getHeader('Content-Type'))
//             response.writeHead(200,{'Content-Type': 'text/html'})
//             response.write(data)
//             response.end()
//         })
//     } else if(request.url == "/image"){
//         fs.readFile('./test.png',(err, data)=>{
//             if(!err){
//                 response.writeHead(200,{'content-type': 'image/png'})
//                 response.write(data)
//                 response.end()
//             }
//         })
//     }else{
//         response.write("404 Not found")
//         response.end()
//     }
// })


// server.listen(3000,()=>{
//     console.log('server started ...')
// })


// const http = require('http')
// const fs = require('fs')
// const querystring = require('querystring')

// const server = http.createServer((req, res)=>{
//     if(req.url == "/login" && req.method == "GET"){
//         fs.readFile('./login.html', (err, data)=>{
//             if(!err){
//                 res.writeHead(200, {'content-type': 'text/html'})
//                 res.write(data)
//                 res.end()
//             }
//         })
//     }else if(req.url == "/login" && req.method == "POST"){
//         let body = ""
//         let arr ;
//         req.on("data", (chunk)=>{
//             body += chunk.toString()
//         })
//         req.on('end', ()=>{
//             // console.log(querystring.parse(body))
//             fs.readFile('./data.json', "utf-8", (err, data)=>{
//                if(data.length != 0){
//                 arr = JSON.parse(data)
//                }else{
//                 arr = []
//                }
//                arr.push(querystring.parse(body))
//                fs.writeFile('./data.json', JSON.stringify(arr), (err)=>{
//                 if(!err){
//                     res.end('success')
//                 }
//                })
//             })
//         })
//     }
// })

// server.listen(3000, ()=>{
//     console.log('server started...')
// })


// const express = require('express')

// const app = express()

// app.use(express.urlencoded())

// app.get("/",(req, res)=>{
//     res.sendFile(__dirname + "/login.html")
// })

// app.get('/style.css', (req, res)=>{
//     res.sendFile(__dirname + "/public/style.css")
// })

// app.post("/sendData", (req, res)=>{
//     console.log(req.body)
// })

// app.listen(3000, ()=>{
//     console.log('server started...')
// })


const express = require('express')
const app = express()

app.use(express.urlencoded())
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res)=>{
    
    res.sendFile(__dirname + "/login.html")
    // // res.status(200).send({"name":"himanshu"})
    // res.json(123)
    // res.send("<h1>HOME PAGE</h1>")
})

// app.get('/style.css', (req, res)=>{
//     res.sendFile(__dirname + "/public/style.css")
// })


app.post("/sendData", (req, res)=>{
    console.log(req.body)
    res.end()
})

app.listen(3000, ()=>{
    console.log('server started...')
})