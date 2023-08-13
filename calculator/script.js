function calculator() {
  var display = document.getElementById("display");

  this.addNumber = function (number) {
    display.value += number;
  };

  this.addOperator = function (operator) {
    display.value += operator;
  };

  this.clearDisplay = function () {
    display.value = "";
  };

  this.calculate = function () {
    var expression = display.value;
    var result = eval(expression);
    display.value = result;

    var historyItem = expression + " = " + result;
    updateHistoryDisplay(historyItem);
  };
}

function updateHistoryDisplay(item) {
  const historyList = document.getElementById("history-list");
  const li = document.createElement("li");
  li.textContent = item;
  historyList.appendChild(li);
}

var calculator = new calculator();
