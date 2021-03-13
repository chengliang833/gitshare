
String.prototype.upp1 = function(){
	let str = this;
	str = str[0].toUpperCase()+str.substring(1);
	return str.upp();
}
String.prototype.upp = function(){
	return this.replace(/-[a-z]/g,function($0, index, word){
		return $0.substring(1).toUpperCase();
	})
}
String.prototype.low = function(){
	let str = this;
	str = str[0].toLowerCase()+str.substring(1);
	return str.replace(/[A-Z]/g,function($0, index, word){
		return '-'+$0.toLowerCase();
	})
}

function upp1(str){
	str = str[0].toUpperCase()+str.substring(1);
	return upp(str);
}
function upp(str){
	return str.replace(/-[a-z]/g,function($0, index, word){
		return $0.substring(1).toUpperCase();
	})
}
function low(str){
	str = str[0].toLowerCase()+str.substring(1);
	return str.replace(/[A-Z]/g,function($0, index, word){
		return '-'+$0.toLowerCase();
	})
}