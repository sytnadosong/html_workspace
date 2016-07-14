var Block = function(stage,width,height,x,y,src){

	this.stage=stage;

	this.img;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.src=src;

	this.init=function(){

	this.img=document.createElement("img");
	this.img.style.width=this.width+"px";
	this.img.style.height=this.height+"px";

	this.img.style.position="absolute";
	this.img.style.left=x+"px";
	this.img.style.top=y+"px";
	
	this.stage.appendChild(this.img);

	}

}