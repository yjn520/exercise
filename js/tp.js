    var box=document.getElementById('box');
        var t1=box.getElementsByClassName('t1')[0];
        var t2=box.getElementsByClassName('t2')[0];
        var t3=box.getElementsByClassName('t3')[0];
        var t4=box.getElementsByClassName('t4')[0];
    t1.onmouseover=function(){
        t1.style.left=0+'px';
        t2.style.left=600+'px';
        t3.style.left=800+'px';
        t4.style.left=1000+'px';
    }
     t2.onmouseover=function(){
        t1.style.left=-400+'px';
        t2.style.left=200+'px';
        t3.style.left=800+'px';
        t4.style.left=1000+'px';
    }
     t3.onmouseover=function(){
        t1.style.left=-400+'px';
        t2.style.left=200+'px';
        t3.style.left=400+'px';
        t4.style.left=1000+'px';
    }
     t4.onmouseover=function(){
        t1.style.left=-400+'px';
        t2.style.left=200+'px';
        t3.style.left=400+'px';
        t4.style.left=600+'px';
    }