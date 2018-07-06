# Week 11 Conceptual Assessment
## Name: __________________________ &nbsp;&nbsp;&nbsp;Score:  ____ / 10

## JavaScript

```js
var turkey = 4;
var banana = 'yellow';
var result = banana === 'green' ? 25 * turkey : turkey > 0 ? 42 : banana;
```

##### Q1) Assuming the above code has executed, what is the value of the variable `result`?<br><br><br>

```js
var wdi = 'Rocks';
var vodka = 'Titos';
var eggs = 0;
var nothing = '';

var one = wdi && eggs;
var two = vodka && wdi;
var three = nothing && eggs;
var four = vodka || wdi;
var five = vodka || nothing;
var six = eggs && (wdi || nothing);
```
##### Assuming the above code has executed:

##### Q2) What is the value of the variable `one`?<br><br>

##### Q3) What is the value of the variable `two`?<br><br>

##### Q4) What is the value of the variable `three`?<br><br>

##### Q5) What is the value of the variable `four`?<br><br>

##### Q6) What is the value of the variable `five`?<br><br>

##### Q7) What is the value of the variable `six`?<br><br>





## React 

##### Q8) How do we pass data from a parent component to a child component?<br><br><br><br>

```js
import React from 'react';
import ReactDOM from 'react-dom';

const Banner = props => <h1>{props.children}</h1>;

class Page extends React.Component {
	render() {
		return (
			<Banner>Amazing App</Banner>
		);
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));
```

##### Assuming the above code has run and _index.html_ contains a `<div id="root"></div>`, answer the following:

##### Q9) Will _index.html_ render without error - YES or NO?<br><br>

##### Q10) If your answer to Q9 is `YES`, What will be rendered in _index.html_? If your answer is `NO`, explain why it won't render. 





