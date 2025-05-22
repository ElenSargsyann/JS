//Task 5.1  

//  `undefined` cuyc kta


// Task 5.2

// let a = 1.23;


// let big = 1234567890123456789012345678901234567890n;


// let billion = 1e9;      
// let micro = 1e-6;        


// let num = 255;
// num.toString(16);  
// num.toString(2);   


// Math.round(3.6);  
// Math.floor(3.6);  
// Math.ceil(3.2);   
// Math.trunc(3.9);  


// let n = 1.23456;
// Math.round(n * 100) / 100;   


// n.toFixed(2); 



// 0.1 + 0.2 === 0.3; 

// +(0.1 + 0.2).toFixed(2) === 0.3; 


// isNaN(NaN);         
// isFinite("15");     
// isFinite("str");   


// parseInt("100px");       
// parseFloat("12.5em");    
// parseInt("a123");        


// parseInt("ff", 16);  


// Math.random();       
// Math.max(1, 3, 9);   
// Math.min(-1, 0, 3); 
// Math.pow(2, 10);     


// Task 5.3

// function ucFirst(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }
  
//   console.log(ucFirst("john")); 


//   function checkSpam(str) {
//     return /viagra|xxx/i.test(str); 
//   }
  

//   console.log(checkSpam('buy ViAgRA now')); 
//   console.log(checkSpam('free xxxxx')); 
//   console.log(checkSpam('innocent rabbit')); 
  

//   function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//       return str.slice(0, maxlength) + "…";
//     }
//     return str;
//   }
  

//   console.log(truncate("What I'd like to tell on this topic is:", 20)); 
//   console.log(truncate("Hi everyone!", 20)); 


//   function extractCurrencyValue(str) {
//     return parseFloat(str.slice(1)); 
//   }
  
 
//   console.log(extractCurrencyValue('$120')); 



  
// Task 5.4

// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;
// shoppingCart.push("Banana");


// alert(fruits.length); 



// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor(styles.length / 2)] = "Classics";
// alert(styles.shift()); 
// styles.unshift("Rap", "Reggae");
// alert(styles);


// let arr = ["a", "b"];

// arr.push(function() {
//   alert(this);
// });

// arr[2]();


// function sumInput() {
//     let numbers = [];
//     let sum = 0;
  
//     while (true) {
//       let value = prompt("Enter a number:", 0);
  
//       if (value === "" || value === null || isNaN(value)) {
//         break;
//       }
  
//       numbers.push(+value); 
//       sum += +value; 
//     }
  
//     return sum;
//   }
  
//   alert(sumInput());


//   function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let currentSum = 0;
  
//     for (let num of arr) {
//       currentSum += num;
//       maxSum = Math.max(maxSum, currentSum);
//       if (currentSum < 0) currentSum = 0;
//     }
  
//     return maxSum;
//   }
  
//   alert(getMaxSubSum([-1, 2, 3, -9])); 
//   alert(getMaxSubSum([2, -1, 2, 3, -9])); 
//   alert(getMaxSubSum([-1, 2, 3, -9, 11])); 
//   alert(getMaxSubSum([-2, -1, 1, 2])); 
//   alert(getMaxSubSum([100, -9, 2, -3, 5]));
//   alert(getMaxSubSum([1, 2, 3])); 
//   alert(getMaxSubSum([-1, -2, -3])); 



// Task 5.5

// function camelize(str) {
//     return str
//       .split('-')
//       .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
//       .join('');
//   }
  
//   function filterRange(arr, a, b) {
//     return arr.filter(item => item >= a && item <= b);
//   }
  
//   function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < a || arr[i] > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
//   }
  
//   let arr = [5, 2, 1, -10, 8];
//   arr.sort((a, b) => b - a);
//   alert(arr);
  
//   function copySorted(arr) {
//     return arr.slice().sort();
//   }
  
//   function Calculator() {
//     this.calculate = function(str) {
//       let [a, op, b] = str.split(' ');
//       a = +a;
//       b = +b;
//       if (op === '+') return a + b;
//       if (op === '-') return a - b;
//     };
//     this.addMethod = function(name, func) {
//       this[name] = func;
//     };
//   }
  
//   let john = { name: "John", age: 25 };
//   let pete = { name: "Pete", age: 30 };
//   let mary = { name: "Mary", age: 28 };
  
//   let users = [ john, pete, mary ];
//   let names = users.map(user => user.name);
//   alert(names);
  
//   let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));
  
//   function sortByAge(users) {
//     users.sort((a, b) => a.age - b.age);
//   }
  
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
  
//   function getAverageAge(users) {
//     return users.reduce((sum, user) => sum + user.age, 0) / users.length;
//   }
  
//   function unique(arr) {
//     return [...new Set(arr)];
//   }
  
//   function groupById(arr) {
//     return arr.reduce((obj, item) => {
//       obj[item.id] = item;
//       return obj;
//     }, {});
//   }



// Task 5.7

// function unique(arr) {
//     return [...new Set(arr)];
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
//   alert(unique(values));

  
//   function aclean(arr) {
//     let map = new Map();
//     arr.forEach(word => {
//       let sorted = word.toLowerCase().split('').sort().join('');
//       map.set(sorted, word);
//     });
//     return Array.from(map.values());
//   }
  
//   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//   alert(aclean(arr));

  
//   let map = new Map();
//   map.set("name", "John");
  
//   let keys = [...map.keys()];
//   keys.push("more");
//   alert(keys);
  


// Task 5.8

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//   ];
  
//   let readStatus = new WeakMap();
  
//   readStatus.set(messages[0], false);
//   readStatus.set(messages[1], false);
//   readStatus.set(messages[2], false);
  
//   readStatus.set(messages[0], true);
  
//   console.log(readStatus.get(messages[0]));
//   console.log(readStatus.get(messages[1]));
  


// Task 5.9

// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
