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
function factorial(n)
{   if(n==1 || n==0)
    return 1;
    else
    return n * factorial(n - 1);
    }/*
 * Create the function factorial here
 */


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
________________________________________________________________________________________________________________________________________________________________________________
TASK IS:
factorial function:
it can be in different ways too
answer: n ? n * factorial(n - 1) : 1;
