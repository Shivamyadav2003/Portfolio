let header = document.querySelector("header");
let input = document.querySelector("input");
let button = document.querySelector("button");
let boxes = document.querySelectorAll(".box");

button.addEventListener("click", () =>{
  let name = input.value;
  header.textContent = `Hello, ${name}!`;

});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let color = box.textContent.toLowerCase();
    box.style.backgroundColor = color;
  });
});
