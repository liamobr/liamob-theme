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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function pJS(tag_id, params) {

  var canvas_el = document.querySelector('#' + tag_id + ' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if (params) {
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };

  pJS.fn.retinaInit = function () {

    if (pJS.retina_detect && window.devicePixelRatio > 1) {
      pJS.canvas.pxratio = window.devicePixelRatio;
      pJS.tmp.retina = true;
    } else {
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;
  };

  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function () {
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function () {

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if (pJS && pJS.interactivity.events.resize) {

      window.addEventListener('resize', function () {

        pJS.canvas.w = pJS.canvas.el.offsetWidth;
        pJS.canvas.h = pJS.canvas.el.offsetHeight;

        /* resize canvas */
        if (pJS.tmp.retina) {
          pJS.canvas.w *= pJS.canvas.pxratio;
          pJS.canvas.h *= pJS.canvas.pxratio;
        }

        pJS.canvas.el.width = pJS.canvas.w;
        pJS.canvas.el.height = pJS.canvas.h;

        /* repaint canvas on anim disabled */
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesEmpty();
          pJS.fn.particlesCreate();
          pJS.fn.particlesDraw();
          pJS.fn.vendors.densityAutoParticles();
        }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();
      });
    }
  };

  pJS.fn.canvasPaint = function () {
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function () {
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function (color, opacity, position) {

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if (pJS.particles.size.anim.enable) {
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if (!pJS.particles.size.anim.sync) {
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if (this.x > pJS.canvas.w - this.radius * 2) this.x = this.x - this.radius;else if (this.x < this.radius * 2) this.x = this.x + this.radius;
    if (this.y > pJS.canvas.h - this.radius * 2) this.y = this.y - this.radius;else if (this.y < this.radius * 2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if (pJS.particles.move.bounce) {
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if (_typeof(color.value) == 'object') {

      if (color.value instanceof Array) {
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      } else {
        if (color.value.r != undefined && color.value.g != undefined && color.value.b != undefined) {
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          };
        }
        if (color.value.h != undefined && color.value.s != undefined && color.value.l != undefined) {
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          };
        }
      }
    } else if (color.value == 'random') {
      this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      };
    } else if (typeof color.value == 'string') {
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if (pJS.particles.opacity.anim.enable) {
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if (!pJS.particles.opacity.anim.sync) {
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {};
    switch (pJS.particles.move.direction) {
      case 'top':
        velbase = {
          x: 0,
          y: -1
        };
        break;
      case 'top-right':
        velbase = {
          x: 0.5,
          y: -0.5
        };
        break;
      case 'right':
        velbase = {
          x: 1,
          y: -0
        };
        break;
      case 'bottom-right':
        velbase = {
          x: 0.5,
          y: 0.5
        };
        break;
      case 'bottom':
        velbase = {
          x: 0,
          y: 1
        };
        break;
      case 'bottom-left':
        velbase = {
          x: -0.5,
          y: 1
        };
        break;
      case 'left':
        velbase = {
          x: -1,
          y: 0
        };
        break;
      case 'top-left':
        velbase = {
          x: -0.5,
          y: -0.5
        };
        break;
      default:
        velbase = {
          x: 0,
          y: 0
        };
        break;
    }

    if (pJS.particles.move.straight) {
      this.vx = velbase.x;
      this.vy = velbase.y;
      if (pJS.particles.move.random) {
        this.vx = this.vx * Math.random();
        this.vy = this.vy * Math.random();
      }
    } else {
      this.vx = velbase.x + Math.random() - 0.5;
      this.vy = velbase.y + Math.random() - 0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if ((typeof shape_type === 'undefined' ? 'undefined' : _typeof(shape_type)) == 'object') {
      if (shape_type instanceof Array) {
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    } else {
      this.shape = shape_type;
    }

    if (this.shape == 'image') {
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      };
      if (!this.img.ratio) this.img.ratio = 1;
      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined) {
        pJS.fn.vendors.createSvgImg(this);
        if (pJS.tmp.pushing) {
          this.img.loaded = false;
        }
      }
    }
  };

  pJS.fn.particle.prototype.draw = function () {

    var p = this;

    if (p.radius_bubble != undefined) {
      var radius = p.radius_bubble;
    } else {
      var radius = p.radius;
    }

    if (p.opacity_bubble != undefined) {
      var opacity = p.opacity_bubble;
    } else {
      var opacity = p.opacity;
    }

    if (p.color.rgb) {
      var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + opacity + ')';
    } else {
      var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + opacity + ')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch (p.shape) {

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
        break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
        break;

      case 'polygon':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius / (pJS.particles.shape.polygon.nb_sides / 3.5), // startX
        p.y - radius / (2.66 / 3.5), // startY
        radius * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        1 // sideCountDenominator
        );
        break;

      case 'star':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x - radius * 2 / (pJS.particles.shape.polygon.nb_sides / 4), // startX
        p.y - radius / (2 * 2.66 / 3.5), // startY
        radius * 2 * 2.66 / (pJS.particles.shape.polygon.nb_sides / 3), // sideLength
        pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
        2 // sideCountDenominator
        );
        break;

      case 'image':
        var draw = function draw() {
          pJS.canvas.ctx.drawImage(img_obj, p.x - radius, p.y - radius, radius * 2, radius * 2 / p.img.ratio);
        };

        if (pJS.tmp.img_type == 'svg') {
          var img_obj = p.img.obj;
        } else {
          var img_obj = pJS.tmp.img_obj;
        }

        if (img_obj) {
          draw();
        }

        break;

    }

    pJS.canvas.ctx.closePath();

    if (pJS.particles.shape.stroke.width > 0) {
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }

    pJS.canvas.ctx.fill();
  };

  pJS.fn.particlesCreate = function () {
    for (var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function () {

    for (var i = 0; i < pJS.particles.array.length; i++) {

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if (pJS.particles.move.enable) {
        var ms = pJS.particles.move.speed / 2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if (pJS.particles.opacity.anim.enable) {
        if (p.opacity_status == true) {
          if (p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        } else {
          if (p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if (p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if (pJS.particles.size.anim.enable) {
        if (p.size_status == true) {
          if (p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        } else {
          if (p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if (p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if (pJS.particles.move.out_mode == 'bounce') {
        var new_pos = {
          x_left: p.radius,
          x_right: pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        };
      } else {
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        };
      }

      if (p.x - p.radius > pJS.canvas.w) {
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      } else if (p.x + p.radius < 0) {
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if (p.y - p.radius > pJS.canvas.h) {
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      } else if (p.y + p.radius < 0) {
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch (pJS.particles.move.out_mode) {
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
      }

      /* events */
      if (isInArray('grab', pJS.interactivity.events.onhover.mode)) {
        pJS.fn.modes.grabParticle(p);
      }

      if (isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.bubbleParticle(p);
      }

      if (isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)) {
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if (pJS.particles.line_linked.enable || pJS.particles.move.attract.enable) {
        for (var j = i + 1; j < pJS.particles.array.length; j++) {
          var p2 = pJS.particles.array[j];

          /* link particles */
          if (pJS.particles.line_linked.enable) {
            pJS.fn.interact.linkParticles(p, p2);
          }

          /* attract particles */
          if (pJS.particles.move.attract.enable) {
            pJS.fn.interact.attractParticles(p, p2);
          }

          /* bounce particles */
          if (pJS.particles.move.bounce) {
            pJS.fn.interact.bounceParticles(p, p2);
          }
        }
      }
    }
  };

  pJS.fn.particlesDraw = function () {

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p = pJS.particles.array[i];
      p.draw();
    }
  };

  pJS.fn.particlesEmpty = function () {
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function () {

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();

    /* restart */
    pJS.fn.vendors.start();
  };

  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function (p1, p2) {

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if (dist <= pJS.particles.line_linked.distance) {

      var opacity_line = pJS.particles.line_linked.opacity - dist / (1 / pJS.particles.line_linked.opacity) / pJS.particles.line_linked.distance;

      if (opacity_line > 0) {

        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();
      }
    }
  };

  pJS.fn.interact.attractParticles = function (p1, p2) {

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy);

    if (dist <= pJS.particles.line_linked.distance) {

      var ax = dx / (pJS.particles.move.attract.rotateX * 1000),
          ay = dy / (pJS.particles.move.attract.rotateY * 1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;
    }
  };

  pJS.fn.interact.bounceParticles = function (p1, p2) {

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx * dx + dy * dy),
        dist_p = p1.radius + p2.radius;

    if (dist <= dist_p) {
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }
  };

  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function (nb, pos) {

    pJS.tmp.pushing = true;

    for (var i = 0; i < nb; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value, {
        'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
        'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
      }));
      if (i == nb - 1) {
        if (!pJS.particles.move.enable) {
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }
  };

  pJS.fn.modes.removeParticles = function (nb) {

    pJS.particles.array.splice(0, nb);
    if (!pJS.particles.move.enable) {
      pJS.fn.particlesDraw();
    }
  };

  pJS.fn.modes.bubbleParticle = function (p) {

    /* on hover event */
    if (pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)) {
      var init = function init() {
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      };

      /* mousemove - check ratio */


      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {

        if (ratio >= 0 && pJS.interactivity.status == 'mousemove') {

          /* size */
          if (pJS.interactivity.modes.bubble.size != pJS.particles.size.value) {

            if (pJS.interactivity.modes.bubble.size > pJS.particles.size.value) {
              var size = p.radius + pJS.interactivity.modes.bubble.size * ratio;
              if (size >= 0) {
                p.radius_bubble = size;
              }
            } else {
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - dif * ratio;
              if (size > 0) {
                p.radius_bubble = size;
              } else {
                p.radius_bubble = 0;
              }
            }
          }

          /* opacity */
          if (pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value) {

            if (pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value) {
              var opacity = pJS.interactivity.modes.bubble.opacity * ratio;
              if (opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            } else {
              var opacity = p.opacity - (pJS.particles.opacity.value - pJS.interactivity.modes.bubble.opacity) * ratio;
              if (opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            }
          }
        }
      } else {
        init();
      }

      /* mouseleave */
      if (pJS.interactivity.status == 'mouseleave') {
        init();
      }
    }

    /* on click event */
    else if (pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)) {
        var process = function process(bubble_param, particles_param, p_obj_bubble, p_obj, id) {

          if (bubble_param != particles_param) {

            if (!pJS.tmp.bubble_duration_end) {
              if (dist_mouse <= pJS.interactivity.modes.bubble.distance) {
                if (p_obj_bubble != undefined) var obj = p_obj_bubble;else var obj = p_obj;
                if (obj != bubble_param) {
                  var value = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration;
                  if (id == 'size') p.radius_bubble = value;
                  if (id == 'opacity') p.opacity_bubble = value;
                }
              } else {
                if (id == 'size') p.radius_bubble = undefined;
                if (id == 'opacity') p.opacity_bubble = undefined;
              }
            } else {
              if (p_obj_bubble != undefined) {
                var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration,
                    dif = bubble_param - value_tmp;
                value = bubble_param + dif;
                if (id == 'size') p.radius_bubble = value;
                if (id == 'opacity') p.opacity_bubble = value;
              }
            }
          }
        };

        if (pJS.tmp.bubble_clicking) {
          var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
              dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
              dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse),
              time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time) / 1000;

          if (time_spent > pJS.interactivity.modes.bubble.duration) {
            pJS.tmp.bubble_duration_end = true;
          }

          if (time_spent > pJS.interactivity.modes.bubble.duration * 2) {
            pJS.tmp.bubble_clicking = false;
            pJS.tmp.bubble_duration_end = false;
          }
        }

        if (pJS.tmp.bubble_clicking) {
          /* size */
          process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
          /* opacity */
          process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
        }
      }
  };

  pJS.fn.modes.repulseParticle = function (p) {

    if (pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

      var normVec = {
        x: dx_mouse / dist_mouse,
        y: dy_mouse / dist_mouse
      },
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);

      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      };

      if (pJS.particles.move.out_mode == 'bounce') {
        if (pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if (pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      } else {
        p.x = pos.x;
        p.y = pos.y;
      }
    } else if (pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if (!pJS.tmp.repulse_finish) {
        pJS.tmp.repulse_count++;
        if (pJS.tmp.repulse_count == pJS.particles.array.length) {
          pJS.tmp.repulse_finish = true;
        }
      }

      if (pJS.tmp.repulse_clicking) {
        var process = function process() {

          var f = Math.atan2(dy, dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if (pJS.particles.move.out_mode == 'bounce') {
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            };
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }
        };

        // default


        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance / 6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx * dx + dy * dy;

        var force = -repulseRadius / d * 1;

        if (d <= repulseRadius) {
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }

      } else {

        if (pJS.tmp.repulse_clicking == false) {

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        }
      }
    }
  };

  pJS.fn.modes.grabParticle = function (p) {

    if (pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if (dist_mouse <= pJS.interactivity.modes.grab.distance) {

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS.interactivity.modes.grab.line_linked.opacity) / pJS.interactivity.modes.grab.distance;

        if (opacity_line > 0) {

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba(' + color_line.r + ',' + color_line.g + ',' + color_line.b + ',' + opacity_line + ')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */

          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();
        }
      }
    }
  };

  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function () {

    /* events target element */
    if (pJS.interactivity.detect_on == 'window') {
      pJS.interactivity.el = window;
    } else {
      pJS.interactivity.el = pJS.canvas.el;
    }

    /* detect mouse pos - on hover / click event */
    if (pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable) {

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function (e) {

        if (pJS.interactivity.el == window) {
          var pos_x = e.clientX,
              pos_y = e.clientY;
        } else {
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if (pJS.tmp.retina) {
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';
      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function (e) {

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';
      });
    }

    /* on click event */
    if (pJS.interactivity.events.onclick.enable) {

      pJS.interactivity.el.addEventListener('click', function () {

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if (pJS.interactivity.events.onclick.enable) {

          switch (pJS.interactivity.events.onclick.mode) {

            case 'push':
              if (pJS.particles.move.enable) {
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              } else {
                if (pJS.interactivity.modes.push.particles_nb == 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                } else if (pJS.interactivity.modes.push.particles_nb > 1) {
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
              break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
              break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
              break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function () {
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration * 1000);
              break;

          }
        }
      });
    }
  };

  pJS.fn.vendors.densityAutoParticles = function () {

    if (pJS.particles.number.density.enable) {

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if (pJS.tmp.retina) {
        area = area / (pJS.canvas.pxratio * 2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if (missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));else pJS.fn.modes.removeParticles(missing_particles);
    }
  };

  pJS.fn.vendors.checkOverlap = function (p1, position) {
    for (var i = 0; i < pJS.particles.array.length; i++) {
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= p1.radius + p2.radius) {
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };

  pJS.fn.vendors.createSvgImg = function (p) {

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
      if (p.color.rgb) {
        var color_value = 'rgba(' + p.color.rgb.r + ',' + p.color.rgb.g + ',' + p.color.rgb.b + ',' + p.opacity + ')';
      } else {
        var color_value = 'hsla(' + p.color.hsl.h + ',' + p.color.hsl.s + '%,' + p.color.hsl.l + '%,' + p.opacity + ')';
      }
      return color_value;
    });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {
      type: 'image/svg+xml;charset=utf-8'
    }),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function () {
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;
  };

  pJS.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };

  pJS.fn.vendors.drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0, 0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength, 0);
      c.translate(sideLength, 0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();
  };

  pJS.fn.vendors.exportImg = function () {
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };

  pJS.fn.vendors.loadImg = function (type) {

    pJS.tmp.img_error = undefined;

    if (pJS.particles.shape.image.src != '') {

      if (type == 'svg') {

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            } else {
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        };
        xhr.send();
      } else {

        var img = new Image();
        img.addEventListener('load', function () {
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;
      }
    } else {
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }
  };

  pJS.fn.vendors.draw = function () {

    if (pJS.particles.shape.type == 'image') {

      if (pJS.tmp.img_type == 'svg') {

        if (pJS.tmp.count_svg >= pJS.particles.number.value) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          //console.log('still loading...');
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      } else {

        if (pJS.tmp.img_obj != undefined) {
          pJS.fn.particlesDraw();
          if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        } else {
          if (!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }
      }
    } else {
      pJS.fn.particlesDraw();
      if (!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }
  };

  pJS.fn.vendors.checkBeforeDraw = function () {

    // if shape is image
    if (pJS.particles.shape.type == 'image') {

      if (pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined) {
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      } else {
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if (!pJS.tmp.img_error) {
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
      }
    } else {
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }
  };

  pJS.fn.vendors.init = function () {

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);
  };

  pJS.fn.vendors.start = function () {

    if (isInArray('image', pJS.particles.shape.type)) {
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    } else {
      pJS.fn.vendors.checkBeforeDraw();
    }
  };

  /* ---------- pJS - start ------------ */

  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function deepExtendFunction(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      deepExtendFunction(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
}();

window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();

function hexToRgb(hex) {
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function (tag_id, params) {

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if (typeof tag_id != 'string') {
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if (!tag_id) {
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if (exist_canvas.length) {
    while (exist_canvas.length > 0) {
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if (canvas != null) {
    pJSDom.push(new pJS(tag_id, params));
  }
};

window.particlesJS.load = function (tag_id, path_config_json, callback) {

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if (callback) callback();
      } else {
        console.log('Error pJS - XMLHttpRequest status: ' + xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();
};

window.$ = _jquery2.default;

(0, _jquery2.default)(document).ready(function () {
  particlesJS.load('particles-canvas', 'wp-content/themes/liamob-theme/dist/assets/particlesjs-config.json', function () {});
});

/***/ }),
/* 5 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjlhM2Y4MWI5Mjg3MDBlZWZmMWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9wYXJ0aWNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbHQuanMvc3JjL3RpbHQuanF1ZXJ5LmpzIl0sIm5hbWVzIjpbInBKUyIsInRhZ19pZCIsInBhcmFtcyIsImNhbnZhc19lbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhbnZhcyIsImVsIiwidyIsIm9mZnNldFdpZHRoIiwiaCIsIm9mZnNldEhlaWdodCIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsInNoYXBlIiwidHlwZSIsInN0cm9rZSIsIndpZHRoIiwicG9seWdvbiIsIm5iX3NpZGVzIiwiaW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm1vdmUiLCJkaXJlY3Rpb24iLCJzdHJhaWdodCIsIm91dF9tb2RlIiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiYXJyYXkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsIm1vdXNlIiwicmV0aW5hX2RldGVjdCIsImZuIiwiaW50ZXJhY3QiLCJ2ZW5kb3JzIiwidG1wIiwiT2JqZWN0IiwiZGVlcEV4dGVuZCIsIm9iaiIsInNpemVfdmFsdWUiLCJzaXplX2FuaW1fc3BlZWQiLCJtb3ZlX3NwZWVkIiwibGluZV9saW5rZWRfZGlzdGFuY2UiLCJsaW5lX2xpbmtlZF93aWR0aCIsIm1vZGVfZ3JhYl9kaXN0YW5jZSIsIm1vZGVfYnViYmxlX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfc2l6ZSIsIm1vZGVfcmVwdWxzZV9kaXN0YW5jZSIsInJldGluYUluaXQiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwicHhyYXRpbyIsInJldGluYSIsImNhbnZhc0luaXQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzU2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNsZXNFbXB0eSIsInBhcnRpY2xlc0NyZWF0ZSIsInBhcnRpY2xlc0RyYXciLCJkZW5zaXR5QXV0b1BhcnRpY2xlcyIsImNhbnZhc1BhaW50IiwiZmlsbFJlY3QiLCJjYW52YXNDbGVhciIsImNsZWFyUmVjdCIsInBhcnRpY2xlIiwicG9zaXRpb24iLCJyYWRpdXMiLCJNYXRoIiwic2l6ZV9zdGF0dXMiLCJ2cyIsIngiLCJ5IiwiY2hlY2tPdmVybGFwIiwiQXJyYXkiLCJjb2xvcl9zZWxlY3RlZCIsImZsb29yIiwibGVuZ3RoIiwicmdiIiwiaGV4VG9SZ2IiLCJyIiwidW5kZWZpbmVkIiwiZyIsImIiLCJzIiwibCIsImhzbCIsIm9wYWNpdHlfc3RhdHVzIiwidm8iLCJ2ZWxiYXNlIiwidngiLCJ2eSIsInZ4X2kiLCJ2eV9pIiwic2hhcGVfdHlwZSIsInNoYXBlX3NlbGVjdGVkIiwic2giLCJpbWciLCJyYXRpbyIsImltZ190eXBlIiwic291cmNlX3N2ZyIsImNyZWF0ZVN2Z0ltZyIsInB1c2hpbmciLCJsb2FkZWQiLCJwcm90b3R5cGUiLCJkcmF3IiwicCIsInJhZGl1c19idWJibGUiLCJvcGFjaXR5X2J1YmJsZSIsImNvbG9yX3ZhbHVlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJyZWN0IiwiZHJhd1NoYXBlIiwiZHJhd0ltYWdlIiwiaW1nX29iaiIsImNsb3NlUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiZmlsbCIsImkiLCJwYXJ0aWNsZXNVcGRhdGUiLCJtcyIsIm5ld19wb3MiLCJ4X2xlZnQiLCJ4X3JpZ2h0IiwieV90b3AiLCJ5X2JvdHRvbSIsImlzSW5BcnJheSIsImdyYWJQYXJ0aWNsZSIsImJ1YmJsZVBhcnRpY2xlIiwicmVwdWxzZVBhcnRpY2xlIiwiaiIsInAyIiwibGlua1BhcnRpY2xlcyIsImF0dHJhY3RQYXJ0aWNsZXMiLCJib3VuY2VQYXJ0aWNsZXMiLCJwYXJ0aWNsZXNSZWZyZXNoIiwiY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrQW5pbUZyYW1lIiwiZHJhd0FuaW1GcmFtZSIsImNvdW50X3N2ZyIsInN0YXJ0IiwicDEiLCJkeCIsImR5IiwiZGlzdCIsInNxcnQiLCJvcGFjaXR5X2xpbmUiLCJjb2xvcl9saW5lIiwiY29sb3JfcmdiX2xpbmUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJheCIsImF5IiwiZGlzdF9wIiwicHVzaFBhcnRpY2xlcyIsIm5iIiwicG9zIiwicG9zX3giLCJwb3NfeSIsInJlbW92ZVBhcnRpY2xlcyIsInNwbGljZSIsImluaXQiLCJkeF9tb3VzZSIsImR5X21vdXNlIiwiZGlzdF9tb3VzZSIsInN0YXR1cyIsImRpZiIsInByb2Nlc3MiLCJidWJibGVfcGFyYW0iLCJwYXJ0aWNsZXNfcGFyYW0iLCJwX29ial9idWJibGUiLCJwX29iaiIsImlkIiwiYnViYmxlX2R1cmF0aW9uX2VuZCIsInRpbWVfc3BlbnQiLCJ2YWx1ZV90bXAiLCJidWJibGVfY2xpY2tpbmciLCJjbGlja19wb3NfeCIsImNsaWNrX3Bvc195IiwiRGF0ZSIsImdldFRpbWUiLCJjbGlja190aW1lIiwibm9ybVZlYyIsInJlcHVsc2VSYWRpdXMiLCJ2ZWxvY2l0eSIsInJlcHVsc2VGYWN0b3IiLCJjbGFtcCIsInBvdyIsInJlcHVsc2VfZmluaXNoIiwicmVwdWxzZV9jb3VudCIsInJlcHVsc2VfY2xpY2tpbmciLCJmIiwiYXRhbjIiLCJmb3JjZSIsImNvcyIsInNpbiIsImQiLCJldmVudHNMaXN0ZW5lcnMiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNldFRpbWVvdXQiLCJhcmVhIiwibmJfcGFydGljbGVzIiwibWlzc2luZ19wYXJ0aWNsZXMiLCJhYnMiLCJzdmdYbWwiLCJyZ2JIZXgiLCJjb2xvcmVkU3ZnWG1sIiwicmVwbGFjZSIsIm0iLCJzdmciLCJCbG9iIiwiRE9NVVJMIiwiVVJMIiwid2Via2l0VVJMIiwidXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiSW1hZ2UiLCJyZXZva2VPYmplY3RVUkwiLCJkZXN0cm95cEpTIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwSlNEb20iLCJjIiwic3RhcnRYIiwic3RhcnRZIiwic2lkZUxlbmd0aCIsInNpZGVDb3VudE51bWVyYXRvciIsInNpZGVDb3VudERlbm9taW5hdG9yIiwic2lkZUNvdW50IiwiZGVjaW1hbFNpZGVzIiwiaW50ZXJpb3JBbmdsZURlZ3JlZXMiLCJpbnRlcmlvckFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJleHBvcnRJbWciLCJvcGVuIiwidG9EYXRhVVJMIiwibG9hZEltZyIsImltZ19lcnJvciIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZGF0YSIsInJlYWR5U3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwicmVzcG9uc2UiLCJjaGVja0JlZm9yZURyYXciLCJjb25zb2xlIiwibG9nIiwic2VuZCIsInJlcXVlc3RBbmltRnJhbWUiLCJjaGVjayIsInN1YnN0ciIsImRlZXBFeHRlbmRGdW5jdGlvbiIsImRlc3RpbmF0aW9uIiwic291cmNlIiwicHJvcGVydHkiLCJjb25zdHJ1Y3RvciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwid2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiaGV4Iiwic2hvcnRoYW5kUmVnZXgiLCJyZXN1bHQiLCJleGVjIiwicGFyc2VJbnQiLCJtaW4iLCJtYXgiLCJpbmRleE9mIiwicGFydGljbGVzSlMiLCJwSlNfdGFnIiwiZ2V0RWxlbWVudEJ5SWQiLCJwSlNfY2FudmFzX2NsYXNzIiwiZXhpc3RfY2FudmFzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJsb2FkIiwicGF0aF9jb25maWdfanNvbiIsIkpTT04iLCJwYXJzZSIsIiQiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzJoREE7Ozs7QUFDQTs7OztBQTVoREE7Ozs7Ozs7OztBQVNBLElBQUlBLE1BQU0sYUFB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QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxHIiwiZmlsZSI6InBhcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI5YTNmODFiOTI4NzAwZWVmZjFmIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyogQXV0aG9yIDogVmluY2VudCBHYXJyZWF1ICAtIHZpbmNlbnRnYXJyZWF1LmNvbVxuLyogTUlUIGxpY2Vuc2U6IGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbi8qIERlbW8gLyBHZW5lcmF0b3IgOiB2aW5jZW50Z2FycmVhdS5jb20vcGFydGljbGVzLmpzXG4vKiBHaXRIdWIgOiBnaXRodWIuY29tL1ZpbmNlbnRHYXJyZWF1L3BhcnRpY2xlcy5qc1xuLyogSG93IHRvIHVzZT8gOiBDaGVjayB0aGUgR2l0SHViIFJFQURNRVxuLyogdjIuMC4wXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG52YXIgcEpTID0gZnVuY3Rpb24gKHRhZ19pZCwgcGFyYW1zKSB7XG5cbiAgdmFyIGNhbnZhc19lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgdGFnX2lkICsgJyA+IC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsJyk7XG5cbiAgLyogcGFydGljbGVzLmpzIHZhcmlhYmxlcyB3aXRoIGRlZmF1bHQgdmFsdWVzICovXG4gIHRoaXMucEpTID0ge1xuICAgIGNhbnZhczoge1xuICAgICAgZWw6IGNhbnZhc19lbCxcbiAgICAgIHc6IGNhbnZhc19lbC5vZmZzZXRXaWR0aCxcbiAgICAgIGg6IGNhbnZhc19lbC5vZmZzZXRIZWlnaHRcbiAgICB9LFxuICAgIHBhcnRpY2xlczoge1xuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIHZhbHVlOiA0MDAsXG4gICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVfYXJlYTogODAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb2xvcjoge1xuICAgICAgICB2YWx1ZTogJyNmZmYnXG4gICAgICB9LFxuICAgICAgc2hhcGU6IHtcbiAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgIHN0cm9rZToge1xuICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgIGNvbG9yOiAnI2ZmMDAwMCdcbiAgICAgICAgfSxcbiAgICAgICAgcG9seWdvbjoge1xuICAgICAgICAgIG5iX3NpZGVzOiA1XG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgc3JjOiAnJyxcbiAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogMixcbiAgICAgICAgICBvcGFjaXR5X21pbjogMCxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICB2YWx1ZTogMjAsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIGFuaW06IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHNwZWVkOiAyMCxcbiAgICAgICAgICBzaXplX21pbjogMCxcbiAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBkaXN0YW5jZTogMTAwLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB3aWR0aDogMVxuICAgICAgfSxcbiAgICAgIG1vdmU6IHtcbiAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMixcbiAgICAgICAgZGlyZWN0aW9uOiAnbm9uZScsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgb3V0X21vZGU6ICdvdXQnLFxuICAgICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgICBhdHRyYWN0OiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICByb3RhdGVYOiAzMDAwLFxuICAgICAgICAgIHJvdGF0ZVk6IDMwMDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFycmF5OiBbXVxuICAgIH0sXG4gICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgZGV0ZWN0X29uOiAnY2FudmFzJyxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBvbmhvdmVyOiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIG1vZGU6ICdncmFiJ1xuICAgICAgICB9LFxuICAgICAgICBvbmNsaWNrOiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIG1vZGU6ICdwdXNoJ1xuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IHRydWVcbiAgICAgIH0sXG4gICAgICBtb2Rlczoge1xuICAgICAgICBncmFiOiB7XG4gICAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYnViYmxlOiB7XG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICBzaXplOiA4MCxcbiAgICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICAgIH0sXG4gICAgICAgIHJlcHVsc2U6IHtcbiAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjRcbiAgICAgICAgfSxcbiAgICAgICAgcHVzaDoge1xuICAgICAgICAgIHBhcnRpY2xlc19uYjogNFxuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IHtcbiAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1vdXNlOiB7fVxuICAgIH0sXG4gICAgcmV0aW5hX2RldGVjdDogZmFsc2UsXG4gICAgZm46IHtcbiAgICAgIGludGVyYWN0OiB7fSxcbiAgICAgIG1vZGVzOiB7fSxcbiAgICAgIHZlbmRvcnM6IHt9XG4gICAgfSxcbiAgICB0bXA6IHt9XG4gIH07XG5cbiAgdmFyIHBKUyA9IHRoaXMucEpTO1xuXG4gIC8qIHBhcmFtcyBzZXR0aW5ncyAqL1xuICBpZiAocGFyYW1zKSB7XG4gICAgT2JqZWN0LmRlZXBFeHRlbmQocEpTLCBwYXJhbXMpO1xuICB9XG5cbiAgcEpTLnRtcC5vYmogPSB7XG4gICAgc2l6ZV92YWx1ZTogcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlLFxuICAgIHNpemVfYW5pbV9zcGVlZDogcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQsXG4gICAgbW92ZV9zcGVlZDogcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLFxuICAgIGxpbmVfbGlua2VkX2Rpc3RhbmNlOiBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlLFxuICAgIGxpbmVfbGlua2VkX3dpZHRoOiBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLFxuICAgIG1vZGVfZ3JhYl9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSxcbiAgICBtb2RlX2J1YmJsZV9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlLFxuICAgIG1vZGVfYnViYmxlX3NpemU6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxuICAgIG1vZGVfcmVwdWxzZV9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZVxuICB9O1xuXG5cbiAgcEpTLmZuLnJldGluYUluaXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAocEpTLnJldGluYV9kZXRlY3QgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKSB7XG4gICAgICBwSlMuY2FudmFzLnB4cmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgIHBKUy50bXAucmV0aW5hID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gMTtcbiAgICAgIHBKUy50bXAucmV0aW5hID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcEpTLmNhbnZhcy53ID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRXaWR0aCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodCAqIHBKUy5jYW52YXMucHhyYXRpbztcblxuICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSA9IHBKUy50bXAub2JqLnNpemVfdmFsdWUgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgPSBwSlMudG1wLm9iai5zaXplX2FuaW1fc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkID0gcEpTLnRtcC5vYmoubW92ZV9zcGVlZCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubGluZV9saW5rZWRfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfZ3JhYl9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoID0gcEpTLnRtcC5vYmoubGluZV9saW5rZWRfd2lkdGggKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9zaXplICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX3JlcHVsc2VfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG5cbiAgfTtcblxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gY2FudmFzIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5jYW52YXNJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHBKUy5jYW52YXMuY3R4ID0gcEpTLmNhbnZhcy5lbC5nZXRDb250ZXh0KCcyZCcpO1xuICB9O1xuXG4gIHBKUy5mbi5jYW52YXNTaXplID0gZnVuY3Rpb24gKCkge1xuXG4gICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcbiAgICBwSlMuY2FudmFzLmVsLmhlaWdodCA9IHBKUy5jYW52YXMuaDtcblxuICAgIGlmIChwSlMgJiYgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLnJlc2l6ZSkge1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIC8qIHJlc2l6ZSBjYW52YXMgKi9cbiAgICAgICAgaWYgKHBKUy50bXAucmV0aW5hKSB7XG4gICAgICAgICAgcEpTLmNhbnZhcy53ICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgICBwSlMuY2FudmFzLmggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcbiAgICAgICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XG5cbiAgICAgICAgLyogcmVwYWludCBjYW52YXMgb24gYW5pbSBkaXNhYmxlZCAqL1xuICAgICAgICBpZiAoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlKCk7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZGVuc2l0eSBwYXJ0aWNsZXMgZW5hYmxlZCAqL1xuICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuXG4gICAgICB9KTtcblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLmNhbnZhc1BhaW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHBKUy5jYW52YXMuY3R4LmZpbGxSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcbiAgfTtcblxuICBwSlMuZm4uY2FudmFzQ2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcEpTLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcbiAgfTtcblxuXG4gIC8qIC0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIC0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLnBhcnRpY2xlID0gZnVuY3Rpb24gKGNvbG9yLCBvcGFjaXR5LCBwb3NpdGlvbikge1xuXG4gICAgLyogc2l6ZSAqL1xuICAgIHRoaXMucmFkaXVzID0gKHBKUy5wYXJ0aWNsZXMuc2l6ZS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBwSlMucGFydGljbGVzLnNpemUudmFsdWU7XG4gICAgaWYgKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSkge1xuICAgICAgdGhpcy5zaXplX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgdGhpcy52cyA9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkIC8gMTAwO1xuICAgICAgaWYgKCFwSlMucGFydGljbGVzLnNpemUuYW5pbS5zeW5jKSB7XG4gICAgICAgIHRoaXMudnMgPSB0aGlzLnZzICogTWF0aC5yYW5kb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBwb3NpdGlvbiAqL1xuICAgIHRoaXMueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgdGhpcy55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcblxuICAgIC8qIGNoZWNrIHBvc2l0aW9uICAtIGludG8gdGhlIGNhbnZhcyAqL1xuICAgIGlmICh0aGlzLnggPiBwSlMuY2FudmFzLncgLSB0aGlzLnJhZGl1cyAqIDIpIHRoaXMueCA9IHRoaXMueCAtIHRoaXMucmFkaXVzO1xuICAgIGVsc2UgaWYgKHRoaXMueCA8IHRoaXMucmFkaXVzICogMikgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5yYWRpdXM7XG4gICAgaWYgKHRoaXMueSA+IHBKUy5jYW52YXMuaCAtIHRoaXMucmFkaXVzICogMikgdGhpcy55ID0gdGhpcy55IC0gdGhpcy5yYWRpdXM7XG4gICAgZWxzZSBpZiAodGhpcy55IDwgdGhpcy5yYWRpdXMgKiAyKSB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnJhZGl1cztcblxuICAgIC8qIGNoZWNrIHBvc2l0aW9uIC0gYXZvaWQgb3ZlcmxhcCAqL1xuICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKSB7XG4gICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAodGhpcywgcG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8qIGNvbG9yICovXG4gICAgdGhpcy5jb2xvciA9IHt9O1xuICAgIGlmICh0eXBlb2YgKGNvbG9yLnZhbHVlKSA9PSAnb2JqZWN0Jykge1xuXG4gICAgICBpZiAoY29sb3IudmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgY29sb3Jfc2VsZWN0ZWQgPSBjb2xvci52YWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwSlMucGFydGljbGVzLmNvbG9yLnZhbHVlLmxlbmd0aCldO1xuICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKGNvbG9yX3NlbGVjdGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb2xvci52YWx1ZS5yICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5nICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5iICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuY29sb3IucmdiID0ge1xuICAgICAgICAgICAgcjogY29sb3IudmFsdWUucixcbiAgICAgICAgICAgIGc6IGNvbG9yLnZhbHVlLmcsXG4gICAgICAgICAgICBiOiBjb2xvci52YWx1ZS5iXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjb2xvci52YWx1ZS5oICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5zICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5sICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuY29sb3IuaHNsID0ge1xuICAgICAgICAgICAgaDogY29sb3IudmFsdWUuaCxcbiAgICAgICAgICAgIHM6IGNvbG9yLnZhbHVlLnMsXG4gICAgICAgICAgICBsOiBjb2xvci52YWx1ZS5sXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGNvbG9yLnZhbHVlID09ICdyYW5kb20nKSB7XG4gICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcbiAgICAgICAgcjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXG4gICAgICAgIGc6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxuICAgICAgICBiOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIChjb2xvci52YWx1ZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgIHRoaXMuY29sb3IucmdiID0gaGV4VG9SZ2IodGhpcy5jb2xvci52YWx1ZSk7XG4gICAgfVxuXG4gICAgLyogb3BhY2l0eSAqL1xuICAgIHRoaXMub3BhY2l0eSA9IChwSlMucGFydGljbGVzLm9wYWNpdHkucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlO1xuICAgIGlmIChwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpIHtcbiAgICAgIHRoaXMub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHRoaXMudm8gPSBwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zcGVlZCAvIDEwMDtcbiAgICAgIGlmICghcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3luYykge1xuICAgICAgICB0aGlzLnZvID0gdGhpcy52byAqIE1hdGgucmFuZG9tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogYW5pbWF0aW9uIC0gdmVsb2NpdHkgZm9yIHNwZWVkICovXG4gICAgdmFyIHZlbGJhc2UgPSB7fVxuICAgIHN3aXRjaCAocEpTLnBhcnRpY2xlcy5tb3ZlLmRpcmVjdGlvbikge1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgdmVsYmFzZSA9IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IC0xXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHtcbiAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgeTogLTAuNVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHtcbiAgICAgICAgICB4OiAxLFxuICAgICAgICAgIHk6IC0wXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLXJpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHtcbiAgICAgICAgICB4OiAwLjUsXG4gICAgICAgICAgeTogMC41XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdmVsYmFzZSA9IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDFcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7XG4gICAgICAgICAgeDogLTAuNSxcbiAgICAgICAgICB5OiAxXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7XG4gICAgICAgICAgeDogLTEsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcC1sZWZ0JzpcbiAgICAgICAgdmVsYmFzZSA9IHtcbiAgICAgICAgICB4OiAtMC41LFxuICAgICAgICAgIHk6IC0wLjVcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2ZWxiYXNlID0ge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAocEpTLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0KSB7XG4gICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54O1xuICAgICAgdGhpcy52eSA9IHZlbGJhc2UueTtcbiAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUucmFuZG9tKSB7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ICogKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIChNYXRoLnJhbmRvbSgpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52eCA9IHZlbGJhc2UueCArIE1hdGgucmFuZG9tKCkgLSAwLjU7XG4gICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55ICsgTWF0aC5yYW5kb20oKSAtIDAuNTtcbiAgICB9XG5cbiAgICAvLyB2YXIgdGhldGEgPSAyLjAgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICAvLyB0aGlzLnZ4ID0gTWF0aC5jb3ModGhldGEpO1xuICAgIC8vIHRoaXMudnkgPSBNYXRoLnNpbih0aGV0YSk7XG5cbiAgICB0aGlzLnZ4X2kgPSB0aGlzLnZ4O1xuICAgIHRoaXMudnlfaSA9IHRoaXMudnk7XG5cblxuXG4gICAgLyogaWYgc2hhcGUgaXMgaW1hZ2UgKi9cblxuICAgIHZhciBzaGFwZV90eXBlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlO1xuICAgIGlmICh0eXBlb2YgKHNoYXBlX3R5cGUpID09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoc2hhcGVfdHlwZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIHZhciBzaGFwZV9zZWxlY3RlZCA9IHNoYXBlX3R5cGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hhcGVfdHlwZS5sZW5ndGgpXTtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3NlbGVjdGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNoYXBlID0gc2hhcGVfdHlwZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaGFwZSA9PSAnaW1hZ2UnKSB7XG4gICAgICB2YXIgc2ggPSBwSlMucGFydGljbGVzLnNoYXBlO1xuICAgICAgdGhpcy5pbWcgPSB7XG4gICAgICAgIHNyYzogc2guaW1hZ2Uuc3JjLFxuICAgICAgICByYXRpbzogc2guaW1hZ2Uud2lkdGggLyBzaC5pbWFnZS5oZWlnaHRcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pbWcucmF0aW8pIHRoaXMuaW1nLnJhdGlvID0gMTtcbiAgICAgIGlmIChwSlMudG1wLmltZ190eXBlID09ICdzdmcnICYmIHBKUy50bXAuc291cmNlX3N2ZyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nKHRoaXMpO1xuICAgICAgICBpZiAocEpTLnRtcC5wdXNoaW5nKSB7XG4gICAgICAgICAgdGhpcy5pbWcubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuXG4gIH07XG5cblxuICBwSlMuZm4ucGFydGljbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgcCA9IHRoaXM7XG5cbiAgICBpZiAocC5yYWRpdXNfYnViYmxlICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzX2J1YmJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzO1xuICAgIH1cblxuICAgIGlmIChwLm9wYWNpdHlfYnViYmxlICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHlfYnViYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eTtcbiAgICB9XG5cbiAgICBpZiAocC5jb2xvci5yZ2IpIHtcbiAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcgKyBwLmNvbG9yLnJnYi5yICsgJywnICsgcC5jb2xvci5yZ2IuZyArICcsJyArIHAuY29sb3IucmdiLmIgKyAnLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnICsgcC5jb2xvci5oc2wuaCArICcsJyArIHAuY29sb3IuaHNsLnMgKyAnJSwnICsgcC5jb2xvci5oc2wubCArICclLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgIH1cblxuICAgIHBKUy5jYW52YXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yX3ZhbHVlO1xuICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgc3dpdGNoIChwLnNoYXBlKSB7XG5cbiAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmFyYyhwLngsIHAueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZWRnZSc6XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnJlY3QocC54IC0gcmFkaXVzLCBwLnkgLSByYWRpdXMsIHJhZGl1cyAqIDIsIHJhZGl1cyAqIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAndHJpYW5nbGUnOlxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUocEpTLmNhbnZhcy5jdHgsIHAueCAtIHJhZGl1cywgcC55ICsgcmFkaXVzIC8gMS42NiwgcmFkaXVzICogMiwgMywgMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxuICAgICAgICAgIHAueCAtIHJhZGl1cyAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMgLyAzLjUpLCAvLyBzdGFydFhcbiAgICAgICAgICBwLnkgLSByYWRpdXMgLyAoMi42NiAvIDMuNSksIC8vIHN0YXJ0WVxuICAgICAgICAgIHJhZGl1cyAqIDIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gMyksIC8vIHNpZGVMZW5ndGhcbiAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxuICAgICAgICAgIDEgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0YXInOlxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUoXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgsXG4gICAgICAgICAgcC54IC0gcmFkaXVzICogMiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMgLyA0KSwgLy8gc3RhcnRYXG4gICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIgKiAyLjY2IC8gMy41KSwgLy8gc3RhcnRZXG4gICAgICAgICAgcmFkaXVzICogMiAqIDIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gMyksIC8vIHNpZGVMZW5ndGhcbiAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxuICAgICAgICAgIDIgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2ltYWdlJzpcblxuICAgICAgICBmdW5jdGlvbiBkcmF3KCkge1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGltZ19vYmosXG4gICAgICAgICAgICBwLnggLSByYWRpdXMsXG4gICAgICAgICAgICBwLnkgLSByYWRpdXMsXG4gICAgICAgICAgICByYWRpdXMgKiAyLFxuICAgICAgICAgICAgcmFkaXVzICogMiAvIHAuaW1nLnJhdGlvXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwSlMudG1wLmltZ190eXBlID09ICdzdmcnKSB7XG4gICAgICAgICAgdmFyIGltZ19vYmogPSBwLmltZy5vYmo7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGltZ19vYmogPSBwSlMudG1wLmltZ19vYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1nX29iaikge1xuICAgICAgICAgIGRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICBpZiAocEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGggPiAwKSB7XG4gICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLmNvbG9yO1xuICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGg7XG4gICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLmN0eC5maWxsKCk7XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZTsgaSsrKSB7XG4gICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2gobmV3IHBKUy5mbi5wYXJ0aWNsZShwSlMucGFydGljbGVzLmNvbG9yLCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpKTtcbiAgICB9XG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAvKiB0aGUgcGFydGljbGUgKi9cbiAgICAgIHZhciBwID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcblxuICAgICAgLy8gdmFyIGQgPSAoIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLnggKSAqIGR4ICsgKCBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55ICkgKiBkeTtcbiAgICAgIC8vIHZhciBmID0gLUJBTkdfU0laRSAvIGQ7XG4gICAgICAvLyBpZiAoIGQgPCBCQU5HX1NJWkUgKSB7XG4gICAgICAvLyAgICAgdmFyIHQgPSBNYXRoLmF0YW4yKCBkeSwgZHggKTtcbiAgICAgIC8vICAgICBwLnZ4ID0gZiAqIE1hdGguY29zKHQpO1xuICAgICAgLy8gICAgIHAudnkgPSBmICogTWF0aC5zaW4odCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8qIG1vdmUgdGhlIHBhcnRpY2xlICovXG4gICAgICBpZiAocEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xuICAgICAgICB2YXIgbXMgPSBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQgLyAyO1xuICAgICAgICBwLnggKz0gcC52eCAqIG1zO1xuICAgICAgICBwLnkgKz0gcC52eSAqIG1zO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2Ugb3BhY2l0eSBzdGF0dXMgKi9cbiAgICAgIGlmIChwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpIHtcbiAgICAgICAgaWYgKHAub3BhY2l0eV9zdGF0dXMgPT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChwLm9wYWNpdHkgPj0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSBwLm9wYWNpdHlfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgcC5vcGFjaXR5ICs9IHAudm87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHAub3BhY2l0eSA8PSBwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5vcGFjaXR5X21pbikgcC5vcGFjaXR5X3N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgcC5vcGFjaXR5IC09IHAudm87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAub3BhY2l0eSA8IDApIHAub3BhY2l0eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoYW5nZSBzaXplICovXG4gICAgICBpZiAocEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlKSB7XG4gICAgICAgIGlmIChwLnNpemVfc3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICBpZiAocC5yYWRpdXMgPj0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKSBwLnNpemVfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgcC5yYWRpdXMgKz0gcC52cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAocC5yYWRpdXMgPD0gcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc2l6ZV9taW4pIHAuc2l6ZV9zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIHAucmFkaXVzIC09IHAudnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHAucmFkaXVzIDwgMCkgcC5yYWRpdXMgPSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2UgcGFydGljbGUgcG9zaXRpb24gaWYgaXQgaXMgb3V0IG9mIGNhbnZhcyAqL1xuICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJykge1xuICAgICAgICB2YXIgbmV3X3BvcyA9IHtcbiAgICAgICAgICB4X2xlZnQ6IHAucmFkaXVzLFxuICAgICAgICAgIHhfcmlnaHQ6IHBKUy5jYW52YXMudyxcbiAgICAgICAgICB5X3RvcDogcC5yYWRpdXMsXG4gICAgICAgICAgeV9ib3R0b206IHBKUy5jYW52YXMuaFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3X3BvcyA9IHtcbiAgICAgICAgICB4X2xlZnQ6IC1wLnJhZGl1cyxcbiAgICAgICAgICB4X3JpZ2h0OiBwSlMuY2FudmFzLncgKyBwLnJhZGl1cyxcbiAgICAgICAgICB5X3RvcDogLXAucmFkaXVzLFxuICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmggKyBwLnJhZGl1c1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwLnggLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykge1xuICAgICAgICBwLnggPSBuZXdfcG9zLnhfbGVmdDtcbiAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgIH0gZWxzZSBpZiAocC54ICsgcC5yYWRpdXMgPCAwKSB7XG4gICAgICAgIHAueCA9IG5ld19wb3MueF9yaWdodDtcbiAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgIH1cbiAgICAgIGlmIChwLnkgLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkge1xuICAgICAgICBwLnkgPSBuZXdfcG9zLnlfdG9wO1xuICAgICAgICBwLnggPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgICAgfSBlbHNlIGlmIChwLnkgKyBwLnJhZGl1cyA8IDApIHtcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X2JvdHRvbTtcbiAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgIH1cblxuICAgICAgLyogb3V0IG9mIGNhbnZhcyBtb2RlcyAqL1xuICAgICAgc3dpdGNoIChwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUpIHtcbiAgICAgICAgY2FzZSAnYm91bmNlJzpcbiAgICAgICAgICBpZiAocC54ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpIHAudnggPSAtcC52eDtcbiAgICAgICAgICBlbHNlIGlmIChwLnggLSBwLnJhZGl1cyA8IDApIHAudnggPSAtcC52eDtcbiAgICAgICAgICBpZiAocC55ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHAudnkgPSAtcC52eTtcbiAgICAgICAgICBlbHNlIGlmIChwLnkgLSBwLnJhZGl1cyA8IDApIHAudnkgPSAtcC52eTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLyogZXZlbnRzICovXG4gICAgICBpZiAoaXNJbkFycmF5KCdncmFiJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpIHtcbiAgICAgICAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZShwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkge1xuICAgICAgICBwSlMuZm4ubW9kZXMuYnViYmxlUGFydGljbGUocCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkge1xuICAgICAgICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlKHApO1xuICAgICAgfVxuXG4gICAgICAvKiBpbnRlcmFjdGlvbiBhdXRvIGJldHdlZW4gcGFydGljbGVzICovXG4gICAgICBpZiAocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUgfHwgcEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB2YXIgcDIgPSBwSlMucGFydGljbGVzLmFycmF5W2pdO1xuXG4gICAgICAgICAgLyogbGluayBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICBpZiAocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUpIHtcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzKHAsIHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBhdHRyYWN0IHBhcnRpY2xlcyAqL1xuICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpIHtcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzKHAsIHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBib3VuY2UgcGFydGljbGVzICovXG4gICAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5ib3VuY2UpIHtcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMocCwgcDIpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIH1cblxuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNEcmF3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLyogY2xlYXIgY2FudmFzICovXG4gICAgcEpTLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcblxuICAgIC8qIHVwZGF0ZSBlYWNoIHBhcnRpY2xlcyBwYXJhbSAqL1xuICAgIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUoKTtcblxuICAgIC8qIGRyYXcgZWFjaCBwYXJ0aWNsZSAqL1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xuICAgICAgcC5kcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkgPSBbXTtcbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzUmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8qIGluaXQgYWxsICovXG4gICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uY2hlY2tBbmltRnJhbWUpO1xuICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgIHBKUy50bXAuc291cmNlX3N2ZyA9IHVuZGVmaW5lZDtcbiAgICBwSlMudG1wLmltZ19vYmogPSB1bmRlZmluZWQ7XG4gICAgcEpTLnRtcC5jb3VudF9zdmcgPSAwO1xuICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSgpO1xuICAgIHBKUy5mbi5jYW52YXNDbGVhcigpO1xuXG4gICAgLyogcmVzdGFydCAqL1xuICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XG5cbiAgfTtcblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyBpbnRlcmFjdGlvbiAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyA9IGZ1bmN0aW9uIChwMSwgcDIpIHtcblxuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgLyogZHJhdyBhIGxpbmUgYmV0d2VlbiBwMSBhbmQgcDIgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyB1bmRlciB0aGUgY29uZmlnIGRpc3RhbmNlICovXG4gICAgaWYgKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSkge1xuXG4gICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3QgLyAoMSAvIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZTtcblxuICAgICAgaWYgKG9wYWNpdHlfbGluZSA+IDApIHtcblxuICAgICAgICAvKiBzdHlsZSAqL1xuICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoJyArIGNvbG9yX2xpbmUuciArICcsJyArIGNvbG9yX2xpbmUuZyArICcsJyArIGNvbG9yX2xpbmUuYiArICcsJyArIG9wYWNpdHlfbGluZSArICcpJztcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcbiAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cblxuICAgICAgICAvKiBwYXRoICovXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzID0gZnVuY3Rpb24gKHAxLCBwMikge1xuXG4gICAgLyogY29uZGVuc2VkIHBhcnRpY2xlcyAqL1xuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgaWYgKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSkge1xuXG4gICAgICB2YXIgYXggPSBkeCAvIChwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVYICogMTAwMCksXG4gICAgICAgIGF5ID0gZHkgLyAocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSAqIDEwMDApO1xuXG4gICAgICBwMS52eCAtPSBheDtcbiAgICAgIHAxLnZ5IC09IGF5O1xuXG4gICAgICBwMi52eCArPSBheDtcbiAgICAgIHAyLnZ5ICs9IGF5O1xuXG4gICAgfVxuXG5cbiAgfVxuXG5cbiAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyA9IGZ1bmN0aW9uIChwMSwgcDIpIHtcblxuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpLFxuICAgICAgZGlzdF9wID0gcDEucmFkaXVzICsgcDIucmFkaXVzO1xuXG4gICAgaWYgKGRpc3QgPD0gZGlzdF9wKSB7XG4gICAgICBwMS52eCA9IC1wMS52eDtcbiAgICAgIHAxLnZ5ID0gLXAxLnZ5O1xuXG4gICAgICBwMi52eCA9IC1wMi52eDtcbiAgICAgIHAyLnZ5ID0gLXAyLnZ5O1xuICAgIH1cblxuICB9XG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBtb2RlcyBldmVudHMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMgPSBmdW5jdGlvbiAobmIsIHBvcykge1xuXG4gICAgcEpTLnRtcC5wdXNoaW5nID0gdHJ1ZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmI7IGkrKykge1xuICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheS5wdXNoKFxuICAgICAgICBuZXcgcEpTLmZuLnBhcnRpY2xlKFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuY29sb3IsXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCB7XG4gICAgICAgICAgICAneCc6IHBvcyA/IHBvcy5wb3NfeCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLncsXG4gICAgICAgICAgICAneSc6IHBvcyA/IHBvcy5wb3NfeSA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmhcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIGlmIChpID09IG5iIC0gMSkge1xuICAgICAgICBpZiAoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIHBKUy50bXAucHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyA9IGZ1bmN0aW9uIChuYikge1xuXG4gICAgcEpTLnBhcnRpY2xlcy5hcnJheS5zcGxpY2UoMCwgbmIpO1xuICAgIGlmICghcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkge1xuICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZSA9IGZ1bmN0aW9uIChwKSB7XG5cbiAgICAvKiBvbiBob3ZlciBldmVudCAqL1xuICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSkge1xuXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcbiAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSAqIGR4X21vdXNlICsgZHlfbW91c2UgKiBkeV9tb3VzZSksXG4gICAgICAgIHJhdGlvID0gMSAtIGRpc3RfbW91c2UgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2U7XG5cbiAgICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBwLm9wYWNpdHk7XG4gICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHAucmFkaXVzO1xuICAgICAgfVxuXG4gICAgICAvKiBtb3VzZW1vdmUgLSBjaGVjayByYXRpbyAqL1xuICAgICAgaWYgKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKSB7XG5cbiAgICAgICAgaWYgKHJhdGlvID49IDAgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKSB7XG5cbiAgICAgICAgICAvKiBzaXplICovXG4gICAgICAgICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICE9IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkge1xuXG4gICAgICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPiBwSlMucGFydGljbGVzLnNpemUudmFsdWUpIHtcbiAgICAgICAgICAgICAgdmFyIHNpemUgPSBwLnJhZGl1cyArIChwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSAqIHJhdGlvKTtcbiAgICAgICAgICAgICAgaWYgKHNpemUgPj0gMCkge1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBkaWYgPSBwLnJhZGl1cyAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxuICAgICAgICAgICAgICAgIHNpemUgPSBwLnJhZGl1cyAtIChkaWYgKiByYXRpbyk7XG4gICAgICAgICAgICAgIGlmIChzaXplID4gMCkge1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogb3BhY2l0eSAqL1xuICAgICAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAhPSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpIHtcblxuICAgICAgICAgICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ID4gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSB7XG4gICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgKiByYXRpbztcbiAgICAgICAgICAgICAgaWYgKG9wYWNpdHkgPiBwLm9wYWNpdHkgJiYgb3BhY2l0eSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkge1xuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eSAtIChwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkgKiByYXRpbztcbiAgICAgICAgICAgICAgaWYgKG9wYWNpdHkgPCBwLm9wYWNpdHkgJiYgb3BhY2l0eSA+PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSkge1xuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0KCk7XG4gICAgICB9XG5cblxuICAgICAgLyogbW91c2VsZWF2ZSAqL1xuICAgICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2VsZWF2ZScpIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyogb24gY2xpY2sgZXZlbnQgKi9cbiAgICBlbHNlIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkge1xuXG5cbiAgICAgIGlmIChwSlMudG1wLmJ1YmJsZV9jbGlja2luZykge1xuICAgICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCxcbiAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195LFxuICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UgKiBkeF9tb3VzZSArIGR5X21vdXNlICogZHlfbW91c2UpLFxuICAgICAgICAgIHRpbWVfc3BlbnQgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lKSAvIDEwMDA7XG5cbiAgICAgICAgaWYgKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pIHtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24gKiAyKSB7XG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfY2xpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3MoYnViYmxlX3BhcmFtLCBwYXJ0aWNsZXNfcGFyYW0sIHBfb2JqX2J1YmJsZSwgcF9vYmosIGlkKSB7XG5cbiAgICAgICAgaWYgKGJ1YmJsZV9wYXJhbSAhPSBwYXJ0aWNsZXNfcGFyYW0pIHtcblxuICAgICAgICAgIGlmICghcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kKSB7XG4gICAgICAgICAgICBpZiAoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgaWYgKHBfb2JqX2J1YmJsZSAhPSB1bmRlZmluZWQpIHZhciBvYmogPSBwX29ial9idWJibGU7XG4gICAgICAgICAgICAgIGVsc2UgdmFyIG9iaiA9IHBfb2JqO1xuICAgICAgICAgICAgICBpZiAob2JqICE9IGJ1YmJsZV9wYXJhbSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBfb2JqIC0gKHRpbWVfc3BlbnQgKiAocF9vYmogLSBidWJibGVfcGFyYW0pIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmIChpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgaWYgKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBfb2JqX2J1YmJsZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlX3RtcCA9IHBfb2JqIC0gKHRpbWVfc3BlbnQgKiAocF9vYmogLSBidWJibGVfcGFyYW0pIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICBkaWYgPSBidWJibGVfcGFyYW0gLSB2YWx1ZV90bXA7XG4gICAgICAgICAgICAgIHZhbHVlID0gYnViYmxlX3BhcmFtICsgZGlmO1xuICAgICAgICAgICAgICBpZiAoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgaWYgKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKSB7XG4gICAgICAgIC8qIHNpemUgKi9cbiAgICAgICAgcHJvY2VzcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSwgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlLCBwLnJhZGl1c19idWJibGUsIHAucmFkaXVzLCAnc2l6ZScpO1xuICAgICAgICAvKiBvcGFjaXR5ICovXG4gICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwgcC5vcGFjaXR5X2J1YmJsZSwgcC5vcGFjaXR5LCAnb3BhY2l0eScpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlID0gZnVuY3Rpb24gKHApIHtcblxuICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKSB7XG5cbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxuICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxuICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlICogZHhfbW91c2UgKyBkeV9tb3VzZSAqIGR5X21vdXNlKTtcblxuICAgICAgdmFyIG5vcm1WZWMgPSB7XG4gICAgICAgICAgeDogZHhfbW91c2UgLyBkaXN0X21vdXNlLFxuICAgICAgICAgIHk6IGR5X21vdXNlIC8gZGlzdF9tb3VzZVxuICAgICAgICB9LFxuICAgICAgICByZXB1bHNlUmFkaXVzID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSxcbiAgICAgICAgdmVsb2NpdHkgPSAxMDAsXG4gICAgICAgIHJlcHVsc2VGYWN0b3IgPSBjbGFtcCgoMSAvIHJlcHVsc2VSYWRpdXMpICogKC0xICogTWF0aC5wb3coZGlzdF9tb3VzZSAvIHJlcHVsc2VSYWRpdXMsIDIpICsgMSkgKiByZXB1bHNlUmFkaXVzICogdmVsb2NpdHksIDAsIDUwKTtcblxuICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgeDogcC54ICsgbm9ybVZlYy54ICogcmVwdWxzZUZhY3RvcixcbiAgICAgICAgeTogcC55ICsgbm9ybVZlYy55ICogcmVwdWxzZUZhY3RvclxuICAgICAgfVxuXG4gICAgICBpZiAocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKSB7XG4gICAgICAgIGlmIChwb3MueCAtIHAucmFkaXVzID4gMCAmJiBwb3MueCArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy53KSBwLnggPSBwb3MueDtcbiAgICAgICAgaWYgKHBvcy55IC0gcC5yYWRpdXMgPiAwICYmIHBvcy55ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLmgpIHAueSA9IHBvcy55O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcC54ID0gcG9zLng7XG4gICAgICAgIHAueSA9IHBvcy55O1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpIHtcblxuICAgICAgaWYgKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKSB7XG4gICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCsrO1xuICAgICAgICBpZiAocEpTLnRtcC5yZXB1bHNlX2NvdW50ID09IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBKUy50bXAucmVwdWxzZV9jbGlja2luZykge1xuXG4gICAgICAgIHZhciByZXB1bHNlUmFkaXVzID0gTWF0aC5wb3cocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSAvIDYsIDMpO1xuXG4gICAgICAgIHZhciBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54LFxuICAgICAgICAgIGR5ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBwLnksXG4gICAgICAgICAgZCA9IGR4ICogZHggKyBkeSAqIGR5O1xuXG4gICAgICAgIHZhciBmb3JjZSA9IC1yZXB1bHNlUmFkaXVzIC8gZCAqIDE7XG5cbiAgICAgICAgZnVuY3Rpb24gcHJvY2VzcygpIHtcblxuICAgICAgICAgIHZhciBmID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgICAgIHAudnggPSBmb3JjZSAqIE1hdGguY29zKGYpO1xuICAgICAgICAgIHAudnkgPSBmb3JjZSAqIE1hdGguc2luKGYpO1xuXG4gICAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJykge1xuICAgICAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICAgICAgeDogcC54ICsgcC52eCxcbiAgICAgICAgICAgICAgeTogcC55ICsgcC52eVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBvcy54ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpIHAudnggPSAtcC52eDtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvcy54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgICBpZiAocG9zLnkgKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkgcC52eSA9IC1wLnZ5O1xuICAgICAgICAgICAgZWxzZSBpZiAocG9zLnkgLSBwLnJhZGl1cyA8IDApIHAudnkgPSAtcC52eTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlZmF1bHRcbiAgICAgICAgaWYgKGQgPD0gcmVwdWxzZVJhZGl1cykge1xuICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhbmcgLSBzbG93IG1vdGlvbiBtb2RlXG4gICAgICAgIC8vIGlmKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKXtcbiAgICAgICAgLy8gICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xuICAgICAgICAvLyAgICAgcHJvY2VzcygpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgcHJvY2VzcygpO1xuICAgICAgICAvLyB9XG5cblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID09IGZhbHNlKSB7XG5cbiAgICAgICAgICBwLnZ4ID0gcC52eF9pO1xuICAgICAgICAgIHAudnkgPSBwLnZ5X2k7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG5cbiAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZSA9IGZ1bmN0aW9uIChwKSB7XG5cbiAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJykge1xuXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcbiAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSAqIGR4X21vdXNlICsgZHlfbW91c2UgKiBkeV9tb3VzZSk7XG5cbiAgICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gdGhlIGN1cnNvciBhbmQgdGhlIHBhcnRpY2xlIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xuICAgICAgaWYgKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSkge1xuXG4gICAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdF9tb3VzZSAvICgxIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5KSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlO1xuXG4gICAgICAgIGlmIChvcGFjaXR5X2xpbmUgPiAwKSB7XG5cbiAgICAgICAgICAvKiBzdHlsZSAqL1xuICAgICAgICAgIHZhciBjb2xvcl9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCcgKyBjb2xvcl9saW5lLnIgKyAnLCcgKyBjb2xvcl9saW5lLmcgKyAnLCcgKyBjb2xvcl9saW5lLmIgKyAnLCcgKyBvcGFjaXR5X2xpbmUgKyAnKSc7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcbiAgICAgICAgICAvL3BKUy5jYW52YXMuY3R4LmxpbmVDYXAgPSAncm91bmQnOyAvKiBwZXJmb3JtYW5jZSBpc3N1ZSAqL1xuXG4gICAgICAgICAgLyogcGF0aCAqL1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4Lm1vdmVUbyhwLngsIHAueSk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVRvKHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKiBldmVudHMgdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZGV0ZWN0X29uID09ICd3aW5kb3cnKSB7XG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbCA9IHdpbmRvdztcbiAgICB9IGVsc2Uge1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSBwSlMuY2FudmFzLmVsO1xuICAgIH1cblxuXG4gICAgLyogZGV0ZWN0IG1vdXNlIHBvcyAtIG9uIGhvdmVyIC8gY2xpY2sgZXZlbnQgKi9cbiAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlIHx8IHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSkge1xuXG4gICAgICAvKiBlbCBvbiBtb3VzZW1vdmUgKi9cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5LmVsID09IHdpbmRvdykge1xuICAgICAgICAgIHZhciBwb3NfeCA9IGUuY2xpZW50WCxcbiAgICAgICAgICAgIHBvc195ID0gZS5jbGllbnRZO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwb3NfeCA9IGUub2Zmc2V0WCB8fCBlLmNsaWVudFgsXG4gICAgICAgICAgICBwb3NfeSA9IGUub2Zmc2V0WSB8fCBlLmNsaWVudFk7XG4gICAgICAgIH1cblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCA9IHBvc194O1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IHBvc195O1xuXG4gICAgICAgIGlmIChwSlMudG1wLnJldGluYSkge1xuICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPSAnbW91c2Vtb3ZlJztcblxuICAgICAgfSk7XG5cbiAgICAgIC8qIGVsIG9uIG9ubW91c2VsZWF2ZSAqL1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBudWxsO1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IG51bGw7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZWxlYXZlJztcblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKiBvbiBjbGljayBldmVudCAqL1xuICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpIHtcblxuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeTtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpIHtcblxuICAgICAgICAgIHN3aXRjaCAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwdXNoJzpcbiAgICAgICAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgcEpTLmludGVyYWN0aXZpdHkubW91c2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgcEpTLmludGVyYWN0aXZpdHkubW91c2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPiAxKSB7XG4gICAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYnViYmxlJzpcbiAgICAgICAgICAgICAgcEpTLnRtcC5idWJibGVfY2xpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmVwdWxzZSc6XG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCA9IDA7XG4gICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0sIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZHVyYXRpb24gKiAxMDAwKVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgfTtcblxuICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSkge1xuXG4gICAgICAvKiBjYWxjIGFyZWEgKi9cbiAgICAgIHZhciBhcmVhID0gcEpTLmNhbnZhcy5lbC53aWR0aCAqIHBKUy5jYW52YXMuZWwuaGVpZ2h0IC8gMTAwMDtcbiAgICAgIGlmIChwSlMudG1wLnJldGluYSkge1xuICAgICAgICBhcmVhID0gYXJlYSAvIChwSlMuY2FudmFzLnB4cmF0aW8gKiAyKTtcbiAgICAgIH1cblxuICAgICAgLyogY2FsYyBudW1iZXIgb2YgcGFydGljbGVzIGJhc2VkIG9uIGRlbnNpdHkgYXJlYSAqL1xuICAgICAgdmFyIG5iX3BhcnRpY2xlcyA9IGFyZWEgKiBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSAvIHBKUy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYTtcblxuICAgICAgLyogYWRkIG9yIHJlbW92ZSBYIHBhcnRpY2xlcyAqL1xuICAgICAgdmFyIG1pc3NpbmdfcGFydGljbGVzID0gcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGggLSBuYl9wYXJ0aWNsZXM7XG4gICAgICBpZiAobWlzc2luZ19wYXJ0aWNsZXMgPCAwKSBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhNYXRoLmFicyhtaXNzaW5nX3BhcnRpY2xlcykpO1xuICAgICAgZWxzZSBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKG1pc3NpbmdfcGFydGljbGVzKTtcblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwID0gZnVuY3Rpb24gKHAxLCBwb3NpdGlvbikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcblxuICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gICAgICBpZiAoZGlzdCA8PSBwMS5yYWRpdXMgKyBwMi5yYWRpdXMpIHtcbiAgICAgICAgcDEueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgICAgIHAxLnkgPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnkgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xuICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAocDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyA9IGZ1bmN0aW9uIChwKSB7XG5cbiAgICAvKiBzZXQgY29sb3IgdG8gc3ZnIGVsZW1lbnQgKi9cbiAgICB2YXIgc3ZnWG1sID0gcEpTLnRtcC5zb3VyY2Vfc3ZnLFxuICAgICAgcmdiSGV4ID0gLyMoWzAtOUEtRl17Myw2fSkvZ2ksXG4gICAgICBjb2xvcmVkU3ZnWG1sID0gc3ZnWG1sLnJlcGxhY2UocmdiSGV4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xuICAgICAgICBpZiAocC5jb2xvci5yZ2IpIHtcbiAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnICsgcC5jb2xvci5yZ2IuciArICcsJyArIHAuY29sb3IucmdiLmcgKyAnLCcgKyBwLmNvbG9yLnJnYi5iICsgJywnICsgcC5vcGFjaXR5ICsgJyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcgKyBwLmNvbG9yLmhzbC5oICsgJywnICsgcC5jb2xvci5oc2wucyArICclLCcgKyBwLmNvbG9yLmhzbC5sICsgJyUsJyArIHAub3BhY2l0eSArICcpJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3JfdmFsdWU7XG4gICAgICB9KTtcblxuICAgIC8qIHByZXBhcmUgdG8gY3JlYXRlIGltZyB3aXRoIGNvbG9yZWQgc3ZnICovXG4gICAgdmFyIHN2ZyA9IG5ldyBCbG9iKFtjb2xvcmVkU3ZnWG1sXSwge1xuICAgICAgICB0eXBlOiAnaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04J1xuICAgICAgfSksXG4gICAgICBET01VUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93LFxuICAgICAgdXJsID0gRE9NVVJMLmNyZWF0ZU9iamVjdFVSTChzdmcpO1xuXG4gICAgLyogY3JlYXRlIHBhcnRpY2xlIGltZyBvYmogKi9cbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwLmltZy5vYmogPSBpbWc7XG4gICAgICBwLmltZy5sb2FkZWQgPSB0cnVlO1xuICAgICAgRE9NVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgcEpTLnRtcC5jb3VudF9zdmcrKztcbiAgICB9KTtcbiAgICBpbWcuc3JjID0gdXJsO1xuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5kZXN0cm95cEpTID0gZnVuY3Rpb24gKCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICBjYW52YXNfZWwucmVtb3ZlKCk7XG4gICAgcEpTRG9tID0gbnVsbDtcbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZSA9IGZ1bmN0aW9uIChjLCBzdGFydFgsIHN0YXJ0WSwgc2lkZUxlbmd0aCwgc2lkZUNvdW50TnVtZXJhdG9yLCBzaWRlQ291bnREZW5vbWluYXRvcikge1xuXG4gICAgLy8gQnkgUHJvZ3JhbW1pbmcgVGhvbWFzIC0gaHR0cHM6Ly9wcm9ncmFtbWluZ3Rob21hcy53b3JkcHJlc3MuY29tLzIwMTMvMDQvMDMvbi1zaWRlZC1zaGFwZXMvXG4gICAgdmFyIHNpZGVDb3VudCA9IHNpZGVDb3VudE51bWVyYXRvciAqIHNpZGVDb3VudERlbm9taW5hdG9yO1xuICAgIHZhciBkZWNpbWFsU2lkZXMgPSBzaWRlQ291bnROdW1lcmF0b3IgLyBzaWRlQ291bnREZW5vbWluYXRvcjtcbiAgICB2YXIgaW50ZXJpb3JBbmdsZURlZ3JlZXMgPSAoMTgwICogKGRlY2ltYWxTaWRlcyAtIDIpKSAvIGRlY2ltYWxTaWRlcztcbiAgICB2YXIgaW50ZXJpb3JBbmdsZSA9IE1hdGguUEkgLSBNYXRoLlBJICogaW50ZXJpb3JBbmdsZURlZ3JlZXMgLyAxODA7IC8vIGNvbnZlcnQgdG8gcmFkaWFuc1xuICAgIGMuc2F2ZSgpO1xuICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgYy50cmFuc2xhdGUoc3RhcnRYLCBzdGFydFkpO1xuICAgIGMubW92ZVRvKDAsIDApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lkZUNvdW50OyBpKyspIHtcbiAgICAgIGMubGluZVRvKHNpZGVMZW5ndGgsIDApO1xuICAgICAgYy50cmFuc2xhdGUoc2lkZUxlbmd0aCwgMCk7XG4gICAgICBjLnJvdGF0ZShpbnRlcmlvckFuZ2xlKTtcbiAgICB9XG4gICAgLy9jLnN0cm9rZSgpO1xuICAgIGMuZmlsbCgpO1xuICAgIGMucmVzdG9yZSgpO1xuXG4gIH07XG5cbiAgcEpTLmZuLnZlbmRvcnMuZXhwb3J0SW1nID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5vcGVuKHBKUy5jYW52YXMuZWwudG9EYXRhVVJMKCdpbWFnZS9wbmcnKSwgJ19ibGFuaycpO1xuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyA9IGZ1bmN0aW9uICh0eXBlKSB7XG5cbiAgICBwSlMudG1wLmltZ19lcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyAhPSAnJykge1xuXG4gICAgICBpZiAodHlwZSA9PSAnc3ZnJykge1xuXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSBkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2U7XG4gICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEltYWdlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHhoci5zZW5kKCk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwSlMudG1wLmltZ19vYmogPSBpbWc7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmM7XG5cbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gTm8gaW1hZ2Uuc3JjJyk7XG4gICAgICBwSlMudG1wLmltZ19lcnJvciA9IHRydWU7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5kcmF3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PSAnaW1hZ2UnKSB7XG5cbiAgICAgIGlmIChwSlMudG1wLmltZ190eXBlID09ICdzdmcnKSB7XG5cbiAgICAgICAgaWYgKHBKUy50bXAuY291bnRfc3ZnID49IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlKSB7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICBpZiAoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3N0aWxsIGxvYWRpbmcuLi4nKTtcbiAgICAgICAgICBpZiAoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAocEpTLnRtcC5pbWdfb2JqICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgaWYgKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICBpZiAoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBpZiBzaGFwZSBpcyBpbWFnZVxuICAgIGlmIChwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJykge1xuXG4gICAgICBpZiAocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBKUy50bXAuY2hlY2tBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKGNoZWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcyBsb2FkZWQhIGNhbmNlbCBjaGVjaycpO1xuICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy50bXAuY2hlY2tBbmltRnJhbWUpO1xuICAgICAgICBpZiAoIXBKUy50bXAuaW1nX2Vycm9yKSB7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcEpTLmZuLnZlbmRvcnMuaW5pdCgpO1xuICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhdygpO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8qIGluaXQgY2FudmFzICsgcGFydGljbGVzICovXG4gICAgcEpTLmZuLnJldGluYUluaXQoKTtcbiAgICBwSlMuZm4uY2FudmFzSW5pdCgpO1xuICAgIHBKUy5mbi5jYW52YXNTaXplKCk7XG4gICAgcEpTLmZuLmNhbnZhc1BhaW50KCk7XG4gICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xuICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG5cbiAgICAvKiBwYXJ0aWNsZXMubGluZV9saW5rZWQgLSBjb252ZXJ0IGhleCBjb2xvcnMgdG8gcmdiICovXG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSA9IGhleFRvUmdiKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3IpO1xuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5zdGFydCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChpc0luQXJyYXkoJ2ltYWdlJywgcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlKSkge1xuICAgICAgcEpTLnRtcC5pbWdfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLnN1YnN0cihwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5sZW5ndGggLSAzKTtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcocEpTLnRtcC5pbWdfdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgIH1cblxuICB9O1xuXG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXG5cblxuICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMoKTtcblxuICBwSlMuZm4udmVuZG9ycy5zdGFydCgpO1xuXG5cblxufTtcblxuLyogLS0tLS0tLS0tLSBnbG9iYWwgZnVuY3Rpb25zIC0gdmVuZG9ycyAtLS0tLS0tLS0tLS0gKi9cblxuT2JqZWN0LmRlZXBFeHRlbmQgPSBmdW5jdGlvbiBkZWVwRXh0ZW5kRnVuY3Rpb24oZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXG4gICAgICBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgIGRlZXBFeHRlbmRGdW5jdGlvbihkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgfTtcbn0pKCk7XG5cbndpbmRvdy5jYW5jZWxSZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBjbGVhclRpbWVvdXRcbn0pKCk7XG5cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAvLyBCeSBUaW0gRG93biAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU2MjQxMzkvMzQ5MzY1MFxuICAvLyBFeHBhbmQgc2hvcnRoYW5kIGZvcm0gKGUuZy4gXCIwM0ZcIikgdG8gZnVsbCBmb3JtIChlLmcuIFwiMDAzM0ZGXCIpXG4gIHZhciBzaG9ydGhhbmRSZWdleCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xuICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XG4gIH0pO1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHQgPyB7XG4gICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcbiAgfSA6IG51bGw7XG59O1xuXG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW1iZXIsIG1pbiksIG1heCk7XG59O1xuXG5mdW5jdGlvbiBpc0luQXJyYXkodmFsdWUsIGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA+IC0xO1xufVxuXG5cbi8qIC0tLS0tLS0tLS0gcGFydGljbGVzLmpzIGZ1bmN0aW9ucyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuXG53aW5kb3cucEpTRG9tID0gW107XG5cbndpbmRvdy5wYXJ0aWNsZXNKUyA9IGZ1bmN0aW9uICh0YWdfaWQsIHBhcmFtcykge1xuXG4gIC8vY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAvKiBubyBzdHJpbmcgaWQ/IHNvIGl0J3Mgb2JqZWN0IHBhcmFtcywgYW5kIHNldCB0aGUgaWQgd2l0aCBkZWZhdWx0IGlkICovXG4gIGlmICh0eXBlb2YgKHRhZ19pZCkgIT0gJ3N0cmluZycpIHtcbiAgICBwYXJhbXMgPSB0YWdfaWQ7XG4gICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XG4gIH1cblxuICAvKiBubyBpZD8gc2V0IHRoZSBpZCB0byBkZWZhdWx0IGlkICovXG4gIGlmICghdGFnX2lkKSB7XG4gICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XG4gIH1cblxuICAvKiBwSlMgZWxlbWVudHMgKi9cbiAgdmFyIHBKU190YWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdfaWQpLFxuICAgIHBKU19jYW52YXNfY2xhc3MgPSAncGFydGljbGVzLWpzLWNhbnZhcy1lbCcsXG4gICAgZXhpc3RfY2FudmFzID0gcEpTX3RhZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHBKU19jYW52YXNfY2xhc3MpO1xuXG4gIC8qIHJlbW92ZSBjYW52YXMgaWYgZXhpc3RzIGludG8gdGhlIHBKUyB0YXJnZXQgdGFnICovXG4gIGlmIChleGlzdF9jYW52YXMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKGV4aXN0X2NhbnZhcy5sZW5ndGggPiAwKSB7XG4gICAgICBwSlNfdGFnLnJlbW92ZUNoaWxkKGV4aXN0X2NhbnZhc1swXSk7XG4gICAgfVxuICB9XG5cbiAgLyogY3JlYXRlIGNhbnZhcyBlbGVtZW50ICovXG4gIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzX2VsLmNsYXNzTmFtZSA9IHBKU19jYW52YXNfY2xhc3M7XG5cbiAgLyogc2V0IHNpemUgY2FudmFzICovXG4gIGNhbnZhc19lbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICBjYW52YXNfZWwuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG5cbiAgLyogYXBwZW5kIGNhbnZhcyAqL1xuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKS5hcHBlbmRDaGlsZChjYW52YXNfZWwpO1xuXG4gIC8qIGxhdW5jaCBwYXJ0aWNsZS5qcyAqL1xuICBpZiAoY2FudmFzICE9IG51bGwpIHtcbiAgICBwSlNEb20ucHVzaChuZXcgcEpTKHRhZ19pZCwgcGFyYW1zKSk7XG4gIH1cblxufTtcblxud2luZG93LnBhcnRpY2xlc0pTLmxvYWQgPSBmdW5jdGlvbiAodGFnX2lkLCBwYXRoX2NvbmZpZ19qc29uLCBjYWxsYmFjaykge1xuXG4gIC8qIGxvYWQganNvbiBjb25maWcgKi9cbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbignR0VUJywgcGF0aF9jb25maWdfanNvbik7XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IEpTT04ucGFyc2UoZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlKTtcbiAgICAgICAgd2luZG93LnBhcnRpY2xlc0pTKHRhZ19pZCwgcGFyYW1zKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIFhNTEh0dHBSZXF1ZXN0IHN0YXR1czogJyArIHhoci5zdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gRmlsZSBjb25maWcgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB4aHIuc2VuZCgpO1xuXG59O1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICd0aWx0LmpzJztcblxud2luZG93LiQgPSAkO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHBhcnRpY2xlc0pTLmxvYWQoJ3BhcnRpY2xlcy1jYW52YXMnLCAnd3AtY29udGVudC90aGVtZXMvbGlhbW9iLXRoZW1lL2Rpc3QvYXNzZXRzL3BhcnRpY2xlc2pzLWNvbmZpZy5qc29uJywgZnVuY3Rpb24gKCkge30pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL3BhcnRpY2xlcy5qcyIsIihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oIHJvb3QsIGpRdWVyeSApIHtcbiAgICAgICAgICAgIGlmICggalF1ZXJ5ID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVxdWlyZSgnalF1ZXJ5JykgcmV0dXJucyBhIGZhY3RvcnkgdGhhdCByZXF1aXJlcyB3aW5kb3cgdG9cbiAgICAgICAgICAgICAgICAvLyBidWlsZCBhIGpRdWVyeSBpbnN0YW5jZSwgd2Ugbm9ybWFsaXplIGhvdyB3ZSB1c2UgbW9kdWxlc1xuICAgICAgICAgICAgICAgIC8vIHRoYXQgcmVxdWlyZSB0aGlzIHBhdHRlcm4gYnV0IHRoZSB3aW5kb3cgcHJvdmlkZWQgaXMgYSBub29wXG4gICAgICAgICAgICAgICAgLy8gaWYgaXQncyBkZWZpbmVkIChob3cganF1ZXJ5IHdvcmtzKVxuICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jykocm9vdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cbn0oZnVuY3Rpb24gKCQpIHtcbiAgICAkLmZuLnRpbHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHJlcXVlc3RUaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aWNraW5nKSByZXR1cm47XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlVHJhbnNmb3Jtcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMudGlja2luZyA9IHRydWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmQgbW91c2UgbW92ZW1lbnQgZXZlbnMgb24gaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGJpbmRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICQodGhpcykub24oJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XG4gICAgICAgICAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgbW91c2VFbnRlcik7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5yZXNldCkgJCh0aGlzKS5vbignbW91c2VsZWF2ZScsIG1vdXNlTGVhdmUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2xhcmUpICQod2luZG93KS5vbigncmVzaXplJywgdXBkYXRlR2xhcmVTaXplLmJpbmQoX3RoaXMpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRyYW5zaXRpb24gb25seSBvbiBtb3VzZSBsZWF2ZSBhbmQgbW91c2UgZW50ZXIgc28gaXQgZG9lc24ndCBpbmZsdWVuY2UgbW91c2UgbW92ZSB0cmFuc2Zvcm1zXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBzZXRUcmFuc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lb3V0ICE9PSB1bmRlZmluZWQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3Moeyd0cmFuc2l0aW9uJzogYCR7dGhpcy5zZXR0aW5ncy5zcGVlZH1tcyAke3RoaXMuc2V0dGluZ3MuZWFzaW5nfWB9KTtcbiAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZ2xhcmUpIHRoaXMuZ2xhcmVFbGVtZW50LmNzcyh7J3RyYW5zaXRpb24nOiBgb3BhY2l0eSAke3RoaXMuc2V0dGluZ3Muc3BlZWR9bXMgJHt0aGlzLnNldHRpbmdzLmVhc2luZ31gfSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcyh7J3RyYW5zaXRpb24nOiAnJ30pO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuZ2xhcmUpIHRoaXMuZ2xhcmVFbGVtZW50LmNzcyh7J3RyYW5zaXRpb24nOiAnJ30pO1xuICAgICAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy5zcGVlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdXNlciBtb3VzZSBlbnRlcnMgdGlsdCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBtb3VzZUVudGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGlja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgJCh0aGlzKS5jc3Moeyd3aWxsLWNoYW5nZSc6ICd0cmFuc2Zvcm0nfSk7XG4gICAgICAgICAgICBzZXRUcmFuc2l0aW9uLmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoXCJ0aWx0Lm1vdXNlRW50ZXJcIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybiB0aGUgeCx5IHBvc2l0aW9uIG9mIHRoZSBtb3VzZSBvbiB0aGUgdGlsdCBlbGVtZW50XG4gICAgICAgICAqIEByZXR1cm5zIHt7eDogKiwgeTogKn19XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBnZXRNb3VzZVBvc2l0aW9ucyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGV2ZW50KSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBwYWdlWDogJCh0aGlzKS5vZmZzZXQoKS5sZWZ0ICsgJCh0aGlzKS5vdXRlcldpZHRoKCkgLyAyLFxuICAgICAgICAgICAgICAgICAgICBwYWdlWTogJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCkgLyAyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7eDogZXZlbnQucGFnZVgsIHk6IGV2ZW50LnBhZ2VZfTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB1c2VyIG1vdXNlIG1vdmVzIG92ZXIgdGhlIHRpbHQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbW91c2VNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubW91c2VQb3NpdGlvbnMgPSBnZXRNb3VzZVBvc2l0aW9ucyhldmVudCk7XG4gICAgICAgICAgICByZXF1ZXN0VGljay5jYWxsKHRoaXMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHVzZXIgbW91c2UgbGVhdmVzIHRpbHQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbW91c2VMZWF2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yZXNldCA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0VGljay5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKFwidGlsdC5tb3VzZUxlYXZlXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGlsdCB2YWx1ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybnMge3t4OiB0aWx0IHZhbHVlLCB5OiB0aWx0IHZhbHVlfX1cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGdldFZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSAkKHRoaXMpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9ICQodGhpcykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnQgPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB0b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VYID0gKHRoaXMubW91c2VQb3NpdGlvbnMueCAtIGxlZnQpIC8gd2lkdGg7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlWSA9ICh0aGlzLm1vdXNlUG9zaXRpb25zLnkgLSB0b3ApIC8gaGVpZ2h0O1xuICAgICAgICAgICAgLy8geCBvciB5IHBvc2l0aW9uIGluc2lkZSBpbnN0YW5jZSAvIHdpZHRoIG9mIGluc3RhbmNlID0gcGVyY2VudGFnZSBvZiBwb3NpdGlvbiBpbnNpZGUgaW5zdGFuY2UgKiB0aGUgbWF4IHRpbHQgdmFsdWVcbiAgICAgICAgICAgIGNvbnN0IHRpbHRYID0gKCh0aGlzLnNldHRpbmdzLm1heFRpbHQgLyAyKSAtICgocGVyY2VudGFnZVgpICogdGhpcy5zZXR0aW5ncy5tYXhUaWx0KSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbHRZID0gKCgocGVyY2VudGFnZVkpICogdGhpcy5zZXR0aW5ncy5tYXhUaWx0KSAtICh0aGlzLnNldHRpbmdzLm1heFRpbHQgLyAyKSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIC8vIGFuZ2xlXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIodGhpcy5tb3VzZVBvc2l0aW9ucy54IC0gKGxlZnQrd2lkdGgvMiksLSAodGhpcy5tb3VzZVBvc2l0aW9ucy55IC0gKHRvcCtoZWlnaHQvMikpICkqKDE4MC9NYXRoLlBJKTtcbiAgICAgICAgICAgIC8vIFJldHVybiB4ICYgeSB0aWx0IHZhbHVlc1xuICAgICAgICAgICAgcmV0dXJuIHt0aWx0WCwgdGlsdFksICdwZXJjZW50YWdlWCc6IHBlcmNlbnRhZ2VYICogMTAwLCAncGVyY2VudGFnZVknOiBwZXJjZW50YWdlWSAqIDEwMCwgYW5nbGV9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdGlsdCB0cmFuc2Zvcm1zIG9uIG1vdXNlbW92ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdXBkYXRlVHJhbnNmb3JtcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm1zID0gZ2V0VmFsdWVzLmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0cmFuc2Zvcm0nLCBgcGVyc3BlY3RpdmUoJHt0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlfXB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylgKTtcblxuICAgICAgICAgICAgICAgIC8vIFJvdGF0ZSBnbGFyZSBpZiBlbmFibGVkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2xhcmUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudC5jc3MoJ3RyYW5zZm9ybScsIGByb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuY3NzKCdvcGFjaXR5JywgYDBgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKCd0cmFuc2Zvcm0nLCBgcGVyc3BlY3RpdmUoJHt0aGlzLnNldHRpbmdzLnBlcnNwZWN0aXZlfXB4KSByb3RhdGVYKCR7dGhpcy5zZXR0aW5ncy5kaXNhYmxlQXhpcyA9PT0gJ3gnID8gMCA6IHRoaXMudHJhbnNmb3Jtcy50aWx0WX1kZWcpIHJvdGF0ZVkoJHt0aGlzLnNldHRpbmdzLmRpc2FibGVBeGlzID09PSAneScgPyAwIDogdGhpcy50cmFuc2Zvcm1zLnRpbHRYfWRlZykgc2NhbGUzZCgke3RoaXMuc2V0dGluZ3Muc2NhbGV9LCR7dGhpcy5zZXR0aW5ncy5zY2FsZX0sJHt0aGlzLnNldHRpbmdzLnNjYWxlfSlgKTtcblxuICAgICAgICAgICAgICAgIC8vIFJvdGF0ZSBnbGFyZSBpZiBlbmFibGVkXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2xhcmUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudC5jc3MoJ3RyYW5zZm9ybScsIGByb3RhdGUoJHt0aGlzLnRyYW5zZm9ybXMuYW5nbGV9ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuY3NzKCdvcGFjaXR5JywgYCR7dGhpcy50cmFuc2Zvcm1zLnBlcmNlbnRhZ2VZICogdGhpcy5zZXR0aW5ncy5tYXhHbGFyZSAvIDEwMH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoXCJjaGFuZ2VcIiwgW3RoaXMudHJhbnNmb3Jtc10pO1xuXG4gICAgICAgICAgICB0aGlzLnRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJlcGFyZSBlbGVtZW50c1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcHJlcGFyZUdsYXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZ2xhcmVQcmVyZW5kZXIgPSB0aGlzLnNldHRpbmdzLmdsYXJlUHJlcmVuZGVyO1xuXG4gICAgICAgICAgICAvLyBJZiBvcHRpb24gcHJlLXJlbmRlciBpcyBlbmFibGVkIHdlIGFzc3VtZSBhbGwgaHRtbC9jc3MgaXMgcHJlc2VudCBmb3IgYW4gb3B0aW1hbCBnbGFyZSBlZmZlY3QuXG4gICAgICAgICAgICBpZiAoIWdsYXJlUHJlcmVuZGVyKVxuICAgICAgICAgICAgLy8gQ3JlYXRlIGdsYXJlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImpzLXRpbHQtZ2xhcmVcIj48ZGl2IGNsYXNzPVwianMtdGlsdC1nbGFyZS1pbm5lclwiPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgICAgICAvLyBTdG9yZSBnbGFyZSBzZWxlY3RvciBpZiBnbGFyZSBpcyBlbmFibGVkXG4gICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudFdyYXBwZXIgPSAkKHRoaXMpLmZpbmQoXCIuanMtdGlsdC1nbGFyZVwiKTtcbiAgICAgICAgICAgIHRoaXMuZ2xhcmVFbGVtZW50ID0gJCh0aGlzKS5maW5kKFwiLmpzLXRpbHQtZ2xhcmUtaW5uZXJcIik7XG5cbiAgICAgICAgICAgIC8vIFJlbWVtYmVyPyBXZSBhc3N1bWUgYWxsIGNzcyBpcyBhbHJlYWR5IHNldCwgc28ganVzdCByZXR1cm5cbiAgICAgICAgICAgIGlmIChnbGFyZVByZXJlbmRlcikgcmV0dXJuO1xuXG4gICAgICAgICAgICAvLyBBYnN0cmFjdGVkIHJlLXVzYWJsZSBnbGFyZSBzdHlsZXNcbiAgICAgICAgICAgIGNvbnN0IHN0cmV0Y2ggPSB7XG4gICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAndG9wJzogJzAnLFxuICAgICAgICAgICAgICAgICdsZWZ0JzogJzAnLFxuICAgICAgICAgICAgICAgICd3aWR0aCc6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEwMCUnLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gU3R5bGUgZ2xhcmUgd3JhcHBlclxuICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnRXcmFwcGVyLmNzcyhzdHJldGNoKS5jc3Moe1xuICAgICAgICAgICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTdHlsZSBnbGFyZSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgJ3RvcCc6ICc1MCUnLFxuICAgICAgICAgICAgICAgICdsZWZ0JzogJzUwJScsXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMTAwJSlgLFxuICAgICAgICAgICAgICAgICd3aWR0aCc6IGAkeyQodGhpcykub3V0ZXJXaWR0aCgpKjJ9YCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogYCR7JCh0aGlzKS5vdXRlcldpZHRoKCkqMn1gLFxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAncm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICcwJSAwJScsXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMCcsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgZ2xhcmUgb24gcmVzaXplXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB1cGRhdGVHbGFyZVNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudC5jc3Moe1xuICAgICAgICAgICAgICAgICd3aWR0aCc6IGAkeyQodGhpcykub3V0ZXJXaWR0aCgpKjJ9YCxcbiAgICAgICAgICAgICAgICAnaGVpZ2h0JzogYCR7JCh0aGlzKS5vdXRlcldpZHRoKCkqMn1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFB1YmxpYyBtZXRob2RzXG4gICAgICAgICAqL1xuICAgICAgICAkLmZuLnRpbHQuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5qcy10aWx0LWdsYXJlJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moeyd3aWxsLWNoYW5nZSc6ICcnLCAndHJhbnNmb3JtJzogJyd9KTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLm9mZignbW91c2Vtb3ZlIG1vdXNlZW50ZXIgbW91c2VsZWF2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5mbi50aWx0LmdldFZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25zID0gZ2V0TW91c2VQb3NpdGlvbnMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZ2V0VmFsdWVzLmNhbGwodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfTtcblxuICAgICAgICAkLmZuLnRpbHQucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9ucyA9IGdldE1vdXNlUG9zaXRpb25zLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICQodGhpcykuZGF0YSgnc2V0dGluZ3MnKTtcbiAgICAgICAgICAgICAgICBtb3VzZUxlYXZlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnNldHRpbmdzLnRyYW5zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvb3AgZXZlcnkgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERlZmF1bHQgc2V0dGluZ3MgbWVyZ2VkIHdpdGggdXNlciBzZXR0aW5nc1xuICAgICAgICAgICAgICogQ2FuIGJlIHNldCB0cm91Z2ggZGF0YSBhdHRyaWJ1dGVzIG9yIGFzIHBhcmFtZXRlci5cbiAgICAgICAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzID0gJC5leHRlbmQoe1xuICAgICAgICAgICAgICAgIG1heFRpbHQ6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtbWF4XScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LW1heCcpIDogMjAsXG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtcGVyc3BlY3RpdmVdJykgPyAkKHRoaXMpLmRhdGEoJ3RpbHQtcGVyc3BlY3RpdmUnKSA6IDMwMCxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtZWFzaW5nXScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LWVhc2luZycpIDogJ2N1YmljLWJlemllciguMDMsLjk4LC41MiwuOTkpJyxcbiAgICAgICAgICAgICAgICBzY2FsZTogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC1zY2FsZV0nKSA/ICQodGhpcykuZGF0YSgndGlsdC1zY2FsZScpIDogJzEnLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LXNwZWVkXScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LXNwZWVkJykgOiAnNDAwJyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LXRyYW5zaXRpb25dJykgPyAkKHRoaXMpLmRhdGEoJ3RpbHQtdHJhbnNpdGlvbicpIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlQXhpczogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC1kaXNhYmxlLWF4aXNdJykgPyAkKHRoaXMpLmRhdGEoJ3RpbHQtZGlzYWJsZS1heGlzJykgOiBudWxsLFxuICAgICAgICAgICAgICAgIGF4aXM6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtYXhpc10nKSA/ICQodGhpcykuZGF0YSgndGlsdC1heGlzJykgOiBudWxsLFxuICAgICAgICAgICAgICAgIHJlc2V0OiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LXJlc2V0XScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LXJlc2V0JykgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdsYXJlOiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LWdsYXJlXScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LWdsYXJlJykgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBtYXhHbGFyZTogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC1tYXhnbGFyZV0nKSA/ICQodGhpcykuZGF0YSgndGlsdC1tYXhnbGFyZScpIDogMSxcbiAgICAgICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyBBZGQgZGVwcmVjYXRpb24gd2FybmluZyAmIHNldCBkaXNhYmxlQXhpcyB0byBkZXByZWNhdGVkIGF4aXMgc2V0dGluZ1xuICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5heGlzICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RpbHQuanM6IHRoZSBheGlzIHNldHRpbmcgaGFzIGJlZW4gcmVuYW1lZCB0byBkaXNhYmxlQXhpcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9naWpzcm9nZS90aWx0LmpzL3B1bGwvMjYgZm9yIG1vcmUgaW5mb3JtYXRpb24nKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLmRpc2FibGVBeGlzID0gdGhpcy5zZXR0aW5ncy5heGlzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmluaXQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgc2V0dGluZ3NcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ3NldHRpbmdzJywgdGhpcy5zZXR0aW5ncyk7XG5cbiAgICAgICAgICAgICAgICAvLyBQcmVwYXJlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmdsYXJlKSBwcmVwYXJlR2xhcmUuY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgICAgICAgICAgYmluZEV2ZW50cy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gSW5pdFxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEF1dG8gbG9hZFxuICAgICAqL1xuICAgICQoJ1tkYXRhLXRpbHRdJykudGlsdCgpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59KSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdGlsdC5qcy9zcmMvdGlsdC5qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==