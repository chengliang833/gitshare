//json格式化(去除空格换行)

//不通过bat无法pause
//已有package.json直接npm install即可
//或单独npm install clipboardy

const clipboardy = require('clipboardy');
// clipboardy.writeSync('');
let sortKey = 'false';
if(process.argv.length == 3){
  sortKey = process.argv[2];
}
let resultStr;
var str = clipboardy.readSync();
// console.log(str);
if (str) {
  if(str.startsWith("{'") || str.startsWith("[{'")){
    str = str.replaceAll("'", '"');
  }
  let obj = null
  if(str.startsWith('"{') || str.startsWith('"\[{')){
    obj = eval("obj = "+JSON.parse('{"key":'+str+'}').key);
  }else{
    obj = eval("obj = " + str);
  }
  console.log("排序KEY:", sortKey);
  if(sortKey == 'true'){
    const {util} = require('./util');
    resultStr = util.objToStrBySort(obj);
  }else{
    resultStr = JSON.stringify(obj);
  }
}else{
  resultStr = "no input";
}
console.log(resultStr);
clipboardy.writeSync(resultStr);
console.log("已填充到剪贴板");
