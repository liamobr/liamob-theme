/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.$ = _jquery2.default;

(0, _jquery2.default)(document).ready(function () {
  particlesJS.load('particles-canvas', 'wp-content/themes/liamob-theme/dist/assets/particlesjs-config.json', function () {});
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.tilt = function (options) {

        /**
         * RequestAnimationFrame
         */
        const requestTick = function() {
            if (this.ticking) return;
            requestAnimationFrame(updateTransforms.bind(this));
            this.ticking = true;
        };

        /**
         * Bind mouse movement evens on instance
         */
        const bindEvents = function() {
            const _this = this;
            $(this).on('mousemove', mouseMove);
            $(this).on('mouseenter', mouseEnter);
            if (this.settings.reset) $(this).on('mouseleave', mouseLeave);
            if (this.settings.glare) $(window).on('resize', updateGlareSize.bind(_this));
        };

        /**
         * Set transition only on mouse leave and mouse enter so it doesn't influence mouse move transforms
         */
        const setTransition = function() {
            if (this.timeout !== undefined) clearTimeout(this.timeout);
            $(this).css({'transition': `${this.settings.speed}ms ${this.settings.easing}`});
            if(this.settings.glare) this.glareElement.css({'transition': `opacity ${this.settings.speed}ms ${this.settings.easing}`});
            this.timeout = setTimeout(() => {
                $(this).css({'transition': ''});
                if(this.settings.glare) this.glareElement.css({'transition': ''});
            }, this.settings.speed);
        };

        /**
         * When user mouse enters tilt element
         */
        const mouseEnter = function(event) {
            this.ticking = false;
            $(this).css({'will-change': 'transform'});
            setTransition.call(this);

            // Trigger change event
            $(this).trigger("tilt.mouseEnter");
        };

        /**
         * Return the x,y position of the mouse on the tilt element
         * @returns {{x: *, y: *}}
         */
        const getMousePositions = function(event) {
            if (typeof(event) === "undefined") {
                event = {
                    pageX: $(this).offset().left + $(this).outerWidth() / 2,
                    pageY: $(this).offset().top + $(this).outerHeight() / 2
                };
            }
            return {x: event.pageX, y: event.pageY};
        };

        /**
         * When user mouse moves over the tilt element
         */
        const mouseMove = function(event) {
            this.mousePositions = getMousePositions(event);
            requestTick.call(this);
        };

        /**
         * When user mouse leaves tilt element
         */
        const mouseLeave = function() {
            setTransition.call(this);
            this.reset = true;
            requestTick.call(this);

            // Trigger change event
            $(this).trigger("tilt.mouseLeave");
        };

        /**
         * Get tilt values
         *
         * @returns {{x: tilt value, y: tilt value}}
         */
        const getValues = function() {
            const width = $(this).outerWidth();
            const height = $(this).outerHeight();
            const left = $(this).offset().left;
            const top = $(this).offset().top;
            const percentageX = (this.mousePositions.x - left) / width;
            const percentageY = (this.mousePositions.y - top) / height;
            // x or y position inside instance / width of instance = percentage of position inside instance * the max tilt value
            const tiltX = ((this.settings.maxTilt / 2) - ((percentageX) * this.settings.maxTilt)).toFixed(2);
            const tiltY = (((percentageY) * this.settings.maxTilt) - (this.settings.maxTilt / 2)).toFixed(2);
            // angle
            const angle = Math.atan2(this.mousePositions.x - (left+width/2),- (this.mousePositions.y - (top+height/2)) )*(180/Math.PI);
            // Return x & y tilt values
            return {tiltX, tiltY, 'percentageX': percentageX * 100, 'percentageY': percentageY * 100, angle};
        };

        /**
         * Update tilt transforms on mousemove
         */
        const updateTransforms = function() {
            this.transforms = getValues.call(this);

            if (this.reset) {
                this.reset = false;
                $(this).css('transform', `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`);

                // Rotate glare if enabled
                if (this.settings.glare){
                    this.glareElement.css('transform', `rotate(180deg) translate(-50%, -50%)`);
                    this.glareElement.css('opacity', `0`);
                }

                return;
            } else {
                $(this).css('transform', `perspective(${this.settings.perspective}px) rotateX(${this.settings.disableAxis === 'x' ? 0 : this.transforms.tiltY}deg) rotateY(${this.settings.disableAxis === 'y' ? 0 : this.transforms.tiltX}deg) scale3d(${this.settings.scale},${this.settings.scale},${this.settings.scale})`);

                // Rotate glare if enabled
                if (this.settings.glare){
                    this.glareElement.css('transform', `rotate(${this.transforms.angle}deg) translate(-50%, -50%)`);
                    this.glareElement.css('opacity', `${this.transforms.percentageY * this.settings.maxGlare / 100}`);
                }
            }

            // Trigger change event
            $(this).trigger("change", [this.transforms]);

            this.ticking = false;
        };

        /**
         * Prepare elements
         */
        const prepareGlare = function () {
            const glarePrerender = this.settings.glarePrerender;

            // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
            if (!glarePrerender)
            // Create glare element
                $(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>');

            // Store glare selector if glare is enabled
            this.glareElementWrapper = $(this).find(".js-tilt-glare");
            this.glareElement = $(this).find(".js-tilt-glare-inner");

            // Remember? We assume all css is already set, so just return
            if (glarePrerender) return;

            // Abstracted re-usable glare styles
            const stretch = {
                'position': 'absolute',
                'top': '0',
                'left': '0',
                'width': '100%',
                'height': '100%',
            };

            // Style glare wrapper
            this.glareElementWrapper.css(stretch).css({
                'overflow': 'hidden',
                'pointer-events': 'none',
            });

            // Style glare element
            this.glareElement.css({
                'position': 'absolute',
                'top': '50%',
                'left': '50%',
                'background-image': `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
                'width': `${$(this).outerWidth()*2}`,
                'height': `${$(this).outerWidth()*2}`,
                'transform': 'rotate(180deg) translate(-50%, -50%)',
                'transform-origin': '0% 0%',
                'opacity': '0',
            });

        };

        /**
         * Update glare on resize
         */
        const updateGlareSize = function () {
            this.glareElement.css({
                'width': `${$(this).outerWidth()*2}`,
                'height': `${$(this).outerWidth()*2}`,
            });
        };

        /**
         * Public methods
         */
        $.fn.tilt.destroy = function() {
            $(this).each(function () {
                $(this).find('.js-tilt-glare').remove();
                $(this).css({'will-change': '', 'transform': ''});
                $(this).off('mousemove mouseenter mouseleave');
            });
        };

        $.fn.tilt.getValues = function() {
            const results = [];
            $(this).each(function () {
                this.mousePositions = getMousePositions.call(this);
                results.push(getValues.call(this));
            });
            return results;
        };

        $.fn.tilt.reset = function() {
            $(this).each(function () {
                this.mousePositions = getMousePositions.call(this);
                this.settings = $(this).data('settings');
                mouseLeave.call(this);
                setTimeout(() => {
                    this.reset = false;
                }, this.settings.transition);
            });
        };

        /**
         * Loop every instance
         */
        return this.each(function () {

            /**
             * Default settings merged with user settings
             * Can be set trough data attributes or as parameter.
             * @type {*}
             */
            this.settings = $.extend({
                maxTilt: $(this).is('[data-tilt-max]') ? $(this).data('tilt-max') : 20,
                perspective: $(this).is('[data-tilt-perspective]') ? $(this).data('tilt-perspective') : 300,
                easing: $(this).is('[data-tilt-easing]') ? $(this).data('tilt-easing') : 'cubic-bezier(.03,.98,.52,.99)',
                scale: $(this).is('[data-tilt-scale]') ? $(this).data('tilt-scale') : '1',
                speed: $(this).is('[data-tilt-speed]') ? $(this).data('tilt-speed') : '400',
                transition: $(this).is('[data-tilt-transition]') ? $(this).data('tilt-transition') : true,
                disableAxis: $(this).is('[data-tilt-disable-axis]') ? $(this).data('tilt-disable-axis') : null,
                axis: $(this).is('[data-tilt-axis]') ? $(this).data('tilt-axis') : null,
                reset: $(this).is('[data-tilt-reset]') ? $(this).data('tilt-reset') : true,
                glare: $(this).is('[data-tilt-glare]') ? $(this).data('tilt-glare') : false,
                maxGlare: $(this).is('[data-tilt-maxglare]') ? $(this).data('tilt-maxglare') : 1,
            }, options);

            // Add deprecation warning & set disableAxis to deprecated axis setting
            if(this.settings.axis !== null){
                console.warn('Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information');
                this.settings.disableAxis = this.settings.axis;
            }

            this.init = () => {
                // Store settings
                $(this).data('settings', this.settings);

                // Prepare element
                if(this.settings.glare) prepareGlare.call(this);

                // Bind events
                bindEvents.call(this);
            };

            // Init
            this.init();

        });
    };

    /**
     * Auto load
     */
    $('[data-tilt]').tilt();

    return true;
}));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA4ZDI4YzAyYzdhMTdiOGFjYzgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbHQuanMvc3JjL3RpbHQuanF1ZXJ5LmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwicGFydGljbGVzSlMiLCJsb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBRUFBLE9BQU9DLENBQVA7O0FBRUEsc0JBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZO0FBQzVCQyxjQUFZQyxJQUFaLENBQWlCLGtCQUFqQixFQUFxQyxvRUFBckMsRUFBMkcsWUFBWSxDQUFFLENBQXpIO0FBQ0QsQ0FGRCxFOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCLG9CQUFvQixLQUFLLHFCQUFxQixFQUFFO0FBQzFGLDJEQUEyRCx5QkFBeUIsb0JBQW9CLEtBQUsscUJBQXFCLEVBQUU7QUFDcEk7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDLCtEQUErRCxpQkFBaUI7QUFDaEYsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF3RCwwQkFBMEI7O0FBRWxGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isd0RBQXdELDBCQUEwQixjQUFjLDhEQUE4RCxlQUFlLDhEQUE4RCxlQUFlLG9CQUFvQixHQUFHLG9CQUFvQixHQUFHLG9CQUFvQjs7QUFFNVQ7QUFDQTtBQUNBLGlFQUFpRSxzQkFBc0I7QUFDdkYsd0RBQXdELDJEQUEyRDtBQUNuSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25ELDZCQUE2Qix1QkFBdUI7QUFDcEQsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQ0FBbUM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUwOGQyOGMwMmM3YTE3YjhhY2M4IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICd0aWx0LmpzJztcblxud2luZG93LiQgPSAkO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHBhcnRpY2xlc0pTLmxvYWQoJ3BhcnRpY2xlcy1jYW52YXMnLCAnd3AtY29udGVudC90aGVtZXMvbGlhbW9iLXRoZW1lL2Rpc3QvYXNzZXRzL3BhcnRpY2xlc2pzLWNvbmZpZy5qc29uJywgZnVuY3Rpb24gKCkge30pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL2FwcC5qcyIsIihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIHJvb3QsIGpRdWVyeSApIHtcbiAgICAgICAgICAgIGlmICggalF1ZXJ5ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVxdWlyZSgnalF1ZXJ5JykgcmV0dXJucyBhIGZhY3RvcnkgdGhhdCByZXF1aXJlcyB3aW5kb3cgdG9cbiAgICAgICAgICAgICAgICAvLyBidWlsZCBhIGpRdWVyeSBpbnN0YW5jZSwgd2Ugbm9ybWFsaXplIGhvdyB3ZSB1c2UgbW9kdWxlc1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgcmVxdWlyZSB0aGlzIHBhdHRlcm4gYnV0IHRoZSB3aW5kb3cgcHJvdmlkZWQgaXMgYSBub29wXG4gICAgICAgICAgICAgICAgLy8gaWYgaXQncyBkZWZpbmVkIChob3cganF1ZXJ5IHdvcmtzKVxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jykocm9vdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cbn0oZnVuY3Rpb24gKCQpIHtcbiAgICAkLmZuLnRpbHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHJlcXVlc3RUaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aWNraW5nKSByZXR1cm47XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlVHJhbnNmb3Jtcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMudGlja2luZyA9IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmQgbW91c2UgbW92ZW1lbnQgZXZlbnMgb24gaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICQodGhpcykub24oJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XG4gICAgICAgICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgbW91c2VFbnRlcik7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5yZXNldCkgJCh0aGlzKS5vbignbW91c2VsZWF2ZScsIG1vdXNlTGVhdmUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2xhcmUpICQod2luZG93KS5vbigncmVzaXplJywgdXBkYXRlR2xhcmVTaXplLmJpbmQoX3RoaXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRyYW5zaXRpb24gb25seSBvbiBtb3VzZSBsZWF2ZSBhbmQgbW91c2UgZW50ZXIgc28gaXQgZG9lc24ndCBpbmZsdWVuY2UgbW91c2UgbW92ZSB0cmFuc2Zvcm1zXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBzZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0ICE9PSB1bmRlZmluZWQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3Moeyd0cmFuc2l0aW9uJzogYCR7dGhpcy5zZXR0aW5ncy5zcGVlZH1tcyAke3RoaXMuc2V0dGluZ3MuZWFzaW5nfWB9KTtcbiAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZ2xhcmUpIHRoaXMuZ2xhcmVFbGVtZW50LmNzcyh7J3RyYW5zaXRpb24nOiBgb3BhY2l0eSAke3RoaXMuc2V0dGluZ3Muc3BlZWR9bXMgJHt0aGlzLnNldHRpbmdzLmVhc2luZ31gfSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7J3RyYW5zaXRpb24nOiAnJ30pO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZ2xhcmUpIHRoaXMuZ2xhcmVFbGVtZW50LmNzcyh7J3RyYW5zaXRpb24nOiAnJ30pO1xuICAgICAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy5zcGVlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdXNlciBtb3VzZSBlbnRlcnMgdGlsdCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBtb3VzZUVudGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGlja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3Moeyd3aWxsLWNoYW5nZSc6ICd0cmFuc2Zvcm0nfSk7XG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uLmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoXCJ0aWx0Lm1vdXNlRW50ZXJcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiB0aGUgeCx5IHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBvbiB0aGUgdGlsdCBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm5zIHt7eDogKiwgeTogKn19XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBnZXRNb3VzZVBvc2l0aW9ucyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGV2ZW50KSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBwYWdlWDogJCh0aGlzKS5vZmZzZXQoKS5sZWZ0ICsgJCh0aGlzKS5vdXRlcldpZHRoKCkgLyAyLFxuICAgICAgICAgICAgICAgICAgICBwYWdlWTogJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCkgLyAyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7eDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZfTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB1c2VyIG1vdXNlIG1vdmVzIG92ZXIgdGhlIHRpbHQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbW91c2VNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VQb3NpdGlvbnMgPSBnZXRNb3VzZVBvc2l0aW9ucyhldmVudCk7XG4gICAgICAgICAgICByZXF1ZXN0VGljay5jYWxsKHRoaXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHVzZXIgbW91c2UgbGVhdmVzIHRpbHQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbW91c2VMZWF2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yZXNldCA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0VGljay5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKFwidGlsdC5tb3VzZUxlYXZlXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGlsdCB2YWx1ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge3t4OiB0aWx0IHZhbHVlLCB5OiB0aWx0IHZhbHVlfX1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGdldFZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSAkKHRoaXMpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9ICQodGhpcykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VYID0gKHRoaXMubW91c2VQb3NpdGlvbnMueCAtIGxlZnQpIC8gd2lkdGg7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlWSA9ICh0aGlzLm1vdXNlUG9zaXRpb25zLnkgLSB0b3ApIC8gaGVpZ2h0O1xuICAgICAgICAgICAgLy8geCBvciB5IHBvc2l0aW9uIGluc2lkZSBpbnN0YW5jZSAvIHdpZHRoIG9mIGluc3RhbmNlID0gcGVyY2VudGFnZSBvZiBwb3NpdGlvbiBpbnNpZGUgaW5zdGFuY2UgKiB0aGUgbWF4IHRpbHQgdmFsdWVcbiAgICAgICAgICAgIGNvbnN0IHRpbHRYID0gKCh0aGlzLnNldHRpbmdzLm1heFRpbHQgLyAyKSAtICgocGVyY2VudGFnZVgpICogdGhpcy5zZXR0aW5ncy5tYXhUaWx0KSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbHRZID0gKCgocGVyY2VudGFnZVkpICogdGhpcy5zZXR0aW5ncy5tYXhUaWx0KSAtICh0aGlzLnNldHRpbmdzLm1heFRpbHQgLyAyKSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIC8vIGFuZ2xlXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIodGhpcy5tb3VzZVBvc2l0aW9ucy54IC0gKGxlZnQrd2lkdGgvMiksLSAodGhpcy5tb3VzZVBvc2l0aW9ucy55IC0gKHRvcCtoZWlnaHQvMikpICkqKDE4MC9NYXRoLlBJKTtcbiAgICAgICAgICAgIC8vIFJldHVybiB4ICYgeSB0aWx0IHZhbHVlc1xuICAgICAgICAgICAgcmV0dXJuIHt0aWx0WCwgdGlsdFksICdwZXJjZW50YWdlWCc6IHBlcmNlbnRhZ2VYICogMTAwLCAncGVyY2VudGFnZVknOiBwZXJjZW50YWdlWSAqIDEwMCwgYW5nbGV9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdGlsdCB0cmFuc2Zvcm1zIG9uIG1vdXNlbW92ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdXBkYXRlVHJhbnNmb3JtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1zID0gZ2V0VmFsdWVzLmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0cmFuc2Zvcm0nLCBgcGVyc3BlY3RpdmUoJHt0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlfXB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylgKTtcblxuICAgICAgICAgICAgICAgIC8vIFJvdGF0ZSBnbGFyZSBpZiBlbmFibGVkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2xhcmUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudC5jc3MoJ3RyYW5zZm9ybScsIGByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuY3NzKCdvcGFjaXR5JywgYDBgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0cmFuc2Zvcm0nLCBgcGVyc3BlY3RpdmUoJHt0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlfXB4KSByb3RhdGVYKCR7dGhpcy5zZXR0aW5ncy5kaXNhYmxlQXhpcyA9PT0gJ3gnID8gMCA6IHRoaXMudHJhbnNmb3Jtcy50aWx0WX1kZWcpIHJvdGF0ZVkoJHt0aGlzLnNldHRpbmdzLmRpc2FibGVBeGlzID09PSAneScgPyAwIDogdGhpcy50cmFuc2Zvcm1zLnRpbHRYfWRlZykgc2NhbGUzZCgke3RoaXMuc2V0dGluZ3Muc2NhbGV9LCR7dGhpcy5zZXR0aW5ncy5zY2FsZX0sJHt0aGlzLnNldHRpbmdzLnNjYWxlfSlgKTtcblxuICAgICAgICAgICAgICAgIC8vIFJvdGF0ZSBnbGFyZSBpZiBlbmFibGVkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2xhcmUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudC5jc3MoJ3RyYW5zZm9ybScsIGByb3RhdGUoJHt0aGlzLnRyYW5zZm9ybXMuYW5nbGV9ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuY3NzKCdvcGFjaXR5JywgYCR7dGhpcy50cmFuc2Zvcm1zLnBlcmNlbnRhZ2VZICogdGhpcy5zZXR0aW5ncy5tYXhHbGFyZSAvIDEwMH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoXCJjaGFuZ2VcIiwgW3RoaXMudHJhbnNmb3Jtc10pO1xuXG4gICAgICAgICAgICB0aGlzLnRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJlcGFyZSBlbGVtZW50c1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcHJlcGFyZUdsYXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZ2xhcmVQcmVyZW5kZXIgPSB0aGlzLnNldHRpbmdzLmdsYXJlUHJlcmVuZGVyO1xuXG4gICAgICAgICAgICAvLyBJZiBvcHRpb24gcHJlLXJlbmRlciBpcyBlbmFibGVkIHdlIGFzc3VtZSBhbGwgaHRtbC9jc3MgaXMgcHJlc2VudCBmb3IgYW4gb3B0aW1hbCBnbGFyZSBlZmZlY3QuXG4gICAgICAgICAgICBpZiAoIWdsYXJlUHJlcmVuZGVyKVxuICAgICAgICAgICAgLy8gQ3JlYXRlIGdsYXJlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImpzLXRpbHQtZ2xhcmVcIj48ZGl2IGNsYXNzPVwianMtdGlsdC1nbGFyZS1pbm5lclwiPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgICAgICAvLyBTdG9yZSBnbGFyZSBzZWxlY3RvciBpZiBnbGFyZSBpcyBlbmFibGVkXG4gICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudFdyYXBwZXIgPSAkKHRoaXMpLmZpbmQoXCIuanMtdGlsdC1nbGFyZVwiKTtcbiAgICAgICAgICAgIHRoaXMuZ2xhcmVFbGVtZW50ID0gJCh0aGlzKS5maW5kKFwiLmpzLXRpbHQtZ2xhcmUtaW5uZXJcIik7XG5cbiAgICAgICAgICAgIC8vIFJlbWVtYmVyPyBXZSBhc3N1bWUgYWxsIGNzcyBpcyBhbHJlYWR5IHNldCwgc28ganVzdCByZXR1cm5cbiAgICAgICAgICAgIGlmIChnbGFyZVByZXJlbmRlcikgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBBYnN0cmFjdGVkIHJlLXVzYWJsZSBnbGFyZSBzdHlsZXNcbiAgICAgICAgICAgIGNvbnN0IHN0cmV0Y2ggPSB7XG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAndG9wJzogJzAnLFxuICAgICAgICAgICAgICAgICdsZWZ0JzogJzAnLFxuICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU3R5bGUgZ2xhcmUgd3JhcHBlclxuICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnRXcmFwcGVyLmNzcyhzdHJldGNoKS5jc3Moe1xuICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTdHlsZSBnbGFyZSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgJ3RvcCc6ICc1MCUnLFxuICAgICAgICAgICAgICAgICdsZWZ0JzogJzUwJScsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSlgLFxuICAgICAgICAgICAgICAgICd3aWR0aCc6IGAkeyQodGhpcykub3V0ZXJXaWR0aCgpKjJ9YCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogYCR7JCh0aGlzKS5vdXRlcldpZHRoKCkqMn1gLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAncm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICcwJSAwJScsXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMCcsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgZ2xhcmUgb24gcmVzaXplXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB1cGRhdGVHbGFyZVNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICd3aWR0aCc6IGAkeyQodGhpcykub3V0ZXJXaWR0aCgpKjJ9YCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogYCR7JCh0aGlzKS5vdXRlcldpZHRoKCkqMn1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFB1YmxpYyBtZXRob2RzXG4gICAgICAgICAqL1xuICAgICAgICAkLmZuLnRpbHQuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5qcy10aWx0LWdsYXJlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moeyd3aWxsLWNoYW5nZSc6ICcnLCAndHJhbnNmb3JtJzogJyd9KTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm9mZignbW91c2Vtb3ZlIG1vdXNlZW50ZXIgbW91c2VsZWF2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5mbi50aWx0LmdldFZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25zID0gZ2V0TW91c2VQb3NpdGlvbnMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZ2V0VmFsdWVzLmNhbGwodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfTtcblxuICAgICAgICAkLmZuLnRpbHQucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9ucyA9IGdldE1vdXNlUG9zaXRpb25zLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICQodGhpcykuZGF0YSgnc2V0dGluZ3MnKTtcbiAgICAgICAgICAgICAgICBtb3VzZUxlYXZlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnNldHRpbmdzLnRyYW5zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvb3AgZXZlcnkgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlZmF1bHQgc2V0dGluZ3MgbWVyZ2VkIHdpdGggdXNlciBzZXR0aW5nc1xuICAgICAgICAgICAgICogQ2FuIGJlIHNldCB0cm91Z2ggZGF0YSBhdHRyaWJ1dGVzIG9yIGFzIHBhcmFtZXRlci5cbiAgICAgICAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gJC5leHRlbmQoe1xuICAgICAgICAgICAgICAgIG1heFRpbHQ6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtbWF4XScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LW1heCcpIDogMjAsXG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtcGVyc3BlY3RpdmVdJykgPyAkKHRoaXMpLmRhdGEoJ3RpbHQtcGVyc3BlY3RpdmUnKSA6IDMwMCxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtZWFzaW5nXScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LWVhc2luZycpIDogJ2N1YmljLWJlemllciguMDMsLjk4LC41MiwuOTkpJyxcbiAgICAgICAgICAgICAgICBzY2FsZTogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC1zY2FsZV0nKSA/ICQodGhpcykuZGF0YSgndGlsdC1zY2FsZScpIDogJzEnLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LXNwZWVkXScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LXNwZWVkJykgOiAnNDAwJyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LXRyYW5zaXRpb25dJykgPyAkKHRoaXMpLmRhdGEoJ3RpbHQtdHJhbnNpdGlvbicpIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlQXhpczogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC1kaXNhYmxlLWF4aXNdJykgPyAkKHRoaXMpLmRhdGEoJ3RpbHQtZGlzYWJsZS1heGlzJykgOiBudWxsLFxuICAgICAgICAgICAgICAgIGF4aXM6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtYXhpc10nKSA/ICQodGhpcykuZGF0YSgndGlsdC1heGlzJykgOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlc2V0OiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LXJlc2V0XScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LXJlc2V0JykgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdsYXJlOiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LWdsYXJlXScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LWdsYXJlJykgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXhHbGFyZTogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC1tYXhnbGFyZV0nKSA/ICQodGhpcykuZGF0YSgndGlsdC1tYXhnbGFyZScpIDogMSxcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyBBZGQgZGVwcmVjYXRpb24gd2FybmluZyAmIHNldCBkaXNhYmxlQXhpcyB0byBkZXByZWNhdGVkIGF4aXMgc2V0dGluZ1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5heGlzICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RpbHQuanM6IHRoZSBheGlzIHNldHRpbmcgaGFzIGJlZW4gcmVuYW1lZCB0byBkaXNhYmxlQXhpcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9naWpzcm9nZS90aWx0LmpzL3B1bGwvMjYgZm9yIG1vcmUgaW5mb3JtYXRpb24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRpc2FibGVBeGlzID0gdGhpcy5zZXR0aW5ncy5heGlzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgc2V0dGluZ3NcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ3NldHRpbmdzJywgdGhpcy5zZXR0aW5ncyk7XG5cbiAgICAgICAgICAgICAgICAvLyBQcmVwYXJlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmdsYXJlKSBwcmVwYXJlR2xhcmUuY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgYmluZEV2ZW50cy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gSW5pdFxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gbG9hZFxuICAgICAqL1xuICAgICQoJ1tkYXRhLXRpbHRdJykudGlsdCgpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlsdC5qcy9zcmMvdGlsdC5qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==