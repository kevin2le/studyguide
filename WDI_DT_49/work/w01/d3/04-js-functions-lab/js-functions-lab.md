![](https://pbs.twimg.com/profile_images/499022165404946432/2Kpm7afx_400x400.png)

# JavaScript Functions Lab

## Introduction

This lab provides an opportunity to practice defining and coding some real-world functions.

>**Note:** Feel free to work in pairs to complete this lab. Also, Google/StackOverflow is a good friend to have around...

## <span style="color:red">Update</span>

This lab has recently been added to repl.it classroom. The lab can be found [at this link](https://repl.it/student/submissions/1152427).

The information below is included for your information, however, all students should complete this lab using the above link.

## Exercise

#### Setup

1. Create an `index.html`.
2. Create a directory named `js`.
3. Create a file named `lab-functions.js` inside of the `js` directory.
4. Use a `<script>` element in the `<head>` of `index.html` to bring the `lab-functions.js` file into the web page.
5. The code in `lab-functions.js` will then execute whenever the page is loaded or refreshed.

#### Requirements

Define and code the functions below.

Define the functions using the approach as specified (either as a function expression or declaration).

Be sure to number each function with a comment above it.

After each function, call it **at least once** and `console.log` the results.

For example, here's the first function, my gift to you:

```js
// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
 function maxOfThree(x, y, z) {
   if (x >= y){
     else if (x >= z) {
       return x;
     } else {
       return ;
     }
   } 
 }
// 3.
  function isCharAVowel(a) {
    if( aeiouy.indexof(s))
  }
...
```

Here are the functions:

1. (_completed above_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-then-else construct.

2. Define a function, as a function expression, `maxOfThree` that takes three numbers as arguments and returns the largest of them.

3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

8. Define a function, as a function expression, `longestWordLength` that takes an array of strings (words) and returns the length of the longest word.

9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['touch', 'me', 'in', 'the', 'morning'], 2);` would return `["touch", "the", "morning"]`.

## Additional Resources

- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)