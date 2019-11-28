var box1=document.getElementById('box1');
		// 图片列表
		var imgsBox=box1.getElementsByClassName('imgs')[0];
		var imgs=imgsBox.getElementsByTagName('li');
		// 左箭头
		var arrowL=box1.getElementsByClassName('left')[0];
		// 右箭头
    var arrowR=box1.getElementsByClassName('right')[0];
    // 按钮
    var dots=box1.getElementsByClassName('dots')[0];
    var btns=dots.getElementsByTagName('li');
    var index=0;
		var n=btns.length;
		var t=null;
		var s=2;
    function showImg(index){
    	for(var i=0;i<n;i++){
    		imgs[i].removeAttribute('class');
    	}
    	imgs[index].className='show';
    }
    function showBtn(index){
    	for(var i=0;i<btns.length;i++){
    		btns[i].removeAttribute('class');
    	}
    	btns[index].className='cur';
    }
		arrowR.onclick=function(){
    index=index<n-1?index+1:0;
    showImg(index);
    showBtn(index);
   }
   arrowL.onclick=function(){
    index=index>0?index-1:n-1;
    showImg(index);
    showBtn(index);
   }
   for(var i=0;i<btns.length;i++){
   	btns[i].index=i;
   	btns[i].onclick=function(){
      index=this.index;
   		showImg(index);
      showBtn(index);
   	}
   }
   box1.onmouseover=function(){
   	clearInterval(t);
   }
   box1.onmouseout=function(){
     t=setInterval(arrowR.onclick,s*1000);
   }
   box1.onmouseout();