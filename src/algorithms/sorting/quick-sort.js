/*
 *快速排序-从小到大
 */
function quickSort(arr){
	quick(arr, 0, arr.length - 1);
	return arr;
}

function quick(arr, left, right){
	if(arr.length > 1){
		var index = partition(arr, left, right);
		if(left < index - 1){
			quick(arr, left, index - 1);
		}
		if(index < right){
			quick(arr, index, right);
		}
	}
}

function partition(arr, left, right){
	var pivot = arr[Math.floor((right + left)/2)],
		i = left,
		j = right;
	while(i <= j){
		while(arr[i] < pivot){
			i++;
		}
		while(arr[j] > pivot){
			j--;
		}
		if(i <= j){
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i++;
			j--;
		}
	}
	return i;
}
/*
 *test
 *var a = [9,17,1,8,6,3,16,5,4,6,2];
 *quickSort(a)
 */
/*
 *时间复杂度T(n) = O(n*logn)
 */