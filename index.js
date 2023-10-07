// --------------------1---------------------
const data = [];
let sum = 0;
for (let i = 1; i <= 5; i++) {
  var inp = +prompt(`Enter ${i}  number`);
  b.push(inp);
}
for (let j = 0; j < data.length; j++) {
  sum = sum + data[j];
}
console.log(sum);

// --------------------2---------------------
let maxArr = [];
for (let i = 1; i <= 5; i++) {
  var num = +prompt(`enter ${i}  number`);
  maxArr.push(num);
}
console.log(maxArr);
let findMax = Math.max(...maxArr);
console.log(`The maximum number is ${findMax}`);

// --------------------3---------------------
let sentence = prompt("Enter a sentence:");
let wordsArray = sentence.trim().split(/\s+/);
console.log(`The number of words in the sentence is: ${wordsArray.length}`);

// --------------------4---------------------
const data1 = [];
let sums = 0;
let count = 0;
for (let i = 1; i <= 5; i++) {
  var inpt = +prompt(`Enter ${i}  number`);
  data1.push(inpt);
  count++;
}
for (let j = 0; j < data1.length; j++) {
  sums = sums + data1[j];
}
console.log(sums/count);

// --------------------5---------------------
function filterMultiples(arr) {
  return arr.filter((num) => num % 3 === 0 || num % 5 === 0);
}
let numbers = [];
for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`Enter number ${i}:`));
  numbers.push(num);
}
console.log(numbers);
let filteredNumbers = filterMultiples(numbers);
console.log(`Numbers divisible by 3 or 5: ${filteredNumbers}`);
 