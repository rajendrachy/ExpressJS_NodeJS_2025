// You are given an array of employee objects, but some employees may have incomplete salary details.
// const employees = [
//     { name: 'John', salary: { basic: 20000, bonus: 5000 } },
//     { name: 'Alice', salary: { basic: 25000 } }, // No bonus field
//     { name: 'Bob' }, // No salary field
//     { name: 'Carol', salary: { basic: 30000, bonus: 10000 } }
// ];
// Task:
// Write a function getEmployeeSalary(employeeName) that accepts the employee's name as an argument.
// The function should:
// Return the total salary (basic + bonus) of the employee.


// If the bonus is missing, consider it as 0.


// If salary details are missing, return: "Salary details not available for [employeeName]"


// If employee does not exist in the array, return: "Employee [employeeName] not found"



const employees = [
    { name: 'John', salary: { basic: 20000, bonus: 5000 } },
    { name: 'Alice', salary: { basic: 25000 } }, // No bonus field
    { name: 'Bob' }, // No salary field
    { name: 'Carol', salary: { basic: 30000, bonus: 10000 } }
];


function getEmployeeSalary(employeeName) {
   const employ = employees.find(emp => emp.name === employeeName);

   if(!employ) {
    return `Employ ${employeeName} Not found`;
   }

   if(!employ.salary) {
    return `Salary details not available for ${employeeName}`;
   }
   

   const basic = employ.salary.basic || 0;
   const bonus = employ.salary.bonus || 0;

return `The result is: ${basic} + ${bonus} = ${basic + bonus}`;


}

console.log(getEmployeeSalary('John'));






