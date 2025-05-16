// Task 6.1
// function sumTo(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i; // 1ic minchev n hertakanutyamb bolor tvery gumarum em
//     }
//     return sum;
//   }
  

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
  
//  bind ov naxapes dnum enq argumenty u kontexty
//   askPassword(user.login.bind(user, true), user.login.bind(user, false));