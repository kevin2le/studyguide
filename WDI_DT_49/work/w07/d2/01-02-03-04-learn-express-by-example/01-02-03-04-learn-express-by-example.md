# Learning Express By Example

## Learning Objectives 

By the end of this tutorial students should understand: 

* How to use the Express `Router` object to create RESTful routes in an Express application 
* How to use EJS partials to make views more DRY 
* How to use the `method-override` module to create a form that makes `PUT` and `DELETE` requests 
* Have an intuitive grasp of the role middleware plays in an Express application
* Understand the role of the `body-parser` module
* Know how to install npm packages and configure an Express application

## Introduction and Review

Today as a class we're going to create our first full CRUD application using Express. Remember that CRUD stands for **C**reate, **R**ead, **U**pdate and **D**estroy. For example we could *create* a new user, we could *read* a list of all users, we could *update* a single user's information or we could *destroy* a single user. Associated with each of the CRUD operations are HTTP verbs. The most used HTTP verbs are:

  * `GET` - requesting some resource
  * `POST` - creating a new resource
  * `PUT` - update an existing resource
  * `DELETE` - deleting a resource

### JSON

[JSON](http://www.json.org/) stands for JavaScript Object Notation. JSON is a popular format for exchanging data across a network. Most API's respond to HTTP requests with data in JSON form:

```json
{
  "customer_id": "1",
  "first_name": "Jimmy",
  "last_name": "Butler",
  "cart": [
    "Speaker", "Pencil", "Toilet Paper"
  ]
}
```

### An Re-Introduction to Middleware

Express allows you to write server-side code that responds to HTTP requests. Express at its core really only does two things:

  1. Allows a developer to define routes
  2. Allows a developer to specify middleware that HTTP requests and HTTP responses get "run" through

Let's take a moment to discuss middleware. When we use the term *middleware* in the context of Express we are talking about middleware *functions*. These are functions that take 3 parameters:

  1. The request object
  2. The response object
  3. The next middleware function in an application's request-response cycle

Middleware functions look something like this:

```javascript
function(request, response, next) {
  // Do something with the request and response objects
  next(); // Here we are invoking or calling the next middleware function
}
```

#### app.use()

So we now know that middleware in Express is just a function with 3 arguments: the HTTP request, the HTTP response and the `next` middleware function. The only question that remains is how these functions get invoked? To do this we use the `use()` method on the `app` object:

```javascript
const express = require('express');
const app = express();

app.use(my_middleware());

function my_middleware(req, res, next) {
  // Do something with the HTTP request and HTTP response
  next() // Call the next middleware function
}
```

Here we say that `my_middleware` is **mounted** when it gets invoked using `app.use()`. Middleware functions can form a chain that call themselves one after another.

#### The Middleware Stack

What's interesting about middleware is that is forms a series of layers stacked on top of one another that HTTP requests get "run" through. This is best illustrated pictorially:

![middleware-stack](./images/middleware-stack.jpg)

---

## Building shoes

We will be building an application that serves as a database of shoes.

### Configuration

First, we will use Express generator to initialize our application using the following command:

```bash
$ express -e shoes
```

This command creates a new Express application for for us using the EJS templating language (as specified by the `-e` flag) with the following default file structure:

```
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

```

Take a look at `app.js`. Take a note of a few things:

  * with `app.set()` we are specifying the application settings for our Express application
    * On lines 14 and 15 of `app.js` we are setting our `view-engine` to use EJS and we are declaring where all view files will live
    * The *absolute path* is provided to the `app.set()`. You could also provide a relative path and this would still work.
    * You can read more about `app.set()` [here](http://expressjs.com/en/api.html#app.set)
  
We now need to install all of our dependencies. In the root directory of shoes run this command:

```bash
$ npm install
```

Now that we have our Express application created we can start our Node server to ensure that everything went as planned by running:

```bash
$ npm start
```

`npm start` is simply an alias that is configured in our `package.json`. Typing `npm start` actually runs:

```bash
node ./bin/www
```

A *shebang* is used in `www` to specify the `compiler` that should be used to execute this script.

The `www` file has code in it that starts a node server at port 3000.

Next let's rename `app.js` to `server.js` since `app.js` is really acting like a server process: it is listening for requests and responding to them. Typically we reserve the name `app.js` for application code that relates to the business logic of your application.

```bash
$ mv app.js server.js
```

Then on line 7 of `www` change

```javascript
var app = require('../app');
```
to

```javascript
var app = require('../server')
```

We will also install [nodemon](https://www.npmjs.com/package/nodemon):

```bash
$ npm i nodemon -g
```

Nodemon allows us to continually run our server and automatically re-starts it when their is a change to our code. It is very useful and makes developing easier.


Then in our `package.json` change the `start` script:

```json
...
"scripts": {
  "start": "nodemon ./bin/www"
},
...
```

By default Express does not create all of the directories that come out of the box with Ruby on Rails. We therefore must create a few directories manually. In the root directory of your project create the following directories: 

```
$ mkdir models controllers db
```

**Note**: Above we are simply creating three *separate* directories in one line one.

Inside the `models` directory: 

```
$ touch Shoe.js
```

Inside of the `controllers` directory: 

```
$ touch shoes-controller.js
```

Inside of the `db` directory:

```
$ touch db.js
```

Stop your server and run `npm start`. Now your server should restart every time you save a file in your project.

---

### Creating our Routes using Router

Let's start off by creating *ALL* of our RESTful routes.  We will use the same principles of REST when building Express applications.

|URI       |Action Controller|HTTP Verb|
|----------|-----------------|---------|
| /        | index           | GET     |
| /new     | new             | GET     |
| /        | create          | POST    |
| /:id     | show            | GET     |
|/:id/edit | edit            | GET     |
|/:id      | update          | PUT     |
|/:id      | destroy         | DELETE  |

This application has only one resource: shoes. A shoe has the following attributes:

* Shoe ID (Primary Key)
* Shoe Name
* Shoe Release Year
* Shoe Description

In an Express application we typically have one routing file per resource, therefore let's rename one of our routing files to `shoes.js` so we have have a routing file for our shoes resource. Converting our RESTful routes into Express routes looks like this:

(The code below be written inside of the `routes` directory in a file named `shoes.js`).

```js
// shoes.js
var express = require('express');
var router = express.Router();
var shoes = require('./../controllers/shoes-controller');

router.get('/', shoes.index);
router.get('/new', shoes.new);
router.post('/create', shoes.create);
router.get('/:id', shoes.show);
router.get('/:id/edit', shoes.edit);
router.put('/:id', shoes.update);
router.delete('/:id', shoes.destroy);

module.exports = router;
```

What's happening in the code snippet above? We are defining 7 RESTful routes using the Express `Router` object. The `Router` object creates routes that have the following syntax: 

```
router.METHOD(PATH, CALLBACK)
```

`METHOD` refers to an HTTP method (e.g., `get`, `put`, `post, `delete`). `PATH` refers to a URI that request will be made to. `CALLBACK` refers to some callback that will be executed when that route it hit. We will have a JS object called `shoes` with 7 methods:

* `index`
* `new`
* `create`
* `show`
* `edit`
* `update`
* `destroy`

Each one of the above methods corresponds to one of our *controller actions*. We will write these actions in a separate file to keep our code organized and modular.

**Quiz**: Can someone tell me the name and relative path (from `routes/shoes.js`) of our controller file?

We also need to update our reference to our views in `server.js`. In `server.js` we need to:
  * `require('<path_to_shoe.js>)`
  * We need to `app.use()` our routes at all paths

On line 8 in `server.js` we need to change: 

```js
var index = require('./routes/index');
```

to: 

```js
var index = require('./routes/shoes');
```

On line 25 we need to convert: 

```js
app.use('/users', users);
```

to: 

```js
app.use('/shoes', shoes);

```

Here we are referencing our `shoes-controller` module. We have not created this module yet. Our code shouldn't work quite yet.

### Creating Views via Partials

Before we create our `shoes-controller` let's create a few view files. Let's create 3 more `*.ejs` files in our `views/shoes` directory:

* `edit.ejs`
* `new.ejs`
* `show.ejs`

**Note**: I am putting all views in a directory called `shoes` in my `views` directory.

All three of these EJS files should contain HTML boilerplate (e.g., `DOCTYPE` declaration, `html`, `head` and `body` tags).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Shoes</title>
    <link rel='stylesheet' href='/stylesheets/style.css' >
  </head>
  <body>
  </body>
</html>
```

We don't want to have to re-write the HTML boilerplate above. Let's use partials to get around this. A **partial** is a file that can be included in another file. Typically we use the term partial in the context of CSS/SASS and HTML template files. Let's create a `_partials` directory inside of `views`: 

```
$ mkdir _partials
```

Inside of the `_partials` directory create two EJS templates: 
    * `head.ejs`
    * `footer.ejs`

`head.ejs` should look like this: 

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel='stylesheet' href='/stylesheets/style.css' >
    <title>Shoes</title>
</head>
<body>
```

`footer.ejs` should look something like this: 

```HTML
</body>
</html>
```

If we look at this line in `server.js`: 

```js
app.use(express.static(path.join(__dirname, 'public')));
```

We can see that we are serving all assets in our `public` directory. This is why the link to our stylesheet is `/stylesheets/style.css`. Note that the `stylesheets` directory is a *direct* child of the `public` directory. All links to static assets should be relative to the `public` directory.

Our `new.ejs` should look like this:

```HTML
<%- include('./../_partials/head') %>

<h1>New Shoe</h1>

<form action="/create" method="POST">
  <label>Shoe Name</label>
  <input type="text" name="shoeName"><br>
  <br>
  <label>Shoe Release Year</label>
  <input type="text" name="shoeReleaseYear"><br>
  <br>
  <label>Shoe Description</label>
  <input type="text" name="shoeDescription"></input><br>
  <br>
  <input type="submit" value="Add Shoe">
</form>

<%- include('./../_partials/footer') %>
```

Our `index.ejs` should look like this:

```HTML
<%- include('./../_partials/head') %>

<h1>All Shoes</h1>

<a href="/new">New</a>
    <h1>Shoes</h1>
    <% for (key in shoes) {%>
      <hr>
      <h3><%= shoes[key].name %></h3>
      <h4><%= shoes[key].year %></h4>
      <p><%= shoes[key].description %></p>
      <a href='/<%= key %>'><button>Show</button></a>
      <br>
      <br>
        <a href='/<%= key %>/edit'><button>Edit</button></a>
      <br>
      <br>
      <form method="POST" action="/<%= key %>?_method=DELETE">
        <input type="hidden" name="_method" value="delete"/>
        <button class="delete" type="submit" name="shoeId" value="<%= key %>">Delete</button>
      </form>
      <hr>
      <br>
    <% } %>

<%- include('./../_partials/footer') %>
```

#### A Brief Primer on EJS

EJS is very similar to ERB. We can inject JavaScript logic into our HTML with EJS tags.

```HTML
...
<a href=<%= some.link %>>Click on Me</a>
```

Here the `<%=` tag begins an evaluated EJS template declaration and `%>` terminates it. We can also include JavaScript conditional logic with `<%`'s.

```HTML
<% for (var key in object) { %>
  <h1><%= object[key] %> </h1>
<% } %>
```

### Creating our Controllers and DB

When we declared our routes we named controllers that are not yet built out. Let's create a directory named `controllers` and put a file called `shoes-controller.js`. In this file we will define our controller actions.

```js
const model = require('./../models/Shoe');

module.exports = shoesController = {

  index: function(req, res, next) {
    res.render('./shoes/index', { shoes: model.getAllShoes() });
  },

  new: function(req, res, next) {
    res.render('./shoes/new');
  },

  create: function(req, res, next) {
    let params = req.body;
    model.addshoe(params.shoeName, params.shoeReleaseYear, params.shoeDescription)
    res.redirect('/');
  },

  show: function(req, res, next) {
     // You do
  },

  edit: function(req, res,  next) {
    // You do
  },

  update: function(req, res, next) {
  // You do
  },

  destroy: function(req, res, next) {
    // You do
  }
```

Later on you will have to write the `delete`, `update`, `show` and `edit` actions.

We use `res.render(views, [options])` to render our views. We can pass optional local variables to our views in a JavaScript object using `res.render()`. `res.render()` renders our views while passing (optional) local variables to our views which can then access using `EJS`.

We can create our database which is just a JavaScript object in `db/db.js`. We will also initialize it with some data.

```js
const db = {
  0: {
    "id": 0,
    "name": "Air Jordan",
    "year": "1984",
    "description": "Some sweet kicks.",
  }
};

module.exports = db;
```

Remember that `module.exports` is just an object that is returned as a result of a `require()` call.

### Creating Our Model Methods

Currently we have our routes set up, we have a few controllers defined and we have some view files created. The last piece in our MVC puzzle is have some methods that interact with our database (i.e., our model). Let's create a directory called `models`. In it let's create a `shoe.js` file in which we will create a few model helper methods.

```js
/*

  This file contains 5 methods that help us interact with our database.
  Our actual database which is just a JS object can be found in db/db.js

  Documentation:

  * addshoe takes 3 arguments (name, year, description)
  and adds a shoe to our "database"
  * deleteshoe takes a shoe ID and deletes the shoe from the database
  * updateshoe takes 4 arguments (id, name, year, description)
  and updates the corresponding record in our "database"
  * getAllshoes returns all shoes from the database
  * showshoe takes a shoe id and returns the corresponding data for that shoe in JSON form

*/

const db = require('./../db/db');

modelMethods = {

  primaryKey: 1,

  addshoe: function(name, year, description) {

    let newShoeEntry = {
      id: this.primaryKey,
      "name": name,
      "year": year,
      "description": description
    };

    db[this.primaryKey] = newShoeEntry;
    this.primaryKey++;

  },

  getAllShoes: function() {
    return db;
  },

  getShoe: function(id) {
    return db[id];
  },

  updateShoe: function(id, name, year, description) {
     // You do
  },

  deleteshoe:  function(id) {
    // You do
  }

};

module.exports = modelMethods;
```

**Quiz**: Why is the primary key initially set to 1 and not 0?

**As a class**: Do we have a fully working CRUD application? What's left to finish the app? Let's make a check list.

#### Lab: Writing Update and Delete  Model Helpers (10 minutes)

Complete the `updateShoe` and `deleteshoe` methods. These methods should follow the specifications that are listed. These functions should alter the `db` object that is required.

**Once you're done we will go over the solutions as a class**

#### Writing Show (20 minutes)

You now have all the ingredients to set up the `show` action. The `show` route is already defined. What's left is:

  * Creating the `show` action in `shoes-controller.js`
    - Remember to use the `showshoe()` method in `shoes.js`
  * Write the show template logic using EJS

**Once you're done we will go over the solutions as a class**


### Method Override

Natively HTML forms [don't](http://stackoverflow.com/questions/5177595/why-dont-the-modern-browsers-support-put-and-delete-form-methods) actually support all of the HTTP verbs we've grown accustomed to in Rails. We must use a polyfill  called `method-override` to be able to make `DELETE` and `PUT` requests. Let's install the module using npm:

```bash
$ npm install method-override --save
```

In `server.js` let's require the `method-override` middleware:

```js
var express = require('express');
var methodOverride = require('method-override');
var path = require('path');
...
```

We then must invoke our middleware using `app.use()`. The ordering of where we place this middleware actually doesn't matter. Let's put it here:

```js
...
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
```
In the corresponding HTML form we write this:

```HTML
<form method="POST" action="/posts/<%= post.id %>?_method=DELETE">
  <input type="hidden" name="_method" value="delete"/>
  <button type="submit" name="postId" value="<%= post.id %>">Put resource</button>
</form>
```

Please note the query parameter `_method=DELETE`. In order to use the `method-override` module we simple provide the value of the `_method` query string key as the HTTP verb we want that form submission to correspond to.

This is how we create a from that submits a `PUT` and `DELETE` request.

## Conclusion

You have now seen how a simple CRUD application using Node and Express can be built. Later on we will use a document database called MongoDB to persist information instead of a JavaScript object. If you'd like to learn more about HTTP transcations in Node read [this](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/). Understanding the contents of this article will help you understand how Node handles HTTP requests.