// TOPIC  Repeat a String Repeat a String 93
/*Problem Explanation
The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

Relevant Links
Global String Object 1.9k
Hints
Hint 1
The program is very simple, we have to take a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string.

Hint 2
You can’t edit strings, you will need to create a variable to store the new string.

Hint 3
Create a loop to repeat the code as many times as needed.

Hint 4
Make the variable created store the current value and append the word to it.
*/
//Solutions
//Solution 1 (Click to Show/Hide)
function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}
let string = repeatStringNumTimes("abc", 3);
console.log(string);


//Code Explanation
/*
Create an empty string variable to store the repeated word.
Use a for loop or for loop to repeat code as many times as needed according to num
Then we add the string to the variable created on step one inside of the loop.
At the end of the loop, return the variable for the repeated word.
Relevant Links
JS while Loop
JS For Loops Explained 558
*/

//Solution 2 (Click to Show/Hide)
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

let stringNum = repeatStringNumTimes("abc", 3);
console.log(stringNum);
//Code Explanation
/*
This solution uses recursion.
We check if num is negative and return an empty string if true.
If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another… until eventually num is 1. And return that whole process.
Relevant Links
Functions - Recursion 1.4k
*/
//Solution 3 (Click to Show/Hide)

//Recursive Solution

function repeatStringNumTimes(str, num) {
  return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

let functionName = repeatStringNumTimes("abc", 3);
console.log(functionName);



//TOPIC Problem Explanation
/*
We need to reduce the length of the string or truncate it if it is longer than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.

Relevant Links
String.prototype.slice() 2.2k
Hints
Hint 1
Strings are immutable in JavaScript so we will need a new variable to store the truncated string.

Hint 2
You will need to use the slice() method and specify where to start and where to stop.
*/

//Solution 1 (Click to Show/Hide)

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

let truncate = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(truncate);
//Code Explanation
/*
We start off with a simple if statement to determine one of two outcomes…
If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.
*/
//Solution 2 (Click to Show/Hide)

function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

let answer = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(answer);

/*Code Explanation
This solution is very similar to basic solution. To determine the new string, we use a ternary operator. In our ternary operation, if str.length is larger than num, we return a new string which is slice of our string starting at character 0, and ending at num and the '...' is appended to the end of our new string. If str.length is less than or equal to num, we return the string without any truncation.

NOTE In order to understand the above code, you need to understand how a Ternary Operator works. The Ternary Operator is frequently used as a shortcut for the if statement and follows this format: condition ? expr1 : expr2. If the condition evaluates to true, the operator returns the value of expr1. Otherwise, it returns the value of expr2.

Relevant Links
Conditional (ternary) Operator
String.prototype.slice()*/


// TOPIC ELÖEMENT OF AN ARRAY THAT PASSES A FUNCTION
    /*

Hints
Hint 1
We need to return the element from an array that passes a function. Both the function and the array are passed into our function findElement(arr, func). Looking through the array can be done with a for loop.

Hint 2
num is passed to the function. We will need to set it to the elements we want to check with the function.

Hint 3
Do not forget, if none of the numbers in the array pass the test, it should return undefined.

Solutions*/
//Solution 1 (Click to Show/Hide)
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
let finder = findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(finder);


// Code Explanation
/*Challenge asks us to look through array. This is done using a for loop.
The num variable is being passed into the function, so we set it to each index in our array.
The pre-defined function already checks each number for us, so if it is “true”, we return that num.
If none of the numbers in the array pass the function’s test, we return undefined.
*/
//Solution 2 (Click to Show/Hide)

function findElement(arr, func) {
  return arr.find(func);
}

let arrayFind = findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(arrayFind);

//Relevant Links
//Array.prototype.find 



// Code Explanation
/*Look through the array given in the 1st paramater “arr” using the .map() method
Use the function in the 2nd parameter as the callback function in arr.map()
Acquire the index of the first number that meets the condition in the function.
Use that index to display the first available number that meets the condition.
Solution 4 (Click to Show/Hide)*/
//** Recursive Solution**

function findElement(arr, func) {
  return arr.length && !func(arr[0]) 
    ? findElement(arr.slice(1), func)
    : arr[0];
}

let recursive = findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(recursive);



//TOPIC Boo who
/*Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
/*
Problem Explanation
This program is very simple, the trick is to understand what a boolean primitive is. The programs requires a true or false answer.

Relevant Links
Boolean 2.4k
Hints
Hint 1
You will need to check for the type of the parameter to see if it is a boolean.

Hint 2
To check for the type of a parameter, you can use typeof.

Hint 3
Since you must return true or false you can use if statements or just have it return the boolean used for the if statement.

Solutions*/
//Solution 1 (Click to Show/Hide)
function booWho(bool) {
  return typeof bool === "boolean";
}

// test here
booWho(null);


/*Code Explanation
Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. 
Otherwise, if it is any other type it will return false.*/