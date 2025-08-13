let P = prompt("Enter the principle amount:");
let N = prompt("enter the no of year: ");
let R = prompt("Enter the rate of Intreset: ");
let i = R / 100;

let F = P * Math.pow(1 + i / 100, 100);

console.log("Compound intreset is : ", F);
