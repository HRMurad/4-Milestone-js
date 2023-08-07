// normal way

// function normalStr(text) {
//     for (let i = 0; i < text.length; i++){
//         let element = text[i];
//         console.log(element);
//     }
// }
// let myString = 'my name is murad hawlader';
// let str = normalStr(myString);

// reverse way

function normalStr(text) {
    let reversed = '';
    for (let i = text.length-1; i >= 0; i--){
        let element = text[i];
        reversed = reversed + element;
        console.log(element,reversed);
    }
    return reversed;
}
let myString = 'my name is Murad Hawlader';
let reversed = normalStr(myString);
console.log(reversed)



// reverse by split
function reverseWords(str) {
    let words = str.split(' ');
    // console.log(words);
    // [ 'I', 'am', 'a', 'good', 'boy' ]
    let result = [];
    for (let i = words.length - 1; i >= 0; i--){
        let element = words[i];
        result.push(element);
    }
    // console.log(result);
    // [ 'boy', 'good', 'a', 'am', 'I' ]
    let reversed = result.join(' ');
    return reversed;
}

let myStr = 'I am a good boy';
console.log(myStr);
reverseWords(myStr);