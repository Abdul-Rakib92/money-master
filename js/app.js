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
// function percent(num1, num2) {
//     const result = num1 /100 * num2;
//     return result;
// }

document.getElementById('save-button').addEventListener('click', function(){
    const saveInput = document.getElementById('save-input');
    const saveTotalText = saveInput.value;
    const saveTotal = parseFloat(saveTotalText);

    const balanceTotal = document.getElementById('balance-total');
    const balanceAmountText = balanceTotal.innerText;
    const balance = parseFloat(balanceAmountText);



    // const save = percent(balance * saveTotal);


    // update saving amount
    /* const savingAmount = document.getElementById('saving-amount');
    const savingAmountText = savingAmount.innerText;
    const saving = parseFloat(savingAmountText); */
    const totalSaving = balance / 100 * saveTotal;
    const remainingBalance = balance - totalSaving;


    // update remaining balance
    const savingAmount = document.getElementById('saving-amount').innerText = totalSaving;
    document.getElementById('remaining-balance').innerText = remainingBalance;


    // const save = parseFloat(savingAmountText);
    // savingAmount.innerText = parseFloat()

    
    // const save = balanceTotal * 0.2;

    // savingAmount.innerText = save - saveTotal;

    // console.log('fas',  );

})
