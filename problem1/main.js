function findDigit(arr) {
    var frequency = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        frequency[num] = (frequency[num] || 0) + 1;
    }
    for (var num in frequency) {
        if (frequency[num] === 1) {
            return parseInt(num, 10);
        }
    }
    return undefined;
}
var inputArray = [1, 1, 3];
var result = findDigit(inputArray);
if (result !== undefined) {
    console.log("The single element that is not repeated is: ".concat(result));
}
else {
    console.log('Try Again! No unique element found.');
}
