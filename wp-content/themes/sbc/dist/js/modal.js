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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
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
 * Bootstrap (v4.3.1): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'modal';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.modal';
var EVENT_KEY = ".".concat(DATA_KEY);
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

var Default = {
  backdrop: true,
  keyboard: true,
  focus: true,
  show: true
};
var DefaultType = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  focus: 'boolean',
  show: 'boolean'
};
var Event = {
  HIDE: "hide".concat(EVENT_KEY),
  HIDDEN: "hidden".concat(EVENT_KEY),
  SHOW: "show".concat(EVENT_KEY),
  SHOWN: "shown".concat(EVENT_KEY),
  FOCUSIN: "focusin".concat(EVENT_KEY),
  RESIZE: "resize".concat(EVENT_KEY),
  CLICK_DISMISS: "click.dismiss".concat(EVENT_KEY),
  KEYDOWN_DISMISS: "keydown.dismiss".concat(EVENT_KEY),
  MOUSEUP_DISMISS: "mouseup.dismiss".concat(EVENT_KEY),
  MOUSEDOWN_DISMISS: "mousedown.dismiss".concat(EVENT_KEY),
  CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY)
};
var ClassName = {
  SCROLLABLE: 'modal-dialog-scrollable',
  SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
  BACKDROP: 'modal-backdrop',
  OPEN: 'modal-open',
  FADE: 'fade',
  SHOW: 'show'
};
var Selector = {
  DIALOG: '.modal-dialog',
  MODAL_BODY: '.modal-body',
  DATA_TOGGLE: '[data-toggle="modal"]',
  DATA_DISMISS: '[data-dismiss="modal"]',
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Modal =
/*#__PURE__*/
function () {
  function Modal(element, config) {
    _classCallCheck(this, Modal);

    this._config = this._getConfig(config);
    this._element = element;
    this._dialog = element.querySelector(Selector.DIALOG);
    this._backdrop = null;
    this._isShown = false;
    this._isBodyOverflowing = false;
    this._ignoreBackdropClick = false;
    this._isTransitioning = false;
    this._scrollbarWidth = 0;
  } // Getters


  _createClass(Modal, [{
    key: "toggle",
    // Public
    value: function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
  }, {
    key: "show",
    value: function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    }
  }, {
    key: "hide",
    value: function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDE);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(Event.FOCUSIN);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).removeClass(ClassName.SHOW);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).off(Event.CLICK_DISMISS);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._element);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(htmlElement).off(EVENT_KEY);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(Event.FOCUSIN);
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    } // Private

  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, Default, {}, config);
      _util__WEBPACK_IMPORTED_MODULE_1__["default"].typeCheckConfig(NAME, config, DefaultType);
      return config;
    }
  }, {
    key: "_showElement",
    value: function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._dialog).hasClass(ClassName.SCROLLABLE)) {
        this._dialog.querySelector(Selector.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].reflow(this._element);
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._dialog);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._dialog).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    }
  }, {
    key: "_enforceFocus",
    value: function _enforceFocus() {
      var _this4 = this;

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).off(Event.FOCUSIN) // Guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    }
  }, {
    key: "_setEscapeEvent",
    value: function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).off(Event.KEYDOWN_DISMISS);
      }
    }
  }, {
    key: "_setResizeEvent",
    value: function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).off(Event.RESIZE);
      }
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).removeClass(ClassName.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this7._element).trigger(Event.HIDDEN);
      });
    }
  }, {
    key: "_removeBackdrop",
    value: function _removeBackdrop() {
      if (this._backdrop) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).remove();
        this._backdrop = null;
      }
    }
  }, {
    key: "_showBackdrop",
    value: function _showBackdrop(callback) {
      var _this8 = this;

      var animate = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).appendTo(document.body);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          _util__WEBPACK_IMPORTED_MODULE_1__["default"].reflow(this._backdrop);
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._backdrop);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.FADE)) {
          var _backdropTransitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(this._backdrop);

          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._backdrop).one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------

  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = "".concat(this._scrollbarWidth, "px");
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = "".concat(this._scrollbarWidth, "px");
      }
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }
  }, {
    key: "_checkScrollbar",
    value: function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    }
  }, {
    key: "_setScrollbar",
    value: function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector.STICKY_CONTENT)); // Adjust fixed content padding

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('padding-right');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('padding-right', actualPadding).css('padding-right', "".concat(parseFloat(calculatedPadding) + _this9._scrollbarWidth, "px"));
        }); // Adjust sticky content margin

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('margin-right');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('margin-right', actualMargin).css('margin-right', "".concat(parseFloat(calculatedMargin) - _this9._scrollbarWidth, "px"));
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).css('padding-right');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).data('padding-right', actualPadding).css('padding-right', "".concat(parseFloat(calculatedPadding) + this._scrollbarWidth, "px"));
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).addClass(ClassName.OPEN);
    }
  }, {
    key: "_resetScrollbar",
    value: function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector.FIXED_CONTENT));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(fixedContent).each(function (index, element) {
        var padding = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('padding-right');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("".concat(Selector.STICKY_CONTENT)));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(elements).each(function (index, element) {
        var margin = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).data('padding-right');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    }
  }, {
    key: "_getScrollbarWidth",
    value: function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static

  }], [{
    key: "_jQueryInterface",
    value: function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

        var _config = _objectSpread({}, Default, {}, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(), {}, _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"".concat(config, "\""));
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
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

  return Modal;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  var _this10 = this;

  var target;
  var selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(this);

  if (selector) {
    target = document.querySelector(selector);
  }

  var config = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).data(DATA_KEY) ? 'toggle' : _objectSpread({}, jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).data(), {}, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data());

  if (this.tagName === 'A' || this.tagName === 'AREA') {
    event.preventDefault();
  }

  var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).one(Event.SHOW, function (showEvent) {
    if (showEvent.isDefaultPrevented()) {
      // Only register focus restorer if modal will actually get shown
      return;
    }

    $target.one(Event.HIDDEN, function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this10).is(':visible')) {
        _this10.focus();
      }
    });
  });

  Modal._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(target), config, this);
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Modal._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Modal;

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Modal._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

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

