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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
#solution 1:
  function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}#finally is used here

#solution 2:
function reverseString(s) {
  
  try{
    // Can be chained, but it damages readability
    console.log(s.split("").reverse().join("")) 
  }
  catch(e){
    console.log(e.message); // Use .message, or you'll get more than expected.
    console.log(s);
  }

}#finally is not used instead added in catch itself.

#solution 3:
function reverseString(s) {
  if (typeof s === "string") {
    console.log(
      s
        .split("")
        .reverse()
        .join("")
    );
  } else {
    console.log("s.split is not a function" + "\n" + s);
  }
}#here we are using if and else statement, console error message is written bcoz e.message is defined here!



function main() {
    const s = eval(readLine());
    
    reverseString(s);
}
