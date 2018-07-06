## Client Side Rendering With Underscore.js Templating

![underscore](https://cdn-images-1.medium.com/max/624/1*6NkpTUi00kskQdCx-ZRvvA.png)

---

Let's create an Express playground for this application.

```bash
$ express playGroundio -e 
```

We don't need to modify this express application. We will write all of our code in `index.ejs`. We should include the Underscore CDN in the head of `index.ejs`.

```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js'></script>
```

---

### What is Underscore?

* Underscore.js is a functional programming library
* We can install Underscore in our Express applications with the following command: 

```js
npm i underscore
```

* We will be discussing a *single* method in the Underscore.js library, but you should know that underscore has many
* Let's take a look at the documentation for this method [here](http://underscorejs.org/#template)

---

### What is Templating?

* A HTML web template is simply some HTML that allows data to be inserted into it
* Web templates are useful for *dynamically* generating HTML from data 
* For example, if we want to make an API call using AJAX and get the data that is returned from this call to be rendered on our page we would need to use a web template such as Underscore's `_.template` method
* **Quiz**: Name two templating engines we have used so far in WDI?

---

### Working with Underscore templates

* The template function has the following signature:

```js
_.template(templateString, data?)
```

* `templateString` holds the template as a JavaScript string 
* `data?` is an optional argument that holds that data in a JS object 

*Note: If you omit data, you compile a template that has to be applied to data as a function

Let's take a look at some examples:

```javascript
var testTemplate = _.template("Hello <%= user %>!");  // compile
testTemplate({ user: "Jane" })  // inserting data
```

There are two steps to creating an Underscore template: 

1. Compiling the template using the `_.template` method
2. Inserting data into the template by providing a JS object

In our example: 

* First, you compile a template function `testTemplate`
* Then you use that function to produce a string. You can also specify the parameter data and directly insert it into the template, without an extra compilation step:

```javascript
> _.template("Hello <%= user %>!", { user: "Jane" })
'Hello Jane!'
```

---

### Inserting data

We use typically use 2 methods to add render data: 

#### Interpolate 

`<%= interpolate %>`

* Insert the result of an expression. The properties of the data object are all available as variables (see property user, above). No escaping happens, values are inserted verbatim.

#### Evaluate 

`<% evaluate %>`

* Evaluate the given code. This allows you to write loops and conditions.

---

### Loops and conditions

* The escape directive lets you insert arbitrary code. In the following template, we iterate over an array of names that is stored in property users:

```javascript
var templateTwo = _.template(
    "Users: <%_.each(users, function (u) { %>"
    + "<%= u %>, "
    + "<% }) %>"
);
```

`templateTwo` is used as follows.

```javascript
templateTwo({ users: [ "Huey", "Dewey", "Louie" ]})
// outputs => 'Users: Huey, Dewey, Louie, '
```

---

### Printing content

* You can use the print function to imperatively insert content. For example, the previous example could be rewritten as follows:

```javascript
var templateThree = _.template(
    "Users: <%_.each(users, function (u,i) {%>"
    + "<%if (i>0) { print(', ') }%>"
    + "<%=u%>"
    + "<%})%>"
);
```

---

### Referring to the data object

* You can also refer to the properties of the data object via that object, instead of accessing them as variables. Example: The following two expressions are equivalent.

```javascript
_.template("Hello <%= user%>!", { user: "Jane" })
_.template("Hello <%= obj.user%>!", { user: "Jane" })
```

* Using obj makes it easier to check whether a property exists. Compare – the following two templates are equivalent.

```javascript
<% if (typeof title !== 'undefined') { %> Title: <%= title %> <% } %>
<% if (obj.title) { %> Title: <%= title %> <% } %>
```

- The variable holding the data object is obj by default, but can be configured. Below, we use the name data, instead.

```javascript
_.template("<% if (data.title) { %>Title: <%= title %> <% } %>", null, { variable: "data" });
```

* If you specify a variable name in this manner, the properties of data won’t be available as variables.
* That has the advantage that Underscore won’t have to use a with statement (see Sect. 3) and the template function will be faster.

---

## Potential Conflicts?

* Does anyone see how this could be a conflict with another templating language we use?
* The simple solution is to use doubles whenever rendering like so:
`<%% %>`, `<%%= %>`

---

### Putting it all together

Let's take a look at an example inside `index.ejs`: 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
    <script src='https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js'></script>
  </head>
  <body>
    <div id="anchor">
    </div>

    <script type="text/template" id="template">
      <h1>Title</h1>

      <p><%%= content %></p>

    </script>

    <script>
      $template = document.querySelector('#template');
      $anchor = document.querySelector('#anchor');
      let template = _.template($template.innerHTML);
      $anchor.innerHTML = template({content: "I like to dance because dancing is so much fun!!!!"});
    </script>

    
  </body>
</html>
```

---

### Conclusion

- Underscore templates are very similar to `erb` or `ejs`
- They offer flexibility to write them how you want
- You must escape them when pairing with `ejs` like we showed above

---
