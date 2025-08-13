let product = 1;
for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    product *= i;
  }
}

console.log("product of odd numbers", product);
