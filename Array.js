// Write a JavaScript function to check whether an `input` is an array or not. 

function is_array(value){
  return Array.isArray(value);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//Write a JavaScript function to clone an array.

function array_Clone (originalArray, arrayCl = []){
  originalArray.forEach( (el,index) => arrayCl[index] = el);
  return arrayCl;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Write a JavaScript function to get the first element of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array.

function first(array, value = 0){
  if(value < 0) return [];
  return value == 0 ? array.shift() : array.slice(0,value);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

Write a JavaScript function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements of the array

function first(array, value = 0){
  if(value < 0) return [];
  if(array.length - value < array.length) return array;
  return value == 0 ? array.pop() : array.slice(array.length - value);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Write a simple JavaScript program to join all
// elements of the following array into a string

let joinArray = (array) => array.join(',');
let myColor = ["Red", "Green", "White", "Black"]

console.log(joinArray(myColor));

// Write a JavaScript program which accept a number as input and 
//insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

let insertDashes = function(number, newNumber = []) {
  [...number].forEach( (el,index, arr) => {
        newNumber.push(el);
        if(el%2 ===0 && arr[index+1]%2 === 0) newNumber.push('-');;
  })

  return newNumber.join('');
}  


//Write a JavaScript program to find the most frequent item of an array.

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function frequent (str) {
  let uniqueCharacters = new Set(str);
  let frequents = 0, item;
  
  for(let letter of uniqueCharacters){
    let replacer = new RegExp(letter, 'gm');
    let frequentsInArray = String(str).length - String(str).replace(replacer, "").length;
    
    if(frequents < frequentsInArray) {
      frequents = frequentsInArray;
      item = letter;
    }
  }
  
  return item + ' ' + frequents;
}

console.log(frequent(arr1));

let n = '025468';

console.log(insertDashes(n));

// Write a JavaScript program to sort the items of an array. 
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

var numbers = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];;
numbers.sort( (a, b) => a - b);
console.log(numbers); 

//Write a JavaScript program which accept a string as input 
//and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

var str = 'The Quick Brown Fox';

function swapCase (str, swapStr = []) {
  let checkCase = (letter) => letter.toUpperCase() === letter ? letter.toLowerCase() : letter.toUpperCase();
  for(let letter of str){
    swapStr.push(checkCase(letter));
  }

  return swapStr.join('');
}

console.log(swapCase(str));

// Write a JavaScript program which prints the elements of the following array

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
function printsElements (arr){
  for (let i in arr) {
     console.log("row " + i);
     for (let j in arr[i]) 
       {
        console.log(" " + a[i][j]);
       }
  }
}

printsElements(a)


// Write a JavaScript program to find the sum of squares of a numeric vector

var square = [1, 2, 1, 24];
 
function findSumOfSquares (arr){
  return arr.reduce( (prevEl, currEl) => prevEl + currEl, 0);
}

console.log(findSumOfSquares(square));

// Write a JavaScript program to compute the sum and product of an array of integers.

var array = [1, 2, 1, 24];
 
function computeSumAndProduct (arr){
  let sum =  arr.reduce( (prevEl, currEl) => prevEl + currEl, 0);
  let product = 1;
  arr.forEach( (el, index, arr) => product *= el);

  return `sum: ${sum}; product: ${product}`;
}

console.log(computeSumAndProduct(array));


// Write a JavaScript program to remove duplicate items from an array

function removeDuplicates(num) {
  let setArr = new Set(num);
  num = [];

  for(let number of setArr){
    num.push(number);
  }

  return num;
}
var Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
result = removeDuplicates(Mynum);
console.log(Mynum);
console.log(result);

// Find the leap years in a given range of years

function findLeapYears(years) {

  function checkCondition(el, devider){
    return Math.trunc(el/devider) === el/devider ;
  }
  
  for(let year in years){
    let value = years[year];
    if( 4 && checkCondition(value, 100) && checkCondition(value, 400)) console.log(value);
  }
}

let years = [2000, 2020, 2019, 1998];
console.log(findLeapYears(years));

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

// There are two arrays with individual values, write a JavaScript program
// to compute the sum of each individual index value from the given arrays

function computeTheSum(array1, array2) {

  let arraySum = [];
  array1.forEach( (el,index) => arraySum.push(el+array2[index]));
  return arraySum;
}

array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
console.log(computeTheSum(array1, array2));

// Write a JavaScript program to find duplicate values in a JavaScript array

function findDuplicate(array) {
  const dubc = (arr) => arr.filter((el,index) => arr.indexOf(el) != index && arr.lastIndexOf(el) == index );
  return dubc(array);
}

array = [1,0,2,3,3,2,4];
console.log(findDuplicate(array));

// Write a JavaScript program to compute the union of two arrays. 

function union(array1, array2) {
  return Array.from(new Set(array1.concat(array2)));
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));

//  Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

function clearArray(array) {
  let remove = [NaN, false, '',undefined, 0, null];
  return array.filter( el => !remove.includes(el) );
}

let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]

console.log(clearArray(arr));

//  Write a JavaScript function to sort the following array of objects by title value

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

function sortByTitle (obj){
   return obj.sort ( (a,b) => {
      if (a.title > b.title) { 
        return 1; } 
      if (a.title < b.title) { 
        return -1; 
      } 
      return 0;
   } );
} 

console.log(sortByTitle(library))

//  Write a JavaScript program to find a pair of elements (indices of the 
//two numbers) from an given array whose sum equals a specific target number.

let numbers= [10,20,10,40,50,60,70], target=50

function findPair (array, target){
    for(let index in array){
      for(let index2 in array){
        if(index != index2 && (array[index]+array[index2])==target) {
          return index + ", " + index2;
        } 
      }
    }
} 

console.log(findPair(numbers, target));

//Write a JavaScript function to remove a specific element from an array.
 
function remove_array_element(array, number){
  return array.filter( el => el!=number); 
}

console.log(remove_array_element([2, 5, 9, 6], 5));

//Write a JavaScript function to find an array contains a specific elemen
 
function contains(array, number){
  return  array.some( el => el == number); 
}

console.log(contains([2, 5, 9, 6], 5));

//Write a JavaScript function to get a random item from an array.
 
function randomItem(array){
  return array[Math.floor(array.length * Math.random())];
}

console.log(randomItem([2, 5, 9, 6]));

// Write a JavaScript function to create a specified number of
// elements with pre-filled numeric value array.
 
function array_filled(length, elements){
  return new Array(length).fill(elements);
}

console.log(array_filled(6, 0));
console.log(array_filled(4, 11));

// Write a JavaScript function to find the unique elements from two arrays

function difference(array1, array2) {
  let convertedArr = array1.toString().split(',');
  let convertedArr2 = array2.toString().split(',');
  return Array.from(new Set(convertedArr.concat(convertedArr2)));
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
//["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
//["1", "2", "3", "10", "100"]