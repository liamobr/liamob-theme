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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),

/***/ 42:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmQ2N2Q2ZGNlYjVlYmI2ZDgwNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9wYXJ0aWNsZXMuanMiXSwibmFtZXMiOlsicEpTIiwidGFnX2lkIiwicGFyYW1zIiwiY2FudmFzX2VsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2FudmFzIiwiZWwiLCJ3Iiwib2Zmc2V0V2lkdGgiLCJoIiwib2Zmc2V0SGVpZ2h0IiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwid2lkdGgiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJpbWFnZSIsInNyYyIsImhlaWdodCIsIm9wYWNpdHkiLCJyYW5kb20iLCJhbmltIiwic3BlZWQiLCJvcGFjaXR5X21pbiIsInN5bmMiLCJzaXplIiwic2l6ZV9taW4iLCJsaW5lX2xpbmtlZCIsImRpc3RhbmNlIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJhcnJheSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbmhvdmVyIiwibW9kZSIsIm9uY2xpY2siLCJyZXNpemUiLCJtb2RlcyIsImdyYWIiLCJidWJibGUiLCJkdXJhdGlvbiIsInJlcHVsc2UiLCJwdXNoIiwicGFydGljbGVzX25iIiwicmVtb3ZlIiwibW91c2UiLCJyZXRpbmFfZGV0ZWN0IiwiZm4iLCJpbnRlcmFjdCIsInZlbmRvcnMiLCJ0bXAiLCJPYmplY3QiLCJkZWVwRXh0ZW5kIiwib2JqIiwic2l6ZV92YWx1ZSIsInNpemVfYW5pbV9zcGVlZCIsIm1vdmVfc3BlZWQiLCJsaW5lX2xpbmtlZF9kaXN0YW5jZSIsImxpbmVfbGlua2VkX3dpZHRoIiwibW9kZV9ncmFiX2Rpc3RhbmNlIiwibW9kZV9idWJibGVfZGlzdGFuY2UiLCJtb2RlX2J1YmJsZV9zaXplIiwibW9kZV9yZXB1bHNlX2Rpc3RhbmNlIiwicmV0aW5hSW5pdCIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJweHJhdGlvIiwicmV0aW5hIiwiY2FudmFzSW5pdCIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXNTaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcnRpY2xlc0VtcHR5IiwicGFydGljbGVzQ3JlYXRlIiwicGFydGljbGVzRHJhdyIsImRlbnNpdHlBdXRvUGFydGljbGVzIiwiY2FudmFzUGFpbnQiLCJmaWxsUmVjdCIsImNhbnZhc0NsZWFyIiwiY2xlYXJSZWN0IiwicGFydGljbGUiLCJwb3NpdGlvbiIsInJhZGl1cyIsIk1hdGgiLCJzaXplX3N0YXR1cyIsInZzIiwieCIsInkiLCJjaGVja092ZXJsYXAiLCJBcnJheSIsImNvbG9yX3NlbGVjdGVkIiwiZmxvb3IiLCJsZW5ndGgiLCJyZ2IiLCJoZXhUb1JnYiIsInIiLCJ1bmRlZmluZWQiLCJnIiwiYiIsInMiLCJsIiwiaHNsIiwib3BhY2l0eV9zdGF0dXMiLCJ2byIsInZlbGJhc2UiLCJ2eCIsInZ5IiwidnhfaSIsInZ5X2kiLCJzaGFwZV90eXBlIiwic2hhcGVfc2VsZWN0ZWQiLCJzaCIsImltZyIsInJhdGlvIiwiaW1nX3R5cGUiLCJzb3VyY2Vfc3ZnIiwiY3JlYXRlU3ZnSW1nIiwicHVzaGluZyIsImxvYWRlZCIsInByb3RvdHlwZSIsImRyYXciLCJwIiwicmFkaXVzX2J1YmJsZSIsIm9wYWNpdHlfYnViYmxlIiwiY29sb3JfdmFsdWUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInJlY3QiLCJkcmF3U2hhcGUiLCJkcmF3SW1hZ2UiLCJpbWdfb2JqIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJmaWxsIiwiaSIsInBhcnRpY2xlc1VwZGF0ZSIsIm1zIiwibmV3X3BvcyIsInhfbGVmdCIsInhfcmlnaHQiLCJ5X3RvcCIsInlfYm90dG9tIiwiaXNJbkFycmF5IiwiZ3JhYlBhcnRpY2xlIiwiYnViYmxlUGFydGljbGUiLCJyZXB1bHNlUGFydGljbGUiLCJqIiwicDIiLCJsaW5rUGFydGljbGVzIiwiYXR0cmFjdFBhcnRpY2xlcyIsImJvdW5jZVBhcnRpY2xlcyIsInBhcnRpY2xlc1JlZnJlc2giLCJjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lIiwiY2hlY2tBbmltRnJhbWUiLCJkcmF3QW5pbUZyYW1lIiwiY291bnRfc3ZnIiwic3RhcnQiLCJwMSIsImR4IiwiZHkiLCJkaXN0Iiwic3FydCIsIm9wYWNpdHlfbGluZSIsImNvbG9yX2xpbmUiLCJjb2xvcl9yZ2JfbGluZSIsIm1vdmVUbyIsImxpbmVUbyIsImF4IiwiYXkiLCJkaXN0X3AiLCJwdXNoUGFydGljbGVzIiwibmIiLCJwb3MiLCJwb3NfeCIsInBvc195IiwicmVtb3ZlUGFydGljbGVzIiwic3BsaWNlIiwiaW5pdCIsImR4X21vdXNlIiwiZHlfbW91c2UiLCJkaXN0X21vdXNlIiwic3RhdHVzIiwiZGlmIiwicHJvY2VzcyIsImJ1YmJsZV9wYXJhbSIsInBhcnRpY2xlc19wYXJhbSIsInBfb2JqX2J1YmJsZSIsInBfb2JqIiwiaWQiLCJidWJibGVfZHVyYXRpb25fZW5kIiwidGltZV9zcGVudCIsInZhbHVlX3RtcCIsImJ1YmJsZV9jbGlja2luZyIsImNsaWNrX3Bvc194IiwiY2xpY2tfcG9zX3kiLCJEYXRlIiwiZ2V0VGltZSIsImNsaWNrX3RpbWUiLCJub3JtVmVjIiwicmVwdWxzZVJhZGl1cyIsInZlbG9jaXR5IiwicmVwdWxzZUZhY3RvciIsImNsYW1wIiwicG93IiwicmVwdWxzZV9maW5pc2giLCJyZXB1bHNlX2NvdW50IiwicmVwdWxzZV9jbGlja2luZyIsImYiLCJhdGFuMiIsImZvcmNlIiwiY29zIiwic2luIiwiZCIsImV2ZW50c0xpc3RlbmVycyIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9mZnNldFgiLCJvZmZzZXRZIiwic2V0VGltZW91dCIsImFyZWEiLCJuYl9wYXJ0aWNsZXMiLCJtaXNzaW5nX3BhcnRpY2xlcyIsImFicyIsInN2Z1htbCIsInJnYkhleCIsImNvbG9yZWRTdmdYbWwiLCJyZXBsYWNlIiwibSIsInN2ZyIsIkJsb2IiLCJET01VUkwiLCJVUkwiLCJ3ZWJraXRVUkwiLCJ1cmwiLCJjcmVhdGVPYmplY3RVUkwiLCJJbWFnZSIsInJldm9rZU9iamVjdFVSTCIsImRlc3Ryb3lwSlMiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInBKU0RvbSIsImMiLCJzdGFydFgiLCJzdGFydFkiLCJzaWRlTGVuZ3RoIiwic2lkZUNvdW50TnVtZXJhdG9yIiwic2lkZUNvdW50RGVub21pbmF0b3IiLCJzaWRlQ291bnQiLCJkZWNpbWFsU2lkZXMiLCJpbnRlcmlvckFuZ2xlRGVncmVlcyIsImludGVyaW9yQW5nbGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVzdG9yZSIsImV4cG9ydEltZyIsIm9wZW4iLCJ0b0RhdGFVUkwiLCJsb2FkSW1nIiwiaW1nX2Vycm9yIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJkYXRhIiwicmVhZHlTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJyZXNwb25zZSIsImNoZWNrQmVmb3JlRHJhdyIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIiwicmVxdWVzdEFuaW1GcmFtZSIsImNoZWNrIiwic3Vic3RyIiwiZGVlcEV4dGVuZEZ1bmN0aW9uIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJwcm9wZXJ0eSIsImNvbnN0cnVjdG9yIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwib1JlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJ3ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJoZXgiLCJzaG9ydGhhbmRSZWdleCIsInJlc3VsdCIsImV4ZWMiLCJwYXJzZUludCIsIm1pbiIsIm1heCIsImluZGV4T2YiLCJwYXJ0aWNsZXNKUyIsInBKU190YWciLCJnZXRFbGVtZW50QnlJZCIsInBKU19jYW52YXNfY2xhc3MiLCJleGlzdF9jYW52YXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsImxvYWQiLCJwYXRoX2NvbmZpZ19qc29uIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7Ozs7Ozs7O0FBU0EsSUFBSUEsTUFBTSxhQUFTQyxNQUFULEVBQWlCQyxNQUFqQixFQUF3Qjs7QUFFaEMsTUFBSUMsWUFBWUMsU0FBU0MsYUFBVCxDQUF1QixNQUFJSixNQUFKLEdBQVcsNEJBQWxDLENBQWhCOztBQUVBO0FBQ0EsT0FBS0QsR0FBTCxHQUFXO0FBQ1RNLFlBQVE7QUFDTkMsVUFBSUosU0FERTtBQUVOSyxTQUFHTCxVQUFVTSxXQUZQO0FBR05DLFNBQUdQLFVBQVVRO0FBSFAsS0FEQztBQU1UQyxlQUFXO0FBQ1RDLGNBQVE7QUFDTkMsZUFBTyxHQUREO0FBRU5DLGlCQUFTO0FBQ1BDLGtCQUFRLElBREQ7QUFFUEMsc0JBQVk7QUFGTDtBQUZILE9BREM7QUFRVEMsYUFBTztBQUNMSixlQUFPO0FBREYsT0FSRTtBQVdUSyxhQUFPO0FBQ0xDLGNBQU0sUUFERDtBQUVMQyxnQkFBUTtBQUNOQyxpQkFBTyxDQUREO0FBRU5KLGlCQUFPO0FBRkQsU0FGSDtBQU1MSyxpQkFBUztBQUNQQyxvQkFBVTtBQURILFNBTko7QUFTTEMsZUFBTztBQUNMQyxlQUFLLEVBREE7QUFFTEosaUJBQU8sR0FGRjtBQUdMSyxrQkFBUTtBQUhIO0FBVEYsT0FYRTtBQTBCVEMsZUFBUztBQUNQZCxlQUFPLENBREE7QUFFUGUsZ0JBQVEsS0FGRDtBQUdQQyxjQUFNO0FBQ0pkLGtCQUFRLEtBREo7QUFFSmUsaUJBQU8sQ0FGSDtBQUdKQyx1QkFBYSxDQUhUO0FBSUpDLGdCQUFNO0FBSkY7QUFIQyxPQTFCQTtBQW9DVEMsWUFBTTtBQUNKcEIsZUFBTyxFQURIO0FBRUplLGdCQUFRLEtBRko7QUFHSkMsY0FBTTtBQUNKZCxrQkFBUSxLQURKO0FBRUplLGlCQUFPLEVBRkg7QUFHSkksb0JBQVUsQ0FITjtBQUlKRixnQkFBTTtBQUpGO0FBSEYsT0FwQ0c7QUE4Q1RHLG1CQUFhO0FBQ1hwQixnQkFBUSxJQURHO0FBRVhxQixrQkFBVSxHQUZDO0FBR1huQixlQUFPLE1BSEk7QUFJWFUsaUJBQVMsQ0FKRTtBQUtYTixlQUFPO0FBTEksT0E5Q0o7QUFxRFRnQixZQUFNO0FBQ0p0QixnQkFBUSxJQURKO0FBRUplLGVBQU8sQ0FGSDtBQUdKUSxtQkFBVyxNQUhQO0FBSUpWLGdCQUFRLEtBSko7QUFLSlcsa0JBQVUsS0FMTjtBQU1KQyxrQkFBVSxLQU5OO0FBT0pDLGdCQUFRLEtBUEo7QUFRSkMsaUJBQVM7QUFDUDNCLGtCQUFRLEtBREQ7QUFFUDRCLG1CQUFTLElBRkY7QUFHUEMsbUJBQVM7QUFIRjtBQVJMLE9BckRHO0FBbUVUQyxhQUFPO0FBbkVFLEtBTkY7QUEyRVRDLG1CQUFlO0FBQ2JDLGlCQUFXLFFBREU7QUFFYkMsY0FBUTtBQUNOQyxpQkFBUztBQUNQbEMsa0JBQVEsSUFERDtBQUVQbUMsZ0JBQU07QUFGQyxTQURIO0FBS05DLGlCQUFTO0FBQ1BwQyxrQkFBUSxJQUREO0FBRVBtQyxnQkFBTTtBQUZDLFNBTEg7QUFTTkUsZ0JBQVE7QUFURixPQUZLO0FBYWJDLGFBQU87QUFDTEMsY0FBSztBQUNIbEIsb0JBQVUsR0FEUDtBQUVIRCx1QkFBWTtBQUNWUixxQkFBUztBQURDO0FBRlQsU0FEQTtBQU9MNEIsZ0JBQU87QUFDTG5CLG9CQUFVLEdBREw7QUFFTEgsZ0JBQU0sRUFGRDtBQUdMdUIsb0JBQVU7QUFITCxTQVBGO0FBWUxDLGlCQUFRO0FBQ05yQixvQkFBVSxHQURKO0FBRU5vQixvQkFBVTtBQUZKLFNBWkg7QUFnQkxFLGNBQUs7QUFDSEMsd0JBQWM7QUFEWCxTQWhCQTtBQW1CTEMsZ0JBQU87QUFDTEQsd0JBQWM7QUFEVDtBQW5CRixPQWJNO0FBb0NiRSxhQUFNO0FBcENPLEtBM0VOO0FBaUhUQyxtQkFBZSxLQWpITjtBQWtIVEMsUUFBSTtBQUNGQyxnQkFBVSxFQURSO0FBRUZYLGFBQU8sRUFGTDtBQUdGWSxlQUFRO0FBSE4sS0FsSEs7QUF1SFRDLFNBQUs7QUF2SEksR0FBWDs7QUEwSEEsTUFBSW5FLE1BQU0sS0FBS0EsR0FBZjs7QUFFQTtBQUNBLE1BQUdFLE1BQUgsRUFBVTtBQUNSa0UsV0FBT0MsVUFBUCxDQUFrQnJFLEdBQWxCLEVBQXVCRSxNQUF2QjtBQUNEOztBQUVERixNQUFJbUUsR0FBSixDQUFRRyxHQUFSLEdBQWM7QUFDWkMsZ0JBQVl2RSxJQUFJWSxTQUFKLENBQWNzQixJQUFkLENBQW1CcEIsS0FEbkI7QUFFWjBELHFCQUFpQnhFLElBQUlZLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJKLElBQW5CLENBQXdCQyxLQUY3QjtBQUdaMEMsZ0JBQVl6RSxJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CUCxLQUhuQjtBQUlaMkMsMEJBQXNCMUUsSUFBSVksU0FBSixDQUFjd0IsV0FBZCxDQUEwQkMsUUFKcEM7QUFLWnNDLHVCQUFtQjNFLElBQUlZLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJkLEtBTGpDO0FBTVpzRCx3QkFBb0I1RSxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JDLElBQXhCLENBQTZCbEIsUUFOckM7QUFPWndDLDBCQUFzQjdFLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0JuQixRQVB6QztBQVFaeUMsc0JBQWtCOUUsSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQnRCLElBUnJDO0FBU1o2QywyQkFBdUIvRSxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JJLE9BQXhCLENBQWdDckI7QUFUM0MsR0FBZDs7QUFhQXJDLE1BQUlnRSxFQUFKLENBQU9nQixVQUFQLEdBQW9CLFlBQVU7O0FBRTVCLFFBQUdoRixJQUFJK0QsYUFBSixJQUFxQmtCLE9BQU9DLGdCQUFQLEdBQTBCLENBQWxELEVBQW9EO0FBQ2xEbEYsVUFBSU0sTUFBSixDQUFXNkUsT0FBWCxHQUFxQkYsT0FBT0MsZ0JBQTVCO0FBQ0FsRixVQUFJbUUsR0FBSixDQUFRaUIsTUFBUixHQUFpQixJQUFqQjtBQUNELEtBSEQsTUFJSTtBQUNGcEYsVUFBSU0sTUFBSixDQUFXNkUsT0FBWCxHQUFxQixDQUFyQjtBQUNBbkYsVUFBSW1FLEdBQUosQ0FBUWlCLE1BQVIsR0FBaUIsS0FBakI7QUFDRDs7QUFFRHBGLFFBQUlNLE1BQUosQ0FBV0UsQ0FBWCxHQUFlUixJQUFJTSxNQUFKLENBQVdDLEVBQVgsQ0FBY0UsV0FBZCxHQUE0QlQsSUFBSU0sTUFBSixDQUFXNkUsT0FBdEQ7QUFDQW5GLFFBQUlNLE1BQUosQ0FBV0ksQ0FBWCxHQUFlVixJQUFJTSxNQUFKLENBQVdDLEVBQVgsQ0FBY0ksWUFBZCxHQUE2QlgsSUFBSU0sTUFBSixDQUFXNkUsT0FBdkQ7O0FBRUFuRixRQUFJWSxTQUFKLENBQWNzQixJQUFkLENBQW1CcEIsS0FBbkIsR0FBMkJkLElBQUltRSxHQUFKLENBQVFHLEdBQVIsQ0FBWUMsVUFBWixHQUF5QnZFLElBQUlNLE1BQUosQ0FBVzZFLE9BQS9EO0FBQ0FuRixRQUFJWSxTQUFKLENBQWNzQixJQUFkLENBQW1CSixJQUFuQixDQUF3QkMsS0FBeEIsR0FBZ0MvQixJQUFJbUUsR0FBSixDQUFRRyxHQUFSLENBQVlFLGVBQVosR0FBOEJ4RSxJQUFJTSxNQUFKLENBQVc2RSxPQUF6RTtBQUNBbkYsUUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQlAsS0FBbkIsR0FBMkIvQixJQUFJbUUsR0FBSixDQUFRRyxHQUFSLENBQVlHLFVBQVosR0FBeUJ6RSxJQUFJTSxNQUFKLENBQVc2RSxPQUEvRDtBQUNBbkYsUUFBSVksU0FBSixDQUFjd0IsV0FBZCxDQUEwQkMsUUFBMUIsR0FBcUNyQyxJQUFJbUUsR0FBSixDQUFRRyxHQUFSLENBQVlJLG9CQUFaLEdBQW1DMUUsSUFBSU0sTUFBSixDQUFXNkUsT0FBbkY7QUFDQW5GLFFBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkMsSUFBeEIsQ0FBNkJsQixRQUE3QixHQUF3Q3JDLElBQUltRSxHQUFKLENBQVFHLEdBQVIsQ0FBWU0sa0JBQVosR0FBaUM1RSxJQUFJTSxNQUFKLENBQVc2RSxPQUFwRjtBQUNBbkYsUUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQm5CLFFBQS9CLEdBQTBDckMsSUFBSW1FLEdBQUosQ0FBUUcsR0FBUixDQUFZTyxvQkFBWixHQUFtQzdFLElBQUlNLE1BQUosQ0FBVzZFLE9BQXhGO0FBQ0FuRixRQUFJWSxTQUFKLENBQWN3QixXQUFkLENBQTBCZCxLQUExQixHQUFrQ3RCLElBQUltRSxHQUFKLENBQVFHLEdBQVIsQ0FBWUssaUJBQVosR0FBZ0MzRSxJQUFJTSxNQUFKLENBQVc2RSxPQUE3RTtBQUNBbkYsUUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQnRCLElBQS9CLEdBQXNDbEMsSUFBSW1FLEdBQUosQ0FBUUcsR0FBUixDQUFZUSxnQkFBWixHQUErQjlFLElBQUlNLE1BQUosQ0FBVzZFLE9BQWhGO0FBQ0FuRixRQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JJLE9BQXhCLENBQWdDckIsUUFBaEMsR0FBMkNyQyxJQUFJbUUsR0FBSixDQUFRRyxHQUFSLENBQVlTLHFCQUFaLEdBQW9DL0UsSUFBSU0sTUFBSixDQUFXNkUsT0FBMUY7QUFFRCxHQXhCRDs7QUE0QkE7O0FBRUFuRixNQUFJZ0UsRUFBSixDQUFPcUIsVUFBUCxHQUFvQixZQUFVO0FBQzVCckYsUUFBSU0sTUFBSixDQUFXZ0YsR0FBWCxHQUFpQnRGLElBQUlNLE1BQUosQ0FBV0MsRUFBWCxDQUFjZ0YsVUFBZCxDQUF5QixJQUF6QixDQUFqQjtBQUNELEdBRkQ7O0FBSUF2RixNQUFJZ0UsRUFBSixDQUFPd0IsVUFBUCxHQUFvQixZQUFVOztBQUU1QnhGLFFBQUlNLE1BQUosQ0FBV0MsRUFBWCxDQUFjZSxLQUFkLEdBQXNCdEIsSUFBSU0sTUFBSixDQUFXRSxDQUFqQztBQUNBUixRQUFJTSxNQUFKLENBQVdDLEVBQVgsQ0FBY29CLE1BQWQsR0FBdUIzQixJQUFJTSxNQUFKLENBQVdJLENBQWxDOztBQUVBLFFBQUdWLE9BQU9BLElBQUkrQyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkksTUFBbkMsRUFBMEM7O0FBRXhDNEIsYUFBT1EsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVTs7QUFFeEN6RixZQUFJTSxNQUFKLENBQVdFLENBQVgsR0FBZVIsSUFBSU0sTUFBSixDQUFXQyxFQUFYLENBQWNFLFdBQTdCO0FBQ0FULFlBQUlNLE1BQUosQ0FBV0ksQ0FBWCxHQUFlVixJQUFJTSxNQUFKLENBQVdDLEVBQVgsQ0FBY0ksWUFBN0I7O0FBRUE7QUFDQSxZQUFHWCxJQUFJbUUsR0FBSixDQUFRaUIsTUFBWCxFQUFrQjtBQUNoQnBGLGNBQUlNLE1BQUosQ0FBV0UsQ0FBWCxJQUFnQlIsSUFBSU0sTUFBSixDQUFXNkUsT0FBM0I7QUFDQW5GLGNBQUlNLE1BQUosQ0FBV0ksQ0FBWCxJQUFnQlYsSUFBSU0sTUFBSixDQUFXNkUsT0FBM0I7QUFDRDs7QUFFRG5GLFlBQUlNLE1BQUosQ0FBV0MsRUFBWCxDQUFjZSxLQUFkLEdBQXNCdEIsSUFBSU0sTUFBSixDQUFXRSxDQUFqQztBQUNBUixZQUFJTSxNQUFKLENBQVdDLEVBQVgsQ0FBY29CLE1BQWQsR0FBdUIzQixJQUFJTSxNQUFKLENBQVdJLENBQWxDOztBQUVBO0FBQ0EsWUFBRyxDQUFDVixJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CdEIsTUFBdkIsRUFBOEI7QUFDNUJoQixjQUFJZ0UsRUFBSixDQUFPMEIsY0FBUDtBQUNBMUYsY0FBSWdFLEVBQUosQ0FBTzJCLGVBQVA7QUFDQTNGLGNBQUlnRSxFQUFKLENBQU80QixhQUFQO0FBQ0E1RixjQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWUyQixvQkFBZjtBQUNEOztBQUVIO0FBQ0E3RixZQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWUyQixvQkFBZjtBQUVELE9BekJEO0FBMkJEO0FBRUYsR0FwQ0Q7O0FBdUNBN0YsTUFBSWdFLEVBQUosQ0FBTzhCLFdBQVAsR0FBcUIsWUFBVTtBQUM3QjlGLFFBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZVMsUUFBZixDQUF3QixDQUF4QixFQUEyQixDQUEzQixFQUE4Qi9GLElBQUlNLE1BQUosQ0FBV0UsQ0FBekMsRUFBNENSLElBQUlNLE1BQUosQ0FBV0ksQ0FBdkQ7QUFDRCxHQUZEOztBQUlBVixNQUFJZ0UsRUFBSixDQUFPZ0MsV0FBUCxHQUFxQixZQUFVO0FBQzdCaEcsUUFBSU0sTUFBSixDQUFXZ0YsR0FBWCxDQUFlVyxTQUFmLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCakcsSUFBSU0sTUFBSixDQUFXRSxDQUExQyxFQUE2Q1IsSUFBSU0sTUFBSixDQUFXSSxDQUF4RDtBQUNELEdBRkQ7O0FBS0E7O0FBRUFWLE1BQUlnRSxFQUFKLENBQU9rQyxRQUFQLEdBQWtCLFVBQVNoRixLQUFULEVBQWdCVSxPQUFoQixFQUF5QnVFLFFBQXpCLEVBQWtDOztBQUVsRDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxDQUFDcEcsSUFBSVksU0FBSixDQUFjc0IsSUFBZCxDQUFtQkwsTUFBbkIsR0FBNEJ3RSxLQUFLeEUsTUFBTCxFQUE1QixHQUE0QyxDQUE3QyxJQUFrRDdCLElBQUlZLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJwQixLQUFuRjtBQUNBLFFBQUdkLElBQUlZLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJKLElBQW5CLENBQXdCZCxNQUEzQixFQUFrQztBQUNoQyxXQUFLc0YsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFdBQUtDLEVBQUwsR0FBVXZHLElBQUlZLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJKLElBQW5CLENBQXdCQyxLQUF4QixHQUFnQyxHQUExQztBQUNBLFVBQUcsQ0FBQy9CLElBQUlZLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJKLElBQW5CLENBQXdCRyxJQUE1QixFQUFpQztBQUMvQixhQUFLc0UsRUFBTCxHQUFVLEtBQUtBLEVBQUwsR0FBVUYsS0FBS3hFLE1BQUwsRUFBcEI7QUFDRDtBQUNGOztBQUVEO0FBQ0EsU0FBSzJFLENBQUwsR0FBU0wsV0FBV0EsU0FBU0ssQ0FBcEIsR0FBd0JILEtBQUt4RSxNQUFMLEtBQWdCN0IsSUFBSU0sTUFBSixDQUFXRSxDQUE1RDtBQUNBLFNBQUtpRyxDQUFMLEdBQVNOLFdBQVdBLFNBQVNNLENBQXBCLEdBQXdCSixLQUFLeEUsTUFBTCxLQUFnQjdCLElBQUlNLE1BQUosQ0FBV0ksQ0FBNUQ7O0FBRUE7QUFDQSxRQUFHLEtBQUs4RixDQUFMLEdBQVN4RyxJQUFJTSxNQUFKLENBQVdFLENBQVgsR0FBZSxLQUFLNEYsTUFBTCxHQUFZLENBQXZDLEVBQTBDLEtBQUtJLENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVMsS0FBS0osTUFBdkIsQ0FBMUMsS0FDSyxJQUFHLEtBQUtJLENBQUwsR0FBUyxLQUFLSixNQUFMLEdBQVksQ0FBeEIsRUFBMkIsS0FBS0ksQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBUyxLQUFLSixNQUF2QjtBQUNoQyxRQUFHLEtBQUtLLENBQUwsR0FBU3pHLElBQUlNLE1BQUosQ0FBV0ksQ0FBWCxHQUFlLEtBQUswRixNQUFMLEdBQVksQ0FBdkMsRUFBMEMsS0FBS0ssQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBUyxLQUFLTCxNQUF2QixDQUExQyxLQUNLLElBQUcsS0FBS0ssQ0FBTCxHQUFTLEtBQUtMLE1BQUwsR0FBWSxDQUF4QixFQUEyQixLQUFLSyxDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTLEtBQUtMLE1BQXZCOztBQUVoQztBQUNBLFFBQUdwRyxJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CSSxNQUF0QixFQUE2QjtBQUMzQjFDLFVBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZXdDLFlBQWYsQ0FBNEIsSUFBNUIsRUFBa0NQLFFBQWxDO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLakYsS0FBTCxHQUFhLEVBQWI7QUFDQSxRQUFHLFFBQU9BLE1BQU1KLEtBQWIsS0FBdUIsUUFBMUIsRUFBbUM7O0FBRWpDLFVBQUdJLE1BQU1KLEtBQU4sWUFBdUI2RixLQUExQixFQUFnQztBQUM5QixZQUFJQyxpQkFBaUIxRixNQUFNSixLQUFOLENBQVl1RixLQUFLUSxLQUFMLENBQVdSLEtBQUt4RSxNQUFMLEtBQWdCN0IsSUFBSVksU0FBSixDQUFjTSxLQUFkLENBQW9CSixLQUFwQixDQUEwQmdHLE1BQXJELENBQVosQ0FBckI7QUFDQSxhQUFLNUYsS0FBTCxDQUFXNkYsR0FBWCxHQUFpQkMsU0FBU0osY0FBVCxDQUFqQjtBQUNELE9BSEQsTUFHSztBQUNILFlBQUcxRixNQUFNSixLQUFOLENBQVltRyxDQUFaLElBQWlCQyxTQUFqQixJQUE4QmhHLE1BQU1KLEtBQU4sQ0FBWXFHLENBQVosSUFBaUJELFNBQS9DLElBQTREaEcsTUFBTUosS0FBTixDQUFZc0csQ0FBWixJQUFpQkYsU0FBaEYsRUFBMEY7QUFDeEYsZUFBS2hHLEtBQUwsQ0FBVzZGLEdBQVgsR0FBaUI7QUFDZkUsZUFBRy9GLE1BQU1KLEtBQU4sQ0FBWW1HLENBREE7QUFFZkUsZUFBR2pHLE1BQU1KLEtBQU4sQ0FBWXFHLENBRkE7QUFHZkMsZUFBR2xHLE1BQU1KLEtBQU4sQ0FBWXNHO0FBSEEsV0FBakI7QUFLRDtBQUNELFlBQUdsRyxNQUFNSixLQUFOLENBQVlKLENBQVosSUFBaUJ3RyxTQUFqQixJQUE4QmhHLE1BQU1KLEtBQU4sQ0FBWXVHLENBQVosSUFBaUJILFNBQS9DLElBQTREaEcsTUFBTUosS0FBTixDQUFZd0csQ0FBWixJQUFpQkosU0FBaEYsRUFBMEY7QUFDeEYsZUFBS2hHLEtBQUwsQ0FBV3FHLEdBQVgsR0FBaUI7QUFDZjdHLGVBQUdRLE1BQU1KLEtBQU4sQ0FBWUosQ0FEQTtBQUVmMkcsZUFBR25HLE1BQU1KLEtBQU4sQ0FBWXVHLENBRkE7QUFHZkMsZUFBR3BHLE1BQU1KLEtBQU4sQ0FBWXdHO0FBSEEsV0FBakI7QUFLRDtBQUNGO0FBRUYsS0F0QkQsTUF1QkssSUFBR3BHLE1BQU1KLEtBQU4sSUFBZSxRQUFsQixFQUEyQjtBQUM5QixXQUFLSSxLQUFMLENBQVc2RixHQUFYLEdBQWlCO0FBQ2ZFLFdBQUlaLEtBQUtRLEtBQUwsQ0FBV1IsS0FBS3hFLE1BQUwsTUFBaUIsTUFBTSxDQUFOLEdBQVUsQ0FBM0IsQ0FBWCxJQUE0QyxDQURqQztBQUVmc0YsV0FBSWQsS0FBS1EsS0FBTCxDQUFXUixLQUFLeEUsTUFBTCxNQUFpQixNQUFNLENBQU4sR0FBVSxDQUEzQixDQUFYLElBQTRDLENBRmpDO0FBR2Z1RixXQUFJZixLQUFLUSxLQUFMLENBQVdSLEtBQUt4RSxNQUFMLE1BQWlCLE1BQU0sQ0FBTixHQUFVLENBQTNCLENBQVgsSUFBNEM7QUFIakMsT0FBakI7QUFLRCxLQU5JLE1BT0EsSUFBRyxPQUFPWCxNQUFNSixLQUFiLElBQXVCLFFBQTFCLEVBQW1DO0FBQ3RDLFdBQUtJLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtBLEtBQUwsQ0FBVzZGLEdBQVgsR0FBaUJDLFNBQVMsS0FBSzlGLEtBQUwsQ0FBV0osS0FBcEIsQ0FBakI7QUFDRDs7QUFFRDtBQUNBLFNBQUtjLE9BQUwsR0FBZSxDQUFDNUIsSUFBSVksU0FBSixDQUFjZ0IsT0FBZCxDQUFzQkMsTUFBdEIsR0FBK0J3RSxLQUFLeEUsTUFBTCxFQUEvQixHQUErQyxDQUFoRCxJQUFxRDdCLElBQUlZLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JkLEtBQTFGO0FBQ0EsUUFBR2QsSUFBSVksU0FBSixDQUFjZ0IsT0FBZCxDQUFzQkUsSUFBdEIsQ0FBMkJkLE1BQTlCLEVBQXFDO0FBQ25DLFdBQUt3RyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0EsV0FBS0MsRUFBTCxHQUFVekgsSUFBSVksU0FBSixDQUFjZ0IsT0FBZCxDQUFzQkUsSUFBdEIsQ0FBMkJDLEtBQTNCLEdBQW1DLEdBQTdDO0FBQ0EsVUFBRyxDQUFDL0IsSUFBSVksU0FBSixDQUFjZ0IsT0FBZCxDQUFzQkUsSUFBdEIsQ0FBMkJHLElBQS9CLEVBQW9DO0FBQ2xDLGFBQUt3RixFQUFMLEdBQVUsS0FBS0EsRUFBTCxHQUFVcEIsS0FBS3hFLE1BQUwsRUFBcEI7QUFDRDtBQUNGOztBQUVEO0FBQ0EsUUFBSTZGLFVBQVUsRUFBZDtBQUNBLFlBQU8xSCxJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CQyxTQUExQjtBQUNFLFdBQUssS0FBTDtBQUNFbUYsa0JBQVUsRUFBRWxCLEdBQUUsQ0FBSixFQUFPQyxHQUFFLENBQUMsQ0FBVixFQUFWO0FBQ0Y7QUFDQSxXQUFLLFdBQUw7QUFDRWlCLGtCQUFVLEVBQUVsQixHQUFFLEdBQUosRUFBU0MsR0FBRSxDQUFDLEdBQVosRUFBVjtBQUNGO0FBQ0EsV0FBSyxPQUFMO0FBQ0VpQixrQkFBVSxFQUFFbEIsR0FBRSxDQUFKLEVBQU9DLEdBQUUsQ0FBQyxDQUFWLEVBQVY7QUFDRjtBQUNBLFdBQUssY0FBTDtBQUNFaUIsa0JBQVUsRUFBRWxCLEdBQUUsR0FBSixFQUFTQyxHQUFFLEdBQVgsRUFBVjtBQUNGO0FBQ0EsV0FBSyxRQUFMO0FBQ0VpQixrQkFBVSxFQUFFbEIsR0FBRSxDQUFKLEVBQU9DLEdBQUUsQ0FBVCxFQUFWO0FBQ0Y7QUFDQSxXQUFLLGFBQUw7QUFDRWlCLGtCQUFVLEVBQUVsQixHQUFFLENBQUMsR0FBTCxFQUFVQyxHQUFFLENBQVosRUFBVjtBQUNGO0FBQ0EsV0FBSyxNQUFMO0FBQ0VpQixrQkFBVSxFQUFFbEIsR0FBRSxDQUFDLENBQUwsRUFBUUMsR0FBRSxDQUFWLEVBQVY7QUFDRjtBQUNBLFdBQUssVUFBTDtBQUNFaUIsa0JBQVUsRUFBRWxCLEdBQUUsQ0FBQyxHQUFMLEVBQVVDLEdBQUUsQ0FBQyxHQUFiLEVBQVY7QUFDRjtBQUNBO0FBQ0VpQixrQkFBVSxFQUFFbEIsR0FBRSxDQUFKLEVBQU9DLEdBQUUsQ0FBVCxFQUFWO0FBQ0Y7QUEzQkY7O0FBOEJBLFFBQUd6RyxJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CRSxRQUF0QixFQUErQjtBQUM3QixXQUFLbUYsRUFBTCxHQUFVRCxRQUFRbEIsQ0FBbEI7QUFDQSxXQUFLb0IsRUFBTCxHQUFVRixRQUFRakIsQ0FBbEI7QUFDQSxVQUFHekcsSUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQlQsTUFBdEIsRUFBNkI7QUFDM0IsYUFBSzhGLEVBQUwsR0FBVSxLQUFLQSxFQUFMLEdBQVd0QixLQUFLeEUsTUFBTCxFQUFyQjtBQUNBLGFBQUsrRixFQUFMLEdBQVUsS0FBS0EsRUFBTCxHQUFXdkIsS0FBS3hFLE1BQUwsRUFBckI7QUFDRDtBQUNGLEtBUEQsTUFPSztBQUNILFdBQUs4RixFQUFMLEdBQVVELFFBQVFsQixDQUFSLEdBQVlILEtBQUt4RSxNQUFMLEVBQVosR0FBMEIsR0FBcEM7QUFDQSxXQUFLK0YsRUFBTCxHQUFVRixRQUFRakIsQ0FBUixHQUFZSixLQUFLeEUsTUFBTCxFQUFaLEdBQTBCLEdBQXBDO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLFNBQUtnRyxJQUFMLEdBQVksS0FBS0YsRUFBakI7QUFDQSxTQUFLRyxJQUFMLEdBQVksS0FBS0YsRUFBakI7O0FBSUE7O0FBRUEsUUFBSUcsYUFBYS9ILElBQUlZLFNBQUosQ0FBY08sS0FBZCxDQUFvQkMsSUFBckM7QUFDQSxRQUFHLFFBQU8yRyxVQUFQLHlDQUFPQSxVQUFQLE1BQXNCLFFBQXpCLEVBQWtDO0FBQ2hDLFVBQUdBLHNCQUFzQnBCLEtBQXpCLEVBQStCO0FBQzdCLFlBQUlxQixpQkFBaUJELFdBQVcxQixLQUFLUSxLQUFMLENBQVdSLEtBQUt4RSxNQUFMLEtBQWdCa0csV0FBV2pCLE1BQXRDLENBQVgsQ0FBckI7QUFDQSxhQUFLM0YsS0FBTCxHQUFhNkcsY0FBYjtBQUNEO0FBQ0YsS0FMRCxNQUtLO0FBQ0gsV0FBSzdHLEtBQUwsR0FBYTRHLFVBQWI7QUFDRDs7QUFFRCxRQUFHLEtBQUs1RyxLQUFMLElBQWMsT0FBakIsRUFBeUI7QUFDdkIsVUFBSThHLEtBQUtqSSxJQUFJWSxTQUFKLENBQWNPLEtBQXZCO0FBQ0EsV0FBSytHLEdBQUwsR0FBVztBQUNUeEcsYUFBS3VHLEdBQUd4RyxLQUFILENBQVNDLEdBREw7QUFFVHlHLGVBQU9GLEdBQUd4RyxLQUFILENBQVNILEtBQVQsR0FBaUIyRyxHQUFHeEcsS0FBSCxDQUFTRTtBQUZ4QixPQUFYO0FBSUEsVUFBRyxDQUFDLEtBQUt1RyxHQUFMLENBQVNDLEtBQWIsRUFBb0IsS0FBS0QsR0FBTCxDQUFTQyxLQUFULEdBQWlCLENBQWpCO0FBQ3BCLFVBQUduSSxJQUFJbUUsR0FBSixDQUFRaUUsUUFBUixJQUFvQixLQUFwQixJQUE2QnBJLElBQUltRSxHQUFKLENBQVFrRSxVQUFSLElBQXNCbkIsU0FBdEQsRUFBZ0U7QUFDOURsSCxZQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWVvRSxZQUFmLENBQTRCLElBQTVCO0FBQ0EsWUFBR3RJLElBQUltRSxHQUFKLENBQVFvRSxPQUFYLEVBQW1CO0FBQ2pCLGVBQUtMLEdBQUwsQ0FBU00sTUFBVCxHQUFrQixLQUFsQjtBQUNEO0FBQ0Y7QUFDRjtBQUlGLEdBNUpEOztBQStKQXhJLE1BQUlnRSxFQUFKLENBQU9rQyxRQUFQLENBQWdCdUMsU0FBaEIsQ0FBMEJDLElBQTFCLEdBQWlDLFlBQVc7O0FBRTFDLFFBQUlDLElBQUksSUFBUjs7QUFFQSxRQUFHQSxFQUFFQyxhQUFGLElBQW1CMUIsU0FBdEIsRUFBZ0M7QUFDOUIsVUFBSWQsU0FBU3VDLEVBQUVDLGFBQWY7QUFDRCxLQUZELE1BRUs7QUFDSCxVQUFJeEMsU0FBU3VDLEVBQUV2QyxNQUFmO0FBQ0Q7O0FBRUQsUUFBR3VDLEVBQUVFLGNBQUYsSUFBb0IzQixTQUF2QixFQUFpQztBQUMvQixVQUFJdEYsVUFBVStHLEVBQUVFLGNBQWhCO0FBQ0QsS0FGRCxNQUVLO0FBQ0gsVUFBSWpILFVBQVUrRyxFQUFFL0csT0FBaEI7QUFDRDs7QUFFRCxRQUFHK0csRUFBRXpILEtBQUYsQ0FBUTZGLEdBQVgsRUFBZTtBQUNiLFVBQUkrQixjQUFjLFVBQVFILEVBQUV6SCxLQUFGLENBQVE2RixHQUFSLENBQVlFLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCMEIsRUFBRXpILEtBQUYsQ0FBUTZGLEdBQVIsQ0FBWUksQ0FBdEMsR0FBd0MsR0FBeEMsR0FBNEN3QixFQUFFekgsS0FBRixDQUFRNkYsR0FBUixDQUFZSyxDQUF4RCxHQUEwRCxHQUExRCxHQUE4RHhGLE9BQTlELEdBQXNFLEdBQXhGO0FBQ0QsS0FGRCxNQUVLO0FBQ0gsVUFBSWtILGNBQWMsVUFBUUgsRUFBRXpILEtBQUYsQ0FBUXFHLEdBQVIsQ0FBWTdHLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCaUksRUFBRXpILEtBQUYsQ0FBUXFHLEdBQVIsQ0FBWUYsQ0FBdEMsR0FBd0MsSUFBeEMsR0FBNkNzQixFQUFFekgsS0FBRixDQUFRcUcsR0FBUixDQUFZRCxDQUF6RCxHQUEyRCxJQUEzRCxHQUFnRTFGLE9BQWhFLEdBQXdFLEdBQTFGO0FBQ0Q7O0FBRUQ1QixRQUFJTSxNQUFKLENBQVdnRixHQUFYLENBQWV5RCxTQUFmLEdBQTJCRCxXQUEzQjtBQUNBOUksUUFBSU0sTUFBSixDQUFXZ0YsR0FBWCxDQUFlMEQsU0FBZjs7QUFFQSxZQUFPTCxFQUFFeEgsS0FBVDs7QUFFRSxXQUFLLFFBQUw7QUFDRW5CLFlBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZTJELEdBQWYsQ0FBbUJOLEVBQUVuQyxDQUFyQixFQUF3Qm1DLEVBQUVsQyxDQUExQixFQUE2QkwsTUFBN0IsRUFBcUMsQ0FBckMsRUFBd0NDLEtBQUs2QyxFQUFMLEdBQVUsQ0FBbEQsRUFBcUQsS0FBckQ7QUFDRjs7QUFFQSxXQUFLLE1BQUw7QUFDRWxKLFlBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZTZELElBQWYsQ0FBb0JSLEVBQUVuQyxDQUFGLEdBQUlKLE1BQXhCLEVBQWdDdUMsRUFBRWxDLENBQUYsR0FBSUwsTUFBcEMsRUFBNENBLFNBQU8sQ0FBbkQsRUFBc0RBLFNBQU8sQ0FBN0Q7QUFDRjs7QUFFQSxXQUFLLFVBQUw7QUFDRXBHLFlBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZWtGLFNBQWYsQ0FBeUJwSixJQUFJTSxNQUFKLENBQVdnRixHQUFwQyxFQUF5Q3FELEVBQUVuQyxDQUFGLEdBQUlKLE1BQTdDLEVBQXFEdUMsRUFBRWxDLENBQUYsR0FBSUwsU0FBUyxJQUFsRSxFQUF3RUEsU0FBTyxDQUEvRSxFQUFrRixDQUFsRixFQUFxRixDQUFyRjtBQUNGOztBQUVBLFdBQUssU0FBTDtBQUNFcEcsWUFBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFla0YsU0FBZixDQUNFcEosSUFBSU0sTUFBSixDQUFXZ0YsR0FEYixFQUVFcUQsRUFBRW5DLENBQUYsR0FBTUosVUFBVXBHLElBQUlZLFNBQUosQ0FBY08sS0FBZCxDQUFvQkksT0FBcEIsQ0FBNEJDLFFBQTVCLEdBQXFDLEdBQS9DLENBRlIsRUFFNkQ7QUFDM0RtSCxVQUFFbEMsQ0FBRixHQUFNTCxVQUFVLE9BQUssR0FBZixDQUhSLEVBRzZCO0FBQzNCQSxpQkFBTyxJQUFQLElBQWVwRyxJQUFJWSxTQUFKLENBQWNPLEtBQWQsQ0FBb0JJLE9BQXBCLENBQTRCQyxRQUE1QixHQUFxQyxDQUFwRCxDQUpGLEVBSTBEO0FBQ3hEeEIsWUFBSVksU0FBSixDQUFjTyxLQUFkLENBQW9CSSxPQUFwQixDQUE0QkMsUUFMOUIsRUFLd0M7QUFDdEMsU0FORixDQU1JO0FBTko7QUFRRjs7QUFFQSxXQUFLLE1BQUw7QUFDRXhCLFlBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZWtGLFNBQWYsQ0FDRXBKLElBQUlNLE1BQUosQ0FBV2dGLEdBRGIsRUFFRXFELEVBQUVuQyxDQUFGLEdBQU1KLFNBQU8sQ0FBUCxJQUFZcEcsSUFBSVksU0FBSixDQUFjTyxLQUFkLENBQW9CSSxPQUFwQixDQUE0QkMsUUFBNUIsR0FBcUMsQ0FBakQsQ0FGUixFQUU2RDtBQUMzRG1ILFVBQUVsQyxDQUFGLEdBQU1MLFVBQVUsSUFBRSxJQUFGLEdBQU8sR0FBakIsQ0FIUixFQUcrQjtBQUM3QkEsaUJBQU8sQ0FBUCxHQUFTLElBQVQsSUFBaUJwRyxJQUFJWSxTQUFKLENBQWNPLEtBQWQsQ0FBb0JJLE9BQXBCLENBQTRCQyxRQUE1QixHQUFxQyxDQUF0RCxDQUpGLEVBSTREO0FBQzFEeEIsWUFBSVksU0FBSixDQUFjTyxLQUFkLENBQW9CSSxPQUFwQixDQUE0QkMsUUFMOUIsRUFLd0M7QUFDdEMsU0FORixDQU1JO0FBTko7QUFRRjs7QUFFQSxXQUFLLE9BQUw7QUFBQSxZQUVXa0gsSUFGWCxHQUVFLFNBQVNBLElBQVQsR0FBZTtBQUNiMUksY0FBSU0sTUFBSixDQUFXZ0YsR0FBWCxDQUFlK0QsU0FBZixDQUNFQyxPQURGLEVBRUVYLEVBQUVuQyxDQUFGLEdBQUlKLE1BRk4sRUFHRXVDLEVBQUVsQyxDQUFGLEdBQUlMLE1BSE4sRUFJRUEsU0FBTyxDQUpULEVBS0VBLFNBQU8sQ0FBUCxHQUFXdUMsRUFBRVQsR0FBRixDQUFNQyxLQUxuQjtBQU9ELFNBVkg7O0FBWUUsWUFBR25JLElBQUltRSxHQUFKLENBQVFpRSxRQUFSLElBQW9CLEtBQXZCLEVBQTZCO0FBQzNCLGNBQUlrQixVQUFVWCxFQUFFVCxHQUFGLENBQU01RCxHQUFwQjtBQUNELFNBRkQsTUFFSztBQUNILGNBQUlnRixVQUFVdEosSUFBSW1FLEdBQUosQ0FBUW1GLE9BQXRCO0FBQ0Q7O0FBRUQsWUFBR0EsT0FBSCxFQUFXO0FBQ1RaO0FBQ0Q7O0FBRUg7O0FBMURGOztBQThEQTFJLFFBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZWlFLFNBQWY7O0FBRUEsUUFBR3ZKLElBQUlZLFNBQUosQ0FBY08sS0FBZCxDQUFvQkUsTUFBcEIsQ0FBMkJDLEtBQTNCLEdBQW1DLENBQXRDLEVBQXdDO0FBQ3RDdEIsVUFBSU0sTUFBSixDQUFXZ0YsR0FBWCxDQUFla0UsV0FBZixHQUE2QnhKLElBQUlZLFNBQUosQ0FBY08sS0FBZCxDQUFvQkUsTUFBcEIsQ0FBMkJILEtBQXhEO0FBQ0FsQixVQUFJTSxNQUFKLENBQVdnRixHQUFYLENBQWVtRSxTQUFmLEdBQTJCekosSUFBSVksU0FBSixDQUFjTyxLQUFkLENBQW9CRSxNQUFwQixDQUEyQkMsS0FBdEQ7QUFDQXRCLFVBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZWpFLE1BQWY7QUFDRDs7QUFFRHJCLFFBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZW9FLElBQWY7QUFFRCxHQWpHRDs7QUFvR0ExSixNQUFJZ0UsRUFBSixDQUFPMkIsZUFBUCxHQUF5QixZQUFVO0FBQ2pDLFNBQUksSUFBSWdFLElBQUksQ0FBWixFQUFlQSxJQUFJM0osSUFBSVksU0FBSixDQUFjQyxNQUFkLENBQXFCQyxLQUF4QyxFQUErQzZJLEdBQS9DLEVBQW9EO0FBQ2xEM0osVUFBSVksU0FBSixDQUFja0MsS0FBZCxDQUFvQmEsSUFBcEIsQ0FBeUIsSUFBSTNELElBQUlnRSxFQUFKLENBQU9rQyxRQUFYLENBQW9CbEcsSUFBSVksU0FBSixDQUFjTSxLQUFsQyxFQUF5Q2xCLElBQUlZLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JkLEtBQS9ELENBQXpCO0FBQ0Q7QUFDRixHQUpEOztBQU1BZCxNQUFJZ0UsRUFBSixDQUFPNEYsZUFBUCxHQUF5QixZQUFVOztBQUVqQyxTQUFJLElBQUlELElBQUksQ0FBWixFQUFlQSxJQUFJM0osSUFBSVksU0FBSixDQUFja0MsS0FBZCxDQUFvQmdFLE1BQXZDLEVBQStDNkMsR0FBL0MsRUFBbUQ7O0FBRWpEO0FBQ0EsVUFBSWhCLElBQUkzSSxJQUFJWSxTQUFKLENBQWNrQyxLQUFkLENBQW9CNkcsQ0FBcEIsQ0FBUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQUczSixJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CdEIsTUFBdEIsRUFBNkI7QUFDM0IsWUFBSTZJLEtBQUs3SixJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CUCxLQUFuQixHQUF5QixDQUFsQztBQUNBNEcsVUFBRW5DLENBQUYsSUFBT21DLEVBQUVoQixFQUFGLEdBQU9rQyxFQUFkO0FBQ0FsQixVQUFFbEMsQ0FBRixJQUFPa0MsRUFBRWYsRUFBRixHQUFPaUMsRUFBZDtBQUNEOztBQUVEO0FBQ0EsVUFBRzdKLElBQUlZLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JFLElBQXRCLENBQTJCZCxNQUE5QixFQUFzQztBQUNwQyxZQUFHMkgsRUFBRW5CLGNBQUYsSUFBb0IsSUFBdkIsRUFBNkI7QUFDM0IsY0FBR21CLEVBQUUvRyxPQUFGLElBQWE1QixJQUFJWSxTQUFKLENBQWNnQixPQUFkLENBQXNCZCxLQUF0QyxFQUE2QzZILEVBQUVuQixjQUFGLEdBQW1CLEtBQW5CO0FBQzdDbUIsWUFBRS9HLE9BQUYsSUFBYStHLEVBQUVsQixFQUFmO0FBQ0QsU0FIRCxNQUdNO0FBQ0osY0FBR2tCLEVBQUUvRyxPQUFGLElBQWE1QixJQUFJWSxTQUFKLENBQWNnQixPQUFkLENBQXNCRSxJQUF0QixDQUEyQkUsV0FBM0MsRUFBd0QyRyxFQUFFbkIsY0FBRixHQUFtQixJQUFuQjtBQUN4RG1CLFlBQUUvRyxPQUFGLElBQWErRyxFQUFFbEIsRUFBZjtBQUNEO0FBQ0QsWUFBR2tCLEVBQUUvRyxPQUFGLEdBQVksQ0FBZixFQUFrQitHLEVBQUUvRyxPQUFGLEdBQVksQ0FBWjtBQUNuQjs7QUFFRDtBQUNBLFVBQUc1QixJQUFJWSxTQUFKLENBQWNzQixJQUFkLENBQW1CSixJQUFuQixDQUF3QmQsTUFBM0IsRUFBa0M7QUFDaEMsWUFBRzJILEVBQUVyQyxXQUFGLElBQWlCLElBQXBCLEVBQXlCO0FBQ3ZCLGNBQUdxQyxFQUFFdkMsTUFBRixJQUFZcEcsSUFBSVksU0FBSixDQUFjc0IsSUFBZCxDQUFtQnBCLEtBQWxDLEVBQXlDNkgsRUFBRXJDLFdBQUYsR0FBZ0IsS0FBaEI7QUFDekNxQyxZQUFFdkMsTUFBRixJQUFZdUMsRUFBRXBDLEVBQWQ7QUFDRCxTQUhELE1BR0s7QUFDSCxjQUFHb0MsRUFBRXZDLE1BQUYsSUFBWXBHLElBQUlZLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJKLElBQW5CLENBQXdCSyxRQUF2QyxFQUFpRHdHLEVBQUVyQyxXQUFGLEdBQWdCLElBQWhCO0FBQ2pEcUMsWUFBRXZDLE1BQUYsSUFBWXVDLEVBQUVwQyxFQUFkO0FBQ0Q7QUFDRCxZQUFHb0MsRUFBRXZDLE1BQUYsR0FBVyxDQUFkLEVBQWlCdUMsRUFBRXZDLE1BQUYsR0FBVyxDQUFYO0FBQ2xCOztBQUVEO0FBQ0EsVUFBR3BHLElBQUlZLFNBQUosQ0FBYzBCLElBQWQsQ0FBbUJHLFFBQW5CLElBQStCLFFBQWxDLEVBQTJDO0FBQ3pDLFlBQUlxSCxVQUFVO0FBQ1pDLGtCQUFRcEIsRUFBRXZDLE1BREU7QUFFWjRELG1CQUFVaEssSUFBSU0sTUFBSixDQUFXRSxDQUZUO0FBR1p5SixpQkFBT3RCLEVBQUV2QyxNQUhHO0FBSVo4RCxvQkFBVWxLLElBQUlNLE1BQUosQ0FBV0k7QUFKVCxTQUFkO0FBTUQsT0FQRCxNQU9LO0FBQ0gsWUFBSW9KLFVBQVU7QUFDWkMsa0JBQVEsQ0FBQ3BCLEVBQUV2QyxNQURDO0FBRVo0RCxtQkFBU2hLLElBQUlNLE1BQUosQ0FBV0UsQ0FBWCxHQUFlbUksRUFBRXZDLE1BRmQ7QUFHWjZELGlCQUFPLENBQUN0QixFQUFFdkMsTUFIRTtBQUlaOEQsb0JBQVVsSyxJQUFJTSxNQUFKLENBQVdJLENBQVgsR0FBZWlJLEVBQUV2QztBQUpmLFNBQWQ7QUFNRDs7QUFFRCxVQUFHdUMsRUFBRW5DLENBQUYsR0FBTW1DLEVBQUV2QyxNQUFSLEdBQWlCcEcsSUFBSU0sTUFBSixDQUFXRSxDQUEvQixFQUFpQztBQUMvQm1JLFVBQUVuQyxDQUFGLEdBQU1zRCxRQUFRQyxNQUFkO0FBQ0FwQixVQUFFbEMsQ0FBRixHQUFNSixLQUFLeEUsTUFBTCxLQUFnQjdCLElBQUlNLE1BQUosQ0FBV0ksQ0FBakM7QUFDRCxPQUhELE1BSUssSUFBR2lJLEVBQUVuQyxDQUFGLEdBQU1tQyxFQUFFdkMsTUFBUixHQUFpQixDQUFwQixFQUFzQjtBQUN6QnVDLFVBQUVuQyxDQUFGLEdBQU1zRCxRQUFRRSxPQUFkO0FBQ0FyQixVQUFFbEMsQ0FBRixHQUFNSixLQUFLeEUsTUFBTCxLQUFnQjdCLElBQUlNLE1BQUosQ0FBV0ksQ0FBakM7QUFDRDtBQUNELFVBQUdpSSxFQUFFbEMsQ0FBRixHQUFNa0MsRUFBRXZDLE1BQVIsR0FBaUJwRyxJQUFJTSxNQUFKLENBQVdJLENBQS9CLEVBQWlDO0FBQy9CaUksVUFBRWxDLENBQUYsR0FBTXFELFFBQVFHLEtBQWQ7QUFDQXRCLFVBQUVuQyxDQUFGLEdBQU1ILEtBQUt4RSxNQUFMLEtBQWdCN0IsSUFBSU0sTUFBSixDQUFXRSxDQUFqQztBQUNELE9BSEQsTUFJSyxJQUFHbUksRUFBRWxDLENBQUYsR0FBTWtDLEVBQUV2QyxNQUFSLEdBQWlCLENBQXBCLEVBQXNCO0FBQ3pCdUMsVUFBRWxDLENBQUYsR0FBTXFELFFBQVFJLFFBQWQ7QUFDQXZCLFVBQUVuQyxDQUFGLEdBQU1ILEtBQUt4RSxNQUFMLEtBQWdCN0IsSUFBSU0sTUFBSixDQUFXRSxDQUFqQztBQUNEOztBQUVEO0FBQ0EsY0FBT1IsSUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQkcsUUFBMUI7QUFDRSxhQUFLLFFBQUw7QUFDRSxjQUFJa0csRUFBRW5DLENBQUYsR0FBTW1DLEVBQUV2QyxNQUFSLEdBQWlCcEcsSUFBSU0sTUFBSixDQUFXRSxDQUFoQyxFQUFtQ21JLEVBQUVoQixFQUFGLEdBQU8sQ0FBQ2dCLEVBQUVoQixFQUFWLENBQW5DLEtBQ0ssSUFBSWdCLEVBQUVuQyxDQUFGLEdBQU1tQyxFQUFFdkMsTUFBUixHQUFpQixDQUFyQixFQUF3QnVDLEVBQUVoQixFQUFGLEdBQU8sQ0FBQ2dCLEVBQUVoQixFQUFWO0FBQzdCLGNBQUlnQixFQUFFbEMsQ0FBRixHQUFNa0MsRUFBRXZDLE1BQVIsR0FBaUJwRyxJQUFJTSxNQUFKLENBQVdJLENBQWhDLEVBQW1DaUksRUFBRWYsRUFBRixHQUFPLENBQUNlLEVBQUVmLEVBQVYsQ0FBbkMsS0FDSyxJQUFJZSxFQUFFbEMsQ0FBRixHQUFNa0MsRUFBRXZDLE1BQVIsR0FBaUIsQ0FBckIsRUFBd0J1QyxFQUFFZixFQUFGLEdBQU8sQ0FBQ2UsRUFBRWYsRUFBVjtBQUMvQjtBQU5GOztBQVNBO0FBQ0EsVUFBR3VDLFVBQVUsTUFBVixFQUFrQm5LLElBQUkrQyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDLElBQW5ELENBQUgsRUFBNEQ7QUFDMURuRCxZQUFJZ0UsRUFBSixDQUFPVixLQUFQLENBQWE4RyxZQUFiLENBQTBCekIsQ0FBMUI7QUFDRDs7QUFFRCxVQUFHd0IsVUFBVSxRQUFWLEVBQW9CbkssSUFBSStDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ0MsSUFBckQsS0FBOERnSCxVQUFVLFFBQVYsRUFBb0JuSyxJQUFJK0MsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDRCxJQUFyRCxDQUFqRSxFQUE0SDtBQUMxSG5ELFlBQUlnRSxFQUFKLENBQU9WLEtBQVAsQ0FBYStHLGNBQWIsQ0FBNEIxQixDQUE1QjtBQUNEOztBQUVELFVBQUd3QixVQUFVLFNBQVYsRUFBcUJuSyxJQUFJK0MsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJDLE9BQXpCLENBQWlDQyxJQUF0RCxLQUErRGdILFVBQVUsU0FBVixFQUFxQm5LLElBQUkrQyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkcsT0FBekIsQ0FBaUNELElBQXRELENBQWxFLEVBQThIO0FBQzVIbkQsWUFBSWdFLEVBQUosQ0FBT1YsS0FBUCxDQUFhZ0gsZUFBYixDQUE2QjNCLENBQTdCO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFHM0ksSUFBSVksU0FBSixDQUFjd0IsV0FBZCxDQUEwQnBCLE1BQTFCLElBQW9DaEIsSUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQkssT0FBbkIsQ0FBMkIzQixNQUFsRSxFQUF5RTtBQUN2RSxhQUFJLElBQUl1SixJQUFJWixJQUFJLENBQWhCLEVBQW1CWSxJQUFJdkssSUFBSVksU0FBSixDQUFja0MsS0FBZCxDQUFvQmdFLE1BQTNDLEVBQW1EeUQsR0FBbkQsRUFBdUQ7QUFDckQsY0FBSUMsS0FBS3hLLElBQUlZLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0J5SCxDQUFwQixDQUFUOztBQUVBO0FBQ0EsY0FBR3ZLLElBQUlZLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJwQixNQUE3QixFQUFvQztBQUNsQ2hCLGdCQUFJZ0UsRUFBSixDQUFPQyxRQUFQLENBQWdCd0csYUFBaEIsQ0FBOEI5QixDQUE5QixFQUFnQzZCLEVBQWhDO0FBQ0Q7O0FBRUQ7QUFDQSxjQUFHeEssSUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQkssT0FBbkIsQ0FBMkIzQixNQUE5QixFQUFxQztBQUNuQ2hCLGdCQUFJZ0UsRUFBSixDQUFPQyxRQUFQLENBQWdCeUcsZ0JBQWhCLENBQWlDL0IsQ0FBakMsRUFBbUM2QixFQUFuQztBQUNEOztBQUVEO0FBQ0EsY0FBR3hLLElBQUlZLFNBQUosQ0FBYzBCLElBQWQsQ0FBbUJJLE1BQXRCLEVBQTZCO0FBQzNCMUMsZ0JBQUlnRSxFQUFKLENBQU9DLFFBQVAsQ0FBZ0IwRyxlQUFoQixDQUFnQ2hDLENBQWhDLEVBQWtDNkIsRUFBbEM7QUFDRDtBQUVGO0FBQ0Y7QUFHRjtBQUVGLEdBaklEOztBQW1JQXhLLE1BQUlnRSxFQUFKLENBQU80QixhQUFQLEdBQXVCLFlBQVU7O0FBRS9CO0FBQ0E1RixRQUFJTSxNQUFKLENBQVdnRixHQUFYLENBQWVXLFNBQWYsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0JqRyxJQUFJTSxNQUFKLENBQVdFLENBQTFDLEVBQTZDUixJQUFJTSxNQUFKLENBQVdJLENBQXhEOztBQUVBO0FBQ0FWLFFBQUlnRSxFQUFKLENBQU80RixlQUFQOztBQUVBO0FBQ0EsU0FBSSxJQUFJRCxJQUFJLENBQVosRUFBZUEsSUFBSTNKLElBQUlZLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0JnRSxNQUF2QyxFQUErQzZDLEdBQS9DLEVBQW1EO0FBQ2pELFVBQUloQixJQUFJM0ksSUFBSVksU0FBSixDQUFja0MsS0FBZCxDQUFvQjZHLENBQXBCLENBQVI7QUFDQWhCLFFBQUVELElBQUY7QUFDRDtBQUVGLEdBZEQ7O0FBZ0JBMUksTUFBSWdFLEVBQUosQ0FBTzBCLGNBQVAsR0FBd0IsWUFBVTtBQUNoQzFGLFFBQUlZLFNBQUosQ0FBY2tDLEtBQWQsR0FBc0IsRUFBdEI7QUFDRCxHQUZEOztBQUlBOUMsTUFBSWdFLEVBQUosQ0FBTzRHLGdCQUFQLEdBQTBCLFlBQVU7O0FBRWxDO0FBQ0FDLDJCQUF1QjdLLElBQUlnRSxFQUFKLENBQU84RyxjQUE5QjtBQUNBRCwyQkFBdUI3SyxJQUFJZ0UsRUFBSixDQUFPK0csYUFBOUI7QUFDQS9LLFFBQUltRSxHQUFKLENBQVFrRSxVQUFSLEdBQXFCbkIsU0FBckI7QUFDQWxILFFBQUltRSxHQUFKLENBQVFtRixPQUFSLEdBQWtCcEMsU0FBbEI7QUFDQWxILFFBQUltRSxHQUFKLENBQVE2RyxTQUFSLEdBQW9CLENBQXBCO0FBQ0FoTCxRQUFJZ0UsRUFBSixDQUFPMEIsY0FBUDtBQUNBMUYsUUFBSWdFLEVBQUosQ0FBT2dDLFdBQVA7O0FBRUE7QUFDQWhHLFFBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZStHLEtBQWY7QUFFRCxHQWREOztBQWlCQTs7QUFFQWpMLE1BQUlnRSxFQUFKLENBQU9DLFFBQVAsQ0FBZ0J3RyxhQUFoQixHQUFnQyxVQUFTUyxFQUFULEVBQWFWLEVBQWIsRUFBZ0I7O0FBRTlDLFFBQUlXLEtBQUtELEdBQUcxRSxDQUFILEdBQU9nRSxHQUFHaEUsQ0FBbkI7QUFBQSxRQUNJNEUsS0FBS0YsR0FBR3pFLENBQUgsR0FBTytELEdBQUcvRCxDQURuQjtBQUFBLFFBRUk0RSxPQUFPaEYsS0FBS2lGLElBQUwsQ0FBVUgsS0FBR0EsRUFBSCxHQUFRQyxLQUFHQSxFQUFyQixDQUZYOztBQUlBO0FBQ0EsUUFBR0MsUUFBUXJMLElBQUlZLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJDLFFBQXJDLEVBQThDOztBQUU1QyxVQUFJa0osZUFBZXZMLElBQUlZLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJSLE9BQTFCLEdBQXFDeUosUUFBUSxJQUFFckwsSUFBSVksU0FBSixDQUFjd0IsV0FBZCxDQUEwQlIsT0FBcEMsQ0FBRCxHQUFpRDVCLElBQUlZLFNBQUosQ0FBY3dCLFdBQWQsQ0FBMEJDLFFBQWxJOztBQUVBLFVBQUdrSixlQUFlLENBQWxCLEVBQW9COztBQUVsQjtBQUNBLFlBQUlDLGFBQWF4TCxJQUFJWSxTQUFKLENBQWN3QixXQUFkLENBQTBCcUosY0FBM0M7QUFDQXpMLFlBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZWtFLFdBQWYsR0FBNkIsVUFBUWdDLFdBQVd2RSxDQUFuQixHQUFxQixHQUFyQixHQUF5QnVFLFdBQVdyRSxDQUFwQyxHQUFzQyxHQUF0QyxHQUEwQ3FFLFdBQVdwRSxDQUFyRCxHQUF1RCxHQUF2RCxHQUEyRG1FLFlBQTNELEdBQXdFLEdBQXJHO0FBQ0F2TCxZQUFJTSxNQUFKLENBQVdnRixHQUFYLENBQWVtRSxTQUFmLEdBQTJCekosSUFBSVksU0FBSixDQUFjd0IsV0FBZCxDQUEwQmQsS0FBckQ7QUFDQTs7QUFFQTtBQUNBdEIsWUFBSU0sTUFBSixDQUFXZ0YsR0FBWCxDQUFlMEQsU0FBZjtBQUNBaEosWUFBSU0sTUFBSixDQUFXZ0YsR0FBWCxDQUFlb0csTUFBZixDQUFzQlIsR0FBRzFFLENBQXpCLEVBQTRCMEUsR0FBR3pFLENBQS9CO0FBQ0F6RyxZQUFJTSxNQUFKLENBQVdnRixHQUFYLENBQWVxRyxNQUFmLENBQXNCbkIsR0FBR2hFLENBQXpCLEVBQTRCZ0UsR0FBRy9ELENBQS9CO0FBQ0F6RyxZQUFJTSxNQUFKLENBQVdnRixHQUFYLENBQWVqRSxNQUFmO0FBQ0FyQixZQUFJTSxNQUFKLENBQVdnRixHQUFYLENBQWVpRSxTQUFmO0FBRUQ7QUFFRjtBQUVGLEdBOUJEOztBQWlDQXZKLE1BQUlnRSxFQUFKLENBQU9DLFFBQVAsQ0FBZ0J5RyxnQkFBaEIsR0FBb0MsVUFBU1EsRUFBVCxFQUFhVixFQUFiLEVBQWdCOztBQUVsRDtBQUNBLFFBQUlXLEtBQUtELEdBQUcxRSxDQUFILEdBQU9nRSxHQUFHaEUsQ0FBbkI7QUFBQSxRQUNJNEUsS0FBS0YsR0FBR3pFLENBQUgsR0FBTytELEdBQUcvRCxDQURuQjtBQUFBLFFBRUk0RSxPQUFPaEYsS0FBS2lGLElBQUwsQ0FBVUgsS0FBR0EsRUFBSCxHQUFRQyxLQUFHQSxFQUFyQixDQUZYOztBQUlBLFFBQUdDLFFBQVFyTCxJQUFJWSxTQUFKLENBQWN3QixXQUFkLENBQTBCQyxRQUFyQyxFQUE4Qzs7QUFFNUMsVUFBSXVKLEtBQUtULE1BQUluTCxJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CSyxPQUFuQixDQUEyQkMsT0FBM0IsR0FBbUMsSUFBdkMsQ0FBVDtBQUFBLFVBQ0lpSixLQUFLVCxNQUFJcEwsSUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQkssT0FBbkIsQ0FBMkJFLE9BQTNCLEdBQW1DLElBQXZDLENBRFQ7O0FBR0FxSSxTQUFHdkQsRUFBSCxJQUFTaUUsRUFBVDtBQUNBVixTQUFHdEQsRUFBSCxJQUFTaUUsRUFBVDs7QUFFQXJCLFNBQUc3QyxFQUFILElBQVNpRSxFQUFUO0FBQ0FwQixTQUFHNUMsRUFBSCxJQUFTaUUsRUFBVDtBQUVEO0FBR0YsR0FyQkQ7O0FBd0JBN0wsTUFBSWdFLEVBQUosQ0FBT0MsUUFBUCxDQUFnQjBHLGVBQWhCLEdBQWtDLFVBQVNPLEVBQVQsRUFBYVYsRUFBYixFQUFnQjs7QUFFaEQsUUFBSVcsS0FBS0QsR0FBRzFFLENBQUgsR0FBT2dFLEdBQUdoRSxDQUFuQjtBQUFBLFFBQ0k0RSxLQUFLRixHQUFHekUsQ0FBSCxHQUFPK0QsR0FBRy9ELENBRG5CO0FBQUEsUUFFSTRFLE9BQU9oRixLQUFLaUYsSUFBTCxDQUFVSCxLQUFHQSxFQUFILEdBQVFDLEtBQUdBLEVBQXJCLENBRlg7QUFBQSxRQUdJVSxTQUFTWixHQUFHOUUsTUFBSCxHQUFVb0UsR0FBR3BFLE1BSDFCOztBQUtBLFFBQUdpRixRQUFRUyxNQUFYLEVBQWtCO0FBQ2hCWixTQUFHdkQsRUFBSCxHQUFRLENBQUN1RCxHQUFHdkQsRUFBWjtBQUNBdUQsU0FBR3RELEVBQUgsR0FBUSxDQUFDc0QsR0FBR3RELEVBQVo7O0FBRUE0QyxTQUFHN0MsRUFBSCxHQUFRLENBQUM2QyxHQUFHN0MsRUFBWjtBQUNBNkMsU0FBRzVDLEVBQUgsR0FBUSxDQUFDNEMsR0FBRzVDLEVBQVo7QUFDRDtBQUVGLEdBZkQ7O0FBa0JBOztBQUVBNUgsTUFBSWdFLEVBQUosQ0FBT1YsS0FBUCxDQUFheUksYUFBYixHQUE2QixVQUFTQyxFQUFULEVBQWFDLEdBQWIsRUFBaUI7O0FBRTVDak0sUUFBSW1FLEdBQUosQ0FBUW9FLE9BQVIsR0FBa0IsSUFBbEI7O0FBRUEsU0FBSSxJQUFJb0IsSUFBSSxDQUFaLEVBQWVBLElBQUlxQyxFQUFuQixFQUF1QnJDLEdBQXZCLEVBQTJCO0FBQ3pCM0osVUFBSVksU0FBSixDQUFja0MsS0FBZCxDQUFvQmEsSUFBcEIsQ0FDRSxJQUFJM0QsSUFBSWdFLEVBQUosQ0FBT2tDLFFBQVgsQ0FDRWxHLElBQUlZLFNBQUosQ0FBY00sS0FEaEIsRUFFRWxCLElBQUlZLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JkLEtBRnhCLEVBR0U7QUFDRSxhQUFLbUwsTUFBTUEsSUFBSUMsS0FBVixHQUFrQjdGLEtBQUt4RSxNQUFMLEtBQWdCN0IsSUFBSU0sTUFBSixDQUFXRSxDQURwRDtBQUVFLGFBQUt5TCxNQUFNQSxJQUFJRSxLQUFWLEdBQWtCOUYsS0FBS3hFLE1BQUwsS0FBZ0I3QixJQUFJTSxNQUFKLENBQVdJO0FBRnBELE9BSEYsQ0FERjtBQVVBLFVBQUdpSixLQUFLcUMsS0FBRyxDQUFYLEVBQWE7QUFDWCxZQUFHLENBQUNoTSxJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CdEIsTUFBdkIsRUFBOEI7QUFDNUJoQixjQUFJZ0UsRUFBSixDQUFPNEIsYUFBUDtBQUNEO0FBQ0Q1RixZQUFJbUUsR0FBSixDQUFRb0UsT0FBUixHQUFrQixLQUFsQjtBQUNEO0FBQ0Y7QUFFRixHQXZCRDs7QUEwQkF2SSxNQUFJZ0UsRUFBSixDQUFPVixLQUFQLENBQWE4SSxlQUFiLEdBQStCLFVBQVNKLEVBQVQsRUFBWTs7QUFFekNoTSxRQUFJWSxTQUFKLENBQWNrQyxLQUFkLENBQW9CdUosTUFBcEIsQ0FBMkIsQ0FBM0IsRUFBOEJMLEVBQTlCO0FBQ0EsUUFBRyxDQUFDaE0sSUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQnRCLE1BQXZCLEVBQThCO0FBQzVCaEIsVUFBSWdFLEVBQUosQ0FBTzRCLGFBQVA7QUFDRDtBQUVGLEdBUEQ7O0FBVUE1RixNQUFJZ0UsRUFBSixDQUFPVixLQUFQLENBQWErRyxjQUFiLEdBQThCLFVBQVMxQixDQUFULEVBQVc7O0FBRXZDO0FBQ0EsUUFBRzNJLElBQUkrQyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNsQyxNQUFqQyxJQUEyQ21KLFVBQVUsUUFBVixFQUFvQm5LLElBQUkrQyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkMsT0FBekIsQ0FBaUNDLElBQXJELENBQTlDLEVBQXlHO0FBQUEsVUFPOUZtSixJQVA4RixHQU92RyxTQUFTQSxJQUFULEdBQWU7QUFDYjNELFVBQUVFLGNBQUYsR0FBbUJGLEVBQUUvRyxPQUFyQjtBQUNBK0csVUFBRUMsYUFBRixHQUFrQkQsRUFBRXZDLE1BQXBCO0FBQ0QsT0FWc0c7O0FBWXZHOzs7QUFWQSxVQUFJbUcsV0FBVzVELEVBQUVuQyxDQUFGLEdBQU14RyxJQUFJK0MsYUFBSixDQUFrQmUsS0FBbEIsQ0FBd0JvSSxLQUE3QztBQUFBLFVBQ0lNLFdBQVc3RCxFQUFFbEMsQ0FBRixHQUFNekcsSUFBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCcUksS0FEN0M7QUFBQSxVQUVJTSxhQUFhcEcsS0FBS2lGLElBQUwsQ0FBVWlCLFdBQVNBLFFBQVQsR0FBb0JDLFdBQVNBLFFBQXZDLENBRmpCO0FBQUEsVUFHSXJFLFFBQVEsSUFBSXNFLGFBQWF6TSxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCbkIsUUFINUQ7O0FBV0EsVUFBR29LLGNBQWN6TSxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCbkIsUUFBaEQsRUFBeUQ7O0FBRXZELFlBQUc4RixTQUFTLENBQVQsSUFBY25JLElBQUkrQyxhQUFKLENBQWtCMkosTUFBbEIsSUFBNEIsV0FBN0MsRUFBeUQ7O0FBRXZEO0FBQ0EsY0FBRzFNLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0J0QixJQUEvQixJQUF1Q2xDLElBQUlZLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJwQixLQUE3RCxFQUFtRTs7QUFFakUsZ0JBQUdkLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0J0QixJQUEvQixHQUFzQ2xDLElBQUlZLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJwQixLQUE1RCxFQUFrRTtBQUNoRSxrQkFBSW9CLE9BQU95RyxFQUFFdkMsTUFBRixHQUFZcEcsSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQnRCLElBQS9CLEdBQW9DaUcsS0FBM0Q7QUFDQSxrQkFBR2pHLFFBQVEsQ0FBWCxFQUFhO0FBQ1h5RyxrQkFBRUMsYUFBRixHQUFrQjFHLElBQWxCO0FBQ0Q7QUFDRixhQUxELE1BS0s7QUFDSCxrQkFBSXlLLE1BQU1oRSxFQUFFdkMsTUFBRixHQUFXcEcsSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQnRCLElBQXBEO0FBQUEsa0JBQ0lBLE9BQU95RyxFQUFFdkMsTUFBRixHQUFZdUcsTUFBSXhFLEtBRDNCO0FBRUEsa0JBQUdqRyxPQUFPLENBQVYsRUFBWTtBQUNWeUcsa0JBQUVDLGFBQUYsR0FBa0IxRyxJQUFsQjtBQUNELGVBRkQsTUFFSztBQUNIeUcsa0JBQUVDLGFBQUYsR0FBa0IsQ0FBbEI7QUFDRDtBQUNGO0FBRUY7O0FBRUQ7QUFDQSxjQUFHNUksSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQjVCLE9BQS9CLElBQTBDNUIsSUFBSVksU0FBSixDQUFjZ0IsT0FBZCxDQUFzQmQsS0FBbkUsRUFBeUU7O0FBRXZFLGdCQUFHZCxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCNUIsT0FBL0IsR0FBeUM1QixJQUFJWSxTQUFKLENBQWNnQixPQUFkLENBQXNCZCxLQUFsRSxFQUF3RTtBQUN0RSxrQkFBSWMsVUFBVTVCLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0I1QixPQUEvQixHQUF1Q3VHLEtBQXJEO0FBQ0Esa0JBQUd2RyxVQUFVK0csRUFBRS9HLE9BQVosSUFBdUJBLFdBQVc1QixJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCNUIsT0FBcEUsRUFBNEU7QUFDMUUrRyxrQkFBRUUsY0FBRixHQUFtQmpILE9BQW5CO0FBQ0Q7QUFDRixhQUxELE1BS0s7QUFDSCxrQkFBSUEsVUFBVStHLEVBQUUvRyxPQUFGLEdBQVksQ0FBQzVCLElBQUlZLFNBQUosQ0FBY2dCLE9BQWQsQ0FBc0JkLEtBQXRCLEdBQTRCZCxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCNUIsT0FBNUQsSUFBcUV1RyxLQUEvRjtBQUNBLGtCQUFHdkcsVUFBVStHLEVBQUUvRyxPQUFaLElBQXVCQSxXQUFXNUIsSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQjVCLE9BQXBFLEVBQTRFO0FBQzFFK0csa0JBQUVFLGNBQUYsR0FBbUJqSCxPQUFuQjtBQUNEO0FBQ0Y7QUFFRjtBQUVGO0FBRUYsT0EzQ0QsTUEyQ0s7QUFDSDBLO0FBQ0Q7O0FBR0Q7QUFDQSxVQUFHdE0sSUFBSStDLGFBQUosQ0FBa0IySixNQUFsQixJQUE0QixZQUEvQixFQUE0QztBQUMxQ0o7QUFDRDtBQUVGOztBQUVEO0FBcEVBLFNBcUVLLElBQUd0TSxJQUFJK0MsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDcEMsTUFBakMsSUFBMkNtSixVQUFVLFFBQVYsRUFBb0JuSyxJQUFJK0MsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDRCxJQUFyRCxDQUE5QyxFQUF5RztBQUFBLFlBb0JuR3lKLE9BcEJtRyxHQW9CNUcsU0FBU0EsT0FBVCxDQUFpQkMsWUFBakIsRUFBK0JDLGVBQS9CLEVBQWdEQyxZQUFoRCxFQUE4REMsS0FBOUQsRUFBcUVDLEVBQXJFLEVBQXdFOztBQUV0RSxjQUFHSixnQkFBZ0JDLGVBQW5CLEVBQW1DOztBQUVqQyxnQkFBRyxDQUFDOU0sSUFBSW1FLEdBQUosQ0FBUStJLG1CQUFaLEVBQWdDO0FBQzlCLGtCQUFHVCxjQUFjek0sSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCRSxNQUF4QixDQUErQm5CLFFBQWhELEVBQXlEO0FBQ3ZELG9CQUFHMEssZ0JBQWdCN0YsU0FBbkIsRUFBOEIsSUFBSTVDLE1BQU15SSxZQUFWLENBQTlCLEtBQ0ssSUFBSXpJLE1BQU0wSSxLQUFWO0FBQ0wsb0JBQUcxSSxPQUFPdUksWUFBVixFQUF1QjtBQUNyQixzQkFBSS9MLFFBQVFrTSxRQUFTRyxjQUFjSCxRQUFRSCxZQUF0QixJQUFzQzdNLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0JDLFFBQTFGO0FBQ0Esc0JBQUd3SixNQUFNLE1BQVQsRUFBaUJ0RSxFQUFFQyxhQUFGLEdBQWtCOUgsS0FBbEI7QUFDakIsc0JBQUdtTSxNQUFNLFNBQVQsRUFBb0J0RSxFQUFFRSxjQUFGLEdBQW1CL0gsS0FBbkI7QUFDckI7QUFDRixlQVJELE1BUUs7QUFDSCxvQkFBR21NLE1BQU0sTUFBVCxFQUFpQnRFLEVBQUVDLGFBQUYsR0FBa0IxQixTQUFsQjtBQUNqQixvQkFBRytGLE1BQU0sU0FBVCxFQUFvQnRFLEVBQUVFLGNBQUYsR0FBbUIzQixTQUFuQjtBQUNyQjtBQUNGLGFBYkQsTUFhSztBQUNILGtCQUFHNkYsZ0JBQWdCN0YsU0FBbkIsRUFBNkI7QUFDM0Isb0JBQUlrRyxZQUFZSixRQUFTRyxjQUFjSCxRQUFRSCxZQUF0QixJQUFzQzdNLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0JDLFFBQTlGO0FBQUEsb0JBQ0lrSixNQUFNRSxlQUFlTyxTQUR6QjtBQUVJdE0sd0JBQVErTCxlQUFlRixHQUF2QjtBQUNKLG9CQUFHTSxNQUFNLE1BQVQsRUFBaUJ0RSxFQUFFQyxhQUFGLEdBQWtCOUgsS0FBbEI7QUFDakIsb0JBQUdtTSxNQUFNLFNBQVQsRUFBb0J0RSxFQUFFRSxjQUFGLEdBQW1CL0gsS0FBbkI7QUFDckI7QUFDRjtBQUVGO0FBRUYsU0FqRDJHOztBQUc1RyxZQUFHZCxJQUFJbUUsR0FBSixDQUFRa0osZUFBWCxFQUEyQjtBQUN6QixjQUFJZCxXQUFXNUQsRUFBRW5DLENBQUYsR0FBTXhHLElBQUkrQyxhQUFKLENBQWtCZSxLQUFsQixDQUF3QndKLFdBQTdDO0FBQUEsY0FDSWQsV0FBVzdELEVBQUVsQyxDQUFGLEdBQU16RyxJQUFJK0MsYUFBSixDQUFrQmUsS0FBbEIsQ0FBd0J5SixXQUQ3QztBQUFBLGNBRUlkLGFBQWFwRyxLQUFLaUYsSUFBTCxDQUFVaUIsV0FBU0EsUUFBVCxHQUFvQkMsV0FBU0EsUUFBdkMsQ0FGakI7QUFBQSxjQUdJVyxhQUFhLENBQUMsSUFBSUssSUFBSixHQUFXQyxPQUFYLEtBQXVCek4sSUFBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCNEosVUFBaEQsSUFBNEQsSUFIN0U7O0FBS0EsY0FBR1AsYUFBYW5OLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0JDLFFBQS9DLEVBQXdEO0FBQ3REekQsZ0JBQUltRSxHQUFKLENBQVErSSxtQkFBUixHQUE4QixJQUE5QjtBQUNEOztBQUVELGNBQUdDLGFBQWFuTixJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCQyxRQUEvQixHQUF3QyxDQUF4RCxFQUEwRDtBQUN4RHpELGdCQUFJbUUsR0FBSixDQUFRa0osZUFBUixHQUEwQixLQUExQjtBQUNBck4sZ0JBQUltRSxHQUFKLENBQVErSSxtQkFBUixHQUE4QixLQUE5QjtBQUNEO0FBQ0Y7O0FBa0NELFlBQUdsTixJQUFJbUUsR0FBSixDQUFRa0osZUFBWCxFQUEyQjtBQUN6QjtBQUNBVCxrQkFBUTVNLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkUsTUFBeEIsQ0FBK0J0QixJQUF2QyxFQUE2Q2xDLElBQUlZLFNBQUosQ0FBY3NCLElBQWQsQ0FBbUJwQixLQUFoRSxFQUF1RTZILEVBQUVDLGFBQXpFLEVBQXdGRCxFQUFFdkMsTUFBMUYsRUFBa0csTUFBbEc7QUFDQTtBQUNBd0csa0JBQVE1TSxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JFLE1BQXhCLENBQStCNUIsT0FBdkMsRUFBZ0Q1QixJQUFJWSxTQUFKLENBQWNnQixPQUFkLENBQXNCZCxLQUF0RSxFQUE2RTZILEVBQUVFLGNBQS9FLEVBQStGRixFQUFFL0csT0FBakcsRUFBMEcsU0FBMUc7QUFDRDtBQUVGO0FBRUYsR0FwSUQ7O0FBdUlBNUIsTUFBSWdFLEVBQUosQ0FBT1YsS0FBUCxDQUFhZ0gsZUFBYixHQUErQixVQUFTM0IsQ0FBVCxFQUFXOztBQUV4QyxRQUFHM0ksSUFBSStDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ2xDLE1BQWpDLElBQTJDbUosVUFBVSxTQUFWLEVBQXFCbkssSUFBSStDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ0MsSUFBdEQsQ0FBM0MsSUFBMEduRCxJQUFJK0MsYUFBSixDQUFrQjJKLE1BQWxCLElBQTRCLFdBQXpJLEVBQXNKOztBQUVwSixVQUFJSCxXQUFXNUQsRUFBRW5DLENBQUYsR0FBTXhHLElBQUkrQyxhQUFKLENBQWtCZSxLQUFsQixDQUF3Qm9JLEtBQTdDO0FBQUEsVUFDSU0sV0FBVzdELEVBQUVsQyxDQUFGLEdBQU16RyxJQUFJK0MsYUFBSixDQUFrQmUsS0FBbEIsQ0FBd0JxSSxLQUQ3QztBQUFBLFVBRUlNLGFBQWFwRyxLQUFLaUYsSUFBTCxDQUFVaUIsV0FBU0EsUUFBVCxHQUFvQkMsV0FBU0EsUUFBdkMsQ0FGakI7O0FBSUEsVUFBSW1CLFVBQVUsRUFBQ25ILEdBQUcrRixXQUFTRSxVQUFiLEVBQXlCaEcsR0FBRytGLFdBQVNDLFVBQXJDLEVBQWQ7QUFBQSxVQUNJbUIsZ0JBQWdCNU4sSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCSSxPQUF4QixDQUFnQ3JCLFFBRHBEO0FBQUEsVUFFSXdMLFdBQVcsR0FGZjtBQUFBLFVBR0lDLGdCQUFnQkMsTUFBTyxJQUFFSCxhQUFILElBQW1CLENBQUMsQ0FBRCxHQUFHdkgsS0FBSzJILEdBQUwsQ0FBU3ZCLGFBQVdtQixhQUFwQixFQUFrQyxDQUFsQyxDQUFILEdBQXdDLENBQTNELElBQThEQSxhQUE5RCxHQUE0RUMsUUFBbEYsRUFBNEYsQ0FBNUYsRUFBK0YsRUFBL0YsQ0FIcEI7O0FBS0EsVUFBSTVCLE1BQU07QUFDUnpGLFdBQUdtQyxFQUFFbkMsQ0FBRixHQUFNbUgsUUFBUW5ILENBQVIsR0FBWXNILGFBRGI7QUFFUnJILFdBQUdrQyxFQUFFbEMsQ0FBRixHQUFNa0gsUUFBUWxILENBQVIsR0FBWXFIO0FBRmIsT0FBVjs7QUFLQSxVQUFHOU4sSUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQkcsUUFBbkIsSUFBK0IsUUFBbEMsRUFBMkM7QUFDekMsWUFBR3dKLElBQUl6RixDQUFKLEdBQVFtQyxFQUFFdkMsTUFBVixHQUFtQixDQUFuQixJQUF3QjZGLElBQUl6RixDQUFKLEdBQVFtQyxFQUFFdkMsTUFBVixHQUFtQnBHLElBQUlNLE1BQUosQ0FBV0UsQ0FBekQsRUFBNERtSSxFQUFFbkMsQ0FBRixHQUFNeUYsSUFBSXpGLENBQVY7QUFDNUQsWUFBR3lGLElBQUl4RixDQUFKLEdBQVFrQyxFQUFFdkMsTUFBVixHQUFtQixDQUFuQixJQUF3QjZGLElBQUl4RixDQUFKLEdBQVFrQyxFQUFFdkMsTUFBVixHQUFtQnBHLElBQUlNLE1BQUosQ0FBV0ksQ0FBekQsRUFBNERpSSxFQUFFbEMsQ0FBRixHQUFNd0YsSUFBSXhGLENBQVY7QUFDN0QsT0FIRCxNQUdLO0FBQ0hrQyxVQUFFbkMsQ0FBRixHQUFNeUYsSUFBSXpGLENBQVY7QUFDQW1DLFVBQUVsQyxDQUFGLEdBQU13RixJQUFJeEYsQ0FBVjtBQUNEO0FBRUYsS0F4QkQsTUEyQkssSUFBR3pHLElBQUkrQyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkcsT0FBekIsQ0FBaUNwQyxNQUFqQyxJQUEyQ21KLFVBQVUsU0FBVixFQUFxQm5LLElBQUkrQyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkcsT0FBekIsQ0FBaUNELElBQXRELENBQTlDLEVBQTJHOztBQUU5RyxVQUFHLENBQUNuRCxJQUFJbUUsR0FBSixDQUFROEosY0FBWixFQUEyQjtBQUN6QmpPLFlBQUltRSxHQUFKLENBQVErSixhQUFSO0FBQ0EsWUFBR2xPLElBQUltRSxHQUFKLENBQVErSixhQUFSLElBQXlCbE8sSUFBSVksU0FBSixDQUFja0MsS0FBZCxDQUFvQmdFLE1BQWhELEVBQXVEO0FBQ3JEOUcsY0FBSW1FLEdBQUosQ0FBUThKLGNBQVIsR0FBeUIsSUFBekI7QUFDRDtBQUNGOztBQUVELFVBQUdqTyxJQUFJbUUsR0FBSixDQUFRZ0ssZ0JBQVgsRUFBNEI7QUFBQSxZQVVqQnZCLE9BVmlCLEdBVTFCLFNBQVNBLE9BQVQsR0FBa0I7O0FBRWhCLGNBQUl3QixJQUFJL0gsS0FBS2dJLEtBQUwsQ0FBV2pELEVBQVgsRUFBY0QsRUFBZCxDQUFSO0FBQ0F4QyxZQUFFaEIsRUFBRixHQUFPMkcsUUFBUWpJLEtBQUtrSSxHQUFMLENBQVNILENBQVQsQ0FBZjtBQUNBekYsWUFBRWYsRUFBRixHQUFPMEcsUUFBUWpJLEtBQUttSSxHQUFMLENBQVNKLENBQVQsQ0FBZjs7QUFFQSxjQUFHcE8sSUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQkcsUUFBbkIsSUFBK0IsUUFBbEMsRUFBMkM7QUFDekMsZ0JBQUl3SixNQUFNO0FBQ1J6RixpQkFBR21DLEVBQUVuQyxDQUFGLEdBQU1tQyxFQUFFaEIsRUFESDtBQUVSbEIsaUJBQUdrQyxFQUFFbEMsQ0FBRixHQUFNa0MsRUFBRWY7QUFGSCxhQUFWO0FBSUEsZ0JBQUlxRSxJQUFJekYsQ0FBSixHQUFRbUMsRUFBRXZDLE1BQVYsR0FBbUJwRyxJQUFJTSxNQUFKLENBQVdFLENBQWxDLEVBQXFDbUksRUFBRWhCLEVBQUYsR0FBTyxDQUFDZ0IsRUFBRWhCLEVBQVYsQ0FBckMsS0FDSyxJQUFJc0UsSUFBSXpGLENBQUosR0FBUW1DLEVBQUV2QyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCdUMsRUFBRWhCLEVBQUYsR0FBTyxDQUFDZ0IsRUFBRWhCLEVBQVY7QUFDL0IsZ0JBQUlzRSxJQUFJeEYsQ0FBSixHQUFRa0MsRUFBRXZDLE1BQVYsR0FBbUJwRyxJQUFJTSxNQUFKLENBQVdJLENBQWxDLEVBQXFDaUksRUFBRWYsRUFBRixHQUFPLENBQUNlLEVBQUVmLEVBQVYsQ0FBckMsS0FDSyxJQUFJcUUsSUFBSXhGLENBQUosR0FBUWtDLEVBQUV2QyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCdUMsRUFBRWYsRUFBRixHQUFPLENBQUNlLEVBQUVmLEVBQVY7QUFDaEM7QUFFRixTQTNCeUI7O0FBNkIxQjs7O0FBM0JBLFlBQUlnRyxnQkFBZ0J2SCxLQUFLMkgsR0FBTCxDQUFTaE8sSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCSSxPQUF4QixDQUFnQ3JCLFFBQWhDLEdBQXlDLENBQWxELEVBQXFELENBQXJELENBQXBCOztBQUVBLFlBQUk4SSxLQUFLbkwsSUFBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCd0osV0FBeEIsR0FBc0MzRSxFQUFFbkMsQ0FBakQ7QUFBQSxZQUNJNEUsS0FBS3BMLElBQUkrQyxhQUFKLENBQWtCZSxLQUFsQixDQUF3QnlKLFdBQXhCLEdBQXNDNUUsRUFBRWxDLENBRGpEO0FBQUEsWUFFSWdJLElBQUl0RCxLQUFHQSxFQUFILEdBQVFDLEtBQUdBLEVBRm5COztBQUlBLFlBQUlrRCxRQUFRLENBQUNWLGFBQUQsR0FBaUJhLENBQWpCLEdBQXFCLENBQWpDOztBQXNCQSxZQUFHQSxLQUFLYixhQUFSLEVBQXNCO0FBQ3BCaEI7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdELE9BNUNELE1BNENLOztBQUVILFlBQUc1TSxJQUFJbUUsR0FBSixDQUFRZ0ssZ0JBQVIsSUFBNEIsS0FBL0IsRUFBcUM7O0FBRW5DeEYsWUFBRWhCLEVBQUYsR0FBT2dCLEVBQUVkLElBQVQ7QUFDQWMsWUFBRWYsRUFBRixHQUFPZSxFQUFFYixJQUFUO0FBRUQ7QUFFRjtBQUVGO0FBRUYsR0EvRkQ7O0FBa0dBOUgsTUFBSWdFLEVBQUosQ0FBT1YsS0FBUCxDQUFhOEcsWUFBYixHQUE0QixVQUFTekIsQ0FBVCxFQUFXOztBQUVyQyxRQUFHM0ksSUFBSStDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ2xDLE1BQWpDLElBQTJDaEIsSUFBSStDLGFBQUosQ0FBa0IySixNQUFsQixJQUE0QixXQUExRSxFQUFzRjs7QUFFcEYsVUFBSUgsV0FBVzVELEVBQUVuQyxDQUFGLEdBQU14RyxJQUFJK0MsYUFBSixDQUFrQmUsS0FBbEIsQ0FBd0JvSSxLQUE3QztBQUFBLFVBQ0lNLFdBQVc3RCxFQUFFbEMsQ0FBRixHQUFNekcsSUFBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCcUksS0FEN0M7QUFBQSxVQUVJTSxhQUFhcEcsS0FBS2lGLElBQUwsQ0FBVWlCLFdBQVNBLFFBQVQsR0FBb0JDLFdBQVNBLFFBQXZDLENBRmpCOztBQUlBO0FBQ0EsVUFBR0MsY0FBY3pNLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkMsSUFBeEIsQ0FBNkJsQixRQUE5QyxFQUF1RDs7QUFFckQsWUFBSWtKLGVBQWV2TCxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JDLElBQXhCLENBQTZCbkIsV0FBN0IsQ0FBeUNSLE9BQXpDLEdBQW9ENkssY0FBYyxJQUFFek0sSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCQyxJQUF4QixDQUE2Qm5CLFdBQTdCLENBQXlDUixPQUF6RCxDQUFELEdBQXNFNUIsSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCQyxJQUF4QixDQUE2QmxCLFFBQXpLOztBQUVBLFlBQUdrSixlQUFlLENBQWxCLEVBQW9COztBQUVsQjtBQUNBLGNBQUlDLGFBQWF4TCxJQUFJWSxTQUFKLENBQWN3QixXQUFkLENBQTBCcUosY0FBM0M7QUFDQXpMLGNBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZWtFLFdBQWYsR0FBNkIsVUFBUWdDLFdBQVd2RSxDQUFuQixHQUFxQixHQUFyQixHQUF5QnVFLFdBQVdyRSxDQUFwQyxHQUFzQyxHQUF0QyxHQUEwQ3FFLFdBQVdwRSxDQUFyRCxHQUF1RCxHQUF2RCxHQUEyRG1FLFlBQTNELEdBQXdFLEdBQXJHO0FBQ0F2TCxjQUFJTSxNQUFKLENBQVdnRixHQUFYLENBQWVtRSxTQUFmLEdBQTJCekosSUFBSVksU0FBSixDQUFjd0IsV0FBZCxDQUEwQmQsS0FBckQ7QUFDQTs7QUFFQTtBQUNBdEIsY0FBSU0sTUFBSixDQUFXZ0YsR0FBWCxDQUFlMEQsU0FBZjtBQUNBaEosY0FBSU0sTUFBSixDQUFXZ0YsR0FBWCxDQUFlb0csTUFBZixDQUFzQi9DLEVBQUVuQyxDQUF4QixFQUEyQm1DLEVBQUVsQyxDQUE3QjtBQUNBekcsY0FBSU0sTUFBSixDQUFXZ0YsR0FBWCxDQUFlcUcsTUFBZixDQUFzQjNMLElBQUkrQyxhQUFKLENBQWtCZSxLQUFsQixDQUF3Qm9JLEtBQTlDLEVBQXFEbE0sSUFBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCcUksS0FBN0U7QUFDQW5NLGNBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZWpFLE1BQWY7QUFDQXJCLGNBQUlNLE1BQUosQ0FBV2dGLEdBQVgsQ0FBZWlFLFNBQWY7QUFFRDtBQUVGO0FBRUY7QUFFRixHQWxDRDs7QUFzQ0E7O0FBRUF2SixNQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWV3SyxlQUFmLEdBQWlDLFlBQVU7O0FBRXpDO0FBQ0EsUUFBRzFPLElBQUkrQyxhQUFKLENBQWtCQyxTQUFsQixJQUErQixRQUFsQyxFQUEyQztBQUN6Q2hELFVBQUkrQyxhQUFKLENBQWtCeEMsRUFBbEIsR0FBdUIwRSxNQUF2QjtBQUNELEtBRkQsTUFFSztBQUNIakYsVUFBSStDLGFBQUosQ0FBa0J4QyxFQUFsQixHQUF1QlAsSUFBSU0sTUFBSixDQUFXQyxFQUFsQztBQUNEOztBQUdEO0FBQ0EsUUFBR1AsSUFBSStDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCQyxPQUF6QixDQUFpQ2xDLE1BQWpDLElBQTJDaEIsSUFBSStDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCRyxPQUF6QixDQUFpQ3BDLE1BQS9FLEVBQXNGOztBQUVwRjtBQUNBaEIsVUFBSStDLGFBQUosQ0FBa0J4QyxFQUFsQixDQUFxQmtGLGdCQUFyQixDQUFzQyxXQUF0QyxFQUFtRCxVQUFTa0osQ0FBVCxFQUFXOztBQUU1RCxZQUFHM08sSUFBSStDLGFBQUosQ0FBa0J4QyxFQUFsQixJQUF3QjBFLE1BQTNCLEVBQWtDO0FBQ2hDLGNBQUlpSCxRQUFReUMsRUFBRUMsT0FBZDtBQUFBLGNBQ0l6QyxRQUFRd0MsRUFBRUUsT0FEZDtBQUVELFNBSEQsTUFJSTtBQUNGLGNBQUkzQyxRQUFReUMsRUFBRUcsT0FBRixJQUFhSCxFQUFFQyxPQUEzQjtBQUFBLGNBQ0l6QyxRQUFRd0MsRUFBRUksT0FBRixJQUFhSixFQUFFRSxPQUQzQjtBQUVEOztBQUVEN08sWUFBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCb0ksS0FBeEIsR0FBZ0NBLEtBQWhDO0FBQ0FsTSxZQUFJK0MsYUFBSixDQUFrQmUsS0FBbEIsQ0FBd0JxSSxLQUF4QixHQUFnQ0EsS0FBaEM7O0FBRUEsWUFBR25NLElBQUltRSxHQUFKLENBQVFpQixNQUFYLEVBQWtCO0FBQ2hCcEYsY0FBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCb0ksS0FBeEIsSUFBaUNsTSxJQUFJTSxNQUFKLENBQVc2RSxPQUE1QztBQUNBbkYsY0FBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCcUksS0FBeEIsSUFBaUNuTSxJQUFJTSxNQUFKLENBQVc2RSxPQUE1QztBQUNEOztBQUVEbkYsWUFBSStDLGFBQUosQ0FBa0IySixNQUFsQixHQUEyQixXQUEzQjtBQUVELE9BckJEOztBQXVCQTtBQUNBMU0sVUFBSStDLGFBQUosQ0FBa0J4QyxFQUFsQixDQUFxQmtGLGdCQUFyQixDQUFzQyxZQUF0QyxFQUFvRCxVQUFTa0osQ0FBVCxFQUFXOztBQUU3RDNPLFlBQUkrQyxhQUFKLENBQWtCZSxLQUFsQixDQUF3Qm9JLEtBQXhCLEdBQWdDLElBQWhDO0FBQ0FsTSxZQUFJK0MsYUFBSixDQUFrQmUsS0FBbEIsQ0FBd0JxSSxLQUF4QixHQUFnQyxJQUFoQztBQUNBbk0sWUFBSStDLGFBQUosQ0FBa0IySixNQUFsQixHQUEyQixZQUEzQjtBQUVELE9BTkQ7QUFRRDs7QUFFRDtBQUNBLFFBQUcxTSxJQUFJK0MsYUFBSixDQUFrQkUsTUFBbEIsQ0FBeUJHLE9BQXpCLENBQWlDcEMsTUFBcEMsRUFBMkM7O0FBRXpDaEIsVUFBSStDLGFBQUosQ0FBa0J4QyxFQUFsQixDQUFxQmtGLGdCQUFyQixDQUFzQyxPQUF0QyxFQUErQyxZQUFVOztBQUV2RHpGLFlBQUkrQyxhQUFKLENBQWtCZSxLQUFsQixDQUF3QndKLFdBQXhCLEdBQXNDdE4sSUFBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCb0ksS0FBOUQ7QUFDQWxNLFlBQUkrQyxhQUFKLENBQWtCZSxLQUFsQixDQUF3QnlKLFdBQXhCLEdBQXNDdk4sSUFBSStDLGFBQUosQ0FBa0JlLEtBQWxCLENBQXdCcUksS0FBOUQ7QUFDQW5NLFlBQUkrQyxhQUFKLENBQWtCZSxLQUFsQixDQUF3QjRKLFVBQXhCLEdBQXFDLElBQUlGLElBQUosR0FBV0MsT0FBWCxFQUFyQzs7QUFFQSxZQUFHek4sSUFBSStDLGFBQUosQ0FBa0JFLE1BQWxCLENBQXlCRyxPQUF6QixDQUFpQ3BDLE1BQXBDLEVBQTJDOztBQUV6QyxrQkFBT2hCLElBQUkrQyxhQUFKLENBQWtCRSxNQUFsQixDQUF5QkcsT0FBekIsQ0FBaUNELElBQXhDOztBQUVFLGlCQUFLLE1BQUw7QUFDRSxrQkFBR25ELElBQUlZLFNBQUosQ0FBYzBCLElBQWQsQ0FBbUJ0QixNQUF0QixFQUE2QjtBQUMzQmhCLG9CQUFJZ0UsRUFBSixDQUFPVixLQUFQLENBQWF5SSxhQUFiLENBQTJCL0wsSUFBSStDLGFBQUosQ0FBa0JPLEtBQWxCLENBQXdCSyxJQUF4QixDQUE2QkMsWUFBeEQsRUFBc0U1RCxJQUFJK0MsYUFBSixDQUFrQmUsS0FBeEY7QUFDRCxlQUZELE1BRUs7QUFDSCxvQkFBRzlELElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkssSUFBeEIsQ0FBNkJDLFlBQTdCLElBQTZDLENBQWhELEVBQWtEO0FBQ2hENUQsc0JBQUlnRSxFQUFKLENBQU9WLEtBQVAsQ0FBYXlJLGFBQWIsQ0FBMkIvTCxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JLLElBQXhCLENBQTZCQyxZQUF4RCxFQUFzRTVELElBQUkrQyxhQUFKLENBQWtCZSxLQUF4RjtBQUNELGlCQUZELE1BR0ssSUFBRzlELElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3QkssSUFBeEIsQ0FBNkJDLFlBQTdCLEdBQTRDLENBQS9DLEVBQWlEO0FBQ3BENUQsc0JBQUlnRSxFQUFKLENBQU9WLEtBQVAsQ0FBYXlJLGFBQWIsQ0FBMkIvTCxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JLLElBQXhCLENBQTZCQyxZQUF4RDtBQUNEO0FBQ0Y7QUFDSDs7QUFFQSxpQkFBSyxRQUFMO0FBQ0U1RCxrQkFBSWdFLEVBQUosQ0FBT1YsS0FBUCxDQUFhOEksZUFBYixDQUE2QnBNLElBQUkrQyxhQUFKLENBQWtCTyxLQUFsQixDQUF3Qk8sTUFBeEIsQ0FBK0JELFlBQTVEO0FBQ0Y7O0FBRUEsaUJBQUssUUFBTDtBQUNFNUQsa0JBQUltRSxHQUFKLENBQVFrSixlQUFSLEdBQTBCLElBQTFCO0FBQ0Y7O0FBRUEsaUJBQUssU0FBTDtBQUNFck4sa0JBQUltRSxHQUFKLENBQVFnSyxnQkFBUixHQUEyQixJQUEzQjtBQUNBbk8sa0JBQUltRSxHQUFKLENBQVErSixhQUFSLEdBQXdCLENBQXhCO0FBQ0FsTyxrQkFBSW1FLEdBQUosQ0FBUThKLGNBQVIsR0FBeUIsS0FBekI7QUFDQWUseUJBQVcsWUFBVTtBQUNuQmhQLG9CQUFJbUUsR0FBSixDQUFRZ0ssZ0JBQVIsR0FBMkIsS0FBM0I7QUFDRCxlQUZELEVBRUduTyxJQUFJK0MsYUFBSixDQUFrQk8sS0FBbEIsQ0FBd0JJLE9BQXhCLENBQWdDRCxRQUFoQyxHQUF5QyxJQUY1QztBQUdGOztBQTlCRjtBQWtDRDtBQUVGLE9BNUNEO0FBOENEO0FBR0YsR0FwR0Q7O0FBc0dBekQsTUFBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFlMkIsb0JBQWYsR0FBc0MsWUFBVTs7QUFFOUMsUUFBRzdGLElBQUlZLFNBQUosQ0FBY0MsTUFBZCxDQUFxQkUsT0FBckIsQ0FBNkJDLE1BQWhDLEVBQXVDOztBQUVyQztBQUNBLFVBQUlpTyxPQUFPalAsSUFBSU0sTUFBSixDQUFXQyxFQUFYLENBQWNlLEtBQWQsR0FBc0J0QixJQUFJTSxNQUFKLENBQVdDLEVBQVgsQ0FBY29CLE1BQXBDLEdBQTZDLElBQXhEO0FBQ0EsVUFBRzNCLElBQUltRSxHQUFKLENBQVFpQixNQUFYLEVBQWtCO0FBQ2hCNkosZUFBT0EsUUFBTWpQLElBQUlNLE1BQUosQ0FBVzZFLE9BQVgsR0FBbUIsQ0FBekIsQ0FBUDtBQUNEOztBQUVEO0FBQ0EsVUFBSStKLGVBQWVELE9BQU9qUCxJQUFJWSxTQUFKLENBQWNDLE1BQWQsQ0FBcUJDLEtBQTVCLEdBQW9DZCxJQUFJWSxTQUFKLENBQWNDLE1BQWQsQ0FBcUJFLE9BQXJCLENBQTZCRSxVQUFwRjs7QUFFQTtBQUNBLFVBQUlrTyxvQkFBb0JuUCxJQUFJWSxTQUFKLENBQWNrQyxLQUFkLENBQW9CZ0UsTUFBcEIsR0FBNkJvSSxZQUFyRDtBQUNBLFVBQUdDLG9CQUFvQixDQUF2QixFQUEwQm5QLElBQUlnRSxFQUFKLENBQU9WLEtBQVAsQ0FBYXlJLGFBQWIsQ0FBMkIxRixLQUFLK0ksR0FBTCxDQUFTRCxpQkFBVCxDQUEzQixFQUExQixLQUNLblAsSUFBSWdFLEVBQUosQ0FBT1YsS0FBUCxDQUFhOEksZUFBYixDQUE2QitDLGlCQUE3QjtBQUVOO0FBRUYsR0FwQkQ7O0FBdUJBblAsTUFBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFld0MsWUFBZixHQUE4QixVQUFTd0UsRUFBVCxFQUFhL0UsUUFBYixFQUFzQjtBQUNsRCxTQUFJLElBQUl3RCxJQUFJLENBQVosRUFBZUEsSUFBSTNKLElBQUlZLFNBQUosQ0FBY2tDLEtBQWQsQ0FBb0JnRSxNQUF2QyxFQUErQzZDLEdBQS9DLEVBQW1EO0FBQ2pELFVBQUlhLEtBQUt4SyxJQUFJWSxTQUFKLENBQWNrQyxLQUFkLENBQW9CNkcsQ0FBcEIsQ0FBVDs7QUFFQSxVQUFJd0IsS0FBS0QsR0FBRzFFLENBQUgsR0FBT2dFLEdBQUdoRSxDQUFuQjtBQUFBLFVBQ0k0RSxLQUFLRixHQUFHekUsQ0FBSCxHQUFPK0QsR0FBRy9ELENBRG5CO0FBQUEsVUFFSTRFLE9BQU9oRixLQUFLaUYsSUFBTCxDQUFVSCxLQUFHQSxFQUFILEdBQVFDLEtBQUdBLEVBQXJCLENBRlg7O0FBSUEsVUFBR0MsUUFBUUgsR0FBRzlFLE1BQUgsR0FBWW9FLEdBQUdwRSxNQUExQixFQUFpQztBQUMvQjhFLFdBQUcxRSxDQUFILEdBQU9MLFdBQVdBLFNBQVNLLENBQXBCLEdBQXdCSCxLQUFLeEUsTUFBTCxLQUFnQjdCLElBQUlNLE1BQUosQ0FBV0UsQ0FBMUQ7QUFDQTBLLFdBQUd6RSxDQUFILEdBQU9OLFdBQVdBLFNBQVNNLENBQXBCLEdBQXdCSixLQUFLeEUsTUFBTCxLQUFnQjdCLElBQUlNLE1BQUosQ0FBV0ksQ0FBMUQ7QUFDQVYsWUFBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFld0MsWUFBZixDQUE0QndFLEVBQTVCO0FBQ0Q7QUFDRjtBQUNGLEdBZEQ7O0FBaUJBbEwsTUFBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFlb0UsWUFBZixHQUE4QixVQUFTSyxDQUFULEVBQVc7O0FBRXZDO0FBQ0EsUUFBSTBHLFNBQVNyUCxJQUFJbUUsR0FBSixDQUFRa0UsVUFBckI7QUFBQSxRQUNJaUgsU0FBUyxvQkFEYjtBQUFBLFFBRUlDLGdCQUFnQkYsT0FBT0csT0FBUCxDQUFlRixNQUFmLEVBQXVCLFVBQVVHLENBQVYsRUFBYXhJLENBQWIsRUFBZ0JFLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUMzRCxVQUFHdUIsRUFBRXpILEtBQUYsQ0FBUTZGLEdBQVgsRUFBZTtBQUNiLFlBQUkrQixjQUFjLFVBQVFILEVBQUV6SCxLQUFGLENBQVE2RixHQUFSLENBQVlFLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCMEIsRUFBRXpILEtBQUYsQ0FBUTZGLEdBQVIsQ0FBWUksQ0FBdEMsR0FBd0MsR0FBeEMsR0FBNEN3QixFQUFFekgsS0FBRixDQUFRNkYsR0FBUixDQUFZSyxDQUF4RCxHQUEwRCxHQUExRCxHQUE4RHVCLEVBQUUvRyxPQUFoRSxHQUF3RSxHQUExRjtBQUNELE9BRkQsTUFFSztBQUNILFlBQUlrSCxjQUFjLFVBQVFILEVBQUV6SCxLQUFGLENBQVFxRyxHQUFSLENBQVk3RyxDQUFwQixHQUFzQixHQUF0QixHQUEwQmlJLEVBQUV6SCxLQUFGLENBQVFxRyxHQUFSLENBQVlGLENBQXRDLEdBQXdDLElBQXhDLEdBQTZDc0IsRUFBRXpILEtBQUYsQ0FBUXFHLEdBQVIsQ0FBWUQsQ0FBekQsR0FBMkQsSUFBM0QsR0FBZ0VxQixFQUFFL0csT0FBbEUsR0FBMEUsR0FBNUY7QUFDRDtBQUNELGFBQU9rSCxXQUFQO0FBQ0QsS0FQZSxDQUZwQjs7QUFXQTtBQUNBLFFBQUk0RyxNQUFNLElBQUlDLElBQUosQ0FBUyxDQUFDSixhQUFELENBQVQsRUFBMEIsRUFBQ25PLE1BQU0sNkJBQVAsRUFBMUIsQ0FBVjtBQUFBLFFBQ0l3TyxTQUFTM0ssT0FBTzRLLEdBQVAsSUFBYzVLLE9BQU82SyxTQUFyQixJQUFrQzdLLE1BRC9DO0FBQUEsUUFFSThLLE1BQU1ILE9BQU9JLGVBQVAsQ0FBdUJOLEdBQXZCLENBRlY7O0FBSUE7QUFDQSxRQUFJeEgsTUFBTSxJQUFJK0gsS0FBSixFQUFWO0FBQ0EvSCxRQUFJekMsZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsWUFBVTtBQUNyQ2tELFFBQUVULEdBQUYsQ0FBTTVELEdBQU4sR0FBWTRELEdBQVo7QUFDQVMsUUFBRVQsR0FBRixDQUFNTSxNQUFOLEdBQWUsSUFBZjtBQUNBb0gsYUFBT00sZUFBUCxDQUF1QkgsR0FBdkI7QUFDQS9QLFVBQUltRSxHQUFKLENBQVE2RyxTQUFSO0FBQ0QsS0FMRDtBQU1BOUMsUUFBSXhHLEdBQUosR0FBVXFPLEdBQVY7QUFFRCxHQTdCRDs7QUFnQ0EvUCxNQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWVpTSxVQUFmLEdBQTRCLFlBQVU7QUFDcENDLHlCQUFxQnBRLElBQUlnRSxFQUFKLENBQU8rRyxhQUE1QjtBQUNBNUssY0FBVTBELE1BQVY7QUFDQXdNLGFBQVMsSUFBVDtBQUNELEdBSkQ7O0FBT0FyUSxNQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWVrRixTQUFmLEdBQTJCLFVBQVNrSCxDQUFULEVBQVlDLE1BQVosRUFBb0JDLE1BQXBCLEVBQTRCQyxVQUE1QixFQUF3Q0Msa0JBQXhDLEVBQTREQyxvQkFBNUQsRUFBaUY7O0FBRTFHO0FBQ0EsUUFBSUMsWUFBWUYscUJBQXFCQyxvQkFBckM7QUFDQSxRQUFJRSxlQUFlSCxxQkFBcUJDLG9CQUF4QztBQUNBLFFBQUlHLHVCQUF3QixPQUFPRCxlQUFlLENBQXRCLENBQUQsR0FBNkJBLFlBQXhEO0FBQ0EsUUFBSUUsZ0JBQWdCMUssS0FBSzZDLEVBQUwsR0FBVTdDLEtBQUs2QyxFQUFMLEdBQVU0SCxvQkFBVixHQUFpQyxHQUEvRCxDQU4wRyxDQU10QztBQUNwRVIsTUFBRVUsSUFBRjtBQUNBVixNQUFFdEgsU0FBRjtBQUNBc0gsTUFBRVcsU0FBRixDQUFZVixNQUFaLEVBQW9CQyxNQUFwQjtBQUNBRixNQUFFNUUsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYO0FBQ0EsU0FBSyxJQUFJL0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJaUgsU0FBcEIsRUFBK0JqSCxHQUEvQixFQUFvQztBQUNsQzJHLFFBQUUzRSxNQUFGLENBQVM4RSxVQUFULEVBQW9CLENBQXBCO0FBQ0FILFFBQUVXLFNBQUYsQ0FBWVIsVUFBWixFQUF1QixDQUF2QjtBQUNBSCxRQUFFWSxNQUFGLENBQVNILGFBQVQ7QUFDRDtBQUNEO0FBQ0FULE1BQUU1RyxJQUFGO0FBQ0E0RyxNQUFFYSxPQUFGO0FBRUQsR0FwQkQ7O0FBc0JBblIsTUFBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFla04sU0FBZixHQUEyQixZQUFVO0FBQ25Dbk0sV0FBT29NLElBQVAsQ0FBWXJSLElBQUlNLE1BQUosQ0FBV0MsRUFBWCxDQUFjK1EsU0FBZCxDQUF3QixXQUF4QixDQUFaLEVBQWtELFFBQWxEO0FBQ0QsR0FGRDs7QUFLQXRSLE1BQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZXFOLE9BQWYsR0FBeUIsVUFBU25RLElBQVQsRUFBYzs7QUFFckNwQixRQUFJbUUsR0FBSixDQUFRcU4sU0FBUixHQUFvQnRLLFNBQXBCOztBQUVBLFFBQUdsSCxJQUFJWSxTQUFKLENBQWNPLEtBQWQsQ0FBb0JNLEtBQXBCLENBQTBCQyxHQUExQixJQUFpQyxFQUFwQyxFQUF1Qzs7QUFFckMsVUFBR04sUUFBUSxLQUFYLEVBQWlCOztBQUVmLFlBQUlxUSxNQUFNLElBQUlDLGNBQUosRUFBVjtBQUNBRCxZQUFJSixJQUFKLENBQVMsS0FBVCxFQUFnQnJSLElBQUlZLFNBQUosQ0FBY08sS0FBZCxDQUFvQk0sS0FBcEIsQ0FBMEJDLEdBQTFDO0FBQ0ErUCxZQUFJRSxrQkFBSixHQUF5QixVQUFVQyxJQUFWLEVBQWdCO0FBQ3ZDLGNBQUdILElBQUlJLFVBQUosSUFBa0IsQ0FBckIsRUFBdUI7QUFDckIsZ0JBQUdKLElBQUkvRSxNQUFKLElBQWMsR0FBakIsRUFBcUI7QUFDbkIxTSxrQkFBSW1FLEdBQUosQ0FBUWtFLFVBQVIsR0FBcUJ1SixLQUFLRSxhQUFMLENBQW1CQyxRQUF4QztBQUNBL1Isa0JBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZThOLGVBQWY7QUFDRCxhQUhELE1BR0s7QUFDSEMsc0JBQVFDLEdBQVIsQ0FBWSw2QkFBWjtBQUNBbFMsa0JBQUltRSxHQUFKLENBQVFxTixTQUFSLEdBQW9CLElBQXBCO0FBQ0Q7QUFDRjtBQUNGLFNBVkQ7QUFXQUMsWUFBSVUsSUFBSjtBQUVELE9BakJELE1BaUJLOztBQUVILFlBQUlqSyxNQUFNLElBQUkrSCxLQUFKLEVBQVY7QUFDQS9ILFlBQUl6QyxnQkFBSixDQUFxQixNQUFyQixFQUE2QixZQUFVO0FBQ3JDekYsY0FBSW1FLEdBQUosQ0FBUW1GLE9BQVIsR0FBa0JwQixHQUFsQjtBQUNBbEksY0FBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFlOE4sZUFBZjtBQUNELFNBSEQ7QUFJQTlKLFlBQUl4RyxHQUFKLEdBQVUxQixJQUFJWSxTQUFKLENBQWNPLEtBQWQsQ0FBb0JNLEtBQXBCLENBQTBCQyxHQUFwQztBQUVEO0FBRUYsS0E5QkQsTUE4Qks7QUFDSHVRLGNBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBbFMsVUFBSW1FLEdBQUosQ0FBUXFOLFNBQVIsR0FBb0IsSUFBcEI7QUFDRDtBQUVGLEdBdkNEOztBQTBDQXhSLE1BQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZXdFLElBQWYsR0FBc0IsWUFBVTs7QUFFOUIsUUFBRzFJLElBQUlZLFNBQUosQ0FBY08sS0FBZCxDQUFvQkMsSUFBcEIsSUFBNEIsT0FBL0IsRUFBdUM7O0FBRXJDLFVBQUdwQixJQUFJbUUsR0FBSixDQUFRaUUsUUFBUixJQUFvQixLQUF2QixFQUE2Qjs7QUFFM0IsWUFBR3BJLElBQUltRSxHQUFKLENBQVE2RyxTQUFSLElBQXFCaEwsSUFBSVksU0FBSixDQUFjQyxNQUFkLENBQXFCQyxLQUE3QyxFQUFtRDtBQUNqRGQsY0FBSWdFLEVBQUosQ0FBTzRCLGFBQVA7QUFDQSxjQUFHLENBQUM1RixJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CdEIsTUFBdkIsRUFBK0I2Six1QkFBdUI3SyxJQUFJZ0UsRUFBSixDQUFPK0csYUFBOUIsRUFBL0IsS0FDSy9LLElBQUlnRSxFQUFKLENBQU8rRyxhQUFQLEdBQXVCcUgsaUJBQWlCcFMsSUFBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFld0UsSUFBaEMsQ0FBdkI7QUFDTixTQUpELE1BSUs7QUFDSDtBQUNBLGNBQUcsQ0FBQzFJLElBQUltRSxHQUFKLENBQVFxTixTQUFaLEVBQXVCeFIsSUFBSWdFLEVBQUosQ0FBTytHLGFBQVAsR0FBdUJxSCxpQkFBaUJwUyxJQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWV3RSxJQUFoQyxDQUF2QjtBQUN4QjtBQUVGLE9BWEQsTUFXSzs7QUFFSCxZQUFHMUksSUFBSW1FLEdBQUosQ0FBUW1GLE9BQVIsSUFBbUJwQyxTQUF0QixFQUFnQztBQUM5QmxILGNBQUlnRSxFQUFKLENBQU80QixhQUFQO0FBQ0EsY0FBRyxDQUFDNUYsSUFBSVksU0FBSixDQUFjMEIsSUFBZCxDQUFtQnRCLE1BQXZCLEVBQStCNkosdUJBQXVCN0ssSUFBSWdFLEVBQUosQ0FBTytHLGFBQTlCLEVBQS9CLEtBQ0svSyxJQUFJZ0UsRUFBSixDQUFPK0csYUFBUCxHQUF1QnFILGlCQUFpQnBTLElBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZXdFLElBQWhDLENBQXZCO0FBQ04sU0FKRCxNQUlLO0FBQ0gsY0FBRyxDQUFDMUksSUFBSW1FLEdBQUosQ0FBUXFOLFNBQVosRUFBdUJ4UixJQUFJZ0UsRUFBSixDQUFPK0csYUFBUCxHQUF1QnFILGlCQUFpQnBTLElBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZXdFLElBQWhDLENBQXZCO0FBQ3hCO0FBRUY7QUFFRixLQXpCRCxNQXlCSztBQUNIMUksVUFBSWdFLEVBQUosQ0FBTzRCLGFBQVA7QUFDQSxVQUFHLENBQUM1RixJQUFJWSxTQUFKLENBQWMwQixJQUFkLENBQW1CdEIsTUFBdkIsRUFBK0I2Six1QkFBdUI3SyxJQUFJZ0UsRUFBSixDQUFPK0csYUFBOUIsRUFBL0IsS0FDSy9LLElBQUlnRSxFQUFKLENBQU8rRyxhQUFQLEdBQXVCcUgsaUJBQWlCcFMsSUFBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFld0UsSUFBaEMsQ0FBdkI7QUFDTjtBQUVGLEdBakNEOztBQW9DQTFJLE1BQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZThOLGVBQWYsR0FBaUMsWUFBVTs7QUFFekM7QUFDQSxRQUFHaFMsSUFBSVksU0FBSixDQUFjTyxLQUFkLENBQW9CQyxJQUFwQixJQUE0QixPQUEvQixFQUF1Qzs7QUFFckMsVUFBR3BCLElBQUltRSxHQUFKLENBQVFpRSxRQUFSLElBQW9CLEtBQXBCLElBQTZCcEksSUFBSW1FLEdBQUosQ0FBUWtFLFVBQVIsSUFBc0JuQixTQUF0RCxFQUFnRTtBQUM5RGxILFlBQUltRSxHQUFKLENBQVEyRyxjQUFSLEdBQXlCc0gsaUJBQWlCQyxLQUFqQixDQUF6QjtBQUNELE9BRkQsTUFFSztBQUNIO0FBQ0F4SCwrQkFBdUI3SyxJQUFJbUUsR0FBSixDQUFRMkcsY0FBL0I7QUFDQSxZQUFHLENBQUM5SyxJQUFJbUUsR0FBSixDQUFRcU4sU0FBWixFQUFzQjtBQUNwQnhSLGNBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZW9JLElBQWY7QUFDQXRNLGNBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZXdFLElBQWY7QUFDRDtBQUVGO0FBRUYsS0FkRCxNQWNLO0FBQ0gxSSxVQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWVvSSxJQUFmO0FBQ0F0TSxVQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWV3RSxJQUFmO0FBQ0Q7QUFFRixHQXRCRDs7QUF5QkExSSxNQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWVvSSxJQUFmLEdBQXNCLFlBQVU7O0FBRTlCO0FBQ0F0TSxRQUFJZ0UsRUFBSixDQUFPZ0IsVUFBUDtBQUNBaEYsUUFBSWdFLEVBQUosQ0FBT3FCLFVBQVA7QUFDQXJGLFFBQUlnRSxFQUFKLENBQU93QixVQUFQO0FBQ0F4RixRQUFJZ0UsRUFBSixDQUFPOEIsV0FBUDtBQUNBOUYsUUFBSWdFLEVBQUosQ0FBTzJCLGVBQVA7QUFDQTNGLFFBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZTJCLG9CQUFmOztBQUVBO0FBQ0E3RixRQUFJWSxTQUFKLENBQWN3QixXQUFkLENBQTBCcUosY0FBMUIsR0FBMkN6RSxTQUFTaEgsSUFBSVksU0FBSixDQUFjd0IsV0FBZCxDQUEwQmxCLEtBQW5DLENBQTNDO0FBRUQsR0FiRDs7QUFnQkFsQixNQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWUrRyxLQUFmLEdBQXVCLFlBQVU7O0FBRS9CLFFBQUdkLFVBQVUsT0FBVixFQUFtQm5LLElBQUlZLFNBQUosQ0FBY08sS0FBZCxDQUFvQkMsSUFBdkMsQ0FBSCxFQUFnRDtBQUM5Q3BCLFVBQUltRSxHQUFKLENBQVFpRSxRQUFSLEdBQW1CcEksSUFBSVksU0FBSixDQUFjTyxLQUFkLENBQW9CTSxLQUFwQixDQUEwQkMsR0FBMUIsQ0FBOEI0USxNQUE5QixDQUFxQ3RTLElBQUlZLFNBQUosQ0FBY08sS0FBZCxDQUFvQk0sS0FBcEIsQ0FBMEJDLEdBQTFCLENBQThCb0YsTUFBOUIsR0FBdUMsQ0FBNUUsQ0FBbkI7QUFDQTlHLFVBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZXFOLE9BQWYsQ0FBdUJ2UixJQUFJbUUsR0FBSixDQUFRaUUsUUFBL0I7QUFDRCxLQUhELE1BR0s7QUFDSHBJLFVBQUlnRSxFQUFKLENBQU9FLE9BQVAsQ0FBZThOLGVBQWY7QUFDRDtBQUVGLEdBVEQ7O0FBY0E7O0FBR0FoUyxNQUFJZ0UsRUFBSixDQUFPRSxPQUFQLENBQWV3SyxlQUFmOztBQUVBMU8sTUFBSWdFLEVBQUosQ0FBT0UsT0FBUCxDQUFlK0csS0FBZjtBQUlELENBMTNDRDs7QUE0M0NBOztBQUVBN0csT0FBT0MsVUFBUCxHQUFvQixTQUFTa08sa0JBQVQsQ0FBNEJDLFdBQTVCLEVBQXlDQyxNQUF6QyxFQUFpRDtBQUNuRSxPQUFLLElBQUlDLFFBQVQsSUFBcUJELE1BQXJCLEVBQTZCO0FBQzNCLFFBQUlBLE9BQU9DLFFBQVAsS0FBb0JELE9BQU9DLFFBQVAsRUFBaUJDLFdBQXJDLElBQ0hGLE9BQU9DLFFBQVAsRUFBaUJDLFdBQWpCLEtBQWlDdk8sTUFEbEMsRUFDMEM7QUFDeENvTyxrQkFBWUUsUUFBWixJQUF3QkYsWUFBWUUsUUFBWixLQUF5QixFQUFqRDtBQUNBSCx5QkFBbUJDLFlBQVlFLFFBQVosQ0FBbkIsRUFBMENELE9BQU9DLFFBQVAsQ0FBMUM7QUFDRCxLQUpELE1BSU87QUFDTEYsa0JBQVlFLFFBQVosSUFBd0JELE9BQU9DLFFBQVAsQ0FBeEI7QUFDRDtBQUNGO0FBQ0QsU0FBT0YsV0FBUDtBQUNELENBWEQ7O0FBYUF2TixPQUFPbU4sZ0JBQVAsR0FBMkIsWUFBVTtBQUNuQyxTQUFRbk4sT0FBTzJOLHFCQUFQLElBQ04zTixPQUFPNE4sMkJBREQsSUFFTjVOLE9BQU82Tix3QkFGRCxJQUdON04sT0FBTzhOLHNCQUhELElBSU45TixPQUFPK04sdUJBSkQsSUFLTixVQUFTQyxRQUFULEVBQWtCO0FBQ2hCaE8sV0FBTytKLFVBQVAsQ0FBa0JpRSxRQUFsQixFQUE0QixPQUFPLEVBQW5DO0FBQ0QsR0FQSDtBQVFELENBVHlCLEVBQTFCOztBQVdBaE8sT0FBTzRGLHNCQUFQLEdBQWtDLFlBQVc7QUFDM0MsU0FBTzVGLE9BQU9tTCxvQkFBUCxJQUNMbkwsT0FBT2lPLGlDQURGLElBRUxqTyxPQUFPa08sOEJBRkYsSUFHTGxPLE9BQU9tTyw0QkFIRixJQUlMbk8sT0FBT29PLDZCQUpGLElBS0xDLFlBTEY7QUFNRCxDQVArQixFQUFoQzs7QUFTQSxTQUFTdE0sUUFBVCxDQUFrQnVNLEdBQWxCLEVBQXNCO0FBQ3BCO0FBQ0E7QUFDQSxNQUFJQyxpQkFBaUIsa0NBQXJCO0FBQ0FELFFBQU1BLElBQUkvRCxPQUFKLENBQVlnRSxjQUFaLEVBQTRCLFVBQVMvRCxDQUFULEVBQVl4SSxDQUFaLEVBQWVFLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQ3BELFdBQU9ILElBQUlBLENBQUosR0FBUUUsQ0FBUixHQUFZQSxDQUFaLEdBQWdCQyxDQUFoQixHQUFvQkEsQ0FBM0I7QUFDRixHQUZLLENBQU47QUFHQSxNQUFJcU0sU0FBUyw0Q0FBNENDLElBQTVDLENBQWlESCxHQUFqRCxDQUFiO0FBQ0EsU0FBT0UsU0FBUztBQUNaeE0sT0FBRzBNLFNBQVNGLE9BQU8sQ0FBUCxDQUFULEVBQW9CLEVBQXBCLENBRFM7QUFFWnRNLE9BQUd3TSxTQUFTRixPQUFPLENBQVAsQ0FBVCxFQUFvQixFQUFwQixDQUZTO0FBR1pyTSxPQUFHdU0sU0FBU0YsT0FBTyxDQUFQLENBQVQsRUFBb0IsRUFBcEI7QUFIUyxHQUFULEdBSUgsSUFKSjtBQUtEOztBQUVELFNBQVMxRixLQUFULENBQWVsTixNQUFmLEVBQXVCK1MsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQy9CLFNBQU94TixLQUFLdU4sR0FBTCxDQUFTdk4sS0FBS3dOLEdBQUwsQ0FBU2hULE1BQVQsRUFBaUIrUyxHQUFqQixDQUFULEVBQWdDQyxHQUFoQyxDQUFQO0FBQ0Q7O0FBRUQsU0FBUzFKLFNBQVQsQ0FBbUJySixLQUFuQixFQUEwQmdDLEtBQTFCLEVBQWlDO0FBQy9CLFNBQU9BLE1BQU1nUixPQUFOLENBQWNoVCxLQUFkLElBQXVCLENBQUMsQ0FBL0I7QUFDRDs7QUFHRDs7QUFFQW1FLE9BQU9vTCxNQUFQLEdBQWdCLEVBQWhCOztBQUVBcEwsT0FBTzhPLFdBQVAsR0FBcUIsVUFBUzlULE1BQVQsRUFBaUJDLE1BQWpCLEVBQXdCOztBQUUzQzs7QUFFQTtBQUNBLE1BQUcsT0FBT0QsTUFBUCxJQUFrQixRQUFyQixFQUE4QjtBQUM1QkMsYUFBU0QsTUFBVDtBQUNBQSxhQUFTLGNBQVQ7QUFDRDs7QUFFRDtBQUNBLE1BQUcsQ0FBQ0EsTUFBSixFQUFXO0FBQ1RBLGFBQVMsY0FBVDtBQUNEOztBQUVEO0FBQ0EsTUFBSStULFVBQVU1VCxTQUFTNlQsY0FBVCxDQUF3QmhVLE1BQXhCLENBQWQ7QUFBQSxNQUNJaVUsbUJBQW1CLHdCQUR2QjtBQUFBLE1BRUlDLGVBQWVILFFBQVFJLHNCQUFSLENBQStCRixnQkFBL0IsQ0FGbkI7O0FBSUE7QUFDQSxNQUFHQyxhQUFhck4sTUFBaEIsRUFBdUI7QUFDckIsV0FBTXFOLGFBQWFyTixNQUFiLEdBQXNCLENBQTVCLEVBQThCO0FBQzVCa04sY0FBUUssV0FBUixDQUFvQkYsYUFBYSxDQUFiLENBQXBCO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBLE1BQUloVSxZQUFZQyxTQUFTa1UsYUFBVCxDQUF1QixRQUF2QixDQUFoQjtBQUNBblUsWUFBVW9VLFNBQVYsR0FBc0JMLGdCQUF0Qjs7QUFFQTtBQUNBL1QsWUFBVXFVLEtBQVYsQ0FBZ0JsVCxLQUFoQixHQUF3QixNQUF4QjtBQUNBbkIsWUFBVXFVLEtBQVYsQ0FBZ0I3UyxNQUFoQixHQUF5QixNQUF6Qjs7QUFFQTtBQUNBLE1BQUlyQixTQUFTRixTQUFTNlQsY0FBVCxDQUF3QmhVLE1BQXhCLEVBQWdDd1UsV0FBaEMsQ0FBNEN0VSxTQUE1QyxDQUFiOztBQUVBO0FBQ0EsTUFBR0csVUFBVSxJQUFiLEVBQWtCO0FBQ2hCK1AsV0FBTzFNLElBQVAsQ0FBWSxJQUFJM0QsR0FBSixDQUFRQyxNQUFSLEVBQWdCQyxNQUFoQixDQUFaO0FBQ0Q7QUFFRixDQTNDRDs7QUE2Q0ErRSxPQUFPOE8sV0FBUCxDQUFtQlcsSUFBbkIsR0FBMEIsVUFBU3pVLE1BQVQsRUFBaUIwVSxnQkFBakIsRUFBbUMxQixRQUFuQyxFQUE0Qzs7QUFFcEU7QUFDQSxNQUFJeEIsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsTUFBSUosSUFBSixDQUFTLEtBQVQsRUFBZ0JzRCxnQkFBaEI7QUFDQWxELE1BQUlFLGtCQUFKLEdBQXlCLFVBQVVDLElBQVYsRUFBZ0I7QUFDdkMsUUFBR0gsSUFBSUksVUFBSixJQUFrQixDQUFyQixFQUF1QjtBQUNyQixVQUFHSixJQUFJL0UsTUFBSixJQUFjLEdBQWpCLEVBQXFCO0FBQ25CLFlBQUl4TSxTQUFTMFUsS0FBS0MsS0FBTCxDQUFXakQsS0FBS0UsYUFBTCxDQUFtQkMsUUFBOUIsQ0FBYjtBQUNBOU0sZUFBTzhPLFdBQVAsQ0FBbUI5VCxNQUFuQixFQUEyQkMsTUFBM0I7QUFDQSxZQUFHK1MsUUFBSCxFQUFhQTtBQUNkLE9BSkQsTUFJSztBQUNIaEIsZ0JBQVFDLEdBQVIsQ0FBWSx3Q0FBc0NULElBQUkvRSxNQUF0RDtBQUNBdUYsZ0JBQVFDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNEO0FBQ0Y7QUFDRixHQVhEO0FBWUFULE1BQUlVLElBQUo7QUFFRCxDQW5CRCxDIiwiZmlsZSI6InBhcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZDY3ZDZkY2ViNWViYjZkODA0YSIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKiBBdXRob3IgOiBWaW5jZW50IEdhcnJlYXUgIC0gdmluY2VudGdhcnJlYXUuY29tXG4vKiBNSVQgbGljZW5zZTogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuLyogRGVtbyAvIEdlbmVyYXRvciA6IHZpbmNlbnRnYXJyZWF1LmNvbS9wYXJ0aWNsZXMuanNcbi8qIEdpdEh1YiA6IGdpdGh1Yi5jb20vVmluY2VudEdhcnJlYXUvcGFydGljbGVzLmpzXG4vKiBIb3cgdG8gdXNlPyA6IENoZWNrIHRoZSBHaXRIdWIgUkVBRE1FXG4vKiB2Mi4wLjBcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbnZhciBwSlMgPSBmdW5jdGlvbih0YWdfaWQsIHBhcmFtcyl7XG5cbiAgdmFyIGNhbnZhc19lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnK3RhZ19pZCsnID4gLnBhcnRpY2xlcy1qcy1jYW52YXMtZWwnKTtcblxuICAvKiBwYXJ0aWNsZXMuanMgdmFyaWFibGVzIHdpdGggZGVmYXVsdCB2YWx1ZXMgKi9cbiAgdGhpcy5wSlMgPSB7XG4gICAgY2FudmFzOiB7XG4gICAgICBlbDogY2FudmFzX2VsLFxuICAgICAgdzogY2FudmFzX2VsLm9mZnNldFdpZHRoLFxuICAgICAgaDogY2FudmFzX2VsLm9mZnNldEhlaWdodFxuICAgIH0sXG4gICAgcGFydGljbGVzOiB7XG4gICAgICBudW1iZXI6IHtcbiAgICAgICAgdmFsdWU6IDQwMCxcbiAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGNvbG9yOiB7XG4gICAgICAgIHZhbHVlOiAnI2ZmZidcbiAgICAgIH0sXG4gICAgICBzaGFwZToge1xuICAgICAgICB0eXBlOiAnY2lyY2xlJyxcbiAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgY29sb3I6ICcjZmYwMDAwJ1xuICAgICAgICB9LFxuICAgICAgICBwb2x5Z29uOiB7XG4gICAgICAgICAgbmJfc2lkZXM6IDVcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICBzcmM6ICcnLFxuICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgIGFuaW06IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHNwZWVkOiAyLFxuICAgICAgICAgIG9wYWNpdHlfbWluOiAwLFxuICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIHZhbHVlOiAyMCxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgYW5pbToge1xuICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgc3BlZWQ6IDIwLFxuICAgICAgICAgIHNpemVfbWluOiAwLFxuICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHdpZHRoOiAxXG4gICAgICB9LFxuICAgICAgbW92ZToge1xuICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAyLFxuICAgICAgICBkaXJlY3Rpb246ICdub25lJyxcbiAgICAgICAgcmFuZG9tOiBmYWxzZSxcbiAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxuICAgICAgICBvdXRfbW9kZTogJ291dCcsXG4gICAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgIHJvdGF0ZVg6IDMwMDAsXG4gICAgICAgICAgcm90YXRlWTogMzAwMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXJyYXk6IFtdXG4gICAgfSxcbiAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICBkZXRlY3Rfb246ICdjYW52YXMnLFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIG9uaG92ZXI6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgbW9kZTogJ2dyYWInXG4gICAgICAgIH0sXG4gICAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgbW9kZTogJ3B1c2gnXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1vZGVzOiB7XG4gICAgICAgIGdyYWI6e1xuICAgICAgICAgIGRpc3RhbmNlOiAxMDAsXG4gICAgICAgICAgbGluZV9saW5rZWQ6e1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYnViYmxlOntcbiAgICAgICAgICBkaXN0YW5jZTogMjAwLFxuICAgICAgICAgIHNpemU6IDgwLFxuICAgICAgICAgIGR1cmF0aW9uOiAwLjRcbiAgICAgICAgfSxcbiAgICAgICAgcmVwdWxzZTp7XG4gICAgICAgICAgZGlzdGFuY2U6IDIwMCxcbiAgICAgICAgICBkdXJhdGlvbjogMC40XG4gICAgICAgIH0sXG4gICAgICAgIHB1c2g6e1xuICAgICAgICAgIHBhcnRpY2xlc19uYjogNFxuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6e1xuICAgICAgICAgIHBhcnRpY2xlc19uYjogMlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbW91c2U6e31cbiAgICB9LFxuICAgIHJldGluYV9kZXRlY3Q6IGZhbHNlLFxuICAgIGZuOiB7XG4gICAgICBpbnRlcmFjdDoge30sXG4gICAgICBtb2Rlczoge30sXG4gICAgICB2ZW5kb3JzOnt9XG4gICAgfSxcbiAgICB0bXA6IHt9XG4gIH07XG5cbiAgdmFyIHBKUyA9IHRoaXMucEpTO1xuXG4gIC8qIHBhcmFtcyBzZXR0aW5ncyAqL1xuICBpZihwYXJhbXMpe1xuICAgIE9iamVjdC5kZWVwRXh0ZW5kKHBKUywgcGFyYW1zKTtcbiAgfVxuXG4gIHBKUy50bXAub2JqID0ge1xuICAgIHNpemVfdmFsdWU6IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSxcbiAgICBzaXplX2FuaW1fc3BlZWQ6IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkLFxuICAgIG1vdmVfc3BlZWQ6IHBKUy5wYXJ0aWNsZXMubW92ZS5zcGVlZCxcbiAgICBsaW5lX2xpbmtlZF9kaXN0YW5jZTogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5kaXN0YW5jZSxcbiAgICBsaW5lX2xpbmtlZF93aWR0aDogcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC53aWR0aCxcbiAgICBtb2RlX2dyYWJfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2UsXG4gICAgbW9kZV9idWJibGVfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZSxcbiAgICBtb2RlX2J1YmJsZV9zaXplOiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSxcbiAgICBtb2RlX3JlcHVsc2VfZGlzdGFuY2U6IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2VcbiAgfTtcblxuXG4gIHBKUy5mbi5yZXRpbmFJbml0ID0gZnVuY3Rpb24oKXtcblxuICAgIGlmKHBKUy5yZXRpbmFfZGV0ZWN0ICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSl7XG4gICAgICBwSlMuY2FudmFzLnB4cmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbzsgXG4gICAgICBwSlMudG1wLnJldGluYSA9IHRydWU7XG4gICAgfSBcbiAgICBlbHNle1xuICAgICAgcEpTLmNhbnZhcy5weHJhdGlvID0gMTtcbiAgICAgIHBKUy50bXAucmV0aW5hID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcEpTLmNhbnZhcy53ID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRXaWR0aCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuY2FudmFzLmggPSBwSlMuY2FudmFzLmVsLm9mZnNldEhlaWdodCAqIHBKUy5jYW52YXMucHhyYXRpbztcblxuICAgIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSA9IHBKUy50bXAub2JqLnNpemVfdmFsdWUgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uc3BlZWQgPSBwSlMudG1wLm9iai5zaXplX2FuaW1fc3BlZWQgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLnBhcnRpY2xlcy5tb3ZlLnNwZWVkID0gcEpTLnRtcC5vYmoubW92ZV9zcGVlZCAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlID0gcEpTLnRtcC5vYmoubGluZV9saW5rZWRfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZSA9IHBKUy50bXAub2JqLm1vZGVfZ3JhYl9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9kaXN0YW5jZSAqIHBKUy5jYW52YXMucHhyYXRpbztcbiAgICBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoID0gcEpTLnRtcC5vYmoubGluZV9saW5rZWRfd2lkdGggKiBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLnNpemUgPSBwSlMudG1wLm9iai5tb2RlX2J1YmJsZV9zaXplICogcEpTLmNhbnZhcy5weHJhdGlvO1xuICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UgPSBwSlMudG1wLm9iai5tb2RlX3JlcHVsc2VfZGlzdGFuY2UgKiBwSlMuY2FudmFzLnB4cmF0aW87XG5cbiAgfTtcblxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gY2FudmFzIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5jYW52YXNJbml0ID0gZnVuY3Rpb24oKXtcbiAgICBwSlMuY2FudmFzLmN0eCA9IHBKUy5jYW52YXMuZWwuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfTtcblxuICBwSlMuZm4uY2FudmFzU2l6ZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICBwSlMuY2FudmFzLmVsLndpZHRoID0gcEpTLmNhbnZhcy53O1xuICAgIHBKUy5jYW52YXMuZWwuaGVpZ2h0ID0gcEpTLmNhbnZhcy5oO1xuXG4gICAgaWYocEpTICYmIHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5yZXNpemUpe1xuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgIHBKUy5jYW52YXMudyA9IHBKUy5jYW52YXMuZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgcEpTLmNhbnZhcy5oID0gcEpTLmNhbnZhcy5lbC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAvKiByZXNpemUgY2FudmFzICovXG4gICAgICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xuICAgICAgICAgICAgcEpTLmNhbnZhcy53ICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgICAgIHBKUy5jYW52YXMuaCAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcEpTLmNhbnZhcy5lbC53aWR0aCA9IHBKUy5jYW52YXMudztcbiAgICAgICAgICBwSlMuY2FudmFzLmVsLmhlaWdodCA9IHBKUy5jYW52YXMuaDtcblxuICAgICAgICAgIC8qIHJlcGFpbnQgY2FudmFzIG9uIGFuaW0gZGlzYWJsZWQgKi9cbiAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSl7XG4gICAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRW1wdHkoKTtcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUoKTtcbiAgICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5kZW5zaXR5QXV0b1BhcnRpY2xlcygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAvKiBkZW5zaXR5IHBhcnRpY2xlcyBlbmFibGVkICovXG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG5cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4uY2FudmFzUGFpbnQgPSBmdW5jdGlvbigpe1xuICAgIHBKUy5jYW52YXMuY3R4LmZpbGxSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcbiAgfTtcblxuICBwSlMuZm4uY2FudmFzQ2xlYXIgPSBmdW5jdGlvbigpe1xuICAgIHBKUy5jYW52YXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBwSlMuY2FudmFzLncsIHBKUy5jYW52YXMuaCk7XG4gIH07XG5cblxuICAvKiAtLS0tLS0tLS0gcEpTIGZ1bmN0aW9ucyAtIHBhcnRpY2xlcyAtLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5wYXJ0aWNsZSA9IGZ1bmN0aW9uKGNvbG9yLCBvcGFjaXR5LCBwb3NpdGlvbil7XG5cbiAgICAvKiBzaXplICovXG4gICAgdGhpcy5yYWRpdXMgPSAocEpTLnBhcnRpY2xlcy5zaXplLnJhbmRvbSA/IE1hdGgucmFuZG9tKCkgOiAxKSAqIHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZTtcbiAgICBpZihwSlMucGFydGljbGVzLnNpemUuYW5pbS5lbmFibGUpe1xuICAgICAgdGhpcy5zaXplX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgdGhpcy52cyA9IHBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnNwZWVkIC8gMTAwO1xuICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMuc2l6ZS5hbmltLnN5bmMpe1xuICAgICAgICB0aGlzLnZzID0gdGhpcy52cyAqIE1hdGgucmFuZG9tKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogcG9zaXRpb24gKi9cbiAgICB0aGlzLnggPSBwb3NpdGlvbiA/IHBvc2l0aW9uLnggOiBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy53O1xuICAgIHRoaXMueSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG5cbiAgICAvKiBjaGVjayBwb3NpdGlvbiAgLSBpbnRvIHRoZSBjYW52YXMgKi9cbiAgICBpZih0aGlzLnggPiBwSlMuY2FudmFzLncgLSB0aGlzLnJhZGl1cyoyKSB0aGlzLnggPSB0aGlzLnggLSB0aGlzLnJhZGl1cztcbiAgICBlbHNlIGlmKHRoaXMueCA8IHRoaXMucmFkaXVzKjIpIHRoaXMueCA9IHRoaXMueCArIHRoaXMucmFkaXVzO1xuICAgIGlmKHRoaXMueSA+IHBKUy5jYW52YXMuaCAtIHRoaXMucmFkaXVzKjIpIHRoaXMueSA9IHRoaXMueSAtIHRoaXMucmFkaXVzO1xuICAgIGVsc2UgaWYodGhpcy55IDwgdGhpcy5yYWRpdXMqMikgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5yYWRpdXM7XG5cbiAgICAvKiBjaGVjayBwb3NpdGlvbiAtIGF2b2lkIG92ZXJsYXAgKi9cbiAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKXtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcCh0aGlzLCBwb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLyogY29sb3IgKi9cbiAgICB0aGlzLmNvbG9yID0ge307XG4gICAgaWYodHlwZW9mKGNvbG9yLnZhbHVlKSA9PSAnb2JqZWN0Jyl7XG5cbiAgICAgIGlmKGNvbG9yLnZhbHVlIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICB2YXIgY29sb3Jfc2VsZWN0ZWQgPSBjb2xvci52YWx1ZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwSlMucGFydGljbGVzLmNvbG9yLnZhbHVlLmxlbmd0aCldO1xuICAgICAgICB0aGlzLmNvbG9yLnJnYiA9IGhleFRvUmdiKGNvbG9yX3NlbGVjdGVkKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBpZihjb2xvci52YWx1ZS5yICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5nICE9IHVuZGVmaW5lZCAmJiBjb2xvci52YWx1ZS5iICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgdGhpcy5jb2xvci5yZ2IgPSB7XG4gICAgICAgICAgICByOiBjb2xvci52YWx1ZS5yLFxuICAgICAgICAgICAgZzogY29sb3IudmFsdWUuZyxcbiAgICAgICAgICAgIGI6IGNvbG9yLnZhbHVlLmJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoY29sb3IudmFsdWUuaCAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUucyAhPSB1bmRlZmluZWQgJiYgY29sb3IudmFsdWUubCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgIHRoaXMuY29sb3IuaHNsID0ge1xuICAgICAgICAgICAgaDogY29sb3IudmFsdWUuaCxcbiAgICAgICAgICAgIHM6IGNvbG9yLnZhbHVlLnMsXG4gICAgICAgICAgICBsOiBjb2xvci52YWx1ZS5sXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZSBpZihjb2xvci52YWx1ZSA9PSAncmFuZG9tJyl7XG4gICAgICB0aGlzLmNvbG9yLnJnYiA9IHtcbiAgICAgICAgcjogKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyNTUgLSAwICsgMSkpICsgMCksXG4gICAgICAgIGc6IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMjU1IC0gMCArIDEpKSArIDApLFxuICAgICAgICBiOiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDI1NSAtIDAgKyAxKSkgKyAwKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKHR5cGVvZihjb2xvci52YWx1ZSkgPT0gJ3N0cmluZycpe1xuICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgdGhpcy5jb2xvci5yZ2IgPSBoZXhUb1JnYih0aGlzLmNvbG9yLnZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiBvcGFjaXR5ICovXG4gICAgdGhpcy5vcGFjaXR5ID0gKHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5yYW5kb20gPyBNYXRoLnJhbmRvbSgpIDogMSkgKiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWU7XG4gICAgaWYocEpTLnBhcnRpY2xlcy5vcGFjaXR5LmFuaW0uZW5hYmxlKXtcbiAgICAgIHRoaXMub3BhY2l0eV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgIHRoaXMudm8gPSBwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zcGVlZCAvIDEwMDtcbiAgICAgIGlmKCFwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5zeW5jKXtcbiAgICAgICAgdGhpcy52byA9IHRoaXMudm8gKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIGFuaW1hdGlvbiAtIHZlbG9jaXR5IGZvciBzcGVlZCAqL1xuICAgIHZhciB2ZWxiYXNlID0ge31cbiAgICBzd2l0Y2gocEpTLnBhcnRpY2xlcy5tb3ZlLmRpcmVjdGlvbil7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAsIHk6LTEgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLjUsIHk6LTAuNSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIHZlbGJhc2UgPSB7IHg6MSwgeTotMCB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20tcmlnaHQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4OjAuNSwgeTowLjUgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5OjEgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tLWxlZnQnOlxuICAgICAgICB2ZWxiYXNlID0geyB4Oi0wLjUsIHk6MSB9O1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDotMSwgeTowIH07XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3RvcC1sZWZ0JzpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDotMC41LCB5Oi0wLjUgfTtcbiAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmVsYmFzZSA9IHsgeDowLCB5OjAgfTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5zdHJhaWdodCl7XG4gICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54O1xuICAgICAgdGhpcy52eSA9IHZlbGJhc2UueTtcbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5yYW5kb20pe1xuICAgICAgICB0aGlzLnZ4ID0gdGhpcy52eCAqIChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgKiAoTWF0aC5yYW5kb20oKSk7XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnZ4ID0gdmVsYmFzZS54ICsgTWF0aC5yYW5kb20oKS0wLjU7XG4gICAgICB0aGlzLnZ5ID0gdmVsYmFzZS55ICsgTWF0aC5yYW5kb20oKS0wLjU7XG4gICAgfVxuXG4gICAgLy8gdmFyIHRoZXRhID0gMi4wICogTWF0aC5QSSAqIE1hdGgucmFuZG9tKCk7XG4gICAgLy8gdGhpcy52eCA9IE1hdGguY29zKHRoZXRhKTtcbiAgICAvLyB0aGlzLnZ5ID0gTWF0aC5zaW4odGhldGEpO1xuXG4gICAgdGhpcy52eF9pID0gdGhpcy52eDtcbiAgICB0aGlzLnZ5X2kgPSB0aGlzLnZ5O1xuXG4gICAgXG5cbiAgICAvKiBpZiBzaGFwZSBpcyBpbWFnZSAqL1xuXG4gICAgdmFyIHNoYXBlX3R5cGUgPSBwSlMucGFydGljbGVzLnNoYXBlLnR5cGU7XG4gICAgaWYodHlwZW9mKHNoYXBlX3R5cGUpID09ICdvYmplY3QnKXtcbiAgICAgIGlmKHNoYXBlX3R5cGUgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgIHZhciBzaGFwZV9zZWxlY3RlZCA9IHNoYXBlX3R5cGVbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hhcGVfdHlwZS5sZW5ndGgpXTtcbiAgICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3NlbGVjdGVkO1xuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5zaGFwZSA9IHNoYXBlX3R5cGU7XG4gICAgfVxuXG4gICAgaWYodGhpcy5zaGFwZSA9PSAnaW1hZ2UnKXtcbiAgICAgIHZhciBzaCA9IHBKUy5wYXJ0aWNsZXMuc2hhcGU7XG4gICAgICB0aGlzLmltZyA9IHtcbiAgICAgICAgc3JjOiBzaC5pbWFnZS5zcmMsXG4gICAgICAgIHJhdGlvOiBzaC5pbWFnZS53aWR0aCAvIHNoLmltYWdlLmhlaWdodFxuICAgICAgfVxuICAgICAgaWYoIXRoaXMuaW1nLnJhdGlvKSB0aGlzLmltZy5yYXRpbyA9IDE7XG4gICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnICYmIHBKUy50bXAuc291cmNlX3N2ZyAhPSB1bmRlZmluZWQpe1xuICAgICAgICBwSlMuZm4udmVuZG9ycy5jcmVhdGVTdmdJbWcodGhpcyk7XG4gICAgICAgIGlmKHBKUy50bXAucHVzaGluZyl7XG4gICAgICAgICAgdGhpcy5pbWcubG9hZGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBcblxuICB9O1xuXG5cbiAgcEpTLmZuLnBhcnRpY2xlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcCA9IHRoaXM7XG5cbiAgICBpZihwLnJhZGl1c19idWJibGUgIT0gdW5kZWZpbmVkKXtcbiAgICAgIHZhciByYWRpdXMgPSBwLnJhZGl1c19idWJibGU7IFxuICAgIH1lbHNle1xuICAgICAgdmFyIHJhZGl1cyA9IHAucmFkaXVzO1xuICAgIH1cblxuICAgIGlmKHAub3BhY2l0eV9idWJibGUgIT0gdW5kZWZpbmVkKXtcbiAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5X2J1YmJsZTtcbiAgICB9ZWxzZXtcbiAgICAgIHZhciBvcGFjaXR5ID0gcC5vcGFjaXR5O1xuICAgIH1cblxuICAgIGlmKHAuY29sb3IucmdiKXtcbiAgICAgIHZhciBjb2xvcl92YWx1ZSA9ICdyZ2JhKCcrcC5jb2xvci5yZ2IucisnLCcrcC5jb2xvci5yZ2IuZysnLCcrcC5jb2xvci5yZ2IuYisnLCcrb3BhY2l0eSsnKSc7XG4gICAgfWVsc2V7XG4gICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnK3AuY29sb3IuaHNsLmgrJywnK3AuY29sb3IuaHNsLnMrJyUsJytwLmNvbG9yLmhzbC5sKyclLCcrb3BhY2l0eSsnKSc7XG4gICAgfVxuXG4gICAgcEpTLmNhbnZhcy5jdHguZmlsbFN0eWxlID0gY29sb3JfdmFsdWU7XG4gICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICBzd2l0Y2gocC5zaGFwZSl7XG5cbiAgICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LmFyYyhwLngsIHAueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2VkZ2UnOlxuICAgICAgICBwSlMuY2FudmFzLmN0eC5yZWN0KHAueC1yYWRpdXMsIHAueS1yYWRpdXMsIHJhZGl1cyoyLCByYWRpdXMqMik7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAndHJpYW5nbGUnOlxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUocEpTLmNhbnZhcy5jdHgsIHAueC1yYWRpdXMsIHAueStyYWRpdXMgLyAxLjY2LCByYWRpdXMqMiwgMywgMik7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9seWdvbic6XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZShcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eCxcbiAgICAgICAgICBwLnggLSByYWRpdXMgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMuNSksIC8vIHN0YXJ0WFxuICAgICAgICAgIHAueSAtIHJhZGl1cyAvICgyLjY2LzMuNSksIC8vIHN0YXJ0WVxuICAgICAgICAgIHJhZGl1cyoyLjY2IC8gKHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcy8zKSwgLy8gc2lkZUxlbmd0aFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuc2hhcGUucG9seWdvbi5uYl9zaWRlcywgLy8gc2lkZUNvdW50TnVtZXJhdG9yXG4gICAgICAgICAgMSAvLyBzaWRlQ291bnREZW5vbWluYXRvclxuICAgICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0YXInOlxuICAgICAgICBwSlMuZm4udmVuZG9ycy5kcmF3U2hhcGUoXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgsXG4gICAgICAgICAgcC54IC0gcmFkaXVzKjIgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzQpLCAvLyBzdGFydFhcbiAgICAgICAgICBwLnkgLSByYWRpdXMgLyAoMioyLjY2LzMuNSksIC8vIHN0YXJ0WVxuICAgICAgICAgIHJhZGl1cyoyKjIuNjYgLyAocEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLzMpLCAvLyBzaWRlTGVuZ3RoXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5zaGFwZS5wb2x5Z29uLm5iX3NpZGVzLCAvLyBzaWRlQ291bnROdW1lcmF0b3JcbiAgICAgICAgICAyIC8vIHNpZGVDb3VudERlbm9taW5hdG9yXG4gICAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW1hZ2UnOlxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXcoKXtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICBpbWdfb2JqLFxuICAgICAgICAgICAgcC54LXJhZGl1cyxcbiAgICAgICAgICAgIHAueS1yYWRpdXMsXG4gICAgICAgICAgICByYWRpdXMqMixcbiAgICAgICAgICAgIHJhZGl1cyoyIC8gcC5pbWcucmF0aW9cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocEpTLnRtcC5pbWdfdHlwZSA9PSAnc3ZnJyl7XG4gICAgICAgICAgdmFyIGltZ19vYmogPSBwLmltZy5vYmo7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHZhciBpbWdfb2JqID0gcEpTLnRtcC5pbWdfb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaW1nX29iail7XG4gICAgICAgICAgZHJhdygpO1xuICAgICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gICAgcEpTLmNhbnZhcy5jdHguY2xvc2VQYXRoKCk7XG5cbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnN0cm9rZS53aWR0aCA+IDApe1xuICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlU3R5bGUgPSBwSlMucGFydGljbGVzLnNoYXBlLnN0cm9rZS5jb2xvcjtcbiAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuc3Ryb2tlLndpZHRoO1xuICAgICAgcEpTLmNhbnZhcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIFxuICAgIHBKUy5jYW52YXMuY3R4LmZpbGwoKTtcbiAgICBcbiAgfTtcblxuXG4gIHBKUy5mbi5wYXJ0aWNsZXNDcmVhdGUgPSBmdW5jdGlvbigpe1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZTsgaSsrKSB7XG4gICAgICBwSlMucGFydGljbGVzLmFycmF5LnB1c2gobmV3IHBKUy5mbi5wYXJ0aWNsZShwSlMucGFydGljbGVzLmNvbG9yLCBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpKTtcbiAgICB9XG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc1VwZGF0ZSA9IGZ1bmN0aW9uKCl7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGg7IGkrKyl7XG5cbiAgICAgIC8qIHRoZSBwYXJ0aWNsZSAqL1xuICAgICAgdmFyIHAgPSBwSlMucGFydGljbGVzLmFycmF5W2ldO1xuXG4gICAgICAvLyB2YXIgZCA9ICggZHggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCAtIHAueCApICogZHggKyAoIGR5ID0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgLSBwLnkgKSAqIGR5O1xuICAgICAgLy8gdmFyIGYgPSAtQkFOR19TSVpFIC8gZDtcbiAgICAgIC8vIGlmICggZCA8IEJBTkdfU0laRSApIHtcbiAgICAgIC8vICAgICB2YXIgdCA9IE1hdGguYXRhbjIoIGR5LCBkeCApO1xuICAgICAgLy8gICAgIHAudnggPSBmICogTWF0aC5jb3ModCk7XG4gICAgICAvLyAgICAgcC52eSA9IGYgKiBNYXRoLnNpbih0KTtcbiAgICAgIC8vIH1cblxuICAgICAgLyogbW92ZSB0aGUgcGFydGljbGUgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgICB2YXIgbXMgPSBwSlMucGFydGljbGVzLm1vdmUuc3BlZWQvMjtcbiAgICAgICAgcC54ICs9IHAudnggKiBtcztcbiAgICAgICAgcC55ICs9IHAudnkgKiBtcztcbiAgICAgIH1cblxuICAgICAgLyogY2hhbmdlIG9wYWNpdHkgc3RhdHVzICovXG4gICAgICBpZihwSlMucGFydGljbGVzLm9wYWNpdHkuYW5pbS5lbmFibGUpIHtcbiAgICAgICAgaWYocC5vcGFjaXR5X3N0YXR1cyA9PSB0cnVlKSB7XG4gICAgICAgICAgaWYocC5vcGFjaXR5ID49IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSkgcC5vcGFjaXR5X3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgIHAub3BhY2l0eSArPSBwLnZvO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgaWYocC5vcGFjaXR5IDw9IHBKUy5wYXJ0aWNsZXMub3BhY2l0eS5hbmltLm9wYWNpdHlfbWluKSBwLm9wYWNpdHlfc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICBwLm9wYWNpdHkgLT0gcC52bztcbiAgICAgICAgfVxuICAgICAgICBpZihwLm9wYWNpdHkgPCAwKSBwLm9wYWNpdHkgPSAwO1xuICAgICAgfVxuXG4gICAgICAvKiBjaGFuZ2Ugc2l6ZSAqL1xuICAgICAgaWYocEpTLnBhcnRpY2xlcy5zaXplLmFuaW0uZW5hYmxlKXtcbiAgICAgICAgaWYocC5zaXplX3N0YXR1cyA9PSB0cnVlKXtcbiAgICAgICAgICBpZihwLnJhZGl1cyA+PSBwSlMucGFydGljbGVzLnNpemUudmFsdWUpIHAuc2l6ZV9zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICBwLnJhZGl1cyArPSBwLnZzO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBpZihwLnJhZGl1cyA8PSBwSlMucGFydGljbGVzLnNpemUuYW5pbS5zaXplX21pbikgcC5zaXplX3N0YXR1cyA9IHRydWU7XG4gICAgICAgICAgcC5yYWRpdXMgLT0gcC52cztcbiAgICAgICAgfVxuICAgICAgICBpZihwLnJhZGl1cyA8IDApIHAucmFkaXVzID0gMDtcbiAgICAgIH1cblxuICAgICAgLyogY2hhbmdlIHBhcnRpY2xlIHBvc2l0aW9uIGlmIGl0IGlzIG91dCBvZiBjYW52YXMgKi9cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XG4gICAgICAgIHZhciBuZXdfcG9zID0ge1xuICAgICAgICAgIHhfbGVmdDogcC5yYWRpdXMsXG4gICAgICAgICAgeF9yaWdodDogIHBKUy5jYW52YXMudyxcbiAgICAgICAgICB5X3RvcDogcC5yYWRpdXMsXG4gICAgICAgICAgeV9ib3R0b206IHBKUy5jYW52YXMuaFxuICAgICAgICB9XG4gICAgICB9ZWxzZXtcbiAgICAgICAgdmFyIG5ld19wb3MgPSB7XG4gICAgICAgICAgeF9sZWZ0OiAtcC5yYWRpdXMsXG4gICAgICAgICAgeF9yaWdodDogcEpTLmNhbnZhcy53ICsgcC5yYWRpdXMsXG4gICAgICAgICAgeV90b3A6IC1wLnJhZGl1cyxcbiAgICAgICAgICB5X2JvdHRvbTogcEpTLmNhbnZhcy5oICsgcC5yYWRpdXNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihwLnggLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMudyl7XG4gICAgICAgIHAueCA9IG5ld19wb3MueF9sZWZ0O1xuICAgICAgICBwLnkgPSBNYXRoLnJhbmRvbSgpICogcEpTLmNhbnZhcy5oO1xuICAgICAgfVxuICAgICAgZWxzZSBpZihwLnggKyBwLnJhZGl1cyA8IDApe1xuICAgICAgICBwLnggPSBuZXdfcG9zLnhfcmlnaHQ7XG4gICAgICAgIHAueSA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG4gICAgICB9XG4gICAgICBpZihwLnkgLSBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCl7XG4gICAgICAgIHAueSA9IG5ld19wb3MueV90b3A7XG4gICAgICAgIHAueCA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHAueSArIHAucmFkaXVzIDwgMCl7XG4gICAgICAgIHAueSA9IG5ld19wb3MueV9ib3R0b207XG4gICAgICAgIHAueCA9IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLnc7XG4gICAgICB9XG5cbiAgICAgIC8qIG91dCBvZiBjYW52YXMgbW9kZXMgKi9cbiAgICAgIHN3aXRjaChwSlMucGFydGljbGVzLm1vdmUub3V0X21vZGUpe1xuICAgICAgICBjYXNlICdib3VuY2UnOlxuICAgICAgICAgIGlmIChwLnggKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgIGVsc2UgaWYgKHAueCAtIHAucmFkaXVzIDwgMCkgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgIGlmIChwLnkgKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMuaCkgcC52eSA9IC1wLnZ5O1xuICAgICAgICAgIGVsc2UgaWYgKHAueSAtIHAucmFkaXVzIDwgMCkgcC52eSA9IC1wLnZ5O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLyogZXZlbnRzICovXG4gICAgICBpZihpc0luQXJyYXkoJ2dyYWInLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5tb2RlKSl7XG4gICAgICAgIHBKUy5mbi5tb2Rlcy5ncmFiUGFydGljbGUocCk7XG4gICAgICB9XG5cbiAgICAgIGlmKGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XG4gICAgICAgIHBKUy5mbi5tb2Rlcy5idWJibGVQYXJ0aWNsZShwKTtcbiAgICAgIH1cblxuICAgICAgaWYoaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgfHwgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSkpe1xuICAgICAgICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlKHApO1xuICAgICAgfVxuXG4gICAgICAvKiBpbnRlcmFjdGlvbiBhdXRvIGJldHdlZW4gcGFydGljbGVzICovXG4gICAgICBpZihwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmVuYWJsZSB8fCBwSlMucGFydGljbGVzLm1vdmUuYXR0cmFjdC5lbmFibGUpe1xuICAgICAgICBmb3IodmFyIGogPSBpICsgMTsgaiA8IHBKUy5wYXJ0aWNsZXMuYXJyYXkubGVuZ3RoOyBqKyspe1xuICAgICAgICAgIHZhciBwMiA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbal07XG5cbiAgICAgICAgICAvKiBsaW5rIHBhcnRpY2xlcyAqL1xuICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZW5hYmxlKXtcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5saW5rUGFydGljbGVzKHAscDIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIGF0dHJhY3QgcGFydGljbGVzICovXG4gICAgICAgICAgaWYocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3QuZW5hYmxlKXtcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5hdHRyYWN0UGFydGljbGVzKHAscDIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIGJvdW5jZSBwYXJ0aWNsZXMgKi9cbiAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuYm91bmNlKXtcbiAgICAgICAgICAgIHBKUy5mbi5pbnRlcmFjdC5ib3VuY2VQYXJ0aWNsZXMocCxwMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgfVxuXG4gIH07XG5cbiAgcEpTLmZuLnBhcnRpY2xlc0RyYXcgPSBmdW5jdGlvbigpe1xuXG4gICAgLyogY2xlYXIgY2FudmFzICovXG4gICAgcEpTLmNhbnZhcy5jdHguY2xlYXJSZWN0KDAsIDAsIHBKUy5jYW52YXMudywgcEpTLmNhbnZhcy5oKTtcblxuICAgIC8qIHVwZGF0ZSBlYWNoIHBhcnRpY2xlcyBwYXJhbSAqL1xuICAgIHBKUy5mbi5wYXJ0aWNsZXNVcGRhdGUoKTtcblxuICAgIC8qIGRyYXcgZWFjaCBwYXJ0aWNsZSAqL1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwID0gcEpTLnBhcnRpY2xlcy5hcnJheVtpXTtcbiAgICAgIHAuZHJhdygpO1xuICAgIH1cblxuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSA9IGZ1bmN0aW9uKCl7XG4gICAgcEpTLnBhcnRpY2xlcy5hcnJheSA9IFtdO1xuICB9O1xuXG4gIHBKUy5mbi5wYXJ0aWNsZXNSZWZyZXNoID0gZnVuY3Rpb24oKXtcblxuICAgIC8qIGluaXQgYWxsICovXG4gICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uY2hlY2tBbmltRnJhbWUpO1xuICAgIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgIHBKUy50bXAuc291cmNlX3N2ZyA9IHVuZGVmaW5lZDtcbiAgICBwSlMudG1wLmltZ19vYmogPSB1bmRlZmluZWQ7XG4gICAgcEpTLnRtcC5jb3VudF9zdmcgPSAwO1xuICAgIHBKUy5mbi5wYXJ0aWNsZXNFbXB0eSgpO1xuICAgIHBKUy5mbi5jYW52YXNDbGVhcigpO1xuICAgIFxuICAgIC8qIHJlc3RhcnQgKi9cbiAgICBwSlMuZm4udmVuZG9ycy5zdGFydCgpO1xuXG4gIH07XG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSBwYXJ0aWNsZXMgaW50ZXJhY3Rpb24gLS0tLS0tLS0tLS0tICovXG5cbiAgcEpTLmZuLmludGVyYWN0LmxpbmtQYXJ0aWNsZXMgPSBmdW5jdGlvbihwMSwgcDIpe1xuXG4gICAgdmFyIGR4ID0gcDEueCAtIHAyLngsXG4gICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgIGRpc3QgPSBNYXRoLnNxcnQoZHgqZHggKyBkeSpkeSk7XG5cbiAgICAvKiBkcmF3IGEgbGluZSBiZXR3ZWVuIHAxIGFuZCBwMiBpZiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGVtIGlzIHVuZGVyIHRoZSBjb25maWcgZGlzdGFuY2UgKi9cbiAgICBpZihkaXN0IDw9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2Upe1xuXG4gICAgICB2YXIgb3BhY2l0eV9saW5lID0gcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5vcGFjaXR5IC0gKGRpc3QgLyAoMS9wSlMucGFydGljbGVzLmxpbmVfbGlua2VkLm9wYWNpdHkpKSAvIHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuZGlzdGFuY2U7XG5cbiAgICAgIGlmKG9wYWNpdHlfbGluZSA+IDApeyAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvKiBzdHlsZSAqL1xuICAgICAgICB2YXIgY29sb3JfbGluZSA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3JfcmdiX2xpbmU7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoJytjb2xvcl9saW5lLnIrJywnK2NvbG9yX2xpbmUuZysnLCcrY29sb3JfbGluZS5iKycsJytvcGFjaXR5X2xpbmUrJyknO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lV2lkdGggPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLndpZHRoO1xuICAgICAgICAvL3BKUy5jYW52YXMuY3R4LmxpbmVDYXAgPSAncm91bmQnOyAvKiBwZXJmb3JtYW5jZSBpc3N1ZSAqL1xuICAgICAgICBcbiAgICAgICAgLyogcGF0aCAqL1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgcEpTLmNhbnZhcy5jdHgubW92ZVRvKHAxLngsIHAxLnkpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lVG8ocDIueCwgcDIueSk7XG4gICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4uaW50ZXJhY3QuYXR0cmFjdFBhcnRpY2xlcyAgPSBmdW5jdGlvbihwMSwgcDIpe1xuXG4gICAgLyogY29uZGVuc2VkIHBhcnRpY2xlcyAqL1xuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuXG4gICAgaWYoZGlzdCA8PSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmRpc3RhbmNlKXtcblxuICAgICAgdmFyIGF4ID0gZHgvKHBKUy5wYXJ0aWNsZXMubW92ZS5hdHRyYWN0LnJvdGF0ZVgqMTAwMCksXG4gICAgICAgICAgYXkgPSBkeS8ocEpTLnBhcnRpY2xlcy5tb3ZlLmF0dHJhY3Qucm90YXRlWSoxMDAwKTtcblxuICAgICAgcDEudnggLT0gYXg7XG4gICAgICBwMS52eSAtPSBheTtcblxuICAgICAgcDIudnggKz0gYXg7XG4gICAgICBwMi52eSArPSBheTtcblxuICAgIH1cbiAgICBcblxuICB9XG5cblxuICBwSlMuZm4uaW50ZXJhY3QuYm91bmNlUGFydGljbGVzID0gZnVuY3Rpb24ocDEsIHAyKXtcblxuICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICBkeSA9IHAxLnkgLSBwMi55LFxuICAgICAgICBkaXN0ID0gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpLFxuICAgICAgICBkaXN0X3AgPSBwMS5yYWRpdXMrcDIucmFkaXVzO1xuXG4gICAgaWYoZGlzdCA8PSBkaXN0X3Ape1xuICAgICAgcDEudnggPSAtcDEudng7XG4gICAgICBwMS52eSA9IC1wMS52eTtcblxuICAgICAgcDIudnggPSAtcDIudng7XG4gICAgICBwMi52eSA9IC1wMi52eTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyogLS0tLS0tLS0tLSBwSlMgZnVuY3Rpb25zIC0gbW9kZXMgZXZlbnRzIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzID0gZnVuY3Rpb24obmIsIHBvcyl7XG5cbiAgICBwSlMudG1wLnB1c2hpbmcgPSB0cnVlO1xuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5iOyBpKyspe1xuICAgICAgcEpTLnBhcnRpY2xlcy5hcnJheS5wdXNoKFxuICAgICAgICBuZXcgcEpTLmZuLnBhcnRpY2xlKFxuICAgICAgICAgIHBKUy5wYXJ0aWNsZXMuY29sb3IsXG4gICAgICAgICAgcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd4JzogcG9zID8gcG9zLnBvc194IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudyxcbiAgICAgICAgICAgICd5JzogcG9zID8gcG9zLnBvc195IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMuaFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgaWYoaSA9PSBuYi0xKXtcbiAgICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpe1xuICAgICAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgcEpTLnRtcC5wdXNoaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzID0gZnVuY3Rpb24obmIpe1xuXG4gICAgcEpTLnBhcnRpY2xlcy5hcnJheS5zcGxpY2UoMCwgbmIpO1xuICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgIHBKUy5mbi5wYXJ0aWNsZXNEcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4ubW9kZXMuYnViYmxlUGFydGljbGUgPSBmdW5jdGlvbihwKXtcblxuICAgIC8qIG9uIGhvdmVyIGV2ZW50ICovXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIGlzSW5BcnJheSgnYnViYmxlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkpe1xuXG4gICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeCxcbiAgICAgICAgICBkeV9tb3VzZSA9IHAueSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195LFxuICAgICAgICAgIGRpc3RfbW91c2UgPSBNYXRoLnNxcnQoZHhfbW91c2UqZHhfbW91c2UgKyBkeV9tb3VzZSpkeV9tb3VzZSksXG4gICAgICAgICAgcmF0aW8gPSAxIC0gZGlzdF9tb3VzZSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kaXN0YW5jZTtcblxuICAgICAgZnVuY3Rpb24gaW5pdCgpe1xuICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gcC5vcGFjaXR5O1xuICAgICAgICBwLnJhZGl1c19idWJibGUgPSBwLnJhZGl1cztcbiAgICAgIH1cblxuICAgICAgLyogbW91c2Vtb3ZlIC0gY2hlY2sgcmF0aW8gKi9cbiAgICAgIGlmKGRpc3RfbW91c2UgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLmRpc3RhbmNlKXtcblxuICAgICAgICBpZihyYXRpbyA+PSAwICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJyl7XG4gICAgICAgICAgXG4gICAgICAgICAgLyogc2l6ZSAqL1xuICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplICE9IHBKUy5wYXJ0aWNsZXMuc2l6ZS52YWx1ZSl7XG5cbiAgICAgICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplID4gcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlKXtcbiAgICAgICAgICAgICAgdmFyIHNpemUgPSBwLnJhZGl1cyArIChwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSpyYXRpbyk7XG4gICAgICAgICAgICAgIGlmKHNpemUgPj0gMCl7XG4gICAgICAgICAgICAgICAgcC5yYWRpdXNfYnViYmxlID0gc2l6ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIHZhciBkaWYgPSBwLnJhZGl1cyAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgc2l6ZSA9IHAucmFkaXVzIC0gKGRpZipyYXRpbyk7XG4gICAgICAgICAgICAgIGlmKHNpemUgPiAwKXtcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSBzaXplO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBwLnJhZGl1c19idWJibGUgPSAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBvcGFjaXR5ICovXG4gICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgIT0gcEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlKXtcblxuICAgICAgICAgICAgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkgPiBwSlMucGFydGljbGVzLm9wYWNpdHkudmFsdWUpe1xuICAgICAgICAgICAgICB2YXIgb3BhY2l0eSA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KnJhdGlvO1xuICAgICAgICAgICAgICBpZihvcGFjaXR5ID4gcC5vcGFjaXR5ICYmIG9wYWNpdHkgPD0gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHkpe1xuICAgICAgICAgICAgICAgIHAub3BhY2l0eV9idWJibGUgPSBvcGFjaXR5O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgdmFyIG9wYWNpdHkgPSBwLm9wYWNpdHkgLSAocEpTLnBhcnRpY2xlcy5vcGFjaXR5LnZhbHVlLXBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KSpyYXRpbztcbiAgICAgICAgICAgICAgaWYob3BhY2l0eSA8IHAub3BhY2l0eSAmJiBvcGFjaXR5ID49IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5vcGFjaXR5KXtcbiAgICAgICAgICAgICAgICBwLm9wYWNpdHlfYnViYmxlID0gb3BhY2l0eTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfWVsc2V7XG4gICAgICAgIGluaXQoKTtcbiAgICAgIH1cblxuXG4gICAgICAvKiBtb3VzZWxlYXZlICovXG4gICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPT0gJ21vdXNlbGVhdmUnKXtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgfVxuICAgIFxuICAgIH1cblxuICAgIC8qIG9uIGNsaWNrIGV2ZW50ICovXG4gICAgZWxzZSBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUgJiYgaXNJbkFycmF5KCdidWJibGUnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSl7XG5cblxuICAgICAgaWYocEpTLnRtcC5idWJibGVfY2xpY2tpbmcpe1xuICAgICAgICB2YXIgZHhfbW91c2UgPSBwLnggLSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeCxcbiAgICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ksXG4gICAgICAgICAgICBkaXN0X21vdXNlID0gTWF0aC5zcXJ0KGR4X21vdXNlKmR4X21vdXNlICsgZHlfbW91c2UqZHlfbW91c2UpLFxuICAgICAgICAgICAgdGltZV9zcGVudCA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3RpbWUpLzEwMDA7XG5cbiAgICAgICAgaWYodGltZV9zcGVudCA+IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbil7XG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfZHVyYXRpb25fZW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRpbWVfc3BlbnQgPiBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24qMil7XG4gICAgICAgICAgcEpTLnRtcC5idWJibGVfY2xpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICBwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGZ1bmN0aW9uIHByb2Nlc3MoYnViYmxlX3BhcmFtLCBwYXJ0aWNsZXNfcGFyYW0sIHBfb2JqX2J1YmJsZSwgcF9vYmosIGlkKXtcblxuICAgICAgICBpZihidWJibGVfcGFyYW0gIT0gcGFydGljbGVzX3BhcmFtKXtcblxuICAgICAgICAgIGlmKCFwSlMudG1wLmJ1YmJsZV9kdXJhdGlvbl9lbmQpe1xuICAgICAgICAgICAgaWYoZGlzdF9tb3VzZSA8PSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZGlzdGFuY2Upe1xuICAgICAgICAgICAgICBpZihwX29ial9idWJibGUgIT0gdW5kZWZpbmVkKSB2YXIgb2JqID0gcF9vYmpfYnViYmxlO1xuICAgICAgICAgICAgICBlbHNlIHZhciBvYmogPSBwX29iajtcbiAgICAgICAgICAgICAgaWYob2JqICE9IGJ1YmJsZV9wYXJhbSl7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcF9vYmogLSAodGltZV9zcGVudCAqIChwX29iaiAtIGJ1YmJsZV9wYXJhbSkgLyBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGlmKGlkID09ICdzaXplJykgcC5yYWRpdXNfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBpZihpZCA9PSAnc2l6ZScpIHAucmFkaXVzX2J1YmJsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYocF9vYmpfYnViYmxlICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgIHZhciB2YWx1ZV90bXAgPSBwX29iaiAtICh0aW1lX3NwZW50ICogKHBfb2JqIC0gYnViYmxlX3BhcmFtKSAvIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmJ1YmJsZS5kdXJhdGlvbiksXG4gICAgICAgICAgICAgICAgICBkaWYgPSBidWJibGVfcGFyYW0gLSB2YWx1ZV90bXA7XG4gICAgICAgICAgICAgICAgICB2YWx1ZSA9IGJ1YmJsZV9wYXJhbSArIGRpZjtcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ3NpemUnKSBwLnJhZGl1c19idWJibGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgaWYoaWQgPT0gJ29wYWNpdHknKSBwLm9wYWNpdHlfYnViYmxlID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICBpZihwSlMudG1wLmJ1YmJsZV9jbGlja2luZyl7XG4gICAgICAgIC8qIHNpemUgKi9cbiAgICAgICAgcHJvY2VzcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5idWJibGUuc2l6ZSwgcEpTLnBhcnRpY2xlcy5zaXplLnZhbHVlLCBwLnJhZGl1c19idWJibGUsIHAucmFkaXVzLCAnc2l6ZScpO1xuICAgICAgICAvKiBvcGFjaXR5ICovXG4gICAgICAgIHByb2Nlc3MocEpTLmludGVyYWN0aXZpdHkubW9kZXMuYnViYmxlLm9wYWNpdHksIHBKUy5wYXJ0aWNsZXMub3BhY2l0eS52YWx1ZSwgcC5vcGFjaXR5X2J1YmJsZSwgcC5vcGFjaXR5LCAnb3BhY2l0eScpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4ubW9kZXMucmVwdWxzZVBhcnRpY2xlID0gZnVuY3Rpb24ocCl7XG5cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25ob3Zlci5lbmFibGUgJiYgaXNJbkFycmF5KCdyZXB1bHNlJywgcEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIubW9kZSkgJiYgcEpTLmludGVyYWN0aXZpdHkuc3RhdHVzID09ICdtb3VzZW1vdmUnKSB7XG5cbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXG4gICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKTtcblxuICAgICAgdmFyIG5vcm1WZWMgPSB7eDogZHhfbW91c2UvZGlzdF9tb3VzZSwgeTogZHlfbW91c2UvZGlzdF9tb3VzZX0sXG4gICAgICAgICAgcmVwdWxzZVJhZGl1cyA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZGlzdGFuY2UsXG4gICAgICAgICAgdmVsb2NpdHkgPSAxMDAsXG4gICAgICAgICAgcmVwdWxzZUZhY3RvciA9IGNsYW1wKCgxL3JlcHVsc2VSYWRpdXMpKigtMSpNYXRoLnBvdyhkaXN0X21vdXNlL3JlcHVsc2VSYWRpdXMsMikrMSkqcmVwdWxzZVJhZGl1cyp2ZWxvY2l0eSwgMCwgNTApO1xuICAgICAgXG4gICAgICB2YXIgcG9zID0ge1xuICAgICAgICB4OiBwLnggKyBub3JtVmVjLnggKiByZXB1bHNlRmFjdG9yLFxuICAgICAgICB5OiBwLnkgKyBub3JtVmVjLnkgKiByZXB1bHNlRmFjdG9yXG4gICAgICB9XG5cbiAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XG4gICAgICAgIGlmKHBvcy54IC0gcC5yYWRpdXMgPiAwICYmIHBvcy54ICsgcC5yYWRpdXMgPCBwSlMuY2FudmFzLncpIHAueCA9IHBvcy54O1xuICAgICAgICBpZihwb3MueSAtIHAucmFkaXVzID4gMCAmJiBwb3MueSArIHAucmFkaXVzIDwgcEpTLmNhbnZhcy5oKSBwLnkgPSBwb3MueTtcbiAgICAgIH1lbHNle1xuICAgICAgICBwLnggPSBwb3MueDtcbiAgICAgICAgcC55ID0gcG9zLnk7XG4gICAgICB9XG4gICAgXG4gICAgfVxuXG5cbiAgICBlbHNlIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSAmJiBpc0luQXJyYXkoJ3JlcHVsc2UnLCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5tb2RlKSkge1xuXG4gICAgICBpZighcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCl7XG4gICAgICAgIHBKUy50bXAucmVwdWxzZV9jb3VudCsrO1xuICAgICAgICBpZihwSlMudG1wLnJlcHVsc2VfY291bnQgPT0gcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGgpe1xuICAgICAgICAgIHBKUy50bXAucmVwdWxzZV9maW5pc2ggPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKHBKUy50bXAucmVwdWxzZV9jbGlja2luZyl7XG5cbiAgICAgICAgdmFyIHJlcHVsc2VSYWRpdXMgPSBNYXRoLnBvdyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5yZXB1bHNlLmRpc3RhbmNlLzYsIDMpO1xuXG4gICAgICAgIHZhciBkeCA9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLmNsaWNrX3Bvc194IC0gcC54LFxuICAgICAgICAgICAgZHkgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5jbGlja19wb3NfeSAtIHAueSxcbiAgICAgICAgICAgIGQgPSBkeCpkeCArIGR5KmR5O1xuXG4gICAgICAgIHZhciBmb3JjZSA9IC1yZXB1bHNlUmFkaXVzIC8gZCAqIDE7XG5cbiAgICAgICAgZnVuY3Rpb24gcHJvY2Vzcygpe1xuXG4gICAgICAgICAgdmFyIGYgPSBNYXRoLmF0YW4yKGR5LGR4KTtcbiAgICAgICAgICBwLnZ4ID0gZm9yY2UgKiBNYXRoLmNvcyhmKTtcbiAgICAgICAgICBwLnZ5ID0gZm9yY2UgKiBNYXRoLnNpbihmKTtcblxuICAgICAgICAgIGlmKHBKUy5wYXJ0aWNsZXMubW92ZS5vdXRfbW9kZSA9PSAnYm91bmNlJyl7XG4gICAgICAgICAgICB2YXIgcG9zID0ge1xuICAgICAgICAgICAgICB4OiBwLnggKyBwLnZ4LFxuICAgICAgICAgICAgICB5OiBwLnkgKyBwLnZ5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocG9zLnggKyBwLnJhZGl1cyA+IHBKUy5jYW52YXMudykgcC52eCA9IC1wLnZ4O1xuICAgICAgICAgICAgZWxzZSBpZiAocG9zLnggLSBwLnJhZGl1cyA8IDApIHAudnggPSAtcC52eDtcbiAgICAgICAgICAgIGlmIChwb3MueSArIHAucmFkaXVzID4gcEpTLmNhbnZhcy5oKSBwLnZ5ID0gLXAudnk7XG4gICAgICAgICAgICBlbHNlIGlmIChwb3MueSAtIHAucmFkaXVzIDwgMCkgcC52eSA9IC1wLnZ5O1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGVmYXVsdFxuICAgICAgICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xuICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGJhbmcgLSBzbG93IG1vdGlvbiBtb2RlXG4gICAgICAgIC8vIGlmKCFwSlMudG1wLnJlcHVsc2VfZmluaXNoKXtcbiAgICAgICAgLy8gICBpZihkIDw9IHJlcHVsc2VSYWRpdXMpe1xuICAgICAgICAvLyAgICAgcHJvY2VzcygpO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgcHJvY2VzcygpO1xuICAgICAgICAvLyB9XG4gICAgICAgIFxuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICBpZihwSlMudG1wLnJlcHVsc2VfY2xpY2tpbmcgPT0gZmFsc2Upe1xuXG4gICAgICAgICAgcC52eCA9IHAudnhfaTtcbiAgICAgICAgICBwLnZ5ID0gcC52eV9pO1xuICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG5cbiAgcEpTLmZuLm1vZGVzLmdyYWJQYXJ0aWNsZSA9IGZ1bmN0aW9uKHApe1xuXG4gICAgaWYocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uaG92ZXIuZW5hYmxlICYmIHBKUy5pbnRlcmFjdGl2aXR5LnN0YXR1cyA9PSAnbW91c2Vtb3ZlJyl7XG5cbiAgICAgIHZhciBkeF9tb3VzZSA9IHAueCAtIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194LFxuICAgICAgICAgIGR5X21vdXNlID0gcC55IC0gcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3ksXG4gICAgICAgICAgZGlzdF9tb3VzZSA9IE1hdGguc3FydChkeF9tb3VzZSpkeF9tb3VzZSArIGR5X21vdXNlKmR5X21vdXNlKTtcblxuICAgICAgLyogZHJhdyBhIGxpbmUgYmV0d2VlbiB0aGUgY3Vyc29yIGFuZCB0aGUgcGFydGljbGUgaWYgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlbSBpcyB1bmRlciB0aGUgY29uZmlnIGRpc3RhbmNlICovXG4gICAgICBpZihkaXN0X21vdXNlIDw9IHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIuZGlzdGFuY2Upe1xuXG4gICAgICAgIHZhciBvcGFjaXR5X2xpbmUgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5ncmFiLmxpbmVfbGlua2VkLm9wYWNpdHkgLSAoZGlzdF9tb3VzZSAvICgxL3BKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLmdyYWIubGluZV9saW5rZWQub3BhY2l0eSkpIC8gcEpTLmludGVyYWN0aXZpdHkubW9kZXMuZ3JhYi5kaXN0YW5jZTtcblxuICAgICAgICBpZihvcGFjaXR5X2xpbmUgPiAwKXtcblxuICAgICAgICAgIC8qIHN0eWxlICovXG4gICAgICAgICAgdmFyIGNvbG9yX2xpbmUgPSBwSlMucGFydGljbGVzLmxpbmVfbGlua2VkLmNvbG9yX3JnYl9saW5lO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoJytjb2xvcl9saW5lLnIrJywnK2NvbG9yX2xpbmUuZysnLCcrY29sb3JfbGluZS5iKycsJytvcGFjaXR5X2xpbmUrJyknO1xuICAgICAgICAgIHBKUy5jYW52YXMuY3R4LmxpbmVXaWR0aCA9IHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQud2lkdGg7XG4gICAgICAgICAgLy9wSlMuY2FudmFzLmN0eC5saW5lQ2FwID0gJ3JvdW5kJzsgLyogcGVyZm9ybWFuY2UgaXNzdWUgKi9cbiAgICAgICAgICBcbiAgICAgICAgICAvKiBwYXRoICovXG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgcEpTLmNhbnZhcy5jdHgubW92ZVRvKHAueCwgcC55KTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5saW5lVG8ocEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3gsIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195KTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICBwSlMuY2FudmFzLmN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9O1xuXG5cblxuICAvKiAtLS0tLS0tLS0tIHBKUyBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xuXG4gIHBKUy5mbi52ZW5kb3JzLmV2ZW50c0xpc3RlbmVycyA9IGZ1bmN0aW9uKCl7XG5cbiAgICAvKiBldmVudHMgdGFyZ2V0IGVsZW1lbnQgKi9cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5kZXRlY3Rfb24gPT0gJ3dpbmRvdycpe1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwgPSB3aW5kb3c7XG4gICAgfWVsc2V7XG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbCA9IHBKUy5jYW52YXMuZWw7XG4gICAgfVxuXG5cbiAgICAvKiBkZXRlY3QgbW91c2UgcG9zIC0gb24gaG92ZXIgLyBjbGljayBldmVudCAqL1xuICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmhvdmVyLmVuYWJsZSB8fCBwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xuXG4gICAgICAvKiBlbCBvbiBtb3VzZW1vdmUgKi9cbiAgICAgIHBKUy5pbnRlcmFjdGl2aXR5LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmVsID09IHdpbmRvdyl7XG4gICAgICAgICAgdmFyIHBvc194ID0gZS5jbGllbnRYLFxuICAgICAgICAgICAgICBwb3NfeSA9IGUuY2xpZW50WTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIHZhciBwb3NfeCA9IGUub2Zmc2V0WCB8fCBlLmNsaWVudFgsXG4gICAgICAgICAgICAgIHBvc195ID0gZS5vZmZzZXRZIHx8IGUuY2xpZW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ID0gcG9zX3g7XG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc195ID0gcG9zX3k7XG5cbiAgICAgICAgaWYocEpTLnRtcC5yZXRpbmEpe1xuICAgICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ICo9IHBKUy5jYW52YXMucHhyYXRpbztcbiAgICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeSAqPSBwSlMuY2FudmFzLnB4cmF0aW87XG4gICAgICAgIH1cblxuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPSAnbW91c2Vtb3ZlJztcblxuICAgICAgfSk7XG5cbiAgICAgIC8qIGVsIG9uIG9ubW91c2VsZWF2ZSAqL1xuICAgICAgcEpTLmludGVyYWN0aXZpdHkuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIHBKUy5pbnRlcmFjdGl2aXR5Lm1vdXNlLnBvc194ID0gbnVsbDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UucG9zX3kgPSBudWxsO1xuICAgICAgICBwSlMuaW50ZXJhY3Rpdml0eS5zdGF0dXMgPSAnbW91c2VsZWF2ZSc7XG5cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyogb24gY2xpY2sgZXZlbnQgKi9cbiAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5ldmVudHMub25jbGljay5lbmFibGUpe1xuXG4gICAgICBwSlMuaW50ZXJhY3Rpdml0eS5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3ggPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeDtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfcG9zX3kgPSBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZS5wb3NfeTtcbiAgICAgICAgcEpTLmludGVyYWN0aXZpdHkubW91c2UuY2xpY2tfdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgIGlmKHBKUy5pbnRlcmFjdGl2aXR5LmV2ZW50cy5vbmNsaWNrLmVuYWJsZSl7XG5cbiAgICAgICAgICBzd2l0Y2gocEpTLmludGVyYWN0aXZpdHkuZXZlbnRzLm9uY2xpY2subW9kZSl7XG5cbiAgICAgICAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICAgICAgICBpZihwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKXtcbiAgICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucHVzaFBhcnRpY2xlcyhwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiwgcEpTLmludGVyYWN0aXZpdHkubW91c2UpO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBpZihwSlMuaW50ZXJhY3Rpdml0eS5tb2Rlcy5wdXNoLnBhcnRpY2xlc19uYiA9PSAxKXtcbiAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iLCBwSlMuaW50ZXJhY3Rpdml0eS5tb3VzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocEpTLmludGVyYWN0aXZpdHkubW9kZXMucHVzaC5wYXJ0aWNsZXNfbmIgPiAxKXtcbiAgICAgICAgICAgICAgICAgIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnB1c2gucGFydGljbGVzX25iKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdyZW1vdmUnOlxuICAgICAgICAgICAgICBwSlMuZm4ubW9kZXMucmVtb3ZlUGFydGljbGVzKHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlbW92ZS5wYXJ0aWNsZXNfbmIpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2J1YmJsZSc6XG4gICAgICAgICAgICAgIHBKUy50bXAuYnViYmxlX2NsaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdyZXB1bHNlJzpcbiAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NvdW50ID0gMDtcbiAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2ZpbmlzaCA9IGZhbHNlO1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcEpTLnRtcC5yZXB1bHNlX2NsaWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0sIHBKUy5pbnRlcmFjdGl2aXR5Lm1vZGVzLnJlcHVsc2UuZHVyYXRpb24qMTAwMClcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuXG4gIH07XG5cbiAgcEpTLmZuLnZlbmRvcnMuZGVuc2l0eUF1dG9QYXJ0aWNsZXMgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5udW1iZXIuZGVuc2l0eS5lbmFibGUpe1xuXG4gICAgICAvKiBjYWxjIGFyZWEgKi9cbiAgICAgIHZhciBhcmVhID0gcEpTLmNhbnZhcy5lbC53aWR0aCAqIHBKUy5jYW52YXMuZWwuaGVpZ2h0IC8gMTAwMDtcbiAgICAgIGlmKHBKUy50bXAucmV0aW5hKXtcbiAgICAgICAgYXJlYSA9IGFyZWEvKHBKUy5jYW52YXMucHhyYXRpbyoyKTtcbiAgICAgIH1cblxuICAgICAgLyogY2FsYyBudW1iZXIgb2YgcGFydGljbGVzIGJhc2VkIG9uIGRlbnNpdHkgYXJlYSAqL1xuICAgICAgdmFyIG5iX3BhcnRpY2xlcyA9IGFyZWEgKiBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSAvIHBKUy5wYXJ0aWNsZXMubnVtYmVyLmRlbnNpdHkudmFsdWVfYXJlYTtcblxuICAgICAgLyogYWRkIG9yIHJlbW92ZSBYIHBhcnRpY2xlcyAqL1xuICAgICAgdmFyIG1pc3NpbmdfcGFydGljbGVzID0gcEpTLnBhcnRpY2xlcy5hcnJheS5sZW5ndGggLSBuYl9wYXJ0aWNsZXM7XG4gICAgICBpZihtaXNzaW5nX3BhcnRpY2xlcyA8IDApIHBKUy5mbi5tb2Rlcy5wdXNoUGFydGljbGVzKE1hdGguYWJzKG1pc3NpbmdfcGFydGljbGVzKSk7XG4gICAgICBlbHNlIHBKUy5mbi5tb2Rlcy5yZW1vdmVQYXJ0aWNsZXMobWlzc2luZ19wYXJ0aWNsZXMpO1xuXG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5jaGVja092ZXJsYXAgPSBmdW5jdGlvbihwMSwgcG9zaXRpb24pe1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwSlMucGFydGljbGVzLmFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgIHZhciBwMiA9IHBKUy5wYXJ0aWNsZXMuYXJyYXlbaV07XG5cbiAgICAgIHZhciBkeCA9IHAxLnggLSBwMi54LFxuICAgICAgICAgIGR5ID0gcDEueSAtIHAyLnksXG4gICAgICAgICAgZGlzdCA9IE1hdGguc3FydChkeCpkeCArIGR5KmR5KTtcblxuICAgICAgaWYoZGlzdCA8PSBwMS5yYWRpdXMgKyBwMi5yYWRpdXMpe1xuICAgICAgICBwMS54ID0gcG9zaXRpb24gPyBwb3NpdGlvbi54IDogTWF0aC5yYW5kb20oKSAqIHBKUy5jYW52YXMudztcbiAgICAgICAgcDEueSA9IHBvc2l0aW9uID8gcG9zaXRpb24ueSA6IE1hdGgucmFuZG9tKCkgKiBwSlMuY2FudmFzLmg7XG4gICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrT3ZlcmxhcChwMSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cbiAgcEpTLmZuLnZlbmRvcnMuY3JlYXRlU3ZnSW1nID0gZnVuY3Rpb24ocCl7XG5cbiAgICAvKiBzZXQgY29sb3IgdG8gc3ZnIGVsZW1lbnQgKi9cbiAgICB2YXIgc3ZnWG1sID0gcEpTLnRtcC5zb3VyY2Vfc3ZnLFxuICAgICAgICByZ2JIZXggPSAvIyhbMC05QS1GXXszLDZ9KS9naSxcbiAgICAgICAgY29sb3JlZFN2Z1htbCA9IHN2Z1htbC5yZXBsYWNlKHJnYkhleCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHtcbiAgICAgICAgICBpZihwLmNvbG9yLnJnYil7XG4gICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAncmdiYSgnK3AuY29sb3IucmdiLnIrJywnK3AuY29sb3IucmdiLmcrJywnK3AuY29sb3IucmdiLmIrJywnK3Aub3BhY2l0eSsnKSc7XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB2YXIgY29sb3JfdmFsdWUgPSAnaHNsYSgnK3AuY29sb3IuaHNsLmgrJywnK3AuY29sb3IuaHNsLnMrJyUsJytwLmNvbG9yLmhzbC5sKyclLCcrcC5vcGFjaXR5KycpJztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNvbG9yX3ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgIC8qIHByZXBhcmUgdG8gY3JlYXRlIGltZyB3aXRoIGNvbG9yZWQgc3ZnICovXG4gICAgdmFyIHN2ZyA9IG5ldyBCbG9iKFtjb2xvcmVkU3ZnWG1sXSwge3R5cGU6ICdpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgnfSksXG4gICAgICAgIERPTVVSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTCB8fCB3aW5kb3csXG4gICAgICAgIHVybCA9IERPTVVSTC5jcmVhdGVPYmplY3RVUkwoc3ZnKTtcblxuICAgIC8qIGNyZWF0ZSBwYXJ0aWNsZSBpbWcgb2JqICovXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKXtcbiAgICAgIHAuaW1nLm9iaiA9IGltZztcbiAgICAgIHAuaW1nLmxvYWRlZCA9IHRydWU7XG4gICAgICBET01VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICBwSlMudG1wLmNvdW50X3N2ZysrO1xuICAgIH0pO1xuICAgIGltZy5zcmMgPSB1cmw7XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmRlc3Ryb3lwSlMgPSBmdW5jdGlvbigpe1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICBjYW52YXNfZWwucmVtb3ZlKCk7XG4gICAgcEpTRG9tID0gbnVsbDtcbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmRyYXdTaGFwZSA9IGZ1bmN0aW9uKGMsIHN0YXJ0WCwgc3RhcnRZLCBzaWRlTGVuZ3RoLCBzaWRlQ291bnROdW1lcmF0b3IsIHNpZGVDb3VudERlbm9taW5hdG9yKXtcblxuICAgIC8vIEJ5IFByb2dyYW1taW5nIFRob21hcyAtIGh0dHBzOi8vcHJvZ3JhbW1pbmd0aG9tYXMud29yZHByZXNzLmNvbS8yMDEzLzA0LzAzL24tc2lkZWQtc2hhcGVzL1xuICAgIHZhciBzaWRlQ291bnQgPSBzaWRlQ291bnROdW1lcmF0b3IgKiBzaWRlQ291bnREZW5vbWluYXRvcjtcbiAgICB2YXIgZGVjaW1hbFNpZGVzID0gc2lkZUNvdW50TnVtZXJhdG9yIC8gc2lkZUNvdW50RGVub21pbmF0b3I7XG4gICAgdmFyIGludGVyaW9yQW5nbGVEZWdyZWVzID0gKDE4MCAqIChkZWNpbWFsU2lkZXMgLSAyKSkgLyBkZWNpbWFsU2lkZXM7XG4gICAgdmFyIGludGVyaW9yQW5nbGUgPSBNYXRoLlBJIC0gTWF0aC5QSSAqIGludGVyaW9yQW5nbGVEZWdyZWVzIC8gMTgwOyAvLyBjb252ZXJ0IHRvIHJhZGlhbnNcbiAgICBjLnNhdmUoKTtcbiAgICBjLmJlZ2luUGF0aCgpO1xuICAgIGMudHJhbnNsYXRlKHN0YXJ0WCwgc3RhcnRZKTtcbiAgICBjLm1vdmVUbygwLDApO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lkZUNvdW50OyBpKyspIHtcbiAgICAgIGMubGluZVRvKHNpZGVMZW5ndGgsMCk7XG4gICAgICBjLnRyYW5zbGF0ZShzaWRlTGVuZ3RoLDApO1xuICAgICAgYy5yb3RhdGUoaW50ZXJpb3JBbmdsZSk7XG4gICAgfVxuICAgIC8vYy5zdHJva2UoKTtcbiAgICBjLmZpbGwoKTtcbiAgICBjLnJlc3RvcmUoKTtcblxuICB9O1xuXG4gIHBKUy5mbi52ZW5kb3JzLmV4cG9ydEltZyA9IGZ1bmN0aW9uKCl7XG4gICAgd2luZG93Lm9wZW4ocEpTLmNhbnZhcy5lbC50b0RhdGFVUkwoJ2ltYWdlL3BuZycpLCAnX2JsYW5rJyk7XG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5sb2FkSW1nID0gZnVuY3Rpb24odHlwZSl7XG5cbiAgICBwSlMudG1wLmltZ19lcnJvciA9IHVuZGVmaW5lZDtcblxuICAgIGlmKHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjICE9ICcnKXtcblxuICAgICAgaWYodHlwZSA9PSAnc3ZnJyl7XG5cbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMpO1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcbiAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgICAgICAgcEpTLnRtcC5zb3VyY2Vfc3ZnID0gZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlO1xuICAgICAgICAgICAgICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcEpTIC0gSW1hZ2Ugbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgfWVsc2V7XG5cbiAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgcEpTLnRtcC5pbWdfb2JqID0gaW1nO1xuICAgICAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1nLnNyYyA9IHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjO1xuXG4gICAgICB9XG5cbiAgICB9ZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwSlMgLSBObyBpbWFnZS5zcmMnKTtcbiAgICAgIHBKUy50bXAuaW1nX2Vycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgfTtcblxuXG4gIHBKUy5mbi52ZW5kb3JzLmRyYXcgPSBmdW5jdGlvbigpe1xuXG4gICAgaWYocEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlID09ICdpbWFnZScpe1xuXG4gICAgICBpZihwSlMudG1wLmltZ190eXBlID09ICdzdmcnKXtcblxuICAgICAgICBpZihwSlMudG1wLmNvdW50X3N2ZyA+PSBwSlMucGFydGljbGVzLm51bWJlci52YWx1ZSl7XG4gICAgICAgICAgcEpTLmZuLnBhcnRpY2xlc0RyYXcoKTtcbiAgICAgICAgICBpZighcEpTLnBhcnRpY2xlcy5tb3ZlLmVuYWJsZSkgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMuZm4uZHJhd0FuaW1GcmFtZSk7XG4gICAgICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3N0aWxsIGxvYWRpbmcuLi4nKTtcbiAgICAgICAgICBpZighcEpTLnRtcC5pbWdfZXJyb3IpIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfVxuXG4gICAgICB9ZWxzZXtcblxuICAgICAgICBpZihwSlMudG1wLmltZ19vYmogIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgICAgIGlmKCFwSlMucGFydGljbGVzLm1vdmUuZW5hYmxlKSBjYW5jZWxSZXF1ZXN0QW5pbUZyYW1lKHBKUy5mbi5kcmF3QW5pbUZyYW1lKTtcbiAgICAgICAgICBlbHNlIHBKUy5mbi5kcmF3QW5pbUZyYW1lID0gcmVxdWVzdEFuaW1GcmFtZShwSlMuZm4udmVuZG9ycy5kcmF3KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfWVsc2V7XG4gICAgICBwSlMuZm4ucGFydGljbGVzRHJhdygpO1xuICAgICAgaWYoIXBKUy5wYXJ0aWNsZXMubW92ZS5lbmFibGUpIGNhbmNlbFJlcXVlc3RBbmltRnJhbWUocEpTLmZuLmRyYXdBbmltRnJhbWUpO1xuICAgICAgZWxzZSBwSlMuZm4uZHJhd0FuaW1GcmFtZSA9IHJlcXVlc3RBbmltRnJhbWUocEpTLmZuLnZlbmRvcnMuZHJhdyk7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5jaGVja0JlZm9yZURyYXcgPSBmdW5jdGlvbigpe1xuXG4gICAgLy8gaWYgc2hhcGUgaXMgaW1hZ2VcbiAgICBpZihwSlMucGFydGljbGVzLnNoYXBlLnR5cGUgPT0gJ2ltYWdlJyl7XG5cbiAgICAgIGlmKHBKUy50bXAuaW1nX3R5cGUgPT0gJ3N2ZycgJiYgcEpTLnRtcC5zb3VyY2Vfc3ZnID09IHVuZGVmaW5lZCl7XG4gICAgICAgIHBKUy50bXAuY2hlY2tBbmltRnJhbWUgPSByZXF1ZXN0QW5pbUZyYW1lKGNoZWNrKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdpbWFnZXMgbG9hZGVkISBjYW5jZWwgY2hlY2snKTtcbiAgICAgICAgY2FuY2VsUmVxdWVzdEFuaW1GcmFtZShwSlMudG1wLmNoZWNrQW5pbUZyYW1lKTtcbiAgICAgICAgaWYoIXBKUy50bXAuaW1nX2Vycm9yKXtcbiAgICAgICAgICBwSlMuZm4udmVuZG9ycy5pbml0KCk7XG4gICAgICAgICAgcEpTLmZuLnZlbmRvcnMuZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgfWVsc2V7XG4gICAgICBwSlMuZm4udmVuZG9ycy5pbml0KCk7XG4gICAgICBwSlMuZm4udmVuZG9ycy5kcmF3KCk7XG4gICAgfVxuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5pbml0ID0gZnVuY3Rpb24oKXtcblxuICAgIC8qIGluaXQgY2FudmFzICsgcGFydGljbGVzICovXG4gICAgcEpTLmZuLnJldGluYUluaXQoKTtcbiAgICBwSlMuZm4uY2FudmFzSW5pdCgpO1xuICAgIHBKUy5mbi5jYW52YXNTaXplKCk7XG4gICAgcEpTLmZuLmNhbnZhc1BhaW50KCk7XG4gICAgcEpTLmZuLnBhcnRpY2xlc0NyZWF0ZSgpO1xuICAgIHBKUy5mbi52ZW5kb3JzLmRlbnNpdHlBdXRvUGFydGljbGVzKCk7XG5cbiAgICAvKiBwYXJ0aWNsZXMubGluZV9saW5rZWQgLSBjb252ZXJ0IGhleCBjb2xvcnMgdG8gcmdiICovXG4gICAgcEpTLnBhcnRpY2xlcy5saW5lX2xpbmtlZC5jb2xvcl9yZ2JfbGluZSA9IGhleFRvUmdiKHBKUy5wYXJ0aWNsZXMubGluZV9saW5rZWQuY29sb3IpO1xuXG4gIH07XG5cblxuICBwSlMuZm4udmVuZG9ycy5zdGFydCA9IGZ1bmN0aW9uKCl7XG5cbiAgICBpZihpc0luQXJyYXkoJ2ltYWdlJywgcEpTLnBhcnRpY2xlcy5zaGFwZS50eXBlKSl7XG4gICAgICBwSlMudG1wLmltZ190eXBlID0gcEpTLnBhcnRpY2xlcy5zaGFwZS5pbWFnZS5zcmMuc3Vic3RyKHBKUy5wYXJ0aWNsZXMuc2hhcGUuaW1hZ2Uuc3JjLmxlbmd0aCAtIDMpO1xuICAgICAgcEpTLmZuLnZlbmRvcnMubG9hZEltZyhwSlMudG1wLmltZ190eXBlKTtcbiAgICB9ZWxzZXtcbiAgICAgIHBKUy5mbi52ZW5kb3JzLmNoZWNrQmVmb3JlRHJhdygpO1xuICAgIH1cblxuICB9O1xuXG5cblxuXG4gIC8qIC0tLS0tLS0tLS0gcEpTIC0gc3RhcnQgLS0tLS0tLS0tLS0tICovXG5cblxuICBwSlMuZm4udmVuZG9ycy5ldmVudHNMaXN0ZW5lcnMoKTtcblxuICBwSlMuZm4udmVuZG9ycy5zdGFydCgpO1xuICBcblxuXG59O1xuXG4vKiAtLS0tLS0tLS0tIGdsb2JhbCBmdW5jdGlvbnMgLSB2ZW5kb3JzIC0tLS0tLS0tLS0tLSAqL1xuXG5PYmplY3QuZGVlcEV4dGVuZCA9IGZ1bmN0aW9uIGRlZXBFeHRlbmRGdW5jdGlvbihkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gIGZvciAodmFyIHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiZcbiAgICAgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICBkZWVwRXh0ZW5kRnVuY3Rpb24oZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxud2luZG93LnJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgfHxcbiAgICB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgIHx8XG4gICAgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgICB8fFxuICAgIGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KSgpO1xuXG53aW5kb3cuY2FuY2VsUmVxdWVzdEFuaW1GcmFtZSA9ICggZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgICAgICAgICB8fFxuICAgIHdpbmRvdy53ZWJraXRDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cubW96Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XG4gICAgd2luZG93Lm9DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICB8fFxuICAgIHdpbmRvdy5tc0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSAgICAgfHxcbiAgICBjbGVhclRpbWVvdXRcbn0gKSgpO1xuXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpe1xuICAvLyBCeSBUaW0gRG93biAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzU2MjQxMzkvMzQ5MzY1MFxuICAvLyBFeHBhbmQgc2hvcnRoYW5kIGZvcm0gKGUuZy4gXCIwM0ZcIikgdG8gZnVsbCBmb3JtIChlLmcuIFwiMDAzM0ZGXCIpXG4gIHZhciBzaG9ydGhhbmRSZWdleCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XG4gIGhleCA9IGhleC5yZXBsYWNlKHNob3J0aGFuZFJlZ2V4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XG4gICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XG4gIH0pO1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHQgPyB7XG4gICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNilcbiAgfSA6IG51bGw7XG59O1xuXG5mdW5jdGlvbiBjbGFtcChudW1iZXIsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW1iZXIsIG1pbiksIG1heCk7XG59O1xuXG5mdW5jdGlvbiBpc0luQXJyYXkodmFsdWUsIGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5pbmRleE9mKHZhbHVlKSA+IC0xO1xufVxuXG5cbi8qIC0tLS0tLS0tLS0gcGFydGljbGVzLmpzIGZ1bmN0aW9ucyAtIHN0YXJ0IC0tLS0tLS0tLS0tLSAqL1xuXG53aW5kb3cucEpTRG9tID0gW107XG5cbndpbmRvdy5wYXJ0aWNsZXNKUyA9IGZ1bmN0aW9uKHRhZ19pZCwgcGFyYW1zKXtcblxuICAvL2NvbnNvbGUubG9nKHBhcmFtcyk7XG5cbiAgLyogbm8gc3RyaW5nIGlkPyBzbyBpdCdzIG9iamVjdCBwYXJhbXMsIGFuZCBzZXQgdGhlIGlkIHdpdGggZGVmYXVsdCBpZCAqL1xuICBpZih0eXBlb2YodGFnX2lkKSAhPSAnc3RyaW5nJyl7XG4gICAgcGFyYW1zID0gdGFnX2lkO1xuICAgIHRhZ19pZCA9ICdwYXJ0aWNsZXMtanMnO1xuICB9XG5cbiAgLyogbm8gaWQ/IHNldCB0aGUgaWQgdG8gZGVmYXVsdCBpZCAqL1xuICBpZighdGFnX2lkKXtcbiAgICB0YWdfaWQgPSAncGFydGljbGVzLWpzJztcbiAgfVxuXG4gIC8qIHBKUyBlbGVtZW50cyAqL1xuICB2YXIgcEpTX3RhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhZ19pZCksXG4gICAgICBwSlNfY2FudmFzX2NsYXNzID0gJ3BhcnRpY2xlcy1qcy1jYW52YXMtZWwnLFxuICAgICAgZXhpc3RfY2FudmFzID0gcEpTX3RhZy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHBKU19jYW52YXNfY2xhc3MpO1xuXG4gIC8qIHJlbW92ZSBjYW52YXMgaWYgZXhpc3RzIGludG8gdGhlIHBKUyB0YXJnZXQgdGFnICovXG4gIGlmKGV4aXN0X2NhbnZhcy5sZW5ndGgpe1xuICAgIHdoaWxlKGV4aXN0X2NhbnZhcy5sZW5ndGggPiAwKXtcbiAgICAgIHBKU190YWcucmVtb3ZlQ2hpbGQoZXhpc3RfY2FudmFzWzBdKTtcbiAgICB9XG4gIH1cblxuICAvKiBjcmVhdGUgY2FudmFzIGVsZW1lbnQgKi9cbiAgdmFyIGNhbnZhc19lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXNfZWwuY2xhc3NOYW1lID0gcEpTX2NhbnZhc19jbGFzcztcblxuICAvKiBzZXQgc2l6ZSBjYW52YXMgKi9cbiAgY2FudmFzX2VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gIGNhbnZhc19lbC5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcblxuICAvKiBhcHBlbmQgY2FudmFzICovXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdfaWQpLmFwcGVuZENoaWxkKGNhbnZhc19lbCk7XG5cbiAgLyogbGF1bmNoIHBhcnRpY2xlLmpzICovXG4gIGlmKGNhbnZhcyAhPSBudWxsKXtcbiAgICBwSlNEb20ucHVzaChuZXcgcEpTKHRhZ19pZCwgcGFyYW1zKSk7XG4gIH1cblxufTtcblxud2luZG93LnBhcnRpY2xlc0pTLmxvYWQgPSBmdW5jdGlvbih0YWdfaWQsIHBhdGhfY29uZmlnX2pzb24sIGNhbGxiYWNrKXtcblxuICAvKiBsb2FkIGpzb24gY29uZmlnICovXG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIHBhdGhfY29uZmlnX2pzb24pO1xuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZih4aHIucmVhZHlTdGF0ZSA9PSA0KXtcbiAgICAgIGlmKHhoci5zdGF0dXMgPT0gMjAwKXtcbiAgICAgICAgdmFyIHBhcmFtcyA9IEpTT04ucGFyc2UoZGF0YS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlKTtcbiAgICAgICAgd2luZG93LnBhcnRpY2xlc0pTKHRhZ19pZCwgcGFyYW1zKTtcbiAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIFhNTEh0dHBSZXF1ZXN0IHN0YXR1czogJyt4aHIuc3RhdHVzKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHBKUyAtIEZpbGUgY29uZmlnIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgeGhyLnNlbmQoKTtcblxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXNzZXRzL2pzL3BhcnRpY2xlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=