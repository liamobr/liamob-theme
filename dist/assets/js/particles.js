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


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(3);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmJjM2U3ZTVjYTA1M2Y3MDM4ZWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9wYXJ0aWNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbHQuanMvc3JjL3RpbHQuanF1ZXJ5LmpzIl0sIm5hbWVzIjpbInBKUyIsInRhZ19pZCIsInBhcmFtcyIsImNhbnZhc19lbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhbnZhcyIsImVsIiwidyIsIm9mZnNldFdpZHRoIiwiaCIsIm9mZnNldEhlaWdodCIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsInNoYXBlIiwidHlwZSIsInN0cm9rZSIsIndpZHRoIiwicG9seWdvbiIsIm5iX3NpZGVzIiwiaW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGluZV9saW5rZWQiLCJkaXN0YW5jZSIsIm1vdmUiLCJkaXJlY3Rpb24iLCJzdHJhaWdodCIsIm91dF9tb2RlIiwiYm91bmNlIiwiYXR0cmFjdCIsInJvdGF0ZVgiLCJyb3RhdGVZIiwiYXJyYXkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25ob3ZlciIsIm1vZGUiLCJvbmNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsIm1vdXNlIiwicmV0aW5hX2RldGVjdCIsImZuIiwiaW50ZXJhY3QiLCJ2ZW5kb3JzIiwidG1wIiwiT2JqZWN0IiwiZGVlcEV4dGVuZCIsIm9iaiIsInNpemVfdmFsdWUiLCJzaXplX2FuaW1fc3BlZWQiLCJtb3ZlX3NwZWVkIiwibGluZV9saW5rZWRfZGlzdGFuY2UiLCJsaW5lX2xpbmtlZF93aWR0aCIsIm1vZGVfZ3JhYl9kaXN0YW5jZSIsIm1vZGVfYnViYmxlX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfc2l6ZSIsIm1vZGVfcmVwdWxzZV9kaXN0YW5jZSIsInJldGluYUluaXQiLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwicHhyYXRpbyIsInJldGluYSIsImNhbnZhc0luaXQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2FudmFzU2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNsZXNFbXB0eSIsInBhcnRpY2xlc0NyZWF0ZSIsInBhcnRpY2xlc0RyYXciLCJkZW5zaXR5QXV0b1BhcnRpY2xlcyIsImNhbnZhc1BhaW50IiwiZmlsbFJlY3QiLCJjYW52YXNDbGVhciIsImNsZWFyUmVjdCIsInBhcnRpY2xlIiwicG9zaXRpb24iLCJyYWRpdXMiLCJNYXRoIiwic2l6ZV9zdGF0dXMiLCJ2cyIsIngiLCJ5IiwiY2hlY2tPdmVybGFwIiwiQXJyYXkiLCJjb2xvcl9zZWxlY3RlZCIsImZsb29yIiwibGVuZ3RoIiwicmdiIiwiaGV4VG9SZ2IiLCJyIiwidW5kZWZpbmVkIiwiZyIsImIiLCJzIiwibCIsImhzbCIsIm9wYWNpdHlfc3RhdHVzIiwidm8iLCJ2ZWxiYXNlIiwidngiLCJ2eSIsInZ4X2kiLCJ2eV9pIiwic2hhcGVfdHlwZSIsInNoYXBlX3NlbGVjdGVkIiwic2giLCJpbWciLCJyYXRpbyIsImltZ190eXBlIiwic291cmNlX3N2ZyIsImNyZWF0ZVN2Z0ltZyIsInB1c2hpbmciLCJsb2FkZWQiLCJwcm90b3R5cGUiLCJkcmF3IiwicCIsInJhZGl1c19idWJibGUiLCJvcGFjaXR5X2J1YmJsZSIsImNvbG9yX3ZhbHVlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJyZWN0IiwiZHJhd1NoYXBlIiwiZHJhd0ltYWdlIiwiaW1nX29iaiIsImNsb3NlUGF0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiZmlsbCIsImkiLCJwYXJ0aWNsZXNVcGRhdGUiLCJtcyIsIm5ld19wb3MiLCJ4X2xlZnQiLCJ4X3JpZ2h0IiwieV90b3AiLCJ5X2JvdHRvbSIsImlzSW5BcnJheSIsImdyYWJQYXJ0aWNsZSIsImJ1YmJsZVBhcnRpY2xlIiwicmVwdWxzZVBhcnRpY2xlIiwiaiIsInAyIiwibGlua1BhcnRpY2xlcyIsImF0dHJhY3RQYXJ0aWNsZXMiLCJib3VuY2VQYXJ0aWNsZXMiLCJwYXJ0aWNsZXNSZWZyZXNoIiwiY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrQW5pbUZyYW1lIiwiZHJhd0FuaW1GcmFtZSIsImNvdW50X3N2ZyIsInN0YXJ0IiwicDEiLCJkeCIsImR5IiwiZGlzdCIsInNxcnQiLCJvcGFjaXR5X2xpbmUiLCJjb2xvcl9saW5lIiwiY29sb3JfcmdiX2xpbmUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJheCIsImF5IiwiZGlzdF9wIiwicHVzaFBhcnRpY2xlcyIsIm5iIiwicG9zIiwicG9zX3giLCJwb3NfeSIsInJlbW92ZVBhcnRpY2xlcyIsInNwbGljZSIsImluaXQiLCJkeF9tb3VzZSIsImR5X21vdXNlIiwiZGlzdF9tb3VzZSIsInN0YXR1cyIsImRpZiIsInByb2Nlc3MiLCJidWJibGVfcGFyYW0iLCJwYXJ0aWNsZXNfcGFyYW0iLCJwX29ial9idWJibGUiLCJwX29iaiIsImlkIiwiYnViYmxlX2R1cmF0aW9uX2VuZCIsInRpbWVfc3BlbnQiLCJ2YWx1ZV90bXAiLCJidWJibGVfY2xpY2tpbmciLCJjbGlja19wb3NfeCIsImNsaWNrX3Bvc195IiwiRGF0ZSIsImdldFRpbWUiLCJjbGlja190aW1lIiwibm9ybVZlYyIsInJlcHVsc2VSYWRpdXMiLCJ2ZWxvY2l0eSIsInJlcHVsc2VGYWN0b3IiLCJjbGFtcCIsInBvdyIsInJlcHVsc2VfZmluaXNoIiwicmVwdWxzZV9jb3VudCIsInJlcHVsc2VfY2xpY2tpbmciLCJmIiwiYXRhbjIiLCJmb3JjZSIsImNvcyIsInNpbiIsImQiLCJldmVudHNMaXN0ZW5lcnMiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInNldFRpbWVvdXQiLCJhcmVhIiwibmJfcGFydGljbGVzIiwibWlzc2luZ19wYXJ0aWNsZXMiLCJhYnMiLCJzdmdYbWwiLCJyZ2JIZXgiLCJjb2xvcmVkU3ZnWG1sIiwicmVwbGFjZSIsIm0iLCJzdmciLCJCbG9iIiwiRE9NVVJMIiwiVVJMIiwid2Via2l0VVJMIiwidXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwiSW1hZ2UiLCJyZXZva2VPYmplY3RVUkwiLCJkZXN0cm95cEpTIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwSlNEb20iLCJjIiwic3RhcnRYIiwic3RhcnRZIiwic2lkZUxlbmd0aCIsInNpZGVDb3VudE51bWVyYXRvciIsInNpZGVDb3VudERlbm9taW5hdG9yIiwic2lkZUNvdW50IiwiZGVjaW1hbFNpZGVzIiwiaW50ZXJpb3JBbmdsZURlZ3JlZXMiLCJpbnRlcmlvckFuZ2xlIiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsInJlc3RvcmUiLCJleHBvcnRJbWciLCJvcGVuIiwidG9EYXRhVVJMIiwibG9hZEltZyIsImltZ19lcnJvciIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiZGF0YSIsInJlYWR5U3RhdGUiLCJjdXJyZW50VGFyZ2V0IiwicmVzcG9uc2UiLCJjaGVja0JlZm9yZURyYXciLCJjb25zb2xlIiwibG9nIiwic2VuZCIsInJlcXVlc3RBbmltRnJhbWUiLCJjaGVjayIsInN1YnN0ciIsImRlZXBFeHRlbmRGdW5jdGlvbiIsImRlc3RpbmF0aW9uIiwic291cmNlIiwicHJvcGVydHkiLCJjb25zdHJ1Y3RvciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwid2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJUaW1lb3V0IiwiaGV4Iiwic2hvcnRoYW5kUmVnZXgiLCJyZXN1bHQiLCJleGVjIiwicGFyc2VJbnQiLCJtaW4iLCJtYXgiLCJpbmRleE9mIiwicGFydGljbGVzSlMiLCJwSlNfdGFnIiwiZ2V0RWxlbWVudEJ5SWQiLCJwSlNfY2FudmFzX2NsYXNzIiwiZXhpc3RfY2FudmFzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYXBwZW5kQ2hpbGQiLCJsb2FkIiwicGF0aF9jb25maWdfanNvbiIsIkpTT04iLCJwYXJzZSIsIiQiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyaERBOzs7O0FBQ0E7Ozs7QUE1aERBOzs7Ozs7Ozs7QUFTQSxJQUFJQSxNQUFNLGFBQVVD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Q0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsRyIsImZpbGUiOiJwYXJ0aWNsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYmMzZTdlNWNhMDUzZjcwMzhlZiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qIEF1dGhvciA6IFZpbmNlbnQgR2FycmVhdSAgLSB2aW5jZW50Z2FycmVhdS5jb21cbi8qIE1JVCBsaWNlbnNlOiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vKiBEZW1vIC8gR2VuZXJhdG9yIDogdmluY2VudGdhcnJlYXUuY29tL3BhcnRpY2xlcy5qc1xuLyogR2l0SHViIDogZ2l0aHViLmNvbS9WaW5jZW50R2FycmVhdS9wYXJ0aWNsZXMuanNcbi8qIEhvdyB0byB1c2U/IDogQ2hlY2sgdGhlIEdpdEh1YiBSRUFETUVcbi8qIHYyLjAuMFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxudmFyIHBKUyA9IGZ1bmN0aW9uICh0YWdfaWQsIHBhcmFtcykge1xuXG4gIHZhciBjYW52YXNfZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRhZ19pZCArICcgPiAucGFydGljbGVzLWpzLWNhbnZhcy1lbCcpO1xuXG4gIC8qIHBhcnRpY2xlcy5qcyB2YXJpYWJsZXMgd2l0aCBkZWZhdWx0IHZhbHVlcyAqL1xuICB0aGlzLnBKUyA9IHtcbiAgICBjYW52YXM6IHtcbiAgICAgIGVsOiBjYW52YXNfZWwsXG4gICAgICB3OiBjYW52YXNfZWwub2Zmc2V0V2lkdGgsXG4gICAgICBoOiBjYW52YXNfZWwub2Zmc2V0SGVpZ2h0XG4gICAgfSxcbiAgICBwYXJ0aWNsZXM6IHtcbiAgICAgIG51bWJlcjoge1xuICAgICAgICB2YWx1ZTogNDAwLFxuICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgdmFsdWU6ICcjZmZmJ1xuICAgICAgfSxcbiAgICAgIHNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBjb2xvcjogJyNmZjAwMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICBuYl9zaWRlczogNVxuICAgICAgICB9LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3BhY2l0eToge1xuICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgICAgb3BhY2l0eV9taW46IDAsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdmFsdWU6IDIwLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogMjAsXG4gICAgICAgICAgc2l6ZV9taW46IDAsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgd2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgIG91dF9tb2RlOiAnb3V0JyxcbiAgICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgICAgYXR0cmFjdDoge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgcm90YXRlWDogMzAwMCxcbiAgICAgICAgICByb3RhdGVZOiAzMDAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhcnJheTogW11cbiAgICB9LFxuICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgIGRldGVjdF9vbjogJ2NhbnZhcycsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgb25ob3Zlcjoge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICBtb2RlOiAnZ3JhYidcbiAgICAgICAgfSxcbiAgICAgICAgb25jbGljazoge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICBtb2RlOiAncHVzaCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICB9LFxuICAgICAgbW9kZXM6IHtcbiAgICAgICAgZ3JhYjoge1xuICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICAgICAgbGluZV9saW5rZWQ6IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGJ1YmJsZToge1xuICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgZHVyYXRpb246IDAuNFxuICAgICAgICB9LFxuICAgICAgICByZXB1bHNlOiB7XG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICAgIH0sXG4gICAgICAgIHB1c2g6IHtcbiAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlOiB7XG4gICAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb3VzZToge31cbiAgICB9LFxuICAgIHJldGluYV9kZXRlY3Q6IGZhbHNlLFxuICAgIGZuOiB7XG4gICAgICBpbnRlcmFjdDoge30sXG4gICAgICBtb2Rlczoge30sXG4gICAgICB2ZW5kb3JzOiB7fVxuICAgIH0sXG4gICAgdG1wOiB7fVxuICB9O1xuXG4gIHZhciBwSlMgPSB0aGlzLnBKUztcblxuICAvKiBwYXJhbXMgc2V0dGluZ3MgKi9cbiAgaWYgKHBhcmFtcykge1xuICAgIE9iamVjdC5kZWVwRXh0ZW5kKHBKUywgcGFyYW1zKTtcbiAgfVxuXG4gIHBKUy50bXAub2JqID0ge1xuICAgIHNpemVfdmFsdWU6IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxcbiAgICBzaXplX2FuaW1fc3BlZWQ6IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLFxuICAgIG1vdmVfc3BlZWQ6IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCxcbiAgICBsaW5lX2xpbmtlZF9kaXN0YW5jZTogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSxcbiAgICBsaW5lX2xpbmtlZF93aWR0aDogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxcbiAgICBtb2RlX2dyYWJfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UsXG4gICAgbW9kZV9idWJibGVfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSxcbiAgICBtb2RlX2J1YmJsZV9zaXplOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcbiAgICBtb2RlX3JlcHVsc2VfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2VcbiAgfTtcblxuXG4gIHBKUy5mbi5yZXRpbmFJbml0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHBKUy5yZXRpbmFfZGV0ZWN0ICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSkge1xuICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICBwSlMudG1wLnJldGluYSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IDE7XG4gICAgICBwSlMudG1wLnJldGluYSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGggKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmNhbnZhcy5oID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQgKiBwSlMuY2FudmFzLnB4cmF0aW87XG5cbiAgICBwSlMucGFydGljbGVzLnNpemUudmFsdWUgPSBwSlMudG1wLm9iai5zaXplX3ZhbHVlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkID0gcEpTLnRtcC5vYmouc2l6ZV9hbmltX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCA9IHBKUy50bXAub2JqLm1vdmVfc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2dyYWJfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCA9IHBKUy50bXAub2JqLmxpbmVfbGlua2VkX3dpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID0gcEpTLnRtcC5vYmoubW9kZV9idWJibGVfc2l6ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9yZXB1bHNlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuXG4gIH07XG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIGNhbnZhcyAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4uY2FudmFzSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwSlMuY2FudmFzLmN0eCA9IHBKUy5jYW52YXMuZWwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfTtcblxuICBwSlMuZm4uY2FudmFzU2l6ZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XG4gICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XG5cbiAgICBpZiAocEpTICYmIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5yZXNpemUpIHtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBwSlMuY2FudmFzLncgPSBwSlMuY2FudmFzLmVsLm9mZnNldFdpZHRoO1xuICAgICAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICAvKiByZXNpemUgY2FudmFzICovXG4gICAgICAgIGlmIChwSlMudG1wLnJldGluYSkge1xuICAgICAgICAgIHBKUy5jYW52YXMudyAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgICAgcEpTLmNhbnZhcy5oICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XG4gICAgICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xuXG4gICAgICAgIC8qIHJlcGFpbnQgY2FudmFzIG9uIGFuaW0gZGlzYWJsZWQgKi9cbiAgICAgICAgaWYgKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSB7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGRlbnNpdHkgcGFydGljbGVzIGVuYWJsZWQgKi9cbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5jYW52YXNQYWludCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwSlMuY2FudmFzLmN0eC5maWxsUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XG4gIH07XG5cbiAgcEpTLmZuLmNhbnZhc0NsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XG4gIH07XG5cblxuICAvKiAtLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyAtLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5wYXJ0aWNsZSA9IGZ1bmN0aW9uIChjb2xvciwgb3BhY2l0eSwgcG9zaXRpb24pIHtcblxuICAgIC8qIHNpemUgKi9cbiAgICB0aGlzLnJhZGl1cyA9IChwSlMucGFydGljbGVzLnNpemUucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlO1xuICAgIGlmIChwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpIHtcbiAgICAgIHRoaXMuc2l6ZV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHRoaXMudnMgPSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCAvIDEwMDtcbiAgICAgIGlmICghcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3luYykge1xuICAgICAgICB0aGlzLnZzID0gdGhpcy52cyAqIE1hdGgucmFuZG9tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogcG9zaXRpb24gKi9cbiAgICB0aGlzLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgIHRoaXMueSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG5cbiAgICAvKiBjaGVjayBwb3NpdGlvbiAgLSBpbnRvIHRoZSBjYW52YXMgKi9cbiAgICBpZiAodGhpcy54ID4gcEpTLmNhbnZhcy53IC0gdGhpcy5yYWRpdXMgKiAyKSB0aGlzLnggPSB0aGlzLnggLSB0aGlzLnJhZGl1cztcbiAgICBlbHNlIGlmICh0aGlzLnggPCB0aGlzLnJhZGl1cyAqIDIpIHRoaXMueCA9IHRoaXMueCArIHRoaXMucmFkaXVzO1xuICAgIGlmICh0aGlzLnkgPiBwSlMuY2FudmFzLmggLSB0aGlzLnJhZGl1cyAqIDIpIHRoaXMueSA9IHRoaXMueSAtIHRoaXMucmFkaXVzO1xuICAgIGVsc2UgaWYgKHRoaXMueSA8IHRoaXMucmFkaXVzICogMikgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5yYWRpdXM7XG5cbiAgICAvKiBjaGVjayBwb3NpdGlvbiAtIGF2b2lkIG92ZXJsYXAgKi9cbiAgICBpZiAocEpTLnBhcnRpY2xlcy5tb3ZlLmJvdW5jZSkge1xuICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHRoaXMsIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvKiBjb2xvciAqL1xuICAgIHRoaXMuY29sb3IgPSB7fTtcbiAgICBpZiAodHlwZW9mIChjb2xvci52YWx1ZSkgPT0gJ29iamVjdCcpIHtcblxuICAgICAgaWYgKGNvbG9yLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgdmFyIGNvbG9yX3NlbGVjdGVkID0gY29sb3IudmFsdWVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcEpTLnBhcnRpY2xlcy5jb2xvci52YWx1ZS5sZW5ndGgpXTtcbiAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYihjb2xvcl9zZWxlY3RlZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29sb3IudmFsdWUuciAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuZyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUuYiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcbiAgICAgICAgICAgIHI6IGNvbG9yLnZhbHVlLnIsXG4gICAgICAgICAgICBnOiBjb2xvci52YWx1ZS5nLFxuICAgICAgICAgICAgYjogY29sb3IudmFsdWUuYlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29sb3IudmFsdWUuaCAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUucyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUubCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmNvbG9yLmhzbCA9IHtcbiAgICAgICAgICAgIGg6IGNvbG9yLnZhbHVlLmgsXG4gICAgICAgICAgICBzOiBjb2xvci52YWx1ZS5zLFxuICAgICAgICAgICAgbDogY29sb3IudmFsdWUubFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmIChjb2xvci52YWx1ZSA9PSAncmFuZG9tJykge1xuICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XG4gICAgICAgIHI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxuICAgICAgICBnOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKSxcbiAgICAgICAgYjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiAoY29sb3IudmFsdWUpID09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKHRoaXMuY29sb3IudmFsdWUpO1xuICAgIH1cblxuICAgIC8qIG9wYWNpdHkgKi9cbiAgICB0aGlzLm9wYWNpdHkgPSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZTtcbiAgICBpZiAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKSB7XG4gICAgICB0aGlzLm9wYWNpdHlfc3RhdHVzID0gZmFsc2U7XG4gICAgICB0aGlzLnZvID0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uc3BlZWQgLyAxMDA7XG4gICAgICBpZiAoIXBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmMpIHtcbiAgICAgICAgdGhpcy52byA9IHRoaXMudm8gKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIGFuaW1hdGlvbiAtIHZlbG9jaXR5IGZvciBzcGVlZCAqL1xuICAgIHZhciB2ZWxiYXNlID0ge31cbiAgICBzd2l0Y2ggKHBKUy5wYXJ0aWNsZXMubW92ZS5kaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHZlbGJhc2UgPSB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAtMVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcC1yaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7XG4gICAgICAgICAgeDogMC41LFxuICAgICAgICAgIHk6IC0wLjVcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7XG4gICAgICAgICAgeDogMSxcbiAgICAgICAgICB5OiAtMFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7XG4gICAgICAgICAgeDogMC41LFxuICAgICAgICAgIHk6IDAuNVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIHZlbGJhc2UgPSB7XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAxXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOlxuICAgICAgICB2ZWxiYXNlID0ge1xuICAgICAgICAgIHg6IC0wLjUsXG4gICAgICAgICAgeTogMVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB2ZWxiYXNlID0ge1xuICAgICAgICAgIHg6IC0xLFxuICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7XG4gICAgICAgICAgeDogLTAuNSxcbiAgICAgICAgICB5OiAtMC41XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmVsYmFzZSA9IHtcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDBcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5zdHJhaWdodCkge1xuICAgICAgdGhpcy52eCA9IHZlbGJhc2UueDtcbiAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnk7XG4gICAgICBpZiAocEpTLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSkge1xuICAgICAgICB0aGlzLnZ4ID0gdGhpcy52eCAqIChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgKiAoTWF0aC5yYW5kb20oKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudnggPSB2ZWxiYXNlLnggKyBNYXRoLnJhbmRvbSgpIC0gMC41O1xuICAgICAgdGhpcy52eSA9IHZlbGJhc2UueSArIE1hdGgucmFuZG9tKCkgLSAwLjU7XG4gICAgfVxuXG4gICAgLy8gdmFyIHRoZXRhID0gMi4wICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gICAgLy8gdGhpcy52eCA9IE1hdGguY29zKHRoZXRhKTtcbiAgICAvLyB0aGlzLnZ5ID0gTWF0aC5zaW4odGhldGEpO1xuXG4gICAgdGhpcy52eF9pID0gdGhpcy52eDtcbiAgICB0aGlzLnZ5X2kgPSB0aGlzLnZ5O1xuXG5cblxuICAgIC8qIGlmIHNoYXBlIGlzIGltYWdlICovXG5cbiAgICB2YXIgc2hhcGVfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZTtcbiAgICBpZiAodHlwZW9mIChzaGFwZV90eXBlKSA9PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHNoYXBlX3R5cGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB2YXIgc2hhcGVfc2VsZWN0ZWQgPSBzaGFwZV90eXBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoYXBlX3R5cGUubGVuZ3RoKV07XG4gICAgICAgIHRoaXMuc2hhcGUgPSBzaGFwZV9zZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3R5cGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2hhcGUgPT0gJ2ltYWdlJykge1xuICAgICAgdmFyIHNoID0gcEpTLnBhcnRpY2xlcy5zaGFwZTtcbiAgICAgIHRoaXMuaW1nID0ge1xuICAgICAgICBzcmM6IHNoLmltYWdlLnNyYyxcbiAgICAgICAgcmF0aW86IHNoLmltYWdlLndpZHRoIC8gc2guaW1hZ2UuaGVpZ2h0XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaW1nLnJhdGlvKSB0aGlzLmltZy5yYXRpbyA9IDE7XG4gICAgICBpZiAocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyh0aGlzKTtcbiAgICAgICAgaWYgKHBKUy50bXAucHVzaGluZykge1xuICAgICAgICAgIHRoaXMuaW1nLmxvYWRlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cblxuICB9O1xuXG5cbiAgcEpTLmZuLnBhcnRpY2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIHAgPSB0aGlzO1xuXG4gICAgaWYgKHAucmFkaXVzX2J1YmJsZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByYWRpdXMgPSBwLnJhZGl1c19idWJibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByYWRpdXMgPSBwLnJhZGl1cztcbiAgICB9XG5cbiAgICBpZiAocC5vcGFjaXR5X2J1YmJsZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5X2J1YmJsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHk7XG4gICAgfVxuXG4gICAgaWYgKHAuY29sb3IucmdiKSB7XG4gICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnICsgcC5jb2xvci5yZ2IuciArICcsJyArIHAuY29sb3IucmdiLmcgKyAnLCcgKyBwLmNvbG9yLnJnYi5iICsgJywnICsgb3BhY2l0eSArICcpJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ2hzbGEoJyArIHAuY29sb3IuaHNsLmggKyAnLCcgKyBwLmNvbG9yLmhzbC5zICsgJyUsJyArIHAuY29sb3IuaHNsLmwgKyAnJSwnICsgb3BhY2l0eSArICcpJztcbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLmN0eC5maWxsU3R5bGUgPSBjb2xvcl92YWx1ZTtcbiAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcblxuICAgIHN3aXRjaCAocC5zaGFwZSkge1xuXG4gICAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgICBwSlMuY2FudmFzLmN0eC5hcmMocC54LCBwLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2VkZ2UnOlxuICAgICAgICBwSlMuY2FudmFzLmN0eC5yZWN0KHAueCAtIHJhZGl1cywgcC55IC0gcmFkaXVzLCByYWRpdXMgKiAyLCByYWRpdXMgKiAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RyaWFuZ2xlJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKHBKUy5jYW52YXMuY3R4LCBwLnggLSByYWRpdXMsIHAueSArIHJhZGl1cyAvIDEuNjYsIHJhZGl1cyAqIDIsIDMsIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9seWdvbic6XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eCxcbiAgICAgICAgICBwLnggLSByYWRpdXMgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gMy41KSwgLy8gc3RhcnRYXG4gICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIuNjYgLyAzLjUpLCAvLyBzdGFydFlcbiAgICAgICAgICByYWRpdXMgKiAyLjY2IC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcyAvIDMpLCAvLyBzaWRlTGVuZ3RoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcbiAgICAgICAgICAxIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzdGFyJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxuICAgICAgICAgIHAueCAtIHJhZGl1cyAqIDIgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzIC8gNCksIC8vIHN0YXJ0WFxuICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyICogMi42NiAvIDMuNSksIC8vIHN0YXJ0WVxuICAgICAgICAgIHJhZGl1cyAqIDIgKiAyLjY2IC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcyAvIDMpLCAvLyBzaWRlTGVuZ3RoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcbiAgICAgICAgICAyIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbWFnZSc6XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBpbWdfb2JqLFxuICAgICAgICAgICAgcC54IC0gcmFkaXVzLFxuICAgICAgICAgICAgcC55IC0gcmFkaXVzLFxuICAgICAgICAgICAgcmFkaXVzICogMixcbiAgICAgICAgICAgIHJhZGl1cyAqIDIgLyBwLmltZy5yYXRpb1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJykge1xuICAgICAgICAgIHZhciBpbWdfb2JqID0gcC5pbWcub2JqO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBpbWdfb2JqID0gcEpTLnRtcC5pbWdfb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltZ19vYmopIHtcbiAgICAgICAgICBkcmF3KCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgIH1cblxuICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgaWYgKHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoID4gMCkge1xuICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSBwSlMucGFydGljbGVzLnNoYXBlLnN0cm9rZS5jb2xvcjtcbiAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoO1xuICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbCgpO1xuXG4gIH07XG5cblxuICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWU7IGkrKykge1xuICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheS5wdXNoKG5ldyBwSlMuZm4ucGFydGljbGUocEpTLnBhcnRpY2xlcy5jb2xvciwgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSk7XG4gICAgfVxuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgLyogdGhlIHBhcnRpY2xlICovXG4gICAgICB2YXIgcCA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XG5cbiAgICAgIC8vIHZhciBkID0gKCBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54ICkgKiBkeCArICggZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSApICogZHk7XG4gICAgICAvLyB2YXIgZiA9IC1CQU5HX1NJWkUgLyBkO1xuICAgICAgLy8gaWYgKCBkIDwgQkFOR19TSVpFICkge1xuICAgICAgLy8gICAgIHZhciB0ID0gTWF0aC5hdGFuMiggZHksIGR4ICk7XG4gICAgICAvLyAgICAgcC52eCA9IGYgKiBNYXRoLmNvcyh0KTtcbiAgICAgIC8vICAgICBwLnZ5ID0gZiAqIE1hdGguc2luKHQpO1xuICAgICAgLy8gfVxuXG4gICAgICAvKiBtb3ZlIHRoZSBwYXJ0aWNsZSAqL1xuICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgICAgdmFyIG1zID0gcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkIC8gMjtcbiAgICAgICAgcC54ICs9IHAudnggKiBtcztcbiAgICAgICAgcC55ICs9IHAudnkgKiBtcztcbiAgICAgIH1cblxuICAgICAgLyogY2hhbmdlIG9wYWNpdHkgc3RhdHVzICovXG4gICAgICBpZiAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKSB7XG4gICAgICAgIGlmIChwLm9wYWNpdHlfc3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICBpZiAocC5vcGFjaXR5ID49IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkgcC5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHAub3BhY2l0eSArPSBwLnZvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChwLm9wYWNpdHkgPD0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0ub3BhY2l0eV9taW4pIHAub3BhY2l0eV9zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIHAub3BhY2l0eSAtPSBwLnZvO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLm9wYWNpdHkgPCAwKSBwLm9wYWNpdHkgPSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2Ugc2l6ZSAqL1xuICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSkge1xuICAgICAgICBpZiAocC5zaXplX3N0YXR1cyA9PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHAucmFkaXVzID49IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkgcC5zaXplX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHAucmFkaXVzICs9IHAudnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHAucmFkaXVzIDw9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluKSBwLnNpemVfc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICBwLnJhZGl1cyAtPSBwLnZzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwLnJhZGl1cyA8IDApIHAucmFkaXVzID0gMDtcbiAgICAgIH1cblxuICAgICAgLyogY2hhbmdlIHBhcnRpY2xlIHBvc2l0aW9uIGlmIGl0IGlzIG91dCBvZiBjYW52YXMgKi9cbiAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpIHtcbiAgICAgICAgdmFyIG5ld19wb3MgPSB7XG4gICAgICAgICAgeF9sZWZ0OiBwLnJhZGl1cyxcbiAgICAgICAgICB4X3JpZ2h0OiBwSlMuY2FudmFzLncsXG4gICAgICAgICAgeV90b3A6IHAucmFkaXVzLFxuICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmhcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld19wb3MgPSB7XG4gICAgICAgICAgeF9sZWZ0OiAtcC5yYWRpdXMsXG4gICAgICAgICAgeF9yaWdodDogcEpTLmNhbnZhcy53ICsgcC5yYWRpdXMsXG4gICAgICAgICAgeV90b3A6IC1wLnJhZGl1cyxcbiAgICAgICAgICB5X2JvdHRvbTogcEpTLmNhbnZhcy5oICsgcC5yYWRpdXNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocC54IC0gcC5yYWRpdXMgPiBwSlMuY2FudmFzLncpIHtcbiAgICAgICAgcC54ID0gbmV3X3Bvcy54X2xlZnQ7XG4gICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG4gICAgICB9IGVsc2UgaWYgKHAueCArIHAucmFkaXVzIDwgMCkge1xuICAgICAgICBwLnggPSBuZXdfcG9zLnhfcmlnaHQ7XG4gICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG4gICAgICB9XG4gICAgICBpZiAocC55IC0gcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHtcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X3RvcDtcbiAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgIH0gZWxzZSBpZiAocC55ICsgcC5yYWRpdXMgPCAwKSB7XG4gICAgICAgIHAueSA9IG5ld19wb3MueV9ib3R0b207XG4gICAgICAgIHAueCA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgICB9XG5cbiAgICAgIC8qIG91dCBvZiBjYW52YXMgbW9kZXMgKi9cbiAgICAgIHN3aXRjaCAocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlKSB7XG4gICAgICAgIGNhc2UgJ2JvdW5jZSc6XG4gICAgICAgICAgaWYgKHAueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgZWxzZSBpZiAocC54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgaWYgKHAueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgZWxzZSBpZiAocC55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8qIGV2ZW50cyAqL1xuICAgICAgaWYgKGlzSW5BcnJheSgnZ3JhYicsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKSB7XG4gICAgICAgIHBKUy5mbi5tb2Rlcy5ncmFiUGFydGljbGUocCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpIHx8IGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpIHtcbiAgICAgICAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlKHApO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpIHtcbiAgICAgICAgcEpTLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZShwKTtcbiAgICAgIH1cblxuICAgICAgLyogaW50ZXJhY3Rpb24gYXV0byBiZXR3ZWVuIHBhcnRpY2xlcyAqL1xuICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlIHx8IHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSkge1xuICAgICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtqXTtcblxuICAgICAgICAgIC8qIGxpbmsgcGFydGljbGVzICovXG4gICAgICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlKSB7XG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyhwLCBwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogYXR0cmFjdCBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICBpZiAocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKSB7XG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyhwLCBwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogYm91bmNlIHBhcnRpY2xlcyAqL1xuICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKSB7XG4gICAgICAgICAgICBwSlMuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzKHAsIHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzRHJhdyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIC8qIGNsZWFyIGNhbnZhcyAqL1xuICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XG5cbiAgICAvKiB1cGRhdGUgZWFjaCBwYXJ0aWNsZXMgcGFyYW0gKi9cbiAgICBwSlMuZm4ucGFydGljbGVzVXBkYXRlKCk7XG5cbiAgICAvKiBkcmF3IGVhY2ggcGFydGljbGUgKi9cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcbiAgICAgIHAuZHJhdygpO1xuICAgIH1cblxuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICBwSlMucGFydGljbGVzLmFycmF5ID0gW107XG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc1JlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKiBpbml0IGFsbCAqL1xuICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmNoZWNrQW5pbUZyYW1lKTtcbiAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSB1bmRlZmluZWQ7XG4gICAgcEpTLnRtcC5pbWdfb2JqID0gdW5kZWZpbmVkO1xuICAgIHBKUy50bXAuY291bnRfc3ZnID0gMDtcbiAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcbiAgICBwSlMuZm4uY2FudmFzQ2xlYXIoKTtcblxuICAgIC8qIHJlc3RhcnQgKi9cbiAgICBwSlMuZm4udmVuZG9ycy5zdGFydCgpO1xuXG4gIH07XG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgaW50ZXJhY3Rpb24gLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMgPSBmdW5jdGlvbiAocDEsIHAyKSB7XG5cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gcDEgYW5kIHAyIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xuICAgIGlmIChkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UpIHtcblxuICAgICAgdmFyIG9wYWNpdHlfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSAtIChkaXN0IC8gKDEgLyBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2U7XG5cbiAgICAgIGlmIChvcGFjaXR5X2xpbmUgPiAwKSB7XG5cbiAgICAgICAgLyogc3R5bGUgKi9cbiAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKCcgKyBjb2xvcl9saW5lLnIgKyAnLCcgKyBjb2xvcl9saW5lLmcgKyAnLCcgKyBjb2xvcl9saW5lLmIgKyAnLCcgKyBvcGFjaXR5X2xpbmUgKyAnKSc7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XG4gICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXG5cbiAgICAgICAgLyogcGF0aCAqL1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyA9IGZ1bmN0aW9uIChwMSwgcDIpIHtcblxuICAgIC8qIGNvbmRlbnNlZCBwYXJ0aWNsZXMgKi9cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgIGlmIChkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UpIHtcblxuICAgICAgdmFyIGF4ID0gZHggLyAocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWCAqIDEwMDApLFxuICAgICAgICBheSA9IGR5IC8gKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVkgKiAxMDAwKTtcblxuICAgICAgcDEudnggLT0gYXg7XG4gICAgICBwMS52eSAtPSBheTtcblxuICAgICAgcDIudnggKz0gYXg7XG4gICAgICBwMi52eSArPSBheTtcblxuICAgIH1cblxuXG4gIH1cblxuXG4gIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMgPSBmdW5jdGlvbiAocDEsIHAyKSB7XG5cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KSxcbiAgICAgIGRpc3RfcCA9IHAxLnJhZGl1cyArIHAyLnJhZGl1cztcblxuICAgIGlmIChkaXN0IDw9IGRpc3RfcCkge1xuICAgICAgcDEudnggPSAtcDEudng7XG4gICAgICBwMS52eSA9IC1wMS52eTtcblxuICAgICAgcDIudnggPSAtcDIudng7XG4gICAgICBwMi52eSA9IC1wMi52eTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gbW9kZXMgZXZlbnRzIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzID0gZnVuY3Rpb24gKG5iLCBwb3MpIHtcblxuICAgIHBKUy50bXAucHVzaGluZyA9IHRydWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5iOyBpKyspIHtcbiAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChcbiAgICAgICAgbmV3IHBKUy5mbi5wYXJ0aWNsZShcbiAgICAgICAgICBwSlMucGFydGljbGVzLmNvbG9yLFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwge1xuICAgICAgICAgICAgJ3gnOiBwb3MgPyBwb3MucG9zX3ggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53LFxuICAgICAgICAgICAgJ3knOiBwb3MgPyBwb3MucG9zX3kgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApXG4gICAgICBpZiAoaSA9PSBuYiAtIDEpIHtcbiAgICAgICAgaWYgKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSB7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBwSlMudG1wLnB1c2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMgPSBmdW5jdGlvbiAobmIpIHtcblxuICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkuc3BsaWNlKDAsIG5iKTtcbiAgICBpZiAoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIHtcbiAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4ubW9kZXMuYnViYmxlUGFydGljbGUgPSBmdW5jdGlvbiAocCkge1xuXG4gICAgLyogb24gaG92ZXIgZXZlbnQgKi9cbiAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpIHtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXG4gICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UgKiBkeF9tb3VzZSArIGR5X21vdXNlICogZHlfbW91c2UpLFxuICAgICAgICByYXRpbyA9IDEgLSBkaXN0X21vdXNlIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlO1xuXG4gICAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gcC5vcGFjaXR5O1xuICAgICAgICBwLnJhZGl1c19idWJibGUgPSBwLnJhZGl1cztcbiAgICAgIH1cblxuICAgICAgLyogbW91c2Vtb3ZlIC0gY2hlY2sgcmF0aW8gKi9cbiAgICAgIGlmIChkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSkge1xuXG4gICAgICAgIGlmIChyYXRpbyA+PSAwICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJykge1xuXG4gICAgICAgICAgLyogc2l6ZSAqL1xuICAgICAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSAhPSBwSlMucGFydGljbGVzLnNpemUudmFsdWUpIHtcblxuICAgICAgICAgICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID4gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHZhciBzaXplID0gcC5yYWRpdXMgKyAocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgKiByYXRpbyk7XG4gICAgICAgICAgICAgIGlmIChzaXplID49IDApIHtcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgZGlmID0gcC5yYWRpdXMgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcbiAgICAgICAgICAgICAgICBzaXplID0gcC5yYWRpdXMgLSAoZGlmICogcmF0aW8pO1xuICAgICAgICAgICAgICBpZiAoc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIG9wYWNpdHkgKi9cbiAgICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgIT0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSB7XG5cbiAgICAgICAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSA+IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkge1xuICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5ICogcmF0aW87XG4gICAgICAgICAgICAgIGlmIChvcGFjaXR5ID4gcC5vcGFjaXR5ICYmIG9wYWNpdHkgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHkgLSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlIC0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpICogcmF0aW87XG4gICAgICAgICAgICAgIGlmIChvcGFjaXR5IDwgcC5vcGFjaXR5ICYmIG9wYWNpdHkgPj0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgfVxuXG5cbiAgICAgIC8qIG1vdXNlbGVhdmUgKi9cbiAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXG4gICAgZWxzZSBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpIHtcblxuXG4gICAgICBpZiAocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpIHtcbiAgICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3gsXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSxcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlICogZHhfbW91c2UgKyBkeV9tb3VzZSAqIGR5X21vdXNlKSxcbiAgICAgICAgICB0aW1lX3NwZW50ID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSkgLyAxMDAwO1xuXG4gICAgICAgIGlmICh0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKSB7XG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uICogMikge1xuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzKGJ1YmJsZV9wYXJhbSwgcGFydGljbGVzX3BhcmFtLCBwX29ial9idWJibGUsIHBfb2JqLCBpZCkge1xuXG4gICAgICAgIGlmIChidWJibGVfcGFyYW0gIT0gcGFydGljbGVzX3BhcmFtKSB7XG5cbiAgICAgICAgICBpZiAoIXBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCkge1xuICAgICAgICAgICAgaWYgKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgIGlmIChwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKSB2YXIgb2JqID0gcF9vYmpfYnViYmxlO1xuICAgICAgICAgICAgICBlbHNlIHZhciBvYmogPSBwX29iajtcbiAgICAgICAgICAgICAgaWYgKG9iaiAhPSBidWJibGVfcGFyYW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGlkID09ICdvcGFjaXR5JykgcC5vcGFjaXR5X2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIGlmIChpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHZhciB2YWx1ZV90bXAgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiksXG4gICAgICAgICAgICAgICAgZGlmID0gYnViYmxlX3BhcmFtIC0gdmFsdWVfdG1wO1xuICAgICAgICAgICAgICB2YWx1ZSA9IGJ1YmJsZV9wYXJhbSArIGRpZjtcbiAgICAgICAgICAgICAgaWYgKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICAgIGlmIChpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmIChwSlMudG1wLmJ1YmJsZV9jbGlja2luZykge1xuICAgICAgICAvKiBzaXplICovXG4gICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSwgcC5yYWRpdXNfYnViYmxlLCBwLnJhZGl1cywgJ3NpemUnKTtcbiAgICAgICAgLyogb3BhY2l0eSAqL1xuICAgICAgICBwcm9jZXNzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5LCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsIHAub3BhY2l0eV9idWJibGUsIHAub3BhY2l0eSwgJ29wYWNpdHknKTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLm1vZGVzLnJlcHVsc2VQYXJ0aWNsZSA9IGZ1bmN0aW9uIChwKSB7XG5cbiAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJykge1xuXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcbiAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSAqIGR4X21vdXNlICsgZHlfbW91c2UgKiBkeV9tb3VzZSk7XG5cbiAgICAgIHZhciBub3JtVmVjID0ge1xuICAgICAgICAgIHg6IGR4X21vdXNlIC8gZGlzdF9tb3VzZSxcbiAgICAgICAgICB5OiBkeV9tb3VzZSAvIGRpc3RfbW91c2VcbiAgICAgICAgfSxcbiAgICAgICAgcmVwdWxzZVJhZGl1cyA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UsXG4gICAgICAgIHZlbG9jaXR5ID0gMTAwLFxuICAgICAgICByZXB1bHNlRmFjdG9yID0gY2xhbXAoKDEgLyByZXB1bHNlUmFkaXVzKSAqICgtMSAqIE1hdGgucG93KGRpc3RfbW91c2UgLyByZXB1bHNlUmFkaXVzLCAyKSArIDEpICogcmVwdWxzZVJhZGl1cyAqIHZlbG9jaXR5LCAwLCA1MCk7XG5cbiAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgIHg6IHAueCArIG5vcm1WZWMueCAqIHJlcHVsc2VGYWN0b3IsXG4gICAgICAgIHk6IHAueSArIG5vcm1WZWMueSAqIHJlcHVsc2VGYWN0b3JcbiAgICAgIH1cblxuICAgICAgaWYgKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJykge1xuICAgICAgICBpZiAocG9zLnggLSBwLnJhZGl1cyA+IDAgJiYgcG9zLnggKyBwLnJhZGl1cyA8IHBKUy5jYW52YXMudykgcC54ID0gcG9zLng7XG4gICAgICAgIGlmIChwb3MueSAtIHAucmFkaXVzID4gMCAmJiBwb3MueSArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy5oKSBwLnkgPSBwb3MueTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHAueCA9IHBvcy54O1xuICAgICAgICBwLnkgPSBwb3MueTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSB7XG5cbiAgICAgIGlmICghcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCkge1xuICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQrKztcbiAgICAgICAgaWYgKHBKUy50bXAucmVwdWxzZV9jb3VudCA9PSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcpIHtcblxuICAgICAgICB2YXIgcmVwdWxzZVJhZGl1cyA9IE1hdGgucG93KHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UgLyA2LCAzKTtcblxuICAgICAgICB2YXIgZHggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCxcbiAgICAgICAgICBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55LFxuICAgICAgICAgIGQgPSBkeCAqIGR4ICsgZHkgKiBkeTtcblxuICAgICAgICB2YXIgZm9yY2UgPSAtcmVwdWxzZVJhZGl1cyAvIGQgKiAxO1xuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG5cbiAgICAgICAgICB2YXIgZiA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgICAgICBwLnZ4ID0gZm9yY2UgKiBNYXRoLmNvcyhmKTtcbiAgICAgICAgICBwLnZ5ID0gZm9yY2UgKiBNYXRoLnNpbihmKTtcblxuICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUgPT0gJ2JvdW5jZScpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICAgIHg6IHAueCArIHAudngsXG4gICAgICAgICAgICAgIHk6IHAueSArIHAudnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3MueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgICBlbHNlIGlmIChwb3MueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgICAgaWYgKHBvcy55ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHAudnkgPSAtcC52eTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvcy55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIGlmIChkIDw9IHJlcHVsc2VSYWRpdXMpIHtcbiAgICAgICAgICBwcm9jZXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBiYW5nIC0gc2xvdyBtb3Rpb24gbW9kZVxuICAgICAgICAvLyBpZighcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCl7XG4gICAgICAgIC8vICAgaWYoZCA8PSByZXB1bHNlUmFkaXVzKXtcbiAgICAgICAgLy8gICAgIHByb2Nlc3MoKTtcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1lbHNle1xuICAgICAgICAvLyAgIHByb2Nlc3MoKTtcbiAgICAgICAgLy8gfVxuXG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9PSBmYWxzZSkge1xuXG4gICAgICAgICAgcC52eCA9IHAudnhfaTtcbiAgICAgICAgICBwLnZ5ID0gcC52eV9pO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuXG4gIHBKUy5mbi5tb2Rlcy5ncmFiUGFydGljbGUgPSBmdW5jdGlvbiAocCkge1xuXG4gICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpIHtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXG4gICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UgKiBkeF9tb3VzZSArIGR5X21vdXNlICogZHlfbW91c2UpO1xuXG4gICAgICAvKiBkcmF3IGEgbGluZSBiZXR3ZWVuIHRoZSBjdXJzb3IgYW5kIHRoZSBwYXJ0aWNsZSBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIHVuZGVyIHRoZSBjb25maWcgZGlzdGFuY2UgKi9cbiAgICAgIGlmIChkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UpIHtcblxuICAgICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3RfbW91c2UgLyAoMSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZTtcblxuICAgICAgICBpZiAob3BhY2l0eV9saW5lID4gMCkge1xuXG4gICAgICAgICAgLyogc3R5bGUgKi9cbiAgICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnICsgY29sb3JfbGluZS5yICsgJywnICsgY29sb3JfbGluZS5nICsgJywnICsgY29sb3JfbGluZS5iICsgJywnICsgb3BhY2l0eV9saW5lICsgJyknO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XG4gICAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cblxuICAgICAgICAgIC8qIHBhdGggKi9cbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLyogZXZlbnRzIHRhcmdldCBlbGVtZW50ICovXG4gICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5LmRldGVjdF9vbiA9PSAnd2luZG93Jykge1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSB3aW5kb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gcEpTLmNhbnZhcy5lbDtcbiAgICB9XG5cblxuICAgIC8qIGRldGVjdCBtb3VzZSBwb3MgLSBvbiBob3ZlciAvIGNsaWNrIGV2ZW50ICovXG4gICAgaWYgKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSB8fCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpIHtcblxuICAgICAgLyogZWwgb24gbW91c2Vtb3ZlICovXG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGlmIChwSlMuaW50ZXJhY3Rpdml0eS5lbCA9PSB3aW5kb3cpIHtcbiAgICAgICAgICB2YXIgcG9zX3ggPSBlLmNsaWVudFgsXG4gICAgICAgICAgICBwb3NfeSA9IGUuY2xpZW50WTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcG9zX3ggPSBlLm9mZnNldFggfHwgZS5jbGllbnRYLFxuICAgICAgICAgICAgcG9zX3kgPSBlLm9mZnNldFkgfHwgZS5jbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBwb3NfeDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBwb3NfeTtcblxuICAgICAgICBpZiAocEpTLnRtcC5yZXRpbmEpIHtcbiAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICB9XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID0gJ21vdXNlbW92ZSc7XG5cbiAgICAgIH0pO1xuXG4gICAgICAvKiBlbCBvbiBvbm1vdXNlbGVhdmUgKi9cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ID0gbnVsbDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBudWxsO1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPSAnbW91c2VsZWF2ZSc7XG5cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyogb24gY2xpY2sgZXZlbnQgKi9cbiAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSB7XG5cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3g7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3k7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKSB7XG5cbiAgICAgICAgICBzd2l0Y2ggKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpIHtcblxuICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgIGlmIChwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSB7XG4gICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID4gMSkge1xuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZW1vdmUucGFydGljbGVzX25iKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2J1YmJsZSc6XG4gICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JlcHVsc2UnOlxuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQgPSAwO1xuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfZmluaXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICB9LCBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmR1cmF0aW9uICogMTAwMClcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgIH1cblxuXG4gIH07XG5cbiAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAocEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5lbmFibGUpIHtcblxuICAgICAgLyogY2FsYyBhcmVhICovXG4gICAgICB2YXIgYXJlYSA9IHBKUy5jYW52YXMuZWwud2lkdGggKiBwSlMuY2FudmFzLmVsLmhlaWdodCAvIDEwMDA7XG4gICAgICBpZiAocEpTLnRtcC5yZXRpbmEpIHtcbiAgICAgICAgYXJlYSA9IGFyZWEgLyAocEpTLmNhbnZhcy5weHJhdGlvICogMik7XG4gICAgICB9XG5cbiAgICAgIC8qIGNhbGMgbnVtYmVyIG9mIHBhcnRpY2xlcyBiYXNlZCBvbiBkZW5zaXR5IGFyZWEgKi9cbiAgICAgIHZhciBuYl9wYXJ0aWNsZXMgPSBhcmVhICogcEpTLnBhcnRpY2xlcy5udW1iZXIudmFsdWUgLyBwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LnZhbHVlX2FyZWE7XG5cbiAgICAgIC8qIGFkZCBvciByZW1vdmUgWCBwYXJ0aWNsZXMgKi9cbiAgICAgIHZhciBtaXNzaW5nX3BhcnRpY2xlcyA9IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoIC0gbmJfcGFydGljbGVzO1xuICAgICAgaWYgKG1pc3NpbmdfcGFydGljbGVzIDwgMCkgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoTWF0aC5hYnMobWlzc2luZ19wYXJ0aWNsZXMpKTtcbiAgICAgIGVsc2UgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhtaXNzaW5nX3BhcnRpY2xlcyk7XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uIChwMSwgcG9zaXRpb24pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwMiA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XG5cbiAgICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICAgICAgaWYgKGRpc3QgPD0gcDEucmFkaXVzICsgcDIucmFkaXVzKSB7XG4gICAgICAgIHAxLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgICAgICBwMS55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcgPSBmdW5jdGlvbiAocCkge1xuXG4gICAgLyogc2V0IGNvbG9yIHRvIHN2ZyBlbGVtZW50ICovXG4gICAgdmFyIHN2Z1htbCA9IHBKUy50bXAuc291cmNlX3N2ZyxcbiAgICAgIHJnYkhleCA9IC8jKFswLTlBLUZdezMsNn0pL2dpLFxuICAgICAgY29sb3JlZFN2Z1htbCA9IHN2Z1htbC5yZXBsYWNlKHJnYkhleCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHtcbiAgICAgICAgaWYgKHAuY29sb3IucmdiKSB7XG4gICAgICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJyArIHAuY29sb3IucmdiLnIgKyAnLCcgKyBwLmNvbG9yLnJnYi5nICsgJywnICsgcC5jb2xvci5yZ2IuYiArICcsJyArIHAub3BhY2l0eSArICcpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnICsgcC5jb2xvci5oc2wuaCArICcsJyArIHAuY29sb3IuaHNsLnMgKyAnJSwnICsgcC5jb2xvci5oc2wubCArICclLCcgKyBwLm9wYWNpdHkgKyAnKSc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbG9yX3ZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAvKiBwcmVwYXJlIHRvIGNyZWF0ZSBpbWcgd2l0aCBjb2xvcmVkIHN2ZyAqL1xuICAgIHZhciBzdmcgPSBuZXcgQmxvYihbY29sb3JlZFN2Z1htbF0sIHtcbiAgICAgICAgdHlwZTogJ2ltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCdcbiAgICAgIH0pLFxuICAgICAgRE9NVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdyxcbiAgICAgIHVybCA9IERPTVVSTC5jcmVhdGVPYmplY3RVUkwoc3ZnKTtcblxuICAgIC8qIGNyZWF0ZSBwYXJ0aWNsZSBpbWcgb2JqICovXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgcC5pbWcub2JqID0gaW1nO1xuICAgICAgcC5pbWcubG9hZGVkID0gdHJ1ZTtcbiAgICAgIERPTVVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHBKUy50bXAuY291bnRfc3ZnKys7XG4gICAgfSk7XG4gICAgaW1nLnNyYyA9IHVybDtcblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZGVzdHJveXBKUyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgY2FudmFzX2VsLnJlbW92ZSgpO1xuICAgIHBKU0RvbSA9IG51bGw7XG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUgPSBmdW5jdGlvbiAoYywgc3RhcnRYLCBzdGFydFksIHNpZGVMZW5ndGgsIHNpZGVDb3VudE51bWVyYXRvciwgc2lkZUNvdW50RGVub21pbmF0b3IpIHtcblxuICAgIC8vIEJ5IFByb2dyYW1taW5nIFRob21hcyAtIGh0dHBzOi8vcHJvZ3JhbW1pbmd0aG9tYXMud29yZHByZXNzLmNvbS8yMDEzLzA0LzAzL24tc2lkZWQtc2hhcGVzL1xuICAgIHZhciBzaWRlQ291bnQgPSBzaWRlQ291bnROdW1lcmF0b3IgKiBzaWRlQ291bnREZW5vbWluYXRvcjtcbiAgICB2YXIgZGVjaW1hbFNpZGVzID0gc2lkZUNvdW50TnVtZXJhdG9yIC8gc2lkZUNvdW50RGVub21pbmF0b3I7XG4gICAgdmFyIGludGVyaW9yQW5nbGVEZWdyZWVzID0gKDE4MCAqIChkZWNpbWFsU2lkZXMgLSAyKSkgLyBkZWNpbWFsU2lkZXM7XG4gICAgdmFyIGludGVyaW9yQW5nbGUgPSBNYXRoLlBJIC0gTWF0aC5QSSAqIGludGVyaW9yQW5nbGVEZWdyZWVzIC8gMTgwOyAvLyBjb252ZXJ0IHRvIHJhZGlhbnNcbiAgICBjLnNhdmUoKTtcbiAgICBjLmJlZ2luUGF0aCgpO1xuICAgIGMudHJhbnNsYXRlKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICBjLm1vdmVUbygwLCAwKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVDb3VudDsgaSsrKSB7XG4gICAgICBjLmxpbmVUbyhzaWRlTGVuZ3RoLCAwKTtcbiAgICAgIGMudHJhbnNsYXRlKHNpZGVMZW5ndGgsIDApO1xuICAgICAgYy5yb3RhdGUoaW50ZXJpb3JBbmdsZSk7XG4gICAgfVxuICAgIC8vYy5zdHJva2UoKTtcbiAgICBjLmZpbGwoKTtcbiAgICBjLnJlc3RvcmUoKTtcblxuICB9O1xuXG4gIHBKUy5mbi52ZW5kb3JzLmV4cG9ydEltZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cub3BlbihwSlMuY2FudmFzLmVsLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyksICdfYmxhbmsnKTtcbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcgPSBmdW5jdGlvbiAodHlwZSkge1xuXG4gICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMgIT0gJycpIHtcblxuICAgICAgaWYgKHR5cGUgPT0gJ3N2ZycpIHtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgICAgICAgcEpTLnRtcC5zb3VyY2Vfc3ZnID0gZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlO1xuICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBJbWFnZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcEpTLnRtcC5pbWdfb2JqID0gaW1nO1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1nLnNyYyA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjO1xuXG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIE5vIGltYWdlLnNyYycpO1xuICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZHJhdyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmIChwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJykge1xuXG4gICAgICBpZiAocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJykge1xuXG4gICAgICAgIGlmIChwSlMudG1wLmNvdW50X3N2ZyA+PSBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSkge1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgaWYgKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzdGlsbCBsb2FkaW5nLi4uJyk7XG4gICAgICAgICAgaWYgKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKHBKUy50bXAuaW1nX29iaiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICAgIGlmICghcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgaWYgKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gaWYgc2hhcGUgaXMgaW1hZ2VcbiAgICBpZiAocEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlID09ICdpbWFnZScpIHtcblxuICAgICAgaWYgKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnID09IHVuZGVmaW5lZCkge1xuICAgICAgICBwSlMudG1wLmNoZWNrQW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShjaGVjayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdpbWFnZXMgbG9hZGVkISBjYW5jZWwgY2hlY2snKTtcbiAgICAgICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMudG1wLmNoZWNrQW5pbUZyYW1lKTtcbiAgICAgICAgaWYgKCFwSlMudG1wLmltZ19lcnJvcikge1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcbiAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvKiBpbml0IGNhbnZhcyArIHBhcnRpY2xlcyAqL1xuICAgIHBKUy5mbi5yZXRpbmFJbml0KCk7XG4gICAgcEpTLmZuLmNhbnZhc0luaXQoKTtcbiAgICBwSlMuZm4uY2FudmFzU2l6ZSgpO1xuICAgIHBKUy5mbi5jYW52YXNQYWludCgpO1xuICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcbiAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuXG4gICAgLyogcGFydGljbGVzLmxpbmVfbGlua2VkIC0gY29udmVydCBoZXggY29sb3JzIHRvIHJnYiAqL1xuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmUgPSBoZXhUb1JnYihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yKTtcblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoaXNJbkFycmF5KCdpbWFnZScsIHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSkpIHtcbiAgICAgIHBKUy50bXAuaW1nX3R5cGUgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5zdWJzdHIocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoIC0gMyk7XG4gICAgICBwSlMuZm4udmVuZG9ycy5sb2FkSW1nKHBKUy50bXAuaW1nX3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzKCk7XG5cbiAgcEpTLmZuLnZlbmRvcnMuc3RhcnQoKTtcblxuXG5cbn07XG5cbi8qIC0tLS0tLS0tLS0gZ2xvYmFsIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbk9iamVjdC5kZWVwRXh0ZW5kID0gZnVuY3Rpb24gZGVlcEV4dGVuZEZ1bmN0aW9uKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxuICAgICAgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICBkZWVwRXh0ZW5kRnVuY3Rpb24oZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KSgpO1xuXG53aW5kb3cuY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1vekNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5vQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgY2xlYXJUaW1lb3V0XG59KSgpO1xuXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgLy8gQnkgVGltIERvd24gLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS81NjI0MTM5LzM0OTM2NTBcbiAgLy8gRXhwYW5kIHNob3J0aGFuZCBmb3JtIChlLmcuIFwiMDNGXCIpIHRvIGZ1bGwgZm9ybSAoZS5nLiBcIjAwMzNGRlwiKVxuICB2YXIgc2hvcnRoYW5kUmVnZXggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xuICBoZXggPSBoZXgucmVwbGFjZShzaG9ydGhhbmRSZWdleCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHtcbiAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xuICB9KTtcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0ID8ge1xuICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXG4gIH0gOiBudWxsO1xufTtcblxuZnVuY3Rpb24gY2xhbXAobnVtYmVyLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobnVtYmVyLCBtaW4pLCBtYXgpO1xufTtcblxuZnVuY3Rpb24gaXNJbkFycmF5KHZhbHVlLCBhcnJheSkge1xuICByZXR1cm4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbn1cblxuXG4vKiAtLS0tLS0tLS0tIHBhcnRpY2xlcy5qcyBmdW5jdGlvbnMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cblxud2luZG93LnBKU0RvbSA9IFtdO1xuXG53aW5kb3cucGFydGljbGVzSlMgPSBmdW5jdGlvbiAodGFnX2lkLCBwYXJhbXMpIHtcblxuICAvL2NvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgLyogbm8gc3RyaW5nIGlkPyBzbyBpdCdzIG9iamVjdCBwYXJhbXMsIGFuZCBzZXQgdGhlIGlkIHdpdGggZGVmYXVsdCBpZCAqL1xuICBpZiAodHlwZW9mICh0YWdfaWQpICE9ICdzdHJpbmcnKSB7XG4gICAgcGFyYW1zID0gdGFnX2lkO1xuICAgIHRhZ19pZCA9ICdwYXJ0aWNsZXMtanMnO1xuICB9XG5cbiAgLyogbm8gaWQ/IHNldCB0aGUgaWQgdG8gZGVmYXVsdCBpZCAqL1xuICBpZiAoIXRhZ19pZCkge1xuICAgIHRhZ19pZCA9ICdwYXJ0aWNsZXMtanMnO1xuICB9XG5cbiAgLyogcEpTIGVsZW1lbnRzICovXG4gIHZhciBwSlNfdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKSxcbiAgICBwSlNfY2FudmFzX2NsYXNzID0gJ3BhcnRpY2xlcy1qcy1jYW52YXMtZWwnLFxuICAgIGV4aXN0X2NhbnZhcyA9IHBKU190YWcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShwSlNfY2FudmFzX2NsYXNzKTtcblxuICAvKiByZW1vdmUgY2FudmFzIGlmIGV4aXN0cyBpbnRvIHRoZSBwSlMgdGFyZ2V0IHRhZyAqL1xuICBpZiAoZXhpc3RfY2FudmFzLmxlbmd0aCkge1xuICAgIHdoaWxlIChleGlzdF9jYW52YXMubGVuZ3RoID4gMCkge1xuICAgICAgcEpTX3RhZy5yZW1vdmVDaGlsZChleGlzdF9jYW52YXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIGNyZWF0ZSBjYW52YXMgZWxlbWVudCAqL1xuICB2YXIgY2FudmFzX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhc19lbC5jbGFzc05hbWUgPSBwSlNfY2FudmFzX2NsYXNzO1xuXG4gIC8qIHNldCBzaXplIGNhbnZhcyAqL1xuICBjYW52YXNfZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgY2FudmFzX2VsLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuXG4gIC8qIGFwcGVuZCBjYW52YXMgKi9cbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCkuYXBwZW5kQ2hpbGQoY2FudmFzX2VsKTtcblxuICAvKiBsYXVuY2ggcGFydGljbGUuanMgKi9cbiAgaWYgKGNhbnZhcyAhPSBudWxsKSB7XG4gICAgcEpTRG9tLnB1c2gobmV3IHBKUyh0YWdfaWQsIHBhcmFtcykpO1xuICB9XG5cbn07XG5cbndpbmRvdy5wYXJ0aWNsZXNKUy5sb2FkID0gZnVuY3Rpb24gKHRhZ19pZCwgcGF0aF9jb25maWdfanNvbiwgY2FsbGJhY2spIHtcblxuICAvKiBsb2FkIGpzb24gY29uZmlnICovXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIHBhdGhfY29uZmlnX2pzb24pO1xuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgaWYgKHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKGRhdGEuY3VycmVudFRhcmdldC5yZXNwb25zZSk7XG4gICAgICAgIHdpbmRvdy5wYXJ0aWNsZXNKUyh0YWdfaWQsIHBhcmFtcyk7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBYTUxIdHRwUmVxdWVzdCBzdGF0dXM6ICcgKyB4aHIuc3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEZpbGUgY29uZmlnIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgeGhyLnNlbmQoKTtcblxufTtcblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAndGlsdC5qcyc7XG5cbndpbmRvdy4kID0gJDtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBwYXJ0aWNsZXNKUy5sb2FkKCdwYXJ0aWNsZXMtY2FudmFzJywgJ3dwLWNvbnRlbnQvdGhlbWVzL2xpYW1vYi10aGVtZS9kaXN0L2Fzc2V0cy9wYXJ0aWNsZXNqcy1jb25maWcuanNvbicsIGZ1bmN0aW9uICgpIHt9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9wYXJ0aWNsZXMuanMiLCIoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgLy8gTm9kZS9Db21tb25KU1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCByb290LCBqUXVlcnkgKSB7XG4gICAgICAgICAgICBpZiAoIGpRdWVyeSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICAgIC8vIHJlcXVpcmUoJ2pRdWVyeScpIHJldHVybnMgYSBmYWN0b3J5IHRoYXQgcmVxdWlyZXMgd2luZG93IHRvXG4gICAgICAgICAgICAgICAgLy8gYnVpbGQgYSBqUXVlcnkgaW5zdGFuY2UsIHdlIG5vcm1hbGl6ZSBob3cgd2UgdXNlIG1vZHVsZXNcbiAgICAgICAgICAgICAgICAvLyB0aGF0IHJlcXVpcmUgdGhpcyBwYXR0ZXJuIGJ1dCB0aGUgd2luZG93IHByb3ZpZGVkIGlzIGEgbm9vcFxuICAgICAgICAgICAgICAgIC8vIGlmIGl0J3MgZGVmaW5lZCAoaG93IGpxdWVyeSB3b3JrcylcbiAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpKHJvb3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG59KGZ1bmN0aW9uICgkKSB7XG4gICAgJC5mbi50aWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCByZXF1ZXN0VGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGlja2luZykgcmV0dXJuO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVRyYW5zZm9ybXMuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0aGlzLnRpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kIG1vdXNlIG1vdmVtZW50IGV2ZW5zIG9uIGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBiaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAkKHRoaXMpLm9uKCdtb3VzZW1vdmUnLCBtb3VzZU1vdmUpO1xuICAgICAgICAgICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIG1vdXNlRW50ZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucmVzZXQpICQodGhpcykub24oJ21vdXNlbGVhdmUnLCBtb3VzZUxlYXZlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmdsYXJlKSAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIHVwZGF0ZUdsYXJlU2l6ZS5iaW5kKF90aGlzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0cmFuc2l0aW9uIG9ubHkgb24gbW91c2UgbGVhdmUgYW5kIG1vdXNlIGVudGVyIHNvIGl0IGRvZXNuJ3QgaW5mbHVlbmNlIG1vdXNlIG1vdmUgdHJhbnNmb3Jtc1xuICAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgc2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dCAhPT0gdW5kZWZpbmVkKSBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgICQodGhpcykuY3NzKHsndHJhbnNpdGlvbic6IGAke3RoaXMuc2V0dGluZ3Muc3BlZWR9bXMgJHt0aGlzLnNldHRpbmdzLmVhc2luZ31gfSk7XG4gICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmdsYXJlKSB0aGlzLmdsYXJlRWxlbWVudC5jc3Moeyd0cmFuc2l0aW9uJzogYG9wYWNpdHkgJHt0aGlzLnNldHRpbmdzLnNwZWVkfW1zICR7dGhpcy5zZXR0aW5ncy5lYXNpbmd9YH0pO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moeyd0cmFuc2l0aW9uJzogJyd9KTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNldHRpbmdzLmdsYXJlKSB0aGlzLmdsYXJlRWxlbWVudC5jc3Moeyd0cmFuc2l0aW9uJzogJyd9KTtcbiAgICAgICAgICAgIH0sIHRoaXMuc2V0dGluZ3Muc3BlZWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIHVzZXIgbW91c2UgZW50ZXJzIHRpbHQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgbW91c2VFbnRlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICQodGhpcykuY3NzKHsnd2lsbC1jaGFuZ2UnOiAndHJhbnNmb3JtJ30pO1xuICAgICAgICAgICAgc2V0VHJhbnNpdGlvbi5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKFwidGlsdC5tb3VzZUVudGVyXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gdGhlIHgseSBwb3NpdGlvbiBvZiB0aGUgbW91c2Ugb24gdGhlIHRpbHQgZWxlbWVudFxuICAgICAgICAgKiBAcmV0dXJucyB7e3g6ICosIHk6ICp9fVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZ2V0TW91c2VQb3NpdGlvbnMgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZihldmVudCkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVg6ICQodGhpcykub2Zmc2V0KCkubGVmdCArICQodGhpcykub3V0ZXJXaWR0aCgpIC8gMixcbiAgICAgICAgICAgICAgICAgICAgcGFnZVk6ICQodGhpcykub2Zmc2V0KCkudG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpIC8gMlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge3g6IGV2ZW50LnBhZ2VYLCB5OiBldmVudC5wYWdlWX07XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gdXNlciBtb3VzZSBtb3ZlcyBvdmVyIHRoZSB0aWx0IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IG1vdXNlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlUG9zaXRpb25zID0gZ2V0TW91c2VQb3NpdGlvbnMoZXZlbnQpO1xuICAgICAgICAgICAgcmVxdWVzdFRpY2suY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogV2hlbiB1c2VyIG1vdXNlIGxlYXZlcyB0aWx0IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IG1vdXNlTGVhdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNldFRyYW5zaXRpb24uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQgPSB0cnVlO1xuICAgICAgICAgICAgcmVxdWVzdFRpY2suY2FsbCh0aGlzKTtcblxuICAgICAgICAgICAgLy8gVHJpZ2dlciBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICQodGhpcykudHJpZ2dlcihcInRpbHQubW91c2VMZWF2ZVwiKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRpbHQgdmFsdWVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHt7eDogdGlsdCB2YWx1ZSwgeTogdGlsdCB2YWx1ZX19XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBnZXRWYWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gJCh0aGlzKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0ID0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgdG9wID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlWCA9ICh0aGlzLm1vdXNlUG9zaXRpb25zLnggLSBsZWZ0KSAvIHdpZHRoO1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZVkgPSAodGhpcy5tb3VzZVBvc2l0aW9ucy55IC0gdG9wKSAvIGhlaWdodDtcbiAgICAgICAgICAgIC8vIHggb3IgeSBwb3NpdGlvbiBpbnNpZGUgaW5zdGFuY2UgLyB3aWR0aCBvZiBpbnN0YW5jZSA9IHBlcmNlbnRhZ2Ugb2YgcG9zaXRpb24gaW5zaWRlIGluc3RhbmNlICogdGhlIG1heCB0aWx0IHZhbHVlXG4gICAgICAgICAgICBjb25zdCB0aWx0WCA9ICgodGhpcy5zZXR0aW5ncy5tYXhUaWx0IC8gMikgLSAoKHBlcmNlbnRhZ2VYKSAqIHRoaXMuc2V0dGluZ3MubWF4VGlsdCkpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICBjb25zdCB0aWx0WSA9ICgoKHBlcmNlbnRhZ2VZKSAqIHRoaXMuc2V0dGluZ3MubWF4VGlsdCkgLSAodGhpcy5zZXR0aW5ncy5tYXhUaWx0IC8gMikpLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAvLyBhbmdsZVxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHRoaXMubW91c2VQb3NpdGlvbnMueCAtIChsZWZ0K3dpZHRoLzIpLC0gKHRoaXMubW91c2VQb3NpdGlvbnMueSAtICh0b3AraGVpZ2h0LzIpKSApKigxODAvTWF0aC5QSSk7XG4gICAgICAgICAgICAvLyBSZXR1cm4geCAmIHkgdGlsdCB2YWx1ZXNcbiAgICAgICAgICAgIHJldHVybiB7dGlsdFgsIHRpbHRZLCAncGVyY2VudGFnZVgnOiBwZXJjZW50YWdlWCAqIDEwMCwgJ3BlcmNlbnRhZ2VZJzogcGVyY2VudGFnZVkgKiAxMDAsIGFuZ2xlfTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIHRpbHQgdHJhbnNmb3JtcyBvbiBtb3VzZW1vdmVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHVwZGF0ZVRyYW5zZm9ybXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtcyA9IGdldFZhbHVlcy5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNldCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndHJhbnNmb3JtJywgYHBlcnNwZWN0aXZlKCR7dGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZX1weCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpYCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSb3RhdGUgZ2xhcmUgaWYgZW5hYmxlZFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmdsYXJlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuY3NzKCd0cmFuc2Zvcm0nLCBgcm90YXRlKDE4MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpYCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2xhcmVFbGVtZW50LmNzcygnb3BhY2l0eScsIGAwYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmNzcygndHJhbnNmb3JtJywgYHBlcnNwZWN0aXZlKCR7dGhpcy5zZXR0aW5ncy5wZXJzcGVjdGl2ZX1weCkgcm90YXRlWCgke3RoaXMuc2V0dGluZ3MuZGlzYWJsZUF4aXMgPT09ICd4JyA/IDAgOiB0aGlzLnRyYW5zZm9ybXMudGlsdFl9ZGVnKSByb3RhdGVZKCR7dGhpcy5zZXR0aW5ncy5kaXNhYmxlQXhpcyA9PT0gJ3knID8gMCA6IHRoaXMudHJhbnNmb3Jtcy50aWx0WH1kZWcpIHNjYWxlM2QoJHt0aGlzLnNldHRpbmdzLnNjYWxlfSwke3RoaXMuc2V0dGluZ3Muc2NhbGV9LCR7dGhpcy5zZXR0aW5ncy5zY2FsZX0pYCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSb3RhdGUgZ2xhcmUgaWYgZW5hYmxlZFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmdsYXJlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuY3NzKCd0cmFuc2Zvcm0nLCBgcm90YXRlKCR7dGhpcy50cmFuc2Zvcm1zLmFuZ2xlfWRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpYCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2xhcmVFbGVtZW50LmNzcygnb3BhY2l0eScsIGAke3RoaXMudHJhbnNmb3Jtcy5wZXJjZW50YWdlWSAqIHRoaXMuc2V0dGluZ3MubWF4R2xhcmUgLyAxMDB9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKFwiY2hhbmdlXCIsIFt0aGlzLnRyYW5zZm9ybXNdKTtcblxuICAgICAgICAgICAgdGhpcy50aWNraW5nID0gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByZXBhcmUgZWxlbWVudHNcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IHByZXBhcmVHbGFyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGdsYXJlUHJlcmVuZGVyID0gdGhpcy5zZXR0aW5ncy5nbGFyZVByZXJlbmRlcjtcblxuICAgICAgICAgICAgLy8gSWYgb3B0aW9uIHByZS1yZW5kZXIgaXMgZW5hYmxlZCB3ZSBhc3N1bWUgYWxsIGh0bWwvY3NzIGlzIHByZXNlbnQgZm9yIGFuIG9wdGltYWwgZ2xhcmUgZWZmZWN0LlxuICAgICAgICAgICAgaWYgKCFnbGFyZVByZXJlbmRlcilcbiAgICAgICAgICAgIC8vIENyZWF0ZSBnbGFyZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJqcy10aWx0LWdsYXJlXCI+PGRpdiBjbGFzcz1cImpzLXRpbHQtZ2xhcmUtaW5uZXJcIj48L2Rpdj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgLy8gU3RvcmUgZ2xhcmUgc2VsZWN0b3IgaWYgZ2xhcmUgaXMgZW5hYmxlZFxuICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnRXcmFwcGVyID0gJCh0aGlzKS5maW5kKFwiLmpzLXRpbHQtZ2xhcmVcIik7XG4gICAgICAgICAgICB0aGlzLmdsYXJlRWxlbWVudCA9ICQodGhpcykuZmluZChcIi5qcy10aWx0LWdsYXJlLWlubmVyXCIpO1xuXG4gICAgICAgICAgICAvLyBSZW1lbWJlcj8gV2UgYXNzdW1lIGFsbCBjc3MgaXMgYWxyZWFkeSBzZXQsIHNvIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICBpZiAoZ2xhcmVQcmVyZW5kZXIpIHJldHVybjtcblxuICAgICAgICAgICAgLy8gQWJzdHJhY3RlZCByZS11c2FibGUgZ2xhcmUgc3R5bGVzXG4gICAgICAgICAgICBjb25zdCBzdHJldGNoID0ge1xuICAgICAgICAgICAgICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgJ3RvcCc6ICcwJyxcbiAgICAgICAgICAgICAgICAnbGVmdCc6ICcwJyxcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6ICcxMDAlJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFN0eWxlIGdsYXJlIHdyYXBwZXJcbiAgICAgICAgICAgIHRoaXMuZ2xhcmVFbGVtZW50V3JhcHBlci5jc3Moc3RyZXRjaCkuY3NzKHtcbiAgICAgICAgICAgICAgICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAncG9pbnRlci1ldmVudHMnOiAnbm9uZScsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gU3R5bGUgZ2xhcmUgZWxlbWVudFxuICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICd0b3AnOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAnbGVmdCc6ICc1MCUnLFxuICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogYGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDEwMCUpYCxcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiBgJHskKHRoaXMpLm91dGVyV2lkdGgoKSoyfWAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IGAkeyQodGhpcykub3V0ZXJXaWR0aCgpKjJ9YCxcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3JvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnMCUgMCUnLFxuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzAnLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIGdsYXJlIG9uIHJlc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgdXBkYXRlR2xhcmVTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5nbGFyZUVsZW1lbnQuY3NzKHtcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiBgJHskKHRoaXMpLm91dGVyV2lkdGgoKSoyfWAsXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IGAkeyQodGhpcykub3V0ZXJXaWR0aCgpKjJ9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQdWJsaWMgbWV0aG9kc1xuICAgICAgICAgKi9cbiAgICAgICAgJC5mbi50aWx0LmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuanMtdGlsdC1nbGFyZScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKHsnd2lsbC1jaGFuZ2UnOiAnJywgJ3RyYW5zZm9ybSc6ICcnfSk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5vZmYoJ21vdXNlbW92ZSBtb3VzZWVudGVyIG1vdXNlbGVhdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgICQuZm4udGlsdC5nZXRWYWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgICQodGhpcykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3VzZVBvc2l0aW9ucyA9IGdldE1vdXNlUG9zaXRpb25zLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGdldFZhbHVlcy5jYWxsKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5mbi50aWx0LnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW91c2VQb3NpdGlvbnMgPSBnZXRNb3VzZVBvc2l0aW9ucy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MgPSAkKHRoaXMpLmRhdGEoJ3NldHRpbmdzJyk7XG4gICAgICAgICAgICAgICAgbW91c2VMZWF2ZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy50cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb29wIGV2ZXJ5IGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEZWZhdWx0IHNldHRpbmdzIG1lcmdlZCB3aXRoIHVzZXIgc2V0dGluZ3NcbiAgICAgICAgICAgICAqIENhbiBiZSBzZXQgdHJvdWdoIGRhdGEgYXR0cmlidXRlcyBvciBhcyBwYXJhbWV0ZXIuXG4gICAgICAgICAgICAgKiBAdHlwZSB7Kn1cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9ICQuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICBtYXhUaWx0OiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LW1heF0nKSA/ICQodGhpcykuZGF0YSgndGlsdC1tYXgnKSA6IDIwLFxuICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LXBlcnNwZWN0aXZlXScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LXBlcnNwZWN0aXZlJykgOiAzMDAsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LWVhc2luZ10nKSA/ICQodGhpcykuZGF0YSgndGlsdC1lYXNpbmcnKSA6ICdjdWJpYy1iZXppZXIoLjAzLC45OCwuNTIsLjk5KScsXG4gICAgICAgICAgICAgICAgc2NhbGU6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtc2NhbGVdJykgPyAkKHRoaXMpLmRhdGEoJ3RpbHQtc2NhbGUnKSA6ICcxJyxcbiAgICAgICAgICAgICAgICBzcGVlZDogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC1zcGVlZF0nKSA/ICQodGhpcykuZGF0YSgndGlsdC1zcGVlZCcpIDogJzQwMCcsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC10cmFuc2l0aW9uXScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LXRyYW5zaXRpb24nKSA6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZUF4aXM6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtZGlzYWJsZS1heGlzXScpID8gJCh0aGlzKS5kYXRhKCd0aWx0LWRpc2FibGUtYXhpcycpIDogbnVsbCxcbiAgICAgICAgICAgICAgICBheGlzOiAkKHRoaXMpLmlzKCdbZGF0YS10aWx0LWF4aXNdJykgPyAkKHRoaXMpLmRhdGEoJ3RpbHQtYXhpcycpIDogbnVsbCxcbiAgICAgICAgICAgICAgICByZXNldDogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC1yZXNldF0nKSA/ICQodGhpcykuZGF0YSgndGlsdC1yZXNldCcpIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnbGFyZTogJCh0aGlzKS5pcygnW2RhdGEtdGlsdC1nbGFyZV0nKSA/ICQodGhpcykuZGF0YSgndGlsdC1nbGFyZScpIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWF4R2xhcmU6ICQodGhpcykuaXMoJ1tkYXRhLXRpbHQtbWF4Z2xhcmVdJykgPyAkKHRoaXMpLmRhdGEoJ3RpbHQtbWF4Z2xhcmUnKSA6IDEsXG4gICAgICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gQWRkIGRlcHJlY2F0aW9uIHdhcm5pbmcgJiBzZXQgZGlzYWJsZUF4aXMgdG8gZGVwcmVjYXRlZCBheGlzIHNldHRpbmdcbiAgICAgICAgICAgIGlmKHRoaXMuc2V0dGluZ3MuYXhpcyAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaWx0LmpzOiB0aGUgYXhpcyBzZXR0aW5nIGhhcyBiZWVuIHJlbmFtZWQgdG8gZGlzYWJsZUF4aXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZ2lqc3JvZ2UvdGlsdC5qcy9wdWxsLzI2IGZvciBtb3JlIGluZm9ybWF0aW9uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5kaXNhYmxlQXhpcyA9IHRoaXMuc2V0dGluZ3MuYXhpcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbml0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHNldHRpbmdzXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdzZXR0aW5ncycsIHRoaXMuc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gUHJlcGFyZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5nbGFyZSkgcHJlcGFyZUdsYXJlLmNhbGwodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBCaW5kIGV2ZW50c1xuICAgICAgICAgICAgICAgIGJpbmRFdmVudHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEluaXRcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBdXRvIGxvYWRcbiAgICAgKi9cbiAgICAkKCdbZGF0YS10aWx0XScpLnRpbHQoKTtcblxuICAgIHJldHVybiB0cnVlO1xufSkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RpbHQuanMvc3JjL3RpbHQuanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=