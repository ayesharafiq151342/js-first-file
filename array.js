//Array is an object . All string is maniupulate i single variable 
// array is resizeable
//array satrt zero index
const arr = [0,1,2,3,4]
console.log(arr);
let  arr1 = [0,1,2,3,4,"ash"]
console.log(arr1);
let arr2 = new Array(1,2,3,4)
console.log(arr2);

// method of  Array
//Push
arr.push(3)
console.log("push",arr);
arr.pop()
console.log("pop",arr);
//second method is shift an un shift 
//unshift mean add index start number
arr.unshift(8)
console.log("unshift",arr);
//shift remove the first digit
arr.shift()
console.log("shift",arr);
// new number add karny kay liya 
//include mean checck this number is available in array or not new index
console.log("include",arr.includes(5));
console.log("include",arr.includes(4));
//------------------------Important question -----------------------------
//Array.isArray() checks if the passed value is an Array
console.log(Array.isArray([1, 9, 5]));
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array,
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// -------------------------=Crack interviwe question -------------------
// slic or splic
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log("slice" , arr.slice(1,4));
console.log(" slice" , arr);

console.log("splice" , arr.splice(1,3));

//difernce is slice 1 subtract and splice add value but a
//another difernece is array differnce see at this lline 
console.log("Difference splice and slice" , arr);


//difernce is slice 1 subtract and splice add value but a
//another difernece is array differnce see at this lline 



// Expected output: "Fire,Air,Water


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


