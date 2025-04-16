function changeNumber(id, value) {
    let element = document.getElementById(id);
    let newValue = parseInt(element.textContent) + value;
    element.textContent = newValue;
}

function calculate(operation) {
    let num1 = parseInt(document.getElementById("num1").textContent);
    let num2 = parseInt(document.getElementById("num2").textContent);
    let result = 0;

    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Error";
    }

    document.getElementById("result").textContent = "Result: " + result;
}
