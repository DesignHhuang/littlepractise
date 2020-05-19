//请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为 We Are Happy.则经过替换之后的字符串为 We%20Are%20Happy

var stringreplace = (str) => {
  return str.replace(/\s/g, "%20")
}
var result = stringreplace("WE ARE HAPPY")
console.log(result)