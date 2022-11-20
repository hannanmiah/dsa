function search(arr, item) {
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end) / 2);

    while (start < end) {
        if (arr[mid] === item) {
            return mid // matched item and it will be returned
        } else if (arr[mid] > item) {
            end = mid -1 // reset end
        } else {
            start = mid + 1 // reset start
        }

        mid = Math.floor((start + end) / 2); // reset mid
    }

    return -1 // if didn't match then it will returned as unmatched index
}

const arr = [23, 26, 29, 30, 55, 58, 59, 60, 83, 99, 100]

console.log(search(arr, 61)) // returned index will be -1 cause it is not matched
console.log(search(arr, 27)) // returned index will be -1 cause it is not matched
console.log(search(arr,29)) // retured index will be 2

