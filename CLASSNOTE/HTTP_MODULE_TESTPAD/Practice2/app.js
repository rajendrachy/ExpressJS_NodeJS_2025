const http = require('http');
const path = require('path');
const fs = require('fs');

// HTTP Module - Create a Basic API with POST and GET bookmark_border
// Simulate a basic API with in-memory storage.
// Task:
// a. On POST /notes, accept JSON like { "note": "Buy milk" } and add it to an array.
// b. On GET /notes, return all stored notes as JSON.
// c. Return 400 if JSON is invalid.


let notes = []; // In-memory storage for notes

const server = http.createServer((req, res) => {

    if (req.method === 'POST' && req.url === '/notes') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // Convert Buffer to string
        });

        req.on('end', () => {
            try {
                const note = JSON.parse(body); // Parse JSON
                if (note.note) {
                    notes.push(note.note); // Add note to array
                    res.writeHead(201, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Note added successfully' }));
                } else {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Invalid note format' }));
                }
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    } else if(req.method === 'GET' && req.url === '/notes') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(notes)); // Return all notes as JSON
    }
})

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
})


