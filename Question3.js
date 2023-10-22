"use strict";
let person = " Faiq uz Zaman Khan";
let lowercaseName = person.toLowerCase();
console.log(lowercaseName);
let uppercaseName = person.toUpperCase();
console.log(uppercaseName);
let words = person.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
