function numSubArrayProductLessThanK(nums, k) {
    if (k <= 1) {
        return 0;
    }

    let left = 0,right = 0,product = 1,answer = 0;
    while(left <= nums.length) {
        let product  = product * nums[right];
        while(product < k) {
            product = Math.floor(product/nums[left])
            left += 1
        }
        answer += 1
    }




}

