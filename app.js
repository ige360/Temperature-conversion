function fromCelsius() {
    const selectedOption = document.getElementById("temp").value;
    const optionTwo = document.getElementById("tempValue").value;
    const inputValue = document.getElementById("value").value;
    if (selectedOption == "celcius" && optionTwo == "fah") {
        celToFah();
    } else if (selectedOption == "celcius" && optionTwo == "kel") {
        celToKel();
    } else if (selectedOption == "celcius" && optionTwo == "cel") {
        document.getElementById("result").value =  inputValue + "°C";
    } else if (selectedOption == "fahrenheit" && optionTwo == "cel") {
        fahToCel();
    } else if (selectedOption == "fahrenheit" && optionTwo == "kel") {
        fahToKel();
    } else if (selectedOption == "fahrenheit" && optionTwo == "fah") {
        document.getElementById("result").value = inputValue + "°F";
    } else if (selectedOption == "kelvin" && optionTwo == "cel") {
        kelToCel();
    } else if (selectedOption == "kelvin" && optionTwo == "fah") {
        kelToFah();
    } else {
        document.getElementById("result").value = inputValue + "K";
    }
}

function celToFah () {
    const result = document.getElementById("result");
    const celsius = parseFloat(document.getElementById("value").value);
    const fahrenheit = (celsius * 9/5) + 32;
    result.value = fahrenheit.toFixed(0) + "°F";
}
function celToKel () {
    const inputValueCel = document.getElementById("value").value;
    const result1 = document.getElementById("result");
    const cel = parseFloat(inputValueCel);
    const kel = cel + 273;
    result1.value = Math.floor(kel) + "K";
}
function fahToCel () {
    const inputValueFah = document.getElementById("value").value;
    const result2 = document.getElementById("result");
    const fah = parseFloat(inputValueFah);
    const cel = (fah - 32) * 5/9;
    result2.value = Math.floor(cel) + "°C";
}
function fahToKel () {
    const inputValueFah = document.getElementById("value").value;
    const result3 = document.getElementById("result");
    const fah = parseFloat(inputValueFah);
    const kel = ((fah - 32) * 5/9) + 273.15;
    result3.value = Math.floor(kel) + "K";
}
function kelToCel () {
    const inputValueKel = document.getElementById("value").value;
    const result4 = document.getElementById("result");
    const kel = parseFloat(inputValueKel);
    const cel = kel-273;
    result4.value = Math.floor(cel) + "°C";
}
function kelToFah () {
    const inputValueKel = document.getElementById("value").value;
    const result5 = document.getElementById("result");
    const kel = parseFloat(inputValueKel);
    const fah = ((kel - 273) * 9/5) + 32;
    result5.value = Math.floor(fah) + "°F";
}


