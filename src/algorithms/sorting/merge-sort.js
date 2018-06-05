/*
 *归并排序-从小到大
 */
function mergeSort(arr){
	var l = arr.length;
	if(l === 1){
		return arr;
	}
	var mid = Math.floor(l/2),
		left = arr.slice(0, mid),
		right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	var result = [], il = 0, ir = 0;
	while(il < left.length && ir < right.length){
		if(left[il] < right[ir]){
			result.push(left[il++]);
		}else{
			result.push(right[ir++]);
		}
	}
	while(il < left.length){
		result.push(left[il++]);
	}
	while(ir < right.length){
		result.push(right[ir++]);
	}
	return result;
}
/*
 *test
 *var a = [9,17,1,8,6,3,16,5,4,6,2];
 *mergeSort(a)
 */
/*
 *时间复杂度T(n) = O(n*logn)
 */