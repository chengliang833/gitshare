//字符串去除空格换行

//不通过bat无法pause
//已有package.json直接npm install即可
//或单独npm install clipboardy

const clipboardy = require('clipboardy');
// clipboardy.writeSync('');
var str = clipboardy.readSync();
// console.log(str);
if (str) {
  resultStr = str.replace(/[ 	]*(\r|\n)+[ 	]*/g, "");
}else{
  resultStr = "no input";
}
console.log(resultStr);
clipboardy.writeSync(resultStr);
console.log("已填充到剪贴板");


//参数传进来不支持换行，改为直接从剪贴板拿
// npm install commander

// const { program } = require('commander');
// program.version('0.0.1');

// program
//   .option('-s, --str <cont>', 'input str');

// program.parse(process.argv);

// const options = program.opts();
// var resultStr = "";
// if (options.str) {
//   resultStr = options.str.replace(/\s*/g, "");
//   // console.log(options.str);
//   // console.log(`- ${options.param1}`);
// }else{
//   resultStr = "no input";
// }
// console.log(resultStr);
// // console.log('finish...')

