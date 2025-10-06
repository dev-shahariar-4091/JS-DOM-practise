// Change the element of the H1:
const buttonAdd = document.getElementById("btn");
const textAdd = document.getElementById("text");
buttonAdd.addEventListener("click", function(){
    textAdd.innerText = "Hello, JavaScript DOM!";
})

// Change background color

const clicked = document.getElementById('btn-color');
const body = document.body;
clicked.addEventListener("click" , function(){
    body.style.backgroundColor = "lightblue"

}) 