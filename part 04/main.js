// !Loop Type	Description
// for	     = Iterates over values and expressions
// while     = Iterates over a condition
// do...while= Iterates over a condition
// for...in  =	Iterates over the properties of an Object
// for...of  =	Iterates over array like objects
// forEach() = Iterates over each element in an Array

// !For loops 
// for (let i = 0; i <= 5; i++){
//     console.log(i);
// }

// let massage = "";
// for ( let i = 0; i <=5; i++){
//     massage += "The number is " + i + "<br>";
// }

// document.getElementById('demo').innerHTML = massage;


// let fruits = ["Apple", "Mango", "Banana"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log("This is fruits list " + fruits[i]);
    
// }

// let sum = 0;
// for ( let i = 1; i <= 10; i++) {
//     sum +=i
// }

// console.log(sum);


// !while Loop

// let i = 0;
// while (i < 5 ){
//     console.log(i);
//     i++
// }


// 2. even number প্রিন্ট
// let i = 2
// while (i <= 100 ) {
//     console.log(i);
//     i += 2; 
// }



// 3. array traverse
// let numbers = [3, 6, 9, 12];
// let j = 0;
// while (j < numbers.length) {
//   console.log(numbers[j]);
//   j++;
// }


//! do loops 

// a = 0;

// do {
//     console.log(a);
//     a++
// } while ( a <= 5)

// let person = {name: "Rahim", age: 25, city: "Dhaka"};

// for (let key in person) {
//     console.log(key + ":" + person[key]);
    
// }

// let colors = ["Red", "Green", "Blue"]

// for ( let index in colors){
//     console.log(index + ":" + colors[index]);
// }

// let student = {id: 1, marks: {math: 80, eng: 70}};
// for (let key in student){
//     console.log(key + ":", student[key]); 
// }

// for...of Loop

// 1. array values
// let nums = [10, 20, 30];
// for (let val of nums) {
//   console.log(val);
// }

//  2. string characters
// let str = "Hello";
// for (let ch of str) {
//   console.log(ch);
// }

// 3. set values
// let unique = new Set([1, 2, 2, 3, 4]);
// for (let val of unique) {
//   console.log(val);
// }
