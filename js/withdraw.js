/*
1. add event handler with withdraw button
2.get the withdraw ammount form the withdraw input field
2.5 also make sure to convert the input ingto a number by using parseFloat
3. get previous withdraw total
4.calculate total withdraw amount
5.get the total withdraw amount
6.calculate new balance total
6.5 set the new balance total
7.clear the field
*/

// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newDepositAmount = parseFloat(newWithDrawAmountString);

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   
    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(previousBalanceTotal);

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
     balanceTotalElement.innerText = newBalanceTotal;

    // step-7
    withdrawField.value = '';
})