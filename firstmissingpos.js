function firstMissingPos(nums) {
    var i = 0
    while (i < nums.length) {
        var correctIndex = arr[i] - 1
        if (1 <= nums[i] && nums[i] <= nums.length && nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
            //array destructuring is faster?
        } else {
            i++;
        }
    }
    // uses cyclic sort


    for (var i = 0; i < arr.length; i += 1) {
        if (i + 1 != nums[i]) {
            return i + 1
        }
    }

    return nums.length + 1
}
