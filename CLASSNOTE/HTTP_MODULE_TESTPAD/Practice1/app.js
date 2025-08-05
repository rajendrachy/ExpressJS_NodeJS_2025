const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
      if(req.url == '/public/style.css') {
         fs.readFile(path.join(__dirname , 'public', 'style.css'), 'utf-8', (err, data) => {
           if(!err)  {
            // console.log(data);
             res.write(data);
            res.end();
           }
         })
      } else {
        res.end("404 not found");
      }
})





server.listen(3000, () => {
  console.log('Server started');
  
})


