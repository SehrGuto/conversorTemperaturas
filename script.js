function convertTemperature() {
    // Sacando la información del formulario de la página y almacenando en variables
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let resultDiv = document.getElementById('result');

    // una variable para almacenar el resultado
    let convertedTemperature;
    let convertedTemperature2;

    //dependiendo de la unidad de temperatura usada en el formulario realizar la conversión
    if (unit === 'celsius') {
        // Convertir de Celsius a Fahrenheit y a Kelvin y agregar al html
        convertedTemperature = (temperature * 9/5) + 32;
        convertedTemperature2 = (temperature + 273.15);
        resultDiv.innerHTML = temperature + ' grados Celsius son ' + convertedTemperature.toFixed(2) + ' grados Fahrenheit. y ' + convertedTemperature2.toFixed(2) + ' Kelvin.';
    } else if (unit === 'fahrenheit'){
        // Convertir de Fahrenheit a Celsius y a kelvin y agregar al html
        convertedTemperature = (temperature - 32) * 5/9;
        convertedTemperature2 = (temperature + 459.67) * 5/9;
        resultDiv.innerHTML = temperature + ' grados Fahrenheit son ' + convertedTemperature.toFixed(2) + ' grados Celsius. y ' + convertedTemperature2.toFixed(2) + ' Kelvin.';
    }
}