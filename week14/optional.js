function isPalindrome(word) {
   //Start Coding Here
   let result = word.length -1;
   for(let i = 0; i< word.length/2; i++){
    if(word[i] != word[result]){
        return false;
    }
    result--;
   }
   return true;
};

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false