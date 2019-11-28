var ctboxs=document.getElementById('ct1');
			var ctbox=ctboxs.getElementsByClassName('ctbox');
			var title=ctboxs.getElementsByClassName('title');
			var contentwidth=590;
			var titleWidth=60;
			var a=0;
			for(var m=0;m<title.length;m++){
				title[m].index=m;
				title[m].onclick=function(){
					a=this.index;
					for(var m=0;m<ctbox.length;m++){
						if(m<=a){
						ctbox[m].style.left=m*titleWidth+'px';
					}else{
						ctbox[m].style.left=m*titleWidth+contentwidth+'px';
					}s
			  }
			}
		}