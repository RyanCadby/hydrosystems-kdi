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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/collapse.js":
/*!****************************!*\
  !*** ./src/js/collapse.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/js/util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'collapse';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.collapse';
var EVENT_KEY = ".".concat(DATA_KEY);
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
var Default = {
  toggle: true,
  parent: ''
};
var DefaultType = {
  toggle: 'boolean',
  parent: '(string|element)'
};
var Event = {
  SHOW: "show".concat(EVENT_KEY),
  SHOWN: "shown".concat(EVENT_KEY),
  HIDE: "hide".concat(EVENT_KEY),
  HIDDEN: "hidden".concat(EVENT_KEY),
  CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
};
var ClassName = {
  SHOW: 'show',
  COLLAPSE: 'collapse',
  COLLAPSING: 'collapsing',
  COLLAPSED: 'collapsed'
};
var Dimension = {
  WIDTH: 'width',
  HEIGHT: 'height'
};
var Selector = {
  ACTIVES: '.show, .collapsing',
  DATA_TOGGLE: '[data-toggle="collapse"]'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Collapse =
/*#__PURE__*/
function () {
  function Collapse(element, config) {
    _classCallCheck(this, Collapse);

    this._isTransitioning = false;
    this._element = element;
    this._config = this._getConfig(config);
    this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#".concat(element.id, "\"],") + "[data-toggle=\"collapse\"][data-target=\"#".concat(element.id, "\"]")));
    var toggleList = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

    for (var i = 0, len = toggleList.length; i < len; i++) {
      var elem = toggleList[i];
      var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(elem);
      var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
        return foundElem === element;
      });

      if (selector !== null && filterElement.length > 0) {
        this._selector = selector;

        this._triggerArray.push(elem);
      }
    }

    this._parent = this._config.parent ? this._getParent() : null;

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._element, this._triggerArray);
    }

    if (this._config.toggle) {
      this.toggle();
    }
  } // Getters


  _createClass(Collapse, [{
    key: "toggle",
    // Public
    value: function toggle() {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this = this;

      if (this._isTransitioning || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = jquery__WEBPACK_IMPORTED_MODULE_0___default()(actives).not(this._selector).data(DATA_KEY);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOW);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(actives).not(this._selector), 'hide');

        if (!activesData) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this._element).trigger(Event.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll".concat(capitalizedDimension);
      var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = "".concat(this._element[scrollSize], "px");
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;

      if (this._isTransitioning || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDE);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = "".concat(this._element.getBoundingClientRect()[dimension], "px");
      _util__WEBPACK_IMPORTED_MODULE_1__["default"].reflow(this._element);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = jquery__WEBPACK_IMPORTED_MODULE_0___default()([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName.SHOW)) {
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    }
  }, {
    key: "setTransitioning",
    value: function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    }
  }, {
    key: "dispose",
    value: function dispose() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default, {}, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      _util__WEBPACK_IMPORTED_MODULE_1__["default"].typeCheckConfig(NAME, config, DefaultType);
      return config;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      var hasWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    }
  }, {
    key: "_getParent",
    value: function _getParent() {
      var _this3 = this;

      var parent;

      if (_util__WEBPACK_IMPORTED_MODULE_1__["default"].isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"".concat(this._config.parent, "\"]");
      var children = [].slice.call(parent.querySelectorAll(selector));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).hasClass(ClassName.SHOW);

      if (triggerArray.length) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static

  }], [{
    key: "_getTargetFromElement",
    value: function _getTargetFromElement(element) {
      var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    }
  }, {
    key: "_jQueryInterface",
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
        var data = $this.data(DATA_KEY);

        var _config = _objectSpread({}, Default, {}, $this.data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config]();
        }
      });
    }
  }, {
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }]);

  return Collapse;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.currentTarget.tagName === 'A') {
    event.preventDefault();
  }

  var $trigger = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(this);
  var selectors = [].slice.call(document.querySelectorAll(selector));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(selectors).each(function () {
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
    var data = $target.data(DATA_KEY);
    var config = data ? 'toggle' : $trigger.data();

    Collapse._jQueryInterface.call($target, config);
  });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Collapse._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Collapse;

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Collapse._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Collapse);

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Private TransitionEnd Helpers
 * ------------------------------------------------------------------------
 */

