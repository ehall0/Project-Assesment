// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

///////////////////
//Check for Anagrams Solution //NEED TO REMOVE SPACES &PUNCTUATION//
///////////////////
const checkForAnagram = (word1, word2) => {
    let lettersMatched = 0;
    
    let letters1 = ((word1.toUpperCase()).split('')).sort();
   
    let letters2 = ((word2.toUpperCase()).split('')).sort();
    
    for(let i = 0 ; i < letters1.length ; i++){
        if(letters1[i] === letters2[i]){
            lettersMatched += 1;
        };
    };
    if(lettersMatched === letters1.length){
        console.log('True');
    }else{
        console.log('False');
    };
};
checkForAnagram('rail safety', 'fairy tales');
checkForAnagram('RAIL! SAFETY!', 'fairy tales');
checkForAnagram('Hi there', 'Bye there');
///////////////////
//Check for Vowels Solution
///////////////////
const checkForVowels = (word) => {
    let numOfVowels = 0;
    let letters = (word.toUpperCase()).split('');
    // console.log(letters);
    for(let i = 0 ; i < letters.length; i++){
        if(letters[i] === 'A'||letters[i] === 'E'||letters[i] === 'I'|| letters[i] ==='O'||letters[i] ==='U'){
            numOfVowels += 1;
            
        }
    }
    console.log(numOfVowels);
}
checkForVowels('Hi There!');
checkForVowels('Why do you ask?');
checkForVowels('Why?');