//Example x = 32243;
//Expected Output : 34223

let str = 32243;

function reverve(number){
  let string = number + '';
  return Number(string.split('').reverse().join(''));
}

console.log(reverve(str));

// Write a JavaScript function that checks whether a passed
// string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same
//  backward as forward, e.g., madam or nurses run.

let string = 'nurses run';

function isPalindrome(string){
  let word = string.replace(' ', '');
  return word.includes([...word].reverse().join(''));
}

console.log(isPalindrome(string));

// Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

let word = 'dog';

function combinations (string){
  let array = new Set();
  [...word].forEach( (letter, index) => {
    array.add(letter);
    for(let i = index; i < [...word].length; i++){
       array.add([...word].slice(index, i+1).join(''))
    }
  });
  return array;
}

let arrayCombination = combinations(word);

for (let combination of arrayCombination) {
  console.log(combination);
}

// Write a JavaScript function that returns a passed string with letters 
// in alphabetical order
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

let word = 'webmaster';

function inAlphabeticalOrder (word){
  return [...word].sort().join('');
}

console.log(inAlphabeticalOrder(word));

// Write a JavaScript function that accepts a string as a parameter 
// and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

let string = 'the quick brown fox';

function convertsEachFirtLetterToUpCase(string){
  return string.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(convertsEachFirtLetterToUpCase(string));

//  Write a JavaScript function that accepts a string as a parameter
//  and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development

let string = 'Web Development Tutorial';

function longestWordInString(string){

  let arrayWords = string.split(' '), length = 0, longestWord;

  arrayWords.forEach( (word, index) => {
    if(length < word.length){
       length = word.length;
       longestWord = word;
    }
  })
 
  return longestWord;
}

console.log(longestWordInString(string));

//  Write a JavaScript function that accepts a string as
// a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant,
// we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

let string = 'The quick brown fox';

function countVowels(string){
  return string.toLowerCase().match(/[aeiou]/gi).length
}

console.log(countVowels(string));

//  Write a JavaScript function that accepts a number as a parameter
//  and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 
// that has no positive divisors other than 1 and itself.

let number = 29;

function isPrime(number){
  if(number < 1) return false;

  for(let i = 2; i < number; i++) {
    if(number%i == 0) return false;
  }
  return true;
}

console.log(isPrime(number));

//  Write a JavaScript function which accepts an argument and returns the type.
//Note : There are six possible values that typeof returns: object, boolean, 
//function, number, string, and undefined.

function typeOfArgument(argument){
  return typeof argument;
}

console.log(typeOfArgument(null));

//  Write a JavaScript function which returns the n rows by n columns identity matrix


function makeMatrix(n){
  var matrix = new Array(n);

  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n);
  }

  console.log(matrix);
}

console.log(makeMatrix(10));

//  Write a JavaScript function which will take an array of numbers 
//stored and find the second lowest and second greatest numbers,
// respectively. Go to the editor
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

let array = [3,5,2,6,8]

function findSecondLowestAndSecondGreatest(array){
  let sortedArray = array.sort();

  if(array.length == 0 || array.length == 1) return array;
  if(array.length == 2) return `Нет`;
  if(array.length == 3) return sortedArray[2];
  return `second lowest - ${sortedArray[1]}, second greatest - ${sortedArray[sortedArray.length - 2]}`
}

console.log(findSecondLowestAndSecondGreatest(array));

// Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia : In number theory, a perfect number is a
// positive integer that is equal to the sum of its proper positive divisors,
// that is, the sum of its positive divisors excluding the number
// itself (also known as its aliquot sum).
// Equivalently, a perfect number is a number that is half the sum
// of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3
// are its proper positive divisors, and 1 + 2 + 3 = 6. 
// Equivalently, the number 6 is equal to half the sum of all 
// its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. 
// The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. 
// This is followed by the perfect numbers 496 and 8128.

let number = 6;

function isPerfect(number){
  let arrayOfPerfectNumbers = [6,28,496,8128];

  for (let i = 0; i < arrayOfPerfectNumbers.length; i++){
    if (arrayOfPerfectNumbers[i] == number) return true;
  }

  return false;
}

console.log(isPerfect(number));














// Write a JavaScript function to compute the value of bn where n is
//the exponent and b is the bases. Accept b and n from the user and display the result

function exponent (b, n) {
  return b ** n;
}

let b = prompt('b?', '');
let n = prompt('n?', '');
console.log(exponent(b,n));



// Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

let string = 'thequickbrownfoxjumpsoverthelazydog'

function extractUnique (str) {
  let uniqueCharacters = new Set([...str]);
  return Array.from(uniqueCharacters).join('')
}

