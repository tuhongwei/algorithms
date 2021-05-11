/*
 *选择排序-从小到大
 */
function selectionSort (arr) {
	let l = arr.length;
	let minIndex;
	for (let i = 0; i < l - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j < l; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			let temp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = temp;
		}
	}
	return arr;
}
/*
 *时间复杂度T(n) = O((n-1)+(n-2)+...+1) = O(n*(n-1)/2) = O(n^2)
 */