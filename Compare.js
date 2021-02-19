/* eslint-disable no-undef */
const compare = {
    LESS_THAN : -1,
    BIGGER_THAN : 1,
};

function defaultCompare(a,b){
    if(a === b){
        return 0;
    }
    return a < b ? compare.LESS_THAN : compare.BIGGER_THAN;
}

function insertionSort(array, compare = defaultCompare){
    const {length} = array;
    let temp;
    for(let i = 1; i< length; i++){
        let j = i ;
        temp = array[i];
        while(j>0 && compare(array[j -1],temp) === compare.BIGGER_THAN){
            array[j] = array[j -1];
            j-- ;
        }
        array[j] = temp;
    }
    return array;
}

module.exports = insertionSort;