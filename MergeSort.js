/* eslint-disable no-undef */

// Best case : O(nlog(n)) 
// Average case : O(nlog(n)) : The lower limit for a comparison sort's average case and is significantly better than bubble sort's
// Worst case : O(nlog(n)) 

function mergeSort(array){
    if(array.length <= 1){
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    //console.log(left)
    right = mergeSort(right);
    //console.log(right)
    return merge(left, right, array);
}

function merge(left, right, array){
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            array[outputIndex ++] = left[leftIndex ++]
        }else{
            array[outputIndex ++] = right[rightIndex ++];
        }
    }
    for(let i = leftIndex ; i < left.length ; i++){
        array[outputIndex ++] = left[i];
    }
    for(let i = rightIndex ; i < right.length; i++){
        array[outputIndex ++] = right[i]
    }
    return array;
}

module.exports = mergeSort;