

const duplicateNums = new Set([1,1,2,2,3,4]);

const ref = [...new Set("referee")].join("");


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);


/*
    Write a function called hasDuplicate which accepts an array and returns 
    true or false if that array contains a duplicate
*/
const hasDuplicate = (arr) => console.log(new Set(arr).size !== arr.length)

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

/*
    Write a function called vowelCount which accepts a string and 
    returns a map where the keys are numbers 
    and the values are the count of the vowels in the string.
*/ 


function isVowel(char){
    return 'aeiou'.includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
        for(let char of str){
            let lowerCaseChar = char.toLowerCase();
            if(isVowel(lowerCaseChar)){
                if(vowelMap.has(lowerCaseChar)){
                    vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
                    console.log(vowelMap)
                } else {
                    vowelMap.set(lowerCaseChar, 1);
                }
            }
        }
        return vowelMap;
}


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

