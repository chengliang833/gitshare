//下划线转驼峰命名

//不通过bat无法pause
//已有package.json直接npm install即可
//或单独npm install clipboardy

const clipboardy = require('clipboardy');
// clipboardy.writeSync('');
var str = clipboardy.readSync();
// console.log(str);
if (str) {
  resultStr = str.replace(/_([a-z])/g, function(matchStr, $1){
        return $1.toUpperCase();
    });
}else{
  resultStr = "no input";
}
console.log(resultStr);
clipboardy.writeSync(resultStr);
console.log("已填充到剪贴板");
