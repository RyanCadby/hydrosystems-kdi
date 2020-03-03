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

/***/ "./src/js/button.js":
/*!**************************!*\
  !*** ./src/js/button.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'button';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.button';
var EVENT_KEY = ".".concat(DATA_KEY);
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
var ClassName = {
  ACTIVE: 'active',
  BUTTON: 'btn',
  FOCUS: 'focus'
};
var Selector = {
  DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
  DATA_TOGGLE: '[data-toggle="buttons"]',
  INPUT: 'input:not([type="hidden"])',
  ACTIVE: '.active',
  BUTTON: '.btn'
};
var Event = {
  CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY),
  FOCUS_BLUR_DATA_API: "focus".concat(EVENT_KEY).concat(DATA_API_KEY, " ") + "blur".concat(EVENT_KEY).concat(DATA_API_KEY)
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Button =
/*#__PURE__*/
function () {
  function Button(element) {
    _classCallCheck(this, Button);

    this._element = element;
  } // Getters


  _createClass(Button, [{
    key: "toggle",
    // Public
    value: function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector.ACTIVE);

              if (activeElement) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !this._element.classList.contains(ClassName.ACTIVE);
            jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).toggleClass(ClassName.ACTIVE);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Static

  }], [{
    key: "_jQueryInterface",
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    }
  }, {
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }]);

  return Button;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
  event.preventDefault();
  var button = event.target;

  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).hasClass(ClassName.BUTTON)) {
    button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).closest(Selector.BUTTON);
  }

  Button._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(button), 'toggle');
}).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
  var button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(Selector.BUTTON)[0];
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Button._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Button;

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Button._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/button.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sites\hydrosystems-kdi\wp-content\themes\sbc\src\js\button.js */"./src/js/button.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJOQU1FIiwiVkVSU0lPTiIsIkRBVEFfS0VZIiwiRVZFTlRfS0VZIiwiREFUQV9BUElfS0VZIiwiSlFVRVJZX05PX0NPTkZMSUNUIiwiJCIsImZuIiwiQ2xhc3NOYW1lIiwiQUNUSVZFIiwiQlVUVE9OIiwiRk9DVVMiLCJTZWxlY3RvciIsIkRBVEFfVE9HR0xFX0NBUlJPVCIsIkRBVEFfVE9HR0xFIiwiSU5QVVQiLCJFdmVudCIsIkNMSUNLX0RBVEFfQVBJIiwiRk9DVVNfQkxVUl9EQVRBX0FQSSIsIkJ1dHRvbiIsImVsZW1lbnQiLCJfZWxlbWVudCIsInRyaWdnZXJDaGFuZ2VFdmVudCIsImFkZEFyaWFQcmVzc2VkIiwicm9vdEVsZW1lbnQiLCJjbG9zZXN0IiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidHlwZSIsImNoZWNrZWQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFjdGl2ZUVsZW1lbnQiLCJyZW1vdmVDbGFzcyIsImhhc0F0dHJpYnV0ZSIsInRyaWdnZXIiLCJmb2N1cyIsInNldEF0dHJpYnV0ZSIsInRvZ2dsZUNsYXNzIiwicmVtb3ZlRGF0YSIsImNvbmZpZyIsImVhY2giLCJkYXRhIiwiZG9jdW1lbnQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJ0YXJnZXQiLCJoYXNDbGFzcyIsIl9qUXVlcnlJbnRlcmZhY2UiLCJjYWxsIiwidGVzdCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtR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LFdBQVYsQ0FBc0I5QixTQUFTLENBQUNHLEtBQWhDLEVBQXVDLGVBQWV5QyxJQUFmLENBQW9CUCxLQUFLLENBQUNqQixJQUExQixDQUF2QztBQUNELENBZkg7QUFpQkE7Ozs7OztBQU1BdEIsNkNBQUMsQ0FBQ0MsRUFBRixDQUFLUCxJQUFMLElBQWFtQixNQUFNLENBQUMrQixnQkFBcEI7QUFDQTVDLDZDQUFDLENBQUNDLEVBQUYsQ0FBS1AsSUFBTCxFQUFXcUQsV0FBWCxHQUF5QmxDLE1BQXpCOztBQUNBYiw2Q0FBQyxDQUFDQyxFQUFGLENBQUtQLElBQUwsRUFBV3NELFVBQVgsR0FBd0IsWUFBTTtBQUM1QmhELCtDQUFDLENBQUNDLEVBQUYsQ0FBS1AsSUFBTCxJQUFhSyxrQkFBYjtBQUNBLFNBQU9jLE1BQU0sQ0FBQytCLGdCQUFkO0FBQ0QsQ0FIRDs7QUFLZS9CLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUtBLHdCIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMy4xKTogYnV0dG9uLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb25zdGFudHNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IE5BTUUgICAgICAgICAgICAgICAgPSAnYnV0dG9uJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICA9ICc0LjMuMSdcbmNvbnN0IERBVEFfS0VZICAgICAgICAgICAgPSAnYnMuYnV0dG9uJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgICAgICAgID0gJy5kYXRhLWFwaSdcbmNvbnN0IEpRVUVSWV9OT19DT05GTElDVCAgPSAkLmZuW05BTUVdXG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgQUNUSVZFIDogJ2FjdGl2ZScsXG4gIEJVVFRPTiA6ICdidG4nLFxuICBGT0NVUyAgOiAnZm9jdXMnXG59XG5cbmNvbnN0IFNlbGVjdG9yID0ge1xuICBEQVRBX1RPR0dMRV9DQVJST1QgOiAnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsXG4gIERBVEFfVE9HR0xFICAgICAgICA6ICdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJyxcbiAgSU5QVVQgICAgICAgICAgICAgIDogJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknLFxuICBBQ1RJVkUgICAgICAgICAgICAgOiAnLmFjdGl2ZScsXG4gIEJVVFRPTiAgICAgICAgICAgICA6ICcuYnRuJ1xufVxuXG5jb25zdCBFdmVudCA9IHtcbiAgQ0xJQ0tfREFUQV9BUEkgICAgICA6IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWAsXG4gIEZPQ1VTX0JMVVJfREFUQV9BUEkgOiBgZm9jdXMke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBibHVyJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ2xhc3MgRGVmaW5pdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY2xhc3MgQnV0dG9uIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50XG4gIH1cblxuICAvLyBHZXR0ZXJzXG5cbiAgc3RhdGljIGdldCBWRVJTSU9OKCkge1xuICAgIHJldHVybiBWRVJTSU9OXG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUoKSB7XG4gICAgbGV0IHRyaWdnZXJDaGFuZ2VFdmVudCA9IHRydWVcbiAgICBsZXQgYWRkQXJpYVByZXNzZWQgPSB0cnVlXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoXG4gICAgICBTZWxlY3Rvci5EQVRBX1RPR0dMRVxuICAgIClbMF1cblxuICAgIGlmIChyb290RWxlbWVudCkge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuSU5QVVQpXG5cbiAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkICYmXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSkge1xuICAgICAgICAgICAgdHJpZ2dlckNoYW5nZUV2ZW50ID0gZmFsc2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQUNUSVZFKVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgICAkKGFjdGl2ZUVsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xuICAgICAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgfHxcbiAgICAgICAgICAgIHJvb3RFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSB8fFxuICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpIHx8XG4gICAgICAgICAgICByb290RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dC5jaGVja2VkID0gIXRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgICAgICAgJChpbnB1dCkudHJpZ2dlcignY2hhbmdlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0LmZvY3VzKClcbiAgICAgICAgYWRkQXJpYVByZXNzZWQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhZGRBcmlhUHJlc3NlZCkge1xuICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtcHJlc3NlZCcsXG4gICAgICAgICF0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuQUNUSVZFKSlcbiAgICB9XG5cbiAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50KSB7XG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICAkLnJlbW92ZURhdGEodGhpcy5fZWxlbWVudCwgREFUQV9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IEJ1dHRvbih0aGlzKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcgPT09ICd0b2dnbGUnKSB7XG4gICAgICAgIGRhdGFbY29uZmlnXSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQoZG9jdW1lbnQpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEVfQ0FSUk9ULCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgYnV0dG9uID0gZXZlbnQudGFyZ2V0XG5cbiAgICBpZiAoISQoYnV0dG9uKS5oYXNDbGFzcyhDbGFzc05hbWUuQlVUVE9OKSkge1xuICAgICAgYnV0dG9uID0gJChidXR0b24pLmNsb3Nlc3QoU2VsZWN0b3IuQlVUVE9OKVxuICAgIH1cblxuICAgIEJ1dHRvbi5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoJChidXR0b24pLCAndG9nZ2xlJylcbiAgfSlcbiAgLm9uKEV2ZW50LkZPQ1VTX0JMVVJfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFX0NBUlJPVCwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoU2VsZWN0b3IuQlVUVE9OKVswXVxuICAgICQoYnV0dG9uKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuRk9DVVMsIC9eZm9jdXMoaW4pPyQvLnRlc3QoZXZlbnQudHlwZSkpXG4gIH0pXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBqUXVlcnlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbiQuZm5bTkFNRV0gPSBCdXR0b24uX2pRdWVyeUludGVyZmFjZVxuJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEJ1dHRvblxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBCdXR0b24uX2pRdWVyeUludGVyZmFjZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=