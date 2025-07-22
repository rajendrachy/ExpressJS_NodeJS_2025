//qn 
// You are required to write a JavaScript function that simulates the backend login process.

// Requirements:
// The function should accept one argument, which is an object containing username and password.

// Example input:

// { username: 'john', password: '1234' }

// The system has a predefined array of user objects like this:

// const users = [
//     { username: 'john', password: '1234' },
//     { username: 'alice', password: 'abcd' },
//     { username: 'bob', password: 'pass' }
// ];

// Your function should:

// Check if the username exists in the users array.

// If not found, return the message:
//  "Username not found"

// If the username exists but the corresponding password does not match, return:
//  "Invalid password"

// If both username and corresponding password match, return:
//  "Login success"








const users = [
    { username: 'john', password: '1234' },
    { username: 'alice', password: 'abcd' },
    { username: 'bob', password: 'pass' }
];

function login(input) {
    let result = "Username not found"; // Default message

    users.forEach(user => {
        if (user.username === input.username) {
            if (user.password === input.password) {
                result = "Login success";
            } else {
                result = "Invalid password";
            }
        }
    });

    return result;
}


console.log(login({ username: 'john', password: '123' }));





