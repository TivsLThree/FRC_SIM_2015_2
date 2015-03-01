
var code = 0;
var mechparts = 0;
var elecparts = 0;
var grants = 0;
var control = 0;
var dayCount = 0;
var prograde = 0;
var members ={
		programmers:parseInt(localStorage.getItem("proCount")),
		electricians:parseInt(localStorage.getItem("elecCount")),
		mechanics:parseInt(localStorage.getItem("mechCount")),
		pr:parseInt(localStorage.getItem("prCount")),
		mentors:parseInt(localStorage.getItem("mentorCount"))
}
var days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var weekCount = 1;
var pause = true;
var doInit = true;
window.setInterval(function(){
	if(!pause){
	if(dayCount < 6){	
	dayCount++;
	updateCount();
	}else{
		dayCount = 6;
	}
	}
},1500);
window.setInterval(function(){
	init();
	updateDisplay();
},100);
var canvas = document.getElementById("bars");
var ctx = canvas.getContext("2d");
function updateCount(){

	code = code +members.programmers + (prograde*1.2);
	mechparts = mechparts + members.mechanics;
	elecparts = elecparts + members.electricians;
	grants = grants + members.pr;
	control = control + members.mentors;
}
function updateDisplay(){
	if(dayCount != 1){
	//	ctx.fillRect(10,10,10,50);
	}
	//
	document.getElementById("code").innerHTML = "Code Points: " +Math.floor(code);
	document.getElementById("mechparts").innerHTML ="Mechanical Points: "+ mechparts;
	document.getElementById("elecparts").innerHTML = "Electrical Points: "+elecparts;
	document.getElementById("grants").innerHTML = "Grant Points: "+grants;
	document.getElementById("control").innerHTML = "Knowledge Points: "+control;
	document.getElementById("day").innerHTML = days[dayCount];
	document.getElementById("cps").innerHTML = (members.programmers + (prograde*1.2)) + "/day";
	var count = weekCount+1;
	if(count == 7 && dayCount ==6){
		document.getElementById("next").innerHTML = "Go to Competition!"
	}else if(dayCount == 6){
		document.getElementById("next").innerHTML = "Go to Week " +count;
	}else {
		document.getElementById("next").innerHTML = "Week: " +weekCount;
	}
}
function nextWeek(){
	if(dayCount == 6 && weekCount != 6){
	dayCount = 0;
	weekCount++;
	updateDisplay();
	}
}
function togglePause(){
	pause = !pause;
	document.getElementById("pause").style.backgroundColor = (pause) ? "#FF4B37": "#16A2CC";
	document.getElementById("pause").innerHTML = (pause) ? "Unpause" : "Pause";
}
function upgrade(){
	//store member count
	localStorage.setItem("proCount",members.programmers);
	localStorage.setItem("elecCount",members.electricians);
	localStorage.setItem("mechCount",members.mechanics);
	localStorage.setItem("prCount",members.pr);
	localStorage.setItem("mentorCount",members.mentors);
	//store points
	localStorage.setItem("cp",code);
	localStorage.setItem("mp",mechparts);
	localStorage.setItem("ep",elecparts);
	localStorage.setItem("gp",grants);
	localStorage.setItem("kp",control);
	//stuff
	localStorage.setItem("dayCount",dayCount);
	localStorage.setItem("weekCount",weekCount);
	localStorage.setItem("prograde",prograde);
	window.location = "upgrades.html";
}
function init(){
	if(doInit == true && localStorage.getItem("cp") != null){
	//Load members
	//alert(localStorage.getItem("ep"));
		members.programmers=parseInt(localStorage.getItem("proCount")),
		members.electricians=parseInt(localStorage.getItem("elecCount")),
		members.mechanics=parseInt(localStorage.getItem("mechCount")),
		members.pr=parseInt(localStorage.getItem("prCount")),
		members.mentors=parseInt(localStorage.getItem("mentorCount"))
	//Load points
		code = parseInt(localStorage.getItem("cp"));
		elecparts = parseInt(localStorage.getItem("ep"));
		mechparts = parseInt(localStorage.getItem("mp"));
		grants = parseInt(localStorage.getItem("gp"));
		control = parseInt(localStorage.getItem("kp"));
	//Load stuff
		dayCount = parseInt(localStorage.getItem("dayCount"));
		weekCount = parseInt(localStorage.getItem("weekCount"));
		prograde = parseInt(localStorage.getItem("prograde"));
		doInit = false;
	}
}
