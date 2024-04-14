
const {util} = require('./util');
const {utilHtml} = require('./util_html');
const clipboardy = require('clipboardy');
var str = clipboardy.readSync();
let resultStr;
if (str) {
    let $ = util.initJquery$();
    
    let wraper = util.checkWrapInfo(str);
    let strArr = str.split(wraper.str);
    if(strArr[strArr.length-1] === ''){
        strArr.length = strArr.length-1;
    }
    let resultArr = [];
    console.log('共'+strArr.length+'个')
    for(let i=0,len=strArr.length; i<len; i++){
        let o = strArr[i];
        o = utilHtml.removeQuotamark(o);
        o = utilHtml.wrapDiv(o);
        o = utilHtml.retainTagStart(o);
        let $strDom = $(o.replaceAll(/<\//g, '\n</'));
        let resultStr = utilHtml.domTextClearWrap($strDom.text())
        if(resultStr === ''){
            resultStr = util.retainCN(strArr[i]);
        }else{
            resultStr = resultStr.replaceAll(/\n/g, '  ')
        }
        resultStr = utilHtml.retainTagEnd(resultStr);
        resultArr.push(resultStr);
        if((i+1)%5 == 0 || i == len - 1){
            console.log('完成'+(i+1)+'个');
        }
    }
    resultStr = resultArr.join('\r\n');
}else{
    resultStr = "no input";
}
console.log(resultStr);
clipboardy.writeSync(resultStr);
console.log("已填充到剪贴板");








