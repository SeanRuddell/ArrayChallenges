function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i <= arr.length; i++){
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result);

function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]%2==0){
            totalEvens++
        }
        else {
            totalOdds++
        }
}
    if (totalEvens > totalOdds) {
        return "evens are larger"
    }
    else if (totalOdds > totalEvens) {
        return "odds are larger"
    }
    else {
        return "tied"
    }
}
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i < arr.length; i++) {
        sum += arr[i];    
    }
    var avg = sum/arr.length
    var count = 0
    for(i=0; i < arr.length; i++) {
        if(arr[i]>avg){
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result);

function fibonacciArray(n) {
    var fibArr = [0, 1];
    var v = 0;
    for(var i=0; i<=n-3; i++){
        v = fibArr[fibArr.length-2]+fibArr[fibArr.length-1];
        fibArr.push(v);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
