// La mitad de arriba del view. Aqui esta el textArea donde se escriben los post

function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		backgroundColor: '#ADD8E6',
	//	bottom:'60%',
		borderWidth: 1,
		borderColor: 'black'
	});
	
	// El label con el nombre del App
	var label1 = Ti.UI.createLabel({
	  	color: '#900',
	  	font: { fontSize:24, font: 'Helvetica' },
	  	text: 'QuickPost',
	  	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	  	top: 10,
	  	width: 'auto', height: 'auto'
	});
	self.add(label1);

	// Botones para el keyboard del textArea
	var send = Ti.UI.createButton({
    	style : Ti.UI.iPhone.SystemButtonStyle.DONE,
    	title : 'Send'
	});
	var camera = Ti.UI.createButton({
	    systemButton : Ti.UI.iPhone.SystemButton.CAMERA
	});
	var cancel = Ti.UI.createButton({
	    systemButton : Ti.UI.iPhone.SystemButton.CANCEL
	});
	var flexSpace = Ti.UI.createButton({
	    systemButton : Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});

	// El TextArea del post!
	var status = Ti.UI.createTextArea({
	    borderColor : '#000',
	    color : '#000',
	    keyboardToolbar : [cancel, flexSpace, camera, flexSpace, send],
	    keyboardToolbarColor : '#999',
	    keyboardToolbarHeight : 40,
	    hintText : 'Write Your Post Here',
	    maxLength: 140,
	    font: {fontSize: 18},
	    top : 50,
	    borderRadius: 5,
	    borderWidth: 1,
	    width : 300, height : 120
	});
	self.add(status);
	
	// On Cancel blur the keyboard
	cancel.addEventListener('click', function(e) {
		status.blur();
	})
	
	// On Send post the status updates
	send.addEventListener('click',function(e) {
		
		if(status.value.length+tags.value.length > 139){
			alert("Estas algarete");
			return;
		}
		
		// Funcionalidad de Facebook
		Ti.Facebook.appid = '455637937831035';
		Ti.Facebook.permissions = ['publish_stream','publish_actions','publish_checkins'];
		Ti.Facebook.authorize();
		Ti.Facebook.requestWithGraphPath('me/feed', {message: status.value}, 
  	       "POST", function(e) {
 		   if (e.success) {
  		      alert("Se pudo postiar el status!");
  		  } else {
  		      if (e.error) {
   		         alert(e.error);
    	    } else {
     	       alert("Unkown result");
    	    }
    		}
    	
		});
		
		// Funcionalidad de Twitter
   		var Twitter = require('ui/handheld/twitter').Twitter;
   		
   		var client = Twitter({
     		consumerKey: "chHcfUxlEewjahZMzfoe6A",
	      	consumerSecret: "tbJF5DocHHrwhVa19ltTvQImDDkwEawYXuNucDM6VQ",
	      	accessTokenKey: '1028587700-ubeLjwrl7yeLiLbdeMQxHxh5elLuIjZMI3DdE5Q', 
	      	accessTokenSecret: "huFXUyVRemh3qUqN3LteXstJnN0DGE13JUOLP55bs"
    	});
    	
		client.request("1.1/statuses/update.json", {status: status.value+" "+tags.value}, "POST", function(e) {
      		if (e.success) {
        		alert('funciono');
      		} else {
        		alert(e.error);
      		}
    	});

		// Reset el status text area
		status.setValue('');
	});
	
	// Text Field para los hash tags de Twitter
	var tags = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: '38%',
		maxLength: 140,
		visible: false,
		width:250, height:60
	});
	self.add(tags);
	
	
	// Button bar para distintas funcionalidades
	var bb1 = Titanium.UI.createButtonBar({
    labels:['Tag', 'Hash', 'Location'],
    backgroundColor:'#336699',
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:50,
    top:'80%',
    width:'95%'
	});
	self.add(bb1);
	
	// Event listener para hash tags
	bb1.addEventListener('click', function(e) {
		if (e.index === 1) {
			tags.setVisible(true);
		};
	});
	
	return self;
};

module.exports = ApplicationWindow;
