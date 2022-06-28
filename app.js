// // console.log('hello world');
const inputTotal = document.getElementById('userInput');
const tipAmounts = document.querySelectorAll('.tip__selection-item');
const numOfPeople = document.getElementById('peoples');
let tipDisplay = document.getElementById('tip__amount');
let amountDisplay = document.getElementById('total__person');
const resetButton = document.getElementById('reset__button');
const customButton = document.getElementById('custom__button');

// Needed
function getBillTotal(e) {
	let billTotal = inputTotal.value;
	let tipAmount = e.target.value;
	let tipTotal = (parseInt(billTotal) / 100) * parseInt(tipAmount);
	let tipTotalPerPerson = tipTotal / numOfPeople.value;
	tipDisplay.innerHTML = tipTotalPerPerson.toFixed(2).toString();
	let totalAmount = parseInt(billTotal) + tipTotal;
	let amountEachPerson = totalAmount / parseInt(numOfPeople.value);
	amountDisplay.innerHTML = `$${amountEachPerson.toFixed(2).toString()}`;
}

tipAmounts.forEach((tip) => {
	tip.addEventListener('click', getBillTotal);
});

resetButton.addEventListener('click', function () {
	inputTotal.value = 0;
	peoples.value = 1;
	tipDisplay.innerHTML = 0;
	amountDisplay.innerHTML = 0;
});

// get input from user bill
// add percent of tip chosen in active - show chosen amount
// get number of people to divide total by input
// show total for each person

// reset all totals and active state
