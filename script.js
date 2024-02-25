const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const textResult = document.getElementById("result");

checkButton.addEventListener("click", () => {
  if (textInput.value == "") {
    alert("Please input a value");
  } else {
    let input = textInput.value.replace(/[\W_]+/g,"").toLowerCase();
    let reverse = [...input].reverse().join("");
    if (input === reverse) {
      textResult.innerHTML = `<strong>${textInput.value}</strong> is a palindrome`;
    } else {
      textResult.innerHTML = `<strong>${textInput.value}</strong> is not a palindrome`;
    }
  }
});
