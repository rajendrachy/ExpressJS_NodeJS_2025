const express = require("express");

const app = express();


const users = [
  { 
    id: 1, name: "User1"
   },
  { 
    id: 2, name: "User2" 
  },
  {
     id: 3, name: "User3" 
    },
  { 
    id: 4, name: "User4" 
  },
  { 
    id: 5, name: "User5" 
  },
  { 
    id: 6, name: "User6" 
  },
  { 
    id: 7, name: "User7" 
  },
  {
     id: 8, name: "User8"
     },
  { 
    id: 9, name: "User9" 
  },
  {
     id: 10, name: "User10" 
    }
];


//paginate this user array

app.get("/user", (req, res) => {

  const page = parseInt(req.query.page) // Convert string to integer
  const limit = parseInt(req.query.limit);


  
  console.log(page);


  res.json(users)
})

app.listen(3000, () => {
  console.log("Server started");

})






