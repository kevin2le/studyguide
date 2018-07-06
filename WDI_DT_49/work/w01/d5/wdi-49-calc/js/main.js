/*----- constants -----*/

// Using an object as a lookup for the op functions - see line 61
// Also, moved the parseFloats - see line 49
const ops = {
  '+': function(n1, n2) { return n1 + n2; },
  '−': function(n1, n2) { return n1 - n2; },
  '×': function(n1, n2) { return n1 * n2; },
  '÷': function(n1, n2) { return n1 / n2; }
};

/*----- app's state (variables) -----*/
var input, firstNum, op, result;

/*----- cached element references -----*/
var displayEl = document.getElementById('0');

/*----- event listeners -----*/
document.querySelector('table')
  .addEventListener('click', handleClick);

/*----- functions -----*/
initialize();
render();

function handleClick(evt) {
  if (evt.target === displayEl) return;
  var text = evt.target.textContent;
  switch (text) {
    case 'CA':
      initialize();
      break;
    case '←':
      input = input.substr(0, input.length - 1);
      break;
    case '±':
      if (input && input[0] === '-') {
        input = input.substr(1, input.length - 1);
      } else if (input) {
        input = '-' + input;
      }
      break;
    case '.':
      if (!input.includes('.')) input += text;
      break;
    case '=':
      if (!op || !input) return;
      result = op(parseFloat(firstNum), parseFloat(input));
      input = firstNum = '';
      op = null;
      break;
    // Below is the syntax if you want to match multiple cases
    case '+':
    case '−':
    case '×':
    case '÷':
      if (!input) return;
      firstNum = input;
      input = '';
      op = ops[text];
      break;
    default:
      input += text;
  }
  render();
}

function initialize() {
  input = firstNum = '';
  op = result = null;
}

function render() {
  var text;
  if (op && !input) {
    text = firstNum;
  } else {
    text = result || input || '0';
    result = null;
  }
  displayEl.textContent = text;
}

