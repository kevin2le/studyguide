# Week 7 Conceptual - NAME: ___________  `__/15`


## JavaScript

```js
var x = 25;
var a = ['apple', true];

function fn(p1, p2) {
	p2 = p2 * 2;
	p1.push(p2);
};

fn(a, x);

console.log(x);
console.log(a);
```

##### Q1) What will be logged out when the above code is executed?
<br><br>

```js
var bank = 'Chase';

function getAccountDetails(acctNo) {
	return `Details for ${getAccountDetails.bank} Account #${acctNo}`;
}

getAccountDetails.bank = bank;

var details = getAccountDetails(54321);
```

##### Q2) After the above code executes, what is the value of the `details` variable?
<br><br>

```js
let accounts = [
	{acctNo: 123, type: 'Checking', balance: 150},
	{acctNo: 234, type: 'Checking', balance: 200},
	{acctNo: 345, type: 'Savings', balance: 550},
	{acctNo: 456, type: 'Checking', balance: 550},
	{acctNo: 567, type: 'Savings', balance: 1500}
];
```
#### Assuming the above array of _account_ objects and the following array methods:

`forEach` `map` `reduce` `some` `filter` `find` `findIndex` `every`

#### List the most **suitable** method to use for the following tasks:

##### Q3) Put the _accounts_ having a `balance` greater than a certain amount into a new array
<br>

##### Q4) Obtain the _account_ object having an `acctNo` equal to 456
<br>

##### Q5) Check if there are any _accounts_ with a negative `balance`
<br>

##### Q6) Console.log all of the _accounts_
<br>

##### Q7) Add 1000 to all of the _accounts_ and put them in a new array
<br>

##### Q8) Compute the sum of the balances for _accounts_ of `type` equal to 'Savings'
<br>

##### Q9) Check if all of the _accounts_ have a `balance` greater than 100
<br>

## Node

##### Q10) Node is (circle the best answer):

```
a) a programming language			c) only used on the server
b) a JavaScript library				d) a runtime environment for JS
```

#### Assuming the following two modules:

```js
// silly.js

var utilities = require('../utilities');
var api = {
	one,
	two,
	three: 3,
	four: 'four'
};

function one() {
	return 'something';
}

function two(a, b) {
	return b;
}

module.exports = api;
```
```js
// use-silly.js

var silly = require('silly');
var a = silly.one;
var b = silly.two(true, false);
var c = silly.three;
var d = require('silly').three;

```

##### Q11) What data type is `silly.four`?
<br>

##### Q12) What data type is variable `a`?
<br>

##### Q13) What is the value of variable `b`?
<br>

##### Q14) What is the value of variable `c`?
<br>

##### Q15) What is the value of variable `d`?
<br>


