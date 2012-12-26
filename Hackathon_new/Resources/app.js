/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// Esta funcion main crea los windows!
(function() {	
	
	// Esta es la mitad de abajo del view
/*	var Window = require('ui/handheld/TabWindow');
	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	new ApplicationTabGroup(Window).open(); */
	
	// Esta es la mitad de arriba del view
	var main = require('ui/handheld/ApplicationWindow');
	new main('MyApp').open();

})();
