/* const person = {
    name : "Mike",
    age : 45
}

console.log(person.name);
console.log(person["name"]);
*/

const alarmTypes = {
    weekendAlarm : "No alarm needed",
    weekdayAlarm : "Get up at 7am"
}

let day = "Saturday";
let alarm = "";

if (day == "Saturday" || day == "Sunday") {
    alarm = alarmTypes.weekendAlarm;
} else {
    alarm = alarmTypes.weekdayAlarm;
}

console.log(alarm);