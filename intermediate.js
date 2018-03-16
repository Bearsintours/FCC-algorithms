// SUM ALL NUMBERS IN A RANGE //

function sumAll(arr) {

    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var sum1 = max + min;
    var sum2 = 0;
    for (var i = min + 1; i < max; i++) {
        sum2 += i;
    }
    return sum1 + sum2;
}

sumAll([1, 4]);
// --> 10


// DIFF TWO ARRAYS //

// with loops
function diffArray(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            newArr.push(arr1[i]);
        }
    }
    for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) == -1) {
            newArr.push(arr2[j]);
        }
    }
    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// --> [4]


// with filter()
function diffArray(arr1, arr2) {
    var newArr = arr1.filter(function (el) {
        return arr2.indexOf(el) == -1;
    }).concat(arr2.filter(function (el) {
        return arr1.indexOf(el) == -1;
    }));

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// --> [4]


// ROMAN NUMERAL CONVERTER //

function convertToRoman(num) {
    var romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    var numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    var diff = num;
    var result = "";
    while (diff > 0) {
        for (var i = numbers.length; i >= 0; i--) {
            if (diff >= numbers[i]) {
                diff = diff - numbers[i];
                result += romans[i];
                break;
            }
        }
    }
    return result;
}
convertToRoman(4);
// --> IV


// Wherefore art thou //

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    var keys = Object.keys(source);
    for (var i = 0; i < collection.length; i++) {
        var count = 0;
        for (var j = 0; j < keys.length; j++) {
            if (collection[i].hasOwnProperty(keys[j]) && collection[i][keys[j]] == source[keys[j]]) {
                count++;
                if (count == keys.length) {
                    arr.push(collection[i]);
                }
            }
        }
    }

    // Only change code above this line
    return arr;
}

whatIsInAName([{
    first: "Romeo",
    last: "Montague"
}, {
    first: "Mercutio",
    last: null
}, {
    first: "Tybalt",
    last: "Capulet"
}], {
    last: "Capulet"
});
//->[{ first: "Tybalt", last: "Capulet" }]


// SEARCH AND REPLACE

function myReplace(str, before, after) {
    var reg = /[A-Z]/;
    if (reg.test(before[0]) == true) {
        after = after[0].toUpperCase() + after.split("").splice(1).join("");
    }
    return str.replace(before, after);

}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//->He is Sitting on the couch


// PIG LATIN

function translatePigLatin(str) {
    var arr = str.split("");
    var vowels = /[a,e,i,o,u,y]/;
    if (vowels.test(arr[0]) == true) {
        return arr.join("") + "way";
    } else {
        var firstLetter = "";
        var i = 0;
        while (vowels.test(arr[i]) == false) {
            firstLetter += arr[i];
            i++;
        }
        return arr.splice(firstLetter.length).join("") + firstLetter + "ay";
    }

}

translatePigLatin("california");
//-> aliforniacay


// DNA PAIRING

function pairElement(str) {
    var arr = str.split("");
    var result = [];
    var object = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };
    return arr.map((el) => [el, object[el]]);
}

pairElement("GCG");
//->[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]


// MISSING LETTERS

function fearNotLetter(str) {
    for (var i = 1; i < str.length; i++) {
        if (str[i].charCodeAt() != (str[i - 1].charCodeAt()) + 1) {
            return String.fromCharCode((str[i - 1].charCodeAt()) + 1);
        }
    }
    return undefined;
}

fearNotLetter("abce");
//-> d


// BOO WHO

function booWho(bool) {
    return typeof (bool) == 'boolean';
}

booWho(true);
//-> true


// SORTED UNION

