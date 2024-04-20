//for loop 
//The for statement creates a loop with 3 optional expressions:
//------------------------syntax-----------
//for (expression 1; expression 2; expression 3) {
    // code block to be executed
  //}
//   ash learning write `10 times
//   for(var i =0 ; i<=10 ; i++){
//     console.log("ash learning");
//   }
//   //table 
// var num 
// var num2 =  prompt("Enter a number .")
// var table_name = prompt("enter a table")
// for ( num =0 ; num <=num2 ; num++){
//   document.write( table_name +"*"+ num + "= "+ table_name* num +"<br>" )

// }

document.write("Write a program in C to display the first 10 natural numbers." + "<br>")


let  add=0  ;
for ( var i = 1; i<=10 ; i++){
add= add  + i 
 document.write(i +"<br>")
}
document.write("total sum is  = " + add + "<br>" );
 document.write("Write a program to print multiplication table of a given number" + "<br>")
let  multi = 1
for ( var j = 1 ; j <= 20 ; j++){

document.write(j+"<br>")
multi = multi * j;



}
document.write("multiplay is =  ",multi +"<br>");
document.write("Write a program to print multiplication table of a given odd  number" + "<br>")


let num 
let mul = 1
for ( let k = 0 ; k <= 10 ; k++)
{
  k=k+1;
  mul = mul* k
  document.write(k + "<br>")
}
document.write(mul + "<br>")
document.write("Write a program to print divided table of a given even  number" + "<br>")

 let num2 
let div = 1
for ( let k = 1 ; k <= 10 ; k++)
{
  k=k+1;
  div = div / k
  document.write( k + "<br>")
}
document.write("division is " +div)