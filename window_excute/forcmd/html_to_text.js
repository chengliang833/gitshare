
const {util} = require('./util');
const {utilHtml} = require('./util_html');
const clipboardy = require('clipboardy');
var str = clipboardy.readSync();
let resultStr;
if (str) {
    let $ = util.initJquery$();
    
    //console.log(str)
    //str = str.replaceAll(/\r\n/g, '__rn__').replaceAll(/\n/g, '__n__');
    //console.log(/(?<!\r)\n/g.test(str))
    //console.log(str)
    let wrapStr = util.checkWrapInfo(str).str;
    let endsWithWrap = false;
    //console.log(str.endsWith(wrapStr))
    let o = str;
    if(o.endsWith(wrapStr)){
        endsWithWrap = true;
        o = o.substring(0, o.length-wrapStr.length);
    }
    o = utilHtml.removeQuotamark(o);
    o = utilHtml.wrapDiv(o);
    o = utilHtml.retainTagStart(o);
    let $strDom = $(o.replaceAll(/<\//g, '\n</'));
    //console.log($strDom.html());
    //console.log($strDom.text());
    resultStr = utilHtml.domTextClearWrap($strDom.text())
    if(endsWithWrap && !resultStr.endsWith(wrapStr)){
        resultStr += wrapStr;
    }
    resultStr = utilHtml.retainTagEnd(resultStr);
    if(resultStr === ''){
        resultStr = util.retainCN(str);
    }
    //resultStr = resultStr.replaceAll(/\r\n/g, '__rn__').replaceAll(/\n/g, '__n__');
    //console.log(str2);
}else{
    resultStr = "no input";
}
console.log(resultStr);
clipboardy.writeSync(resultStr);
console.log("已填充到剪贴板");








