var DateBox = function(stage, width, height, text){
	this.div;
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.text=text;
	var me=this;
	this.textA;
	this.button;

	this.init = function(){
		this.div = document.createElement("div");
		this.div.style.width = this.width+"px";
		this.div.style.height = this.height+"px";
		this.div.style.border = "1px solid blue";
		this.div.innerText = this.text;
		this.div.style.float = "left";
		
		//div에 대한 이벤트처리 
		this.div.addEventListener("click", function(){
			//alert(me.div.innerText+"일 이네요");
			me.createForm();
		});

		this.stage.appendChild(this.div);
	}

	//클릭시 TextArea 와 Button을 등장시키기!!~
	this.createForm=function(){
		
		this.textA=document.createElement("textarea");
		this.textA.style.width=95+"%";
		this.textA.style.height=45+"px";
		this.textA.style.background="";

		document.createElement("input");
		input.type="button";
		input.value="등록";

		this.div.appendChild(this.textA);
		this.div.appendChild(input);
	}
	
}







