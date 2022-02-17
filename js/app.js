// handle calculate button event


document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

    // update balance
    const foodExpense = document.getElementById('food');
    const rentExpense = document.getElementById('rent');
    const clothExpense = document.getElementById('clothes');

    // update toall expenses
    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = parseFloat(foodExpense.value) + parseFloat(rentExpense.value) + parseFloat(clothExpense.value);;

    // update balance
    const balanceTotal = document.getElementById('balance-total').innerText = incomeAmount - totalExpenses.innerText;
});

document.getElementById('save-button').addEventListener('click', function(){
    const saveInput = document.getElementById('save-input');
    const saveTotalText = saveInput.value;
    const saveTotal = parseFloat(saveTotalText);

    const balanceTotal = document.getElementById('balance-total').innerText

    const save = balanceTotal * 0.2;


    // update saving amount
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.innerText;
    savingAmount.innerText = save
    // const save = parseFloat(savingAmountText);
    // savingAmount.innerText = parseFloat()

    
    // const save = balanceTotal * 0.2;

    // savingAmount.innerText = save - saveTotal;

    // console.log('fas',  );

})
