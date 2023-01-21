var targetIndices = function (nums, target) {
  const sortedNums = nums.sort((a,b) => a-b);
  console.log(sortedNums)
  const list = [];

  const itemIndex = binarySearch(sortedNums, target);

  console.log(itemIndex)

  let i = itemIndex;
  while (sortedNums[i] == target) {
    list.push(i);
    i++;
  }

  let j = itemIndex - 1;
  while (sortedNums[j] == target) {
    list.push(j);
    j--;
  }

  console.log(list)

  return list.sort();
};

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(
  targetIndices([
    48, 90, 9, 21, 31, 35, 19, 69, 29, 52, 100, 54, 21, 86, 6, 45, 42, 5, 62,
    77, 15, 38,
  ],6)
);
