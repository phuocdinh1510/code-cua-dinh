var result = document.getElementById('result');

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function toggleSign() {
  var currentValue = parseFloat(result.value);
  if (!isNaN(currentValue)) {
    result.value = -currentValue;
  }
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert('Invalid Calculation');
  }
}
function deleteValue() {
  result.value = result.value.slice(0, -1); //cắt ký tự cuối cùng 
}