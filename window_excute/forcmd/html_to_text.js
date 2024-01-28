
const clipboardy = require('clipboardy');
var str = clipboardy.readSync();
let resultStr;
if (str) {
    let jquery = require('jquery');
    let jsdom = require('jsdom');

    let {JSDOM} = jsdom
    //let JSDOM = jsdom.JSDOM
    let window = new JSDOM('<!doctype html><html><body></body></html>').window;
    //console.log(window.document)
    //global.document = document;
    //global.window = document.window;
    //global.navigator = document.navigator;
    //console.log(document.window)
    //console.log(global)
    let $ = jquery(window)//jsdom().defaultView);//jsdom().createWindow()

    let $strDom = $(str.replaceAll(/<\//g, '\n</'));
    //console.log($strDom.html());
    //console.log($strDom.text());
    resultStr = $strDom.text().replaceAll(/\n[​\n\s]*\n/g, '\n').replaceAll(/\n\s*/g, '\n').replaceAll(/^\s*\n/g, '');//  [​\n  中间有个符号，不知道是什么符
    //console.log(str2);
}else{
    resultStr = "no input";
}
console.log(resultStr);
clipboardy.writeSync(resultStr);
console.log("已填充到剪贴板");








