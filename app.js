
let userName; 

function askName() {
  userName = localStorage.getItem('userName');
  if (!userName) {
    userName = prompt('Hey 👋 What is your name?');
    }

    if (userName != "" && userName != null) {
    const greeting = document.getElementById('greeting');
    greeting.innerText = `Hi, ${userName}!`;
    localStorage.setItem('userName', userName);
  } else {
    greeting.innerText = 'Hi, user!';
  }
}

window.addEventListener('load', askName);


let addIncomeButton = document.getElementById('add-income-button');
let addExpenseButton = document.getElementById('add-expense-button');
let addBalanceBtn = document.getElementById('add-balance');

let dateInput = document.getElementById('date');
let descriptionInput = document.getElementById('description');
let amountInput = document.getElementById('amount');
let balanceInput = document.getElementById('input-balance');

let balanceDisplay = document.getElementById('balance-display');
let incomeDisplay = document.getElementById('income-display');
let expenseDisplay = document.getElementById('expense-display');

let balanceAmount = 0;
let incomeAmount = 0;
let expenseAmount = 0;


addBalanceBtn.addEventListener('click', function () {
    let balance = parseInt(balanceInput.value);
  if (isNaN(balance) || balanceInput.value === '') {
    alert('Please enter a numeric value');
  } else {
    balanceAmount += balance;
    balanceDisplay.textContent = balanceAmount;
    balanceInput.value = '';
  }
});



function addIncomeRow() {
  const tableBody = document.getElementById('table-body');
  let row = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td4 = document.createElement('td');

  const removeButton = document.createElement('h3');
  removeButton.textContent = 'Remove';

  td1.textContent = dateInput.value;
  td2.textContent = descriptionInput.value;
  td3.textContent = amountInput.value;
  td4.appendChild(removeButton);

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);

tableBody.appendChild(row);

  row.classList.add('income-transaction');
    
  let amount = parseInt(amountInput.value);
  balanceAmount += amount;
  balanceDisplay.textContent = balanceAmount;

  incomeAmount += amount;
  incomeDisplay.textContent = incomeAmount;

    
  removeButton.addEventListener('click', function () {
    tableBody.removeChild(row);
    balanceAmount -= amount;
    balanceDisplay.textContent = balanceAmount;
    incomeAmount -= amount;
    incomeDisplay.textContent = incomeAmount;
  });

  descriptionInput.value = '';
  amountInput.value = '';
}


function addExpenseRow() {
  const tableBody = document.getElementById('table-body');
  let row = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td4 = document.createElement('td');

  const removeButton = document.createElement('h3');
  removeButton.textContent = 'Remove';

  td1.textContent = dateInput.value;
  td2.textContent = descriptionInput.value;
  td3.textContent = amountInput.value;

  td4.appendChild(removeButton);

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);

  tableBody.appendChild(row);

    row.classList.add('expense-transaction');

    let amount = parseInt(amountInput.value);

    balanceAmount -= amount;
    balanceDisplay.textContent = balanceAmount;

    expenseAmount += amount;
    expenseDisplay.textContent = expenseAmount;
    
    descriptionInput.value = '';
    amountInput.value = '';

  removeButton.addEventListener('click', function () {
    tableBody.removeChild(row);
    balanceAmount += amount;
    balanceDisplay.textContent = balanceAmount;
    expenseAmount -= amount;
    expenseDisplay.textContent = expenseAmount;
  });

  descriptionInput.value = '';
  amountInput.value = '';
}

function buttonState() {
    if (dateInput.value === '' || descriptionInput.value === '' || amountInput.value === '') {
      addIncomeButton.disabled = true;
      addExpenseButton.disabled = true;
    } else {
      addIncomeButton.disabled = false;
      addExpenseButton.disabled = false;
    }
  }
  
dateInput.addEventListener('input', buttonState);
descriptionInput.addEventListener('input', buttonState);
amountInput.addEventListener('input', buttonState);


addIncomeButton.addEventListener('click', function () {
    addIncomeRow();
});


addExpenseButton.addEventListener('click', function () {
    addExpenseRow();
});




