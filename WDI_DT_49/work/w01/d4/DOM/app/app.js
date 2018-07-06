var languages = document.querySelectorAll('.language-list li');

// What is the difference between what 
// querySelector and querySelectorAll 
// returns?

var content = document.querySelector('.content').style.color = "blue";

console.log('Below is what querySelector returns');
console.dir(content);

console.log('Below is what querySelectorAll returns');
console.dir(languages)

console.log('In WDI we learn ' + languages.length + ' languages')

for (var language of languages) {
    // depending on language set style to some other styles
    var colors = ['blue', 'pink']
    language.style.color = MAth;
}

document.getElementsByClassName('title')[0].style.fontSize = "80px";

var p = document.querySelectorAll('p.description');

for (let paragraph of p) {
    console.log('p is below');
    console.dir(p)
    paragraph.style.fontFamily= "Courier New"
}

document.querySelector('*').style.margin = "50px";