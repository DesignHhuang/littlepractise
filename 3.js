//实现插入排序，选择排序和冒泡排序
let array = [1, 3, 5, 2, 6, 4, 9, 8, 7];
// 数组插入排序
// 就是从第n项开始和前面的做比较，找到合适的位置插进去（n>=1）
function insertionSort(array) {
    let length = array.length;
    for (let i = 1; i < length; i++) {
        // 需要判断的项的前一项
        let preIndex = i - 1;
        // 需要判断的项的值
        let currentValue = array[i];
        // 一直和之前的项比，找到合适的位置
        while (preIndex >= 0 && array[preIndex] > currentValue) {
            array[preIndex + 1] = array[preIndex]
            preIndex--
        }
        array[preIndex + 1] = currentValue
    }
    return array;
}
console.log(insertionSort(array))

// 数组选择排序
// 每次找到最小项，放到最前面   将起始值与最小项交换位置
function selectionSort(array) {
    let len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            array[j] < array[minIndex] ? minIndex = j : null
        }
        array[i] = [array[minIndex], array[minIndex] = array[i]][0]
    }
    return array;
}
console.log(selectionSort(array))

// 数组冒泡排序
// 不断的两两比较
function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            array[j] > array[j + 1] ? array[j] = [array[j + 1], array[j + 1] = array[j]][0] : null
        }
    }
    return array
}
console.log(bubbleSort(array))

// 数组快速排序