//your JS code here. If required.
let timer = document.getElementById("displayTimer")

let currentDate = new Date();

setInterval(
function(){
	currentDate = new Date();
	timer.innerHTML = currentDate.toLocaleString();
		},1000
)

