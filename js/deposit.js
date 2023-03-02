// step-1: add event listener to the deposit btn
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit ammount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;

})