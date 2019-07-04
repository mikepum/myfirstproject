/*
let password = "passpasspass";

if (password.length < 8) {
    console.log("password too short");
} else {
    console.log(password);
}

let num = 15;

if (Number.isInteger(num / 3) || Number.isInteger(num / 5)) {
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("This number is not divisible by 3 or 5");
}


if (Number.isInteger(num / 3) && Number.isInteger(num / 5)) {
    console.log("fizz buzz");
} else if  (Number.isInteger(num / 3)) {
    console.log("fizz");
} else if  (Number.isInteger(num / 5)) {
    console.log("buzz");
} else {
    console.log(num);
}
*/

let num = 823322;
let i;
let numReversed = "";
//* make sure num is a string not a number
num = num + "";   
//* console.log(num.length);
for (i = num.length - 1; i >= 0; i-- ) {
//*    console.log(`value of i ${i}`);
//*    console.log(num.charAt(i));
    numReversed = numReversed + num.charAt(i);
}
console.log(num);
console.log(numReversed);
if (num == numReversed) {
    console.log("palindrome");
}
else {
    console.log("Not a palindrome")
}

/*

let time = 12.30;
let placeOfWork = "Manchester";
let townOfHome = "Northwich";

if (time < 8 ) {
    console.log(`in ${townOfHome}`);
}
else if (time < 9) {
    console.log(`between ${townOfHome} and ${placeOfWork}`);
}
else {
    console.log(`in ${placeOfWork}`);
}

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh";
let lastVowelIndex = 0;
console.log(string.lastIndexOf("a"));
lastVowelIndex = string.lastIndexOf("a");
console.log(string.lastIndexOf("e"));
if (string.lastIndexOf("e") > lastVowelIndex) {
    lastVowelIndex = string.lastIndexOf("e");
}
console.log(string.lastIndexOf("i"));
if (string.lastIndexOf("i") > lastVowelIndex) {
    lastVowelIndex = string.lastIndexOf("i");
}
console.log(string.lastIndexOf("o"));
if (string.lastIndexOf("o") > lastVowelIndex) {
    lastVowelIndex = string.lastIndexOf("o");
}
console.log(string.lastIndexOf("u"));
if (string.lastIndexOf("u") > lastVowelIndex) {
    lastVowelIndex = string.lastIndexOf("u");
}

console.log(lastVowelIndex);


let word = "randomstring";
if (word.charAt(0) == word.charAt(word.length-1)) {
    console.log(true);
}
else {
    console.log(false);
}



let num1 = 8;
let num2 = 10;
//* console.log((num1 + num2) / 2)
if (Number.isInteger((num1 + num2) / 2 )) {
    console.log(num1 + num2);
} 
else {
    console.log(num1 * num2);
}
*/