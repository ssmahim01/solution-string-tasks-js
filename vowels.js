// Check whether a string contains all the vowels

let text = 'a quick brown fox jumps over the lazy dog';
let vowels = 'aeiou';
let foundVowels = {a: false, e: false, i: false, o: false, u: false};

for(let i = 0; i < text.length; i++){
    let char = text[i];
    if(vowels.includes(char)){
        foundVowels[char] = true;
    }
}

let presentVowels = Object.values(foundVowels);
console.log(presentVowels);

// All the vowels has exists in a string.