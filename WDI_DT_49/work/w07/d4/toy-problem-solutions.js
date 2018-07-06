// Solution to allAnagrams

function allAnagrams(string) {
	let anagrams = [];
	anagrams.push(string);

	let splitString = string.split('');
	let str = '';

	while(str !== string) {
		for(let i = splitString.length - 1; i > 0; i--){
			splitString.splice(i - 1, 0, splitString[i]);
			splitString.splice(i + 1, 1);
			str = splitString.join('');
			if(str === string){
				break;
			} else {
				anagrams.push(str);
			}
		}
	}


	return anagrams.sort('');
}

// Test function
console.log(allAnagrams('abc'));

// Solution to getProductsOfAllIntsExceptAtIndex

function getProductsOfAllIntsExceptAtIndex(arr) {
    const sum = (arr) => arr.reduce((a,b) => a+b)
    let returnArray = new Array(arr.length).fill(sum(arr));
    arr.map( (elem, index) => { returnArray[index] = returnArray[index]/elem } )
    return returnArray
}

console.log(getProductsOfAllIntsExceptAtIndex([1,2,3]))