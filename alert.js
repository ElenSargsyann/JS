//Task 2.1
alert("I am JavaScript!");

//Task 2.4
//let admin, name; 
//name = "Johny"; 
//admin = name; 
//alert(admin); 

//let ourPlanet = "Earth"; 
//let currentVisitor = "John"; 

//const BIRTHDAY = '18.04.1982'; 

//const age = someCode(BIRTHDAY); 

//Task 2.5
//let name = "Ilya";

//alert( `hello ${1}` ); 

//alert( `hello ${"name"}` ); 
//alert( `hello ${name}` ); 


//Task 2.8
//let a = 1, b = 1;

//let c = ++a; 
//let d = b++; 

//console.log(a); 
//console.log(b); 
//console.log(c); 
//console.log(d); 

//let a = 2;

//let x = 1 + (a *= 2); 


//console.log(a); 
//console.log(x); 

//console.log("" + 1 + 0);      
//console.log("" - 1 + 0);      
//console.log(true + false);    
//console.log(6 / "3");          
//console.log("2" * "3");        
//console.log(4 + 5 + "px");     
//console.log("$" + 4 + 5);     
//console.log("4" - 2);         
//console.log("4px" - 2);       
//console.log("  -9  " + 5);   
//console.log("  -9  " - 5);    
//console.log(null + 1);         
//console.log(undefined + 1); 
//console.log(" \t \n" - 2);    

//let a = prompt("First number?", 1);
//let b = prompt("Second number?", 2);

//alert(Number(a) + Number(b)); 

//Task 2.9
//1)true
//2)false
//3)true
//4)true
//5)false
//6)false
//7)false

//Task 2.10
//if ("0") {
//    alert( 'Hello' );
//  }

//let name = prompt('What is the “official” name of JavaScript?', '');

//if (name == 'ECMAScript') {
//  alert('Right!');
//} else {
//  alert("You don’t know? ECMAScript!");
//}

//let number = prompt('Enter a number:', '');

//if (number > 0) {
//  alert(1);
//} else if (number < 0) {
//  alert(-1);
//} else {
//  alert(0);
//}


//let result = (a + b < 4) ? 'Below' : 'Over';

//let message = (login == 'Employee') ? 'Hello' :
//              (login == 'Director') ? 'Greetings' :
//              (login == '') ? 'No login' : '';


//Task 2.11
//alert( null || 2 || undefined );


//alert( alert(1) || 2 || alert(3) );


//alert( 1 && null && 2 );


//alert( alert(1) && alert(2) );


//alert( null || 2 && 3 || 4 );


//if (age >= 14 && age <= 90) {

//  }
  
  
//  if (!(age >= 14 && age <= 90)) {
    
//  }

  
//if (-1 || 0) alert( 'first' );  
//if (-1 && 0) alert( 'second' ); 
//if (null || -1 && 1) alert( 'third' ); 


//let login = prompt('Enter your login:');

//if (login == 'Admin') {
//  let password = prompt('Enter your password:');
  
//  if (password == 'TheMaster') {
//    alert('Welcome!');
//  } else if (password == '' || password === null) {
//    alert('Canceled');
//  } else {
//    alert('Wrong password');
//  }
//} else if (login == '' || login === null) {
//  alert('Canceled');
//} else {
//  alert("I do not know you");
//}


//Task 2.13
//let i = 3;

//while (i) {
//  alert(i--);
//}

//let i = 0;
//while (++i < 5) alert(i);


//for (let i = 0; i < 5; i++) alert(i);

//for (let i = 2; i <= 10; i += 2) {
//    alert(i); 
//  }

  
//let i = 0;
//  while (i < 3) {
//    alert(`number ${i}!`);
//    i++;
//  }

//let num;
//do {
//  num = prompt("Enter a number greater than 100", '');
//} while (num <= 100 && num !== null && num !== '');
//alert(`You entered: ${num}`);


//function isPrime(n) {
//    for (let i = 2; i < n; i++) {
//      if (n % i === 0) return false; 
//    }
//    return n > 1; 
//  }
  
//let n = 10; 
//  for (let i = 2; i <= n; i++) {
//    if (isPrime(i)) alert(i);
//  }


//Task 2.14
//switch (browser) {
//    case 'Edge':
//      alert( "You have got the Edge!" );
//      break;
  
