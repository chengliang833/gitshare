
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
    },
    /**
     * 指定对象排序, 回调不传也支持字符串和数值排序
     */
    arrSort(arr, sortFun){
      if(!arr || arr.length == 0){
        console.log('传入数组为空!!!');
        return;
      }
      if(!sortFun){
        sortFun = function(o1,o2){
          return o1 < o2;
        }
      }
      for(let i=0,length=arr.length-1; i<length; i++){
        for(let j=0,length2=arr.length-1-i; j<length2; j++){
          if(!sortFun(arr[j], arr[j+1])){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
        }
      }
    },
    /**
     * 按数组中先后出现的顺序排序, 支持多字段, 先出现的,如果后面有一样的,都往前移.
     * @param {*} arr 原数组
     * @param {*} fields 排序的字段
     * @param {*} orders 可选 每个字段按出现的顺序或倒序排序, 数组,'asc'/'desc'
     * @returns
     */
    sortByAppear(arr, fields, orders){
      if(arr == null){
        return;
      }
      if(!fields || fields.length == 0){
        console.log('请输入排序字段');
        return;
      }
      if(orders == null){
        orders = []
      }
      if(orders.length < fields.length){
        for(let i=0,len=fields.length; i<len; i++){
          if(orders.length == i){
            orders.push('asc');
          }
        }
      }
      //每个字段每个值出现的次序
      let idxMap = {};
      arr.forEach(o=>{
        let tempMap = idxMap;
        fields.forEach(f=>{
          let val = o[f];
          let sortInfo = tempMap[val];
          if(sortInfo == null){
            sortInfo = {sort:Object.keys(tempMap).length, subMap:{}};
            tempMap[val] = sortInfo;
          }
          tempMap = tempMap[val].subMap
        })
      })
      // console.log(JSON.stringify(idxMap));
      //按次序排序
      this.arrSort(arr, (o1,o2)=>{
        let tempMap = idxMap;
        for(let i=0,len=fields.length; i<len; i++){
          let f = fields[i];
          //当前字段不相等就看出现的次序, 相等就下一个字段
          if(o1[f] != o2[f]){
            if(orders[i] == 'asc'){
              return tempMap[o1[f]].sort < tempMap[o2[f]].sort;
            }else{
              return tempMap[o1[f]].sort >= tempMap[o2[f]].sort;
            }
          }
          tempMap = tempMap[o1[f]].subMap;
        }
        return false;
      })
    },
    arrEquals(arr1, arr2, eqCallback){
      if(arr1.length != arr2.length){
        return false;
      }
      if(!eqCallback){
        eqCallback = function(o1, o2){
          return o1 === o2;
        }
      }
      for(let i=0,length=arr1.length; i<length; i++){
        if(!eqCallback(arr1[i], arr2[i])){
          return false;
        }
      }
      return true;
    },
    objToStrBySort(obj, sortFun){
      let arr = [];
      for (const key in obj) {
        arr.push({'key':key,'value':obj[key]});
      }
      util.arrSort(arr, (o1,o2)=>o1.key.localeCompare(o2.key) < 0);
      let resultStr = '{';
      let i = 0;
      arr.forEach(o=>{
        if(['string', 'object', 'number', 'boolean', 'bigint'].includes(typeof o.value)){
          if(i > 0){
            resultStr += ','
          }
          resultStr += '"'+o.key+'":';
          if(typeof o.value == 'string'){
            resultStr += '"' + o.value + '"';
          }else if(typeof o.value == 'object'){
            let valStr = JSON.stringify(o.value);
            if(valStr.startsWith('{')){
              resultStr += this.objToStrBySort(o.value);
            }else{
              resultStr += valStr;
            }
          }else{
            resultStr += o.value;
          }
          i++;
        }
      });
      resultStr += '}';
      return resultStr;
    }
}

module.exports = {util}

// exports.util = util;












