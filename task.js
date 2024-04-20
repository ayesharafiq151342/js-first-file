document.write("1- promt use karna  "+"<br>" +"2- then array banani jis mai city sellect karna hai yh nahi array mai " +"<br>")

// var city_name = prompt("Enter name")
// var arr = [ 'fsd ', 'Isb', 'Lhr' , 'Kar  ']
// for( var i = 0 ; i< arr.length ; i++){
// if(city_name == arr[i]){
//     document.write("city found")
//     break
// }
// //use else so problem else  use flag 
// else {
//     document.write("city not found")
    

// }
// }
var city_name = prompt("Enter name").toLocaleLowerCase()
var arr = [ 'fsd', 'isb', 'lhr' , 'kar  ']
var match_flag = false
for( var i = 0 ; i< arr.length ; i++){
if(city_name == arr[i].toLocaleLowerCase()){
    match_flag = true;
    document.write("city found");
    break;
}
}
if(match_flag ==false )
{
    document.write("city not  found")

}