//    case 'Chrome':
//    case 'Firefox':
//    case 'Safari':
//    case 'Opera':
//      alert( 'Okay we support these browsers too' );
//      break;
  
//    default:
//      alert( 'We hope that this page looks ok!' );
//  }

//  if (browser === 'Edge') {
//   alert("You've got the Edge!");
//  } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//    alert('Okay we support these browsers too');
//  } else {
//    alert('We hope that this page looks ok!');
//  }

//let a = +prompt('a?', '');

//if (a == 0) {
//  alert(0);
//}
//if (a == 1) {
//  alert(1);
//}
//if (a == 2 || a == 3) {
//  alert('2,3');
//}

//let a = +prompt('a?', '');

//switch (a) {
//  case 0:
//    alert(0);
//    break;
//  case 1:
//    alert(1);
//    break;
// case 2:
//  case 3:
//    alert('2,3');
//   break;
//  default:
//    break;
//}


//Task 2.15
//function checkAge(age) {
//    if (age > 18) {
//      return true;
//    }
//    return confirm('Did parents allow you?');
//  }
  
//  console.log(checkAge(20)); 
//  console.log(checkAge(15)); 
  

//function checkAge(age) {
//    return age > 18 ? true : confirm('Did parents allow you?');
//  }
  
//  console.log(checkAge(20)); 
//  console.log(checkAge(15)); 
  
//function checkAge(age) {
//    return age > 18 || confirm('Did parents allow you?');
//  }
  
//  console.log(checkAge(20)); 
//  console.log(checkAge(15)); 
  
// function min(a, b) {
//     return a < b ? a : b;
//   }
  
//   console.log(min(2, 5));  // 2

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
//     return result;
//   }
  
//   console.log(pow(3, 2)); // 9


//Task 2.17
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     () => alert("You agreed."), 
//     () => alert("You canceled the execution.") 
//   );


