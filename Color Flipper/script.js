const body = document.querySelector("body")
const greenBtn = document.querySelector("#buttonGreen")
const redBtn = document.querySelector("#buttonRed")
const blueBtn = document.querySelector("#buttonBlue")
const randomBtn = document.querySelector("#buttonRandom")

greenBtn.addEventListener("click", function(){
    body.style.backgroundColor = "green";
})
redBtn.addEventListener("click", function(){
    body.style.backgroundColor = "red";
})
blueBtn.addEventListener("click", function(){
    body.style.backgroundColor = "blue";
})
randomBtn.addEventListener("click", function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    body.style.backgroundColor = "#" + randomColor;
})