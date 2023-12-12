document.querySelector("input").addEventListener("input", test);


function test () {
    let val = document.querySelector("input").value;
    document.querySelector('h1').innerText = (val)
}


let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let input = document.querySelector("#input");
let button = document.querySelector("#Colors")

increase.addEventListener("click", function(){
    input.value++;
    Math.max(0)    
})

decrease.addEventListener("click", function(){
    input.value--;
})

button.addEventListener("click", function(){
    let red = Math.floor(Math.random()* 255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random()* 255);

    document.body.style.background = `rgb(${red},${green},${blue})`;
})