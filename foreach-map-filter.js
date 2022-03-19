// forEach

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){

    let newArray = [];

    arr.forEach(function(value, index) {
        
        newArray.push(value * 2);

    })

    return newArray;

}


/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    
    // create new empty array for even vals
    let newArray = [];

    // loop thru the existing arr
    arr.forEach(function (value, index) {

    // get even numbers with modulus
        if (value % 2 === 0) {
    // push even numbers to new arr
            newArray.push(value)
        }
    })
    // return new arr
    return newArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    // create newArray for first and last letter of each name
    let newArray = [];

    // loop thru the existing arr
    arr.map(function (item) {
    // a) get the value of the first index of each value in the array
        let firstLetter = item.charAt(0);
        
    // b) get the value of the last index of each value in the array
        let lastLetter = item.slice(-1);
    
    // push firstLetter and lastLetter to newArray
        newArray.push(`${firstLetter + lastLetter}`);
    });

    // return newArray
    return newArray;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value 
and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){

    // loop thru existing array
    arr.forEach(function(val) {

        // add key and value to each object (val) in the array
        val[key] = value;
    })

    //return array
    return arr;    
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel 
and the values as the number of times the vowel appears in the string. This function should be case insensitive
so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   // initialize new empty object
    let obj = {};

   // convert str to array
    let splitArr = str.split("");

    //creater vowels variable
    const vowels = 'aeiou';

    // loop thru splitArr
    splitArr.forEach(function(letter) {
    
    // lower case the values in the string
    let lowerCasedLetter = letter.toLowerCase();

    // if lowerCased value contains vowels is true
        if (vowels.indexOf(lowerCasedLetter) !== -1) {

            // if obj contains lowerCasedLetter (key)
            if (obj[lowerCasedLetter]) {

                //add count of value to the obj
                obj[lowerCasedLetter]++;

                // else add new letter from lowerCasedLetter to object
            }   else {
                    obj[lowerCasedLetter] = 1;
                }
        }
    });

    // return object with new values
    return obj;

}


// map

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array
passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {

    // create variable newArray
    let newArray = [];

    // write map arr function, accepts value and index
    arr.map(function(value, index) {

        // push new values (value*2) to newArray 
        newArray.push(value * 2);
    })

    // return newArray
    return newArray;
}


/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied
by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    // create arr.map function which accepts a value and index
    return arr.map(function(value, index) {
        
        // return value * index
        return value * index;
    })    
}

/*
Write a function called extractKey which accepts an array of objects and some key and 
returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){

    // create arr map function
    const result = arr.map(function(value) {

        // then return the value of the particular key of the object passed into the method
        return value[key];
    });

    // create filter result function
    return result.filter(function(value) {

        // filter out "undefined" from the array; if value is not equal to undefined is true, then return the value in the array
        return value !== undefined;
    })
}


/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the 
value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) 
    // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){

    // create map arr function
    return arr.map(function(value) {
        
        // return object values 
        // return object keys
        return `${value.first + " " + value.last}`;
    })
}


// filter

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a 
new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') 
    // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {

    // create filter arr function
    return arr.filter(function(value) {

        // return array with objects that contain key
        return value[key];
    })

}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same 
value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

// not getting undefined

function find(arr, searchValue) {

    // create filter arr function; check if searchValue is in arr (true/false)
    const result = arr.filter(item => (item === searchValue));

    // if searchValue does not exist in "result" array
    if (result.length == 0) {

        // return undefined
        return undefined;
    }

    // return first index of result
    return result[0];

}


/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and 
returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) 
    // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {

    // create arr filter function (value)
    const result = arr.filter(function(value) {

        // return array with objects that contain key
        return value[key] === searchValue;
    })

    // return first index of result
    return result[0];
} 

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels 
(both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {

    //create consonants variable
    const consonants = 'bcdfghjklmnpqrstvwxyz';

    // create str filter function; lowercase string; split string to array
    return str.toLowerCase().split("").filter(function(letter) {

    // return if letter contains consonant is true
        return consonants.indexOf(letter) !== -1;

    })
    // convert to string
    .join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled 
(HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {

    // create oddNumbers array 
    // create filter arr function
    const oddNumbers = arr.filter(function(value) {

        // return if not equal to 0 (value % 2 modulus operator)
        return (value % 2) !== 0
    })

    // create map oddNumbers function
    return oddNumbers.map(function(value) {

        // return value * 2
        return value * 2;
    })
}
