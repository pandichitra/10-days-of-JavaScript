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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

 #solution 1:
function getSecondLargest(nums) {
  let firstLargestNum = 0;
  let secondLargestNum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargestNum) {
      secondLargestNum = firstLargestNum;
      firstLargestNum = nums[i];
    }
    if (nums[i] > secondLargestNum && nums[i] < firstLargestNum) {
      secondLargestNum = nums[i];
    }
  }
  return secondLargestNum;
} // Complete the function
#solution 2:
function getSecondLargest(nums) 
 {
    let largest = nums[0];
    let secondLargest = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            continue;
        }
        
        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }
    
    return secondLargest;
}   //complete the function
#solution 3:
function getSecondLargest(nums) {
    let max = nums[0]
    if (nums.length == 1) { return max } // break early for edge case of array length of 1
    let second = nums[1] < max ? nums[1] : max
    for (let i of nums) {
        if (i > max) { 
            second = max
            max = i 
        }
        if (i > second && i <  max) { second = i }
    }
    return second
}//complete the function
#solution 4:
function getSecondLargest(nums) 
{
 return Array.from(new Set(nums)).sort(function(a, b){return b - a})[1];   // Complete the function
}//complete the function
#solution 5:
const unique = Array.from(new Set(nums));
const reverseSorted = unique.sort(function(a, b){return b - a})
const second = reverseSorted[1];
return (second);//complete the function




function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
____________________________________________________________________________________________________________________________________________________________________________
