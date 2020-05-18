// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的
// 一个二维数组和一个整数，判断数组中是否含有该整数,并统计出现的次数。
var makearray = (num, hasnum, stepnum) => {          //num这个数组的起始数值，hasnum是否存在需要判断的整数，stepnum每一列从上到下递增的间隔
  var array = [];
  var array2 = [];
  var hasthisnum = false;
  var thisnum = 0;
  for (var i = 0; i < 10; i++) {        //构建第一列
    array[i] = num + i;
  }
  array.forEach((element, key) => {     //以第一列为基础构建之后的列
    var elementarray = [];
    for (var i = 0; i < 10; i++) {
      elementarray[i] = element + i * stepnum;
      if (elementarray[i] == hasnum) {   //判断是否存在需要统计的数
        hasthisnum = true;
        thisnum++;   //统计出现的次数
      }
    }
    array2[key] = elementarray
  });
  return { "array": array2, "hasthisnum": hasthisnum, "numtimes": thisnum }
}

var result = makearray(2, 30, 20);
console.log(result)


