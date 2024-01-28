//驼峰转下划线命名

//不通过bat无法pause
//已有package.json直接npm install即可
//或单独npm install clipboardy


var str;
var clipboardy;
if(process.argv.length == 2){
    clipboardy = require('clipboardy');
    // clipboardy.writeSync('');
    str = clipboardy.readSync();
}else{
    str = process.argv[2];
}

// console.log(str);
if (str) {
  resultStr = str.replace(/[A-Z]/g, function(matchStr){
        return '_'+matchStr.toLowerCase();
    });
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
