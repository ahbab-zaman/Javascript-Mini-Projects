const counter = document.getElementById("para-amount");
const plusButton = document.getElementById("plus-btn");
const minusButton = document.getElementById("minus-btn");

let count = 0;

function updateCounter(value) {
  // plusButton code
  count = count + value;
  counter.innerText = count;

  if (count >= 20) {
    plusButton.setAttribute("disabled", true);
  } else {
    plusButton.removeAttribute("disabled");
  }

  // minusButton code
  if (count <= 0) {
    minusButton.setAttribute("disabled", true);
  } else {
    minusButton.removeAttribute("disabled");
  }
}

plusButton.addEventListener("click", function () {
    updateCounter(1);
});

minusButton.addEventListener("click", function () {
    updateCounter(-1);
});
