let string = "abcdefghijk";

//* search example - like POS - 0 indexed
console.log(string.search("d"));

//* lastIndexOf example - last position of the arg in the string - 0 indexed
console.log(string.lastIndexOf("f"));

//* slice example - returns part of a string (start index, end index) - 0 indexed
console.log(string.slice(1,5));

//* substring example - returns part of a string (start index, end index(optional)) - 0 indexed
console.log(string.substring(3,7));

//* substr example - returns part of a string (start index, length) - 0 indexed
console.log(string.substr(1,5));

//* replace example - replace cd with ef
console.log(string.replace("cd", "ef"));

//* concat example
console.log(string.concat(string, string));

//* charAt example - extract character at position n - 0 indexed
console.log(string.charAt(5));