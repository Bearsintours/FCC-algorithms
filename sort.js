// BUBBLE SORT //

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if(arr[j] > arr[j+1]) {
          const temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
  }


// SELECTION SORT //

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      let min = arr[i];
      let minIdx;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < min) {
          min = arr[j];
          minIdx = j;
        }
      }
      arr[minIdx] = arr[i];
      arr[i] = min;
    }
    return arr;
}


// INSERTION SORT //

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i]= temp;
        }
      }
    }
    return arr;
  }


// QUICK SORT //

// Basic implementation
function quickSort(array) {
  function basicQuickSort(array) {
    if (array.length < 2) {
      return array;
    }

    let pivot = array[0];
    const lessThanPivot = [];
    const greaterThanPivot = [];

    for (let i = 1; i < array.length; i++) {
      if (array[i] > pivot) {
        greaterThanPivot.push(array[i]);
      } else {
        lessThanPivot.push(array[i]);
      }
    }
    return quickSort(lessThanPivot).concat(pivot, quickSort(greaterThanPivot));
  }
  return basicQuickSort(array);
}
  
