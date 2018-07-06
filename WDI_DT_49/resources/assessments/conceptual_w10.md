# Week 10 Conceptual Assessment
## Name: __________________________ &nbsp;&nbsp;&nbsp;Score:  ____ / 10 

## JavaScript

##### 1) What Array method is best suited for transforming an array of objects into a  new array of React components?<br><br>

##### 2) What comes into existence when a function "remembers" its free variables (variables that are used locally, but defined in an enclosing scope)?<br><br>


```js
var a = !undefined;

var b = [1, 2, 3];

var [c] = b;

const d = (function(a) {
	return (b) => a * b;
})(5);

var e = d(6);

var f = [...b];

var g = b === f;
```
Assuming the code above has been executed:

##### 3) What is the value of variable `a`?<br><br>

##### 4) What is the value of variable `c`?<br><br>

##### 5) What is the value of variable `e`?<br><br>

##### 6) What is the value of variable `g`?<br><br>

## ReactJS

##### 7) When developing in React, we create the application's User Interface with<br><br>_________________?<br><br>

##### 8) A component without it's own state can be written as a `class`.<br>`TRUE` &nbsp;&nbsp;&nbsp; -or- &nbsp;&nbsp;&nbsp; `FALSE`<br><br>

##### 9) A component that has its own state can be written as a _stateless functional component_.<br>`TRUE` &nbsp;&nbsp;&nbsp; -or- &nbsp;&nbsp;&nbsp; `FALSE`<br><br>

```js
const Comment = (props) => {
	render() {
		return (
			<div>{props.comment}</div>
		);
	}
};
```

##### 10) The above `<Comment>` component has no chance of working. Why?<br><br>

