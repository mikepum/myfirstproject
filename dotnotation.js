/* console.log("Hello");
console.log("Hello".length);
console.log("Hello".toUpperCase());
console.log(Math.random());
console.log(Math.random()*10); 
console.log(Math.floor(Math.random()*10)); */

let space1 = "x";
let space2 = "x";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log("   |   |");
console.log(` ${space1} | ${space2} | ${space3}`);
console.log("   |   |");
console.log("-----------");
console.log("   |   |");
console.log(` ${space4} | ${space5} | ${space6}`);
console.log("   |   |");
console.log("-----------");
console.log("   |   |");
console.log(` ${space7} | ${space8} | ${space9}`);
console.log("   |   |"); 

if ((space1 == "o" && space2 == "o" && space3 == "o") || (space1 == "x" && space2 == "x" && space3 == "x")) {
    console.log("WIN WIN WIN")
}