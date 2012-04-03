var month = 0;
var num1 = 1;
var num2 = 0;

while(month < 12){
	var a = num1;
	num1 = num1 + num2;
	num2 = a;
	month = month + 1;
	console.log("month:" + month);
	console.log("num1:" + num1);
	console.log("num2:" + num2);
}