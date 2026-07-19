const calculateBtn = document.getElementById("calculateBtn");
const numberInput = document.getElementById("number");
const percentInput = document.getElementById("percent");
const percentageResult = document.getElementById("percentageResult");
const finalResult = document.getElementById("finalResult");

calculateBtn.addEventListener("click", () => {
    const number = parseFloat(numberInput.value)
    const percentageinput=parseFloat(percentInput.value)
    if(isNaN(number)  || isNaN(percentageinput)){
        alert("enter valid number ")
        return;
    }
    const percentage=(number*percentageinput)/100
    const amount=percentage+number 
    percentageResult.textContent= "$" + parseFloat(percentage)
    finalResult.textContent="$" +parseFloat(amount)
    
})