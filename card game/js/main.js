//初始化
var str='';
var arr=[];
var temp=[];
var num=0;
var arrBgImg=['IMG/kpBg/kp1-16.gif','IMG/kpBg/kp1-2.gif','IMG/kpBg/kp1-9.gif','IMG/kpBg/kp1-4.gif']
var div1=document.getElementById('div');
// var openScene=document.getElemenstByClassName('openScene')[0];
var openImgL=document.getElementById('openl');
var openImgR=document.getElementById('openr');

//opendoor
setTimeout(function(){	
	move(openImgL,{left:-400},2000,'linear');
	move(openImgR,{left:900},2000,'linear');
,function(){
}},1000)

//卡牌初始化
for(var j=0;j<16;j++){
	str += '<div style="background-image:url(IMG/kpBg/kp1-4.gif);top:'+Math.floor(j/4)*170+'px;left:'+j%4*120+'px;">'+'<span>'+'?'+'</span>'+'</div>';
}
div1.innerHTML+='<div id="divbg">'+str+'</div>';
var divbg=document.getElementById('divbg');
var div2=document.getElementById('div2');
var aDiv=divbg.getElementsByTagName('div');

//移动轨迹
// console.log(aDiv[5]);
var moveLeft=aDiv[5].offsetLeft+aDiv[5].offsetWidth/2;
var moveTop=aDiv[5].offsetTop+aDiv[5].offsetHeight/2; 

//游戏开始
for(var x=1;x<aDiv.length/2+1;x++){
	for(var y=0;y<2;y++){
		arr.push(x);
	}
}
arr.sort(function(a,b){
	return Math.random()-0.5;
});
console.log(arr);
for(var i=0;i<aDiv.length;i++){
	goRotate(i);
}
function goRotate(i){
	aDiv[i].onclick=function(){
		if(aDiv[i].children[0].innerHTML=='?'){
	        num++;
	        if(num<7){
	        	this.children[0].innerHTML=arr[i];
	        	// this.style.background='';
	        	this.className='active';
	        	fn(i,this.children[0]);
	        	temp.push(i);
	        	judgeRatate();
	        }else if(num==7){
	       }
		}
	}
}
function judgeRatate(){
	if(temp.length==2){
		if(aDiv[temp[0]].innerHTML!=aDiv[temp[1]].innerHTML){
			if(num==6){
				setTimeout(function(){
					div2.style.display='block';
					move(div1,{opacity:0},1000,'linear');
					move(div2,{top:100},1000,'linear');
					// div1.className='failMove';
					return;
				},1000)
			}
			setTimeout(function(){
				for(var j=0;j<2;j++){
					aDiv[temp[j]].children[0].innerHTML='?';
					aDiv[temp[j]].className='';
					aDiv[temp[j]].children[0].className='';
				}
				temp=[];
			},1200)
		}
		else{
			num-=2;
				for(var y=0;y<2;y++){
					move(aDiv[temp[y]],{top:moveTop,left:moveLeft},800,'linear');
				}
				setTimeout(function(){
				aDiv[temp[0]].style.display='none';
				aDiv[temp[1]].style.display='none';
				var className='active'+aDiv[temp[0]].children[0].innerHTML;
					for(var i=0;i<4;i++){
						var div=document.createElement('div');
						div.className='active'+temp[0];
						div.style.width='50px';
						div.style.height='75px';
					}
				temp=[];
				},1800)

		}
	}
}
function fn(i,obj){
	var n=arr[i];
	if(n=='1'){obj.className+=' active1';}
	else if(n=='2'){obj.className+=' active2';}
	else if(n=='3'){obj.className+=' active3';}
	else if(n=='4'){obj.className+=' active4';}
	else if(n=='5'){obj.className+=' active5';}
	else if(n=='6'){obj.className+=' active6';}
	else if(n=='7'){obj.className+=' active7';}
	else if(n=='8'){obj.className+=' active8';}
	else{return;}
}
