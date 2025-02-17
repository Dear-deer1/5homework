let count = 0;
const button = document.getElementById("clickButton");
const counterDisplay = document.getElementById("counter");
const message = document.getElementById("message");

button.addEventListener("click", function() {
    count++;
    counterDisplay.textContent = count;
    
    if (count >= 15) {
        button.disabled = true;
        message.textContent = "Вы достигли максимального количества кликов!";
    }
});