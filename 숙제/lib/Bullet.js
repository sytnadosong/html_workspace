/*------------------------------------------
아래의 코드는지금 당장 사용할 총알 자체가 아닌 
장차총알을생성해낼 틀이다!!

객체 메뉴얼= 객체 사용법

s: 이 총알이어떤 div에 붙을지를 결정하세요
posY: 이 총알이 어느 y좌표에서 날아갈지 결정하세요.

API document 해외에서는...
--------------------------------------------*/
var Bullet=function(s,posX,posY){
	//객체의 특징에 대한 값을담고 있다고하여 속성이라한다.
	//property라 표기한다
	this.stage=s;
	this.span;
	this.x=posX;//전역변수인 이유는누적되어야하니까
	this.y=posY;
	/*총알을정의한다!!*/
	this.st;//나의 셋타임 아웃을 가리키기 위한 변수!!

//객체 안에 들어있는 함수는 method 메서드라 한다!!
//method(방법) : 객체의동작 방식을결정하는로직이 들어있기 때문에..
	this.init=function(){
		
		this.span=document.createElement("span");
		this.span.innerText="●";
		this.span.style.color="red";
		this.span.style.position="absolute";//absolute 스크린 중심. 지구와 나의 위치개념. 게임에서는 absolute
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";
		
		s.appendChild(this.span);
		this.move();
	}

	this.move=function(){
		var me=this;// 꼼수//전역변수화 할 경우 this.me=this;

		this.x+=10;

		this.span.style.left=this.x+"px";	

		//stage를 벗어나면 총알의 setTimeout은 멈춰야 한다!!

		console.log(parseInt(this.stage.style.width));
	
		this.st=setTimeout(function(){
			me.move();//me를 this로 써야 문법적으로 일관성이있으나 function의 브레이스에 걸리므로 변수me로 치환한다
		},10);

		if(parseInt(this.span.style.left) > parseInt(this.stage.style.width)){
		//console.log("자살할게요");
		//setTimeout 멈추고,화면에서 지우고!!
		clearTimeout(this.st);
		this.stage.removeChild(this.span);

			
		}
		
	}
}