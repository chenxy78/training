var data=['iPhone6s','ipad2','笔记本','相机','打印机','谢谢参与','50元充值卡','苹果一个','牛奶一杯','香吻一枚','礼券一张','1000元超市购物券','和作者吃晚饭的机会','你抽不到哈哈哈','你爱不爱我','好了不逗你了该干啥干啥去吧'],
    timer=null,
    flag=0;

window.onload=function(){
    var play=document.getElementById('play'),
        stop=document.getElementById('stop');

    // 开始抽奖
    play.onclick=playFun;
    stop.onclick=stopFun;

}

function playFun(){
	var title=document.getElementById('title');
	var play=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
	   var random=Math.floor(Math.random()*data.length);
	   title.innerHTML=data[random];
	},50);
    play.style.background='#999';
}

var flag2 = 0;
function stopFun(){
	clearInterval(timer);
	var title=document.getElementById('title');
	if(flag2 == 0){
		title.innerHTML = "你抽不到哈哈哈";
		flag2 = Math.floor(Math.random()*3);
	}
	else if (flag2 == 1){
        title.innerHTML = "你爱不爱我";
        flag2 = Math.floor(Math.random()*3);
	}
	else if(flag2 = 2){
		title.innerHTML = "好了不逗你了该干啥干啥去吧";
		flag2 = Math.floor(Math.random()*3);
	}
	
	var play=document.getElementById('play');
	play.style.background='#036';
}
