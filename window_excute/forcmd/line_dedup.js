//多行数据去重

//不通过bat无法pause
//已有package.json直接npm install即可
//或单独npm install clipboardy

var clipboardy = require('clipboardy');
var str = clipboardy.readSync();

// console.log(str);
var resultStr;
if (str) {
    let reg;
    let wrapStr;
    if(/\r\n/g.test(str)){
        reg = /\r\n/g
        wrapStr = '\r\n'
    }else if(/\r/g.test(str)){
        reg = /\r/g
        wrapStr = '\r'
    }else{
        reg = /\n/g
        wrapStr = '\n'
    }
    let strArr = str.split(reg);
    let rArr = [];
    let rMap = {}
    strArr.forEach(o=>{
        if(!rMap[o]){
            rMap[o] = o;
            rArr.push(o)
        }
    })
    resultStr = rArr.join(wrapStr);
}else{
    resultStr = "no input";
}
console.log(resultStr);
clipboardy.writeSync(resultStr);
console.log("已填充到剪贴板");
