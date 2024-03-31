/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

for (let i = 0; i < numberArray.length; i++) {
    switch (numberArray[i]) {
        case 1:
            numberArray[i] = numberArray[i].toString().replace("1", "one");
            break;
        case 3:
            numberArray[i] = numberArray[i].toString().replace("3", "three");
            break;
        case 5:
            numberArray[i] = numberArray[i].toString().replace("5", "five");
            break;
    }
}

for (let i = 0; i < stringArray.length; i++) {
    switch (stringArray[i]) {
        case "foo":
            stringArray[i] = stringArray[i].replace(/o/g, "0");
            break;
        case "bar":
            stringArray[i] = stringArray[i].replace("b", "B");
            break;
        case "baz":
            stringArray[i] = stringArray[i].replace("a", "@");
            break;
        case "qux":
            stringArray[i] = stringArray[i].replace("x", "X");
            break;
        case "echo":
            stringArray[i] = stringArray[i].replace("e", "3");
            stringArray[i] = stringArray[i].replace("o", "0");
            break;
    }
}

result = ["h@ck", ...numberArray, "h@ck",...stringArray, "h@ck"];


// result = numberArray.concat(stringArray);
// result.unshift("h@ck");
// result.push("h@ck")
// result.splice(6, 0, "h@ck");


//export result
module.exports = result;