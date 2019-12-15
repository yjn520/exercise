    var box=document.getElementById('box');
        var t1=box.getElementsByClassName('t1')[0];
        var t2=box.getElementsByClassName('t2')[0];
        var t3=box.getElementsByClassName('t3')[0];
        var t4=box.getElementsByClassName('t4')[0];

    t1.onmouseover=function(){
        t1.style.left=0+'px';
        t2.style.left=400+'px';
        t3.style.left=440+'px';
        t4.style.left=480+'px';
    }
     t2.onmouseover=function(){
        t1.style.left=-360+'px';
        t2.style.left=40+'px';
        t3.style.left=440+'px';
        t4.style.left=480+'px';
    }
     t3.onmouseover=function(){
        t1.style.left=-360+'px';
        t2.style.left=40+'px';
        t3.style.left=80+'px';
        t4.style.left=480+'px';
    }
     t4.onmouseover=function(){
        t1.style.left=-360+'px';
        t2.style.left=40+'px';
        t3.style.left=80+'px';
        t4.style.left=120+'px';
    }
     box.onmouseout=function(){
        t1.style.left=-270+'px';
        t2.style.left=130+'px';
        t3.style.left=260+'px';
        t4.style.left=390+'px';
     }