//Task 3.2
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n <= 0) {
//     alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
//   } else {
//     alert(pow(x, n));
//   }


//Task 3.5
// it("Raises x to the power n", function() {
//     let x = 5;
  
//     let result = 5;
//     assert.equal(pow(x, 1), result);
  
//     result = 5 * 5; 
//     assert.equal(pow(x, 2), result);
  
//     result = 5 * 5 * 5; 
//     assert.equal(pow(x, 3), result);
//   });
  

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
  

<<<<<<< HEAD
// Task 6.1

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i; // 1ic minchev n hertakanutyamb bolor tvery gumarum em
=======
//Task 5.1  

// It will show `undefined`


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
>>>>>>> 9d3b471dbff9eb3b80284b7c1b761ff415a1ae6c
//     }
//     return sum;
//   }
  
<<<<<<< HEAD

// function sumTo(n) {
//     if (n === 1) return 1; // ete 1, apa 1
//     return n + sumTo(n - 1); // naxordneri gumarnerin avelacnum em yntacik tivy
//   }
  

//   function sumTo(n) {
//     return (n * (n + 1)) / 2; 
//   }
  


// function factorial(n) {
//     if (n === 1) return 1; // 1i faktorialy 1n e
//     return n * factorial(n - 1); // bazmapatkel n-y (n - 1) gorcakcov
//   }
  

// function fib(n) {
//     if (n <= 1) return 1; // hajordakanutyan arajin erku tvery 1n en
//     let a = 1, b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c; //  vercnum em naxord 2 tveri gumary
//     }
//     return b;
//   }



//   function printList(list) {
//     let current = list;
//     while (current) {
//       console.log(current.value); // ancnum em cucaky ev mutqagrum arjeqnery
//       current = current.next;
//     }
//   }



//   function printList(list) {
//     console.log(list.value); // tpum em yntacik arjeqy
//     if (list.next) {
//       printList(list.next); // kanchum em nuyn gorcaruyty hajord tarri hamar
//     }
//   }
  


//   function printReverseList(list) {
//     if (list.next) {
//       printReverseList(list.next); 
//     }
//     console.log(list.value); // grum em hakarak kertakanutyamb
//   }



//   function printReverseList(list) {
//     let arr = [];
//     let current = list;
  
//     while (current) {
//       arr.push(current.value); 
//       current = current.next;
//     }
  
//     for (let i = arr.length - 1; i >= 0; i--) {
//       console.log(arr[i]); // tpum em verjic hakarak hertakanutyamb
//     }
//   }
  


// Task 6.3

// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i; // amen angam avelacnum enq i yndhanur gumarin
//     }
//     return sum; // verjnakan gumary veradardznum enq 
//   }
  
//   alert(sumTo(100)); // stugum enq 100-ov ardyunqy petq e lini 5050


//   function sumTo(n) {
//     if (n === 1) return 1; 
//     return n + sumTo(n - 1); // rekursiv depq, n + funkciayi kanchi ardyunq n-1-ov
//   }
  
//   alert(sumTo(100)); // stugum enq 100-ov
  


//   function sumTo(n) {
//     return (n * (n + 1)) / 2; // arajin n tveri gumari banadzevy
//   }
  
//   alert(sumTo(100)); 




//   function factorial(n) {
//     if (n === 1) return 1; 
//     return n * factorial(n - 1);
//   }
  
//   alert(factorial(5)); 




//   function fib(n) {
//     if (n <= 1) return 1; // 0-i ev 1-i hamar menq veradardznum enq 1, vorovhetev fibonachii arajin 2 tvery 1 en
//     return fib(n - 1) + fib(n - 2); 
//   }
  
//   alert(fib(3)); // stugum enq 3ov, ardyunqy 2
//   alert(fib(7)); // stugum enq 7, 13 petq e lini
//   alert(fib(77)); // stugum enq 77, petqa 5527939700884757 lini




// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   if (list === null) return; 
//   console.log(list.value); 
//   printList(list.next); 
// }

// printList(list); 



// // nuyny bayc hakarak hertakanutyamb
// function printListReverse(list) {
//   if (list === null) return; 
//   printListReverse(list.next); 
//   console.log(list.value); 
// }

// printListReverse(list);




// Task 6.6

// function makeCounter() {
//   function counter() {
//     return counter.count++; // Veradardznum enq hashivy u mecacnum
//   }

//   counter.count = 0; 

//   counter.set = function(value) {
//     counter.count = value; 
//   };

//   counter.decrease = function() {
//     counter.count--; // nvazecnum enq hashivy 1ov
//   };

//   return counter;
// }


// function sum(num) {
//  let total = num;

  
//   function innerSum(nextNum) {
//     total += nextNum;  // gumarin avelacnel hajord tivy
//     return innerSum;    
//   }

  
//   innerSum.valueOf = function() {
//     return total; 
//   };

//   return innerSum; 
// }


// Task 6.8

// function spy(func) {
//     function wrapper(...args) {
//       wrapper.calls.push(args);
//       return func.apply(this, args); 
//     }
  
//     wrapper.calls = []; 
  
//     return wrapper;
//   }
  
//   function work(a, b) {
//     alert(a + b);
//   }
  
//   work = spy(work);
  
//   work(1, 2);
//   work(4, 5);
  
//   for (let args of work.calls) {
//     alert('call:' + args.join());
//   }
  




//   function delay(func, ms) {
//     return function(...args) {
//       setTimeout(() => {
//         func(...args); 
//       }, ms);
//     };
//   }
  
//   function f(x) {
//     alert(x);
//   }
  
//   let f1000 = delay(f, 1000);
//   f1000("test");



//   function debounce(func, ms) {
//     let timeout;
//     let lastArgs;
  
//     return function(...args) {
//       lastArgs = args; 
//       clearTimeout(timeout);
  
//       timeout = setTimeout(() => {
//         func.apply(this, lastArgs); 
//       }, ms);
//     };
//   }
  
//   function log(msg) {
//     console.log("Logged:", msg);
//   }
  
//   let debounced = debounce(log, 1000);
  
//   debounced("a");
//   debounced("b");
//   debounced("c");



//   function throttle(func, ms) {
//     let isThrottled = false;
//     let savedArgs;
//     let savedThis;
  
//     return function(...args) {
//       if (isThrottled) {
//         savedArgs = args;
//         savedThis = this;
//         return;
//       }
  
//       func.apply(this, args);
//       isThrottled = true;
  
//       setTimeout(() => {
//         isThrottled = false;
//         if (savedArgs) {
//           func.apply(savedThis, savedArgs);
//           savedArgs = savedThis = null;
//         }
//       }, ms);
//     };
//   }
  
//   function f(a) {
//     console.log(a);
//   }
  
//   let f1000 = throttle(f, 1000);
  
//   f1000(1);
//   f1000(2);
//   f1000(3);

  


// Task 6.9


// function f() {
//     alert(this); 
//   }
  
//   let user = {
//     g: f.bind(null) // null-in kapel obyekti kontexty jnjelu hamar
//   };
  
//   user.g(); 



//   function f() {
//     alert(this.name);
//   }
  
//   f = f.bind({ name: "John" }).bind({ name: "Ann" }); 
  
//   f(); 



//   function sayHi() {
//     alert(this.name);
//   }
//   sayHi.test = 5; 
  
//   let bound = sayHi.bind({ name: "John" });
  
//   alert(bound.test); 



//   function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user = {
//     name: 'John',
  
//     loginOk() {
//       alert(`${this.name} logged in`);
//     },
  
//     loginFail() {
//       alert(`${this.name} failed to log in`);
//     },
//   };
  

//   askPassword(user.loginOk.bind(user), user.loginFail.bind(user));




//   function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }
  
//   let user = {
//     name: 'John',
  
//     login(result) {
//       alert(this.name + (result ? ' logged in' : ' failed to log in'));
//     }
//   };
  
//  bind-ov naxapes dnum enq argumenty u kontexty
//   askPassword(user.login.bind(user, true), user.login.bind(user, false));
=======
//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   alert(sumSalaries(salaries)); 
  
//   function count(obj) {
//     return Object.keys(obj).length;
//   }
  
//   let user = {
//     name: 'Jony',
//     age: 30
//   };
  
//   alert(count(user));   



// Task 5.10

// let user = {
//     name: "John",
//     years: 30
//   };
  
//   let { name, years: age, isAdmin = false } = user;
  
//   alert(name);   
//   alert(age);    
//   alert(isAdmin); 
  
//   function topSalary(salaries) {
//     let maxSalary = Math.max(...Object.values(salaries)); 
//     if (maxSalary === -Infinity) return null; 
  
//     for (let [name, salary] of Object.entries(salaries)) {
//       if (salary === maxSalary) {
//         return name; 
//       }
//     }
//   }
  
//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   alert(topSalary(salaries)); 
  


// Task 5.11

// let date = new Date(2012, 1, 20, 3, 12);
// alert(date);

// function getWeekDay(date) {
//   const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
//   return days[date.getDay()];
// }

// let date1 = new Date(2012, 0, 3);
// alert(getWeekDay(date1));

// function getLocalDay(date) {
//   let day = date.getDay();
//   if (day === 0) return 7;
//   return day;
// }

// let date2 = new Date(2012, 0, 3);
// alert(getLocalDay(date2));

// function getDateAgo(date, days) {
//   let copy = new Date(date);
//   copy.setDate(copy.getDate() - days);
//   return copy.getDate();
// }

// let date3 = new Date(2015, 0, 2);
// alert(getDateAgo(date3, 1));
// alert(getDateAgo(date3, 2));
// alert(getDateAgo(date3, 365));

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// alert(getLastDayOfMonth(2012, 1));

// function getSecondsToday() {
//   let now = new Date();
//   return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
// }

// alert(getSecondsToday());

// function getSecondsToTomorrow() {
//   let now = new Date();
//   return (24 - now.getHours()) * 3600 - now.getMinutes() * 60 - now.getSeconds();
// }

// alert(getSecondsToTomorrow());

// function formatDate(date) {
//   let diff = new Date() - date;
//   if (diff < 1000) return "right now";
//   if (diff < 60000) return Math.floor(diff / 1000) + " sec. ago";
//   if (diff < 3600000) return Math.floor(diff / 60000) + " min. ago";
//   let d = date;
//   return ("0" + d.getDate()).slice(-2) + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + d.getFullYear().toString().slice(-2) + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
// }

// alert(formatDate(new Date(new Date - 1)));
// alert(formatDate(new Date(new Date - 30 * 1000)));
// alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
// alert(formatDate(new Date(new Date - 86400 * 1000)));


// Task 5.12

// let user = {
//     name: "John Smith",
//     age: 35
//   };
  
//   let jsonString = JSON.stringify(user);
//   let newUser = JSON.parse(jsonString);

//   let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     occupiedBy: [{name: "Johny"}, {name: "Alica"}],
//     place: room
//   };
  
//   room.occupiedBy = meetup;
//   meetup.self = meetup;
  
//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     if (value === meetup) return undefined;
//     return value;
//   }));
>>>>>>> 9d3b471dbff9eb3b80284b7c1b761ff415a1ae6c
  