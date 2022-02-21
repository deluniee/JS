document.querySelector("h1").innerHTML = "AidanaRamazanova CS-2119";
document.getElementById('date').innerHTML = Date();

document.querySelector("h3").innerHTML = "876 days left until the freedom!"
function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}