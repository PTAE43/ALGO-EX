function reverseString(text) {
    //Start Coding Here
    let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }
    return result;
};

let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"