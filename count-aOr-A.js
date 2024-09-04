// Count how many times a string has the letter a or A

let text = "Amazing and attractive Apple";

let count = 0;

for(let i = 0; i < text.length; i++){
    if(text[i].toLowerCase() === 'a' | text[i].toUpperCase() === 'A'){
        count++;
    }
}

console.log(count);

// Six times a string has the letter a or A.