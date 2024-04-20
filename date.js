//Date is very diffcuilt but it is use for  jan 1 1970 \
//Question A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed
let date = new Date();
///-------------------meathods --------------------------------
//simple date kay liya localdatestring 
console.log(date.toLocaleDateString());
// ..date convert string
console.log(date.toString());

// time and date 
console.log(date.toLocaleString());
//time
console.log(date.toLocaleTimeString());
//utsdtring 
console.log(date.toUTCString());
//value o exect date in milisecond
console.log(date.valueOf());
//Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.
console.log(date.toJSON());



//------------------------------------------------------second part-------------------------------------------------------------------
//own date display
//one way
let mycreateddate = new Date(2024,"07",22)
console.log(mycreateddate.toDateString());
//onther way date-month-year
let mycreateddate1 = new Date("01-30-2024")
console.log(mycreateddate1.toDateString());
//see mints and second 
let mycreateddate2 = new Date(2024,9,22,4,5)
console.log(mycreateddate2.toDateString());
//---------------------------------important----------------
//timestemp use for  quizz pole etc it is use for web dev . it show millisecond
let timestemp=Date.now()
console.log(timestemp); 
//how to use geet operation in Date 
let time=new Date()
//time batna camopare karna
console.log(time.getTime());
//full year dakhana
let fullyear= new Date()
console.log(fullyear.getFullYear());
//hours
let hours= new Date()
console.log(hours.getHours());
//
let second= new Date()
console.log(second.getMilliseconds());
//---------------------interview question------------------

console.log(Date.now());
//how to connvert millisecond convert second 
console.log(Date.now()/1000);
//remove decimal 
console.log(Math.floor(Date.now()/1000));
//customization 
let custom = new Date
console.log(custom.toLocaleString('default',{
    // weekday:"long"
    // dateStyle:"short"
    dayPeriod:"long"
}));
