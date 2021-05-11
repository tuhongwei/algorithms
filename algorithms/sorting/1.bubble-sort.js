/*
 * 冒泡排序-从小到大
 */
function bubbleSort (arr) {
	let l = arr.length;
	for (let i = l - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
/*
 * 时间复杂度T(n) = o((n-1)+(n-2)+...+1) = o(n*(n-1)/2) = o(n^2)
 */