var qwer = new Date();
var last = new Date(new Date().getFullYear(), 11, 31);
var qq = 123;
console.log(Math.ceil((last.getTime() - qwer.getTime()) / (1000 * 3600 * 24)) + 1);
// console.log(last.valueOf() - qwer.valueOf())
