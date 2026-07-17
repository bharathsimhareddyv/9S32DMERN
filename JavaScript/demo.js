function add(){
    const number1 = Number(document.getElementById("num1").value)
const number2 = Number(document.getElementById("num2").value)

const sum = number1+number2

document.getElementById("result").innerHTML = sum
}