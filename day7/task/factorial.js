let n = Number(prompt("enter the  N values"));
let Factorial = 1;

console.log("N   |    Factorial");
for (i = 1; i <= n; i++) {
  Factorial *= i;
  console.log(`${i}   |    ${Factorial}`);
}
