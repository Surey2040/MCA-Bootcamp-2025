let n = parseInt(prompt("Enter the count of numbers:"));
let product = 1;
for (let i = 0; i < n; i++) {
  let num = parseFloat(prompt("Enter number " + (i + 1) + ":"));
  product *= num;
}
console.log("Cumulative Total = " + product);
