function secondMax(arr) {
    var maxNum = -Infinity;
    var secondMax = - Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            secondMax = maxNum;
            maxNum = arr[i];
        } else if (arr[i] > secondMax && arr[i] < maxNum) {
            secondMax = arr[i];
        }

    }
    return secondMax;
}


console.log(secondMax([4, 4, 4, 4]))