var TRANSITION_END = 'transitionend';
var MAX_UID = 1000000;
var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

function toType(obj) {
  return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
}

function getSpecialTransitionEndEvent() {
  return {
    bindType: TRANSITION_END,
    delegateType: TRANSITION_END,
    handle: function handle(event) {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).is(this)) {
        return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
      }

      return undefined; // eslint-disable-line no-undefined
    }
  };
}

function transitionEndEmulator(duration) {
  var _this = this;

  var called = false;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).one(Util.TRANSITION_END, function () {
    called = true;
  });
  setTimeout(function () {
    if (!called) {
      Util.triggerTransitionEnd(_this);
    }
  }, duration);
  return this;
}

function setTransitionEndSupport() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.emulateTransitionEnd = transitionEndEmulator;
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
}
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */


var Util = {
  TRANSITION_END: 'bsTransitionEnd',
  getUID: function getUID(prefix) {
    do {
      // eslint-disable-next-line no-bitwise
      prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
    } while (document.getElementById(prefix));

    return prefix;
  },
  getSelectorFromElement: function getSelectorFromElement(element) {
    var selector = element.getAttribute('data-target');

    if (!selector || selector === '#') {
      var hrefAttr = element.getAttribute('href');
      selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
    }

    try {
      return document.querySelector(selector) ? selector : null;
    } catch (err) {
      return null;
    }
  },
  getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
    if (!element) {
      return 0;
    } // Get transition-duration of the element


    var transitionDuration = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('transition-duration');
    var transitionDelay = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('transition-delay');
    var floatTransitionDuration = parseFloat(transitionDuration);
    var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    } // If multiple durations are defined, take the first


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  },
  reflow: function reflow(element) {
    return element.offsetHeight;
  },
  triggerTransitionEnd: function triggerTransitionEnd(element) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).trigger(TRANSITION_END);
  },
  // TODO: Remove in v5
  supportsTransitionEnd: function supportsTransitionEnd() {
    return Boolean(TRANSITION_END);
  },
  isElement: function isElement(obj) {
    return (obj[0] || obj).nodeType;
  },
  typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
    for (var property in configTypes) {
      if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
        var expectedTypes = configTypes[property];
        var value = config[property];
        var valueType = value && Util.isElement(value) ? 'element' : toType(value);

        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new Error("".concat(componentName.toUpperCase(), ": ") + "Option \"".concat(property, "\" provided type \"").concat(valueType, "\" ") + "but expected type \"".concat(expectedTypes, "\"."));
        }
      }
    }
  },
  findShadowRoot: function findShadowRoot(element) {
    if (!document.documentElement.attachShadow) {
      return null;
    } // Can find the shadow root otherwise it'll return the document


    if (typeof element.getRootNode === 'function') {
      var root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }

    if (element instanceof ShadowRoot) {
      return element;
    } // when we don't find a shadow root


    if (!element.parentNode) {
      return null;
    }

    return Util.findShadowRoot(element.parentNode);
  }
};
setTransitionEndSupport();
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/js/collapse.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sites\hydrosystems-kdi\wp-content\themes\sbc\src\js\collapse.js */"./src/js/collapse.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIk5BTUUiLCJWRVJTSU9OIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJEQVRBX0FQSV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCIkIiwiZm4iLCJEZWZhdWx0IiwidG9nZ2xlIiwicGFyZW50IiwiRGVmYXVsdFR5cGUiLCJFdmVudCIsIlNIT1ciLCJTSE9XTiIsIkhJREUiLCJISURERU4iLCJDTElDS19EQVRBX0FQSSIsIkNsYXNzTmFtZSIsIkNPTExBUFNFIiwiQ09MTEFQU0lORyIsIkNPTExBUFNFRCIsIkRpbWVuc2lvbiIsIldJRFRIIiwiSEVJR0hUIiwiU2VsZWN0b3IiLCJBQ1RJVkVTIiwiREFUQV9UT0dHTEUiLCJDb2xsYXBzZSIsImVsZW1lbnQiLCJjb25maWciLCJfaXNUcmFuc2l0aW9uaW5nIiwiX2VsZW1lbnQiLCJfY29uZmlnIiwiX2dldENvbmZpZyIsIl90cmlnZ2VyQXJyYXkiLCJzbGljZSIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpZCIsInRvZ2dsZUxpc3QiLCJpIiwibGVuIiwibGVuZ3RoIiwiZWxlbSIsInNlbGVjdG9yIiwiVXRpbCIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJmaWx0ZXJFbGVtZW50IiwiZmlsdGVyIiwiZm91bmRFbGVtIiwiX3NlbGVjdG9yIiwicHVzaCIsIl9wYXJlbnQiLCJfZ2V0UGFyZW50IiwiX2FkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImhhc0NsYXNzIiwiaGlkZSIsInNob3ciLCJhY3RpdmVzIiwiYWN0aXZlc0RhdGEiLCJnZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIm5vdCIsImRhdGEiLCJzdGFydEV2ZW50IiwidHJpZ2dlciIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9qUXVlcnlJbnRlcmZhY2UiLCJkaW1lbnNpb24iLCJfZ2V0RGltZW5zaW9uIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInN0eWxlIiwiYXR0ciIsInNldFRyYW5zaXRpb25pbmciLCJjb21wbGV0ZSIsImNhcGl0YWxpemVkRGltZW5zaW9uIiwidG9VcHBlckNhc2UiLCJzY3JvbGxTaXplIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJvbmUiLCJUUkFOU0lUSU9OX0VORCIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVmbG93IiwidHJpZ2dlckFycmF5TGVuZ3RoIiwiJGVsZW0iLCJpc1RyYW5zaXRpb25pbmciLCJyZW1vdmVEYXRhIiwiQm9vbGVhbiIsInR5cGVDaGVja0NvbmZpZyIsImhhc1dpZHRoIiwiaXNFbGVtZW50IiwianF1ZXJ5IiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwiZWFjaCIsIl9nZXRUYXJnZXRGcm9tRWxlbWVudCIsInRyaWdnZXJBcnJheSIsImlzT3BlbiIsInRvZ2dsZUNsYXNzIiwiJHRoaXMiLCJ0ZXN0IiwiVHlwZUVycm9yIiwib24iLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ0YWdOYW1lIiwicHJldmVudERlZmF1bHQiLCIkdHJpZ2dlciIsInNlbGVjdG9ycyIsIiR0YXJnZXQiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJ0b1R5cGUiLCJvYmoiLCJ0b1N0cmluZyIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50IiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCJ0YXJnZXQiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInRyYW5zaXRpb25FbmRFbXVsYXRvciIsImR1cmF0aW9uIiwiY2FsbGVkIiwic2V0VGltZW91dCIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJzcGVjaWFsIiwiZ2V0VUlEIiwicHJlZml4IiwiTWF0aCIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiaHJlZkF0dHIiLCJ0cmltIiwiZXJyIiwiY3NzIiwidHJhbnNpdGlvbkRlbGF5IiwiZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24iLCJwYXJzZUZsb2F0IiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJzcGxpdCIsIm9mZnNldEhlaWdodCIsInN1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIm5vZGVUeXBlIiwiY29tcG9uZW50TmFtZSIsImNvbmZpZ1R5cGVzIiwicHJvcGVydHkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZSIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsIkVycm9yIiwiZmluZFNoYWRvd1Jvb3QiLCJkb2N1bWVudEVsZW1lbnQiLCJhdHRhY2hTaGFkb3ciLCJnZXRSb290Tm9kZSIsInJvb3QiLCJTaGFkb3dSb290IiwicGFyZW50Tm9kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Es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TSxDQUFDK0MsS0FBRCxDQUR0Qjs7QUFHQSxZQUFJLENBQUMsSUFBSUUsTUFBSixDQUFXSCxhQUFYLEVBQTBCNUQsSUFBMUIsQ0FBK0I4RCxTQUEvQixDQUFMLEVBQWdEO0FBQzlDLGdCQUFNLElBQUlFLEtBQUosQ0FDSixVQUFHVixhQUFhLENBQUNoRixXQUFkLEVBQUgsNkJBQ1drRixRQURYLGdDQUN1Q00sU0FEdkMseUNBRXNCRixhQUZ0QixRQURJLENBQU47QUFJRDtBQUNGO0FBQ0Y7QUFDRixHQXBGVTtBQXNGWEssZ0JBdEZXLDBCQXNGSTlJLE9BdEZKLEVBc0ZhO0FBQ3RCLFFBQUksQ0FBQ1MsUUFBUSxDQUFDc0ksZUFBVCxDQUF5QkMsWUFBOUIsRUFBNEM7QUFDMUMsYUFBTyxJQUFQO0FBQ0QsS0FIcUIsQ0FLdEI7OztBQUNBLFFBQUksT0FBT2hKLE9BQU8sQ0FBQ2lKLFdBQWYsS0FBK0IsVUFBbkMsRUFBK0M7QUFDN0MsVUFBTUMsSUFBSSxHQUFHbEosT0FBTyxDQUFDaUosV0FBUixFQUFiO0FBQ0EsYUFBT0MsSUFBSSxZQUFZQyxVQUFoQixHQUE2QkQsSUFBN0IsR0FBb0MsSUFBM0M7QUFDRDs7QUFFRCxRQUFJbEosT0FBTyxZQUFZbUosVUFBdkIsRUFBbUM7QUFDakMsYUFBT25KLE9BQVA7QUFDRCxLQWJxQixDQWV0Qjs7O0FBQ0EsUUFBSSxDQUFDQSxPQUFPLENBQUNvSixVQUFiLEVBQXlCO0FBQ3ZCLGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU9sSSxJQUFJLENBQUM0SCxjQUFMLENBQW9COUksT0FBTyxDQUFDb0osVUFBNUIsQ0FBUDtBQUNEO0FBM0dVLENBQWI7QUE4R0FwQyx1QkFBdUI7QUFFUjlGLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaExBLHdCIiwiZmlsZSI6ImNvbGxhcHNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiBjb2xsYXBzZS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0IFV0aWwgZnJvbSAnLi91dGlsJ1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29uc3RhbnRzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBOQU1FICAgICAgICAgICAgICAgID0gJ2NvbGxhcHNlJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuY29sbGFwc2UnXG5jb25zdCBFVkVOVF9LRVkgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgPSAnLmRhdGEtYXBpJ1xuY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUICA9ICQuZm5bTkFNRV1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgdG9nZ2xlIDogdHJ1ZSxcbiAgcGFyZW50IDogJydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIHRvZ2dsZSA6ICdib29sZWFuJyxcbiAgcGFyZW50IDogJyhzdHJpbmd8ZWxlbWVudCknXG59XG5cbmNvbnN0IEV2ZW50ID0ge1xuICBTSE9XICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBISURFICAgICAgICAgICA6IGBoaWRlJHtFVkVOVF9LRVl9YCxcbiAgSElEREVOICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgU0hPVyAgICAgICA6ICdzaG93JyxcbiAgQ09MTEFQU0UgICA6ICdjb2xsYXBzZScsXG4gIENPTExBUFNJTkcgOiAnY29sbGFwc2luZycsXG4gIENPTExBUFNFRCAgOiAnY29sbGFwc2VkJ1xufVxuXG5jb25zdCBEaW1lbnNpb24gPSB7XG4gIFdJRFRIICA6ICd3aWR0aCcsXG4gIEhFSUdIVCA6ICdoZWlnaHQnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBBQ1RJVkVTICAgICA6ICcuc2hvdywgLmNvbGxhcHNpbmcnLFxuICBEQVRBX1RPR0dMRSA6ICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSdcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIENvbGxhcHNlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl90cmlnZ2VyQXJyYXkgICAgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBgW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMke2VsZW1lbnQuaWR9XCJdLGAgK1xuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIyR7ZWxlbWVudC5pZH1cIl1gXG4gICAgKSlcblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuREFUQV9UT0dHTEUpKVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0b2dnbGVMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBlbGVtID0gdG9nZ2xlTGlzdFtpXVxuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbSlcbiAgICAgIGNvbnN0IGZpbHRlckVsZW1lbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKVxuICAgICAgICAuZmlsdGVyKChmb3VuZEVsZW0pID0+IGZvdW5kRWxlbSA9PT0gZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yXG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudCA/IHRoaXMuX2dldFBhcmVudCgpIDogbnVsbFxuXG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModGhpcy5fZWxlbWVudCwgdGhpcy5fdHJpZ2dlckFycmF5KVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fFxuICAgICAgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBhY3RpdmVzXG4gICAgbGV0IGFjdGl2ZXNEYXRhXG5cbiAgICBpZiAodGhpcy5fcGFyZW50KSB7XG4gICAgICBhY3RpdmVzID0gW10uc2xpY2UuY2FsbCh0aGlzLl9wYXJlbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5BQ1RJVkVTKSlcbiAgICAgICAgLmZpbHRlcigoZWxlbSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnBhcmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSA9PT0gdGhpcy5fY29uZmlnLnBhcmVudFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVzID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhY3RpdmVzKSB7XG4gICAgICBhY3RpdmVzRGF0YSA9ICQoYWN0aXZlcykubm90KHRoaXMuX3NlbGVjdG9yKS5kYXRhKERBVEFfS0VZKVxuICAgICAgaWYgKGFjdGl2ZXNEYXRhICYmIGFjdGl2ZXNEYXRhLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuU0hPVylcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZXMpIHtcbiAgICAgIENvbGxhcHNlLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKGFjdGl2ZXMpLm5vdCh0aGlzLl9zZWxlY3RvciksICdoaWRlJylcbiAgICAgIGlmICghYWN0aXZlc0RhdGEpIHtcbiAgICAgICAgJChhY3RpdmVzKS5kYXRhKERBVEFfS0VZLCBudWxsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgaWYgKHRoaXMuX3RyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgICQodGhpcy5fdHJpZ2dlckFycmF5KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuICAgIH1cblxuICAgIHRoaXMuc2V0VHJhbnNpdGlvbmluZyh0cnVlKVxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0lORylcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5DT0xMQVBTRSlcbiAgICAgICAgLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcoZmFsc2UpXG5cbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihFdmVudC5TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcbiAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSBVdGlsLmdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIGNvbXBsZXRlKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnRbc2Nyb2xsU2l6ZV19cHhgXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHxcbiAgICAgICEkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5fZ2V0RGltZW5zaW9uKClcblxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbZGltZW5zaW9uXSA9IGAke3RoaXMuX2VsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbZGltZW5zaW9uXX1weGBcblxuICAgIFV0aWwucmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpXG4gICAgICAuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFKVxuICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgY29uc3QgdHJpZ2dlckFycmF5TGVuZ3RoID0gdGhpcy5fdHJpZ2dlckFycmF5Lmxlbmd0aFxuICAgIGlmICh0cmlnZ2VyQXJyYXlMZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyaWdnZXJBcnJheUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0aGlzLl90cmlnZ2VyQXJyYXlbaV1cbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBVdGlsLmdldFNlbGVjdG9yRnJvbUVsZW1lbnQodHJpZ2dlcilcblxuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCAkZWxlbSA9ICQoW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSkpXG4gICAgICAgICAgaWYgKCEkZWxlbS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNFRClcbiAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFRyYW5zaXRpb25pbmcodHJ1ZSlcblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRUcmFuc2l0aW9uaW5nKGZhbHNlKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkNPTExBUFNJTkcpXG4gICAgICAgIC5hZGRDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0UpXG4gICAgICAgIC50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQodGhpcy5fZWxlbWVudClcbiAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY29tcGxldGUpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICB9XG5cbiAgc2V0VHJhbnNpdGlvbmluZyhpc1RyYW5zaXRpb25pbmcpIHtcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSBpc1RyYW5zaXRpb25pbmdcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgJC5yZW1vdmVEYXRhKHRoaXMuX2VsZW1lbnQsIERBVEFfS0VZKVxuXG4gICAgdGhpcy5fY29uZmlnICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX3BhcmVudCAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9lbGVtZW50ICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ICAgID0gbnVsbFxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IG51bGxcbiAgfVxuXG4gIC8vIFByaXZhdGVcblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAuLi5jb25maWdcbiAgICB9XG4gICAgY29uZmlnLnRvZ2dsZSA9IEJvb2xlYW4oY29uZmlnLnRvZ2dsZSkgLy8gQ29lcmNlIHN0cmluZyB2YWx1ZXNcbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhOQU1FLCBjb25maWcsIERlZmF1bHRUeXBlKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREaW1lbnNpb24oKSB7XG4gICAgY29uc3QgaGFzV2lkdGggPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKERpbWVuc2lvbi5XSURUSClcbiAgICByZXR1cm4gaGFzV2lkdGggPyBEaW1lbnNpb24uV0lEVEggOiBEaW1lbnNpb24uSEVJR0hUXG4gIH1cblxuICBfZ2V0UGFyZW50KCkge1xuICAgIGxldCBwYXJlbnRcblxuICAgIGlmIChVdGlsLmlzRWxlbWVudCh0aGlzLl9jb25maWcucGFyZW50KSkge1xuICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFxuXG4gICAgICAvLyBJdCdzIGEgalF1ZXJ5IG9iamVjdFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jb25maWcucGFyZW50LmpxdWVyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcGFyZW50ID0gdGhpcy5fY29uZmlnLnBhcmVudFswXVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NvbmZpZy5wYXJlbnQpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0b3IgPVxuICAgICAgYFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJHt0aGlzLl9jb25maWcucGFyZW50fVwiXWBcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG4gICAgJChjaGlsZHJlbikuZWFjaCgoaSwgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKFxuICAgICAgICBDb2xsYXBzZS5fZ2V0VGFyZ2V0RnJvbUVsZW1lbnQoZWxlbWVudCksXG4gICAgICAgIFtlbGVtZW50XVxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcGFyZW50XG4gIH1cblxuICBfYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKGVsZW1lbnQsIHRyaWdnZXJBcnJheSkge1xuICAgIGNvbnN0IGlzT3BlbiA9ICQoZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG5cbiAgICBpZiAodHJpZ2dlckFycmF5Lmxlbmd0aCkge1xuICAgICAgJCh0cmlnZ2VyQXJyYXkpXG4gICAgICAgIC50b2dnbGVDbGFzcyhDbGFzc05hbWUuQ09MTEFQU0VELCAhaXNPcGVuKVxuICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgICB9XG4gIH1cblxuICAvLyBTdGF0aWNcblxuICBzdGF0aWMgX2dldFRhcmdldEZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KVxuICAgIHJldHVybiBzZWxlY3RvciA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogbnVsbFxuICB9XG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgbGV0IGRhdGEgICAgICA9ICR0aGlzLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0ge1xuICAgICAgICAuLi5EZWZhdWx0LFxuICAgICAgICAuLi4kdGhpcy5kYXRhKCksXG4gICAgICAgIC4uLnR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyA/IGNvbmZpZyA6IHt9XG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YSAmJiBfY29uZmlnLnRvZ2dsZSAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgICAgX2NvbmZpZy50b2dnbGUgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkdGhpcy5kYXRhKERBVEFfS0VZLCBkYXRhKVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2NvbmZpZ10gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIHByZXZlbnREZWZhdWx0IG9ubHkgZm9yIDxhPiBlbGVtZW50cyAod2hpY2ggY2hhbmdlIHRoZSBVUkwpIG5vdCBpbnNpZGUgdGhlIGNvbGxhcHNpYmxlIGVsZW1lbnRcbiAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgY29uc3QgJHRyaWdnZXIgPSAkKHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KHRoaXMpXG4gIGNvbnN0IHNlbGVjdG9ycyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpXG5cbiAgJChzZWxlY3RvcnMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0ICR0YXJnZXQgPSAkKHRoaXMpXG4gICAgY29uc3QgZGF0YSAgICA9ICR0YXJnZXQuZGF0YShEQVRBX0tFWSlcbiAgICBjb25zdCBjb25maWcgID0gZGF0YSA/ICd0b2dnbGUnIDogJHRyaWdnZXIuZGF0YSgpXG4gICAgQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZS5jYWxsKCR0YXJnZXQsIGNvbmZpZylcbiAgfSlcbn0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBDb2xsYXBzZS5falF1ZXJ5SW50ZXJmYWNlXG4kLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQ29sbGFwc2VcbiQuZm5bTkFNRV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICByZXR1cm4gQ29sbGFwc2UuX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZVxuIiwiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwICh2NC4zLjEpOiB1dGlsLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQcml2YXRlIFRyYW5zaXRpb25FbmQgSGVscGVyc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVFJBTlNJVElPTl9FTkQgPSAndHJhbnNpdGlvbmVuZCdcbmNvbnN0IE1BWF9VSUQgPSAxMDAwMDAwXG5jb25zdCBNSUxMSVNFQ09ORFNfTVVMVElQTElFUiA9IDEwMDBcblxuLy8gU2hvdXRvdXQgQW5ndXNDcm9sbCAoaHR0cHM6Ly9nb28uZ2wvcHh3UUdwKVxuZnVuY3Rpb24gdG9UeXBlKG9iaikge1xuICByZXR1cm4ge30udG9TdHJpbmcuY2FsbChvYmopLm1hdGNoKC9cXHMoW2Etel0rKS9pKVsxXS50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKSB7XG4gIHJldHVybiB7XG4gICAgYmluZFR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGRlbGVnYXRlVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgaGFuZGxlKGV2ZW50KSB7XG4gICAgICBpZiAoJChldmVudC50YXJnZXQpLmlzKHRoaXMpKSB7XG4gICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZpbmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25FbmRFbXVsYXRvcihkdXJhdGlvbikge1xuICBsZXQgY2FsbGVkID0gZmFsc2VcblxuICAkKHRoaXMpLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCAoKSA9PiB7XG4gICAgY2FsbGVkID0gdHJ1ZVxuICB9KVxuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmICghY2FsbGVkKSB7XG4gICAgICBVdGlsLnRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMpXG4gICAgfVxuICB9LCBkdXJhdGlvbilcblxuICByZXR1cm4gdGhpc1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpIHtcbiAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRFbXVsYXRvclxuICAkLmV2ZW50LnNwZWNpYWxbVXRpbC5UUkFOU0lUSU9OX0VORF0gPSBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KClcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHVibGljIFV0aWwgQXBpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFV0aWwgPSB7XG5cbiAgVFJBTlNJVElPTl9FTkQ6ICdic1RyYW5zaXRpb25FbmQnLFxuXG4gIGdldFVJRChwcmVmaXgpIHtcbiAgICBkbyB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKSAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXG4gICAgfSB3aGlsZSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJlZml4KSlcbiAgICByZXR1cm4gcHJlZml4XG4gIH0sXG5cbiAgZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcblxuICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgICAgY29uc3QgaHJlZkF0dHIgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICBzZWxlY3RvciA9IGhyZWZBdHRyICYmIGhyZWZBdHRyICE9PSAnIycgPyBocmVmQXR0ci50cmltKCkgOiAnJ1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgPyBzZWxlY3RvciA6IG51bGxcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGdldFRyYW5zaXRpb25EdXJhdGlvbkZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICBsZXQgdHJhbnNpdGlvbkR1cmF0aW9uID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxuICAgIGxldCB0cmFuc2l0aW9uRGVsYXkgPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kZWxheScpXG5cbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpXG5cbiAgICAvLyBSZXR1cm4gMCBpZiBlbGVtZW50IG9yIHRyYW5zaXRpb24gZHVyYXRpb24gaXMgbm90IGZvdW5kXG4gICAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuXG4gICAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5zcGxpdCgnLCcpWzBdXG4gICAgdHJhbnNpdGlvbkRlbGF5ID0gdHJhbnNpdGlvbkRlbGF5LnNwbGl0KCcsJylbMF1cblxuICAgIHJldHVybiAocGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICsgcGFyc2VGbG9hdCh0cmFuc2l0aW9uRGVsYXkpKSAqIE1JTExJU0VDT05EU19NVUxUSVBMSUVSXG4gIH0sXG5cbiAgcmVmbG93KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfSxcblxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XG4gICAgJChlbGVtZW50KS50cmlnZ2VyKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIC8vIFRPRE86IFJlbW92ZSBpbiB2NVxuICBzdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiAob2JqWzBdIHx8IG9iaikubm9kZVR5cGVcbiAgfSxcblxuICB0eXBlQ2hlY2tDb25maWcoY29tcG9uZW50TmFtZSwgY29uZmlnLCBjb25maWdUeXBlcykge1xuICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gY29uZmlnVHlwZXMpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZmlnVHlwZXMsIHByb3BlcnR5KSkge1xuICAgICAgICBjb25zdCBleHBlY3RlZFR5cGVzID0gY29uZmlnVHlwZXNbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IHZhbHVlICAgICAgICAgPSBjb25maWdbcHJvcGVydHldXG4gICAgICAgIGNvbnN0IHZhbHVlVHlwZSAgICAgPSB2YWx1ZSAmJiBVdGlsLmlzRWxlbWVudCh2YWx1ZSlcbiAgICAgICAgICA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgICAgICBpZiAoIW5ldyBSZWdFeHAoZXhwZWN0ZWRUeXBlcykudGVzdCh2YWx1ZVR5cGUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYCR7Y29tcG9uZW50TmFtZS50b1VwcGVyQ2FzZSgpfTogYCArXG4gICAgICAgICAgICBgT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYCArXG4gICAgICAgICAgICBgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBmaW5kU2hhZG93Um9vdChlbGVtZW50KSB7XG4gICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXR0YWNoU2hhZG93KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIENhbiBmaW5kIHRoZSBzaGFkb3cgcm9vdCBvdGhlcndpc2UgaXQnbGwgcmV0dXJuIHRoZSBkb2N1bWVudFxuICAgIGlmICh0eXBlb2YgZWxlbWVudC5nZXRSb290Tm9kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgICAgcmV0dXJuIHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gcm9vdCA6IG51bGxcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbC5maW5kU2hhZG93Um9vdChlbGVtZW50LnBhcmVudE5vZGUpXG4gIH1cbn1cblxuc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKVxuXG5leHBvcnQgZGVmYXVsdCBVdGlsXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9