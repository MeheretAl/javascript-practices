function twoSum(arr, target) {
    var mymap = new Map()
    for (var i = 0; i < arr.length; i++) {
        var comp = target - arr[i]
        if (mymap.has(comp)) {
            return [i, arr.indexOf(comp)]
        } else {
            mymap.set(arr[i], comp)
        }
    }
}

