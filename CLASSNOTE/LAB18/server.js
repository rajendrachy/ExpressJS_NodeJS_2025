const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.static('uploads'))

const upload = multer({dest: "./uploads"})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/upload',upload.array("test-upload", 2), (req, res)=>{
    console.log(req.files)
    // res.send(<img src="/${req.file.filename}">)
    res.redirect('/')
})


app.listen(3000, (req,res)=>{
     console.log("Server Started");
})














