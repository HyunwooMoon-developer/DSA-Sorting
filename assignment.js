/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mergeSort = require("./MergeSort");
const quickSort = require("./QuickSort");
const insertionSort = require('./Compare');
// Q1. Understanding Merge sort

//const number1 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

// 1st : [21, 1, 26, 45, 29, 28, 2 , 9]
// 2nd : [21, 1, 26, 45]
// 3rd : [21, 1]
// 4th : [21]
// 5th : [1]
// 6th : [26, 45]
// 7th : [26]
// 8th : [45]
// 9th : [29, 28, 2, 9]
// 10th : [29, 28]
// 11th : [29]
// 12th : [28]
// 13th : [2, 9]
// 14th : [2]
// 15th : [9]
// 16th : [16, 49, 39, 27, 43, 34, 46, 40]

// what are the first 2 lists to be merged?

// A) [1], [21]

//Which two lists would be merged on the 7th merge?

// A) [1, 21 , 26, 45]

//console.log(mergeSort(number1));

// Q2. Understanding quicksort
// 1) [3, 9, 11, 14, 17, 24, 22, 20]
// The pivot could have been either 14 or 17

//const number2 = [3, 9, 11, 14, 17, 24, 22, 20]

//console.log(quickSort(number2));

// Q3. Implementing quicksort

const string =
  "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5";
const number = string.split(" ").map((num) => Number(num));

console.log(quickSort(number));

// Q4. Implementing merge sort

console.log(mergeSort(number));

// Q6. Bucket sort
//Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.
//Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of buckets.
// Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.

function bucketSort(array, size){
    if(array.length < 2){
        return array;
    }
    // create buckets and distribute the elements
    const buckets = createBucket(array, size);
    // sort the buckets using insertion sort and add all bucket elements to sorted result
    return sortBucket(buckets);
}

function createBucket(array, size){
    //determine the bucket count
    let min = array[0];
    let max = array[0];
    for(let i = 1 ; i < array.length ; i ++){
        if(array[i] < min){
            min = array[i];
        }else if(array[i] > max){
            max = array[i];
        }
    }
    const bucketCount = Math.floor((max -min)/ size) + 1;

    //initialize each bucket ( a multidimensional array)
    const bucket = [];
    for(let i = 0; i < bucketCount; i++){
        bucket[i] = [];
    }
    //distribute elements into buckets
    for(let i = 0 ; i < array.length ; i++){
        const bucketIndex = Math.floor((array[i] - min) / size);
        bucket[bucketIndex].push(array[i]);
    }
    return bucket;
}

function sortBucket(bucket){
    const sortedArray = [];
    for(let i = 0 ; i < bucket.length ; i++){
        if(bucket[i] != null){
            insertionSort(bucket[i]);
            sortedArray.push(...bucket[i]);
        }
    }
}

// Q7. Sort in Place
//Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).
//The swap function simply swaps the values at 2 indices in an array.
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function sortInPlace(array) {
  for (let i = 0; i < array.length; i++) {
    let random = Math.floor(Math.random() * array.length);
    swap(array, i, random);
  }
  return array;
}

const sortArray = [0, 1, 2, 3, 4];
const sortedArray = sortInPlace(sortArray);
console.log(sortedArray);

// Q8. Sorting books
// Express this as an algorithm and then implement your algorithm.

const book = [
  "Lord of the Ring",
  "Harry Potter",
  "Game of Thrones",
  "Jurassic Park",
  "Hamlet",
  "No country for the Old Man",
  "Secret",
];

console.log(mergeSort(book));