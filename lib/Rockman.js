var Rockman=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.div;
	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;
	this.velX=0;//x축 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.velY=2;//y축 방향으로 얼만큼 움직일지 정도를 표현하는 변수
	this.gravity=0.1; //중력을표현하는변수
	this.st;
	this.falling=true;//주인공이 떨어지고있음을 알수있는 변수
	this.jumping=true;//주인공이 점프중임을알수있는 변수
	this.speedCount=0;
	this.running=false;//키보드누를때만true로처리..

	this.init=function(){
		this.img=document.createElement("img");
		this.div=document.createElement("div");
		this.img.src=this.src;

		this.div.style.overflow="hidden";
		this.div.style.position="absolute";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";

		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";

		//숨겨진이미지의좌표 처리..
		this.img.style.position="relative";
//		this.img.style.top=-65+"px";

		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		//이미지를div에 탑재
		this.div.appendChild(this.img);

		//div를 stage에 탑재
		this.stage.appendChild(this.div);

		this.move();

	}

	this.action=function(){
		if(this.running){
			this.speedCount++;

			if(this.speedCount%35==0){
			actionCount++; //0,1,2
			if(actionCount > actionArray.length-1){
				actionCount=1;
		
			}
		}
			this.img.src=actionArray[actionCount];
		}else{
			this.img.src=actionArray[0];
		}
	}


	this.move=function(){
		var me=this;

		//중력 데이터를 velY에 누적해보자!!
		this.velY+=this.gravity;

		if(this.velY<0){

			this.jumping=true;
			this.falling=false;

		}

		if(this.velY>0){
			this.falling=true;
			this.jumping=false;
			
		}
		
		for(var i=0; i<blockArr.length; i++){
			
			var result=hitTest(this.div, blockArr[i].img);
			
			if(result && this.falling){
					
				this.velY=0;//
				//this.y=-parseInt(this.img.style.height)+"px";
				this.falling=false;
			}
		}

		this.y+=this.velY;
		this.x+=this.velX;

		this.div.style.top=this.y+"px";//두개는 붙어다닌다
		this.div.style.left=this.x+"px";//아래와 붙어다닌다	

		setTimeout(function(){
			me.move();
		}, 10);
	}

}