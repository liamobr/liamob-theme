import $ from 'jquery';
import Parallax from 'parallax-js';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

$(document).ready(function(){
    var scene = document.getElementById('top-scene');
    var parallaxInstance = new Parallax(scene);

    particlesJS.load('particles-canvas', 'wp-content/themes/master/dist/assets/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
});