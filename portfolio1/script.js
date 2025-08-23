const text = ["Coder", "Editor", "Designer","Content Creater"]

let index = 0;
const span = document.querySelector(".change");


function changeText(){

    span.textContent = text[index];
    index = (index + 1) % text.length;
}

  setInterval(changeText, 1000);
  changeText();


