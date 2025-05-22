// Task 8.1

// let animal = {
//     jumps: null
//   };
  
//   let rabbit = {
//     __proto__: animal,
//     jumps: true
//   };
  
//   alert( rabbit.jumps ); // true
//   // rabbit uni ir jumps property, dra hamar cuyca talis true
  
//   delete rabbit.jumps;
  
//   alert( rabbit.jumps ); // null
//   // stex chuni jumps, dra hamar check a anum animal-y, vorn uni jumps=null
  
//   delete animal.jumps;
  
//   alert( rabbit.jumps ); // undefined
//   // hima jumps erkusic el jnjvaca, dra hamar undefined

  

//   let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__: head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
//   };
  
//   let pockets = {
//     money: 2000,
//     __proto__: bed
//   };
  
//   // pockets - bed - table - head
//   // vor senc karoxananq mutq gorcel:
//   console.log(pockets.pen); 
//   console.log(bed.glasses); 

  


//   let animal = {
//     eat() {
//       this.full = true;
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
//   rabbit.eat();
  
  
//   console.log(rabbit.full); 
//   console.log(animal.full); 

  


//   let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster
//   };
  
//   let lazy = {
//     __proto__: hamster
//   };
  
//   speedy.eat("apple");
  
//   console.log(speedy.stomach); 
//   console.log(lazy.stomach);   

  
  
 
//   let hamsterFixed = {
//     eat(food) {
      
//       if (!this.stomach) this.stomach = [];
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy2 = {
//     __proto__: hamsterFixed
//   };
  
//   let lazy2 = {
//     __proto__: hamsterFixed
//   };
  
//   speedy2.eat("carrot");
  
//   console.log(speedy2.stomach); 
//   console.log(lazy2.stomach);   




// Task 8.2

// 1) function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert( rabbit.eats ); // true


// 2) function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // false


// 3) function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); // true


// 4) function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // undefined




// Task 8.3


// Function.prototype.defer = function(ms) {

//     setTimeout(this, ms);
//   };
  
  
//   function f() {
//     alert("Hello!");
//   }
  
  
//   f.defer(1000); // 1 vrk-ic "Hello" cuyc kta





// Function.prototype.defer = function(ms) {
//     let f = this; 
//     return function(...args) { 
     
//       setTimeout(() => f.apply(this, args), ms);
//     };
//   };
  
  
//   function f(a, b) {
//     alert(a + b);
//   }
  
  
//   f.defer(1000)(1, 2); // 1 vrk-ic 3 cuyc kta



// Task 8.4


// let dictionary = Object.create(null); 


// Object.defineProperty(dictionary, "toString", {
//   value: function() {
//     return Object.keys(this).join(","); 
//   }
// });


// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; 


// for (let key in dictionary) {
//   alert(key); 
// }


// alert(dictionary); 






// function Rabbit(name) {
//     this.name = name;
//   }
//   Rabbit.prototype.sayHi = function() {
//     alert(this.name);
//   };
  
//   let rabbit = new Rabbit("Rabbit");
  
  
//   rabbit.sayHi();                        
//   Rabbit.prototype.sayHi();             
//   Object.getPrototypeOf(rabbit).sayHi(); 
//   rabbit.__proto__.sayHi();             
    

// test