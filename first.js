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

// Count Button Clicks 

const counter = document.getElementById("count");
const btnIncrease = document.getElementById("btn-increse");
let count = 0;
btnIncrease.addEventListener("click", function(){
   count++;
   counter.value = count;
   
});

// Live Input Preview
const liveInput = document.getElementById("live-input");
const livePra = document.getElementById("live-pra");
liveInput.addEventListener('input', function(){
 livePra.textContent = liveInput.value
})




// Hide and Show Element

const paragraph = document.getElementById("myParagraph");
    const button = document.getElementById("toggleBtn");
     button.addEventListener("click", function() {
      if (paragraph.style.display === "none") {
        // If hidden, show it
        paragraph.style.display = "block";
        button.textContent = "Hide"; // update button text
      } else {
        // If visible, hide it
        paragraph.style.display = "none";
        button.textContent = "Show"; // update button text
      }
    });