console.log(extractUnique(string));



// Write a JavaScript function to  get the number of occurrences 
// of each letter in specified string.

let string = 'aabeeebg5555a'

function occurrences (str) {
  let uniqueCharacters = new Set([...str]);
  for(let letter of uniqueCharacters){
    let replacer = new RegExp(letter, 'gm');
    console.log(`${letter}: ${str.length - str.replace(replacer, "").length}`)
  }
}

occurrences(string);


// Write a function for searching JavaScript arrays with a binary search.
//Note : A binary search searches by splitting an array into smaller and smaller
//chunks until it finds the desired value.

let array = [2,1,6,5,3,7]

function binarySearch (num, array) {
  let sortArray = array.sort();
  let notDone = true;
  let middle = Math.ceil(array.length/2);

  for( middle; array.length != 1; middle = Math.ceil(array.length/2)) {

    if(array.length == 2){
      if(array[0] == num || array[1] == num) return true;
      else return false
    }

    if(array[middle] == num) return true;

    if(array[middle] >= num) array = array.slice(0, middle);

    if(array[middle] <= num) array = array.slice(middle);
  }

  return false;
}

console.log(binarySearch(4, array));


// Write a JavaScript function that returns array elements larger than a number.

let array = [2,1,6,5,3,7]

let filterArray = (num, array) => array.filter( element => element > num);

console.log(filterArray(4, array));


// Write a JavaScript function that generates a string id (specified length) of random characters

function generate(length) {

  function fillArray(array, from, to){
      for(let i = array.length; from <= to; i++){
        array[i] = from;
        from++;
      }
  }

  let charCode = [];
  let arrayNum = new Array(length);
  fillArray(charCode, 65, 90);
  fillArray(charCode, 97, 122);
  fillArray(charCode, 30, 39);
  for(let i = 0; i < length; i++) {
    var randomValue = charCode[Math.floor(charCode.length * Math.random())];
    arrayNum[i] = randomValue;
  }
  return String.fromCharCode(...arrayNum);
}
console.log(generate(20));


// Write a JavaScript function that accepts two arguments, a string and 
//a letter and the function will count the number of occurrences of the
// specified letter within the string. 
//Sample arguments : 'w3resource.com', 'o'

let string = 'w3resource.com';
let letter = 'o';

function occurrences (str, letter) {
    let replacer = new RegExp(letter, 'gm');
    console.log(`${letter} in ${str} : ${str.length - str.replace(replacer, "").length}`)
}

occurrences(string, letter);

// Write a JavaScript function to find the first not repeated character. 
//Sample arguments : 'abacddbec'
//Expected output : 'e'

let string = 'abacddbec';

function findFirstNotRepeatedCharacter (str) {
  let letter;

  [...str].some( (element, index) => {
    if ([...str].indexOf(element) == index && [...str].lastIndexOf(element) == index){
      letter = element;
      return element;
    } 
  });

  return letter;
}

console.log(findFirstNotRepeatedCharacter(string));

// Write a JavaScript function to apply Bubble Sort algorithm.

let array = [2,4,6,3,7,1];

function bubbleSort (array) {
  let swap;

  while(swap!=0){
    swap = 0;
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]) {
        let el = array[i+1];
        array[i+1] = array[i];
        array[i] = el;
        swap++;
      }
    }
  }
return array;
}

console.log(bubbleSort(array));


// Write a JavaScript function that accept a list of country names as input and returns
// the longest country name as output. 
//Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
//Expected output : "United States of America"

let arrayCountry = ["Australia", "Germany", "United States of America"];


let string = 'Web Development Tutorial';

function Longest_Country_Name (arrayCountry) {
  let length = 0, longestWord;

  arrayCountry.forEach( (word, index) => {
    if(length < word.length){
       length = word.length;
       longestWord = word;
    }
  })
 
  return longestWord;
}

console.log(Longest_Country_Name(arrayCountry));

// Write a JavaScript function to find longest substring in
// a given a string without repeating characters.

let string = "Australiajgdghhfr";

function findLongestSubStr (string) {
  let arraySubStr = [];
  let setChars = new Set();
  let subStr = '';

  [...string.toLowerCase()].forEach( (char) => {
      if(setChars.has(char) == false){
        subStr += char;
        setChars.add(char);
      } else {
        arraySubStr.push(subStr);
        subStr = '' + char;
      }
  } )

  let length = 0, longestSubStr;

  arraySubStr.forEach( (word, index) => {
    if(length < word.length){
       length = word.length;
       longestSubStr = word;
    }
  })
 
  return longestSubStr;
}

console.log(findLongestSubStr(string));

