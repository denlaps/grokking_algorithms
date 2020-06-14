function sum(a, b) {
  return a + b;
}

function binary_search(arr, val) {
  let [bottom, top] = [0, arr.length - 1];
  if(val > arr[top] || val < arr[bottom]) return null;

  let mid = top;

  while (val != arr[mid]) {
    mid = Math.floor(bottom + (top - bottom) / 2);
    if (mid < bottom || mid > top) {
      mid = -1;
      break;
    }

    if(val < arr[mid]) {
      top = mid;
    } else if(val > arr[mid]) {
      bottom = mid;
    }
  }

  return mid;
}

module.exports = { sum, binary_search }