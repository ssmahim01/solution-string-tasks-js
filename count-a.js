// Count how many times a string has the letter a

let text = "banana";

let count = 0;

for (let i = 0; i < text.length; i++){
    if(text[i].toLowerCase() === 'a'){
        count++
    }
}

console.log(count);

// Three times a string has the letter a.