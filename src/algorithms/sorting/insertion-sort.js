/*
 *插入排序-从小到大
 */
function insertionSort(arr){
	var l = arr.length;
	for(var i=1; i<l; i++){
		var temp = arr[i];
		for(var j=i; j>0; j--){
			if(arr[j-1] > temp){
				arr[j] = arr[j-1];
			}else{
				break;
			}
		}
		arr[j] = temp;
	}
	return arr;
}
/*
 *test
 *var a = [13,1,8,6,3,16,5,4,6,2];
 *insertionSort(a)
 */
 
/*
 *时间复杂度T(n) = O(1+...+(n-1)) = O(n*(n-1)/2) = O(n^2)
 */