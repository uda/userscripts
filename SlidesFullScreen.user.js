// ==UserScript==
// @name         Slides Full Screen
// @namespace    http://slides.com/
// @version      0.1
// @description  Enable F5 to toggle full screen, use CTRL+F5 to reload the page
// @match        http://slides.com/*/live
// @author       uda
// @license      MIT; http://opensource.org/licenses/MIT
// @copyright    2014, Yehuda Deutsch (http://0x59.net/)
// @run-at       document-end
// @grant        none
// ==/UserScript==

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode#Toggling_fullscreen_mode
 */
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

jQuery(document.body).on("keydown", function (event) {
    // Allow using CTRL+F5 to reload
    if ((event.which || event.keyCode) == 116 && event.ctrlKey == false) {
        event.preventDefault();
        toggleFullScreen();
    }
});
