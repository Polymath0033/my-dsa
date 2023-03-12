// const array = [2, 1, 1, 4, 3];
// const set = new Set(array);
// console.log(set)
// const strings = 'red2 black1 yellow4 green3';
// const split = strings.split(' ')
// console.log(split)
// let i = 0;
// while (i < split.length - 1) {
//     // const spl = split[i].match(/\d+/);
//     // console.log(spl)
//     console.log(i)
// }
//let sorted_array = new Array(split.length)
//for (let i = 0; i < split.length; i++) {
//console.log(split[i])
// const position = split[i].slice(split[i].length - 1);
// const slice = split[3].match(/\d+/)
//console.log(slice)
// let pos = [];
// pos.push(position)
// // console.log(pos)
// sorted_array[pos - i] = split
//}
//console.log(sorted_array)

// const linear_search = (array, search_item) => {
//     for (let i = 0; i < array.length; i++) {
// console.log(array[i])
// console.log(array[i] > search_item)
// if (array[i] === search_item) {
// console.log(array[i] === search_item)
//     return search_item
// }
//else {
//   array[i] > search_item;
//     return 'not found'
// }
//         return 'not found'
//     }
// }
// console.log(linear_search([1, 2, 3, 6], 1))
// const binary_search = (array, search_number) => {
//     let lower = 0;
//     let upper = array.length - 1;
//     const midpoint = Math.round((lower + upper) / 2)
//     let value_at_midpoint = array[midpoint];
//     do {
//         if (search_number === value_at_midpoint) {
//             return midpoint;
//         } else if (search_number < value_at_midpoint) {
//             upper = midpoint - 1;
//         } else if (search_number > value_at_midpoint) {
//             lower = midpoint + 1
//         }
//         console.log(value_at_midpoint)
//         return null
//     } while (lower <= upper)


//     //console.log(array[midpoint])
// }
// binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)

// function chartAt(str) {
//     let result = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]
//         if (result[char] > 0) {
//             result[char]++
//         } else {
//             result[char] = 1
//         }
//     }
//     console.log(result)
// }
// chartAt([1, 4, 5, 6, 7, 1])

// function charCount(str) {
//     let result = {}
//     for (let char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (result[char] > 0) {
//                 result[char]++
//             } else {
//                 result[char] = 1
//             }
//         }
//     }
//     console.log(result)
// }
// charCount('Hello world')

// function charC(str) {
//     let result = {};
//     for (let char of str) {
//         char = char.toLowerCase();
//         result[char] = ++result[char] || 1
//     }
//     console.log(result)
// }
// charC('Hello world')
// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if (correctIndex === -1) {
//             return false
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1)
//     }
//     return true
// }

//console.log(same([1, 2, 3], [9, 1, 4]))
// const same = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for (let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for (let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }
//     for (let key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) {
//             return false
//         }
//         if ((frequencyCounter2[key ** 2] !== frequencyCounter1[key])) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(same([1, 30, 3], [9, 1, 4]))

// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//         return false
//     }
//     const check_out = {};
//     for (let i = 0; i < first.length; i++) {
//         let letter = first[i]
//         check_out[letter] ? check_out[letter] += 1 : check_out[letter] = 1
//     }

//     for (let i = 0; i < second.length; i++) {
//         let letter = second[i];
//         if (!check_out[letter]) {
//             return false
//         } else {
//             check_out[letter] -= 1
//         }
//     }
//     return true
// }
// console.log(validAnagram('water', 'terwb'));

function findS(array, target) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        const diff = target - array[i];
        if (diff in obj) {
            console.log([i, obj[diff]])
            return [i, obj[diff]]
        }


        obj[array[i]] = i
    }
    // console.log(obj)
}
console.log(findS([1, 2, 4, 5], 7))