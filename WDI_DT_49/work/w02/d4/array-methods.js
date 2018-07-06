/*--------------------------------------------*/

/*

    forEach

*/



/*--------------------------------------------*/

/*

    map

*/

// What data type are all property names in
// an object?

const obj = {
    a: "A",
    b: "C",
    c: "C",
    one: 1,
    two: 2,
    three: 3
};

let types = Object.keys(obj).map(function(elem) {
    return typeof elem;
});

console.log(types);

/*--------------------------------------------*/

/*

    filter

*/

let numbers = [1,2,3,4,5,6,7];

let evens = numbers.filter(function(elem) {
    return elem % 2;
});

console.log(evens);

/*--------------------------------------------*/

/*

    find

*/

var cars = [
	{color: 'red', make: 'BMW', year: 2001},
	{color: 'white', make: 'Toyota', year: 2013},
	{color: 'blue', make: 'Ford', year: 2014},
	{color: 'white', make: 'Tesla', year: 2016}
];

var firstWhiteCar = cars.find(car => car.color === 'white');
// firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}

var missingCar = cars.find(car => car.color === 'black');
// missingCar = undefined

/*--------------------------------------------*/

/*

    findIndex

*/

var cars = [
	{color: 'red', make: 'BMW', year: 2001},
	{color: 'white', make: 'Toyota', year: 2013},
	{color: 'blue', make: 'Ford', year: 2014},
	{color: 'white', make: 'Tesla', year: 2016}
];

var firstWhiteCarIdx = cars.findIndex(car => car.color === 'white');
// firstWhiteCarIdx equals 1

var missingCarIdx = cars.findIndex(car => car.color === 'black');
// missingCarIdx = -1