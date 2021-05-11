/*
 *线性搜索
 */
function linearSearch(arr, item){
	for(var i=0, l=arr.length; i<l; i++){
		if(item === arr[i]){
			return i;
		}
	}
	return -1;
}

/*
*test
*linearSearch([1,5,3,3,6], 3)
*/
/*
 *时间复杂度T(n) = O(n)
 */