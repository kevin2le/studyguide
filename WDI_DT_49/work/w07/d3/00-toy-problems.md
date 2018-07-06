## Toy Problems 

### 1. getProductsOfAllIntsExceptAtIndex

You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
Write a function `getProductsOfAllIntsExceptAtIndex(array)` that takes an array of integers and returns an array of the products.

For example, given: 

```js
[1, 7, 3, 4]
```
`getProductsOfAllIntsExceptAtIndex` would return this:

```
[84, 12, 28, 21]
```

by computing this:

```js
[7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
```

### 2. allAnagrams 

An **anagram** is a string that is created by rearranging the letters of another string. For example the string "xyz" is an anagram of "zxy".

Given a string (e.g., 'abc') write a function named `allAnagrams` that returns an array of all anagrams of the string. 

For example the string `abc` should return `[ "abc", "acb", "bac", "bca", "cab", "cba" ]`. The resulting anagram does not need to be a sensical or real word.