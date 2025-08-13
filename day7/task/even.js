let sum = 0;
for (let i = 2; i < 31; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sum += i;
  }
}

console.log("sum of even numbers from 2 to 30", sum);
