import readline from 'readline'; // It is module which help to interact with CLI


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


const todos = [];


const showMenu = () => {
  console.log("\n 1: Add a Task")
  console.log(" 2: View Tasks")
  console.log(" 3: Exit")
  rl.question("Choose as option", handleInput);

}

const handleInput = (option) => {
       if(option == 1) {
        rl.question("Enter a task: ", (task) => {
          todos.push(task);
          console.log(`Task "${task}" added successfully!`);
          showMenu();
        });
       } else if(option == 2) {
        if(todos.length === 0) {
          console.log("No tasks available.");
        } else {
          console.log("Tasks:");
          todos.forEach((task, index) => {
            console.log(`${index + 1}: ${task}`);
          });
        }
        showMenu();

       } else if(option == 3) {
        console.log("Exiting the application. Goodbye!");
        rl.close();
       } else {
        console.log("Invalid option. Please try again.");
        showMenu();
       }
}

showMenu();



