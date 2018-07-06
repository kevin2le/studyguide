/*

    Global variables:
        input: selects <input> DOM node
        $button: selects <button> DOM node 
        $listItems: selects ol with class "list-items"
        localStorage: localStorage API 

*/

const input = document.querySelector('input');
const $button = document.querySelector('button');
const $listItems = document.querySelector('.list-items');
const localStorage = window.localStorage;

/*

    Our "dumb" view simply takes data and displays it to the page

*/


function view(listItems) {
    let items = "";
    listItems.forEach(function(cats) {
        items += `<li>${cats.text}</li>`;
    })
    $listItems.innerHTML = items;
};


/*

    Our controller handles events and calls the view with the latest data

*/

function controller() {
    if (input.value.length > 30) {
        alert('Todo to long. Shorten it up a bit');
        return;
    }
    model.addListItem(input.value);
    view(model.getList().list);
    input.value = "";
};

$button.addEventListener('click', controller);

/*

    ListModel is our model. It interacts with our localStorage database.

*/

class ListModel {
    
    constructor(dbName) {
        this.dbName = dbName;
        this.currentId = 0;
    }

    getList() {
        let db = JSON.parse(localStorage.getItem(this.dbName));
        return db ? db : {list: []};
    }

    addListItem(text) {

        let newListItem = {
            id: this.currentId,
            text
        };

        let currentDb = this.getList();
        currentDb.list.push(newListItem);
        localStorage.setItem(this.dbName, JSON.stringify(currentDb));
        this.currentId += 1;
    }

}

const model = new ListModel('todoListItems');

/*

    init function makes it so ToDo's appear when page is loaded.

*/

function init() {
    view(model.getList().list);
};

init();


