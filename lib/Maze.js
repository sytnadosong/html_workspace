var Maze=function(stage,width,height,x,y){
	this.stage=stage;
	this.div;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.wallArr= new Array();
	
	this.flag=false;
	
	
	this.init=function(){
		var me=this;
		this.div=document.createElement("div");
		this.div.style.position="absolute";
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		this.div.style.border="1px solid red";

		this.div.style.left=x+"px";
		this.div.style.top=y+"px";


		this.stage.appendChild(this.div);
		//hittest가 충돌을  좌표로 인식. float으로 안됨.

		//나 인 사각형을 클릭하면, this.div의 배경색을 바꾸자.원터치 방식 논리값

		this.div.addEventListener("mouseover",function(){
			
			if(me.flag=!me.flag){
				me.div.style.background="yellow";
			}else{
				me.div.style.background="";
			}

			for(var i=0;i<55*33;i++){
				if(me.div.style.background=="yellow"){
					me.wallArr[i]=me.div;
				}
			}
							

		});
		
	}

		
}