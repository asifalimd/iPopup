var touchOrClick = Modernizr.touch ? 'touchend' : 'click';

// Define global object
$.params = { }

//Store the active popup id here
$.params.activePopup = '';
$.params.activeLink = '';

// Get int value from string, only applies pixel values where px is added
var getIntValue =  function(myval) {
		return myval.substring(0, myval.length-2);
}

// This function is called on the popup to center it corresponding to its overlay div
$.fn.makeMeCenter = function() {
	
	pwidth 	  = getIntValue(this.css('width')); //- (2 * $.params.popupPadding); 
	diffWidth = (1024 - pwidth) / 2;

	pheight = getIntValue(this.css('height')); // - (2 * $.params.popupPadding); 
	diffheight = (768 - pheight) / 2;
	this.css("margin", diffheight+'px '+ diffWidth+'px');
}

$.fn.addCloseIcon = function() {
	
	pwidth = getIntValue(this.css('width'));
	pheight = getIntValue(this.css('height'));

	// remove the existing icons within this popup
	this.children('.close-icon').remove();	

	this.append('<div class="close-icon"></div>');
	$('.close-icon').bind(touchOrClick, closePopup);
}

$.fn.hideAllPopups = function () {

	$(this).each(function() {
	  var $popupid = $('#'+ $(this).attr('data-popup-id'));
	
	   if ($popupid.length) {
	   	 $popupid.hide();
	   }
	});

}

var createPopup =  function() {

	// get the popup id
	var popup = $(this).attr('data-popup-id');
	var hasCloseIcon = $(this).attr('data-has-close-icon');
	// Get the popup object
	var $popup = $('#'+popup);

	// Create a overlay div dynamically before the popup element
	var overlay = '<div id="popup-layer" style="display:none"></div>';
	$popup.before(overlay);

	// Get the layer object
	var $layer = $('#popup-layer');

	 $popup.makeMeCenter();

	if(hasCloseIcon) {
		$popup.addCloseIcon();
    }

	$popup.addClass('popupCss').fadeIn();	
	$layer.addClass('overlayCss').fadeIn();

	
	$(this).addClass('active');
	// Set active popup object in global variable.
	$.params.activePopup = $popup;
	$.params.activeLink  = $(this);
}

var closePopup = function() {
	// fadeout the active popup
	$.params.activeLink.removeClass('active');
	$.params.activePopup.fadeOut();
	$('#popup-layer').fadeOut().remove();
}

$(document).ready(function(){
	$('.open-popup').hideAllPopups();
   	$('.open-popup').bind(touchOrClick, createPopup);
   	$('.close-popup').bind(touchOrClick, closePopup);

});


