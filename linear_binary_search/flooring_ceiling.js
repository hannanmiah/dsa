function search(arr, target) {
    let start = 0
    let end = arr.length - 1
    const order = checkOrder(arr)
    let mid

    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        
        if (order === 'asc') {
            if (arr[mid] === target) {
              return mid;
            } else if (arr[mid] > target) {
              end = mid - 1;
            } else {
              start = mid + 1;
            }
        } else {
            if (arr[mid] === target) {
                return mid
            } else if (arr[mid] > target) {
                start = mid + 1
            } else {
                end = mid -1
            }
        }
    }

    if (order === 'asc') {
        if (arr[mid] < target) {
          return {
            flooring: arr[mid],
            ceiling: arr[mid + 1],
          };
        } else {
          return {
            flooring: arr[mid - 1],
            ceiling: arr[mid],
          };
        }
    } else {
        if (arr[mid] < target) {
          return {
            flooring: arr[mid],
            ceiling: arr[mid-1],
          };
        } else {
          return {
            flooring: arr[mid - 1],
            ceiling: arr[mid],
          };
        }
    }

    return -1
} 

function checkOrder(arr) {
    const startIndex = 0
    const lastIndex = arr.length - 1
    if (arr[startIndex] > arr[lastIndex]) {
        return 'desc'
    }

    return 'asc'
}

// Order agoostic binary search with flooring and ceiling return
console.log(search([1, 3, 5, 7, 8, 13, 57, 59, 69], 4)) // {flooring: 3,ceiling: 5}
console.log(search([55,54,22,21,7,6,5,4],53)) // {flooring: 22,ceiling: 54}