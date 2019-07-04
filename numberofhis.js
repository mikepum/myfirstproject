let string = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";

console.log("First hi - " + string.indexOf("hi"));
console.log("last hi - " + string.lastIndexOf("hi"));

nonefound = false;
let lastIndex = 0;
let found = 0;

while(!nonefound) {
    if (string.indexOf("hi", lastIndex) != -1) {
        console.log(string.indexOf("hi", lastIndex));
        lastIndex = string.indexOf("hi", lastIndex) + 1;
        found++;      
    } else {
        nonefound = true;
    }
}
console.log(found);

//*