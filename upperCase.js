// Capitalize every first letter

let string = 'english is an international language';

let capitalize = string.replace(/\b\w/g, function(match){
    return match.toUpperCase();
})

console.log(capitalize);