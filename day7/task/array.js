let n = parseInt(prompt("Enter the number of elements:"));
let numbers = [];
let sum = 0;
for (let i = 0; i < n; i++) {
  let num = parseFloat(prompt("Enter number " + (i + 1) + ":"));
  numbers.push(num);
  sum += num;
}
let average = sum / n;

console.log("Average: " + average);
