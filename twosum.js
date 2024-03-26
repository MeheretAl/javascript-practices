function twoSum(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
}
//can be done more efficiently using maps