//Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.
//perimative declera
const string2 = "ash"
console.log(string2);

//string in object
const string = new String("ash learning")
console.log(string);
//
console.log(string.length);
//upercasl
console.log(string.toUpperCase())
console.log(string.toLowerCase());
//char at index pay kon sa character 
console.log(string.charAt(6));
//indexof is use which cahracter hold in index
console.log(string.indexOf("n"));
//slice kaha sy kaha tak chiya 
console.log(string.slice(3,9));
//
console.log(string.codePointAt(-4));
//concateinate add the string in next 
console.log(string.concat(+"a"+"s"+"h"));
//
console.log(string.endsWith());
//
console.log(string.includes(""));
//template 
const name="ayaesha"
const age =16
console.log(` my name is ${name} and my age is ${age}
}` );
//REPLACE
console.log(string.replace("ash","shah"));
//How to string convert in an array 
console.log(string.split());
//second way 
console.log(...string);
//space beahave
console.log(string.split(" "));



