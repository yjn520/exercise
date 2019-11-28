var time=document.getElementById('time');
	var c=n=>n<10?'0'+n:n;
	var m=['一','二','三','四','五','六','七','八','九','十','十一','十二'];
	var w=['日','一','二','三','四','五','六']
	function showTime(){
	var date=new Date();
	time.innerHTML=date.getFullYear()+'年'+m[date.getMonth()]+'月'+date.getDate()+'日'+c(date.getHours())+':'+c(date.getMinutes())+':'+c(date.getSeconds())+'星期'+w[date.getDay()];
}
showTime();
setInterval(showTime,1000);