
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var slider1 = {};	// @slider
// @endregion// @endlock
// @region namespaceDeclaration
	var sendButton = {};	// @button
	var changeUsernameButton = {};	// @button
	var ws = new WebSocket("ws://ks27964.kimsufi.com:8081/chat");
	//var ws = new WebSocket("ws://localhost:8081/chat");
	var username = "";
	
	ws.onmessage = function(message){
		var msgObj = JSON.parse(message.data);
		switch(msgObj.type){
			case "addUser":
				username = msgObj.username;
				$$('usernameInput').setValue(username);
				break;
			case "message":
				var previous = $$('chatText').getValue();
				$$('chatText').setValue("<b>" + msgObj.username + ":</b> " + msgObj.body + "</br>" + previous);
				break;
			case "slider":
				$$('messageInput').setWidth(msgObj.lala);
				break;

		}
	};
// eventHandlers// @lock

	slider1.slide = function slider1_slide (event)// @startlock
	{// @endlock
		ws.send(JSON.stringify({
			type: "slide",
			body: $$('slider1').getValue()
		}));
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("slider1", "slide", slider1.slide, "WAF");
// @endregion
};// @endlock
