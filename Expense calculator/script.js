const textField = document.getElementById("input-text");
const numberField = document.getElementById("input-number");
const calculateBtn = document.getElementById("calculate-btn");
const totalAmount = document.getElementById('total-amount');

const container = document.getElementById("main-container");

calculateBtn.addEventListener("click", function () {
  let expense = textField.value;
  let amount = Number(numberField.value);

  let row = `<div id="list-container">
        <p>${expense}</p>
        <p>${amount}</p>
      </div>`;
      let total = Number(totalAmount.innerText);
      total += amount;
      totalAmount.innerText = total;

      container.innerHTML += row;

});
