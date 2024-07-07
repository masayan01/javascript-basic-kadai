const 今日=()=>{
var today= new Date();
var date1= today.getFullYear();
var date2= today.getMonth()+1;
var date3= today.getDate();

console.log(date1+"年"+date2+"月"+date3+"日");
}

今日();