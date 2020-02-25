// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
function addOne(n) {
  return n+1;
}

// Function Expression
let addOne = function(n) {
  return n+1;
};

// Arrow Function
let addOne = n => n+1;

// Arrow Function With Curly Bracket

let addOne = n => {
  return n+1;
};

// Function Invocation

addOne(21); // 22




/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

//Function Decleration
function subtractOne(n) {
  return n-1;
}

// Function Expression
let subtractOne = function(n) {
  return n-1;
};

// Arrow Function
let subtractOne = n => n-1;

// Arrow Function With Curly Bracket

let subtractOne = n => {
  return n-1;
};

// Function Invocation

subtractOne(21); // 20





/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

//Function Decleration
function sum(x, y) {
  return x + y;
}

// Function Expression
let sum = function(x, y) {
  return x + y;
};

// Arrow Function
let sum = (x, y) => x+y;

// Arrow Function With Curly Bracket

let sum = (x, y) => {
  return x + y;
};

// Function Invocation

sum(8, 12); // 20





/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

//Function Decleration
function subtract(x, y) {
  return x - y;
}

// Function Expression
let subtract = function(x, y) {
  return x - y;
};

// Arrow Function
let subtract = (x, y) => x - y;

// Arrow Function With Curly Bracket

let subtract = (x, y) => {
  return x - y;
};

// Function Invocation

subtract(12, 8); //4







/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */


//Function Decleration
function mul(x, y) {
  return x * y;
}

// Function Expression
let mul = function(x, y) {
  return x * y;
};

// Arrow Function
let mul = (x, y) => x * y;

// Arrow Function With Curly Bracket

let mul = (x, y) => {
  return x * y;
};

// Function Invocation

mul(12, 8); //96




/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */


//Function Decleration
function div(x, y) {
  return x / y;
}

// Function Expression
let div = function(x, y) {
  return x / y;
};

// Arrow Function
let div = (x, y) => x / y;

// Arrow Function With Curly Bracket

let div = (x, y) => {
  return x / y;
};

// Function Invocation

div(12, 4); //3





/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

//Function Decleration
function square(n) {
  return n*n;
}

// Function Expression
let square = function(n) {
  return n*n;
};

// Arrow Function
let square = n => n*n;

// Arrow Function With Curly Bracket

let square = n => {
  return n*n;
};

// Function Invocation

square(21); // 441





/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */



//Function Decleration
function doMath(operation, x, y) {
  switch(operation){
    case "sum": 
      return x + y;
    case "subtract":
      return x - y;
    case "multiply": 
      return x * y;
    case "divide":
      return x / y;
    default:
      alert("Invalid operator");
      break;
    
  }
}

// Function Expression
let doMath = function(operation, x, y) {
  switch(operation){
    case "sum": 
      return x + y;
    case "subtract":
      return x - y;
    case "multiply": 
      return x * y;
    case "divide":
      return x / y;
    default:
      alert("Invalid operator");
      break;
    
  }
};

// Arrow Function

// Arrow Function With Curly Bracket

let doMath = (operation, x, y) => {
  switch(operation){
    case "sum": 
      return x + y;
    case "subtract":
      return x - y;
    case "multiply": 
      return x * y;
    case "divide":
      return x / y;
    default:
      alert("Invalid operator");
      break;
    
  }
};

// Function Invocation

doMath("sum", 4, 10); // 40


/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */


//Function Decleration
function whichGreater(a, b) {
  if( a > b)
    return a;
  return b;
}

// Function Expression
let whichGreater = function(a, b) {
  if( a > b)
    return a;
  return b;
};

// Arrow Function
let whichGreater = (a, b) => a>b? a:b;

// Arrow Function With Curly Bracket

let whichGreater = (a, b) => {
  if( a > b)
    return a;
  return b;
};

// Function Invocation

whichGreater(8, 12); // 12

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

//Function Decleration
function isLess(a, b) {
  if( a < b)
    return true;
  return false;
}

// Function Expression
let isLess = function(a, b) {
  if( a < b)
    return true;
  return false;
};

