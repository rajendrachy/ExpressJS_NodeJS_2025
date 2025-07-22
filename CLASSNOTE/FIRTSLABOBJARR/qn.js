// let arr1 = [1,2 ,[3, 4, 5], 6];
// let arr2 = [...arr1];
// arr2[2][1] = 10;
// console.log(arr1);



let arr1 = [1,2,[3,4,5],6];
let arr2 = [...arr1];
// arr2[2[1]] = 10;
arr2[2][1] = 10;
// arr2[2][1] = 10; // this will change the original array 
console.log(arr1);

