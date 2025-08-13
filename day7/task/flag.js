let flag = Number(prompt("enter the value for the flagr"));

switch (flag) {
  case 1:
    console.log("HOT");
    break;
  case 2:
    console.log("luke warm");
    break;
  case 3:
    console.log("COLD");
    break;
  case 4:
    console.log(" OVERCOLD");
    break;
  default:
    console.log("OUT OF RANGE");
    break;
}