/***/ 1:
/*!*******************************!*\
  !*** multi ./src/js/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sites\hydrosystems-kdi\wp-content\themes\sbc\src\js\modal.js */"./src/js/modal.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbIk5BTUUiLCJWRVJTSU9OIiwiREFUQV9LRVkiLCJFVkVOVF9LRVkiLCJEQVRBX0FQSV9LRVkiLCJKUVVFUllfTk9fQ09ORkxJQ1QiLCIkIiwiZm4iLCJFU0NBUEVfS0VZQ09ERSIsIkRlZmF1bHQiLCJiYWNrZHJvcCIsImtleWJvYXJkIiwiZm9jdXMiLCJzaG93IiwiRGVmYXVsdFR5cGUiLCJFdmVudCIsIkhJREUiLCJISURERU4iLCJTSE9XIiwiU0hPV04iLCJGT0NVU0lOIiwiUkVTSVpFIiwiQ0xJQ0tfRElTTUlTUyIsIktFWURPV05fRElTTUlTUyIsIk1PVVNFVVBfRElTTUlTUyIsIk1PVVNFRE9XTl9ESVNNSVNTIiwiQ0xJQ0tfREFUQV9BUEkiLCJDbGFzc05hbWUiLCJTQ1JPTExBQkxFIiwiU0NST0xMQkFSX01FQVNVUkVSIiwiQkFDS0RST1AiLCJPUEVOIiwiRkFERSIsIlNlbGVjdG9yIiwiRElBTE9HIiwiTU9EQUxfQk9EWSIsIkRBVEFfVE9HR0xFIiwiREFUQV9ESVNNSVNTIiwiRklYRURfQ09OVEVOVCIsIlNUSUNLWV9DT05URU5UIiwiTW9kYWwiLCJlbGVtZW50IiwiY29uZmlnIiwiX2NvbmZpZyIsIl9nZXRDb25maWciLCJfZWxlbWVudCIsIl9kaWFsb2ciLCJxdWVyeVNlbGVjdG9yIiwiX2JhY2tkcm9wIiwiX2lzU2hvd24iLCJfaXNCb2R5T3ZlcmZsb3dpbmciLCJfaWdub3JlQmFja2Ryb3BDbGljayIsIl9pc1RyYW5zaXRpb25pbmciLCJfc2Nyb2xsYmFyV2lkdGgiLCJyZWxhdGVkVGFyZ2V0IiwiaGlkZSIsImhhc0NsYXNzIiwic2hvd0V2ZW50IiwidHJpZ2dlciIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9jaGVja1Njcm9sbGJhciIsIl9zZXRTY3JvbGxiYXIiLCJfYWRqdXN0RGlhbG9nIiwiX3NldEVzY2FwZUV2ZW50IiwiX3NldFJlc2l6ZUV2ZW50Iiwib24iLCJldmVudCIsIm9uZSIsInRhcmdldCIsImlzIiwiX3Nob3dCYWNrZHJvcCIsIl9zaG93RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiaGlkZUV2ZW50IiwidHJhbnNpdGlvbiIsImRvY3VtZW50Iiwib2ZmIiwicmVtb3ZlQ2xhc3MiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJVdGlsIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJUUkFOU0lUSU9OX0VORCIsIl9oaWRlTW9kYWwiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsIndpbmRvdyIsImZvckVhY2giLCJodG1sRWxlbWVudCIsInJlbW92ZURhdGEiLCJ0eXBlQ2hlY2tDb25maWciLCJwYXJlbnROb2RlIiwibm9kZVR5cGUiLCJOb2RlIiwiRUxFTUVOVF9OT0RFIiwiYm9keSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJkaXNwbGF5IiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2Nyb2xsVG9wIiwicmVmbG93IiwiYWRkQ2xhc3MiLCJfZW5mb3JjZUZvY3VzIiwic2hvd25FdmVudCIsInRyYW5zaXRpb25Db21wbGV0ZSIsImhhcyIsImxlbmd0aCIsIndoaWNoIiwiaGFuZGxlVXBkYXRlIiwiX3Jlc2V0QWRqdXN0bWVudHMiLCJfcmVzZXRTY3JvbGxiYXIiLCJyZW1vdmUiLCJjYWxsYmFjayIsImFuaW1hdGUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kVG8iLCJjdXJyZW50VGFyZ2V0IiwiYmFja2Ryb3BUcmFuc2l0aW9uRHVyYXRpb24iLCJjYWxsYmFja1JlbW92ZSIsIl9yZW1vdmVCYWNrZHJvcCIsImlzTW9kYWxPdmVyZmxvd2luZyIsInNjcm9sbEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJfZ2V0U2Nyb2xsYmFyV2lkdGgiLCJmaXhlZENvbnRlbnQiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RpY2t5Q29udGVudCIsImVhY2giLCJpbmRleCIsImFjdHVhbFBhZGRpbmciLCJjYWxjdWxhdGVkUGFkZGluZyIsImNzcyIsImRhdGEiLCJwYXJzZUZsb2F0IiwiYWN0dWFsTWFyZ2luIiwibWFyZ2luUmlnaHQiLCJjYWxjdWxhdGVkTWFyZ2luIiwicGFkZGluZyIsImVsZW1lbnRzIiwibWFyZ2luIiwic2Nyb2xsRGl2Iiwic2Nyb2xsYmFyV2lkdGgiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJUeXBlRXJyb3IiLCJzZWxlY3RvciIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJ0YWdOYW1lIiwiJHRhcmdldCIsIl9qUXVlcnlJbnRlcmZhY2UiLCJDb25zdHJ1Y3RvciIsIm5vQ29uZmxpY3QiLCJNQVhfVUlEIiwiTUlMTElTRUNPTkRTX01VTFRJUExJRVIiLCJ0b1R5cGUiLCJvYmoiLCJ0b1N0cmluZyIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50IiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCJoYW5kbGVPYmoiLCJoYW5kbGVyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJ0cmFuc2l0aW9uRW5kRW11bGF0b3IiLCJkdXJhdGlvbiIsImNhbGxlZCIsInNldFRpbWVvdXQiLCJ0cmlnZ2VyVHJhbnNpdGlvbkVuZCIsInNldFRyYW5zaXRpb25FbmRTdXBwb3J0Iiwic3BlY2lhbCIsImdldFVJRCIsInByZWZpeCIsIk1hdGgiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImdldEF0dHJpYnV0ZSIsImhyZWZBdHRyIiwidHJpbSIsImVyciIsInRyYW5zaXRpb25EZWxheSIsImZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uIiwiZmxvYXRUcmFuc2l0aW9uRGVsYXkiLCJzcGxpdCIsIm9mZnNldEhlaWdodCIsInN1cHBvcnRzVHJhbnNpdGlvbkVuZCIsIkJvb2xlYW4iLCJpc0VsZW1lbnQiLCJjb21wb25lbnROYW1lIiwiY29uZmlnVHlwZXMiLCJwcm9wZXJ0eSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlIiwidmFsdWVUeXBlIiwiUmVnRXhwIiwidGVzdCIsIkVycm9yIiwidG9VcHBlckNhc2UiLCJmaW5kU2hhZG93Um9vdCIsImF0dGFjaFNoYWRvdyIsImdldFJvb3ROb2RlIiwicm9vdCIsIlNoYWRvd1Jvb3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Z0JBdEZXLDBCQXNGSWxMLE9BdEZKLEVBc0ZhO0FBQ3RCLFFBQUksQ0FBQ2tDLFFBQVEsQ0FBQ2tELGVBQVQsQ0FBeUIrRixZQUE5QixFQUE0QztBQUMxQyxhQUFPLElBQVA7QUFDRCxLQUhxQixDQUt0Qjs7O0FBQ0EsUUFBSSxPQUFPbkwsT0FBTyxDQUFDb0wsV0FBZixLQUErQixVQUFuQyxFQUErQztBQUM3QyxVQUFNQyxJQUFJLEdBQUdyTCxPQUFPLENBQUNvTCxXQUFSLEVBQWI7QUFDQSxhQUFPQyxJQUFJLFlBQVlDLFVBQWhCLEdBQTZCRCxJQUE3QixHQUFvQyxJQUEzQztBQUNEOztBQUVELFFBQUlyTCxPQUFPLFlBQVlzTCxVQUF2QixFQUFtQztBQUNqQyxhQUFPdEwsT0FBUDtBQUNELEtBYnFCLENBZXRCOzs7QUFDQSxRQUFJLENBQUNBLE9BQU8sQ0FBQ2dELFVBQWIsRUFBeUI7QUFDdkIsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBT1YsSUFBSSxDQUFDNEksY0FBTCxDQUFvQmxMLE9BQU8sQ0FBQ2dELFVBQTVCLENBQVA7QUFDRDtBQTNHVSxDQUFiO0FBOEdBa0csdUJBQXVCO0FBRVI1RyxtRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMQSx3QiIsImZpbGUiOiJtb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMy4xKTogbW9kYWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgID0gJ21vZGFsJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgID0gJzQuMy4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgID0gJ2JzLm1vZGFsJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGJhY2tkcm9wIDogdHJ1ZSxcbiAga2V5Ym9hcmQgOiB0cnVlLFxuICBmb2N1cyAgICA6IHRydWUsXG4gIHNob3cgICAgIDogdHJ1ZVxufVxuXG5jb25zdCBEZWZhdWx0VHlwZSA9IHtcbiAgYmFja2Ryb3AgOiAnKGJvb2xlYW58c3RyaW5nKScsXG4gIGtleWJvYXJkIDogJ2Jvb2xlYW4nLFxuICBmb2N1cyAgICA6ICdib29sZWFuJyxcbiAgc2hvdyAgICAgOiAnYm9vbGVhbidcbn1cblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgICAgIDogYGhpZGUke0VWRU5UX0tFWX1gLFxuICBISURERU4gICAgICAgICAgICA6IGBoaWRkZW4ke0VWRU5UX0tFWX1gLFxuICBTSE9XICAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgICAgOiBgc2hvd24ke0VWRU5UX0tFWX1gLFxuICBGT0NVU0lOICAgICAgICAgICA6IGBmb2N1c2luJHtFVkVOVF9LRVl9YCxcbiAgUkVTSVpFICAgICAgICAgICAgOiBgcmVzaXplJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfRElTTUlTUyAgICAgOiBgY2xpY2suZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIEtFWURPV05fRElTTUlTUyAgIDogYGtleWRvd24uZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFVVBfRElTTUlTUyAgIDogYG1vdXNldXAuZGlzbWlzcyR7RVZFTlRfS0VZfWAsXG4gIE1PVVNFRE9XTl9ESVNNSVNTIDogYG1vdXNlZG93bi5kaXNtaXNzJHtFVkVOVF9LRVl9YCxcbiAgQ0xJQ0tfREFUQV9BUEkgICAgOiBgY2xpY2ske0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG59XG5cbmNvbnN0IENsYXNzTmFtZSA9IHtcbiAgU0NST0xMQUJMRSAgICAgICAgIDogJ21vZGFsLWRpYWxvZy1zY3JvbGxhYmxlJyxcbiAgU0NST0xMQkFSX01FQVNVUkVSIDogJ21vZGFsLXNjcm9sbGJhci1tZWFzdXJlJyxcbiAgQkFDS0RST1AgICAgICAgICAgIDogJ21vZGFsLWJhY2tkcm9wJyxcbiAgT1BFTiAgICAgICAgICAgICAgIDogJ21vZGFsLW9wZW4nLFxuICBGQURFICAgICAgICAgICAgICAgOiAnZmFkZScsXG4gIFNIT1cgICAgICAgICAgICAgICA6ICdzaG93J1xufVxuXG5jb25zdCBTZWxlY3RvciA9IHtcbiAgRElBTE9HICAgICAgICAgOiAnLm1vZGFsLWRpYWxvZycsXG4gIE1PREFMX0JPRFkgICAgIDogJy5tb2RhbC1ib2R5JyxcbiAgREFUQV9UT0dHTEUgICAgOiAnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nLFxuICBEQVRBX0RJU01JU1MgICA6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxuICBGSVhFRF9DT05URU5UICA6ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJyxcbiAgU1RJQ0tZX0NPTlRFTlQgOiAnLnN0aWNreS10b3AnXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDbGFzcyBEZWZpbml0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2VsZW1lbnQgICAgICAgICAgICAgPSBlbGVtZW50XG4gICAgdGhpcy5fZGlhbG9nICAgICAgICAgICAgICA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5ESUFMT0cpXG4gICAgdGhpcy5fYmFja2Ryb3AgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc1Nob3duICAgICAgICAgICAgID0gZmFsc2VcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gZmFsc2VcbiAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gZmFsc2VcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgICAgID0gZmFsc2VcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gMFxuICB9XG5cbiAgLy8gR2V0dGVyc1xuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICAvLyBQdWJsaWNcblxuICB0b2dnbGUocmVsYXRlZFRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3cocmVsYXRlZFRhcmdldClcbiAgfVxuXG4gIHNob3cocmVsYXRlZFRhcmdldCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0XG4gICAgfSlcblxuICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAodGhpcy5faXNTaG93biB8fCBzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG5cbiAgICB0aGlzLl9jaGVja1Njcm9sbGJhcigpXG4gICAgdGhpcy5fc2V0U2Nyb2xsYmFyKClcblxuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vbihcbiAgICAgIEV2ZW50LkNMSUNLX0RJU01JU1MsXG4gICAgICBTZWxlY3Rvci5EQVRBX0RJU01JU1MsXG4gICAgICAoZXZlbnQpID0+IHRoaXMuaGlkZShldmVudClcbiAgICApXG5cbiAgICAkKHRoaXMuX2RpYWxvZykub24oRXZlbnQuTU9VU0VET1dOX0RJU01JU1MsICgpID0+IHtcbiAgICAgICQodGhpcy5fZWxlbWVudCkub25lKEV2ZW50Lk1PVVNFVVBfRElTTUlTUywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcy5fZWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLl9pZ25vcmVCYWNrZHJvcENsaWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4gdGhpcy5fc2hvd0VsZW1lbnQocmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9pc1Nob3duIHx8IHRoaXMuX2lzVHJhbnNpdGlvbmluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaGlkZUV2ZW50ID0gJC5FdmVudChFdmVudC5ISURFKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmICghdGhpcy5faXNTaG93biB8fCBoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIGNvbnN0IHRyYW5zaXRpb24gPSAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5GQURFKVxuXG4gICAgaWYgKHRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IHRydWVcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRFc2NhcGVFdmVudCgpXG4gICAgdGhpcy5fc2V0UmVzaXplRXZlbnQoKVxuXG4gICAgJChkb2N1bWVudCkub2ZmKEV2ZW50LkZPQ1VTSU4pXG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuQ0xJQ0tfRElTTUlTUylcbiAgICAkKHRoaXMuX2RpYWxvZykub2ZmKEV2ZW50Lk1PVVNFRE9XTl9ESVNNSVNTKVxuXG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uICA9IFV0aWwuZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICAgJCh0aGlzLl9lbGVtZW50KVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIChldmVudCkgPT4gdGhpcy5faGlkZU1vZGFsKGV2ZW50KSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZU1vZGFsKClcbiAgICB9XG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIFt3aW5kb3csIHRoaXMuX2VsZW1lbnQsIHRoaXMuX2RpYWxvZ11cbiAgICAgIC5mb3JFYWNoKChodG1sRWxlbWVudCkgPT4gJChodG1sRWxlbWVudCkub2ZmKEVWRU5UX0tFWSkpXG5cbiAgICAvKipcbiAgICAgKiBgZG9jdW1lbnRgIGhhcyAyIGV2ZW50cyBgRXZlbnQuRk9DVVNJTmAgYW5kIGBFdmVudC5DTElDS19EQVRBX0FQSWBcbiAgICAgKiBEbyBub3QgbW92ZSBgZG9jdW1lbnRgIGluIGBodG1sRWxlbWVudHNgIGFycmF5XG4gICAgICogSXQgd2lsbCByZW1vdmUgYEV2ZW50LkNMSUNLX0RBVEFfQVBJYCBldmVudCB0aGF0IHNob3VsZCByZW1haW5cbiAgICAgKi9cbiAgICAkKGRvY3VtZW50KS5vZmYoRXZlbnQuRk9DVVNJTilcblxuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcblxuICAgIHRoaXMuX2NvbmZpZyAgICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5fZWxlbWVudCAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9kaWFsb2cgICAgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuX2JhY2tkcm9wICAgICAgICAgICAgPSBudWxsXG4gICAgdGhpcy5faXNTaG93biAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAgID0gbnVsbFxuICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBudWxsXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nICAgICA9IG51bGxcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCAgICAgID0gbnVsbFxuICB9XG5cbiAgaGFuZGxlVXBkYXRlKCkge1xuICAgIHRoaXMuX2FkanVzdERpYWxvZygpXG4gIH1cblxuICAvLyBQcml2YXRlXG5cbiAgX2dldENvbmZpZyhjb25maWcpIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAuLi5EZWZhdWx0LFxuICAgICAgLi4uY29uZmlnXG4gICAgfVxuICAgIFV0aWwudHlwZUNoZWNrQ29uZmlnKE5BTUUsIGNvbmZpZywgRGVmYXVsdFR5cGUpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX3Nob3dFbGVtZW50KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIHx8XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgIC8vIERvbid0IG1vdmUgbW9kYWwncyBET00gcG9zaXRpb25cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG5cbiAgICBpZiAoJCh0aGlzLl9kaWFsb2cpLmhhc0NsYXNzKENsYXNzTmFtZS5TQ1JPTExBQkxFKSkge1xuICAgICAgdGhpcy5fZGlhbG9nLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuTU9EQUxfQk9EWSkuc2Nyb2xsVG9wID0gMFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNjcm9sbFRvcCA9IDBcbiAgICB9XG5cbiAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgVXRpbC5yZWZsb3codGhpcy5fZWxlbWVudClcbiAgICB9XG5cbiAgICAkKHRoaXMuX2VsZW1lbnQpLmFkZENsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5mb2N1cykge1xuICAgICAgdGhpcy5fZW5mb3JjZUZvY3VzKClcbiAgICB9XG5cbiAgICBjb25zdCBzaG93bkV2ZW50ID0gJC5FdmVudChFdmVudC5TSE9XTiwge1xuICAgICAgcmVsYXRlZFRhcmdldFxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFuc2l0aW9uQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLmZvY3VzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgfVxuICAgICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICAgICQodGhpcy5fZWxlbWVudCkudHJpZ2dlcihzaG93bkV2ZW50KVxuICAgIH1cblxuICAgIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9kaWFsb2cpXG5cbiAgICAgICQodGhpcy5fZGlhbG9nKVxuICAgICAgICAub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsIHRyYW5zaXRpb25Db21wbGV0ZSlcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbkNvbXBsZXRlKClcbiAgICB9XG4gIH1cblxuICBfZW5mb3JjZUZvY3VzKCkge1xuICAgICQoZG9jdW1lbnQpXG4gICAgICAub2ZmKEV2ZW50LkZPQ1VTSU4pIC8vIEd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgICAgLm9uKEV2ZW50LkZPQ1VTSU4sIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZG9jdW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXG4gICAgICAgICAgICAkKHRoaXMuX2VsZW1lbnQpLmhhcyhldmVudC50YXJnZXQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG5cbiAgX3NldEVzY2FwZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLl9pc1Nob3duICYmIHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vbihFdmVudC5LRVlET1dOX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIGlmICghdGhpcy5faXNTaG93bikge1xuICAgICAgJCh0aGlzLl9lbGVtZW50KS5vZmYoRXZlbnQuS0VZRE9XTl9ESVNNSVNTKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgJCh3aW5kb3cpLm9uKEV2ZW50LlJFU0laRSwgKGV2ZW50KSA9PiB0aGlzLmhhbmRsZVVwZGF0ZShldmVudCkpXG4gICAgfSBlbHNlIHtcbiAgICAgICQod2luZG93KS5vZmYoRXZlbnQuUkVTSVpFKVxuICAgIH1cbiAgfVxuXG4gIF9oaWRlTW9kYWwoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcpXG4gICAgdGhpcy5faXNUcmFuc2l0aW9uaW5nID0gZmFsc2VcbiAgICB0aGlzLl9zaG93QmFja2Ryb3AoKCkgPT4ge1xuICAgICAgJChkb2N1bWVudC5ib2R5KS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTilcbiAgICAgIHRoaXMuX3Jlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhpcy5fcmVzZXRTY3JvbGxiYXIoKVxuICAgICAgJCh0aGlzLl9lbGVtZW50KS50cmlnZ2VyKEV2ZW50LkhJRERFTilcbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZUJhY2tkcm9wKCkge1xuICAgIGlmICh0aGlzLl9iYWNrZHJvcCkge1xuICAgICAgJCh0aGlzLl9iYWNrZHJvcCkucmVtb3ZlKClcbiAgICAgIHRoaXMuX2JhY2tkcm9wID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9zaG93QmFja2Ryb3AoY2FsbGJhY2spIHtcbiAgICBjb25zdCBhbmltYXRlID0gJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRkFERSlcbiAgICAgID8gQ2xhc3NOYW1lLkZBREUgOiAnJ1xuXG4gICAgaWYgKHRoaXMuX2lzU2hvd24gJiYgdGhpcy5fY29uZmlnLmJhY2tkcm9wKSB7XG4gICAgICB0aGlzLl9iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLl9iYWNrZHJvcC5jbGFzc05hbWUgPSBDbGFzc05hbWUuQkFDS0RST1BcblxuICAgICAgaWYgKGFuaW1hdGUpIHtcbiAgICAgICAgdGhpcy5fYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChhbmltYXRlKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KVxuXG4gICAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLX0RJU01JU1MsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlQmFja2Ryb3BDbGljaykge1xuICAgICAgICAgIHRoaXMuX2lnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgIT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgIFV0aWwucmVmbG93KHRoaXMuX2JhY2tkcm9wKVxuICAgICAgfVxuXG4gICAgICAkKHRoaXMuX2JhY2tkcm9wKS5hZGRDbGFzcyhDbGFzc05hbWUuU0hPVylcblxuICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgJCh0aGlzLl9iYWNrZHJvcClcbiAgICAgICAgLm9uZShVdGlsLlRSQU5TSVRJT05fRU5ELCBjYWxsYmFjaylcbiAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2lzU2hvd24gJiYgdGhpcy5fYmFja2Ryb3ApIHtcbiAgICAgICQodGhpcy5fYmFja2Ryb3ApLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgICBjb25zdCBjYWxsYmFja1JlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQmFja2Ryb3AoKVxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkZBREUpKSB7XG4gICAgICAgIGNvbnN0IGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uID0gVXRpbC5nZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCh0aGlzLl9iYWNrZHJvcClcblxuICAgICAgICAkKHRoaXMuX2JhY2tkcm9wKVxuICAgICAgICAgIC5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgY2FsbGJhY2tSZW1vdmUpXG4gICAgICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGJhY2tkcm9wVHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2tSZW1vdmUoKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHRoZSBmb2xsb3dpbmcgbWV0aG9kcyBhcmUgdXNlZCB0byBoYW5kbGUgb3ZlcmZsb3dpbmcgbW9kYWxzXG4gIC8vIHRvZG8gKGZhdCk6IHRoZXNlIHNob3VsZCBwcm9iYWJseSBiZSByZWZhY3RvcmVkIG91dCBvZiBtb2RhbC5qc1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgX2FkanVzdERpYWxvZygpIHtcbiAgICBjb25zdCBpc01vZGFsT3ZlcmZsb3dpbmcgPVxuICAgICAgdGhpcy5fZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICBpZiAoIXRoaXMuX2lzQm9keU92ZXJmbG93aW5nICYmIGlzTW9kYWxPdmVyZmxvd2luZykge1xuICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZyAmJiAhaXNNb2RhbE92ZXJmbG93aW5nKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3RoaXMuX3Njcm9sbGJhcldpZHRofXB4YFxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEFkanVzdG1lbnRzKCkge1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ0xlZnQgPSAnJ1xuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJydcbiAgfVxuXG4gIF9jaGVja1Njcm9sbGJhcigpIHtcbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIHRoaXMuX2lzQm9keU92ZXJmbG93aW5nID0gcmVjdC5sZWZ0ICsgcmVjdC5yaWdodCA8IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5fc2Nyb2xsYmFyV2lkdGggPSB0aGlzLl9nZXRTY3JvbGxiYXJXaWR0aCgpXG4gIH1cblxuICBfc2V0U2Nyb2xsYmFyKCkge1xuICAgIGlmICh0aGlzLl9pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgLy8gTm90ZTogRE9NTm9kZS5zdHlsZS5wYWRkaW5nUmlnaHQgcmV0dXJucyB0aGUgYWN0dWFsIHZhbHVlIG9yICcnIGlmIG5vdCBzZXRcbiAgICAgIC8vICAgd2hpbGUgJChET01Ob2RlKS5jc3MoJ3BhZGRpbmctcmlnaHQnKSByZXR1cm5zIHRoZSBjYWxjdWxhdGVkIHZhbHVlIG9yIDAgaWYgbm90IHNldFxuICAgICAgY29uc3QgZml4ZWRDb250ZW50ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLkZJWEVEX0NPTlRFTlQpKVxuICAgICAgY29uc3Qgc3RpY2t5Q29udGVudCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5TVElDS1lfQ09OVEVOVCkpXG5cbiAgICAgIC8vIEFkanVzdCBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICAgICQoZml4ZWRDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxQYWRkaW5nID0gZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHRcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGVsZW1lbnQpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAuZGF0YSgncGFkZGluZy1yaWdodCcsIGFjdHVhbFBhZGRpbmcpXG4gICAgICAgICAgLmNzcygncGFkZGluZy1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgICAgfSlcblxuICAgICAgLy8gQWRqdXN0IHN0aWNreSBjb250ZW50IG1hcmdpblxuICAgICAgJChzdGlja3lDb250ZW50KS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxNYXJnaW4gPSBlbGVtZW50LnN0eWxlLm1hcmdpblJpZ2h0XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRNYXJnaW4gPSAkKGVsZW1lbnQpLmNzcygnbWFyZ2luLXJpZ2h0JylcbiAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgIC5kYXRhKCdtYXJnaW4tcmlnaHQnLCBhY3R1YWxNYXJnaW4pXG4gICAgICAgICAgLmNzcygnbWFyZ2luLXJpZ2h0JywgYCR7cGFyc2VGbG9hdChjYWxjdWxhdGVkTWFyZ2luKSAtIHRoaXMuX3Njcm9sbGJhcldpZHRofXB4YClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkanVzdCBib2R5IHBhZGRpbmdcbiAgICAgIGNvbnN0IGFjdHVhbFBhZGRpbmcgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodFxuICAgICAgY29uc3QgY2FsY3VsYXRlZFBhZGRpbmcgPSAkKGRvY3VtZW50LmJvZHkpLmNzcygncGFkZGluZy1yaWdodCcpXG4gICAgICAkKGRvY3VtZW50LmJvZHkpXG4gICAgICAgIC5kYXRhKCdwYWRkaW5nLXJpZ2h0JywgYWN0dWFsUGFkZGluZylcbiAgICAgICAgLmNzcygncGFkZGluZy1yaWdodCcsIGAke3BhcnNlRmxvYXQoY2FsY3VsYXRlZFBhZGRpbmcpICsgdGhpcy5fc2Nyb2xsYmFyV2lkdGh9cHhgKVxuICAgIH1cblxuICAgICQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pXG4gIH1cblxuICBfcmVzZXRTY3JvbGxiYXIoKSB7XG4gICAgLy8gUmVzdG9yZSBmaXhlZCBjb250ZW50IHBhZGRpbmdcbiAgICBjb25zdCBmaXhlZENvbnRlbnQgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuRklYRURfQ09OVEVOVCkpXG4gICAgJChmaXhlZENvbnRlbnQpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBwYWRkaW5nID0gJChlbGVtZW50KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAgICQoZWxlbWVudCkucmVtb3ZlRGF0YSgncGFkZGluZy1yaWdodCcpXG4gICAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHBhZGRpbmcgPyBwYWRkaW5nIDogJydcbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBzdGlja3kgY29udGVudFxuICAgIGNvbnN0IGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke1NlbGVjdG9yLlNUSUNLWV9DT05URU5UfWApKVxuICAgICQoZWxlbWVudHMpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBtYXJnaW4gPSAkKGVsZW1lbnQpLmRhdGEoJ21hcmdpbi1yaWdodCcpXG4gICAgICBpZiAodHlwZW9mIG1hcmdpbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgJChlbGVtZW50KS5jc3MoJ21hcmdpbi1yaWdodCcsIG1hcmdpbikucmVtb3ZlRGF0YSgnbWFyZ2luLXJpZ2h0JylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gUmVzdG9yZSBib2R5IHBhZGRpbmdcbiAgICBjb25zdCBwYWRkaW5nID0gJChkb2N1bWVudC5ib2R5KS5kYXRhKCdwYWRkaW5nLXJpZ2h0JylcbiAgICAkKGRvY3VtZW50LmJvZHkpLnJlbW92ZURhdGEoJ3BhZGRpbmctcmlnaHQnKVxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gcGFkZGluZyA/IHBhZGRpbmcgOiAnJ1xuICB9XG5cbiAgX2dldFNjcm9sbGJhcldpZHRoKCkgeyAvLyB0aHggZC53YWxzaFxuICAgIGNvbnN0IHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9IENsYXNzTmFtZS5TQ1JPTExCQVJfTUVBU1VSRVJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdilcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aFxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KVxuICAgIHJldHVybiBzY3JvbGxiYXJXaWR0aFxuICB9XG5cbiAgLy8gU3RhdGljXG5cbiAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnLCByZWxhdGVkVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSlcbiAgICAgIGNvbnN0IF9jb25maWcgPSB7XG4gICAgICAgIC4uLkRlZmF1bHQsXG4gICAgICAgIC4uLiQodGhpcykuZGF0YSgpLFxuICAgICAgICAuLi50eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgPyBjb25maWcgOiB7fVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG5ldyBNb2RhbCh0aGlzLCBfY29uZmlnKVxuICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cbiAgICAgICAgZGF0YVtjb25maWddKHJlbGF0ZWRUYXJnZXQpXG4gICAgICB9IGVsc2UgaWYgKF9jb25maWcuc2hvdykge1xuICAgICAgICBkYXRhLnNob3cocmVsYXRlZFRhcmdldClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0tfREFUQV9BUEksIFNlbGVjdG9yLkRBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgbGV0IHRhcmdldFxuICBjb25zdCBzZWxlY3RvciA9IFV0aWwuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCh0aGlzKVxuXG4gIGlmIChzZWxlY3Rvcikge1xuICAgIHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gIH1cblxuICBjb25zdCBjb25maWcgPSAkKHRhcmdldCkuZGF0YShEQVRBX0tFWSlcbiAgICA/ICd0b2dnbGUnIDoge1xuICAgICAgLi4uJCh0YXJnZXQpLmRhdGEoKSxcbiAgICAgIC4uLiQodGhpcykuZGF0YSgpXG4gICAgfVxuXG4gIGlmICh0aGlzLnRhZ05hbWUgPT09ICdBJyB8fCB0aGlzLnRhZ05hbWUgPT09ICdBUkVBJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGNvbnN0ICR0YXJnZXQgPSAkKHRhcmdldCkub25lKEV2ZW50LlNIT1csIChzaG93RXZlbnQpID0+IHtcbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAvLyBPbmx5IHJlZ2lzdGVyIGZvY3VzIHJlc3RvcmVyIGlmIG1vZGFsIHdpbGwgYWN0dWFsbHkgZ2V0IHNob3duXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkdGFyZ2V0Lm9uZShFdmVudC5ISURERU4sICgpID0+IHtcbiAgICAgIGlmICgkKHRoaXMpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG5cbiAgTW9kYWwuX2pRdWVyeUludGVyZmFjZS5jYWxsKCQodGFyZ2V0KSwgY29uZmlnLCB0aGlzKVxufSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IE1vZGFsLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBNb2RhbFxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBNb2RhbC5falF1ZXJ5SW50ZXJmYWNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsXG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IHV0aWwuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFByaXZhdGUgVHJhbnNpdGlvbkVuZCBIZWxwZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuY29uc3QgTUFYX1VJRCA9IDEwMDAwMDBcbmNvbnN0IE1JTExJU0VDT05EU19NVUxUSVBMSUVSID0gMTAwMFxuXG4vLyBTaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5mdW5jdGlvbiB0b1R5cGUob2JqKSB7XG4gIHJldHVybiB7fS50b1N0cmluZy5jYWxsKG9iaikubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcbiAgcmV0dXJuIHtcbiAgICBiaW5kVHlwZTogVFJBTlNJVElPTl9FTkQsXG4gICAgZGVsZWdhdGVUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBoYW5kbGUoZXZlbnQpIHtcbiAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuaXModGhpcykpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZmluZWRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbkVuZEVtdWxhdG9yKGR1cmF0aW9uKSB7XG4gIGxldCBjYWxsZWQgPSBmYWxzZVxuXG4gICQodGhpcykub25lKFV0aWwuVFJBTlNJVElPTl9FTkQsICgpID0+IHtcbiAgICBjYWxsZWQgPSB0cnVlXG4gIH0pXG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIFV0aWwudHJpZ2dlclRyYW5zaXRpb25FbmQodGhpcylcbiAgICB9XG4gIH0sIGR1cmF0aW9uKVxuXG4gIHJldHVybiB0aGlzXG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xuICAkLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kID0gdHJhbnNpdGlvbkVuZEVtdWxhdG9yXG4gICQuZXZlbnQuc3BlY2lhbFtVdGlsLlRSQU5TSVRJT05fRU5EXSA9IGdldFNwZWNpYWxUcmFuc2l0aW9uRW5kRXZlbnQoKVxufVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBQdWJsaWMgVXRpbCBBcGlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgVXRpbCA9IHtcblxuICBUUkFOU0lUSU9OX0VORDogJ2JzVHJhbnNpdGlvbkVuZCcsXG5cbiAgZ2V0VUlEKHByZWZpeCkge1xuICAgIGRvIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICBwcmVmaXggKz0gfn4oTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpIC8vIFwifn5cIiBhY3RzIGxpa2UgYSBmYXN0ZXIgTWF0aC5mbG9vcigpIGhlcmVcbiAgICB9IHdoaWxlIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVmaXgpKVxuICAgIHJldHVybiBwcmVmaXhcbiAgfSxcblxuICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XG4gICAgICBjb25zdCBocmVmQXR0ciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gaHJlZkF0dHIgJiYgaHJlZkF0dHIgIT09ICcjJyA/IGhyZWZBdHRyLnRyaW0oKSA6ICcnXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogbnVsbFxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBHZXQgdHJhbnNpdGlvbi1kdXJhdGlvbiBvZiB0aGUgZWxlbWVudFxuICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb24gPSAkKGVsZW1lbnQpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicpXG4gICAgbGV0IHRyYW5zaXRpb25EZWxheSA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWRlbGF5JylcblxuICAgIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSlcblxuICAgIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgICBpZiAoIWZsb2F0VHJhbnNpdGlvbkR1cmF0aW9uICYmICFmbG9hdFRyYW5zaXRpb25EZWxheSkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICAvLyBJZiBtdWx0aXBsZSBkdXJhdGlvbnMgYXJlIGRlZmluZWQsIHRha2UgdGhlIGZpcnN0XG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLnNwbGl0KCcsJylbMF1cbiAgICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbiAgfSxcblxuICByZWZsb3coZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Lm9mZnNldEhlaWdodFxuICB9LFxuXG4gIHRyaWdnZXJUcmFuc2l0aW9uRW5kKGVsZW1lbnQpIHtcbiAgICAkKGVsZW1lbnQpLnRyaWdnZXIoVFJBTlNJVElPTl9FTkQpXG4gIH0sXG5cbiAgLy8gVE9ETzogUmVtb3ZlIGluIHY1XG4gIHN1cHBvcnRzVHJhbnNpdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIChvYmpbMF0gfHwgb2JqKS5ub2RlVHlwZVxuICB9LFxuXG4gIHR5cGVDaGVja0NvbmZpZyhjb21wb25lbnROYW1lLCBjb25maWcsIGNvbmZpZ1R5cGVzKSB7XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkVHlwZXMgPSBjb25maWdUeXBlc1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWUgICAgICAgICA9IGNvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgY29uc3QgdmFsdWVUeXBlICAgICA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKVxuICAgICAgICAgID8gJ2VsZW1lbnQnIDogdG9UeXBlKHZhbHVlKVxuXG4gICAgICAgIGlmICghbmV3IFJlZ0V4cChleHBlY3RlZFR5cGVzKS50ZXN0KHZhbHVlVHlwZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcbiAgICAgICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcbiAgICAgICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGZpbmRTaGFkb3dSb290KGVsZW1lbnQpIHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hdHRhY2hTaGFkb3cpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQ2FuIGZpbmQgdGhlIHNoYWRvdyByb290IG90aGVyd2lzZSBpdCdsbCByZXR1cm4gdGhlIGRvY3VtZW50XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByb290ID0gZWxlbWVudC5nZXRSb290Tm9kZSgpXG4gICAgICByZXR1cm4gcm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyByb290IDogbnVsbFxuICAgIH1cblxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG5cbiAgICAvLyB3aGVuIHdlIGRvbid0IGZpbmQgYSBzaGFkb3cgcm9vdFxuICAgIGlmICghZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBVdGlsLmZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbiAgfVxufVxuXG5zZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCgpXG5cbmV4cG9ydCBkZWZhdWx0IFV0aWxcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=