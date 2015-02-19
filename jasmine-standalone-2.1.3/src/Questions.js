// Question 1

function selectElementsStartingWithE(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].charAt(0) === 'e') {
      result.push(array[i]);
    };
  };
  return result;
};

// Question 2

function selectElementsStartingWithVowel(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].charAt(0).match(/[aeiou]/)) {
      result.push(array[i]);
    };
  };
  return result;
};

// Question 3

function removeNullsFromArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null) {
      result.push(array[i]);
    };
  };
  return result;
};

// Question 4

function removeNullsAndFalseFromArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null && array[i] !== false) {
      result.push(array[i]);
    };
  };
  return result;
};

// Question 5

function reverseEveryElementInArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array[i].split('').reverse().join(''));
  };
  return result;
};

// Question 6

function dropFirstThreeElements(array) {
  array.splice(0, 3);
  return array;
};

// Question 7

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
  array.sort(function(a, b) {
    var aLastLetter = a.charAt(a.length -1)
    var bLastLetter = b.charAt(b.length -1);
    return aLastLetter < bLastLetter ? -1 : aLastLetter > bLastLetter ? 1 : 0;
  });
  return array;
};

// Question 9

function returnFirstHalfOfString(string) {
  var midpoint = Math.ceil((string.length) / 2)
  var result = string.split('').splice(0, midpoint).join('');
  return result;
};

// Question 10

function makeNumberNegative(number) {
  return number < 0 ? number : number * -1;
};

// Question 11
  
function separateArrayIntoEvenAndOddNumbers(array) {
  var result = [];
  var even = array.filter(evenNos);
  var odd = array.filter(oddNos);
  result.push(even, odd);
  return result
};

function evenNos(number) {
  return number % 2 === 0;
};

function oddNos(number) {
  return number % 2 === 1;
};

// Question 12

function numberOfElementsThatArePalindromes(array) {
  var result = array.filter(palindrome).length;
  return result
};

function palindrome(word) {
  return word === word.split('').reverse().join('');
};

// Question 13

function shortestWordInArray(array) {
 array.sort(function(a, b) {
  return a.length - b.length;
 });
 return array[0];
};

// Question 14

function longestWordInArray(array) {
  array.sort(function(a, b) {
    return b.length - a.length;
 });
  return array[0];
};

// Question 15

function arrayTotal(array) {
  var result = array.reduce(function(a, b) {
    return a + b;
  });
  return result;
};

// Question 16

function doubleArray(array) {
  var result = array.concat(array);
  return result;
};

// Question 17

function averageOfArray(array) {
  var result = array.reduce(function(a, b) {
    return a + b;
  });
  return parseFloat((result / array.length).toFixed(1));
};

// Question 18

function removeElementsGreaterThanFive(array) {
  var result = array.filter(lessThanFive);
    return result;
};

function lessThanFive(element) {
  return element <=5;
};

// Question 19

function convertArrayToObject(array) {
  var result = {};
  for (var i = 0; i < array.length; i++)
    result[i] = array[i];
    return result;
};

// Question 20

function getLettersInArrayOfWords(array) {
  var newArray = [];
  var result = [];
  for(i= 0; i < array.length; i++) {
    newArray.push(array[i].split(''));
  };
  return (result.concat.apply(result, newArray)).sort();
};

// Question 21

function swapKeysAndValuesInObject(object) {
  var result = {};
  for(var key in object) {
    result[object[key]] = parseInt(key);
  };
  return result;
};

// Question 22

function addKeysAndValues(object) {
  var result = 0;
  for(var key in object) {
    result += parseInt(key) + parseInt(object[key])
  };
  return result;
};

// Question 23

function removeCapitalLettersFromString(string) {
  var words = string.split(' ');
  var tempArray = []
  for(i = 0; i < words.length; i++) {
    var noUpperCase = words[i].replace( /[A-Z]/g, '')
    tempArray.push(noUpperCase);
  };
  return tempArray.join(' ');
};

// Question 24

function everyPossiblePairing(array) {
  var result = [];
    for(var a = 0; a < array.length - 1; a++) {
      for(var b = 1; b < array.length; b++) {
        if (array[a] != array[b]) {
          pairs = [array[a], array[b]];
          result.push(pairs);
        };
      };
    };
  return result;
};

// Question 25

function roundUpNumber(number) {
  return Math.ceil(number);
};

// Question 26

function roundDownNumber(number) {
  return Math.floor(number);
};

// Question 27

function formatDateNicely(date) {

};

// Question 28

function getDomainNameFromEmailAddress(email) {

};

// Question 29

function titleizeString(string) {

};

// Question 30

function checkStringForSpecialCharacters(string) {

};

// Question 31

function getUpperLimitOfRange(range) {

};

// Question 32

function squareRootOf(number) {

};

// Question 33

function callMethodFromString(string) {

};

// Question 34

function isA2015BankHoliday(date) {

};

// Question 35

function convertToRomanNumerals(number) {

};
