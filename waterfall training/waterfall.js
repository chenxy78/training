window.onload=function(){
     waterfall('main','box');

     var dataInt = {
      'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'},{'src':'5.jpg'},{'src':'6.jpg'},{'src':'7.jpg'},{'src':'8.jpg'},{'src':'9.jpg'},{'src':'10.jpg'},{'src':'11.jpg'},{'src':'12.jpg'},{'src':'13.jpg'},{'src':'14.jpg'},{'src':'15.jpg'},{'src':'16.jpg'},{'src':'18.jpg'},{'src':'18.jpg'},{'src':'19.jpg'},{'src':'20.jpg'},{'src':'21.jpg'},{'src':'22.jpg'},{'src':'23.jpg'},{'src':'24.jpg'},{'src':'25.jpg'},{'src':'26.jpg'},{'src':'27.jpg'},{'src':'28.jpg'}]
     }

     window.onscroll = function(){
         if(checkscroll()){
           var oParent = document.getElementById('main');
           for(var i =0;i<dataInt.data.length;i++){
            var outerdiv = document.createElement('div');
            outerdiv.className = 'box';
            oParent.appendChild(outerdiv);
            var picdiv = document.createElement('div');
            picdiv.className = 'pic';
            outerdiv.appendChild(picdiv);
            var img = document.createElement('img');
            img.src='images/' + dataInt.data[i].src;
            picdiv.appendChild(img);//渲染滚动需新增加的内容
           }
         };
         waterfall('main','box');
     }
}

function waterfall(parent,box){
  var oParent = document.getElementById(parent);
  var oBoxs = getByClass(oParent,box);//这是一个数组，装图片的
  var width = document.documentElement.clientWidth;
  var picW = oBoxs[0].offsetWidth;
  var cols = Math.floor(width/picW);
  var arrH =[];   //存储高度
for(var i=0;i<oBoxs.length;i++){
    if(i<cols){
       arrH.push(oBoxs[i].offsetHeight);
       // 将图片的高度值添加到数组中
    }else{
      var minH = Math.min.apply(null,arrH);
      var index = getMinhIndex(arrH,minH);
      // 求最小值和最小值的索引
      

// 计算及定义图片出现的位置
      oBoxs[i].style.position = 'absolute';
      oBoxs[i].style.top = minH + 'px';
      oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
      arrH[index] += oBoxs[i].offsetHeight;
      // 改变某一列的高度值
     
    }
  }
}
function getByClass(parent,clsName){
  var boxArr=new Array(), 
      oElements=parent.getElementsByTagName('*');
  for(var i=0;i<oElements.length;i++){
    if(oElements[i].className==clsName){
      boxArr.push(oElements[i]);
    }
  }
  return boxArr;
}


// 求值在数组中的索引,arr接收的是数组，val接收的是判断的值
  function getMinhIndex(arr,val){
    for(var i in arr){
      if (arr[i] == val){
        return i;
      }
    }
  }

function checkscroll(){//确认滚动的距离满足了你需要它加载的距离
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//兼容+计算滚动的距离
  var main = document.getElementById('main');
  var pics = getByClass(main,'box');//这是一个数组！！数组！！数组！！
  var lastpic = pics[pics.length-4].offsetTop;
  var documentH = document.documentElement.clientHeight;
  return (scrollTop + documentH > lastpic )?true :false;
}