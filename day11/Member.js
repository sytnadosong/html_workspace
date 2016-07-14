/*
이 클래스는 사물을 표현하는 것은 맞지만
단지, 동작은제외하고, 오직데이터만을 보유시키기위한 클래스로 정의한다... 이러한 역할을수행하는객체를 가리켜 설계분야에서 DTO(Data Transfer Object)라고 한다.
*/

var Member=function(){
	this.id;
	this.pw;
	this.name;
	this.money;
}