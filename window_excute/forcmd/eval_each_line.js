////对每一行eval

//不通过bat无法pause
//已有package.json直接npm install即可
//或单独npm install clipboardy

const {util} = require('./util');
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
    let wrapInfo = util.checkWrapInfo(str);
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