function uniteUnique(arr) {
    arr = Array.from(arguments);
    return arr.reduce(function (a, b) {
        return a.concat(b.filter((el) => a.indexOf(el) == -1));
    }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//-> return [1, 3, 2, 5, 4]


// CONVERT HTML ENTITITES

function convertHTML(str) {
    const obj = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };

    const reg = /[&<>\"\']/g;

    return str.replace(reg, function (match) {
        return obj[match];
    });
}

convertHTML("Dolce & Gabbana");
//-> Dolce &​amp; Gabbana


// SPINAL TAP CASE

function spinalCase(str) {
    const regex = /[\W_]/g;
    return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(regex, "-").toLowerCase();
}

spinalCase("This Is Spinal Tap");
//-> this-is-spinal-tap



// SUM ALL ODD FIBONACCI NUMBERS

function sumFibs(num) {
    // first 2 numbers in a Fibonacci sequence are always 1 and 1
    let first = 1;
    let second = 1;
    // initialize str with first 2 Fibonacci numbers
    let str = 1 + 1;
    let fib;

    while (first + second <= num) {
        fib = first + second;
        // add fibonacci number if odd
        if (fib % 2 !== 0) {
            str += fib;
        }
        //update first and second
        first = second;
        second = fib;
    }
    //return sum of all odd fibonacci numbers <= num
    return str;
}

sumFibs(4);
//-> 5


// SUM ALL PRIMES

function sumPrimes(num) {
    let sum = 0;
    let count;
    for (let i = 2; i <= num; i++) {
        count = 0;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 1) {
            sum += i;
        }
    }
    return sum;
}
sumPrimes(10);
//-> 17


// SMALLEST COMMON MULTIPLE

function smallestCommons(arr) {
    let sorted = [];
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    for (let i = max; i >= min; i--) {
        sorted.push(i);
    }

    let multiply = 1;
    let common;
    let counter;

    do {
        counter = 2;
        common = sorted[0] * sorted[1] * multiply;
        for (var j = 2; j < sorted.length; j++) {
            if (common % sorted[j] !== 0) {
                break;
            }
            counter++;
        }
        multiply++;
    }
    while (counter < sorted.length);

    return common;
}

smallestCommons([1, 5]);
//-> 60


// FINDERS KEEPERS

function findElement(arr, func) {

    return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], function (num) {
    return num % 2 === 0;
});
//-> 2


// DROP IT

function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr.slice(i);
        }
    }
    return [];
}

dropElements([1, 2, 3], function (n) {
    return n < 3;
});
//-> [1,2,3]


// STEAMROLLER

function steamrollArray(arr) {
    let flatArray = [];
    const flaten = (array) => {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flaten(array[i]);
            } else {
                flatArray.push(array[i]);
            }
        }
        return flatArray;
    };
    return flaten(arr);
}


steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]);
//-> [1,2,3,4]


// BINARY AGENTS

function binaryAgent(str) {
    return str.split(" ").map((substr) => {
        return String.fromCharCode(parseInt(substr, 2));
    }).join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//-> Aren't bonfires fun!?


// EVERYTHING BE TRUE

function truthCheck(collection, pre) {
    for (let i = 0; i < collection.length; i++) {
        if (!collection[i][pre]) {
            return false;
        }
    }
    return true;
}

truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male",
    "age": 0
}, {
    "user": "Dipsy",
    "sex": "male",
    "age": 3
}, {
    "user": "Laa-Laa",
    "sex": "female",
    "age": 5
}, {
    "user": "Po",
    "sex": "female",
    "age": 4
}], "age");
//-> false


// ARGUMENTS OPTIONAL


function addTogether() {

    function isNumber(arg) {
        if (typeof (arg) == 'number') return true;
        else return false;
    }

    if (arguments.length > 1) {

        const a = arguments[0];
        const b = arguments[1];

        if (isNumber(a) && isNumber(b)) {
            return a + b;
        }
    } else {
        const c = arguments[0];

        if (isNumber(c)) {
            return function (a) {
                if (isNumber(a) && isNumber(c)) {
                    return a + c;
                } else return undefined;
            };
        }
    }
}

addTogether(2)(3);
//-> 5