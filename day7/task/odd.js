let n = Number(prompt("enter the number"));
let sum = 0;
for (let i = 0; i <= n; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    sum += i;
  }
}

console.log("the odd num", sum);
