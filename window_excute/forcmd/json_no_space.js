//json格式化(去除空格换行)

//不通过bat无法pause
//已有package.json直接npm install即可
//或单独npm install clipboardy

const clipboardy = require('clipboardy');
// clipboardy.writeSync('');
var str = clipboardy.readSync();
// console.log(str);
if (str) {
  if(str.startsWith("{'") || str.startsWith("[{'")){
    str = str.replaceAll("'", '"');
  }
  let obj = null
  if(str.startsWith('"{\\"') || str.startsWith('"\[{\\"')){
    obj = JSON.parse(JSON.parse('{"key":'+str+'}').key);
  }else{
    obj = JSON.parse(str);
  }
  resultStr = JSON.stringify(obj);
}else{
  resultStr = "no input";
}
console.log(resultStr);
clipboardy.writeSync(resultStr);
console.log("已填充到剪贴板");
