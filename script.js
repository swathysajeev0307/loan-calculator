/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

document.getElementById('calculateBtn').addEventListener("click", calculateLoan);

function calculateLoan(){

    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("interestRateInput").value);
    const loanTerm = parseFloat(document.getElementById("loanTermInput").value);

    if(isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)){
        alert("Please enter valid numbers for all the fields");
    }

    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm;
    const monthlyPayment = (loanAmount * monthlyInterest)/(1-Math.pow(1 + monthlyInterest, -totalPayments));
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    displaResult(monthlyPayment, totalInterest);

}

function displaResult(monthlyPayment, totalInterest){

    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest: ${totalInterest.toFixed(2)}</strong></p>
    
    
    `;
}