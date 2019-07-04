/* if (1 !== "1") {
    console.log(true);
} else {
    console.log(false);
}

let age = 18;
let country =  "UK";

if (age > 17 && country == "UK") {
    console.log("Yes, I can serve you");
} 
else {
    console.log("You arent old enough");
}
*/

let num = 123321;
let i;
let numReversed = "";
//* make sure num is a string not a number
num = num + "";   
//* console.log(num.length);
for (i = num.length - 1; i >= 0; i-- ) {
//*    console.log(i);
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
