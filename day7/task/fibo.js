let fibo = Number(prompt("Enter many fibonaci terms : "));
let f1 = 1;
let f2 = 1;
console.log(f1);
console.log(f2);

for (let i = 3; i <= fibo; i++) {
  let sum = f1 + f2;
  console.log(sum);
  f1 = f2;
  f2 = sum;
}
