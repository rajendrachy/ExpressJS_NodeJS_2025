import readline from 'readline';
import fs from 'fs';


// we have ability  to read and write content
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



const fileCreation = () => {
  rl.question('Enter your file Name : ', (filename) => {
    rl.question("Enter the content for your file: ", (content) => {
    fs.writeFile(`${filename}.txt, `, content, (err) => {
      if(err) {
        console.err(`Error....., ${err.message}`);
      } else {
        console.log(`File "${filename}.txt" Create Successfully `);
      }
      rl.close();
    })
    })
  })
}


fileCreation();


