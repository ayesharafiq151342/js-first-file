//To create a function, we write the keyword function, followed by the name of the function and a pair of parentheses.
// Then follows some JavaScript code enclosed in curly braces.
function logMessage() {
    console.log('Hello world!');
  }
//   This is called a function declaration.
//After we have declared a function, we can call it by using its name and a pair of parentheses:\
logMessage()
// -------------------------------------note------------------- 
//With functions you can encapsulate specific tasks into smaller, more manageable pieces. This makes it easier to understand and work with your code.  

// //There's an////other way to create functions which is called function expression. Here, we create a function and assign it to the variable logMessage. N//otice that we omit the name of the function after the function keyword.
// const logMessage = function() {
//   console.log('Hello world!');
// }
// //example
//write two number product thorugh function
const product=(num1 , num2)=>{
console.log(num1*num2);

} 
product(2,3)
function divsion (first_num , second_num) {
    console.log(first_num / second_num)
     
}
divsion(2,3)
function add( number1 , number2){
    console.log(number1  + number2 );
}
add(3,5);
//return value 
function addnum (num3 ,num5 ){
    let result =num3 + num5  ;
    return result
}
const result = addnum(3,4)
console.log("add " , result);
function name(username){
    return `  ${ username}  login`
}
console.log(name("ash"));
//when use call empty so undfine 
console.log(name());
