# Sorting Algorithms

- General, simple (but slow)

1. Bubble sort
2. Selection sort
3. Insert sort

- General, more complex (but fast)

1. Merge sort
2. Heap sort
3. Quick sort

- Specific (but maybe faster)

1. Bucket sort
2. Radix sort

## Bubble sort

Bubble sort is the classic 'terrible' sorting algorithm. In bubble sort, keep looping through an array to find out whether adjacent values need swapping, and keep going until there are no more values that need swapping.
Work through the list, comparing pairs of items, and swapping them if they are out of order. 

## Merge sort

Merge sort takes a divide and conquer approach to sorting. It breaks the array down into continually smaller chunk, then merges them back together in the correct order.

## Quick sort

Quick sort is another sorting algoritms. Quick sort is more commonly used than merge sort, as it is more cache-efficient and can easily be performed in place(i.e, without additional memory allocations).
It operates in-place.

- Quick sort's process
1. Chose a pivot element.
2. Partition the other elements into those greater than, and less than, the pivot.
3. Recursively sort the two partitions
4. Insert the pivot back into the middle.

