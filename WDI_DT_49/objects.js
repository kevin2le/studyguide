// const objy = {
//     Jon: {
//         color: "green"
//     }
// }
// var favColor = objy.Jon.color;

// console.log(favColor)

// var obj2 = { a : "cat"};
// obj2.a //=> "cat"

// var person = {limbs: 4};

// var appendages = "limbs";
// console.log(person[appendages])

// const newYou = {};
// console.log(newYou);
// newYou.instrument = "drums";
// newYou.favColor = "red";
// console.log(newYou);

// var obj = {
//     0: "first",
//     1: "second"
// }
// for (var key in obj) {
//     console.log(obj[key]);
// }

var d = {
    names: "kelso",
    hi: function () {
        return this
    }
};
console.log(d.hi());