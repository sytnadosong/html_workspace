var Hero=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.position;
	this.x=x;
	this.y=y;
	this.velX=0;//좌우로만 움직임
	this.velY=0;
	this.src=src;//사용할 이미지 경로
	this.st;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;//"../images/gallerxy/ship.png";
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.stage.appendChild(this.img);
		this.move();

		if(parseInt(this.img.style.left) > parseInt(this.stage.style.width)){
			this.img.velX=0;
		}
		if(parseInt(this.img.style.top) > parseInt(this.stage.style.height)){
			this.img.velY=0;
		}
	}

	this.move=function(){
		var me=this;

		this.x=this.x+this.velX;
		this.y=this.y+this.velY;

		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.st=setTimeout(function(){
			me.move();
		},4);
		
	}	
			

}
