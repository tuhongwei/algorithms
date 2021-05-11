/*
 * 快速排序-从小到大
 */
function quickSort (arr) {
	quick(arr, 0, arr.length - 1);
	return arr;
}

function quick (arr, left, right) {
	let index;
	if (arr.length > 1) {
		index = partition(arr, left, right);
		if (left < index - 1) {
			quick(arr, left, index - 1);
		}
		if (index < right) {
			quick(arr, index, right);
		}
	}
}

function partition (arr, left, right) {
	let pivot = arr[Math.floor((left + right) / 2)];
	while (left <= right) {
		while (arr[left] < pivot) {
			left++;
		}
		while (arr[right] > pivot) {
			right--;
		}
		if (left <= right) {
			let temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
			left++;
			right--;
		}
	}
	return left;
}
/*
 *时间复杂度T(n) = O(n*logn)
 */