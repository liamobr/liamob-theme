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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
        velbase = { x: 0, y: -1 };
        break;
      case 'top-right':
        velbase = { x: 0.5, y: -0.5 };
        break;
      case 'right':
        velbase = { x: 1, y: -0 };
        break;
      case 'bottom-right':
        velbase = { x: 0.5, y: 0.5 };
        break;
      case 'bottom':
        velbase = { x: 0, y: 1 };
        break;
      case 'bottom-left':
        velbase = { x: -0.5, y: 1 };
        break;
      case 'left':
        velbase = { x: -1, y: 0 };
        break;
      case 'top-left':
        velbase = { x: -0.5, y: -0.5 };
        break;
      default:
        velbase = { x: 0, y: 0 };
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

      var normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse },
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
    var svg = new Blob([coloredSvgXml], { type: 'image/svg+xml;charset=utf-8' }),
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA4ZDI4YzAyYzdhMTdiOGFjYzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9wYXJ0aWNsZXMuanMiXSwibmFtZXMiOlsicEpTIiwidGFnX2lkIiwicGFyYW1zIiwiY2FudmFzX2VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2FudmFzIiwiZWwiLCJ3Iiwib2Zmc2V0V2lkdGgiLCJoIiwib2Zmc2V0SGVpZ2h0IiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwid2lkdGgiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJpbWFnZSIsInNyYyIsImhlaWdodCIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJhcnJheSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwicmVtb3ZlIiwibW91c2UiLCJyZXRpbmFfZGV0ZWN0IiwiZm4iLCJpbnRlcmFjdCIsInZlbmRvcnMiLCJ0bXAiLCJPYmplY3QiLCJkZWVwRXh0ZW5kIiwib2JqIiwic2l6ZV92YWx1ZSIsInNpemVfYW5pbV9zcGVlZCIsIm1vdmVfc3BlZWQiLCJsaW5lX2xpbmtlZF9kaXN0YW5jZSIsImxpbmVfbGlua2VkX3dpZHRoIiwibW9kZV9ncmFiX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfZGlzdGFuY2UiLCJtb2RlX2J1YmJsZV9zaXplIiwibW9kZV9yZXB1bHNlX2Rpc3RhbmNlIiwicmV0aW5hSW5pdCIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJweHJhdGlvIiwicmV0aW5hIiwiY2FudmFzSW5pdCIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnRpY2xlc0VtcHR5IiwicGFydGljbGVzQ3JlYXRlIiwicGFydGljbGVzRHJhdyIsImRlbnNpdHlBdXRvUGFydGljbGVzIiwiY2FudmFzUGFpbnQiLCJmaWxsUmVjdCIsImNhbnZhc0NsZWFyIiwiY2xlYXJSZWN0IiwicGFydGljbGUiLCJwb3NpdGlvbiIsInJhZGl1cyIsIk1hdGgiLCJzaXplX3N0YXR1cyIsInZzIiwieCIsInkiLCJjaGVja092ZXJsYXAiLCJBcnJheSIsImNvbG9yX3NlbGVjdGVkIiwiZmxvb3IiLCJsZW5ndGgiLCJyZ2IiLCJoZXhUb1JnYiIsInIiLCJ1bmRlZmluZWQiLCJnIiwiYiIsInMiLCJsIiwiaHNsIiwib3BhY2l0eV9zdGF0dXMiLCJ2byIsInZlbGJhc2UiLCJ2eCIsInZ5IiwidnhfaSIsInZ5X2kiLCJzaGFwZV90eXBlIiwic2hhcGVfc2VsZWN0ZWQiLCJzaCIsImltZyIsInJhdGlvIiwiaW1nX3R5cGUiLCJzb3VyY2Vfc3ZnIiwiY3JlYXRlU3ZnSW1nIiwicHVzaGluZyIsImxvYWRlZCIsInByb3RvdHlwZSIsImRyYXciLCJwIiwicmFkaXVzX2J1YmJsZSIsIm9wYWNpdHlfYnViYmxlIiwiY29sb3JfdmFsdWUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInJlY3QiLCJkcmF3U2hhcGUiLCJkcmF3SW1hZ2UiLCJpbWdfb2JqIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJmaWxsIiwiaSIsInBhcnRpY2xlc1VwZGF0ZSIsIm1zIiwibmV3X3BvcyIsInhfbGVmdCIsInhfcmlnaHQiLCJ5X3RvcCIsInlfYm90dG9tIiwiaXNJbkFycmF5IiwiZ3JhYlBhcnRpY2xlIiwiYnViYmxlUGFydGljbGUiLCJyZXB1bHNlUGFydGljbGUiLCJqIiwicDIiLCJsaW5rUGFydGljbGVzIiwiYXR0cmFjdFBhcnRpY2xlcyIsImJvdW5jZVBhcnRpY2xlcyIsInBhcnRpY2xlc1JlZnJlc2giLCJjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lIiwiY2hlY2tBbmltRnJhbWUiLCJkcmF3QW5pbUZyYW1lIiwiY291bnRfc3ZnIiwic3RhcnQiLCJwMSIsImR4IiwiZHkiLCJkaXN0Iiwic3FydCIsIm9wYWNpdHlfbGluZSIsImNvbG9yX2xpbmUiLCJjb2xvcl9yZ2JfbGluZSIsIm1vdmVUbyIsImxpbmVUbyIsImF4IiwiYXkiLCJkaXN0X3AiLCJwdXNoUGFydGljbGVzIiwibmIiLCJwb3MiLCJwb3NfeCIsInBvc195IiwicmVtb3ZlUGFydGljbGVzIiwic3BsaWNlIiwiaW5pdCIsImR4X21vdXNlIiwiZHlfbW91c2UiLCJkaXN0X21vdXNlIiwic3RhdHVzIiwiZGlmIiwicHJvY2VzcyIsImJ1YmJsZV9wYXJhbSIsInBhcnRpY2xlc19wYXJhbSIsInBfb2JqX2J1YmJsZSIsInBfb2JqIiwiaWQiLCJidWJibGVfZHVyYXRpb25fZW5kIiwidGltZV9zcGVudCIsInZhbHVlX3RtcCIsImJ1YmJsZV9jbGlja2luZyIsImNsaWNrX3Bvc194IiwiY2xpY2tfcG9zX3kiLCJEYXRlIiwiZ2V0VGltZSIsImNsaWNrX3RpbWUiLCJub3JtVmVjIiwicmVwdWxzZVJhZGl1cyIsInZlbG9jaXR5IiwicmVwdWxzZUZhY3RvciIsImNsYW1wIiwicG93IiwicmVwdWxzZV9maW5pc2giLCJyZXB1bHNlX2NvdW50IiwicmVwdWxzZV9jbGlja2luZyIsImYiLCJhdGFuMiIsImZvcmNlIiwiY29zIiwic2luIiwiZCIsImV2ZW50c0xpc3RlbmVycyIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwic2V0VGltZW91dCIsImFyZWEiLCJuYl9wYXJ0aWNsZXMiLCJtaXNzaW5nX3BhcnRpY2xlcyIsImFicyIsInN2Z1htbCIsInJnYkhleCIsImNvbG9yZWRTdmdYbWwiLCJyZXBsYWNlIiwibSIsInN2ZyIsIkJsb2IiLCJET01VUkwiLCJVUkwiLCJ3ZWJraXRVUkwiLCJ1cmwiLCJjcmVhdGVPYmplY3RVUkwiLCJJbWFnZSIsInJldm9rZU9iamVjdFVSTCIsImRlc3Ryb3lwSlMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInBKU0RvbSIsImMiLCJzdGFydFgiLCJzdGFydFkiLCJzaWRlTGVuZ3RoIiwic2lkZUNvdW50TnVtZXJhdG9yIiwic2lkZUNvdW50RGVub21pbmF0b3IiLCJzaWRlQ291bnQiLCJkZWNpbWFsU2lkZXMiLCJpbnRlcmlvckFuZ2xlRGVncmVlcyIsImludGVyaW9yQW5nbGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVzdG9yZSIsImV4cG9ydEltZyIsIm9wZW4iLCJ0b0RhdGFVUkwiLCJsb2FkSW1nIiwiaW1nX2Vycm9yIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJkYXRhIiwicmVhZHlTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJyZXNwb25zZSIsImNoZWNrQmVmb3JlRHJhdyIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwicmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrIiwic3Vic3RyIiwiZGVlcEV4dGVuZEZ1bmN0aW9uIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJwcm9wZXJ0eSIsImNvbnN0cnVjdG9yIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJ3ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJoZXgiLCJzaG9ydGhhbmRSZWdleCIsInJlc3VsdCIsImV4ZWMiLCJwYXJzZUludCIsIm1pbiIsIm1heCIsImluZGV4T2YiLCJwYXJ0aWNsZXNKUyIsInBKU190YWciLCJnZXRFbGVtZW50QnlJZCIsInBKU19jYW52YXNfY2xhc3MiLCJleGlzdF9jYW52YXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsImxvYWQiLCJwYXRoX2NvbmZpZ19qc29uIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7O0FBU0EsSUFBSUEsTUFBTSxhQUFTQyxNQUFULEVBQWlCQyxNQUFqQixFQUF3Qjs7QUFFaEMsTUFBSUMsWUFBWUMsU0FBU0MsYUFBVCxDQUF1QixNQUFJSixNQUFKLEdBQVcsNEJBQWxDLENBQWhCOztBQUVBO0FBQ0EsT0FBS0QsR0FBTCxHQUFXO0FBQ1RNLFlBQVE7QUFD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QmhVLE1BQXhCLEVBQWdDd1UsV0FBaEMsQ0FBNEN0VSxTQUE1QyxDQUFiOztBQUVBO0FBQ0EsTUFBR0csVUFBVSxJQUFiLEVBQWtCO0FBQ2hCK1AsV0FBTzFNLElBQVAsQ0FBWSxJQUFJM0QsR0FBSixDQUFRQyxNQUFSLEVBQWdCQyxNQUFoQixDQUFaO0FBQ0Q7QUFFRixDQTNDRDs7QUE2Q0ErRSxPQUFPOE8sV0FBUCxDQUFtQlcsSUFBbkIsR0FBMEIsVUFBU3pVLE1BQVQsRUFBaUIwVSxnQkFBakIsRUFBbUMxQixRQUFuQyxFQUE0Qzs7QUFFcEU7QUFDQSxNQUFJeEIsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsTUFBSUosSUFBSixDQUFTLEtBQVQsRUFBZ0JzRCxnQkFBaEI7QUFDQWxELE1BQUlFLGtCQUFKLEdBQXlCLFVBQVVDLElBQVYsRUFBZ0I7QUFDdkMsUUFBR0gsSUFBSUksVUFBSixJQUFrQixDQUFyQixFQUF1QjtBQUNyQixVQUFHSixJQUFJL0UsTUFBSixJQUFjLEdBQWpCLEVBQXFCO0FBQ25CLFlBQUl4TSxTQUFTMFUsS0FBS0MsS0FBTCxDQUFXakQsS0FBS0UsYUFBTCxDQUFtQkMsUUFBOUIsQ0FBYjtBQUNBOU0sZUFBTzhPLFdBQVAsQ0FBbUI5VCxNQUFuQixFQUEyQkMsTUFBM0I7QUFDQSxZQUFHK1MsUUFBSCxFQUFhQTtBQUNkLE9BSkQsTUFJSztBQUNIaEIsZ0JBQVFDLEdBQVIsQ0FBWSx3Q0FBc0NULElBQUkvRSxNQUF0RDtBQUNBdUYsZ0JBQVFDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVhEO0FBWUFULE1BQUlVLElBQUo7QUFFRCxDQW5CRCxDIiwiZmlsZSI6InBhcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUwOGQyOGMwMmM3YTE3YjhhY2M4IiwiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8qIEF1dGhvciA6IFZpbmNlbnQgR2FycmVhdSAgLSB2aW5jZW50Z2FycmVhdS5jb21cbi8qIE1JVCBsaWNlbnNlOiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4vKiBEZW1vIC8gR2VuZXJhdG9yIDogdmluY2VudGdhcnJlYXUuY29tL3BhcnRpY2xlcy5qc1xuLyogR2l0SHViIDogZ2l0aHViLmNvbS9WaW5jZW50R2FycmVhdS9wYXJ0aWNsZXMuanNcbi8qIEhvdyB0byB1c2U/IDogQ2hlY2sgdGhlIEdpdEh1YiBSRUFETUVcbi8qIHYyLjAuMFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxudmFyIHBKUyA9IGZ1bmN0aW9uKHRhZ19pZCwgcGFyYW1zKXtcblxuICB2YXIgY2FudmFzX2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycrdGFnX2lkKycgPiAucGFydGljbGVzLWpzLWNhbnZhcy1lbCcpO1xuXG4gIC8qIHBhcnRpY2xlcy5qcyB2YXJpYWJsZXMgd2l0aCBkZWZhdWx0IHZhbHVlcyAqL1xuICB0aGlzLnBKUyA9IHtcbiAgICBjYW52YXM6IHtcbiAgICAgIGVsOiBjYW52YXNfZWwsXG4gICAgICB3OiBjYW52YXNfZWwub2Zmc2V0V2lkdGgsXG4gICAgICBoOiBjYW52YXNfZWwub2Zmc2V0SGVpZ2h0XG4gICAgfSxcbiAgICBwYXJ0aWNsZXM6IHtcbiAgICAgIG51bWJlcjoge1xuICAgICAgICB2YWx1ZTogNDAwLFxuICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29sb3I6IHtcbiAgICAgICAgdmFsdWU6ICcjZmZmJ1xuICAgICAgfSxcbiAgICAgIHNoYXBlOiB7XG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICBjb2xvcjogJyNmZjAwMDAnXG4gICAgICAgIH0sXG4gICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICBuYl9zaWRlczogNVxuICAgICAgICB9LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIHNyYzogJycsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3BhY2l0eToge1xuICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgICAgb3BhY2l0eV9taW46IDAsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgdmFsdWU6IDIwLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBhbmltOiB7XG4gICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICBzcGVlZDogMjAsXG4gICAgICAgICAgc2l6ZV9taW46IDAsXG4gICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGxpbmVfbGlua2VkOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgd2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICBtb3ZlOiB7XG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDIsXG4gICAgICAgIGRpcmVjdGlvbjogJ25vbmUnLFxuICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgIG91dF9tb2RlOiAnb3V0JyxcbiAgICAgICAgYm91bmNlOiBmYWxzZSxcbiAgICAgICAgYXR0cmFjdDoge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgcm90YXRlWDogMzAwMCxcbiAgICAgICAgICByb3RhdGVZOiAzMDAwXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhcnJheTogW11cbiAgICB9LFxuICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgIGRldGVjdF9vbjogJ2NhbnZhcycsXG4gICAgICBldmVudHM6IHtcbiAgICAgICAgb25ob3Zlcjoge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICBtb2RlOiAnZ3JhYidcbiAgICAgICAgfSxcbiAgICAgICAgb25jbGljazoge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICBtb2RlOiAncHVzaCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVzaXplOiB0cnVlXG4gICAgICB9LFxuICAgICAgbW9kZXM6IHtcbiAgICAgICAgZ3JhYjp7XG4gICAgICAgICAgZGlzdGFuY2U6IDEwMCxcbiAgICAgICAgICBsaW5lX2xpbmtlZDp7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBidWJibGU6e1xuICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgICAgc2l6ZTogODAsXG4gICAgICAgICAgZHVyYXRpb246IDAuNFxuICAgICAgICB9LFxuICAgICAgICByZXB1bHNlOntcbiAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjRcbiAgICAgICAgfSxcbiAgICAgICAgcHVzaDp7XG4gICAgICAgICAgcGFydGljbGVzX25iOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTp7XG4gICAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBtb3VzZTp7fVxuICAgIH0sXG4gICAgcmV0aW5hX2RldGVjdDogZmFsc2UsXG4gICAgZm46IHtcbiAgICAgIGludGVyYWN0OiB7fSxcbiAgICAgIG1vZGVzOiB7fSxcbiAgICAgIHZlbmRvcnM6e31cbiAgICB9LFxuICAgIHRtcDoge31cbiAgfTtcblxuICB2YXIgcEpTID0gdGhpcy5wSlM7XG5cbiAgLyogcGFyYW1zIHNldHRpbmdzICovXG4gIGlmKHBhcmFtcyl7XG4gICAgT2JqZWN0LmRlZXBFeHRlbmQocEpTLCBwYXJhbXMpO1xuICB9XG5cbiAgcEpTLnRtcC5vYmogPSB7XG4gICAgc2l6ZV92YWx1ZTogcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlLFxuICAgIHNpemVfYW5pbV9zcGVlZDogcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQsXG4gICAgbW92ZV9zcGVlZDogcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkLFxuICAgIGxpbmVfbGlua2VkX2Rpc3RhbmNlOiBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlLFxuICAgIGxpbmVfbGlua2VkX3dpZHRoOiBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoLFxuICAgIG1vZGVfZ3JhYl9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSxcbiAgICBtb2RlX2J1YmJsZV9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlLFxuICAgIG1vZGVfYnViYmxlX3NpemU6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxuICAgIG1vZGVfcmVwdWxzZV9kaXN0YW5jZTogcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZVxuICB9O1xuXG5cbiAgcEpTLmZuLnJldGluYUluaXQgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYocEpTLnJldGluYV9kZXRlY3QgJiYgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKXtcbiAgICAgIHBKUy5jYW52YXMucHhyYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvOyBcbiAgICAgIHBKUy50bXAucmV0aW5hID0gdHJ1ZTtcbiAgICB9IFxuICAgIGVsc2V7XG4gICAgICBwSlMuY2FudmFzLnB4cmF0aW8gPSAxO1xuICAgICAgcEpTLnRtcC5yZXRpbmEgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLncgPSBwSlMuY2FudmFzLmVsLm9mZnNldFdpZHRoICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5jYW52YXMuaCA9IHBKUy5jYW52YXMuZWwub2Zmc2V0SGVpZ2h0ICogcEpTLmNhbnZhcy5weHJhdGlvO1xuXG4gICAgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlID0gcEpTLnRtcC5vYmouc2l6ZV92YWx1ZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zcGVlZCA9IHBKUy50bXAub2JqLnNpemVfYW5pbV9zcGVlZCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQgPSBwSlMudG1wLm9iai5tb3ZlX3NwZWVkICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubW9kZV9ncmFiX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfYnViYmxlX2Rpc3RhbmNlICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGggPSBwSlMudG1wLm9iai5saW5lX2xpbmtlZF93aWR0aCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSA9IHBKUy50bXAub2JqLm1vZGVfYnViYmxlX3NpemUgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfcmVwdWxzZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcblxuICB9O1xuXG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBjYW52YXMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLmNhbnZhc0luaXQgPSBmdW5jdGlvbigpe1xuICAgIHBKUy5jYW52YXMuY3R4ID0gcEpTLmNhbnZhcy5lbC5nZXRDb250ZXh0KCcyZCcpO1xuICB9O1xuXG4gIHBKUy5mbi5jYW52YXNTaXplID0gZnVuY3Rpb24oKXtcblxuICAgIHBKUy5jYW52YXMuZWwud2lkdGggPSBwSlMuY2FudmFzLnc7XG4gICAgcEpTLmNhbnZhcy5lbC5oZWlnaHQgPSBwSlMuY2FudmFzLmg7XG5cbiAgICBpZihwSlMgJiYgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLnJlc2l6ZSl7XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXG4gICAgICAgICAgcEpTLmNhbnZhcy53ID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgIC8qIHJlc2l6ZSBjYW52YXMgKi9cbiAgICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XG4gICAgICAgICAgICBwSlMuY2FudmFzLncgKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICAgICAgcEpTLmNhbnZhcy5oICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwSlMuY2FudmFzLmVsLndpZHRoID0gcEpTLmNhbnZhcy53O1xuICAgICAgICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xuXG4gICAgICAgICAgLyogcmVwYWludCBjYW52YXMgb24gYW5pbSBkaXNhYmxlZCAqL1xuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSgpO1xuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xuICAgICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIC8qIGRlbnNpdHkgcGFydGljbGVzIGVuYWJsZWQgKi9cbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5jYW52YXNQYWludCA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbFJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xuICB9O1xuXG4gIHBKUy5mbi5jYW52YXNDbGVhciA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcbiAgfTtcblxuXG4gIC8qIC0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gcGFydGljbGVzIC0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLnBhcnRpY2xlID0gZnVuY3Rpb24oY29sb3IsIG9wYWNpdHksIHBvc2l0aW9uKXtcblxuICAgIC8qIHNpemUgKi9cbiAgICB0aGlzLnJhZGl1cyA9IChwSlMucGFydGljbGVzLnNpemUucmFuZG9tID8gTWF0aC5yYW5kb20oKSA6IDEpICogcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlO1xuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLmVuYWJsZSl7XG4gICAgICB0aGlzLnNpemVfc3RhdHVzID0gZmFsc2U7XG4gICAgICB0aGlzLnZzID0gcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgLyAxMDA7XG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3luYyl7XG4gICAgICAgIHRoaXMudnMgPSB0aGlzLnZzICogTWF0aC5yYW5kb20oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBwb3NpdGlvbiAqL1xuICAgIHRoaXMueCA9IHBvc2l0aW9uID8gcG9zaXRpb24ueCA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgdGhpcy55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcblxuICAgIC8qIGNoZWNrIHBvc2l0aW9uICAtIGludG8gdGhlIGNhbnZhcyAqL1xuICAgIGlmKHRoaXMueCA+IHBKUy5jYW52YXMudyAtIHRoaXMucmFkaXVzKjIpIHRoaXMueCA9IHRoaXMueCAtIHRoaXMucmFkaXVzO1xuICAgIGVsc2UgaWYodGhpcy54IDwgdGhpcy5yYWRpdXMqMikgdGhpcy54ID0gdGhpcy54ICsgdGhpcy5yYWRpdXM7XG4gICAgaWYodGhpcy55ID4gcEpTLmNhbnZhcy5oIC0gdGhpcy5yYWRpdXMqMikgdGhpcy55ID0gdGhpcy55IC0gdGhpcy5yYWRpdXM7XG4gICAgZWxzZSBpZih0aGlzLnkgPCB0aGlzLnJhZGl1cyoyKSB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnJhZGl1cztcblxuICAgIC8qIGNoZWNrIHBvc2l0aW9uIC0gYXZvaWQgb3ZlcmxhcCAqL1xuICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5ib3VuY2Upe1xuICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHRoaXMsIHBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvKiBjb2xvciAqL1xuICAgIHRoaXMuY29sb3IgPSB7fTtcbiAgICBpZih0eXBlb2YoY29sb3IudmFsdWUpID09ICdvYmplY3QnKXtcblxuICAgICAgaWYoY29sb3IudmFsdWUgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgIHZhciBjb2xvcl9zZWxlY3RlZCA9IGNvbG9yLnZhbHVlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBKUy5wYXJ0aWNsZXMuY29sb3IudmFsdWUubGVuZ3RoKV07XG4gICAgICAgIHRoaXMuY29sb3IucmdiID0gaGV4VG9SZ2IoY29sb3Jfc2VsZWN0ZWQpO1xuICAgICAgfWVsc2V7XG4gICAgICAgIGlmKGNvbG9yLnZhbHVlLnIgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmcgIT0gdW5kZWZpbmVkICYmIGNvbG9yLnZhbHVlLmIgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcbiAgICAgICAgICAgIHI6IGNvbG9yLnZhbHVlLnIsXG4gICAgICAgICAgICBnOiBjb2xvci52YWx1ZS5nLFxuICAgICAgICAgICAgYjogY29sb3IudmFsdWUuYlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihjb2xvci52YWx1ZS5oICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5zICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5sICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgdGhpcy5jb2xvci5oc2wgPSB7XG4gICAgICAgICAgICBoOiBjb2xvci52YWx1ZS5oLFxuICAgICAgICAgICAgczogY29sb3IudmFsdWUucyxcbiAgICAgICAgICAgIGw6IGNvbG9yLnZhbHVlLmxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNlIGlmKGNvbG9yLnZhbHVlID09ICdyYW5kb20nKXtcbiAgICAgIHRoaXMuY29sb3IucmdiID0ge1xuICAgICAgICByOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKSxcbiAgICAgICAgZzogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXG4gICAgICAgIGI6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYodHlwZW9mKGNvbG9yLnZhbHVlKSA9PSAnc3RyaW5nJyl7XG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKHRoaXMuY29sb3IudmFsdWUpO1xuICAgIH1cblxuICAgIC8qIG9wYWNpdHkgKi9cbiAgICB0aGlzLm9wYWNpdHkgPSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZTtcbiAgICBpZihwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpe1xuICAgICAgdGhpcy5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xuICAgICAgdGhpcy52byA9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnNwZWVkIC8gMTAwO1xuICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLnN5bmMpe1xuICAgICAgICB0aGlzLnZvID0gdGhpcy52byAqIE1hdGgucmFuZG9tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogYW5pbWF0aW9uIC0gdmVsb2NpdHkgZm9yIHNwZWVkICovXG4gICAgdmFyIHZlbGJhc2UgPSB7fVxuICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUuZGlyZWN0aW9uKXtcbiAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MCwgeTotMSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0b3AtcmlnaHQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAuNSwgeTotMC41IH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDoxLCB5Oi0wIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbS1yaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MC41LCB5OjAuNSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tbGVmdCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6LTAuNSwgeToxIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4Oi0xLCB5OjAgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wLWxlZnQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4Oi0wLjUsIHk6LTAuNSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6MCB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLnN0cmFpZ2h0KXtcbiAgICAgIHRoaXMudnggPSB2ZWxiYXNlLng7XG4gICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55O1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLnJhbmRvbSl7XG4gICAgICAgIHRoaXMudnggPSB0aGlzLnZ4ICogKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIChNYXRoLnJhbmRvbSgpKTtcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMudnggPSB2ZWxiYXNlLnggKyBNYXRoLnJhbmRvbSgpLTAuNTtcbiAgICAgIHRoaXMudnkgPSB2ZWxiYXNlLnkgKyBNYXRoLnJhbmRvbSgpLTAuNTtcbiAgICB9XG5cbiAgICAvLyB2YXIgdGhldGEgPSAyLjAgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcbiAgICAvLyB0aGlzLnZ4ID0gTWF0aC5jb3ModGhldGEpO1xuICAgIC8vIHRoaXMudnkgPSBNYXRoLnNpbih0aGV0YSk7XG5cbiAgICB0aGlzLnZ4X2kgPSB0aGlzLnZ4O1xuICAgIHRoaXMudnlfaSA9IHRoaXMudnk7XG5cbiAgICBcblxuICAgIC8qIGlmIHNoYXBlIGlzIGltYWdlICovXG5cbiAgICB2YXIgc2hhcGVfdHlwZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZTtcbiAgICBpZih0eXBlb2Yoc2hhcGVfdHlwZSkgPT0gJ29iamVjdCcpe1xuICAgICAgaWYoc2hhcGVfdHlwZSBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgdmFyIHNoYXBlX3NlbGVjdGVkID0gc2hhcGVfdHlwZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGFwZV90eXBlLmxlbmd0aCldO1xuICAgICAgICB0aGlzLnNoYXBlID0gc2hhcGVfc2VsZWN0ZWQ7XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNoYXBlID0gc2hhcGVfdHlwZTtcbiAgICB9XG5cbiAgICBpZih0aGlzLnNoYXBlID09ICdpbWFnZScpe1xuICAgICAgdmFyIHNoID0gcEpTLnBhcnRpY2xlcy5zaGFwZTtcbiAgICAgIHRoaXMuaW1nID0ge1xuICAgICAgICBzcmM6IHNoLmltYWdlLnNyYyxcbiAgICAgICAgcmF0aW86IHNoLmltYWdlLndpZHRoIC8gc2guaW1hZ2UuaGVpZ2h0XG4gICAgICB9XG4gICAgICBpZighdGhpcy5pbWcucmF0aW8pIHRoaXMuaW1nLnJhdGlvID0gMTtcbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnICE9IHVuZGVmaW5lZCl7XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmNyZWF0ZVN2Z0ltZyh0aGlzKTtcbiAgICAgICAgaWYocEpTLnRtcC5wdXNoaW5nKXtcbiAgICAgICAgICB0aGlzLmltZy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIFxuXG4gIH07XG5cblxuICBwSlMuZm4ucGFydGljbGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBwID0gdGhpcztcblxuICAgIGlmKHAucmFkaXVzX2J1YmJsZSAhPSB1bmRlZmluZWQpe1xuICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzX2J1YmJsZTsgXG4gICAgfWVsc2V7XG4gICAgICB2YXIgcmFkaXVzID0gcC5yYWRpdXM7XG4gICAgfVxuXG4gICAgaWYocC5vcGFjaXR5X2J1YmJsZSAhPSB1bmRlZmluZWQpe1xuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHlfYnViYmxlO1xuICAgIH1lbHNle1xuICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHk7XG4gICAgfVxuXG4gICAgaWYocC5jb2xvci5yZ2Ipe1xuICAgICAgdmFyIGNvbG9yX3ZhbHVlID0gJ3JnYmEoJytwLmNvbG9yLnJnYi5yKycsJytwLmNvbG9yLnJnYi5nKycsJytwLmNvbG9yLnJnYi5iKycsJytvcGFjaXR5KycpJztcbiAgICB9ZWxzZXtcbiAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytvcGFjaXR5KycpJztcbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLmN0eC5maWxsU3R5bGUgPSBjb2xvcl92YWx1ZTtcbiAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcblxuICAgIHN3aXRjaChwLnNoYXBlKXtcblxuICAgICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguYXJjKHAueCwgcC55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZWRnZSc6XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnJlY3QocC54LXJhZGl1cywgcC55LXJhZGl1cywgcmFkaXVzKjIsIHJhZGl1cyoyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0cmlhbmdsZSc6XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShwSlMuY2FudmFzLmN0eCwgcC54LXJhZGl1cywgcC55K3JhZGl1cyAvIDEuNjYsIHJhZGl1cyoyLCAzLCAyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlKFxuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LFxuICAgICAgICAgIHAueCAtIHJhZGl1cyAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMy41KSwgLy8gc3RhcnRYXG4gICAgICAgICAgcC55IC0gcmFkaXVzIC8gKDIuNjYvMy41KSwgLy8gc3RhcnRZXG4gICAgICAgICAgcmFkaXVzKjIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLCAvLyBzaWRlTGVuZ3RoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcbiAgICAgICAgICAxIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXG4gICAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3Rhcic6XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eCxcbiAgICAgICAgICBwLnggLSByYWRpdXMqMiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvNCksIC8vIHN0YXJ0WFxuICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyKjIuNjYvMy41KSwgLy8gc3RhcnRZXG4gICAgICAgICAgcmFkaXVzKjIqMi42NiAvIChwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMvMyksIC8vIHNpZGVMZW5ndGhcbiAgICAgICAgICBwSlMucGFydGljbGVzLnNoYXBlLnBvbHlnb24ubmJfc2lkZXMsIC8vIHNpZGVDb3VudE51bWVyYXRvclxuICAgICAgICAgIDIgLy8gc2lkZUNvdW50RGVub21pbmF0b3JcbiAgICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbWFnZSc6XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhdygpe1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIGltZ19vYmosXG4gICAgICAgICAgICBwLngtcmFkaXVzLFxuICAgICAgICAgICAgcC55LXJhZGl1cyxcbiAgICAgICAgICAgIHJhZGl1cyoyLFxuICAgICAgICAgICAgcmFkaXVzKjIgLyBwLmltZy5yYXRpb1xuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnKXtcbiAgICAgICAgICB2YXIgaW1nX29iaiA9IHAuaW1nLm9iajtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdmFyIGltZ19vYmogPSBwSlMudG1wLmltZ19vYmo7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpbWdfb2JqKXtcbiAgICAgICAgICBkcmF3KCk7XG4gICAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoID4gMCl7XG4gICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2VTdHlsZSA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLmNvbG9yO1xuICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5zdHJva2Uud2lkdGg7XG4gICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgXG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbCgpO1xuICAgIFxuICB9O1xuXG5cbiAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSA9IGZ1bmN0aW9uKCl7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlOyBpKyspIHtcbiAgICAgIHBKUy5wYXJ0aWNsZXMuYXJyYXkucHVzaChuZXcgcEpTLmZuLnBhcnRpY2xlKHBKUy5wYXJ0aWNsZXMuY29sb3IsIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkpO1xuICAgIH1cbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzVXBkYXRlID0gZnVuY3Rpb24oKXtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcblxuICAgICAgLyogdGhlIHBhcnRpY2xlICovXG4gICAgICB2YXIgcCA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XG5cbiAgICAgIC8vIHZhciBkID0gKCBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54ICkgKiBkeCArICggZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSApICogZHk7XG4gICAgICAvLyB2YXIgZiA9IC1CQU5HX1NJWkUgLyBkO1xuICAgICAgLy8gaWYgKCBkIDwgQkFOR19TSVpFICkge1xuICAgICAgLy8gICAgIHZhciB0ID0gTWF0aC5hdGFuMiggZHksIGR4ICk7XG4gICAgICAvLyAgICAgcC52eCA9IGYgKiBNYXRoLmNvcyh0KTtcbiAgICAgIC8vICAgICBwLnZ5ID0gZiAqIE1hdGguc2luKHQpO1xuICAgICAgLy8gfVxuXG4gICAgICAvKiBtb3ZlIHRoZSBwYXJ0aWNsZSAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgIHZhciBtcyA9IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZC8yO1xuICAgICAgICBwLnggKz0gcC52eCAqIG1zO1xuICAgICAgICBwLnkgKz0gcC52eSAqIG1zO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2Ugb3BhY2l0eSBzdGF0dXMgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLmVuYWJsZSkge1xuICAgICAgICBpZihwLm9wYWNpdHlfc3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICBpZihwLm9wYWNpdHkgPj0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKSBwLm9wYWNpdHlfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgcC5vcGFjaXR5ICs9IHAudm87XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBpZihwLm9wYWNpdHkgPD0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0ub3BhY2l0eV9taW4pIHAub3BhY2l0eV9zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgIHAub3BhY2l0eSAtPSBwLnZvO1xuICAgICAgICB9XG4gICAgICAgIGlmKHAub3BhY2l0eSA8IDApIHAub3BhY2l0eSA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIGNoYW5nZSBzaXplICovXG4gICAgICBpZihwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpe1xuICAgICAgICBpZihwLnNpemVfc3RhdHVzID09IHRydWUpe1xuICAgICAgICAgIGlmKHAucmFkaXVzID49IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSkgcC5zaXplX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHAucmFkaXVzICs9IHAudnM7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGlmKHAucmFkaXVzIDw9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNpemVfbWluKSBwLnNpemVfc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICBwLnJhZGl1cyAtPSBwLnZzO1xuICAgICAgICB9XG4gICAgICAgIGlmKHAucmFkaXVzIDwgMCkgcC5yYWRpdXMgPSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2UgcGFydGljbGUgcG9zaXRpb24gaWYgaXQgaXMgb3V0IG9mIGNhbnZhcyAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcbiAgICAgICAgdmFyIG5ld19wb3MgPSB7XG4gICAgICAgICAgeF9sZWZ0OiBwLnJhZGl1cyxcbiAgICAgICAgICB4X3JpZ2h0OiAgcEpTLmNhbnZhcy53LFxuICAgICAgICAgIHlfdG9wOiBwLnJhZGl1cyxcbiAgICAgICAgICB5X2JvdHRvbTogcEpTLmNhbnZhcy5oXG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICB2YXIgbmV3X3BvcyA9IHtcbiAgICAgICAgICB4X2xlZnQ6IC1wLnJhZGl1cyxcbiAgICAgICAgICB4X3JpZ2h0OiBwSlMuY2FudmFzLncgKyBwLnJhZGl1cyxcbiAgICAgICAgICB5X3RvcDogLXAucmFkaXVzLFxuICAgICAgICAgIHlfYm90dG9tOiBwSlMuY2FudmFzLmggKyBwLnJhZGl1c1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHAueCAtIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KXtcbiAgICAgICAgcC54ID0gbmV3X3Bvcy54X2xlZnQ7XG4gICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHAueCArIHAucmFkaXVzIDwgMCl7XG4gICAgICAgIHAueCA9IG5ld19wb3MueF9yaWdodDtcbiAgICAgICAgcC55ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgIH1cbiAgICAgIGlmKHAueSAtIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKXtcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X3RvcDtcbiAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocC55ICsgcC5yYWRpdXMgPCAwKXtcbiAgICAgICAgcC55ID0gbmV3X3Bvcy55X2JvdHRvbTtcbiAgICAgICAgcC54ID0gTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgIH1cblxuICAgICAgLyogb3V0IG9mIGNhbnZhcyBtb2RlcyAqL1xuICAgICAgc3dpdGNoKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSl7XG4gICAgICAgIGNhc2UgJ2JvdW5jZSc6XG4gICAgICAgICAgaWYgKHAueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgZWxzZSBpZiAocC54IC0gcC5yYWRpdXMgPCAwKSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgaWYgKHAueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgZWxzZSBpZiAocC55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvKiBldmVudHMgKi9cbiAgICAgIGlmKGlzSW5BcnJheSgnZ3JhYicsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLm1vZGUpKXtcbiAgICAgICAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZShwKTtcbiAgICAgIH1cblxuICAgICAgaWYoaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcbiAgICAgICAgcEpTLmZuLm1vZGVzLmJ1YmJsZVBhcnRpY2xlKHApO1xuICAgICAgfVxuXG4gICAgICBpZihpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSB8fCBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XG4gICAgICAgIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUocCk7XG4gICAgICB9XG5cbiAgICAgIC8qIGludGVyYWN0aW9uIGF1dG8gYmV0d2VlbiBwYXJ0aWNsZXMgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlIHx8IHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LmVuYWJsZSl7XG4gICAgICAgIGZvcih2YXIgaiA9IGkgKyAxOyBqIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtqXTtcblxuICAgICAgICAgIC8qIGxpbmsgcGFydGljbGVzICovXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5lbmFibGUpe1xuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMocCxwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogYXR0cmFjdCBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpe1xuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmF0dHJhY3RQYXJ0aWNsZXMocCxwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogYm91bmNlIHBhcnRpY2xlcyAqL1xuICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5ib3VuY2Upe1xuICAgICAgICAgICAgcEpTLmZuLmludGVyYWN0LmJvdW5jZVBhcnRpY2xlcyhwLHAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgfTtcblxuICBwSlMuZm4ucGFydGljbGVzRHJhdyA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvKiBjbGVhciBjYW52YXMgKi9cbiAgICBwSlMuY2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgcEpTLmNhbnZhcy53LCBwSlMuY2FudmFzLmgpO1xuXG4gICAgLyogdXBkYXRlIGVhY2ggcGFydGljbGVzIHBhcmFtICovXG4gICAgcEpTLmZuLnBhcnRpY2xlc1VwZGF0ZSgpO1xuXG4gICAgLyogZHJhdyBlYWNoIHBhcnRpY2xlICovXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xuICAgICAgcC5kcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5ID0gZnVuY3Rpb24oKXtcbiAgICBwSlMucGFydGljbGVzLmFycmF5ID0gW107XG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc1JlZnJlc2ggPSBmdW5jdGlvbigpe1xuXG4gICAgLyogaW5pdCBhbGwgKi9cbiAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5jaGVja0FuaW1GcmFtZSk7XG4gICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgcEpTLnRtcC5zb3VyY2Vfc3ZnID0gdW5kZWZpbmVkO1xuICAgIHBKUy50bXAuaW1nX29iaiA9IHVuZGVmaW5lZDtcbiAgICBwSlMudG1wLmNvdW50X3N2ZyA9IDA7XG4gICAgcEpTLmZuLnBhcnRpY2xlc0VtcHR5KCk7XG4gICAgcEpTLmZuLmNhbnZhc0NsZWFyKCk7XG4gICAgXG4gICAgLyogcmVzdGFydCAqL1xuICAgIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XG5cbiAgfTtcblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyBpbnRlcmFjdGlvbiAtLS0tLS0tLS0tLS0gKi9cblxuICBwSlMuZm4uaW50ZXJhY3QubGlua1BhcnRpY2xlcyA9IGZ1bmN0aW9uKHAxLCBwMil7XG5cbiAgICB2YXIgZHggPSBwMS54IC0gcDIueCxcbiAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcblxuICAgIC8qIGRyYXcgYSBsaW5lIGJldHdlZW4gcDEgYW5kIHAyIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZW0gaXMgdW5kZXIgdGhlIGNvbmZpZyBkaXN0YW5jZSAqL1xuICAgIGlmKGRpc3QgPD0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSl7XG5cbiAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdCAvICgxL3BKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZTtcblxuICAgICAgaWYob3BhY2l0eV9saW5lID4gMCl7ICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIC8qIHN0eWxlICovXG4gICAgICAgIHZhciBjb2xvcl9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnK2NvbG9yX2xpbmUucisnLCcrY29sb3JfbGluZS5nKycsJytjb2xvcl9saW5lLmIrJywnK29wYWNpdHlfbGluZSsnKSc7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XG4gICAgICAgIC8vcEpTLmNhbnZhcy5jdHgubGluZUNhcCA9ICdyb3VuZCc7IC8qIHBlcmZvcm1hbmNlIGlzc3VlICovXG4gICAgICAgIFxuICAgICAgICAvKiBwYXRoICovXG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocDEueCwgcDEueSk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwMi54LCBwMi55KTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzICA9IGZ1bmN0aW9uKHAxLCBwMil7XG5cbiAgICAvKiBjb25kZW5zZWQgcGFydGljbGVzICovXG4gICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XG5cbiAgICBpZihkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe1xuXG4gICAgICB2YXIgYXggPSBkeC8ocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWCoxMDAwKSxcbiAgICAgICAgICBheSA9IGR5LyhwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5yb3RhdGVZKjEwMDApO1xuXG4gICAgICBwMS52eCAtPSBheDtcbiAgICAgIHAxLnZ5IC09IGF5O1xuXG4gICAgICBwMi52eCArPSBheDtcbiAgICAgIHAyLnZ5ICs9IGF5O1xuXG4gICAgfVxuICAgIFxuXG4gIH1cblxuXG4gIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMgPSBmdW5jdGlvbihwMSwgcDIpe1xuXG4gICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSksXG4gICAgICAgIGRpc3RfcCA9IHAxLnJhZGl1cytwMi5yYWRpdXM7XG5cbiAgICBpZihkaXN0IDw9IGRpc3RfcCl7XG4gICAgICBwMS52eCA9IC1wMS52eDtcbiAgICAgIHAxLnZ5ID0gLXAxLnZ5O1xuXG4gICAgICBwMi52eCA9IC1wMi52eDtcbiAgICAgIHAyLnZ5ID0gLXAyLnZ5O1xuICAgIH1cblxuICB9XG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBtb2RlcyBldmVudHMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMgPSBmdW5jdGlvbihuYiwgcG9zKXtcblxuICAgIHBKUy50bXAucHVzaGluZyA9IHRydWU7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbmI7IGkrKyl7XG4gICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2goXG4gICAgICAgIG5ldyBwSlMuZm4ucGFydGljbGUoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5jb2xvcixcbiAgICAgICAgICBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3gnOiBwb3MgPyBwb3MucG9zX3ggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53LFxuICAgICAgICAgICAgJ3knOiBwb3MgPyBwb3MucG9zX3kgOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICApXG4gICAgICBpZihpID09IG5iLTEpe1xuICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBwSlMudG1wLnB1c2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMgPSBmdW5jdGlvbihuYil7XG5cbiAgICBwSlMucGFydGljbGVzLmFycmF5LnNwbGljZSgwLCBuYik7XG4gICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xuXG4gICAgLyogb24gaG92ZXIgZXZlbnQgKi9cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XG5cbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXG4gICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKSxcbiAgICAgICAgICByYXRpbyA9IDEgLSBkaXN0X21vdXNlIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlO1xuXG4gICAgICBmdW5jdGlvbiBpbml0KCl7XG4gICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBwLm9wYWNpdHk7XG4gICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHAucmFkaXVzO1xuICAgICAgfVxuXG4gICAgICAvKiBtb3VzZW1vdmUgLSBjaGVjayByYXRpbyAqL1xuICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xuXG4gICAgICAgIGlmKHJhdGlvID49IDAgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcbiAgICAgICAgICBcbiAgICAgICAgICAvKiBzaXplICovXG4gICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgIT0gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKXtcblxuICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPiBwSlMucGFydGljbGVzLnNpemUudmFsdWUpe1xuICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHAucmFkaXVzICsgKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplKnJhdGlvKTtcbiAgICAgICAgICAgICAgaWYoc2l6ZSA+PSAwKXtcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdmFyIGRpZiA9IHAucmFkaXVzIC0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUsXG4gICAgICAgICAgICAgICAgICBzaXplID0gcC5yYWRpdXMgLSAoZGlmKnJhdGlvKTtcbiAgICAgICAgICAgICAgaWYoc2l6ZSA+IDApe1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IHNpemU7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHAucmFkaXVzX2J1YmJsZSA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIG9wYWNpdHkgKi9cbiAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSAhPSBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xuXG4gICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSA+IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSl7XG4gICAgICAgICAgICAgIHZhciBvcGFjaXR5ID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkqcmF0aW87XG4gICAgICAgICAgICAgIGlmKG9wYWNpdHkgPiBwLm9wYWNpdHkgJiYgb3BhY2l0eSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSl7XG4gICAgICAgICAgICAgICAgcC5vcGFjaXR5X2J1YmJsZSA9IG9wYWNpdHk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHAub3BhY2l0eSAtIChwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUtcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpKnJhdGlvO1xuICAgICAgICAgICAgICBpZihvcGFjaXR5IDwgcC5vcGFjaXR5ICYmIG9wYWNpdHkgPj0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpe1xuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9ZWxzZXtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgfVxuXG5cbiAgICAgIC8qIG1vdXNlbGVhdmUgKi9cbiAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2VsZWF2ZScpe1xuICAgICAgICBpbml0KCk7XG4gICAgICB9XG4gICAgXG4gICAgfVxuXG4gICAgLyogb24gY2xpY2sgZXZlbnQgKi9cbiAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ2J1YmJsZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKXtcblxuXG4gICAgICBpZihwSlMudG1wLmJ1YmJsZV9jbGlja2luZyl7XG4gICAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194LFxuICAgICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSxcbiAgICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSksXG4gICAgICAgICAgICB0aW1lX3NwZW50ID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSkvMTAwMDtcblxuICAgICAgICBpZih0aW1lX3NwZW50ID4gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKXtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGltZV9zcGVudCA+IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbioyKXtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9jbGlja2luZyA9IGZhbHNlO1xuICAgICAgICAgIHBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgZnVuY3Rpb24gcHJvY2VzcyhidWJibGVfcGFyYW0sIHBhcnRpY2xlc19wYXJhbSwgcF9vYmpfYnViYmxlLCBwX29iaiwgaWQpe1xuXG4gICAgICAgIGlmKGJ1YmJsZV9wYXJhbSAhPSBwYXJ0aWNsZXNfcGFyYW0pe1xuXG4gICAgICAgICAgaWYoIXBKUy50bXAuYnViYmxlX2R1cmF0aW9uX2VuZCl7XG4gICAgICAgICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSl7XG4gICAgICAgICAgICAgIGlmKHBfb2JqX2J1YmJsZSAhPSB1bmRlZmluZWQpIHZhciBvYmogPSBwX29ial9idWJibGU7XG4gICAgICAgICAgICAgIGVsc2UgdmFyIG9iaiA9IHBfb2JqO1xuICAgICAgICAgICAgICBpZihvYmogIT0gYnViYmxlX3BhcmFtKXtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgdmFyIHZhbHVlX3RtcCA9IHBfb2JqIC0gKHRpbWVfc3BlbnQgKiAocF9vYmogLSBidWJibGVfcGFyYW0pIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmR1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICAgIGRpZiA9IGJ1YmJsZV9wYXJhbSAtIHZhbHVlX3RtcDtcbiAgICAgICAgICAgICAgICAgIHZhbHVlID0gYnViYmxlX3BhcmFtICsgZGlmO1xuICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHZhbHVlO1xuICAgICAgICAgICAgICBpZihpZCA9PSAnb3BhY2l0eScpIHAub3BhY2l0eV9idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmKHBKUy50bXAuYnViYmxlX2NsaWNraW5nKXtcbiAgICAgICAgLyogc2l6ZSAqL1xuICAgICAgICBwcm9jZXNzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLCBwSlMucGFydGljbGVzLnNpemUudmFsdWUsIHAucmFkaXVzX2J1YmJsZSwgcC5yYWRpdXMsICdzaXplJyk7XG4gICAgICAgIC8qIG9wYWNpdHkgKi9cbiAgICAgICAgcHJvY2VzcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUub3BhY2l0eSwgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLCBwLm9wYWNpdHlfYnViYmxlLCBwLm9wYWNpdHksICdvcGFjaXR5Jyk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi5tb2Rlcy5yZXB1bHNlUGFydGljbGUgPSBmdW5jdGlvbihwKXtcblxuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSAmJiBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbW92ZScpIHtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpO1xuXG4gICAgICB2YXIgbm9ybVZlYyA9IHt4OiBkeF9tb3VzZS9kaXN0X21vdXNlLCB5OiBkeV9tb3VzZS9kaXN0X21vdXNlfSxcbiAgICAgICAgICByZXB1bHNlUmFkaXVzID0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kaXN0YW5jZSxcbiAgICAgICAgICB2ZWxvY2l0eSA9IDEwMCxcbiAgICAgICAgICByZXB1bHNlRmFjdG9yID0gY2xhbXAoKDEvcmVwdWxzZVJhZGl1cykqKC0xKk1hdGgucG93KGRpc3RfbW91c2UvcmVwdWxzZVJhZGl1cywyKSsxKSpyZXB1bHNlUmFkaXVzKnZlbG9jaXR5LCAwLCA1MCk7XG4gICAgICBcbiAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgIHg6IHAueCArIG5vcm1WZWMueCAqIHJlcHVsc2VGYWN0b3IsXG4gICAgICAgIHk6IHAueSArIG5vcm1WZWMueSAqIHJlcHVsc2VGYWN0b3JcbiAgICAgIH1cblxuICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcbiAgICAgICAgaWYocG9zLnggLSBwLnJhZGl1cyA+IDAgJiYgcG9zLnggKyBwLnJhZGl1cyA8IHBKUy5jYW52YXMudykgcC54ID0gcG9zLng7XG4gICAgICAgIGlmKHBvcy55IC0gcC5yYWRpdXMgPiAwICYmIHBvcy55ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLmgpIHAueSA9IHBvcy55O1xuICAgICAgfWVsc2V7XG4gICAgICAgIHAueCA9IHBvcy54O1xuICAgICAgICBwLnkgPSBwb3MueTtcbiAgICAgIH1cbiAgICBcbiAgICB9XG5cblxuICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlICYmIGlzSW5BcnJheSgncmVwdWxzZScsIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLm1vZGUpKSB7XG5cbiAgICAgIGlmKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKXtcbiAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50Kys7XG4gICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jb3VudCA9PSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCl7XG4gICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYocEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nKXtcblxuICAgICAgICB2YXIgcmVwdWxzZVJhZGl1cyA9IE1hdGgucG93KHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UvNiwgMyk7XG5cbiAgICAgICAgdmFyIGR4ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggLSBwLngsXG4gICAgICAgICAgICBkeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc195IC0gcC55LFxuICAgICAgICAgICAgZCA9IGR4KmR4ICsgZHkqZHk7XG5cbiAgICAgICAgdmFyIGZvcmNlID0gLXJlcHVsc2VSYWRpdXMgLyBkICogMTtcblxuICAgICAgICBmdW5jdGlvbiBwcm9jZXNzKCl7XG5cbiAgICAgICAgICB2YXIgZiA9IE1hdGguYXRhbjIoZHksZHgpO1xuICAgICAgICAgIHAudnggPSBmb3JjZSAqIE1hdGguY29zKGYpO1xuICAgICAgICAgIHAudnkgPSBmb3JjZSAqIE1hdGguc2luKGYpO1xuXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLm91dF9tb2RlID09ICdib3VuY2UnKXtcbiAgICAgICAgICAgIHZhciBwb3MgPSB7XG4gICAgICAgICAgICAgIHg6IHAueCArIHAudngsXG4gICAgICAgICAgICAgIHk6IHAueSArIHAudnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwb3MueCArIHAucmFkaXVzID4gcEpTLmNhbnZhcy53KSBwLnZ4ID0gLXAudng7XG4gICAgICAgICAgICBlbHNlIGlmIChwb3MueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgICAgaWYgKHBvcy55ICsgcC5yYWRpdXMgPiBwSlMuY2FudmFzLmgpIHAudnkgPSAtcC52eTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHBvcy55IC0gcC5yYWRpdXMgPCAwKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBkZWZhdWx0XG4gICAgICAgIGlmKGQgPD0gcmVwdWxzZVJhZGl1cyl7XG4gICAgICAgICAgcHJvY2VzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYmFuZyAtIHNsb3cgbW90aW9uIG1vZGVcbiAgICAgICAgLy8gaWYoIXBKUy50bXAucmVwdWxzZV9maW5pc2gpe1xuICAgICAgICAvLyAgIGlmKGQgPD0gcmVwdWxzZVJhZGl1cyl7XG4gICAgICAgIC8vICAgICBwcm9jZXNzKCk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICBwcm9jZXNzKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgXG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jbGlja2luZyA9PSBmYWxzZSl7XG5cbiAgICAgICAgICBwLnZ4ID0gcC52eF9pO1xuICAgICAgICAgIHAudnkgPSBwLnZ5X2k7XG4gICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cblxuICBwSlMuZm4ubW9kZXMuZ3JhYlBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XG5cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKXtcblxuICAgICAgdmFyIGR4X21vdXNlID0gcC54IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsXG4gICAgICAgICAgZHlfbW91c2UgPSBwLnkgLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSxcbiAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpO1xuXG4gICAgICAvKiBkcmF3IGEgbGluZSBiZXR3ZWVuIHRoZSBjdXJzb3IgYW5kIHRoZSBwYXJ0aWNsZSBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIHVuZGVyIHRoZSBjb25maWcgZGlzdGFuY2UgKi9cbiAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSl7XG5cbiAgICAgICAgdmFyIG9wYWNpdHlfbGluZSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSAtIChkaXN0X21vdXNlIC8gKDEvcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5saW5lX2xpbmtlZC5vcGFjaXR5KSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmRpc3RhbmNlO1xuXG4gICAgICAgIGlmKG9wYWNpdHlfbGluZSA+IDApe1xuXG4gICAgICAgICAgLyogc3R5bGUgKi9cbiAgICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgnK2NvbG9yX2xpbmUucisnLCcrY29sb3JfbGluZS5nKycsJytjb2xvcl9saW5lLmIrJywnK29wYWNpdHlfbGluZSsnKSc7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubGluZVdpZHRoID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aDtcbiAgICAgICAgICAvL3BKUy5jYW52YXMuY3R4LmxpbmVDYXAgPSAncm91bmQnOyAvKiBwZXJmb3JtYW5jZSBpc3N1ZSAqL1xuICAgICAgICAgIFxuICAgICAgICAgIC8qIHBhdGggKi9cbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5tb3ZlVG8ocC54LCBwLnkpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVUbyhwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCwgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLnZlbmRvcnMuZXZlbnRzTGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcblxuICAgIC8qIGV2ZW50cyB0YXJnZXQgZWxlbWVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmRldGVjdF9vbiA9PSAnd2luZG93Jyl7XG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbCA9IHdpbmRvdztcbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsID0gcEpTLmNhbnZhcy5lbDtcbiAgICB9XG5cblxuICAgIC8qIGRldGVjdCBtb3VzZSBwb3MgLSBvbiBob3ZlciAvIGNsaWNrIGV2ZW50ICovXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlIHx8IHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XG5cbiAgICAgIC8qIGVsIG9uIG1vdXNlbW92ZSAqL1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZWwgPT0gd2luZG93KXtcbiAgICAgICAgICB2YXIgcG9zX3ggPSBlLmNsaWVudFgsXG4gICAgICAgICAgICAgIHBvc195ID0gZS5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgdmFyIHBvc194ID0gZS5vZmZzZXRYIHx8IGUuY2xpZW50WCxcbiAgICAgICAgICAgICAgcG9zX3kgPSBlLm9mZnNldFkgfHwgZS5jbGllbnRZO1xuICAgICAgICB9XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBwb3NfeDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBwb3NfeTtcblxuICAgICAgICBpZihwSlMudG1wLnJldGluYSl7XG4gICAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggKj0gcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZW1vdmUnO1xuXG4gICAgICB9KTtcblxuICAgICAgLyogZWwgb24gb25tb3VzZWxlYXZlICovXG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oZSl7XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ggPSBudWxsO1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSA9IG51bGw7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9ICdtb3VzZWxlYXZlJztcblxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKiBvbiBjbGljayBldmVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XG5cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194O1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195O1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja190aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2suZW5hYmxlKXtcblxuICAgICAgICAgIHN3aXRjaChwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKXtcblxuICAgICAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XG4gICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iID09IDEpe1xuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA+IDEpe1xuICAgICAgICAgICAgICAgICAgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMocEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVtb3ZlLnBhcnRpY2xlc19uYik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnYnViYmxlJzpcbiAgICAgICAgICAgICAgcEpTLnRtcC5idWJibGVfY2xpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3JlcHVsc2UnOlxuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY291bnQgPSAwO1xuICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfZmluaXNoID0gZmFsc2U7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSwgcEpTLmludGVyYWN0aXZpdHkubW9kZXMucmVwdWxzZS5kdXJhdGlvbioxMDAwKVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgfTtcblxuICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcyA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihwSlMucGFydGljbGVzLm51bWJlci5kZW5zaXR5LmVuYWJsZSl7XG5cbiAgICAgIC8qIGNhbGMgYXJlYSAqL1xuICAgICAgdmFyIGFyZWEgPSBwSlMuY2FudmFzLmVsLndpZHRoICogcEpTLmNhbnZhcy5lbC5oZWlnaHQgLyAxMDAwO1xuICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xuICAgICAgICBhcmVhID0gYXJlYS8ocEpTLmNhbnZhcy5weHJhdGlvKjIpO1xuICAgICAgfVxuXG4gICAgICAvKiBjYWxjIG51bWJlciBvZiBwYXJ0aWNsZXMgYmFzZWQgb24gZGVuc2l0eSBhcmVhICovXG4gICAgICB2YXIgbmJfcGFydGljbGVzID0gYXJlYSAqIHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlIC8gcEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS52YWx1ZV9hcmVhO1xuXG4gICAgICAvKiBhZGQgb3IgcmVtb3ZlIFggcGFydGljbGVzICovXG4gICAgICB2YXIgbWlzc2luZ19wYXJ0aWNsZXMgPSBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aCAtIG5iX3BhcnRpY2xlcztcbiAgICAgIGlmKG1pc3NpbmdfcGFydGljbGVzIDwgMCkgcEpTLmZuLm1vZGVzLnB1c2hQYXJ0aWNsZXMoTWF0aC5hYnMobWlzc2luZ19wYXJ0aWNsZXMpKTtcbiAgICAgIGVsc2UgcEpTLmZuLm1vZGVzLnJlbW92ZVBhcnRpY2xlcyhtaXNzaW5nX3BhcnRpY2xlcyk7XG5cbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCA9IGZ1bmN0aW9uKHAxLCBwb3NpdGlvbil7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBpKyspe1xuICAgICAgdmFyIHAyID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcblxuICAgICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgICAgZHkgPSBwMS55IC0gcDIueSxcbiAgICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuXG4gICAgICBpZihkaXN0IDw9IHAxLnJhZGl1cyArIHAyLnJhZGl1cyl7XG4gICAgICAgIHAxLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgICAgICBwMS55ID0gcG9zaXRpb24gPyBwb3NpdGlvbi55IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaDtcbiAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tPdmVybGFwKHAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcgPSBmdW5jdGlvbihwKXtcblxuICAgIC8qIHNldCBjb2xvciB0byBzdmcgZWxlbWVudCAqL1xuICAgIHZhciBzdmdYbWwgPSBwSlMudG1wLnNvdXJjZV9zdmcsXG4gICAgICAgIHJnYkhleCA9IC8jKFswLTlBLUZdezMsNn0pL2dpLFxuICAgICAgICBjb2xvcmVkU3ZnWG1sID0gc3ZnWG1sLnJlcGxhY2UocmdiSGV4LCBmdW5jdGlvbiAobSwgciwgZywgYikge1xuICAgICAgICAgIGlmKHAuY29sb3IucmdiKXtcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcrcC5jb2xvci5yZ2IucisnLCcrcC5jb2xvci5yZ2IuZysnLCcrcC5jb2xvci5yZ2IuYisnLCcrcC5vcGFjaXR5KycpJztcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdoc2xhKCcrcC5jb2xvci5oc2wuaCsnLCcrcC5jb2xvci5oc2wucysnJSwnK3AuY29sb3IuaHNsLmwrJyUsJytwLm9wYWNpdHkrJyknO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY29sb3JfdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgLyogcHJlcGFyZSB0byBjcmVhdGUgaW1nIHdpdGggY29sb3JlZCBzdmcgKi9cbiAgICB2YXIgc3ZnID0gbmV3IEJsb2IoW2NvbG9yZWRTdmdYbWxdLCB7dHlwZTogJ2ltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCd9KSxcbiAgICAgICAgRE9NVVJMID0gd2luZG93LlVSTCB8fCB3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdyxcbiAgICAgICAgdXJsID0gRE9NVVJMLmNyZWF0ZU9iamVjdFVSTChzdmcpO1xuXG4gICAgLyogY3JlYXRlIHBhcnRpY2xlIGltZyBvYmogKi9cbiAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpe1xuICAgICAgcC5pbWcub2JqID0gaW1nO1xuICAgICAgcC5pbWcubG9hZGVkID0gdHJ1ZTtcbiAgICAgIERPTVVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHBKUy50bXAuY291bnRfc3ZnKys7XG4gICAgfSk7XG4gICAgaW1nLnNyYyA9IHVybDtcblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZGVzdHJveXBKUyA9IGZ1bmN0aW9uKCl7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgIGNhbnZhc19lbC5yZW1vdmUoKTtcbiAgICBwSlNEb20gPSBudWxsO1xuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZHJhd1NoYXBlID0gZnVuY3Rpb24oYywgc3RhcnRYLCBzdGFydFksIHNpZGVMZW5ndGgsIHNpZGVDb3VudE51bWVyYXRvciwgc2lkZUNvdW50RGVub21pbmF0b3Ipe1xuXG4gICAgLy8gQnkgUHJvZ3JhbW1pbmcgVGhvbWFzIC0gaHR0cHM6Ly9wcm9ncmFtbWluZ3Rob21hcy53b3JkcHJlc3MuY29tLzIwMTMvMDQvMDMvbi1zaWRlZC1zaGFwZXMvXG4gICAgdmFyIHNpZGVDb3VudCA9IHNpZGVDb3VudE51bWVyYXRvciAqIHNpZGVDb3VudERlbm9taW5hdG9yO1xuICAgIHZhciBkZWNpbWFsU2lkZXMgPSBzaWRlQ291bnROdW1lcmF0b3IgLyBzaWRlQ291bnREZW5vbWluYXRvcjtcbiAgICB2YXIgaW50ZXJpb3JBbmdsZURlZ3JlZXMgPSAoMTgwICogKGRlY2ltYWxTaWRlcyAtIDIpKSAvIGRlY2ltYWxTaWRlcztcbiAgICB2YXIgaW50ZXJpb3JBbmdsZSA9IE1hdGguUEkgLSBNYXRoLlBJICogaW50ZXJpb3JBbmdsZURlZ3JlZXMgLyAxODA7IC8vIGNvbnZlcnQgdG8gcmFkaWFuc1xuICAgIGMuc2F2ZSgpO1xuICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgYy50cmFuc2xhdGUoc3RhcnRYLCBzdGFydFkpO1xuICAgIGMubW92ZVRvKDAsMCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWRlQ291bnQ7IGkrKykge1xuICAgICAgYy5saW5lVG8oc2lkZUxlbmd0aCwwKTtcbiAgICAgIGMudHJhbnNsYXRlKHNpZGVMZW5ndGgsMCk7XG4gICAgICBjLnJvdGF0ZShpbnRlcmlvckFuZ2xlKTtcbiAgICB9XG4gICAgLy9jLnN0cm9rZSgpO1xuICAgIGMuZmlsbCgpO1xuICAgIGMucmVzdG9yZSgpO1xuXG4gIH07XG5cbiAgcEpTLmZuLnZlbmRvcnMuZXhwb3J0SW1nID0gZnVuY3Rpb24oKXtcbiAgICB3aW5kb3cub3BlbihwSlMuY2FudmFzLmVsLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyksICdfYmxhbmsnKTtcbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmxvYWRJbWcgPSBmdW5jdGlvbih0eXBlKXtcblxuICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMgIT0gJycpe1xuXG4gICAgICBpZih0eXBlID09ICdzdmcnKXtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYyk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xuICAgICAgICAgICAgaWYoeGhyLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICAgICAgICBwSlMudG1wLnNvdXJjZV9zdmcgPSBkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2U7XG4gICAgICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBJbWFnZSBub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4aHIuc2VuZCgpO1xuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICBwSlMudG1wLmltZ19vYmogPSBpbWc7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmM7XG5cbiAgICAgIH1cblxuICAgIH1lbHNle1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIE5vIGltYWdlLnNyYycpO1xuICAgICAgcEpTLnRtcC5pbWdfZXJyb3IgPSB0cnVlO1xuICAgIH1cblxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuZHJhdyA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJyl7XG5cbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2Zycpe1xuXG4gICAgICAgIGlmKHBKUy50bXAuY291bnRfc3ZnID49IHBKUy5wYXJ0aWNsZXMubnVtYmVyLnZhbHVlKXtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnc3RpbGwgbG9hZGluZy4uLicpO1xuICAgICAgICAgIGlmKCFwSlMudG1wLmltZ19lcnJvcikgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9XG5cbiAgICAgIH1lbHNle1xuXG4gICAgICAgIGlmKHBKUy50bXAuaW1nX29iaiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgICAgICAgIGVsc2UgcEpTLmZuLmRyYXdBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi52ZW5kb3JzLmRyYXcpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3IpIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdyA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvLyBpZiBzaGFwZSBpcyBpbWFnZVxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUudHlwZSA9PSAnaW1hZ2UnKXtcblxuICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyAmJiBwSlMudG1wLnNvdXJjZV9zdmcgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgcEpTLnRtcC5jaGVja0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUoY2hlY2spO1xuICAgICAgfWVsc2V7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2ltYWdlcyBsb2FkZWQhIGNhbmNlbCBjaGVjaycpO1xuICAgICAgICBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy50bXAuY2hlY2tBbmltRnJhbWUpO1xuICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3Ipe1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcbiAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9XG5cbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmluaXQoKTtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXcoKTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmluaXQgPSBmdW5jdGlvbigpe1xuXG4gICAgLyogaW5pdCBjYW52YXMgKyBwYXJ0aWNsZXMgKi9cbiAgICBwSlMuZm4ucmV0aW5hSW5pdCgpO1xuICAgIHBKUy5mbi5jYW52YXNJbml0KCk7XG4gICAgcEpTLmZuLmNhbnZhc1NpemUoKTtcbiAgICBwSlMuZm4uY2FudmFzUGFpbnQoKTtcbiAgICBwSlMuZm4ucGFydGljbGVzQ3JlYXRlKCk7XG4gICAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMoKTtcblxuICAgIC8qIHBhcnRpY2xlcy5saW5lX2xpbmtlZCAtIGNvbnZlcnQgaGV4IGNvbG9ycyB0byByZ2IgKi9cbiAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lID0gaGV4VG9SZ2IocEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcik7XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLnN0YXJ0ID0gZnVuY3Rpb24oKXtcblxuICAgIGlmKGlzSW5BcnJheSgnaW1hZ2UnLCBwSlMucGFydGljbGVzLnNoYXBlLnR5cGUpKXtcbiAgICAgIHBKUy50bXAuaW1nX3R5cGUgPSBwSlMucGFydGljbGVzLnNoYXBlLmltYWdlLnNyYy5zdWJzdHIocEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMubGVuZ3RoIC0gMyk7XG4gICAgICBwSlMuZm4udmVuZG9ycy5sb2FkSW1nKHBKUy50bXAuaW1nX3R5cGUpO1xuICAgIH1lbHNle1xuICAgICAgcEpTLmZuLnZlbmRvcnMuY2hlY2tCZWZvcmVEcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cblxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgLSBzdGFydCAtLS0tLS0tLS0tLS0gKi9cblxuXG4gIHBKUy5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycygpO1xuXG4gIHBKUy5mbi52ZW5kb3JzLnN0YXJ0KCk7XG4gIFxuXG5cbn07XG5cbi8qIC0tLS0tLS0tLS0gZ2xvYmFsIGZ1bmN0aW9ucyAtIHZlbmRvcnMgLS0tLS0tLS0tLS0tICovXG5cbk9iamVjdC5kZWVwRXh0ZW5kID0gZnVuY3Rpb24gZGVlcEV4dGVuZEZ1bmN0aW9uKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxuICAgICBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgIGRlZXBFeHRlbmRGdW5jdGlvbihkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAgICB8fFxuICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICAgfHxcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgIHx8XG4gICAgZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgfTtcbn0pKCk7XG5cbndpbmRvdy5jYW5jZWxSZXF1ZXN0QW5pbUZyYW1lID0gKCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSAgICAgICAgIHx8XG4gICAgd2luZG93LndlYmtpdENhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICB3aW5kb3cub0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XG4gICAgd2luZG93Lm1zQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgIGNsZWFyVGltZW91dFxufSApKCk7XG5cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCl7XG4gIC8vIEJ5IFRpbSBEb3duIC0gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTYyNDEzOS8zNDkzNjUwXG4gIC8vIEV4cGFuZCBzaG9ydGhhbmQgZm9ybSAoZS5nLiBcIjAzRlwiKSB0byBmdWxsIGZvcm0gKGUuZy4gXCIwMDMzRkZcIilcbiAgdmFyIHNob3J0aGFuZFJlZ2V4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgaGV4ID0gaGV4LnJlcGxhY2Uoc2hvcnRoYW5kUmVnZXgsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcbiAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgfSk7XG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICB9IDogbnVsbDtcbn07XG5cbmZ1bmN0aW9uIGNsYW1wKG51bWJlciwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bWJlciwgbWluKSwgbWF4KTtcbn07XG5cbmZ1bmN0aW9uIGlzSW5BcnJheSh2YWx1ZSwgYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LmluZGV4T2YodmFsdWUpID4gLTE7XG59XG5cblxuLyogLS0tLS0tLS0tLSBwYXJ0aWNsZXMuanMgZnVuY3Rpb25zIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXG5cbndpbmRvdy5wSlNEb20gPSBbXTtcblxud2luZG93LnBhcnRpY2xlc0pTID0gZnVuY3Rpb24odGFnX2lkLCBwYXJhbXMpe1xuXG4gIC8vY29uc29sZS5sb2cocGFyYW1zKTtcblxuICAvKiBubyBzdHJpbmcgaWQ/IHNvIGl0J3Mgb2JqZWN0IHBhcmFtcywgYW5kIHNldCB0aGUgaWQgd2l0aCBkZWZhdWx0IGlkICovXG4gIGlmKHR5cGVvZih0YWdfaWQpICE9ICdzdHJpbmcnKXtcbiAgICBwYXJhbXMgPSB0YWdfaWQ7XG4gICAgdGFnX2lkID0gJ3BhcnRpY2xlcy1qcyc7XG4gIH1cblxuICAvKiBubyBpZD8gc2V0IHRoZSBpZCB0byBkZWZhdWx0IGlkICovXG4gIGlmKCF0YWdfaWQpe1xuICAgIHRhZ19pZCA9ICdwYXJ0aWNsZXMtanMnO1xuICB9XG5cbiAgLyogcEpTIGVsZW1lbnRzICovXG4gIHZhciBwSlNfdGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnX2lkKSxcbiAgICAgIHBKU19jYW52YXNfY2xhc3MgPSAncGFydGljbGVzLWpzLWNhbnZhcy1lbCcsXG4gICAgICBleGlzdF9jYW52YXMgPSBwSlNfdGFnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUocEpTX2NhbnZhc19jbGFzcyk7XG5cbiAgLyogcmVtb3ZlIGNhbnZhcyBpZiBleGlzdHMgaW50byB0aGUgcEpTIHRhcmdldCB0YWcgKi9cbiAgaWYoZXhpc3RfY2FudmFzLmxlbmd0aCl7XG4gICAgd2hpbGUoZXhpc3RfY2FudmFzLmxlbmd0aCA+IDApe1xuICAgICAgcEpTX3RhZy5yZW1vdmVDaGlsZChleGlzdF9jYW52YXNbMF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIGNyZWF0ZSBjYW52YXMgZWxlbWVudCAqL1xuICB2YXIgY2FudmFzX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhc19lbC5jbGFzc05hbWUgPSBwSlNfY2FudmFzX2NsYXNzO1xuXG4gIC8qIHNldCBzaXplIGNhbnZhcyAqL1xuICBjYW52YXNfZWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgY2FudmFzX2VsLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuXG4gIC8qIGFwcGVuZCBjYW52YXMgKi9cbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCkuYXBwZW5kQ2hpbGQoY2FudmFzX2VsKTtcblxuICAvKiBsYXVuY2ggcGFydGljbGUuanMgKi9cbiAgaWYoY2FudmFzICE9IG51bGwpe1xuICAgIHBKU0RvbS5wdXNoKG5ldyBwSlModGFnX2lkLCBwYXJhbXMpKTtcbiAgfVxuXG59O1xuXG53aW5kb3cucGFydGljbGVzSlMubG9hZCA9IGZ1bmN0aW9uKHRhZ19pZCwgcGF0aF9jb25maWdfanNvbiwgY2FsbGJhY2spe1xuXG4gIC8qIGxvYWQganNvbiBjb25maWcgKi9cbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbignR0VUJywgcGF0aF9jb25maWdfanNvbik7XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmKHhoci5yZWFkeVN0YXRlID09IDQpe1xuICAgICAgaWYoeGhyLnN0YXR1cyA9PSAyMDApe1xuICAgICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShkYXRhLmN1cnJlbnRUYXJnZXQucmVzcG9uc2UpO1xuICAgICAgICB3aW5kb3cucGFydGljbGVzSlModGFnX2lkLCBwYXJhbXMpO1xuICAgICAgICBpZihjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gWE1MSHR0cFJlcXVlc3Qgc3RhdHVzOiAnK3hoci5zdGF0dXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gRmlsZSBjb25maWcgbm90IGZvdW5kJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICB4aHIuc2VuZCgpO1xuXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvcGFydGljbGVzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==