//The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. O
//bjects can be created using the Object() constructor or the object initializer / literal syntax.
//singlten then call constructor and not singleton  are literals
//how to object decalre
//constrtutor
//Object.create()
const person ={
name : "Ayesha ", //name is  string 
full_name : " Ayesha RAgique",
age:" 23",
email: "AyeshaRafique151342@gmail.com",
islogin:true
}

console.log(person);
//one way
console.log(person["name"])
//ontherway
console.log(person.email);
//how to fix object . can't change it
// Object.freeze(person)
person.email ="ashleraining@ajs"
console.log(person);
//h0w to add funvtion in js
person.greeting = function()
{
    console.log("ash learning");
}

console.log(person.greeting());

person.greeting2 = function()
//`` this sign is called backticks
{
    console.log(`ash learning , ${this.name}`);
}

console.log(person.greeting2());
//obeejct de constructor 
const school={
    name :"schoolar school system",
    edu :"class 1 to 10",
    loctaion: "D type"

}
//first useusaly  call this
school.edu
console.log("schhol",school.edu);
//another way data type { value } = object name
//yah use karty many time run karna ho tu
const { edu } = school

console.log(edu);
//name 
const { name} =  school
console.log("name",name);
// how to change  call insturtor value  
const { name : na} = school

