/*
 *堆排序-从小到大
 */
function heapSort(arr){
	var len = arr.length;
	for(var i=Math.floor(len/2) - 1; i>=0; i--){
		heapify(arr, i, len);
	}
	for(var j=len-1; j>0; j--){
		var temp = arr[0];
		arr[0] = arr[j];
		arr[j] = temp;
		heapify(arr, 0, --len);
	}
	return arr;
}
function heapify(arr, x, len){
	var l = 2 * x + 1, r = 2 * x + 2, largest = x;
	if(l < len && arr[l] > arr[largest]){
		largest = l;
	}
	if(r < len && arr[r] > arr[largest]){
		largest = r;
	}
	if(largest != x){
		var temp = arr[x];
		arr[x] = arr[largest];
		arr[largest] = temp;
		heapify(arr, largest, len);
	}
}
/*
 *test
 *var a = [1,8,6,3,16,5,4,6,2,125,22,465];
 *heapSort(a)
 */
/*
 *时间复杂度T(n) = O(n/2 * logn + (n-1) * log(n-1)) = O(nlogn)
 */


