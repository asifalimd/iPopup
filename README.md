iPopup
======

Generic popup implementation for HTML5 apps targetted for iPad or other touch devices with a 1024 X 768 screen resolution.

Demo
====

http://reloadtheweb.com/Demos/iPopup/examples/examples.html


Usage Instructions
==================

  1. Copy the directory "popup" to your project

  2. Include the CSS file after all CSS files.
  
       &lt;link rel="stylesheet" href="popup/css/style.css"&gt;

  3. Include the JS file after all JS file includes, make sure its added after jQuery
  
       &lt;script type="text/javascript" src="popup/js/popup.js"&gt; &lt;/script&gt;

  4. To open a popup when clicking on any link/button just add css class "open-popup" and add popup div ID
       class="open-popup" data-popup-id="Your popup ID"

  5. You need not to hide the popup explicitly using display:none property. The plugin hides all popups, given 
     in "data-popup-id", on pageload. 
     
  6. To close a popup, add css class "close-popup" to close buttons/links. It automatically closes the active popup.

  7. To enable auto close icon on top right of popup just add the below custom attribute to your popup link
       data-has-close-icon="true"


References
==========

I am using the HTML5 custom attributes to define a popup id on any link/button. Check more on HTML% custom attributes.
http://html5doctor.com/html5-custom-data-attributes/

