let code = prompt("Enter the single word for the color code");

switch (code) {
  case "r":
  case "R":
    console.log("RED");
    break;
  case "g":
  case "G":
    console.log("GREEN");
    break;
  case "b":
  case "B":
    console.log("BLUE");
    break;
  default:
    console.log("BLACK");
    break;
}
