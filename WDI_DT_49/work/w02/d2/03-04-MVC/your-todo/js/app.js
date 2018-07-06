/*

  Global variables. You shouldn't modify them.

*/

const $messages = document.querySelector('.messages');
const $button = document.querySelector('.button');
const $input = document.querySelector('input');

/*

  View function 

*/

function createList(data) {
  /*

    createList should render the data passed to it. data is an array 
    of objects. Each object has two properties: id and message.

  */
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
   /*
    addData should take some text and create a new list object that looks something like this:

    { 
      id: <Some Integer>,
      message: <Some message String>
    }

    You should then push the above object into the globally available gaData array.

   */
  },

  getAllData: function () {
    /*

      This method should return the gaData array.

    */
  }

};

/*

  DO NOT CHANGE ANY CODE BELOW THIS POINT

*/

document.addEventListener('load', createList(model.getAllData()));
