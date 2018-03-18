// VALIDATE US TELEPHONE NUMBERS

function telephoneCheck(str) {
    const regex = /^1*\s*(\(\d{3}\)|\d{3})-*\s*\d{3}-*\s*\d{4}$/;
    return regex.test(str);
}

telephoneCheck("555-555-5555");
//-> true



// RECORD COLLECTION

// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

    if (value === "") {
        delete collection[id][prop];
    } else if (prop !== "tracks" && value !== "") {
        collection[id][prop] = value;
    } else if (prop === "tracks") {
        if (!collection[id].hasOwnProperty("tracks")) {
            collection[id][prop] = [value];
        }
        if (value !== "") {
            collection[id][prop].push(value);
        }
    }

    return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
//-> collection = {
//     "2548": {
//       "album": "Slippery When Wet",
//       "artist": "Bon Jovi",
//       "tracks": [ 
//         "Let It Rock", 
//         "You Give Love a Bad Name" 
//       ]
//     },
//     "2468": {
//       "album": "1999",
//       "artist": "Prince",
//       "tracks": [ 
//         "1999", 
//         "Little Red Corvette" 
//       ]
//     },
//     "1245": {
//       "artist": "Robert Palmer",
//       "tracks": [ ]
//     },
//     "5439": {
//       "album": "ABBA Gold",
//       "artist": "ABBA"
//     }
// }



// SYMMETRIC DIFFERENCE

function sym(args) {

    const symDiff = (arr1, arr2) => {
        let sym = [];
        arr1.forEach((num) => {
            if (arr2.indexOf(num) < 0 && sym.indexOf(num) < 0) sym.push(num);
        });
        arr2.forEach((num) => {
            if (arr1.indexOf(num) < 0 && sym.indexOf(num) < 0) sym.push(num);
        });
        return sym;
    };

    args = Array.from(arguments);

    return args.reduce((symDiff));
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
//-> [1,4,5]



// EXACT CHANGE

function checkCashRegister(price, cash, cid) {

    let change = 0;
    let cashAvailable = 0;

    // Calculate change due
    let changeDue = cash - price;

    // Calculate total cash in draw
    for (var i = 0; i < cid.length; i++) {
        cashAvailable += cid[i][1];
    }

    // currency value * 100 to avoid floating issue
    const currency = {
        PENNY: 1,
        NICKEL: 5,
        DIME: 10,
        QUARTER: 25,
        ONE: 100,
        FIVE: 500,
        TEN: 1000,
        TWENTY: 2000,
        HUNDRED: 10000
    };

    // Return the string "Insufficient Funds" if cash-in-drawer is less than the change due.
    if (cashAvailable < changeDue) {
        return "Insufficient Funds";
    }

    // Return the string "Closed" if cash-in-drawer is equal to the change due
    if (cashAvailable == changeDue) {
        return "Closed";
    }

    // Otherwise, return change in coin and bills, sorted in highest to lowest order
    else {

        let result = [];
        let moneyChange = 0;
        let currencyAmt;
        let currencyName;
        let currencyValue;
        changeDue *= 100;

        for (let i = cid.length - 1; i >= 0; i--) {

            if (changeDue >= currency[cid[i][0]]) {

                currencyAmt = cid[i][1] * 100;
                currencyName = cid[i][0];
                currencyValue = currency[cid[i][0]];

                while (currencyAmt > 0 && changeDue >= currencyValue) {

                    moneyChange += currencyValue;
                    changeDue -= currencyValue;
                    currencyAmt -= currencyValue;
                }

                result.push([currencyName, moneyChange / 100]);
                moneyChange = 0;
            }
        }

        // Print array result only if the entire change due was returned
        if (changeDue == 0) {
            return result;
        } else return "Insufficient Funds";
    }
}


checkCashRegister(3.26, 100.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]);
//-> [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]


// INVENTORY UPDATE

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!

    let curInv = arr1;
    let newInv = arr2;

    for (let i = 0; i < newInv.length; i++) {

        // Booolean to check if newInv item was found in curInv
        let inCurInv = false;

        for (let j = 0; j < curInv.length; j++) {

            // Update curInv item quantity if item found in curInv
            if (curInv[j][1] == newInv[i][1]) {
                curInv[j][0] += newInv[i][0];
                inCurInv = true;
            }
        }

        // Add new item and quantity into curInv if item not found
        if (inCurInv == false) {
            curInv.push([newInv[i][0], newInv[i][1]]);
        }
    }

    // Sort items in curInv by alphabetic order
    return curInv.sort(function (a, b) {
        var nameA = a[1].toUpperCase(); // ignore upper and lowercase
        var nameB = b[1].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
//-> [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]



// NO REPEAT PLEASE

function permAlone(str) {

    // Function permutation return an array of permutations
    function permutation(str) {

        // Break recursion if less than 2 letters
        if (str.length < 2) return str;

        // Array where we push permutations
        var permutations = [];

        // Iterate over str passed to permutation()
        for (var i = 0; i < str.length; i++) {

            // Each Get first letter and remaining string
            var char = str[i];
            var remainingString = str.slice(0, i) + str.slice(i + 1, str.length);

            // Call recursively permutation() with remaining string
            for (var subPermutation of permutation(remainingString)) {
                permutations.push(char + subPermutation);
            }
        }

        // Filter result array to remove permutations with 2 letters repeating
        return permutations.filter((perm) => {
            for (let i = 0; i < perm.length; i++) {
                if (perm[i] == perm[i + 1]) {
                    return false;
                }
            }
            return true;
        });
    }

    // Return total number of permutations that don't have 2 consecutive letters
    return permutation(str).length;
}

permAlone('aab');
//-> 2


// MAKE A PERSON

var Person = function (firstAndLast) {
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];

    this.getFullName = () => firstName + " " + lastName;

    this.getFirstName = () => firstName;

    this.getLastName = () => lastName;

    this.setFirstName = (first) => {
        firstName = first;
    };

    this.setLastName = (last) => {
        lastName = last;
    };

    this.setFullName = (full) => {
        firstName = full.split(" ")[0];
        lastName = full.split(" ")[1];
    };

};

var bob = new Person('Bob Ross');
bob.getFullName();
//-> Bob Ross


// MAP THE DEBRIS

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;

    // Create array to store updated objects
    let result = [];

    // Iterate over arr and calculate orbital period for each orbits
    arr.forEach((obj) => {
        const axis = obj.avgAlt + earthRadius;
        const period = 2 * Math.PI * Math.sqrt((Math.pow(axis, 3)) / GM);

        // Push object to result
        result.push({
            name: obj.name,
            orbitalPeriod: Math.round(period)
        });
    });

    return result;
}

orbitalPeriod([{
    name: "iss",
    avgAlt: 413.6
}, {
    name: "hubble",
    avgAlt: 556.7
}, {
    name: "moon",
    avgAlt: 378632.553
}]);
//-> [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]


// PAIRWISE

function pairwise(arr, arg) {

    let pairs = [];
    const sumPairs = 0;

    if (arr.length === 0) {
        return 0;
    }

    // First pair element starting from index 0
    for (let i = 0; i < arr.length; i++) {

        // Second pair element starting from index i + 1
        for (let j = i + 1; j < arr.length; j++) {

            // store indexes i and j if the sum of elements == arg and if indexes are not already in pairs
            if (arr[i] + arr[j] === arg && pairs.indexOf(i) === -1 && pairs.indexOf(j) === -1) {
                pairs.push(i, j);
            }
        }
    }

    // Get sum of indexes
    return pairs.reduce((a, b) => a + b);
}

pairwise([1, 1, 1], 2);
//-> 1