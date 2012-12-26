function TabWindow(title, backgroundcolor) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:backgroundcolor,
		top: '40%',
		borderWidth: 1,
		borderColor: 'black'
	});

	/*var bb1 = Titanium.UI.createButtonBar({
    labels:['Tag', 'Hash', 'Location'],
    backgroundColor:'#336699',
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:50,
    top:'80%',
    width:'95%'
	});
	self.add(bb1);
	
	var tags = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: 10%,
		width:250, height:60
	})*/	
	return self;
};

module.exports = TabWindow;

// Lo que tenia antes para accesar los friends de fb
// ya tengo la data en un JSON ahora falta parse and display

/*function TabWindow(title) {
	var self = Ti.UI.createWindow({
		backgroundColor:'red',
		top:'50%'
	});
	
	var button = Ti.UI.createButton({
		title:title,
		top:5,
		width:150
	});
	self.add(button);
	
	button.addEventListener('click',function(e) {
		
	Ti.Facebook.appid = '455637937831035';
	Ti.Facebook.permissions = ['read_friendlists'];
	Ti.Facebook.authorize();
	Ti.Facebook.requestWithGraphPath('me/friends', {limit:10}, 
  		"GET", function(e) {
			if (e.success) {
				
			var friends = JSON.parse(e.result);
			Ti.API.log(JSON.stringify(friends.data[8].name));
  		      var friend = Ti.UI.createLabel({
  		      	text: 'test',
  		      	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  		      	top:30,
  		      	width: 'auto', height: 'auto'
  		      });
  		      self.add(friend);
  		  } else {
  		      if (e.error) {
   		         alert(e.error);
    	    } else {
     	       alert("Unkown result");
    	    }
    		}
		});
		
	})
	
	return self;

};

module.exports = TabWindow;*/
