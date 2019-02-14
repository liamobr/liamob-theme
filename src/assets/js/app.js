import $ from 'jquery';
import 'tilt.js';

window.$ = $;

//import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

$(document).foundation();

$(document).ready(function(){

    particlesJS.load('particles-canvas', 'wp-content/themes/liamob-theme/dist/assets/particlesjs-config.json', function() {

    });

});

