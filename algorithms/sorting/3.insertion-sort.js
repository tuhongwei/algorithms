/*
 *插入排序-从小到大
 */
function insertionSort (arr) {
	var l = arr.length;
  for (let i = 1; i < l; i++) {
    let temp = arr[i];
    let j;
    for (j = i; j > 0 && temp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    if (i !== j) {
      arr[j] = temp;
    }
  }
	return arr;
}
 
/*
 *时间复杂度T(n) = o(1+...+(n-1)) = o(n*(n-1)/2) = o(n^2)
 */