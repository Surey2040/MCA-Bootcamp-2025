let num = Number(prompt("Enter the number"));
let product = 1;

for (let i = 0; i <= num; i++) {
  console.log(i);
  product *= i;
}

console.log("product of each number", product);
