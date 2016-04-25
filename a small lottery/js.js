var pres = ["Mac","iphone6s","iPad2","笔记本","笔","鼠标","键盘","书",
            "谢谢参与"],
    random;
    

var btn = document.getElementsByTagName('button')[0],
    span = document.getElementsByTagName('span')[0],
    flag = 0,
    time = null;


btn.onclick = start;


function start(){
	if(flag == 0){
	clearInterval(time);
	time = setInterval(function(){
		random = Math.floor(Math.random()*pres.length);
		span.innerHTML = pres[random];
	},30);
	btn.innerHTML = "停止抽奖";
	flag = 1;
	}
	else{
		clearInterval(time);
		btn.innerHTML = "开始抽奖";
		span.innerHTML = "谢谢参与";
		flag = 0;
	}
}
