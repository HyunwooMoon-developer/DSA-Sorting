/* eslint-disable no-undef */
// Best case : O(n) : Array is in the correct order
// Average case : O(n^2)
// Worst case : O(n^2) Every value has to be swapped with every other value 

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
    }
  }
  if (swaps > 0) {
    return bubbleSort(array);
  }
  return array;
}

module.exports = bubbleSort;