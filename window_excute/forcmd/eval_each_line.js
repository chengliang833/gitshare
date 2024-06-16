////对每一行eval

//不通过bat无法pause
//已有package.json直接npm install即可
//或单独npm install clipboardy

var resultStr;

var str;
var clipboardy;
if(process.argv.length == 2){
    clipboardy = require('clipboardy');
    str = clipboardy.readSync();
}else{
    str = process.argv[2];
}

if (str) {
    let wrapInfo = checkWrapInfo(str);
    let strArr = str.split(wrapInfo.regex);
    let rArr = []
    strArr.forEach(o=>{
        rArr.push(o + '=' + eval(o));
    })
    resultStr = rArr.join(wrapInfo.str);
}else{
    resultStr = "no input";
}

if(process.argv.length == 2){
    console.log(resultStr);
    clipboardy.writeSync(resultStr);
    console.log("已填充到剪贴板");
}else{
    process.stdout.write(resultStr);
}





// 复制于util, 单行计算时require耗时较大, 直接复制过来
function checkWrapInfo(instr){
  let regex;
  let str;
  if(/\r\n/g.test(instr)){
      regex = /\r\n/g
      str = '\r\n'
  }else if(/\r/g.test(instr)){
      regex = /\r/g
      str = '\r'
  }else{
      regex = /\n/g
      str = '\n'
  }
  return {regex, str};
}





