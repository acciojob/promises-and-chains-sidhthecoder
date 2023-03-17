//your JS code here. If required.
var btn=document.getElementId("btn");
var name=document.getElementId("name").value;
var age=document.getElementId("age").value;

btn.addEventListener('click',function myPromise((event){
	event.preventDefault();
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve("Welcome, "+name+". You can vote.");
			}
			else{
				reject("Oh sorry "+<name>+". You aren't old enough.");
			}
		},4000);
	});
});
