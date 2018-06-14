/*
 *希尔排序-从小到大
 */
function shellSort(arr) {
    var l = arr.length,
    	gap = 1;
   	while(gap < l/2){
   		gap *= 2;
   	}
   	for(gap; gap>0; gap=Math.floor(gap/2)){
		for(var i = gap; i<l; i++){
			var temp = arr[i];
			for(var j=i-gap; j>=0 && temp<arr[j]; j-=gap){
				arr[j+gap] = arr[j];
			}
			arr[j+gap] = temp;
		}
   	}
    return arr;
}
/*
 *test
 */
 var a = [592,401,874,141,348,72,911,887,820,283,28,892,256,65,159];
 shellSort(a)
 /**/
/*
 *时间复杂度T(n) = O(logn*n*logkn))
 */