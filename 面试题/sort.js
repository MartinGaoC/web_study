var arr = [9, 3, 1, 5, 4, 6, 2, 8, 7]
function bubbleSort(arr) {
    for(var i = 0; i < arr.length-1;i++){
        console.log(i, 'i')
        for(var j=0; j< arr.length-i-1;j++){
            console.log(j, 'j')
            if(arr[j]>arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                console.log(temp,'temp')

            }
        }
    }
}
bubbleSort(arr)
console.log(arr.length,'arr')



arr2 = [1, 5, 3, 8, 6, 9, 11];

function selectionSort(arr) {
    var len = arr.length;
    var minIndex, temp;
    for (var i = 0; i < len - 1; i++) {
      minIndex = i;
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
  }
  
  console.log(selectionSort(arr2));