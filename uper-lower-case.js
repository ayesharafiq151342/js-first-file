//write  a code user enter a day &
// convert first alphabet  is Capital 
var day2 = prompt("Enter a day").toLowerCase(); 
var day = ['Monday', 'Tuesday', 'Wednesday',
 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var match_flag = false;

for (let i = 0; i < day.length; i++) {
    if (day2 === day[i].toLowerCase()) { 
        match_flag = true;
        document.write(
        "This day is avlibale in array"
         + "<br>");
        break;
    }
}

if (!match_flag) {
    document.write(  "," + 
    "This day is not  avlibale in array "
     + "<br>");
}