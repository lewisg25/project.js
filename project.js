//1. Despot some money
//2. Collect a bet amount
//3.Determine number of lines to bet on
//4.Spin the slot machine
//5Check if user won
//6. Give the user the money
//7 play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
         const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
    } else {
        return numberDepositAmount;
    } 
    }
  
};
const depositAmount = deposit();
console.log(depositAmount);