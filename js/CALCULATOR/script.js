//js calculator program

let display = document.getElementById("display");

function appendToDisplay(input) {
     display.value += input;
}

function clearDisplay() {
     display.value = "";
}

function calculate() {
     try {
          display.value = eval(display.value);
     }
     catch(error) {
          display.value = "pls let be guided"
     }

}
function square() {
     display.value = Math.pow(display.value,2)
}
function squared() {
     display.value = Math.sqrt(display.value)
}
function cube() {
     display.value = Math.pow(display.value,3)
}

function cubed() {
     display.value = Math.cbrt(display.value)
}
