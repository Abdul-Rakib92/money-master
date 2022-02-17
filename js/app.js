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
    document.getElementById('balance-total').innerText = incomeAmount - totalExpenses.innerText;
});
