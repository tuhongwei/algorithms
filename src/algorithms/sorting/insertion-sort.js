/*
 *插入排序-从小到大
 */
function insertionSort(arr){
	var l = arr.length, indexMin;
	for(var i=0; i<l-1; i++){
		indexMin = i;
		for(var j=i+1; j<l; j++){
			if(arr[indexMin] > arr[j]){
				indexMin = j;
			}
		}
		if(i !== indexMin){
			var temp = arr[i];
			arr[i] = arr[indexMin];
			arr[indexMin] = temp;
		}
	}
}
/*
 *test
 *var a = [1,8,6,3,16,5,4,6,2];
 *selectionSort(a)
 */
/*
 *时间复杂度T(n) = O((n-1)+(n-2)+...+1) = O(n*(n-1)/2) = O(n^2)
 */