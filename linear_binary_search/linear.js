//array where we will search
let arr = [5, 33, 434, 4, 3, 545, 32, 545, 33, 23, 2]

function search(arr, item) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === item) {
            return i
        }
    }

    return -1
}

console.log(search(arr, 3)) // item found at index number 4
console.log(search(arr,29)) // item not found thats why it returned -1
