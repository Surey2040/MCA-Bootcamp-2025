let temp = Number(prompt("enter the water temperature"));

if (temp < 0) {
  console.log("Water status is ice for the temperature", temp);
} else if (temp >= 0 && temp <= 100) {
  console.log("water is normal temperature", temp);
} else if (temp > 100) {
  console.log("water state is stream for the temperature", temp);
}
