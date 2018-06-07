/*
 *基数排序-从小到大
 * @param arr 待排序数组
 * @param maxDigit 最大位数
 */
function radixSort(arr, maxDigit){
	var l = arr.length, a1 = [], result = [],
		min = max = arr[0];
	for(var i=0; i<l; i++){
		min = min < arr[i] ? min : arr[i];
		max = max < arr[i] ? arr[i] : max;
		a1[arr[i]] = a1[arr[i]] ? a1[arr[i]] + 1 : 1;
	}
	for(var j=min; j<max; j++){
		a1[j+1] =  (a1[j] || 0) + (a1[j+1] || 0);
	}
	for(var k=0; k<l; k++){
		result[a1[arr[k]] - 1] = arr[k];
		a1[arr[k]]--;
	}
	return result;
}
/*
 *test
 *var a = [1,8,6,3,16,5,4,6,2];
 *radixSort(a, 1)
 */
/*
 *时间复杂度T(n) = O((n-1)+(n-2)+...+1) = O(n*(n-1)/2) = O(n^2)
 */