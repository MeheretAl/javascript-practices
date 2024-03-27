function cycleSort(arr) {
    var i = 0
    while (i < arr.length) {
        var correctIndex = arr[i] - 1
        if (0 <= correctIndex && arr[i] != arr[correctIndex]) {
            var swap = arr[i]
            arr[i] = arr[correctIndex]
            arr[correctIndex] = swap
        } else {
            i += 1;
        }
    }

    return arr

}