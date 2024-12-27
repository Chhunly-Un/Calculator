const display = document.getElementById("display");

function clickMe(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculator() {
    try {
        display.value = eval(display.value);
    }catch (error) {
        display.value = "ERRPR!";
    }
}