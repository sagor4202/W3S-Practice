
// function name(p1, p2, p3) {
//     return ( 10 + 20 + 15)
// }
// console.log (name(
// ))

//!Before Arrow:
// let myFun = function(a,b) {return a * b}
// console.log(myFun(1,2));

//!With Arrow
// let myFun = (a,b) => a + b;

// console.log(myFun(10,30));


//!Local Variables
// function myFun() {
//     let carName = "BMW";
//     let text = "inside " + typeof carName + " " + carName + " " +"excute please";
//     return text
// }
// console.log(myFun());



// !Objects

//!একটা সাধারণ object
// const person = {
//   name: "Hasan",
//   age: 25,
//   country: "Bangladesh"
// };

// person.email = "erabbihasan@gmail.com"

// console.log(person);
// console.log(person.name, person.age);


//! Object এর ভিতরে Function
// let businessMan = {
//     name: "Emon",
//     age: 24,
//     address: "chandpur",
//     earning: function myFun() {
//         return "Hi earning is very month " + " " + this.age
//     }

// }

// console.log(businessMan.earning());
