

# express.json() is a built-in middleware function in Express.js that parses incoming requests with JSON payloads. It makes the parsed data available on req.body.

 #What it does

- Looks at the Content-Type header of incoming requests.
- If it’s application/json, it reads the request body.
- Converts the JSON string into a JavaScript object.
- Places the result on req.body.



# Example
const express = require('express');
const app = express();

// Enable JSON body parsing
app.use(express.json());

app.post('/user', (req, res) => {
  console.log(req.body); // Parsed JSON
  res.send('Received!');
});

app.listen(3000);






# Without express.json()

- req.body would be undefined for JSON POST requests.

- You’d need to manually parse the request stream.

# Options

- You can pass options similar to body-parser:

app.use(express.json({
  limit: '1mb',       // max body size
  strict: true,       // only parse objects/arrays
  reviver: (key, val) => val,
}));

# When you need it

# Use express.json() when:

- Your API receives JSON in POST/PUT/PATCH requests.

- You’re building REST or JSON-based APIs.








# Video Link :->  What is Express.json : -> https://youtu.be/TrEwaT4I2yU => yt_link
















