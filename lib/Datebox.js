var DateBox = function(stage, width, height, text){
	this.div;
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.text=text;
	var me=this;
	this.area;//자바스크립트는 아무값도 없으면 undefined임
	this.title;//날짜를 담을div
	this.content;//입력폼과 내용을 담을 div
	this.input;

	this.init = function(){
		this.div = document.createElement("div");
		this.div.style.width = this.width+"px";
		this.div.style.height = this.height+"px";
		this.div.style.border = "1px solid blue";
		//this.div.innerText = this.text;
		this.div.style.float = "left";
		
		this.title=document.createElement("div");
		this.title.style.width=100+"%";
		this.title.style.height=25+"px";
		this.title.innerText=this.text;
		this.div.appendChild(this.title);

		this.content=document.createElement("div");
		this.content.style.width=100+"%";
		this.content.style.height=75+"px";
		this.content.style.overflow="scroll";
		this.content.style.fontSize="9pt";
		this.div.appendChild(this.content);


		//div에 대한 이벤트처리 
		this.div.addEventListener("click", function(){
			//alert(me.div.innerText+"일 이네요");
			if(me.area==undefined){		
				me.createForm();
			}
		});

		this.stage.appendChild(this.div);
	}

	//클릭시 TextArea 와 Button을 등장시키기!!~
	this.createForm=function(){
		
		this.area=document.createElement("textarea");
		this.area.style.width=95+"%";
		this.area.style.height=45+"px";
		this.area.style.background="pink";

		this.input=document.createElement("input");
		this.input.type="button";
		this.input.value="등록";

		this.input.addEventListener("click",function(){
			me.showContent();
		});

		this.content.appendChild(this.area);
		this.content.appendChild(this.input);

	}
	
	this.showContent=function(){
		//textarea의 값 열기
		var str=this.area.value;

		this.content.removeChild(this.area);
		this.content.removeChild(this.input);
		this.content.innerText=str;
	}

}







