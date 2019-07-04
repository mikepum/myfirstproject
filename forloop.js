let faveFilms = ["filma","filmb","Ghostbusters","filmd","filme"];

const listArray = () => {
for(filmsIndex = 0; filmsIndex < faveFilms.length; filmsIndex++) {
    console.log(faveFilms[filmsIndex]);
    }
}

const filmCheck = () => {
    if (faveFilms[2] == "Ghostbusters") {
        console.log("Yay, its Ghostbusters");
    } else {
        console.log("Booo, we want Ghostbusters");
    }
}

//* listArray();
//* faveFilms.push("f","g");
listArray();
filmCheck();

/* fhf  */