// Arrow Function
let isLess = (a, b) => a<b? true:false;

// Arrow Function With Curly Bracket

let isLess = (a, b) => {
  if( a < b)
    return true;
  return false;
};




/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

//Function Decleration
function isEqual(a, b) {
  if( a == b)
    return true;
  return false;
}

// Function Expression
let isEqual = function(a, b) {
  if( a == b)
    return true;
  return false;
};

// Arrow Function
let isEqual = (a, b) => a==b? true:false;

// Arrow Function With Curly Bracket

let isEqual = (a, b) => {
  if( a == b)
    return true;
  return false;
};






/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */


//Function Decleration
function whichSmaller(a, b) {
  if( a > b)
    return b;
  return a;
}

// Function Expression
let whichSmaller = function(a, b) {
  if( a > b)
    return b;
  return a;
};

// Arrow Function
let whichSmaller = (a, b) => a<b? a:b;

// Arrow Function With Curly Bracket

let whichSmaller = (a, b) => {
  if( a > b)
    return b;
  return a;
};




/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

//Function Decleration
function whichLargest(x, y) {
  if( x > y)
    return x;
  return y;
}

// Function Expression
let whichLargest = function(x, y) {
  if( x > y)
    return x;
  return y;
};

// Arrow Function
let whichLargest = (x, y) => a>b? a:b;

// Arrow Function With Curly Bracket

let whichLargest = (x, y) => {
  if( x > y)
    return x;
  return y;
};






/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
//Function Decleration
function isEven(n) {
  if(n%2 == 0)
    return true;
  return false;
}

// Function Expression
let isEven = function(n) {
  if(n%2 == 0)
    return true;
  return false;
};

// Arrow Function
let isEven = n => n%2 == 0?true:false;

// Arrow Function With Curly Bracket

let isEven = n => {
  if(n%2 == 0)
    return true;
  return false;
};

// Function Invocation

isEven(21); // false






/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
//Function Decleration
function isOdd(n) {
  if(n%2 != 0)
    return true;
  return false;
}

// Function Expression
let isOdd = function(n) {
  if(n%2 != 0)
    return true;
  return false;
};

// Arrow Function
let isOdd = n => n%2 != 0?true:false;

// Arrow Function With Curly Bracket

let isOdd = n => {
  if(n%2 != 0)
    return true;
  return false;
};

// Function Invocation

isOdd(21); // true





/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

//Function Decleration
function calcGrade(score, total) {
  var res = (score*100)/total;
  if(res > 100) {
    alert("Invalid score");
    return;
  }
  else if(res > 90) {
    return "A";
  }
  else if(res > 80) {
    return "B";
  }
  else if(res > 70) {
    return "C";
  }
  else if(res > 60) {
    return "D";
  }
  else {
    return "F";
  }
}

// Function Expression
let calcGrade = function(score, total) {
  var res = (score*100)/total;
  if(res > 100) {
    alert("Invalid score");
    return;
  }
  else if(res > 90) {
    return "A";
  }
  else if(res > 80) {
    return "B";
  }
  else if(res > 70) {
    return "C";
  }
  else if(res > 60) {
    return "D";
  }
  else {
    return "F";
  }
};

// Arrow Function With Curly Bracket

let calcGrade = (score, total) => {
  var res = (score*100)/total;
  if(res > 100) {
    alert("Invalid score");
    return;
  }
  else if(res > 90) {
    return "A";
  }
  else if(res > 80) {
    return "B";
  }
  else if(res > 70) {
    return "C";
  }
  else if(res > 60) {
    return "D";
  }
  else {
    return "F";
  }
};



/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


 
//Function Decleration
function joinStr(word1, word2) {
  return word1 + " " + word2;
}

// Function Expression
let joinStr = function(word1, word2) {
  return word1 + " " + word2;
};

// Arrow Function
let joinStr = (word1, word2) => word1 + " " + word2;;

// Arrow Function With Curly Bracket

let joinStr = (word1, word2) => {
  return word1 + " " + word2;
};

// Function Invocation

joinStr("Anshu", "Saurabh"); // "Anshu Saurabh"

