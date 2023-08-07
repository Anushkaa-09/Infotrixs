let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
let history = document.getElementById("history");
function calculations(v) {
  para = document.createElement("p");
  data = v + "-" + eval(v);
  para.innerText = data;
  history.appendChild(para);
  return eval(v);
}
