let songs = ["song1","song2","song3"];
//* console.log(songs);
//* console.log(songs.toString());
//* console.log(songs[2]);
songs[1] = "song99";  /* make array item 1 song99  */
//* console.log(songs);
//* console.log(songs.length);  /* number of items in the array */
songs.push("song1234"); /* add item to the end of the array */
//*console.log(songs);   
songs.pop(); /* removes last item in array */
//* songs.pop(); /* removes last item in array */
//* console.log(songs); 

let faveWebsites = ["bbc","sky","xda"];
console.log(faveWebsites);
faveWebsites.push("audisport");
console.log(faveWebsites);
faveWebsites.push("rs246");
console.log(faveWebsites);
faveWebsites.pop();
console.log(faveWebsites);
faveWebsites.shift();  /* removes first item in array */
console.log(faveWebsites);
faveWebsites.unshift("rs246","bbc"); /* adds items to the start of the array */
console.log(faveWebsites);
let pick = faveWebsites.slice(1,3); /* returns selected elements from the array starting at pos 1, end at 3 not including 3 */
                                    /* doesnt change array */
console.log(faveWebsites);
console.log(pick);
faveWebsites.splice(2,0,"sky2","sky3"); /* insert items into array at pos 2 changes array */
console.log(faveWebsites);
console.log(faveWebsites.splice(2,2)); /* remove 2 items from the array at pos 2 changes array returns removed items */
console.log(faveWebsites);

let sliced = faveWebsites.slice(0,1) + faveWebsites.slice(faveWebsites.length - 1); /* select 1st and last */
console.log(sliced);

console.log(faveWebsites.indexOf("xda"));  /* gets index pos of an item */

for (let f = 0; f < faveWebsites.length; f++){    /* list items & positions in array */
    console.log(`${f}:${faveWebsites[f]}`);
}

let iterator = faveWebsites.entries();  /* list items & positions in array */
for (let e of iterator) { 
    console.log(e); 
}