
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var messageInput = {};	// @textField
	var slider1 = {};	// @slider
	var sendButton = {};	// @button
	var changeUsernameButton = {};	// @button
// @endregion// @endlock
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
	ws.onclose = function() { // when the socket is closed
		
    };

// eventHandlers// @lock

	messageInput.keydown = function messageInput_keydown (event)// @startlock
	{// @endlock
		if (event.keyCode === 13){
			ws.send(JSON.stringify({
				username: username,
				type: "message",
				body: $$('messageInput').getValue()	
			}));
			$$('messageInput').setValue("");
		}
	};// @lock

	slider1.slide = function slider1_slide (event)// @startlock
	{// @endlock
		//$$('messageInput').setWidth($$('slider1').getValue());
		ws.send(JSON.stringify({
			type: "slide",
			body: $$('slider1').getValue()
		}));
	};// @lock

	sendButton.click = function sendButton_click (event)// @startlock
	{// @endlock
		ws.send(JSON.stringify({
			username: username,
			type: "message",
			body: $$('messageInput').getValue()
		}));
		$$('messageInput').setValue("");
	};// @lock

	changeUsernameButton.click = function changeUsernameButton_click (event)// @startlock
	{// @endlock
		usernameChange = $$('usernameInput').getValue();
		ws.send(JSON.stringify({
			username: usernameChange,
			type: 'updateUsername'
		}));
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("messageInput", "keydown", messageInput.keydown, "WAF");
	WAF.addListener("slider1", "slide", slider1.slide, "WAF");
	WAF.addListener("sendButton", "click", sendButton.click, "WAF");
	WAF.addListener("changeUsernameButton", "click", changeUsernameButton.click, "WAF");
// @endregion
};// @endlock
