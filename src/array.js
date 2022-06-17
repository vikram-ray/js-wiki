/*
slice - returns a new subarray
splice - deletes element from original arr and optionally inserts element
*/

const letters = ["a", "b", "c"];

const newSlicedArr = letters.slice(1, 2);
console.log({ newSlicedArr });

// const newSplicedArr = letters.splice(0, 1);//deletes 1 element at index
const newSplicedArr = letters.splice(0, 1, "one");
console.log({ newSplicedArr, letters }); // newSplicedArr: ["a"], letters: ["one", "b", "c"]
