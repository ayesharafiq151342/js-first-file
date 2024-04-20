const sym = Symbol ("ash")
//how to key use in object
let person = {
    sym : "kainat",
}
console.log(person["sym"]);
console.log(typeof sym);
// data type dtaype is  object not syymbol
 person = {
    //ide dqure braket
    [sym ]: "kainat",
}
console.log("symbol ...." + person[sym]);
console.log(typeof sym);
