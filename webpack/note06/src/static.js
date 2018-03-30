import React from "react";
import ReactDOM from "react-dom";

class Parent{
	static say(n){
		n = n||1;
		return n*2;
	}
	fn(m){
		return console.log(m)
	}
}
class Son extends Parent{
	static He(m){
		return super.say(m)//super.say()调用父类的静态方法
	}
}
console.log(Parent.say());
console.log(Son.He(6));
var parent = new Parent();
console.log(parent.fn("hello"));
