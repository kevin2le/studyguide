/*

  Global variables

*/

const $messages = document.querySelector('.messages');
const $button = document.querySelector('.button');
const $input = document.querySelector('input');

/*

  View function 

*/

function createList(data) {
  let domString = '';
  for (let index = 0; index < data.length; index++) {
    let item = data[index];
    domString += `<li id="${item.id}">${item.message}</li>`
  }
  $messages.innerHTML = domString;
};

/*

  Controller function

*/

function controller() {
  model.addData($input.value);
  createList(model.getAllData());
  $input.value = "";
}

$button.addEventListener('click', controller)

/*

  Model object

*/

const model = {
  idCount: 26,

  addData: function(text) {
    let newData = {
      id: this.idCount,
      message: text
    };
    window.gaData.push(newData);
    this.idCount += 1;
    createList(window.gaData);
  },

  getAllData: function () {
    return gaData;
  }

};

/*

  DO NOT CHANGE ANY CODE BELOW THIS POINT

*/

document.addEventListener('load', createList(model.getAllData()));