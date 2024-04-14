
const clipboardy = require('clipboardy');
const fs = require('fs');
const xlsx = require('node-xlsx');

var filePath = clipboardy.readSync();
if (filePath == null) {
    console.log('请选择文件!')
    return;
}
let jquery = require('jquery');
let jsdom = require('jsdom');
let {JSDOM} = jsdom
let window = new JSDOM('<!doctype html><html><body></body></html>').window;
let $ = jquery(window)

//console.log(filePath);
//filePath = filePath.replaceAll(/\\/g, '/');
let dir = filePath.substring(0, filePath.lastIndexOf('\\')+1)
let fileName = filePath.substring(filePath.lastIndexOf('\\')+1)
//console.log(fileName)
let fileSuf = null;
if(fileName.indexOf('.') >= 0){
    fileSuf = fileName.substring(fileName.lastIndexOf('.')+1)
    fileName = fileName.substring(0, fileName.lastIndexOf('.'))
}
//console.log(fileName)

let allStr = fs.readFileSync(filePath, 'utf-8');
let wrapStr;
let reg;
if(/\r\n/g.test(allStr)){
    reg = /\r\n/g
    wrapStr = '\r\n'
}else if(/\r/g.test(allStr)){
    reg = /\r/g
    wrapStr = '\r'
}else{
    reg = /\n/g
    wrapStr = '\n'
}
let allArr = allStr.split(reg);
let resultArr = [];
//console.log(allArr[0])
let retainStr = null;
if(allArr.length > 0 && allArr[0].startsWith('retainRegex:')){
    retainStr = allArr[0].substring(12);
    allArr.shift();
}
allArr.forEach(o=>{
    if(o && o.length > 0){
        if(o.startsWith('"') && o.endsWith('"')){
            o = o.substring(1, o.length-1);
        }
        if(!o.startsWith('<')){
            o = '<div>'+o+'</div>';
        }
        if(retainStr != null){
            o.replaceAll(new Regex(retainStr), '')
            retainStr = retainStr.replaceAll(/</g, '_&lt;_').replaceAll(/>/g, '_&gt;_')
        }
        let $strDom = $(o.replaceAll(/<\//g, '\n</'));
        let resultStr = $strDom.text().replaceAll(/\n[​\n\s]*\n/g, '\n').replaceAll(/\n\s*/g, '\n').replaceAll(/^\s*\n/g, '');//  [​\n  中间有个符号，不知道是什么符    
        resultArr.push(resultStr.replaceAll(/\n/g, '\t'));
    }
});
if(resultArr.length == 0){
    console.log('文件中无数据')
    return;
}
console.log('共'+resultArr.length+'行')
let toPath = dir+fileName+'_convert'+(fileSuf?'.'+fileSuf:'');
//toPath = toPath.replaceAll(/\//g, '\\');
//console.log(toPath)
fs.writeFileSync(toPath, resultArr.join(wrapStr));
console.log("已写入到:"+toPath);








