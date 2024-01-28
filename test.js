function callback(){
	console.log("CallBack Function is Called")
}
function main(a,b,callback){
	callback();
	result = a + b;
	console.log(result);
}
main(34,53,callback);