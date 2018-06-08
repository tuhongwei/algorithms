/*
 *冒泡排序-从小到大
 */
function bubbleSort(arr){
	var l = arr.length;
	for(var i=l-1; i>1; i--){
		for(var j=0; j<i; j++){
			if(arr[j] > arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}
/*
 *时间复杂度T(n) = O((n-2)*(n-1)) = O(n^2)
 */