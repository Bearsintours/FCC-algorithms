// REVERSE A STRING

function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
//-> olleh



// FACTORIALIZE A NUMBER

function factorialize(num) {
  let result = 1;
  for(let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

factorialize(5);
//-> 120



// CHECK FOR PALINDROMES

function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}

palindrome("_eye");
//-> true


// FINDE THE LONGEST WORD IN A STRING

function findLongestWord(str) {
  const arr = str.split(" ");
  let longest = 0;
  for(let i = 0; i < arr.length; i++){   
    if(arr[i].length > longest) {
      longest = arr[i].length;
    }
  } 
    
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
//-> 6


// TITLE CASE A SENTENCE

function titleCase(str) {
  let sentence = str.toLowerCase().split(" ");
  let result = [];
  
  for(let i = 0; i < sentence.length; i++) {
    result.push(sentence[i][0].toUpperCase() + sentence[i].slice(1));
  }
  
  return result.join(" ");
}

titleCase("I'm a little tea pot");
//-> I'm A Little Tea Pot


// RETURN LARGEST NUMBERS IN ARRAYS

function largestOfFour(arr) {
  return arr.map((subArray) => {
    return subArray.reduce((prev, cur) => {
      return cur > prev ? cur : prev;
    });
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//-> [5, 27, 39, 1001]


// CONFIRM THE ENDING

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(str.length - target.length, str.length) === target;
}

confirmEnding("Bastian", "n");
//-> true



// REPEAT A STRING

function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";
  if (num === 1) return str;
  
  return str + repeatStringNumTimes(str, num - 1);
  
}

repeatStringNumTimes("abc", 3);
//-> abcabcabc


// TRUNCATE A STRING 

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num >= str.length) return str;
  if (num <= 3) return str.slice(0,num) + "...";
  return str.slice(0,num - 3) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
//-> A-tisket...


// CHUNKY MONKEY

function chunkArrayInGroups(arr, size) {
  // Break it up.
  let result = [];
  for (let i = 0; i < arr.length; i = i + size) {
    result.push(arr.slice(i, i + size));
  }
  return result; 
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//-> [["a", "b"], ["c", "d"]]


// SLASHER FLICK 

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany, arr.length);
}

slasher([1, 2, 3], 2);
//-> [3]


// MUTATIONS

function mutation(arr) {
  const arr0 = arr[0].toLowerCase();
  const arr1 = arr[1].toLowerCase();

  return arr1.split('').every((el) => {
    return arr0.indexOf(el) !== -1;
  });
}

mutation(["hello", "hey"]);
//-> false


// FALSY BOUNCER

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter((el) => {
    return Boolean(el);
  });
}

bouncer([7, "ate", "", false, 9]);
// -> [7, "ate", 9]


// SEEK AND DESTROY

function destroyer(arr) {
  // Remove all the values
  let args = [...arguments].slice(1);

  return arr.filter((num) => {
    return !args.includes(num);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//-> [1, 1]


// WHERE DO I BELONG

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  
  return arr.sort((a, b) => { return a - b;}).indexOf(num);
 
}

getIndexToIns([10, 20, 30, 40, 50], 30);
// -> 3


// CAESARS CIPHER

function rot13(str) { // LBH QVQ VG!
  let result = "";
  const regex1 = /[A-M]/g;
  const regex2 = /[N-Z]/g;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(regex1)) {
      result += String.fromCharCode(str.charCodeAt(i) + 13);
    }
    else if (str[i].match(regex2)) {
      result += String.fromCharCode(str.charCodeAt(i) - 13);
    }
    else {
      result += str[i];
    }
  }
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
//-> FREE CODE CAMP

