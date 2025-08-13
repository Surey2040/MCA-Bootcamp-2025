let string = prompt("enter the string");
let reversed = "";

for (let i = string.length - 0; i >= 0; i--, reversed += string[i]);
{
  console.log("Enter the string", string);
  console.log("reversed :", reversed);
}
