const text = ["Coder", "Editor", "Designer","Content Creater"]

let index = 0;
const span = document.querySelector(".multi-text");


function changeText(){

    span.textContent = text[index];
    index = (index + 1) % text.length;
}

  setInterval(changeText, 1000);
  changeText();


