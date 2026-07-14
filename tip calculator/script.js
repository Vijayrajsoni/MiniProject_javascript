function calculateTip() {
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipAmount = parseFloat(document.getElementById('service').value);
    const peopleCount = parseInt(document.getElementById('people').value);
     
    if (isNaN(billAmount) || isNaN(tipAmount) || isNaN(peopleCount) || peopleCount <= 0) {
        alert('Please enter valid numbers for bill amount, tip percentage, and number of people.');
        return;
    }
    
    const tipTotal = billAmount * (tipAmount);
    const tipPerPerson = tipTotal / peopleCount;
    const totalAmount = billAmount + tipTotal;
    const totalPerPerson = totalAmount / peopleCount;
    const tipAmt=document.getElementById('tipAmount').innerText = `$${(tipTotal).toFixed(2)}`;
    const totalAmt=document.getElementById('totalAmount').innerText = `$${(totalAmount).toFixed(2)}`;
    const perPersonAmt=document.getElementById('perPerson').innerText = `$${(totalPerPerson).toFixed(2)}`;
    const tipPerPersonAmt=document.getElementById('tipPerPerson').innerText = `$${(tipPerPerson).toFixed(2)}`;
    
}
function reset(){
    document.getElementById('bill').value = '';
    document.getElementById('service').value = '';
    document.getElementById('people').value = '';
    document.getElementById('tipAmount').innerText = '$0.00';
    document.getElementById('totalAmount').innerText = '$0.00';
    document.getElementById('perPerson').innerText = '$0.00';
    document.getElementById('tipPerPerson').innerText = '$0.00';
}