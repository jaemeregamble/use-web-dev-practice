const tempInput = document.querySelector("#tempInput");
const wearButton = document.querySelector("#wearButton");
const result = document.querySelector("#result");

wearButton.addEventListener("click", function() {
    const rawInput = tempInput.value;
    const temp = Number(rawInput);
    if (rawInput === "" || isNaN(temp)) {
        result.textContent = "Error: Please enter a valid number temperature.";
    }
    else if (temp < 50 ) {
        result.textContent = "Coat or jacket";
    }
    else if ( temp >= 50 && temp <= 69) {
        result.textContent = "Light jacket or sweater";
    }
    else if (temp >= 70 && temp <= 84) {
        result.textContent = "T-shirt or light clothing";
    }
    else {
        result.textContent = "Lightweight clothing";
    }
    });