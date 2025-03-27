
function checkTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const resultElement = document.getElementById('result');
    if (isNaN(temperature)) {
        resultElement.textContent = "Please enter a valid temperature!!!!!!.";
        resultElement.style.color = "red";
         resultElement.style.fontSize = "25px"
    } else if (temperature <= 10) {
        resultElement.textContent = "lbas 7wayjk tbradt lwa9t! 🥶";
        resultElement.style.color = "blue";
        resultElement.style.fontSize = "25px"
    } else if (temperature > 10 && temperature <= 20) {
        resultElement.textContent = "ljaw  zwin bin obin 😌";
        resultElement.style.color = "green";
         resultElement.style.fontSize = "25px"
    } else if (temperature > 20 && temperature <= 30) {
        resultElement.textContent = "ljaw dyal lb7ar !🌞";
        resultElement.style.color = "orange";
         resultElement.style.fontSize = "25px"
    } else {
        resultElement.textContent = "wa trghaaa   ! 🔥";
        resultElement.style.color = "red";
         resultElement.style.fontSize = "25px"
    }
}
