function getInputValue(inputId) {
    const InputField = document.getElementById(inputId);
    const inputAmountText = InputField.value;
    const amountValue = parseFloat(inputAmountText);

    return amountValue;
}


// handle calculate button event
document.getElementById('calculate-button').addEventListener('click', function(){
    /* const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText); */

    const incomeAmount = getInputValue('income-input');

    // update balance
    const foodExpense = document.getElementById('food');
    const rentExpense = document.getElementById('rent');
    const clothExpense = document.getElementById('clothes');

    // update toall expenses
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = parseFloat(foodExpense.value) + parseFloat(rentExpense.value) + parseFloat(clothExpense.value);

    // update balance
    const balanceTotal = document.getElementById('balance-total').innerText = incomeAmount - totalExpenses.innerText;

    if (incomeAmount < 0 ){
        alert('Please input positive number')
    }
    
});


document.getElementById('save-button').addEventListener('click', function(){
    //update saving

    /* const saveInput = document.getElementById('save-input');
    const saveAmountText = saveInput.value;
    const saveAmount = parseFloat(saveAmountText); */

    const saveAmount = getInputValue('save-input')
    
    //update balance
    const balanceInput = document.getElementById('balance-total');
    
    const balanceAmountText = balanceInput.innerText;
    const balance = parseFloat(balanceAmountText);

   

    // update remaining balance
    const totalSaving = balance / 100 * saveAmount;
    const remainingBalance = balance - totalSaving;

    if (saveAmount < 0 ){
        alert('Please input positive number')
    }

    document.getElementById('saving-amount').innerText = totalSaving;
    document.getElementById('remaining-balance').innerText = remainingBalance;

})
