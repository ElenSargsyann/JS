// Task 4.1
// Hello, object
// javascript
// let user = {};  
// user.name = "John";  
// user.surname = "Smith";  
// user.name = "Peter";  
// delete user.name;

// Check for emptiness
// javascript
// function isEmpty(obj) {  
//   for (let key in obj) {  
//     return false;  
//   }  
//   return true;  
// }


// Sum object properties
// javascript
// let salaries = {  
//   John: 100,  
//   Ann: 160,  
//   Pete: 130  
// };  

// let sum = 0;  
// for (let key in salaries) {  
//   sum += salaries[key];  
// }



// Multiply numeric property values by 2
// javascript
// function multiplyNumeric(obj) {  
//   for (let key in obj) {  
//     if (typeof obj[key] === "number") {  
//       obj[key] *= 2;  
//     }  
//   }  
// }


//Task 4.4
//Using "this" in object literal
// function makeUser() {
//     return {
//       name: "John",
//       ref() {
//         return this;
//       }
//     };
//   }
  
//   let user = makeUser();
//   alert(user.ref().name); 
  
//Create a Calculator
//   let calculator = {
//     read() {
//       this.a = +prompt("Enter first number:", 0);
//       this.b = +prompt("Enter second number:", 0);
//     },
//     sum() {
//       return this.a + this.b;
//     },
//     mul() {
//       return this.a * this.b;
//     }
//   };
  
//   calculator.read();
//   alert(calculator.sum());
//   alert(calculator.mul());
  
//Chaining in Ladder Object
//   let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert(this.step);
//       return this;
//     }
//   };
  
//   ladder.up().up().down().showStep().down().showStep();
  


// Task 4.5
// function A() { return {}; }
// function B() { return {}; }

// let a = new A();
// let b = new B();

// alert(a == b); 


// function Calculator() {
//     this.read = function() {
//       this.a = +prompt("Enter a");
//       this.b = +prompt("Enter b");
//     };
    
//     this.sum = function() {
//       return this.a + this.b;
//     };
    
//     this.mul = function() {
//       return this.a * this.b;
//     };
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
  
//   alert("Sum = " + calculator.sum());
//   alert("Mul = " + calculator.mul());

  
//   function Accumulator(startingValue) {
//     this.value = startingValue;
    
//     this.read = function() {
//       this.value += +prompt("Enter a number");
//     };
//   }
  
//   let accumulator = new Accumulator(1); 
  
//   accumulator.read();
//   accumulator.read(); 
  
//   alert(accumulator.value);
  


