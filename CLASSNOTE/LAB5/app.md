# Header
-  res.setHeader():	When you want to set headers gradually or conditionally
- res.writeHead():	When you want to send headers and status code all at once


# What is a URL Encoder?
- A URL encoder is a mechanism that converts text (like spaces, symbols, or special characters) into a safe format for URLs.

# Input string:
- Hello World!@#&
- URL encoded:
- Hello%20World%21%40%23%26





# What is querystring?
- It's a Node.js core module that provides utilities for parsing and formatting URL query strings. For example:



## Example: Parsing a query string
- const qs = require('querystring');



- const parsed = qs.parse('name=John&age=30');
- console.log(parsed);
- Output: { name: 'John', age: '30' }




