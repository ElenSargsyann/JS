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
//  alert("I don’t know you");
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
//      alert( "You've got the Edge!" );
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
  

