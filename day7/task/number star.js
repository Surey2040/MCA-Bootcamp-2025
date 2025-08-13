let numbers = [];
for (let i = 0; i < 5; i++) {
  num = parseInt(prompt("Enter number " + (i + 1) + ":"));
  numbers.push(num);
}
for (let i = 0; i < numbers.length; i++) {
  num = numbers[i];
  stars = "";
}
for (let j = 0; j < num; j++) {
  stars += "*";
}
console.log(num + " " + stars);
