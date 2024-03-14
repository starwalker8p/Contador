const display = document.getElementById("counter")
const increasebtn = document.getElementById("increase")
const resetbtn = document.getElementById("reset")
const decreasebtn = document.getElementById("decrease")
let count = 0
increasebtn.onclick = function(){
    count++;
    display.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    display.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    display.textContent = count;
}