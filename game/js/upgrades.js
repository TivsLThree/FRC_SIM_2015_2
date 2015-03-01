var members ={
	programmers:9001,
	electricians:9001,
	mechanics:9001,
	pr:9001,
	mentors:1
};
var code = 9001;
var elecparts = 9001;
var mechparts = 9001;
var grants = 9001;
var control = 9001;
var doInit = true;
var prograde = 9001;
function init(){
	if(doInit == true){
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
		prograde = 0;
		if(localStorage.getItem("prograde") != null){
		prograde = parseInt(localStorage.getItem("prograde"));
		}
		doInit = false;
	}
}
function send(){
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
	localStorage.setItem("prograde", prograde);
	window.location = "week1.html";
}

function proUp(){
	if(code>=(7 + prograde+((7 + prograde) *0.2))){
	code = code-(7 + prograde+(7 + prograde) *0.2);
	prograde =prograde +1;
	
		}
	}
function updateDisplay(){
	document.getElementById("proUp").innerHTML = "Efficiency " + prograde +": Costs "+(7 + prograde+((7 + prograde) *0.2));
}
window.setInterval(function(){
	init();
	updateDisplay();
},100);