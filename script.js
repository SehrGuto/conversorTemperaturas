function convertTemperature() {
    // Sacando la información del formulario de la página y almacenando en variables
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let resultDiv = document.getElementById('result');

    // una variable para almacenar el resultado
    let convertedTemperature;

    //dependiendo de la unidad de temperatura usada en el formulario realizar la conversión
    if (unit === 'celsius') {
        // Convertir de Celsius a Fahrenheit y agregar al html
        convertedTemperature = (temperature * 9/5) + 32;
        resultDiv.innerHTML = temperature + ' grados Celsius son ' + convertedTemperature.toFixed(2) + ' grados Fahrenheit.';
    } else {
        // Convertir de Fahrenheit a Celsius y agregar al html
        convertedTemperature = (temperature - 32) * 5/9;
        resultDiv.innerHTML = temperature + ' grados Fahrenheit son ' + convertedTemperature.toFixed(2) + ' grados Celsius.';
    }
}