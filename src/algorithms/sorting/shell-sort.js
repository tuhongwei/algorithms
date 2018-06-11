/*
 *希尔排序-从小到大
 */
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/5) {          //动态定义间隔序列
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/5)) {
    	console.log(gap)
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}
var arr=[592,401,874,141,348,72,911,887,820,283,28,892,256,65,159];
console.log(shellSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
/*
 *test
 *var a = [1,8,6,3,16,5,4,6,2,125,22,465];
 *shellSort(a, 3)
 */
/*
 *时间复杂度T(n) = O(n*2))
 */