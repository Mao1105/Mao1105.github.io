/*
 	obj:要运动的元素
 	attr:要改变的属性
 	duration：运动持续时间
 	target：目标位置
 	endFn:回调函数
 * 
 * */
//{
//	{}.top:800,
//	opacity:0
//}
function move(obj,attrs,duration,endFn){
	/*
	 j = {
	 	top:{
	 		b : parseFloat(getComputedStyle(obj)[top]),
	 		c : 800-j.top.b;
	 	},
	 	opacity:{
	 		b : parseFloat(getComputedStyle(obj)[opacity]),
	 		c : 0-j.opacity.b;
	 	}
	 }
	 * */
	var j = {};
	for(var attr in attrs){
		 j[attr] = {};
		 j[attr].b = parseFloat(getComputedStyle(obj)[attr]);
		 j[attr].c = attrs[attr] - j[attr].b;
	}
	//起始位置begin,获取元素当前的位置
	//var b = parseFloat(getComputedStyle(obj)[attr]);
	//目标点count，要运动到的位置（传入）
	//var c = target-b;
	//持续时间duration,毫秒（几毫秒运动完，传入）
	var d = duration;
	//开始运动的时间（获取运动开始执行时候的时间）
	var newTime = new Date().getTime();
	clearInterval(obj.time);
	obj.time = setInterval(function(){
		//运动了多少时间，当前时间-开始的时间 = 运动了多少时间
		var t = new Date().getTime() - newTime;
		// 每次运动到的位置，开始位置+要运动的距离/总时间*运动了多少时间
		if(t >= d){
			t = d;
		}
		for(var attr in j){
			var b = j[attr].b;
			var c = j[attr].c;
			var v = b+ c/d*t;
			if(attr == 'opacity'){
				obj.style[attr] = v;
			}else{
				obj.style[attr] = v +'px';
			}
		}
		//如果运动的时间大于总时间，说明运动到指定位置了
		if(t == d){
			clearInterval(obj.time);
			endFn && endFn();
		}

	},20);
}	