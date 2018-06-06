/*
 *线性搜索-要求arr已排序 ->默认从小到大
 */
function binarySearch(arr, item){
	var l = arr.length, low = 0, high = l - 1;
	while(low <= high){
		var mid = Math.floor((low + high)/2);
		if(item > arr[mid]){
			low = mid + 1;
		}else if(item < arr[mid]){
			high = mid - 1;
		}else{
			return mid;
		}
	}
	return -1;
}

/*
*test
*binarySearch([1,2,3,3,6], 1)
*/
/*
 *时间复杂度T(n) = O(logn)
 */