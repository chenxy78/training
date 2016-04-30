$( window ).on( "load", function(){
    waterfall1();
   // 调用waterfall函数
    var dataInt={
    	'data':[{'src':'0.jpg'},{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{
    		'src':'4.jpg'
    	},{
    		'src':'5.jpg'
    	},{
    		'src':'6.jpg'
    	},{
    		'src':'7.jpg'
    	},{
    		'src':'8.jpg'
    	},{
    		'src':'9.jpg'
    	},{
    		'src':'10.jpg'
    	}]
    };
    window.onscroll=function(){
       // 拖动滚动条时
       if(checkscrollside()){
       	  $.each(dataInt.data,function(index,value){
       	  	var $Box = $('<div>').addClass('box').appendTo($('#main'));
            var $imgbox = $('<div>').addClass('img').appendTo($Box);
            $('<img>').attr('src','images/'+$(value).attr('src')).appendTo($imgbox);
       	  });
       	   waterfall2();
       }
     }
});
function waterfall1(){
    
 // 计算及定位数据块显示分散效果
    var $boxdiv = $("#main>div");
    var boxW = $boxdiv.eq(0).outerWidth();
    var windowW = $(window).width();
    var cols = Math.floor(windowW/boxW);
    var arr = [];//放高度的数组

    $("main").css({
    	"width": cols*boxW,
    	"margin": '0 auto'
    });
    
    

    $boxdiv.each(function(index,value){
        if(index < cols ){
            var H = $boxdiv.eq(index).outerHeight();//一开始用的$(value).outerHeight;
            arr.push(H);
        }
        else{
        	startMove(index,value);
            var minH = Math.min.apply(null,arr);//得出数组中高度最小的
            var _minIndex = $.inArray(minH,arr);
            //数组中最小的高度在数组中的索引
            $(value).animate({
                "position":"absolute",
                "top": minH,
                "left": $boxdiv.eq(_minIndex).offset().left
            },3000);
            arr[_minIndex] += $("#main>div").eq(index).outerHeight();
        }
    });
}
function waterfall2(){
    
 // 计算及定位数据块显示分散效果
    var $boxdiv = $("#main>div");
    var boxW = $boxdiv.eq(0).outerWidth();
    var windowW = $(window).width();
    var cols = Math.floor(windowW/boxW);
    var arr = [];//放高度的数组

    $boxdiv.each(function(index,value){
        if(index < cols ){
            var H = $boxdiv.eq(index).outerHeight();//一开始用的$(value).outerHeight;
            arr.push(H);
        }
        else{
            var minH = Math.min.apply(null,arr);//得出数组中高度最小的
            var _minIndex = $.inArray(minH,arr);
            //数组中最小的高度在数组中的索引
            $(value).css({
                "position":"absolute",
                "top": minH,
                "left": $boxdiv.eq(_minIndex).offset().left
            });
            arr[_minIndex] += $("#main>div").eq(index).outerHeight();
        }
    });
}
function checkscrollside(){
    var scrollH = $(window).scrollTop();
    var mainH = $(window).height();
    var height = $("#main>div").last().offset().top;
    return (scrollH + mainH > height)?true:false;
//检测是否具备了加载数据块的条件
}
//计算一开始图片在页面内分布的样子
function startMove(index,value){
    
        $(value).css({
            "position": "absolute",
            "top": Math.floor(Math.random()*400) + 'px',
            "left":Math.floor(Math.random()*400) + 'px'
        });
    
}