## Comparative Development: Naughts-and-Crosses in jQuery

One of the best opportunities you will have to improve as a developer in WDI is by building out Tic-Tac-Toe repeatedly. You will build Tic-Tac-Toe with the following tools and technologies:

1. HTML/JS/CSS
2. HTML/JS/CSS + jQuery 
3. Ruby 
4. React.js

Each time you re-build this application you are afforded the opportunity to re-examine your approach and general code quality and refine it. 

## The Task 

Build Tic-Tac-Toe using jQuery for DOM selection and manipulation. You can use the code from your first foray into Tic-Tac-Toe. This will involved replacing native JavaScript DOM selection and manipulation with jQuery. This will (hopefully) clearly illustrate the differences and similarities between jQuery and native JavaScript DOM methods. 

All the same rules apply as before. Your goal is to get your Tic-Tac-Toe to work using jQuery. 

## Some Tips 

To select DOM nodes using JS you write:

```js
document.querySelector('div') 
```

To select DOM nodes using jQuery you write:

```js
$('div')
```

To set the `innerHTML` property of a DOM node using JavaScript:

```js
document.querySelector('div').innerHTML = "<h1>Title</h1>";
```

To set the `innerHTML` property of a DOM node using jQuery:

```js
$('div').html("<h1>Title</h1>");
```

Good luck!
