let text = prompt("Enter the text below:");
let letters = 0;
let digits = 0;
let spaces = 0;
let others = 0;
for (let i = 0; i < text.length; i++) {
  let char = text[i];
  if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
    letters++;
  } else if (char >= "0" && char <= "9") {
    digits++;
  } else if (char === " ") {
    spaces++;
  } else {
    others++;
  }
}
console.log("Letters: " + letters);
console.log("Digits: " + digits);
console.log("Spaces: " + spaces);
console.log("Others: " + others);
