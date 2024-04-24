function convert() {
    let temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    let resultOutput = document.getElementById('resultOutput');
    let calculationExplanation = document.getElementById('calculationExplanation');

    if (!isNaN(temperatureInput)) {
        let fahrenheit = (temperatureInput * 9 / 5) + 32;
        resultOutput.value = fahrenheit.toFixed(2) + ' °F';
        calculationExplanation.value = temperatureInput + ' °C * 9/5 + 32 = ' + fahrenheit.toFixed(2) + ' °F';
    } else {
        resultOutput.value = 'Harap masukkan nilai!';
        calculationExplanation.value = '';
    }
}

function reset() {
    document.getElementById('temperatureInput').value = '';
    document.getElementById('resultOutput').value = '';
    document.getElementById('calculationExplanation').value = '';
}

function reverseConversion() {
    let resultOutput = document.getElementById('resultOutput');
    let temperatureInput = parseFloat(resultOutput.value);

    if (!isNaN(temperatureInput)) {
        var celsius = (temperatureInput - 32) * 5 / 9;
        document.getElementById('temperatureInput').value = celsius.toFixed(2);
        document.getElementById('calculationExplanation').value = temperatureInput + ' °F - 32 * 5/9 = ' + celsius.toFixed(2) + ' °C';
    } else {
        document.getElementById('temperatureInput').value = 'Harap masukkan nilai!';
        document.getElementById('calculationExplanation').value = '';
    }
}
