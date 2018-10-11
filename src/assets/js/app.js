import $ from 'jquery';
import Parallax from 'parallax-js';
import Typed from 'typed.js';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

$(document).ready(function(){
    var topScene = document.getElementById('top-scene');
    var topParallaxInstance = new Parallax(topScene);

    particlesJS.load('particles-canvas', 'wp-content/themes/liamob-theme/dist/assets/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });

});