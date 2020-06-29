const acronym = document.querySelectorAll("#acronym path");

console.log(acronym);

for(let i = 0; i < acronym.length; i++) {
    console.log(`Letter is ${i}  ${acronym[i].getTotalLength()}`);
}
console.log("This is acronym.js");