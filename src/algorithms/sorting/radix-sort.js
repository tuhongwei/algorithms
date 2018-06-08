/*
 *基数排序-从小到大
 * @param arr 待排序数组
 * @param maxDigit 最大位数
 */
function radixSort(arr, maxDigit){
	var l = arr.length, mod = 10, div = 1,
		counter = [];
	for(var i=0; i<maxDigit; i++, mod*=10, div*=10){
		for(var j=0; j<l; j++){
			var bucket = Math.floor(arr[j] % mod / div);
			if(counter[bucket] == null){
				counter[bucket] = [];
			}
			counter[bucket].push(arr[j]);
		}
		var pos = 0;
		for(var k=0; k<counter.length; k++){
			if(counter[k] != null){
				var value;
				while((value = counter[k].shift()) != null){
					arr[pos++] = value;
				}
			}
		}
	}
	return arr;
}
/*
 *test
 *var a = [1,8,6,3,16,5,4,6,2,125,22,465];
 *radixSort(a, 3)
 */
/*
 *时间复杂度T(n) = O(maxDigit*(n + counter.length * m)) = O(k*n)
 */