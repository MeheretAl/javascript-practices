function numSubArrayProductLessThanK(nums, k) {
    if (k <= 1) {
        return 0;
    }




}

// [10,5,2,6] k = 100
// [10] is valid so add it
// [10,5] is valid so add it
// [10,5,2] is not valid so remove [10]
// [5,2] is valid so add it
// [5,2,6] is valid so add it // We've also reached the end of the array
// [2,6] is valid so add it
// [6] is valid so add it
// [10], [10,5], [10,5,2], [5,2],[5,2,6],[2,6], [6]
// [5] and [2] are valid but not added therfore change of ways is needed
