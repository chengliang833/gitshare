
const jquery = require('jquery');
const jsdom = require('jsdom');

const util = {
    checkWrapInfo(instr){
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
    },
    initJquery$(){
      // let {JSDOM} = jsdom
      let window = new jsdom.JSDOM('<!doctype html><html><body></body></html>').window;
      //console.log(window.document)
      //global.document = document;
      //global.window = document.window;
      //global.navigator = document.navigator;
      //console.log(document.window)
      //console.log(global)
      return jquery(window)
    },
    retainCN(str){
      return str.replaceAll(/[^\u4e00-\u9fa5]+/g, '');
    }
}

module.exports = {util}

// exports.util = util;












