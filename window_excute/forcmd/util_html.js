
const {util} = require('./util');

const utilHtml = {
  removeQuotamark(str){
    if(str.startsWith('"') && str.endsWith('"')){
      str = str.substring(1, str.length-1).replaceAll('""', '"');
    }
    return str;
  },
  wrapDiv(str){
    if(!str.startsWith('<')){
      str = '<div>'+str+'</div>';
    }
    return str;
  },
  domTextClearWrap(str){
    return str.replaceAll(/\n[​\n\s]*\n/g, '\n').replaceAll(/\n\s*/g, '\n').replaceAll(/^\s*/g, '');//  [​\n  中间有个符号，不知道是什么符    
  },
  retainTagStart(str){
    let $ = util.initJquery$();
    //<font style="text-decoration: underline; color:#25B7FE" onclick="clickFun()">这里</font>
    let regInfos = [{reg:/<img(.*?)<\/img>/gs, tag:'img', attrs:['alt','title','t']}, 
                    {reg:/<img(.*?)\/>/gs, tag:'img', attrs:['alt','title','t']}, 
                    {reg:/<font(.*?)<\/font>/gs, tag:'font', attrs:['onclick']}
                    ];
    for(let i=0,len=regInfos.length; i<len; i++){
      let regInfo = regInfos[i];
      let match = str.match(regInfo.reg);
      if(match){
        match.forEach(o=>{
          // console.log(o);
          let $tag = $(o);
          let tagText = $tag.text();
          let toStr = '&__lt;'+regInfo.tag + ' ';
          let allAttrNull = true;
          if(regInfo.attrs && regInfo.attrs.length > 0){
            regInfo.attrs.forEach(attr=>{
              let attrCont = $tag.attr(attr);
              if(attrCont != null && attrCont !== ''){
                allAttrNull = false;
                toStr += attr + '="' + $tag.attr(attr) + '" ';
              }
            })
          }
          if(!allAttrNull){
            if(tagText != null && tagText !== ''){
              toStr += '&__gt;'+tagText+'&__lt;/'+regInfo.tag+'&__gt;';
            }else{
              toStr += '/&__gt;';
            }
            str = str.replace(o, toStr);
          }
        })
      }
    }
    return str;
    // if(/<img(.*?)<\/img>/gs.test(str)){
    //   return str.replaceAll(/<img(.*?)<\/img>/gs, '__img__$1__\/img__');
    // }else if(/<img(.*?)\/>/gs.test(str)){
    //   return str.replaceAll(/<img(.*?)\/>/gs, '__img__$1__\/__');
    // }
  },
  retainTagEnd(str){
    // console.log(str);
    return str.replaceAll('&__lt;', '<').replaceAll('&__gt;', '>');
    // if(/__img__(.*?)__\/img__/gs.test(str)){
    //   return str.replaceAll(/__img__(.*?)__\/img__/gs, '<img$1<\/img>');
    // }else if(/__img__(.*?)__\/__/gs.test(str)){
    //   return str.replaceAll(/__img__(.*?)__\/__/gs, '<img$1\/>');
    // }
  },
}

module.exports = {utilHtml}













