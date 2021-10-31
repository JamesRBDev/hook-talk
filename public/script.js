let socket = io();

function connect() {
	let url = document.getElementById("url").value;
	socket.emit("possess", url);
	document.getElementById("window-connect").hidden = true;
	document.getElementById("window-talk").hidden    = undefined;
}

function send() {
	let txt = document.getElementById("text");
	socket.emit("say", txt.value);
	txt.value = "";
}