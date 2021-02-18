/* eslint-disable no-undef */
// Quick sort again uses a divide and conquer approach.
// Partition the array into 2 halves around a pivot value.
// All of the values which are less than the pivot value go to 1 half of the array,
// and all of the values which are greater than the pivot go to the other half of the array.
// Then recursivley sort the 2 halves of the array until the halves are of length 0 or 1.

//Best case : O(nlog(n))
//Worst case : O(n^2)
// Average case : O(nlog(n))

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, end - 1, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

module.exports = quickSort;
