'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
Answer 1:
function vowelsAndConsonants(s)
 {
  var vowelList = "aeiou";
  var consonantList = "";

    for (let letter of s) {
        if (vowelList.includes(letter)) {
            console.log(letter);
        } 
else {
            consonantList += letter +"\n";
        }
    }
    console.log(consonantList);
}  
Answer 2:
var vowelList = "aeiou";
var consonantList = "";
function vowelsAndConsonants(s) {
    for (let letter of s) {
        if (vowelList.includes(letter)) {
            console.log(letter);
        } 
else {
            consonantList += letter +"\n";
        }
    }
    console.log(consonantList);
}

Answer 3:
let vows = s.match(/[aeiou]/gi).join('\n');
let letters = s.match(/[^aeiou]/gi).join('\n');
console.log(vows +"\n"+letters);





function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
______________________________________________________________________________________________________________________________________________________________________________
