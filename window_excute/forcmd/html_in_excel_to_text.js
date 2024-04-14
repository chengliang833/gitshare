
const {util} = require('./util');
const {utilHtml} = require('./util_html');
const clipboardy = require('clipboardy');
const fs = require('fs');
const xlsx = require('node-xlsx');

let convertWrap = true;
// console.log(process.argv);
if(process.argv.length == 3 && process.argv[2] == 'wrap'){
    convertWrap = false;
}

var filePath = clipboardy.readSync();
if (filePath == null) {
    console.log('请选择文件!')
    return;
}
let $ = util.initJquery$();

//console.log(filePath);
//filePath = filePath.replaceAll(/\\/g, '/');
let dir = filePath.substring(0, filePath.lastIndexOf('\\')+1)
let fileName = filePath.substring(filePath.lastIndexOf('\\')+1)
let fileSuf = null;
if(fileName.indexOf('.') >= 0){
    fileSuf = fileName.substring(fileName.lastIndexOf('.')+1)
    fileName = fileName.substring(0, fileName.lastIndexOf('.'))
}
//console.log(fileName)

var sheets = xlsx.parse(filePath);
let resultSheets = []
console.log('共'+sheets.length+'个sheet')
for(let i=0,len=sheets.length; i<len; i++){
    let sheet = sheets[i];
    console.log('第'+(i+1)+'个sheet', '共'+sheet.data.length+'行')
    let resultSheet = {name:sheet.name}
    let data = []
    for(let j=0,lenj=sheet.data.length; j<lenj; j++){
        let row = sheet.data[j];
        if(row.length > 0 && row[0] && row[0].length > 0){
            let o = row[0];
            o = utilHtml.removeQuotamark(o);
            o = utilHtml.wrapDiv(o);
            o = utilHtml.retainTagStart(o);
            let $strDom = $(o.replaceAll(/<\//g, '\n</'));
            let resultStr = utilHtml.domTextClearWrap($strDom.text())
            if(convertWrap){
                resultStr = resultStr.replaceAll(/[\r\n]+/g, '  ');
            }
            resultStr = utilHtml.retainTagEnd(resultStr);
            if(resultStr === ''){
                resultStr = util.retainCN(row[0]);
            }
            // console.log(resultStr);
            data.push([resultStr]);
        }else{
            data.push([]);
        }
        if((j+1)%100 == 0 || j == lenj - 1){
            console.log('完成'+(j+1)+'个');
        }
    }
    resultSheet.data = data;
    resultSheets.push(resultSheet);
}
//测试
// var sheets = xlsx.parse(filePath);
// console.log(sheets)
// sheets.forEach(sheet=>{
//     console.log(sheet.name);
//     sheet.data.forEach(row=>{
//         console.log(row);
//         console.log(row.length);
//         row.forEach(col=>{
//             console.log(col);
//         })
//     })
// })
// let rows = []
// rows.push([1,2])
// rows.push([3,4])
// let resultSheets = [{name:'abc', data:rows}]

// 写xlsx
var buffer = xlsx.build(resultSheets);
//写入数据
let toPath = dir+fileName+'_convert'+(fileSuf?'.'+fileSuf:'');
fs.writeFileSync(toPath, buffer);
console.log("已写入到:"+toPath);








