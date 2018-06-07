/*
 *计数排序-从小到大
 *由于用来计数的数组a1的长度取决于待排序数组中最大的数，
 *如果待排序数组中数据范围很大的话，就需要大量的内存空间，
 *所以此方法适合数据范围不大的数组排序
 */
function countingSort(arr){
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
 *countingSort(a)
 */
/*
 *时间复杂度T(n) = O(n + (max-min)) = O(n+k)
 */