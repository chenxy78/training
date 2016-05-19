var aPrevious = document.getElementById('previous');
var aNext = document.getElementById('next');
var flag = 1;
var z = [100,90,80,70,60,50,40,30];//设置翻页时右页的z-index
var z2 = [30,40,50,60,70,80,90,100];//设置翻页时左页的z-index

function next(){
	if(flag == 7){
		aNext.className = 'after';
	}

	if(flag == 8){
		return;
	}
	if(flag == 1){
		aPrevious.className = 'before';
	}

	var curPage = document.getElementById('box' + flag);
	curPage.style.MozTransform = "rotateY(-180deg)";
	curPage.style.WebkitTransform = "rotateY(-180deg)";
	curPage.style.OTransform = "rotateY(-180deg)";
	curPage.style.zIndex = z2[flag-1];

	flag++;
}

function previous(){
	if(flag == 1){
		return;
	}
	if(flag == 2){
		aPrevious.className = 'after';
	}
	if(flag == 8){
		aNext.className = 'before';
	}

	flag--;
	var prePage = document.getElementById('box' + flag);
	prePage.style.MozTransform = "rotateY(0deg)";
	prePage.style.WebkitTransform = "rotateY(0deg)";
	prePage.style.OTransform = "rotateY(0deg)";
	prePage.style.zIndex = z[flag-1];
}

function set(data){
	for(var i = 0;i<z.length;i++){
		if(i + 1 >= data){
			var rightP = document.getElementById('box' + (i + 1));
			rightP.style.MozTransform = "rotateY(0deg)";
			rightP.style.WebkitTransform = "rotateY(0deg)";
			rightP.style.OTransform = "rotateY(0deg)";
			rightP.style.zIndex = z[i];
		}
		else if(i + 1 < data){
			var leftP = document.getElementById('box' + (i + 1));
			leftP.style.MozTransform = "rotateY(-180deg)";
			leftP.style.WebkitTransform = "rotateY(-180deg)";
			leftP.style.OTransform = "rotateY(-180deg)";
			leftP.style.zIndex = z2[i];
		}
    }
    
    flag = data;
    if(flag != 1 && flag != 8){
			aPrevious.className = 'before';
			aNext.className = 'before';
        }
    if(flag == 8){
    	aNext.className = 'after';
    	aPrevious.className = 'before';
    }
}

document.onkeyup = function(event){
	event = event || window.event;
	if(event.keyCode == 39 || event.keyCode == 40){
		next();
	}
	if(event.keyCode == 37 || event.keyCode == 38){
		previous();
	}
}

