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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;

for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/js/util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var NAME = 'dropdown';
var VERSION = '4.3.1';
var DATA_KEY = 'bs.dropdown';
var EVENT_KEY = ".".concat(DATA_KEY);
var DATA_API_KEY = '.data-api';
var JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];
var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

var REGEXP_KEYDOWN = new RegExp("".concat(ARROW_UP_KEYCODE, "|").concat(ARROW_DOWN_KEYCODE, "|").concat(ESCAPE_KEYCODE));
var Event = {
  HIDE: "hide".concat(EVENT_KEY),
  HIDDEN: "hidden".concat(EVENT_KEY),
  SHOW: "show".concat(EVENT_KEY),
  SHOWN: "shown".concat(EVENT_KEY),
  CLICK: "click".concat(EVENT_KEY),
  CLICK_DATA_API: "click".concat(EVENT_KEY).concat(DATA_API_KEY),
  KEYDOWN_DATA_API: "keydown".concat(EVENT_KEY).concat(DATA_API_KEY),
  KEYUP_DATA_API: "keyup".concat(EVENT_KEY).concat(DATA_API_KEY)
};
var ClassName = {
  DISABLED: 'disabled',
  SHOW: 'show',
  DROPUP: 'dropup',
  DROPRIGHT: 'dropright',
  DROPLEFT: 'dropleft',
  MENURIGHT: 'dropdown-menu-right',
  MENULEFT: 'dropdown-menu-left',
  POSITION_STATIC: 'position-static'
};
var Selector = {
  DATA_TOGGLE: '[data-toggle="dropdown"]',
  FORM_CHILD: '.dropdown form',
  MENU: '.dropdown-menu',
  NAVBAR_NAV: '.navbar-nav',
  VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
};
var AttachmentMap = {
  TOP: 'top-start',
  TOPEND: 'top-end',
  BOTTOM: 'bottom-start',
  BOTTOMEND: 'bottom-end',
  RIGHT: 'right-start',
  RIGHTEND: 'right-end',
  LEFT: 'left-start',
  LEFTEND: 'left-end'
};
var Default = {
  offset: 0,
  flip: true,
  boundary: 'scrollParent',
  reference: 'toggle',
  display: 'dynamic'
};
var DefaultType = {
  offset: '(number|string|function)',
  flip: 'boolean',
  boundary: '(string|element)',
  reference: '(string|element)',
  display: 'string'
};
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Dropdown =
/*#__PURE__*/
function () {
  function Dropdown(element, config) {
    _classCallCheck(this, Dropdown);

    this._element = element;
    this._popper = null;
    this._config = this._getConfig(config);
    this._menu = this._getMenuElement();
    this._inNavbar = this._detectNavbar();

    this._addEventListeners();
  } // Getters


  _createClass(Dropdown, [{
    key: "toggle",
    // Public
    value: function toggle() {
      if (this._element.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOW, relatedTarget);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof popper_js__WEBPACK_IMPORTED_MODULE_1__["default"] === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (_util__WEBPACK_IMPORTED_MODULE_2__["default"].isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).addClass(ClassName.POSITION_STATIC);
        }

        this._popper = new popper_js__WEBPACK_IMPORTED_MODULE_1__["default"](referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).closest(Selector.NAVBAR_NAV).length === 0) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).children().on('mouseover', null, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).toggleClass(ClassName.SHOW);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).toggleClass(ClassName.SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOWN, relatedTarget));
    }
  }, {
    key: "show",
    value: function show() {
      if (this._element.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.DISABLED) || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).toggleClass(ClassName.SHOW);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).toggleClass(ClassName.SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.SHOWN, relatedTarget));
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this._element.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).hasClass(ClassName.DISABLED) || !jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).toggleClass(ClassName.SHOW);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).toggleClass(ClassName.SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDDEN, relatedTarget));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.removeData(this._element, DATA_KEY);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private

  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this = this;

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(config) {
      config = _objectSpread({}, this.constructor.Default, {}, jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).data(), {}, config);
      _util__WEBPACK_IMPORTED_MODULE_2__["default"].typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    }
  }, {
    key: "_getMenuElement",
    value: function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector.MENU);
        }
      }

      return this._menu;
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var $parentDropdown = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        placement = AttachmentMap.TOP;

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    }
  }, {
    key: "_detectNavbar",
    value: function _detectNavbar() {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).closest('.navbar').length > 0;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, {}, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return popperConfig;
    } // Static

  }], [{
    key: "_jQueryInterface",
    value: function _jQueryInterface(config) {
      return this.each(function () {
        var data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data(DATA_KEY, data);
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
    key: "_clearMenus",
    value: function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = jquery__WEBPACK_IMPORTED_MODULE_0___default()(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDE, relatedTarget);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(document.body).children().off('mouseover', null, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(dropdownMenu).removeClass(ClassName.SHOW);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).removeClass(ClassName.SHOW).trigger(jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Event(Event.HIDDEN, relatedTarget));
      }
    }
  }, {
    key: "_getParentFromElement",
    value: function _getParentFromElement(element) {
      var parent;
      var selector = _util__WEBPACK_IMPORTED_MODULE_2__["default"].getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity

  }, {
    key: "_dataApiKeydownHandler",
    value: function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = jquery__WEBPACK_IMPORTED_MODULE_0___default()(parent).hasClass(ClassName.SHOW);

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector.DATA_TOGGLE);
          jquery__WEBPACK_IMPORTED_MODULE_0___default()(toggle).trigger('focus');
        }

        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector.VISIBLE_ITEMS));

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
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
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }]);

  return Dropdown;
}();
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */


jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on("".concat(Event.CLICK_DATA_API, " ").concat(Event.KEYUP_DATA_API), Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
  event.preventDefault();
  event.stopPropagation();

  Dropdown._jQueryInterface.call(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this), 'toggle');
}).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
  e.stopPropagation();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Dropdown._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Dropdown;

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Dropdown._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

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

/***/ 2:
/*!**********************************!*\
  !*** multi ./src/js/dropdown.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sites\hydrosystems-kdi\wp-content\themes\sbc\src\js\dropdown.js */"./src/js/dropdown.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BvcHBlci5qcy9kaXN0L2VzbS9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiaXNCcm93c2VyIiwid2luZG93IiwiZG9jdW1lbnQiLCJsb25nZXJUaW1lb3V0QnJvd3NlcnMiLCJ0aW1lb3V0RHVyYXRpb24iLCJpIiwibGVuZ3RoIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsIm1pY3JvdGFza0RlYm91bmNlIiwiZm4iLCJjYWxsZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJ0YXNrRGVib3VuY2UiLCJzY2hlZHVsZWQiLCJzZXRUaW1lb3V0Iiwic3VwcG9ydHNNaWNyb1Rhc2tzIiwiZGVib3VuY2UiLCJpc0Z1bmN0aW9uIiwiZnVuY3Rpb25Ub0NoZWNrIiwiZ2V0VHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSIsImVsZW1lbnQiLCJwcm9wZXJ0eSIsIm5vZGVUeXBlIiwib3duZXJEb2N1bWVudCIsImRlZmF1bHRWaWV3IiwiY3NzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFBhcmVudE5vZGUiLCJub2RlTmFtZSIsInBhcmVudE5vZGUiLCJob3N0IiwiZ2V0U2Nyb2xsUGFyZW50IiwiYm9keSIsIl9nZXRTdHlsZUNvbXB1dGVkUHJvcCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwidGVzdCIsImlzSUUxMSIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwiaXNJRTEwIiwiaXNJRSIsInZlcnNpb24iLCJnZXRPZmZzZXRQYXJlbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJub09mZnNldFBhcmVudCIsIm9mZnNldFBhcmVudCIsIm5leHRFbGVtZW50U2libGluZyIsImlzT2Zmc2V0Q29udGFpbmVyIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJnZXRSb290Iiwibm9kZSIsImZpbmRDb21tb25PZmZzZXRQYXJlbnQiLCJlbGVtZW50MSIsImVsZW1lbnQyIiwib3JkZXIiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsIk5vZGUiLCJET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkciLCJzdGFydCIsImVuZCIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZXRTdGFydCIsInNldEVuZCIsImNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIiwiY29udGFpbnMiLCJlbGVtZW50MXJvb3QiLCJnZXRTY3JvbGwiLCJzaWRlIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwidXBwZXJTaWRlIiwiaHRtbCIsInNjcm9sbGluZ0VsZW1lbnQiLCJpbmNsdWRlU2Nyb2xsIiwicmVjdCIsInN1YnRyYWN0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsTGVmdCIsIm1vZGlmaWVyIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiZ2V0Qm9yZGVyc1NpemUiLCJzdHlsZXMiLCJheGlzIiwic2lkZUEiLCJzaWRlQiIsInBhcnNlRmxvYXQiLCJnZXRTaXplIiwiY29tcHV0ZWRTdHlsZSIsIk1hdGgiLCJtYXgiLCJwYXJzZUludCIsImdldFdpbmRvd1NpemVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJjcmVhdGVDbGFzcyIsImRlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImtleSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsIm9iaiIsInZhbHVlIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJzb3VyY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImdldENsaWVudFJlY3QiLCJvZmZzZXRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZSIsInJlc3VsdCIsInNpemVzIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJob3JpelNjcm9sbGJhciIsIm9mZnNldFdpZHRoIiwidmVydFNjcm9sbGJhciIsIm9mZnNldEhlaWdodCIsImdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSIsImNoaWxkcmVuIiwicGFyZW50IiwiZml4ZWRQb3NpdGlvbiIsImlzSFRNTCIsImNoaWxkcmVuUmVjdCIsInBhcmVudFJlY3QiLCJzY3JvbGxQYXJlbnQiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlckxlZnRXaWR0aCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUiLCJleGNsdWRlU2Nyb2xsIiwicmVsYXRpdmVPZmZzZXQiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJvZmZzZXQiLCJpc0ZpeGVkIiwiZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJlbCIsImdldEJvdW5kYXJpZXMiLCJwb3BwZXIiLCJyZWZlcmVuY2UiLCJwYWRkaW5nIiwiYm91bmRhcmllc0VsZW1lbnQiLCJib3VuZGFyaWVzIiwiYm91bmRhcmllc05vZGUiLCJfZ2V0V2luZG93U2l6ZXMiLCJpc1BhZGRpbmdOdW1iZXIiLCJnZXRBcmVhIiwiX3JlZiIsImNvbXB1dGVBdXRvUGxhY2VtZW50IiwicGxhY2VtZW50IiwicmVmUmVjdCIsInJlY3RzIiwic29ydGVkQXJlYXMiLCJrZXlzIiwibWFwIiwiYXJlYSIsInNvcnQiLCJhIiwiYiIsImZpbHRlcmVkQXJlYXMiLCJmaWx0ZXIiLCJfcmVmMiIsImNvbXB1dGVkUGxhY2VtZW50IiwidmFyaWF0aW9uIiwic3BsaXQiLCJnZXRSZWZlcmVuY2VPZmZzZXRzIiwic3RhdGUiLCJjb21tb25PZmZzZXRQYXJlbnQiLCJnZXRPdXRlclNpemVzIiwieCIsIm1hcmdpbkJvdHRvbSIsInkiLCJtYXJnaW5SaWdodCIsImdldE9wcG9zaXRlUGxhY2VtZW50IiwiaGFzaCIsInJlcGxhY2UiLCJtYXRjaGVkIiwiZ2V0UG9wcGVyT2Zmc2V0cyIsInJlZmVyZW5jZU9mZnNldHMiLCJwb3BwZXJSZWN0IiwicG9wcGVyT2Zmc2V0cyIsImlzSG9yaXoiLCJtYWluU2lkZSIsInNlY29uZGFyeVNpZGUiLCJtZWFzdXJlbWVudCIsInNlY29uZGFyeU1lYXN1cmVtZW50IiwiZmluZCIsImFyciIsImNoZWNrIiwiQXJyYXkiLCJmaW5kSW5kZXgiLCJwcm9wIiwiY3VyIiwibWF0Y2giLCJydW5Nb2RpZmllcnMiLCJtb2RpZmllcnMiLCJkYXRhIiwiZW5kcyIsIm1vZGlmaWVyc1RvUnVuIiwic2xpY2UiLCJmb3JFYWNoIiwiY29uc29sZSIsIndhcm4iLCJlbmFibGVkIiwidXBkYXRlIiwiaXNEZXN0cm95ZWQiLCJhcnJvd1N0eWxlcyIsImF0dHJpYnV0ZXMiLCJmbGlwcGVkIiwib3B0aW9ucyIsInBvc2l0aW9uRml4ZWQiLCJmbGlwIiwib3JpZ2luYWxQbGFjZW1lbnQiLCJwb3NpdGlvbiIsImlzQ3JlYXRlZCIsIm9uQ3JlYXRlIiwib25VcGRhdGUiLCJpc01vZGlmaWVyRW5hYmxlZCIsIm1vZGlmaWVyTmFtZSIsInNvbWUiLCJuYW1lIiwiZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lIiwicHJlZml4ZXMiLCJ1cHBlclByb3AiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInByZWZpeCIsInRvQ2hlY2siLCJzdHlsZSIsImRlc3Ryb3kiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ3aWxsQ2hhbmdlIiwiZGlzYWJsZUV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlT25EZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJnZXRXaW5kb3ciLCJhdHRhY2hUb1Njcm9sbFBhcmVudHMiLCJldmVudCIsImNhbGxiYWNrIiwic2Nyb2xsUGFyZW50cyIsImlzQm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicHVzaCIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJ1cGRhdGVCb3VuZCIsInNjcm9sbEVsZW1lbnQiLCJldmVudHNFbmFibGVkIiwiZW5hYmxlRXZlbnRMaXN0ZW5lcnMiLCJzY2hlZHVsZVVwZGF0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaXNOdW1lcmljIiwibiIsImlzTmFOIiwiaXNGaW5pdGUiLCJzZXRTdHlsZXMiLCJ1bml0Iiwic2V0QXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsImFwcGx5U3R5bGUiLCJhcnJvd0VsZW1lbnQiLCJhcHBseVN0eWxlT25Mb2FkIiwibW9kaWZpZXJPcHRpb25zIiwiZ2V0Um91bmRlZE9mZnNldHMiLCJzaG91bGRSb3VuZCIsIl9kYXRhJG9mZnNldHMiLCJyb3VuZCIsImZsb29yIiwibm9Sb3VuZCIsInYiLCJyZWZlcmVuY2VXaWR0aCIsInBvcHBlcldpZHRoIiwiaXNWZXJ0aWNhbCIsImlzVmFyaWF0aW9uIiwic2FtZVdpZHRoUGFyaXR5IiwiYm90aE9kZFdpZHRoIiwiaG9yaXpvbnRhbFRvSW50ZWdlciIsInZlcnRpY2FsVG9JbnRlZ2VyIiwiaXNGaXJlZm94IiwiY29tcHV0ZVN0eWxlIiwibGVnYWN5R3B1QWNjZWxlcmF0aW9uT3B0aW9uIiwiZ3B1QWNjZWxlcmF0aW9uIiwib2Zmc2V0UGFyZW50UmVjdCIsImRldmljZVBpeGVsUmF0aW8iLCJwcmVmaXhlZFByb3BlcnR5IiwiaW52ZXJ0VG9wIiwiaW52ZXJ0TGVmdCIsImFycm93IiwiaXNNb2RpZmllclJlcXVpcmVkIiwicmVxdWVzdGluZ05hbWUiLCJyZXF1ZXN0ZWROYW1lIiwicmVxdWVzdGluZyIsImlzUmVxdWlyZWQiLCJfcmVxdWVzdGluZyIsInJlcXVlc3RlZCIsIl9kYXRhJG9mZnNldHMkYXJyb3ciLCJxdWVyeVNlbGVjdG9yIiwibGVuIiwic2lkZUNhcGl0YWxpemVkIiwidG9Mb3dlckNhc2UiLCJhbHRTaWRlIiwib3BTaWRlIiwiYXJyb3dFbGVtZW50U2l6ZSIsImNlbnRlciIsInBvcHBlck1hcmdpblNpZGUiLCJwb3BwZXJCb3JkZXJTaWRlIiwic2lkZVZhbHVlIiwibWluIiwiZ2V0T3Bwb3NpdGVWYXJpYXRpb24iLCJwbGFjZW1lbnRzIiwidmFsaWRQbGFjZW1lbnRzIiwiY2xvY2t3aXNlIiwiY291bnRlciIsImluZGV4IiwiY29uY2F0IiwicmV2ZXJzZSIsIkJFSEFWSU9SUyIsIkZMSVAiLCJDTE9DS1dJU0UiLCJDT1VOVEVSQ0xPQ0tXSVNFIiwicGxhY2VtZW50T3Bwb3NpdGUiLCJmbGlwT3JkZXIiLCJiZWhhdmlvciIsInN0ZXAiLCJyZWZPZmZzZXRzIiwib3ZlcmxhcHNSZWYiLCJvdmVyZmxvd3NMZWZ0Iiwib3ZlcmZsb3dzUmlnaHQiLCJvdmVyZmxvd3NUb3AiLCJvdmVyZmxvd3NCb3R0b20iLCJvdmVyZmxvd3NCb3VuZGFyaWVzIiwiZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIiwiZmxpcFZhcmlhdGlvbnMiLCJmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50IiwiZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQiLCJmbGlwcGVkVmFyaWF0aW9uIiwia2VlcFRvZ2V0aGVyIiwidG9WYWx1ZSIsInN0ciIsInNpemUiLCJwYXJzZU9mZnNldCIsImJhc2VQbGFjZW1lbnQiLCJ1c2VIZWlnaHQiLCJmcmFnbWVudHMiLCJmcmFnIiwidHJpbSIsImRpdmlkZXIiLCJzZWFyY2giLCJzcGxpdFJlZ2V4Iiwib3BzIiwib3AiLCJtZXJnZVdpdGhQcmV2aW91cyIsInJlZHVjZSIsImluZGV4MiIsInByZXZlbnRPdmVyZmxvdyIsInRyYW5zZm9ybVByb3AiLCJwb3BwZXJTdHlsZXMiLCJ0cmFuc2Zvcm0iLCJwcmlvcml0eSIsInByaW1hcnkiLCJlc2NhcGVXaXRoUmVmZXJlbmNlIiwic2Vjb25kYXJ5Iiwic2hpZnQiLCJzaGlmdHZhcmlhdGlvbiIsInNoaWZ0T2Zmc2V0cyIsImhpZGUiLCJib3VuZCIsImlubmVyIiwic3VidHJhY3RMZW5ndGgiLCJvbkxvYWQiLCJEZWZhdWx0cyIsIlBvcHBlciIsIl90aGlzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImpxdWVyeSIsInVwZGF0ZSQkMSIsImRlc3Ryb3kkJDEiLCJlbmFibGVFdmVudExpc3RlbmVycyQkMSIsImRpc2FibGVFdmVudExpc3RlbmVycyQkMSIsIlV0aWxzIiwiZ2xvYmFsIiwiUG9wcGVyVXRpbHMiLCJnIiwiRnVuY3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiTkFNRSIsIlZFUlNJT04iLCJEQVRBX0tFWSIsIkVWRU5UX0tFWSIsIkRBVEFfQVBJX0tFWSIsIkpRVUVSWV9OT19DT05GTElDVCIsIiQiLCJFU0NBUEVfS0VZQ09ERSIsIlNQQUNFX0tFWUNPREUiLCJUQUJfS0VZQ09ERSIsIkFSUk9XX1VQX0tFWUNPREUiLCJBUlJPV19ET1dOX0tFWUNPREUiLCJSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0giLCJSRUdFWFBfS0VZRE9XTiIsIlJlZ0V4cCIsIkV2ZW50IiwiSElERSIsIkhJRERFTiIsIlNIT1ciLCJTSE9XTiIsIkNMSUNLIiwiQ0xJQ0tfREFUQV9BUEkiLCJLRVlET1dOX0RBVEFfQVBJIiwiS0VZVVBfREFUQV9BUEkiLCJDbGFzc05hbWUiLCJESVNBQkxFRCIsIkRST1BVUCIsIkRST1BSSUdIVCIsIkRST1BMRUZUIiwiTUVOVVJJR0hUIiwiTUVOVUxFRlQiLCJQT1NJVElPTl9TVEFUSUMiLCJTZWxlY3RvciIsIkRBVEFfVE9HR0xFIiwiRk9STV9DSElMRCIsIk1FTlUiLCJOQVZCQVJfTkFWIiwiVklTSUJMRV9JVEVNUyIsIkF0dGFjaG1lbnRNYXAiLCJUT1AiLCJUT1BFTkQiLCJCT1RUT00iLCJCT1RUT01FTkQiLCJSSUdIVCIsIlJJR0hURU5EIiwiTEVGVCIsIkxFRlRFTkQiLCJEZWZhdWx0IiwiYm91bmRhcnkiLCJkaXNwbGF5IiwiRGVmYXVsdFR5cGUiLCJEcm9wZG93biIsImNvbmZpZyIsIl9lbGVtZW50IiwiX3BvcHBlciIsIl9jb25maWciLCJfZ2V0Q29uZmlnIiwiX21lbnUiLCJfZ2V0TWVudUVsZW1lbnQiLCJfaW5OYXZiYXIiLCJfZGV0ZWN0TmF2YmFyIiwiX2FkZEV2ZW50TGlzdGVuZXJzIiwiZGlzYWJsZWQiLCJoYXNDbGFzcyIsIl9nZXRQYXJlbnRGcm9tRWxlbWVudCIsImlzQWN0aXZlIiwiX2NsZWFyTWVudXMiLCJyZWxhdGVkVGFyZ2V0Iiwic2hvd0V2ZW50IiwidHJpZ2dlciIsImlzRGVmYXVsdFByZXZlbnRlZCIsInJlZmVyZW5jZUVsZW1lbnQiLCJVdGlsIiwiaXNFbGVtZW50IiwiYWRkQ2xhc3MiLCJfZ2V0UG9wcGVyQ29uZmlnIiwiY2xvc2VzdCIsIm9uIiwibm9vcCIsImZvY3VzIiwidG9nZ2xlQ2xhc3MiLCJoaWRlRXZlbnQiLCJyZW1vdmVEYXRhIiwib2ZmIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0b2dnbGUiLCJjb25zdHJ1Y3RvciIsInR5cGVDaGVja0NvbmZpZyIsIiRwYXJlbnREcm9wZG93biIsInBvcHBlckNvbmZpZyIsIl9nZXRQbGFjZW1lbnQiLCJfZ2V0T2Zmc2V0IiwiZWFjaCIsIndoaWNoIiwidHlwZSIsInRvZ2dsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udGV4dCIsImNsaWNrRXZlbnQiLCJkcm9wZG93bk1lbnUiLCJ0YWdOYW1lIiwicmVtb3ZlQ2xhc3MiLCJzZWxlY3RvciIsImdldFNlbGVjdG9yRnJvbUVsZW1lbnQiLCJpdGVtcyIsIl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIiLCJfalF1ZXJ5SW50ZXJmYWNlIiwibm9Db25mbGljdCIsIlRSQU5TSVRJT05fRU5EIiwiTUFYX1VJRCIsIk1JTExJU0VDT05EU19NVUxUSVBMSUVSIiwidG9UeXBlIiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImJpbmRUeXBlIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlIiwiaXMiLCJoYW5kbGVPYmoiLCJoYW5kbGVyIiwiYXBwbHkiLCJ0cmFuc2l0aW9uRW5kRW11bGF0b3IiLCJkdXJhdGlvbiIsIm9uZSIsInRyaWdnZXJUcmFuc2l0aW9uRW5kIiwic2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQiLCJlbXVsYXRlVHJhbnNpdGlvbkVuZCIsInNwZWNpYWwiLCJnZXRVSUQiLCJyYW5kb20iLCJnZXRFbGVtZW50QnlJZCIsImdldEF0dHJpYnV0ZSIsImhyZWZBdHRyIiwiZXJyIiwiZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uRGVsYXkiLCJmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiIsImZsb2F0VHJhbnNpdGlvbkRlbGF5IiwicmVmbG93Iiwic3VwcG9ydHNUcmFuc2l0aW9uRW5kIiwiQm9vbGVhbiIsImNvbXBvbmVudE5hbWUiLCJjb25maWdUeXBlcyIsImV4cGVjdGVkVHlwZXMiLCJ2YWx1ZVR5cGUiLCJFcnJvciIsImZpbmRTaGFkb3dSb290IiwiYXR0YWNoU2hhZG93IiwiZ2V0Um9vdE5vZGUiLCJyb290IiwiU2hhZG93Um9vdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsSUFBSUEsU0FBUyxHQUFHLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBT0MsUUFBUCxLQUFvQixXQUFyRTtBQUVBLElBQUlDLHFCQUFxQixHQUFHLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsQ0FBNUI7QUFDQSxJQUFJQyxlQUFlLEdBQUcsQ0FBdEI7O0FBQ0EsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixxQkFBcUIsQ0FBQ0csTUFBMUMsRUFBa0RELENBQUMsSUFBSSxDQUF2RCxFQUEwRDtBQUN4RCxNQUFJTCxTQUFTLElBQUlPLFNBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsT0FBcEIsQ0FBNEJOLHFCQUFxQixDQUFDRSxDQUFELENBQWpELEtBQXlELENBQTFFLEVBQTZFO0FBQzNFRCxtQkFBZSxHQUFHLENBQWxCO0FBQ0E7QUFDRDtBQUNGOztBQUVELFNBQVNNLGlCQUFULENBQTJCQyxFQUEzQixFQUErQjtBQUM3QixNQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLFNBQU8sWUFBWTtBQUNqQixRQUFJQSxNQUFKLEVBQVk7QUFDVjtBQUNEOztBQUNEQSxVQUFNLEdBQUcsSUFBVDtBQUNBWCxVQUFNLENBQUNZLE9BQVAsQ0FBZUMsT0FBZixHQUF5QkMsSUFBekIsQ0FBOEIsWUFBWTtBQUN4Q0gsWUFBTSxHQUFHLEtBQVQ7QUFDQUQsUUFBRTtBQUNILEtBSEQ7QUFJRCxHQVREO0FBVUQ7O0FBRUQsU0FBU0ssWUFBVCxDQUFzQkwsRUFBdEIsRUFBMEI7QUFDeEIsTUFBSU0sU0FBUyxHQUFHLEtBQWhCO0FBQ0EsU0FBTyxZQUFZO0FBQ2pCLFFBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNkQSxlQUFTLEdBQUcsSUFBWjtBQUNBQyxnQkFBVSxDQUFDLFlBQVk7QUFDckJELGlCQUFTLEdBQUcsS0FBWjtBQUNBTixVQUFFO0FBQ0gsT0FIUyxFQUdQUCxlQUhPLENBQVY7QUFJRDtBQUNGLEdBUkQ7QUFTRDs7QUFFRCxJQUFJZSxrQkFBa0IsR0FBR25CLFNBQVMsSUFBSUMsTUFBTSxDQUFDWSxPQUE3QztBQUVBOzs7Ozs7Ozs7O0FBU0EsSUFBSU8sUUFBUSxHQUFHRCxrQkFBa0IsR0FBR1QsaUJBQUgsR0FBdUJNLFlBQXhEO0FBRUE7Ozs7Ozs7O0FBT0EsU0FBU0ssVUFBVCxDQUFvQkMsZUFBcEIsRUFBcUM7QUFDbkMsTUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxTQUFPRCxlQUFlLElBQUlDLE9BQU8sQ0FBQ0MsUUFBUixDQUFpQkMsSUFBakIsQ0FBc0JILGVBQXRCLE1BQTJDLG1CQUFyRTtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVNJLHdCQUFULENBQWtDQyxPQUFsQyxFQUEyQ0MsUUFBM0MsRUFBcUQ7QUFDbkQsTUFBSUQsT0FBTyxDQUFDRSxRQUFSLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFdBQU8sRUFBUDtBQUNELEdBSGtELENBSW5EOzs7QUFDQSxNQUFJNUIsTUFBTSxHQUFHMEIsT0FBTyxDQUFDRyxhQUFSLENBQXNCQyxXQUFuQztBQUNBLE1BQUlDLEdBQUcsR0FBRy9CLE1BQU0sQ0FBQ2dDLGdCQUFQLENBQXdCTixPQUF4QixFQUFpQyxJQUFqQyxDQUFWO0FBQ0EsU0FBT0MsUUFBUSxHQUFHSSxHQUFHLENBQUNKLFFBQUQsQ0FBTixHQUFtQkksR0FBbEM7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTRSxhQUFULENBQXVCUCxPQUF2QixFQUFnQztBQUM5QixNQUFJQSxPQUFPLENBQUNRLFFBQVIsS0FBcUIsTUFBekIsRUFBaUM7QUFDL0IsV0FBT1IsT0FBUDtBQUNEOztBQUNELFNBQU9BLE9BQU8sQ0FBQ1MsVUFBUixJQUFzQlQsT0FBTyxDQUFDVSxJQUFyQztBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVNDLGVBQVQsQ0FBeUJYLE9BQXpCLEVBQWtDO0FBQ2hDO0FBQ0EsTUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWixXQUFPekIsUUFBUSxDQUFDcUMsSUFBaEI7QUFDRDs7QUFFRCxVQUFRWixPQUFPLENBQUNRLFFBQWhCO0FBQ0UsU0FBSyxNQUFMO0FBQ0EsU0FBSyxNQUFMO0FBQ0UsYUFBT1IsT0FBTyxDQUFDRyxhQUFSLENBQXNCUyxJQUE3Qjs7QUFDRixTQUFLLFdBQUw7QUFDRSxhQUFPWixPQUFPLENBQUNZLElBQWY7QUFMSixHQU5nQyxDQWNoQzs7O0FBRUEsTUFBSUMscUJBQXFCLEdBQUdkLHdCQUF3QixDQUFDQyxPQUFELENBQXBEO0FBQUEsTUFDSWMsUUFBUSxHQUFHRCxxQkFBcUIsQ0FBQ0MsUUFEckM7QUFBQSxNQUVJQyxTQUFTLEdBQUdGLHFCQUFxQixDQUFDRSxTQUZ0QztBQUFBLE1BR0lDLFNBQVMsR0FBR0gscUJBQXFCLENBQUNHLFNBSHRDOztBQUtBLE1BQUksd0JBQXdCQyxJQUF4QixDQUE2QkgsUUFBUSxHQUFHRSxTQUFYLEdBQXVCRCxTQUFwRCxDQUFKLEVBQW9FO0FBQ2xFLFdBQU9mLE9BQVA7QUFDRDs7QUFFRCxTQUFPVyxlQUFlLENBQUNKLGFBQWEsQ0FBQ1AsT0FBRCxDQUFkLENBQXRCO0FBQ0Q7O0FBRUQsSUFBSWtCLE1BQU0sR0FBRzdDLFNBQVMsSUFBSSxDQUFDLEVBQUVDLE1BQU0sQ0FBQzZDLG9CQUFQLElBQStCNUMsUUFBUSxDQUFDNkMsWUFBMUMsQ0FBM0I7QUFDQSxJQUFJQyxNQUFNLEdBQUdoRCxTQUFTLElBQUksVUFBVTRDLElBQVYsQ0FBZXJDLFNBQVMsQ0FBQ0MsU0FBekIsQ0FBMUI7QUFFQTs7Ozs7Ozs7QUFPQSxTQUFTeUMsSUFBVCxDQUFjQyxPQUFkLEVBQXVCO0FBQ3JCLE1BQUlBLE9BQU8sS0FBSyxFQUFoQixFQUFvQjtBQUNsQixXQUFPTCxNQUFQO0FBQ0Q7O0FBQ0QsTUFBSUssT0FBTyxLQUFLLEVBQWhCLEVBQW9CO0FBQ2xCLFdBQU9GLE1BQVA7QUFDRDs7QUFDRCxTQUFPSCxNQUFNLElBQUlHLE1BQWpCO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBU0csZUFBVCxDQUF5QnhCLE9BQXpCLEVBQWtDO0FBQ2hDLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBT3pCLFFBQVEsQ0FBQ2tELGVBQWhCO0FBQ0Q7O0FBRUQsTUFBSUMsY0FBYyxHQUFHSixJQUFJLENBQUMsRUFBRCxDQUFKLEdBQVcvQyxRQUFRLENBQUNxQyxJQUFwQixHQUEyQixJQUFoRCxDQUxnQyxDQU9oQzs7QUFDQSxNQUFJZSxZQUFZLEdBQUczQixPQUFPLENBQUMyQixZQUFSLElBQXdCLElBQTNDLENBUmdDLENBU2hDOztBQUNBLFNBQU9BLFlBQVksS0FBS0QsY0FBakIsSUFBbUMxQixPQUFPLENBQUM0QixrQkFBbEQsRUFBc0U7QUFDcEVELGdCQUFZLEdBQUcsQ0FBQzNCLE9BQU8sR0FBR0EsT0FBTyxDQUFDNEIsa0JBQW5CLEVBQXVDRCxZQUF0RDtBQUNEOztBQUVELE1BQUluQixRQUFRLEdBQUdtQixZQUFZLElBQUlBLFlBQVksQ0FBQ25CLFFBQTVDOztBQUVBLE1BQUksQ0FBQ0EsUUFBRCxJQUFhQSxRQUFRLEtBQUssTUFBMUIsSUFBb0NBLFFBQVEsS0FBSyxNQUFyRCxFQUE2RDtBQUMzRCxXQUFPUixPQUFPLEdBQUdBLE9BQU8sQ0FBQ0csYUFBUixDQUFzQnNCLGVBQXpCLEdBQTJDbEQsUUFBUSxDQUFDa0QsZUFBbEU7QUFDRCxHQWxCK0IsQ0FvQmhDO0FBQ0E7OztBQUNBLE1BQUksQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLE9BQWIsRUFBc0IzQyxPQUF0QixDQUE4QjZDLFlBQVksQ0FBQ25CLFFBQTNDLE1BQXlELENBQUMsQ0FBMUQsSUFBK0RULHdCQUF3QixDQUFDNEIsWUFBRCxFQUFlLFVBQWYsQ0FBeEIsS0FBdUQsUUFBMUgsRUFBb0k7QUFDbEksV0FBT0gsZUFBZSxDQUFDRyxZQUFELENBQXRCO0FBQ0Q7O0FBRUQsU0FBT0EsWUFBUDtBQUNEOztBQUVELFNBQVNFLGlCQUFULENBQTJCN0IsT0FBM0IsRUFBb0M7QUFDbEMsTUFBSVEsUUFBUSxHQUFHUixPQUFPLENBQUNRLFFBQXZCOztBQUVBLE1BQUlBLFFBQVEsS0FBSyxNQUFqQixFQUF5QjtBQUN2QixXQUFPLEtBQVA7QUFDRDs7QUFDRCxTQUFPQSxRQUFRLEtBQUssTUFBYixJQUF1QmdCLGVBQWUsQ0FBQ3hCLE9BQU8sQ0FBQzhCLGlCQUFULENBQWYsS0FBK0M5QixPQUE3RTtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVMrQixPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNyQixNQUFJQSxJQUFJLENBQUN2QixVQUFMLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCLFdBQU9zQixPQUFPLENBQUNDLElBQUksQ0FBQ3ZCLFVBQU4sQ0FBZDtBQUNEOztBQUVELFNBQU91QixJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFBLFNBQVNDLHNCQUFULENBQWdDQyxRQUFoQyxFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFDbEQ7QUFDQSxNQUFJLENBQUNELFFBQUQsSUFBYSxDQUFDQSxRQUFRLENBQUNoQyxRQUF2QixJQUFtQyxDQUFDaUMsUUFBcEMsSUFBZ0QsQ0FBQ0EsUUFBUSxDQUFDakMsUUFBOUQsRUFBd0U7QUFDdEUsV0FBTzNCLFFBQVEsQ0FBQ2tELGVBQWhCO0FBQ0QsR0FKaUQsQ0FNbEQ7OztBQUNBLE1BQUlXLEtBQUssR0FBR0YsUUFBUSxDQUFDRyx1QkFBVCxDQUFpQ0YsUUFBakMsSUFBNkNHLElBQUksQ0FBQ0MsMkJBQTlEO0FBQ0EsTUFBSUMsS0FBSyxHQUFHSixLQUFLLEdBQUdGLFFBQUgsR0FBY0MsUUFBL0I7QUFDQSxNQUFJTSxHQUFHLEdBQUdMLEtBQUssR0FBR0QsUUFBSCxHQUFjRCxRQUE3QixDQVRrRCxDQVdsRDs7QUFDQSxNQUFJUSxLQUFLLEdBQUduRSxRQUFRLENBQUNvRSxXQUFULEVBQVo7QUFDQUQsT0FBSyxDQUFDRSxRQUFOLENBQWVKLEtBQWYsRUFBc0IsQ0FBdEI7QUFDQUUsT0FBSyxDQUFDRyxNQUFOLENBQWFKLEdBQWIsRUFBa0IsQ0FBbEI7QUFDQSxNQUFJSyx1QkFBdUIsR0FBR0osS0FBSyxDQUFDSSx1QkFBcEMsQ0Fma0QsQ0FpQmxEOztBQUVBLE1BQUlaLFFBQVEsS0FBS1ksdUJBQWIsSUFBd0NYLFFBQVEsS0FBS1csdUJBQXJELElBQWdGTixLQUFLLENBQUNPLFFBQU4sQ0FBZU4sR0FBZixDQUFwRixFQUF5RztBQUN2RyxRQUFJWixpQkFBaUIsQ0FBQ2lCLHVCQUFELENBQXJCLEVBQWdEO0FBQzlDLGFBQU9BLHVCQUFQO0FBQ0Q7O0FBRUQsV0FBT3RCLGVBQWUsQ0FBQ3NCLHVCQUFELENBQXRCO0FBQ0QsR0F6QmlELENBMkJsRDs7O0FBQ0EsTUFBSUUsWUFBWSxHQUFHakIsT0FBTyxDQUFDRyxRQUFELENBQTFCOztBQUNBLE1BQUljLFlBQVksQ0FBQ3RDLElBQWpCLEVBQXVCO0FBQ3JCLFdBQU91QixzQkFBc0IsQ0FBQ2UsWUFBWSxDQUFDdEMsSUFBZCxFQUFvQnlCLFFBQXBCLENBQTdCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0Ysc0JBQXNCLENBQUNDLFFBQUQsRUFBV0gsT0FBTyxDQUFDSSxRQUFELENBQVAsQ0FBa0J6QixJQUE3QixDQUE3QjtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7OztBQVFBLFNBQVN1QyxTQUFULENBQW1CakQsT0FBbkIsRUFBNEI7QUFDMUIsTUFBSWtELElBQUksR0FBR0MsU0FBUyxDQUFDeEUsTUFBVixHQUFtQixDQUFuQixJQUF3QndFLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJDLFNBQXpDLEdBQXFERCxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxLQUEvRTtBQUVBLE1BQUlFLFNBQVMsR0FBR0gsSUFBSSxLQUFLLEtBQVQsR0FBaUIsV0FBakIsR0FBK0IsWUFBL0M7QUFDQSxNQUFJMUMsUUFBUSxHQUFHUixPQUFPLENBQUNRLFFBQXZCOztBQUVBLE1BQUlBLFFBQVEsS0FBSyxNQUFiLElBQXVCQSxRQUFRLEtBQUssTUFBeEMsRUFBZ0Q7QUFDOUMsUUFBSThDLElBQUksR0FBR3RELE9BQU8sQ0FBQ0csYUFBUixDQUFzQnNCLGVBQWpDO0FBQ0EsUUFBSThCLGdCQUFnQixHQUFHdkQsT0FBTyxDQUFDRyxhQUFSLENBQXNCb0QsZ0JBQXRCLElBQTBDRCxJQUFqRTtBQUNBLFdBQU9DLGdCQUFnQixDQUFDRixTQUFELENBQXZCO0FBQ0Q7O0FBRUQsU0FBT3JELE9BQU8sQ0FBQ3FELFNBQUQsQ0FBZDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU0csYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkJ6RCxPQUE3QixFQUFzQztBQUNwQyxNQUFJMEQsUUFBUSxHQUFHUCxTQUFTLENBQUN4RSxNQUFWLEdBQW1CLENBQW5CLElBQXdCd0UsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQkMsU0FBekMsR0FBcURELFNBQVMsQ0FBQyxDQUFELENBQTlELEdBQW9FLEtBQW5GO0FBRUEsTUFBSVEsU0FBUyxHQUFHVixTQUFTLENBQUNqRCxPQUFELEVBQVUsS0FBVixDQUF6QjtBQUNBLE1BQUk0RCxVQUFVLEdBQUdYLFNBQVMsQ0FBQ2pELE9BQUQsRUFBVSxNQUFWLENBQTFCO0FBQ0EsTUFBSTZELFFBQVEsR0FBR0gsUUFBUSxHQUFHLENBQUMsQ0FBSixHQUFRLENBQS9CO0FBQ0FELE1BQUksQ0FBQ0ssR0FBTCxJQUFZSCxTQUFTLEdBQUdFLFFBQXhCO0FBQ0FKLE1BQUksQ0FBQ00sTUFBTCxJQUFlSixTQUFTLEdBQUdFLFFBQTNCO0FBQ0FKLE1BQUksQ0FBQ08sSUFBTCxJQUFhSixVQUFVLEdBQUdDLFFBQTFCO0FBQ0FKLE1BQUksQ0FBQ1EsS0FBTCxJQUFjTCxVQUFVLEdBQUdDLFFBQTNCO0FBQ0EsU0FBT0osSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBVUEsU0FBU1MsY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0NDLElBQWhDLEVBQXNDO0FBQ3BDLE1BQUlDLEtBQUssR0FBR0QsSUFBSSxLQUFLLEdBQVQsR0FBZSxNQUFmLEdBQXdCLEtBQXBDO0FBQ0EsTUFBSUUsS0FBSyxHQUFHRCxLQUFLLEtBQUssTUFBVixHQUFtQixPQUFuQixHQUE2QixRQUF6QztBQUVBLFNBQU9FLFVBQVUsQ0FBQ0osTUFBTSxDQUFDLFdBQVdFLEtBQVgsR0FBbUIsT0FBcEIsQ0FBUCxFQUFxQyxFQUFyQyxDQUFWLEdBQXFERSxVQUFVLENBQUNKLE1BQU0sQ0FBQyxXQUFXRyxLQUFYLEdBQW1CLE9BQXBCLENBQVAsRUFBcUMsRUFBckMsQ0FBdEU7QUFDRDs7QUFFRCxTQUFTRSxPQUFULENBQWlCSixJQUFqQixFQUF1QnhELElBQXZCLEVBQTZCMEMsSUFBN0IsRUFBbUNtQixhQUFuQyxFQUFrRDtBQUNoRCxTQUFPQyxJQUFJLENBQUNDLEdBQUwsQ0FBUy9ELElBQUksQ0FBQyxXQUFXd0QsSUFBWixDQUFiLEVBQWdDeEQsSUFBSSxDQUFDLFdBQVd3RCxJQUFaLENBQXBDLEVBQXVEZCxJQUFJLENBQUMsV0FBV2MsSUFBWixDQUEzRCxFQUE4RWQsSUFBSSxDQUFDLFdBQVdjLElBQVosQ0FBbEYsRUFBcUdkLElBQUksQ0FBQyxXQUFXYyxJQUFaLENBQXpHLEVBQTRIOUMsSUFBSSxDQUFDLEVBQUQsQ0FBSixHQUFXc0QsUUFBUSxDQUFDdEIsSUFBSSxDQUFDLFdBQVdjLElBQVosQ0FBTCxDQUFSLEdBQWtDUSxRQUFRLENBQUNILGFBQWEsQ0FBQyxZQUFZTCxJQUFJLEtBQUssUUFBVCxHQUFvQixLQUFwQixHQUE0QixNQUF4QyxDQUFELENBQWQsQ0FBMUMsR0FBNkdRLFFBQVEsQ0FBQ0gsYUFBYSxDQUFDLFlBQVlMLElBQUksS0FBSyxRQUFULEdBQW9CLFFBQXBCLEdBQStCLE9BQTNDLENBQUQsQ0FBZCxDQUFoSSxHQUF1TSxDQUFuVSxDQUFQO0FBQ0Q7O0FBRUQsU0FBU1MsY0FBVCxDQUF3QnRHLFFBQXhCLEVBQWtDO0FBQ2hDLE1BQUlxQyxJQUFJLEdBQUdyQyxRQUFRLENBQUNxQyxJQUFwQjtBQUNBLE1BQUkwQyxJQUFJLEdBQUcvRSxRQUFRLENBQUNrRCxlQUFwQjtBQUNBLE1BQUlnRCxhQUFhLEdBQUduRCxJQUFJLENBQUMsRUFBRCxDQUFKLElBQVloQixnQkFBZ0IsQ0FBQ2dELElBQUQsQ0FBaEQ7QUFFQSxTQUFPO0FBQ0x3QixVQUFNLEVBQUVOLE9BQU8sQ0FBQyxRQUFELEVBQVc1RCxJQUFYLEVBQWlCMEMsSUFBakIsRUFBdUJtQixhQUF2QixDQURWO0FBRUxNLFNBQUssRUFBRVAsT0FBTyxDQUFDLE9BQUQsRUFBVTVELElBQVYsRUFBZ0IwQyxJQUFoQixFQUFzQm1CLGFBQXRCO0FBRlQsR0FBUDtBQUlEOztBQUVELElBQUlPLGNBQWMsR0FBRyxVQUFVQyxRQUFWLEVBQW9CQyxXQUFwQixFQUFpQztBQUNwRCxNQUFJLEVBQUVELFFBQVEsWUFBWUMsV0FBdEIsQ0FBSixFQUF3QztBQUN0QyxVQUFNLElBQUlDLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQ0Q7QUFDRixDQUpEOztBQU1BLElBQUlDLFdBQVcsR0FBRyxZQUFZO0FBQzVCLFdBQVNDLGdCQUFULENBQTBCQyxNQUExQixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDdkMsU0FBSyxJQUFJN0csQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzZHLEtBQUssQ0FBQzVHLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFVBQUk4RyxVQUFVLEdBQUdELEtBQUssQ0FBQzdHLENBQUQsQ0FBdEI7QUFDQThHLGdCQUFVLENBQUNDLFVBQVgsR0FBd0JELFVBQVUsQ0FBQ0MsVUFBWCxJQUF5QixLQUFqRDtBQUNBRCxnQkFBVSxDQUFDRSxZQUFYLEdBQTBCLElBQTFCO0FBQ0EsVUFBSSxXQUFXRixVQUFmLEVBQTJCQSxVQUFVLENBQUNHLFFBQVgsR0FBc0IsSUFBdEI7QUFDM0JDLFlBQU0sQ0FBQ0MsY0FBUCxDQUFzQlAsTUFBdEIsRUFBOEJFLFVBQVUsQ0FBQ00sR0FBekMsRUFBOENOLFVBQTlDO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLFVBQVVOLFdBQVYsRUFBdUJhLFVBQXZCLEVBQW1DQyxXQUFuQyxFQUFnRDtBQUNyRCxRQUFJRCxVQUFKLEVBQWdCVixnQkFBZ0IsQ0FBQ0gsV0FBVyxDQUFDZSxTQUFiLEVBQXdCRixVQUF4QixDQUFoQjtBQUNoQixRQUFJQyxXQUFKLEVBQWlCWCxnQkFBZ0IsQ0FBQ0gsV0FBRCxFQUFjYyxXQUFkLENBQWhCO0FBQ2pCLFdBQU9kLFdBQVA7QUFDRCxHQUpEO0FBS0QsQ0FoQmlCLEVBQWxCOztBQXNCQSxJQUFJVyxjQUFjLEdBQUcsVUFBVUssR0FBVixFQUFlSixHQUFmLEVBQW9CSyxLQUFwQixFQUEyQjtBQUM5QyxNQUFJTCxHQUFHLElBQUlJLEdBQVgsRUFBZ0I7QUFDZE4sVUFBTSxDQUFDQyxjQUFQLENBQXNCSyxHQUF0QixFQUEyQkosR0FBM0IsRUFBZ0M7QUFDOUJLLFdBQUssRUFBRUEsS0FEdUI7QUFFOUJWLGdCQUFVLEVBQUUsSUFGa0I7QUFHOUJDLGtCQUFZLEVBQUUsSUFIZ0I7QUFJOUJDLGNBQVEsRUFBRTtBQUpvQixLQUFoQztBQU1ELEdBUEQsTUFPTztBQUNMTyxPQUFHLENBQUNKLEdBQUQsQ0FBSCxHQUFXSyxLQUFYO0FBQ0Q7O0FBRUQsU0FBT0QsR0FBUDtBQUNELENBYkQ7O0FBZUEsSUFBSUUsUUFBUSxHQUFHUixNQUFNLENBQUNTLE1BQVAsSUFBaUIsVUFBVWYsTUFBVixFQUFrQjtBQUNoRCxPQUFLLElBQUk1RyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUUsU0FBUyxDQUFDeEUsTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMsUUFBSTRILE1BQU0sR0FBR25ELFNBQVMsQ0FBQ3pFLENBQUQsQ0FBdEI7O0FBRUEsU0FBSyxJQUFJb0gsR0FBVCxJQUFnQlEsTUFBaEIsRUFBd0I7QUFDdEIsVUFBSVYsTUFBTSxDQUFDSyxTQUFQLENBQWlCTSxjQUFqQixDQUFnQ3pHLElBQWhDLENBQXFDd0csTUFBckMsRUFBNkNSLEdBQTdDLENBQUosRUFBdUQ7QUFDckRSLGNBQU0sQ0FBQ1EsR0FBRCxDQUFOLEdBQWNRLE1BQU0sQ0FBQ1IsR0FBRCxDQUFwQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPUixNQUFQO0FBQ0QsQ0FaRDtBQWNBOzs7Ozs7Ozs7QUFPQSxTQUFTa0IsYUFBVCxDQUF1QkMsT0FBdkIsRUFBZ0M7QUFDOUIsU0FBT0wsUUFBUSxDQUFDLEVBQUQsRUFBS0ssT0FBTCxFQUFjO0FBQzNCeEMsU0FBSyxFQUFFd0MsT0FBTyxDQUFDekMsSUFBUixHQUFleUMsT0FBTyxDQUFDMUIsS0FESDtBQUUzQmhCLFVBQU0sRUFBRTBDLE9BQU8sQ0FBQzNDLEdBQVIsR0FBYzJDLE9BQU8sQ0FBQzNCO0FBRkgsR0FBZCxDQUFmO0FBSUQ7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBUzRCLHFCQUFULENBQStCMUcsT0FBL0IsRUFBd0M7QUFDdEMsTUFBSXlELElBQUksR0FBRyxFQUFYLENBRHNDLENBR3RDO0FBQ0E7QUFDQTs7QUFDQSxNQUFJO0FBQ0YsUUFBSW5DLElBQUksQ0FBQyxFQUFELENBQVIsRUFBYztBQUNabUMsVUFBSSxHQUFHekQsT0FBTyxDQUFDMEcscUJBQVIsRUFBUDtBQUNBLFVBQUkvQyxTQUFTLEdBQUdWLFNBQVMsQ0FBQ2pELE9BQUQsRUFBVSxLQUFWLENBQXpCO0FBQ0EsVUFBSTRELFVBQVUsR0FBR1gsU0FBUyxDQUFDakQsT0FBRCxFQUFVLE1BQVYsQ0FBMUI7QUFDQXlELFVBQUksQ0FBQ0ssR0FBTCxJQUFZSCxTQUFaO0FBQ0FGLFVBQUksQ0FBQ08sSUFBTCxJQUFhSixVQUFiO0FBQ0FILFVBQUksQ0FBQ00sTUFBTCxJQUFlSixTQUFmO0FBQ0FGLFVBQUksQ0FBQ1EsS0FBTCxJQUFjTCxVQUFkO0FBQ0QsS0FSRCxNQVFPO0FBQ0xILFVBQUksR0FBR3pELE9BQU8sQ0FBQzBHLHFCQUFSLEVBQVA7QUFDRDtBQUNGLEdBWkQsQ0FZRSxPQUFPQyxDQUFQLEVBQVUsQ0FBRTs7QUFFZCxNQUFJQyxNQUFNLEdBQUc7QUFDWDVDLFFBQUksRUFBRVAsSUFBSSxDQUFDTyxJQURBO0FBRVhGLE9BQUcsRUFBRUwsSUFBSSxDQUFDSyxHQUZDO0FBR1hpQixTQUFLLEVBQUV0QixJQUFJLENBQUNRLEtBQUwsR0FBYVIsSUFBSSxDQUFDTyxJQUhkO0FBSVhjLFVBQU0sRUFBRXJCLElBQUksQ0FBQ00sTUFBTCxHQUFjTixJQUFJLENBQUNLO0FBSmhCLEdBQWIsQ0FwQnNDLENBMkJ0Qzs7QUFDQSxNQUFJK0MsS0FBSyxHQUFHN0csT0FBTyxDQUFDUSxRQUFSLEtBQXFCLE1BQXJCLEdBQThCcUUsY0FBYyxDQUFDN0UsT0FBTyxDQUFDRyxhQUFULENBQTVDLEdBQXNFLEVBQWxGO0FBQ0EsTUFBSTRFLEtBQUssR0FBRzhCLEtBQUssQ0FBQzlCLEtBQU4sSUFBZS9FLE9BQU8sQ0FBQzhHLFdBQXZCLElBQXNDRixNQUFNLENBQUMzQyxLQUFQLEdBQWUyQyxNQUFNLENBQUM1QyxJQUF4RTtBQUNBLE1BQUljLE1BQU0sR0FBRytCLEtBQUssQ0FBQy9CLE1BQU4sSUFBZ0I5RSxPQUFPLENBQUMrRyxZQUF4QixJQUF3Q0gsTUFBTSxDQUFDN0MsTUFBUCxHQUFnQjZDLE1BQU0sQ0FBQzlDLEdBQTVFO0FBRUEsTUFBSWtELGNBQWMsR0FBR2hILE9BQU8sQ0FBQ2lILFdBQVIsR0FBc0JsQyxLQUEzQztBQUNBLE1BQUltQyxhQUFhLEdBQUdsSCxPQUFPLENBQUNtSCxZQUFSLEdBQXVCckMsTUFBM0MsQ0FqQ3NDLENBbUN0QztBQUNBOztBQUNBLE1BQUlrQyxjQUFjLElBQUlFLGFBQXRCLEVBQXFDO0FBQ25DLFFBQUkvQyxNQUFNLEdBQUdwRSx3QkFBd0IsQ0FBQ0MsT0FBRCxDQUFyQztBQUNBZ0gsa0JBQWMsSUFBSTlDLGNBQWMsQ0FBQ0MsTUFBRCxFQUFTLEdBQVQsQ0FBaEM7QUFDQStDLGlCQUFhLElBQUloRCxjQUFjLENBQUNDLE1BQUQsRUFBUyxHQUFULENBQS9CO0FBRUF5QyxVQUFNLENBQUM3QixLQUFQLElBQWdCaUMsY0FBaEI7QUFDQUosVUFBTSxDQUFDOUIsTUFBUCxJQUFpQm9DLGFBQWpCO0FBQ0Q7O0FBRUQsU0FBT1YsYUFBYSxDQUFDSSxNQUFELENBQXBCO0FBQ0Q7O0FBRUQsU0FBU1Esb0NBQVQsQ0FBOENDLFFBQTlDLEVBQXdEQyxNQUF4RCxFQUFnRTtBQUM5RCxNQUFJQyxhQUFhLEdBQUdwRSxTQUFTLENBQUN4RSxNQUFWLEdBQW1CLENBQW5CLElBQXdCd0UsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQkMsU0FBekMsR0FBcURELFNBQVMsQ0FBQyxDQUFELENBQTlELEdBQW9FLEtBQXhGO0FBRUEsTUFBSTlCLE1BQU0sR0FBR0MsSUFBSSxDQUFDLEVBQUQsQ0FBakI7QUFDQSxNQUFJa0csTUFBTSxHQUFHRixNQUFNLENBQUM5RyxRQUFQLEtBQW9CLE1BQWpDO0FBQ0EsTUFBSWlILFlBQVksR0FBR2YscUJBQXFCLENBQUNXLFFBQUQsQ0FBeEM7QUFDQSxNQUFJSyxVQUFVLEdBQUdoQixxQkFBcUIsQ0FBQ1ksTUFBRCxDQUF0QztBQUNBLE1BQUlLLFlBQVksR0FBR2hILGVBQWUsQ0FBQzBHLFFBQUQsQ0FBbEM7QUFFQSxNQUFJbEQsTUFBTSxHQUFHcEUsd0JBQXdCLENBQUN1SCxNQUFELENBQXJDO0FBQ0EsTUFBSU0sY0FBYyxHQUFHckQsVUFBVSxDQUFDSixNQUFNLENBQUN5RCxjQUFSLEVBQXdCLEVBQXhCLENBQS9CO0FBQ0EsTUFBSUMsZUFBZSxHQUFHdEQsVUFBVSxDQUFDSixNQUFNLENBQUMwRCxlQUFSLEVBQXlCLEVBQXpCLENBQWhDLENBWDhELENBYTlEOztBQUNBLE1BQUlOLGFBQWEsSUFBSUMsTUFBckIsRUFBNkI7QUFDM0JFLGNBQVUsQ0FBQzVELEdBQVgsR0FBaUJZLElBQUksQ0FBQ0MsR0FBTCxDQUFTK0MsVUFBVSxDQUFDNUQsR0FBcEIsRUFBeUIsQ0FBekIsQ0FBakI7QUFDQTRELGNBQVUsQ0FBQzFELElBQVgsR0FBa0JVLElBQUksQ0FBQ0MsR0FBTCxDQUFTK0MsVUFBVSxDQUFDMUQsSUFBcEIsRUFBMEIsQ0FBMUIsQ0FBbEI7QUFDRDs7QUFDRCxNQUFJeUMsT0FBTyxHQUFHRCxhQUFhLENBQUM7QUFDMUIxQyxPQUFHLEVBQUUyRCxZQUFZLENBQUMzRCxHQUFiLEdBQW1CNEQsVUFBVSxDQUFDNUQsR0FBOUIsR0FBb0M4RCxjQURmO0FBRTFCNUQsUUFBSSxFQUFFeUQsWUFBWSxDQUFDekQsSUFBYixHQUFvQjBELFVBQVUsQ0FBQzFELElBQS9CLEdBQXNDNkQsZUFGbEI7QUFHMUI5QyxTQUFLLEVBQUUwQyxZQUFZLENBQUMxQyxLQUhNO0FBSTFCRCxVQUFNLEVBQUUyQyxZQUFZLENBQUMzQztBQUpLLEdBQUQsQ0FBM0I7QUFNQTJCLFNBQU8sQ0FBQ3FCLFNBQVIsR0FBb0IsQ0FBcEI7QUFDQXJCLFNBQU8sQ0FBQ3NCLFVBQVIsR0FBcUIsQ0FBckIsQ0F6QjhELENBMkI5RDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFJLENBQUMxRyxNQUFELElBQVdtRyxNQUFmLEVBQXVCO0FBQ3JCLFFBQUlNLFNBQVMsR0FBR3ZELFVBQVUsQ0FBQ0osTUFBTSxDQUFDMkQsU0FBUixFQUFtQixFQUFuQixDQUExQjtBQUNBLFFBQUlDLFVBQVUsR0FBR3hELFVBQVUsQ0FBQ0osTUFBTSxDQUFDNEQsVUFBUixFQUFvQixFQUFwQixDQUEzQjtBQUVBdEIsV0FBTyxDQUFDM0MsR0FBUixJQUFlOEQsY0FBYyxHQUFHRSxTQUFoQztBQUNBckIsV0FBTyxDQUFDMUMsTUFBUixJQUFrQjZELGNBQWMsR0FBR0UsU0FBbkM7QUFDQXJCLFdBQU8sQ0FBQ3pDLElBQVIsSUFBZ0I2RCxlQUFlLEdBQUdFLFVBQWxDO0FBQ0F0QixXQUFPLENBQUN4QyxLQUFSLElBQWlCNEQsZUFBZSxHQUFHRSxVQUFuQyxDQVBxQixDQVNyQjs7QUFDQXRCLFdBQU8sQ0FBQ3FCLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0FyQixXQUFPLENBQUNzQixVQUFSLEdBQXFCQSxVQUFyQjtBQUNEOztBQUVELE1BQUkxRyxNQUFNLElBQUksQ0FBQ2tHLGFBQVgsR0FBMkJELE1BQU0sQ0FBQ3ZFLFFBQVAsQ0FBZ0I0RSxZQUFoQixDQUEzQixHQUEyREwsTUFBTSxLQUFLSyxZQUFYLElBQTJCQSxZQUFZLENBQUNuSCxRQUFiLEtBQTBCLE1BQXBILEVBQTRIO0FBQzFIaUcsV0FBTyxHQUFHakQsYUFBYSxDQUFDaUQsT0FBRCxFQUFVYSxNQUFWLENBQXZCO0FBQ0Q7O0FBRUQsU0FBT2IsT0FBUDtBQUNEOztBQUVELFNBQVN1Qiw2Q0FBVCxDQUF1RGhJLE9BQXZELEVBQWdFO0FBQzlELE1BQUlpSSxhQUFhLEdBQUc5RSxTQUFTLENBQUN4RSxNQUFWLEdBQW1CLENBQW5CLElBQXdCd0UsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQkMsU0FBekMsR0FBcURELFNBQVMsQ0FBQyxDQUFELENBQTlELEdBQW9FLEtBQXhGO0FBRUEsTUFBSUcsSUFBSSxHQUFHdEQsT0FBTyxDQUFDRyxhQUFSLENBQXNCc0IsZUFBakM7QUFDQSxNQUFJeUcsY0FBYyxHQUFHZCxvQ0FBb0MsQ0FBQ3BILE9BQUQsRUFBVXNELElBQVYsQ0FBekQ7QUFDQSxNQUFJeUIsS0FBSyxHQUFHTCxJQUFJLENBQUNDLEdBQUwsQ0FBU3JCLElBQUksQ0FBQ3dELFdBQWQsRUFBMkJ4SSxNQUFNLENBQUM2SixVQUFQLElBQXFCLENBQWhELENBQVo7QUFDQSxNQUFJckQsTUFBTSxHQUFHSixJQUFJLENBQUNDLEdBQUwsQ0FBU3JCLElBQUksQ0FBQ3lELFlBQWQsRUFBNEJ6SSxNQUFNLENBQUM4SixXQUFQLElBQXNCLENBQWxELENBQWI7QUFFQSxNQUFJekUsU0FBUyxHQUFHLENBQUNzRSxhQUFELEdBQWlCaEYsU0FBUyxDQUFDSyxJQUFELENBQTFCLEdBQW1DLENBQW5EO0FBQ0EsTUFBSU0sVUFBVSxHQUFHLENBQUNxRSxhQUFELEdBQWlCaEYsU0FBUyxDQUFDSyxJQUFELEVBQU8sTUFBUCxDQUExQixHQUEyQyxDQUE1RDtBQUVBLE1BQUkrRSxNQUFNLEdBQUc7QUFDWHZFLE9BQUcsRUFBRUgsU0FBUyxHQUFHdUUsY0FBYyxDQUFDcEUsR0FBM0IsR0FBaUNvRSxjQUFjLENBQUNKLFNBRDFDO0FBRVg5RCxRQUFJLEVBQUVKLFVBQVUsR0FBR3NFLGNBQWMsQ0FBQ2xFLElBQTVCLEdBQW1Da0UsY0FBYyxDQUFDSCxVQUY3QztBQUdYaEQsU0FBSyxFQUFFQSxLQUhJO0FBSVhELFVBQU0sRUFBRUE7QUFKRyxHQUFiO0FBT0EsU0FBTzBCLGFBQWEsQ0FBQzZCLE1BQUQsQ0FBcEI7QUFDRDtBQUVEOzs7Ozs7Ozs7O0FBUUEsU0FBU0MsT0FBVCxDQUFpQnRJLE9BQWpCLEVBQTBCO0FBQ3hCLE1BQUlRLFFBQVEsR0FBR1IsT0FBTyxDQUFDUSxRQUF2Qjs7QUFDQSxNQUFJQSxRQUFRLEtBQUssTUFBYixJQUF1QkEsUUFBUSxLQUFLLE1BQXhDLEVBQWdEO0FBQzlDLFdBQU8sS0FBUDtBQUNEOztBQUNELE1BQUlULHdCQUF3QixDQUFDQyxPQUFELEVBQVUsVUFBVixDQUF4QixLQUFrRCxPQUF0RCxFQUErRDtBQUM3RCxXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFJUyxVQUFVLEdBQUdGLGFBQWEsQ0FBQ1AsT0FBRCxDQUE5Qjs7QUFDQSxNQUFJLENBQUNTLFVBQUwsRUFBaUI7QUFDZixXQUFPLEtBQVA7QUFDRDs7QUFDRCxTQUFPNkgsT0FBTyxDQUFDN0gsVUFBRCxDQUFkO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBUUEsU0FBUzhILDRCQUFULENBQXNDdkksT0FBdEMsRUFBK0M7QUFDN0M7QUFDQSxNQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUN3SSxhQUFyQixJQUFzQ2xILElBQUksRUFBOUMsRUFBa0Q7QUFDaEQsV0FBTy9DLFFBQVEsQ0FBQ2tELGVBQWhCO0FBQ0Q7O0FBQ0QsTUFBSWdILEVBQUUsR0FBR3pJLE9BQU8sQ0FBQ3dJLGFBQWpCOztBQUNBLFNBQU9DLEVBQUUsSUFBSTFJLHdCQUF3QixDQUFDMEksRUFBRCxFQUFLLFdBQUwsQ0FBeEIsS0FBOEMsTUFBM0QsRUFBbUU7QUFDakVBLE1BQUUsR0FBR0EsRUFBRSxDQUFDRCxhQUFSO0FBQ0Q7O0FBQ0QsU0FBT0MsRUFBRSxJQUFJbEssUUFBUSxDQUFDa0QsZUFBdEI7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7O0FBV0EsU0FBU2lILGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCQyxTQUEvQixFQUEwQ0MsT0FBMUMsRUFBbURDLGlCQUFuRCxFQUFzRTtBQUNwRSxNQUFJdkIsYUFBYSxHQUFHcEUsU0FBUyxDQUFDeEUsTUFBVixHQUFtQixDQUFuQixJQUF3QndFLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJDLFNBQXpDLEdBQXFERCxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxLQUF4RixDQURvRSxDQUdwRTs7QUFFQSxNQUFJNEYsVUFBVSxHQUFHO0FBQUVqRixPQUFHLEVBQUUsQ0FBUDtBQUFVRSxRQUFJLEVBQUU7QUFBaEIsR0FBakI7QUFDQSxNQUFJckMsWUFBWSxHQUFHNEYsYUFBYSxHQUFHZ0IsNEJBQTRCLENBQUNJLE1BQUQsQ0FBL0IsR0FBMEMxRyxzQkFBc0IsQ0FBQzBHLE1BQUQsRUFBU0MsU0FBVCxDQUFoRyxDQU5vRSxDQVFwRTs7QUFDQSxNQUFJRSxpQkFBaUIsS0FBSyxVQUExQixFQUFzQztBQUNwQ0MsY0FBVSxHQUFHZiw2Q0FBNkMsQ0FBQ3JHLFlBQUQsRUFBZTRGLGFBQWYsQ0FBMUQ7QUFDRCxHQUZELE1BRU87QUFDTDtBQUNBLFFBQUl5QixjQUFjLEdBQUcsS0FBSyxDQUExQjs7QUFDQSxRQUFJRixpQkFBaUIsS0FBSyxjQUExQixFQUEwQztBQUN4Q0Usb0JBQWMsR0FBR3JJLGVBQWUsQ0FBQ0osYUFBYSxDQUFDcUksU0FBRCxDQUFkLENBQWhDOztBQUNBLFVBQUlJLGNBQWMsQ0FBQ3hJLFFBQWYsS0FBNEIsTUFBaEMsRUFBd0M7QUFDdEN3SSxzQkFBYyxHQUFHTCxNQUFNLENBQUN4SSxhQUFQLENBQXFCc0IsZUFBdEM7QUFDRDtBQUNGLEtBTEQsTUFLTyxJQUFJcUgsaUJBQWlCLEtBQUssUUFBMUIsRUFBb0M7QUFDekNFLG9CQUFjLEdBQUdMLE1BQU0sQ0FBQ3hJLGFBQVAsQ0FBcUJzQixlQUF0QztBQUNELEtBRk0sTUFFQTtBQUNMdUgsb0JBQWMsR0FBR0YsaUJBQWpCO0FBQ0Q7O0FBRUQsUUFBSXJDLE9BQU8sR0FBR1csb0NBQW9DLENBQUM0QixjQUFELEVBQWlCckgsWUFBakIsRUFBK0I0RixhQUEvQixDQUFsRCxDQWRLLENBZ0JMOztBQUNBLFFBQUl5QixjQUFjLENBQUN4SSxRQUFmLEtBQTRCLE1BQTVCLElBQXNDLENBQUM4SCxPQUFPLENBQUMzRyxZQUFELENBQWxELEVBQWtFO0FBQ2hFLFVBQUlzSCxlQUFlLEdBQUdwRSxjQUFjLENBQUM4RCxNQUFNLENBQUN4SSxhQUFSLENBQXBDO0FBQUEsVUFDSTJFLE1BQU0sR0FBR21FLGVBQWUsQ0FBQ25FLE1BRDdCO0FBQUEsVUFFSUMsS0FBSyxHQUFHa0UsZUFBZSxDQUFDbEUsS0FGNUI7O0FBSUFnRSxnQkFBVSxDQUFDakYsR0FBWCxJQUFrQjJDLE9BQU8sQ0FBQzNDLEdBQVIsR0FBYzJDLE9BQU8sQ0FBQ3FCLFNBQXhDO0FBQ0FpQixnQkFBVSxDQUFDaEYsTUFBWCxHQUFvQmUsTUFBTSxHQUFHMkIsT0FBTyxDQUFDM0MsR0FBckM7QUFDQWlGLGdCQUFVLENBQUMvRSxJQUFYLElBQW1CeUMsT0FBTyxDQUFDekMsSUFBUixHQUFleUMsT0FBTyxDQUFDc0IsVUFBMUM7QUFDQWdCLGdCQUFVLENBQUM5RSxLQUFYLEdBQW1CYyxLQUFLLEdBQUcwQixPQUFPLENBQUN6QyxJQUFuQztBQUNELEtBVEQsTUFTTztBQUNMO0FBQ0ErRSxnQkFBVSxHQUFHdEMsT0FBYjtBQUNEO0FBQ0YsR0F6Q21FLENBMkNwRTs7O0FBQ0FvQyxTQUFPLEdBQUdBLE9BQU8sSUFBSSxDQUFyQjtBQUNBLE1BQUlLLGVBQWUsR0FBRyxPQUFPTCxPQUFQLEtBQW1CLFFBQXpDO0FBQ0FFLFlBQVUsQ0FBQy9FLElBQVgsSUFBbUJrRixlQUFlLEdBQUdMLE9BQUgsR0FBYUEsT0FBTyxDQUFDN0UsSUFBUixJQUFnQixDQUEvRDtBQUNBK0UsWUFBVSxDQUFDakYsR0FBWCxJQUFrQm9GLGVBQWUsR0FBR0wsT0FBSCxHQUFhQSxPQUFPLENBQUMvRSxHQUFSLElBQWUsQ0FBN0Q7QUFDQWlGLFlBQVUsQ0FBQzlFLEtBQVgsSUFBb0JpRixlQUFlLEdBQUdMLE9BQUgsR0FBYUEsT0FBTyxDQUFDNUUsS0FBUixJQUFpQixDQUFqRTtBQUNBOEUsWUFBVSxDQUFDaEYsTUFBWCxJQUFxQm1GLGVBQWUsR0FBR0wsT0FBSCxHQUFhQSxPQUFPLENBQUM5RSxNQUFSLElBQWtCLENBQW5FO0FBRUEsU0FBT2dGLFVBQVA7QUFDRDs7QUFFRCxTQUFTSSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUNyQixNQUFJckUsS0FBSyxHQUFHcUUsSUFBSSxDQUFDckUsS0FBakI7QUFBQSxNQUNJRCxNQUFNLEdBQUdzRSxJQUFJLENBQUN0RSxNQURsQjtBQUdBLFNBQU9DLEtBQUssR0FBR0QsTUFBZjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU3VFLG9CQUFULENBQThCQyxTQUE5QixFQUF5Q0MsT0FBekMsRUFBa0RaLE1BQWxELEVBQTBEQyxTQUExRCxFQUFxRUUsaUJBQXJFLEVBQXdGO0FBQ3RGLE1BQUlELE9BQU8sR0FBRzFGLFNBQVMsQ0FBQ3hFLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0J3RSxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCQyxTQUF6QyxHQUFxREQsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsQ0FBbEY7O0FBRUEsTUFBSW1HLFNBQVMsQ0FBQ3hLLE9BQVYsQ0FBa0IsTUFBbEIsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNwQyxXQUFPd0ssU0FBUDtBQUNEOztBQUVELE1BQUlQLFVBQVUsR0FBR0wsYUFBYSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsRUFBb0JDLE9BQXBCLEVBQTZCQyxpQkFBN0IsQ0FBOUI7QUFFQSxNQUFJVSxLQUFLLEdBQUc7QUFDVjFGLE9BQUcsRUFBRTtBQUNIaUIsV0FBSyxFQUFFZ0UsVUFBVSxDQUFDaEUsS0FEZjtBQUVIRCxZQUFNLEVBQUV5RSxPQUFPLENBQUN6RixHQUFSLEdBQWNpRixVQUFVLENBQUNqRjtBQUY5QixLQURLO0FBS1ZHLFNBQUssRUFBRTtBQUNMYyxXQUFLLEVBQUVnRSxVQUFVLENBQUM5RSxLQUFYLEdBQW1Cc0YsT0FBTyxDQUFDdEYsS0FEN0I7QUFFTGEsWUFBTSxFQUFFaUUsVUFBVSxDQUFDakU7QUFGZCxLQUxHO0FBU1ZmLFVBQU0sRUFBRTtBQUNOZ0IsV0FBSyxFQUFFZ0UsVUFBVSxDQUFDaEUsS0FEWjtBQUVORCxZQUFNLEVBQUVpRSxVQUFVLENBQUNoRixNQUFYLEdBQW9Cd0YsT0FBTyxDQUFDeEY7QUFGOUIsS0FURTtBQWFWQyxRQUFJLEVBQUU7QUFDSmUsV0FBSyxFQUFFd0UsT0FBTyxDQUFDdkYsSUFBUixHQUFlK0UsVUFBVSxDQUFDL0UsSUFEN0I7QUFFSmMsWUFBTSxFQUFFaUUsVUFBVSxDQUFDakU7QUFGZjtBQWJJLEdBQVo7QUFtQkEsTUFBSTJFLFdBQVcsR0FBRzdELE1BQU0sQ0FBQzhELElBQVAsQ0FBWUYsS0FBWixFQUFtQkcsR0FBbkIsQ0FBdUIsVUFBVTdELEdBQVYsRUFBZTtBQUN0RCxXQUFPTSxRQUFRLENBQUM7QUFDZE4sU0FBRyxFQUFFQTtBQURTLEtBQUQsRUFFWjBELEtBQUssQ0FBQzFELEdBQUQsQ0FGTyxFQUVBO0FBQ2I4RCxVQUFJLEVBQUVULE9BQU8sQ0FBQ0ssS0FBSyxDQUFDMUQsR0FBRCxDQUFOO0FBREEsS0FGQSxDQUFmO0FBS0QsR0FOaUIsRUFNZitELElBTmUsQ0FNVixVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDdEIsV0FBT0EsQ0FBQyxDQUFDSCxJQUFGLEdBQVNFLENBQUMsQ0FBQ0YsSUFBbEI7QUFDRCxHQVJpQixDQUFsQjtBQVVBLE1BQUlJLGFBQWEsR0FBR1AsV0FBVyxDQUFDUSxNQUFaLENBQW1CLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEQsUUFBSW5GLEtBQUssR0FBR21GLEtBQUssQ0FBQ25GLEtBQWxCO0FBQUEsUUFDSUQsTUFBTSxHQUFHb0YsS0FBSyxDQUFDcEYsTUFEbkI7QUFFQSxXQUFPQyxLQUFLLElBQUk0RCxNQUFNLENBQUM3QixXQUFoQixJQUErQmhDLE1BQU0sSUFBSTZELE1BQU0sQ0FBQzVCLFlBQXZEO0FBQ0QsR0FKbUIsQ0FBcEI7QUFNQSxNQUFJb0QsaUJBQWlCLEdBQUdILGFBQWEsQ0FBQ3JMLE1BQWQsR0FBdUIsQ0FBdkIsR0FBMkJxTCxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCbEUsR0FBNUMsR0FBa0QyRCxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWUzRCxHQUF6RjtBQUVBLE1BQUlzRSxTQUFTLEdBQUdkLFNBQVMsQ0FBQ2UsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFoQjtBQUVBLFNBQU9GLGlCQUFpQixJQUFJQyxTQUFTLEdBQUcsTUFBTUEsU0FBVCxHQUFxQixFQUFsQyxDQUF4QjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVBLFNBQVNFLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQzVCLE1BQXBDLEVBQTRDQyxTQUE1QyxFQUF1RDtBQUNyRCxNQUFJckIsYUFBYSxHQUFHcEUsU0FBUyxDQUFDeEUsTUFBVixHQUFtQixDQUFuQixJQUF3QndFLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJDLFNBQXpDLEdBQXFERCxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxJQUF4RjtBQUVBLE1BQUlxSCxrQkFBa0IsR0FBR2pELGFBQWEsR0FBR2dCLDRCQUE0QixDQUFDSSxNQUFELENBQS9CLEdBQTBDMUcsc0JBQXNCLENBQUMwRyxNQUFELEVBQVNDLFNBQVQsQ0FBdEc7QUFDQSxTQUFPeEIsb0NBQW9DLENBQUN3QixTQUFELEVBQVk0QixrQkFBWixFQUFnQ2pELGFBQWhDLENBQTNDO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBU2tELGFBQVQsQ0FBdUJ6SyxPQUF2QixFQUFnQztBQUM5QixNQUFJMUIsTUFBTSxHQUFHMEIsT0FBTyxDQUFDRyxhQUFSLENBQXNCQyxXQUFuQztBQUNBLE1BQUkrRCxNQUFNLEdBQUc3RixNQUFNLENBQUNnQyxnQkFBUCxDQUF3Qk4sT0FBeEIsQ0FBYjtBQUNBLE1BQUkwSyxDQUFDLEdBQUduRyxVQUFVLENBQUNKLE1BQU0sQ0FBQzJELFNBQVAsSUFBb0IsQ0FBckIsQ0FBVixHQUFvQ3ZELFVBQVUsQ0FBQ0osTUFBTSxDQUFDd0csWUFBUCxJQUF1QixDQUF4QixDQUF0RDtBQUNBLE1BQUlDLENBQUMsR0FBR3JHLFVBQVUsQ0FBQ0osTUFBTSxDQUFDNEQsVUFBUCxJQUFxQixDQUF0QixDQUFWLEdBQXFDeEQsVUFBVSxDQUFDSixNQUFNLENBQUMwRyxXQUFQLElBQXNCLENBQXZCLENBQXZEO0FBQ0EsTUFBSWpFLE1BQU0sR0FBRztBQUNYN0IsU0FBSyxFQUFFL0UsT0FBTyxDQUFDaUgsV0FBUixHQUFzQjJELENBRGxCO0FBRVg5RixVQUFNLEVBQUU5RSxPQUFPLENBQUNtSCxZQUFSLEdBQXVCdUQ7QUFGcEIsR0FBYjtBQUlBLFNBQU85RCxNQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBU2tFLG9CQUFULENBQThCeEIsU0FBOUIsRUFBeUM7QUFDdkMsTUFBSXlCLElBQUksR0FBRztBQUFFL0csUUFBSSxFQUFFLE9BQVI7QUFBaUJDLFNBQUssRUFBRSxNQUF4QjtBQUFnQ0YsVUFBTSxFQUFFLEtBQXhDO0FBQStDRCxPQUFHLEVBQUU7QUFBcEQsR0FBWDtBQUNBLFNBQU93RixTQUFTLENBQUMwQixPQUFWLENBQWtCLHdCQUFsQixFQUE0QyxVQUFVQyxPQUFWLEVBQW1CO0FBQ3BFLFdBQU9GLElBQUksQ0FBQ0UsT0FBRCxDQUFYO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsU0FBU0MsZ0JBQVQsQ0FBMEJ2QyxNQUExQixFQUFrQ3dDLGdCQUFsQyxFQUFvRDdCLFNBQXBELEVBQStEO0FBQzdEQSxXQUFTLEdBQUdBLFNBQVMsQ0FBQ2UsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFaLENBRDZELENBRzdEOztBQUNBLE1BQUllLFVBQVUsR0FBR1gsYUFBYSxDQUFDOUIsTUFBRCxDQUE5QixDQUo2RCxDQU03RDs7QUFDQSxNQUFJMEMsYUFBYSxHQUFHO0FBQ2xCdEcsU0FBSyxFQUFFcUcsVUFBVSxDQUFDckcsS0FEQTtBQUVsQkQsVUFBTSxFQUFFc0csVUFBVSxDQUFDdEc7QUFGRCxHQUFwQixDQVA2RCxDQVk3RDs7QUFDQSxNQUFJd0csT0FBTyxHQUFHLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0J4TSxPQUFsQixDQUEwQndLLFNBQTFCLE1BQXlDLENBQUMsQ0FBeEQ7QUFDQSxNQUFJaUMsUUFBUSxHQUFHRCxPQUFPLEdBQUcsS0FBSCxHQUFXLE1BQWpDO0FBQ0EsTUFBSUUsYUFBYSxHQUFHRixPQUFPLEdBQUcsTUFBSCxHQUFZLEtBQXZDO0FBQ0EsTUFBSUcsV0FBVyxHQUFHSCxPQUFPLEdBQUcsUUFBSCxHQUFjLE9BQXZDO0FBQ0EsTUFBSUksb0JBQW9CLEdBQUcsQ0FBQ0osT0FBRCxHQUFXLFFBQVgsR0FBc0IsT0FBakQ7QUFFQUQsZUFBYSxDQUFDRSxRQUFELENBQWIsR0FBMEJKLGdCQUFnQixDQUFDSSxRQUFELENBQWhCLEdBQTZCSixnQkFBZ0IsQ0FBQ00sV0FBRCxDQUFoQixHQUFnQyxDQUE3RCxHQUFpRUwsVUFBVSxDQUFDSyxXQUFELENBQVYsR0FBMEIsQ0FBckg7O0FBQ0EsTUFBSW5DLFNBQVMsS0FBS2tDLGFBQWxCLEVBQWlDO0FBQy9CSCxpQkFBYSxDQUFDRyxhQUFELENBQWIsR0FBK0JMLGdCQUFnQixDQUFDSyxhQUFELENBQWhCLEdBQWtDSixVQUFVLENBQUNNLG9CQUFELENBQTNFO0FBQ0QsR0FGRCxNQUVPO0FBQ0xMLGlCQUFhLENBQUNHLGFBQUQsQ0FBYixHQUErQkwsZ0JBQWdCLENBQUNMLG9CQUFvQixDQUFDVSxhQUFELENBQXJCLENBQS9DO0FBQ0Q7O0FBRUQsU0FBT0gsYUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU00sSUFBVCxDQUFjQyxHQUFkLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN4QjtBQUNBLE1BQUlDLEtBQUssQ0FBQzdGLFNBQU4sQ0FBZ0IwRixJQUFwQixFQUEwQjtBQUN4QixXQUFPQyxHQUFHLENBQUNELElBQUosQ0FBU0UsS0FBVCxDQUFQO0FBQ0QsR0FKdUIsQ0FNeEI7OztBQUNBLFNBQU9ELEdBQUcsQ0FBQzNCLE1BQUosQ0FBVzRCLEtBQVgsRUFBa0IsQ0FBbEIsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU0UsU0FBVCxDQUFtQkgsR0FBbkIsRUFBd0JJLElBQXhCLEVBQThCN0YsS0FBOUIsRUFBcUM7QUFDbkM7QUFDQSxNQUFJMkYsS0FBSyxDQUFDN0YsU0FBTixDQUFnQjhGLFNBQXBCLEVBQStCO0FBQzdCLFdBQU9ILEdBQUcsQ0FBQ0csU0FBSixDQUFjLFVBQVVFLEdBQVYsRUFBZTtBQUNsQyxhQUFPQSxHQUFHLENBQUNELElBQUQsQ0FBSCxLQUFjN0YsS0FBckI7QUFDRCxLQUZNLENBQVA7QUFHRCxHQU5rQyxDQVFuQzs7O0FBQ0EsTUFBSStGLEtBQUssR0FBR1AsSUFBSSxDQUFDQyxHQUFELEVBQU0sVUFBVTFGLEdBQVYsRUFBZTtBQUNuQyxXQUFPQSxHQUFHLENBQUM4RixJQUFELENBQUgsS0FBYzdGLEtBQXJCO0FBQ0QsR0FGZSxDQUFoQjtBQUdBLFNBQU95RixHQUFHLENBQUM5TSxPQUFKLENBQVlvTixLQUFaLENBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7Ozs7QUFVQSxTQUFTQyxZQUFULENBQXNCQyxTQUF0QixFQUFpQ0MsSUFBakMsRUFBdUNDLElBQXZDLEVBQTZDO0FBQzNDLE1BQUlDLGNBQWMsR0FBR0QsSUFBSSxLQUFLbEosU0FBVCxHQUFxQmdKLFNBQXJCLEdBQWlDQSxTQUFTLENBQUNJLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUJULFNBQVMsQ0FBQ0ssU0FBRCxFQUFZLE1BQVosRUFBb0JFLElBQXBCLENBQTVCLENBQXREO0FBRUFDLGdCQUFjLENBQUNFLE9BQWYsQ0FBdUIsVUFBVTVJLFFBQVYsRUFBb0I7QUFDekMsUUFBSUEsUUFBUSxDQUFDLFVBQUQsQ0FBWixFQUEwQjtBQUN4QjtBQUNBNkksYUFBTyxDQUFDQyxJQUFSLENBQWEsdURBQWI7QUFDRDs7QUFDRCxRQUFJM04sRUFBRSxHQUFHNkUsUUFBUSxDQUFDLFVBQUQsQ0FBUixJQUF3QkEsUUFBUSxDQUFDN0UsRUFBMUMsQ0FMeUMsQ0FLSzs7QUFDOUMsUUFBSTZFLFFBQVEsQ0FBQytJLE9BQVQsSUFBb0JsTixVQUFVLENBQUNWLEVBQUQsQ0FBbEMsRUFBd0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0FxTixVQUFJLENBQUM1RixPQUFMLENBQWFrQyxNQUFiLEdBQXNCbkMsYUFBYSxDQUFDNkYsSUFBSSxDQUFDNUYsT0FBTCxDQUFha0MsTUFBZCxDQUFuQztBQUNBMEQsVUFBSSxDQUFDNUYsT0FBTCxDQUFhbUMsU0FBYixHQUF5QnBDLGFBQWEsQ0FBQzZGLElBQUksQ0FBQzVGLE9BQUwsQ0FBYW1DLFNBQWQsQ0FBdEM7QUFFQXlELFVBQUksR0FBR3JOLEVBQUUsQ0FBQ3FOLElBQUQsRUFBT3hJLFFBQVAsQ0FBVDtBQUNEO0FBQ0YsR0FmRDtBQWlCQSxTQUFPd0ksSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVNRLE1BQVQsR0FBa0I7QUFDaEI7QUFDQSxNQUFJLEtBQUt0QyxLQUFMLENBQVd1QyxXQUFmLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBRUQsTUFBSVQsSUFBSSxHQUFHO0FBQ1RwSCxZQUFRLEVBQUUsSUFERDtBQUVUZCxVQUFNLEVBQUUsRUFGQztBQUdUNEksZUFBVyxFQUFFLEVBSEo7QUFJVEMsY0FBVSxFQUFFLEVBSkg7QUFLVEMsV0FBTyxFQUFFLEtBTEE7QUFNVHhHLFdBQU8sRUFBRTtBQU5BLEdBQVgsQ0FOZ0IsQ0FlaEI7O0FBQ0E0RixNQUFJLENBQUM1RixPQUFMLENBQWFtQyxTQUFiLEdBQXlCMEIsbUJBQW1CLENBQUMsS0FBS0MsS0FBTixFQUFhLEtBQUs1QixNQUFsQixFQUEwQixLQUFLQyxTQUEvQixFQUEwQyxLQUFLc0UsT0FBTCxDQUFhQyxhQUF2RCxDQUE1QyxDQWhCZ0IsQ0FrQmhCO0FBQ0E7QUFDQTs7QUFDQWQsTUFBSSxDQUFDL0MsU0FBTCxHQUFpQkQsb0JBQW9CLENBQUMsS0FBSzZELE9BQUwsQ0FBYTVELFNBQWQsRUFBeUIrQyxJQUFJLENBQUM1RixPQUFMLENBQWFtQyxTQUF0QyxFQUFpRCxLQUFLRCxNQUF0RCxFQUE4RCxLQUFLQyxTQUFuRSxFQUE4RSxLQUFLc0UsT0FBTCxDQUFhZCxTQUFiLENBQXVCZ0IsSUFBdkIsQ0FBNEJ0RSxpQkFBMUcsRUFBNkgsS0FBS29FLE9BQUwsQ0FBYWQsU0FBYixDQUF1QmdCLElBQXZCLENBQTRCdkUsT0FBekosQ0FBckMsQ0FyQmdCLENBdUJoQjs7QUFDQXdELE1BQUksQ0FBQ2dCLGlCQUFMLEdBQXlCaEIsSUFBSSxDQUFDL0MsU0FBOUI7QUFFQStDLE1BQUksQ0FBQ2MsYUFBTCxHQUFxQixLQUFLRCxPQUFMLENBQWFDLGFBQWxDLENBMUJnQixDQTRCaEI7O0FBQ0FkLE1BQUksQ0FBQzVGLE9BQUwsQ0FBYWtDLE1BQWIsR0FBc0J1QyxnQkFBZ0IsQ0FBQyxLQUFLdkMsTUFBTixFQUFjMEQsSUFBSSxDQUFDNUYsT0FBTCxDQUFhbUMsU0FBM0IsRUFBc0N5RCxJQUFJLENBQUMvQyxTQUEzQyxDQUF0QztBQUVBK0MsTUFBSSxDQUFDNUYsT0FBTCxDQUFha0MsTUFBYixDQUFvQjJFLFFBQXBCLEdBQStCLEtBQUtKLE9BQUwsQ0FBYUMsYUFBYixHQUE2QixPQUE3QixHQUF1QyxVQUF0RSxDQS9CZ0IsQ0FpQ2hCOztBQUNBZCxNQUFJLEdBQUdGLFlBQVksQ0FBQyxLQUFLQyxTQUFOLEVBQWlCQyxJQUFqQixDQUFuQixDQWxDZ0IsQ0FvQ2hCO0FBQ0E7O0FBQ0EsTUFBSSxDQUFDLEtBQUs5QixLQUFMLENBQVdnRCxTQUFoQixFQUEyQjtBQUN6QixTQUFLaEQsS0FBTCxDQUFXZ0QsU0FBWCxHQUF1QixJQUF2QjtBQUNBLFNBQUtMLE9BQUwsQ0FBYU0sUUFBYixDQUFzQm5CLElBQXRCO0FBQ0QsR0FIRCxNQUdPO0FBQ0wsU0FBS2EsT0FBTCxDQUFhTyxRQUFiLENBQXNCcEIsSUFBdEI7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7O0FBTUEsU0FBU3FCLGlCQUFULENBQTJCdEIsU0FBM0IsRUFBc0N1QixZQUF0QyxFQUFvRDtBQUNsRCxTQUFPdkIsU0FBUyxDQUFDd0IsSUFBVixDQUFlLFVBQVV4RSxJQUFWLEVBQWdCO0FBQ3BDLFFBQUl5RSxJQUFJLEdBQUd6RSxJQUFJLENBQUN5RSxJQUFoQjtBQUFBLFFBQ0lqQixPQUFPLEdBQUd4RCxJQUFJLENBQUN3RCxPQURuQjtBQUVBLFdBQU9BLE9BQU8sSUFBSWlCLElBQUksS0FBS0YsWUFBM0I7QUFDRCxHQUpNLENBQVA7QUFLRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTRyx3QkFBVCxDQUFrQzdOLFFBQWxDLEVBQTRDO0FBQzFDLE1BQUk4TixRQUFRLEdBQUcsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLFFBQWQsRUFBd0IsS0FBeEIsRUFBK0IsR0FBL0IsQ0FBZjtBQUNBLE1BQUlDLFNBQVMsR0FBRy9OLFFBQVEsQ0FBQ2dPLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUJDLFdBQW5CLEtBQW1Dak8sUUFBUSxDQUFDdU0sS0FBVCxDQUFlLENBQWYsQ0FBbkQ7O0FBRUEsT0FBSyxJQUFJOU4sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3FQLFFBQVEsQ0FBQ3BQLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFFBQUl5UCxNQUFNLEdBQUdKLFFBQVEsQ0FBQ3JQLENBQUQsQ0FBckI7QUFDQSxRQUFJMFAsT0FBTyxHQUFHRCxNQUFNLEdBQUcsS0FBS0EsTUFBTCxHQUFjSCxTQUFqQixHQUE2Qi9OLFFBQWpEOztBQUNBLFFBQUksT0FBTzFCLFFBQVEsQ0FBQ3FDLElBQVQsQ0FBY3lOLEtBQWQsQ0FBb0JELE9BQXBCLENBQVAsS0FBd0MsV0FBNUMsRUFBeUQ7QUFDdkQsYUFBT0EsT0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFNBQVNFLE9BQVQsR0FBbUI7QUFDakIsT0FBSy9ELEtBQUwsQ0FBV3VDLFdBQVgsR0FBeUIsSUFBekIsQ0FEaUIsQ0FHakI7O0FBQ0EsTUFBSVksaUJBQWlCLENBQUMsS0FBS3RCLFNBQU4sRUFBaUIsWUFBakIsQ0FBckIsRUFBcUQ7QUFDbkQsU0FBS3pELE1BQUwsQ0FBWTRGLGVBQVosQ0FBNEIsYUFBNUI7QUFDQSxTQUFLNUYsTUFBTCxDQUFZMEYsS0FBWixDQUFrQmYsUUFBbEIsR0FBNkIsRUFBN0I7QUFDQSxTQUFLM0UsTUFBTCxDQUFZMEYsS0FBWixDQUFrQnZLLEdBQWxCLEdBQXdCLEVBQXhCO0FBQ0EsU0FBSzZFLE1BQUwsQ0FBWTBGLEtBQVosQ0FBa0JySyxJQUFsQixHQUF5QixFQUF6QjtBQUNBLFNBQUsyRSxNQUFMLENBQVkwRixLQUFaLENBQWtCcEssS0FBbEIsR0FBMEIsRUFBMUI7QUFDQSxTQUFLMEUsTUFBTCxDQUFZMEYsS0FBWixDQUFrQnRLLE1BQWxCLEdBQTJCLEVBQTNCO0FBQ0EsU0FBSzRFLE1BQUwsQ0FBWTBGLEtBQVosQ0FBa0JHLFVBQWxCLEdBQStCLEVBQS9CO0FBQ0EsU0FBSzdGLE1BQUwsQ0FBWTBGLEtBQVosQ0FBa0JQLHdCQUF3QixDQUFDLFdBQUQsQ0FBMUMsSUFBMkQsRUFBM0Q7QUFDRDs7QUFFRCxPQUFLVyxxQkFBTCxHQWZpQixDQWlCakI7QUFDQTs7QUFDQSxNQUFJLEtBQUt2QixPQUFMLENBQWF3QixlQUFqQixFQUFrQztBQUNoQyxTQUFLL0YsTUFBTCxDQUFZbEksVUFBWixDQUF1QmtPLFdBQXZCLENBQW1DLEtBQUtoRyxNQUF4QztBQUNEOztBQUNELFNBQU8sSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7QUFLQSxTQUFTaUcsU0FBVCxDQUFtQjVPLE9BQW5CLEVBQTRCO0FBQzFCLE1BQUlHLGFBQWEsR0FBR0gsT0FBTyxDQUFDRyxhQUE1QjtBQUNBLFNBQU9BLGFBQWEsR0FBR0EsYUFBYSxDQUFDQyxXQUFqQixHQUErQjlCLE1BQW5EO0FBQ0Q7O0FBRUQsU0FBU3VRLHFCQUFULENBQStCbEgsWUFBL0IsRUFBNkNtSCxLQUE3QyxFQUFvREMsUUFBcEQsRUFBOERDLGFBQTlELEVBQTZFO0FBQzNFLE1BQUlDLE1BQU0sR0FBR3RILFlBQVksQ0FBQ25ILFFBQWIsS0FBMEIsTUFBdkM7QUFDQSxNQUFJOEUsTUFBTSxHQUFHMkosTUFBTSxHQUFHdEgsWUFBWSxDQUFDeEgsYUFBYixDQUEyQkMsV0FBOUIsR0FBNEN1SCxZQUEvRDtBQUNBckMsUUFBTSxDQUFDNEosZ0JBQVAsQ0FBd0JKLEtBQXhCLEVBQStCQyxRQUEvQixFQUF5QztBQUFFSSxXQUFPLEVBQUU7QUFBWCxHQUF6Qzs7QUFFQSxNQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNYSix5QkFBcUIsQ0FBQ2xPLGVBQWUsQ0FBQzJFLE1BQU0sQ0FBQzdFLFVBQVIsQ0FBaEIsRUFBcUNxTyxLQUFyQyxFQUE0Q0MsUUFBNUMsRUFBc0RDLGFBQXRELENBQXJCO0FBQ0Q7O0FBQ0RBLGVBQWEsQ0FBQ0ksSUFBZCxDQUFtQjlKLE1BQW5CO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQSxTQUFTK0osbUJBQVQsQ0FBNkJ6RyxTQUE3QixFQUF3Q3NFLE9BQXhDLEVBQWlEM0MsS0FBakQsRUFBd0QrRSxXQUF4RCxFQUFxRTtBQUNuRTtBQUNBL0UsT0FBSyxDQUFDK0UsV0FBTixHQUFvQkEsV0FBcEI7QUFDQVYsV0FBUyxDQUFDaEcsU0FBRCxDQUFULENBQXFCc0csZ0JBQXJCLENBQXNDLFFBQXRDLEVBQWdEM0UsS0FBSyxDQUFDK0UsV0FBdEQsRUFBbUU7QUFBRUgsV0FBTyxFQUFFO0FBQVgsR0FBbkUsRUFIbUUsQ0FLbkU7O0FBQ0EsTUFBSUksYUFBYSxHQUFHNU8sZUFBZSxDQUFDaUksU0FBRCxDQUFuQztBQUNBaUcsdUJBQXFCLENBQUNVLGFBQUQsRUFBZ0IsUUFBaEIsRUFBMEJoRixLQUFLLENBQUMrRSxXQUFoQyxFQUE2Qy9FLEtBQUssQ0FBQ3lFLGFBQW5ELENBQXJCO0FBQ0F6RSxPQUFLLENBQUNnRixhQUFOLEdBQXNCQSxhQUF0QjtBQUNBaEYsT0FBSyxDQUFDaUYsYUFBTixHQUFzQixJQUF0QjtBQUVBLFNBQU9qRixLQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7QUFNQSxTQUFTa0Ysb0JBQVQsR0FBZ0M7QUFDOUIsTUFBSSxDQUFDLEtBQUtsRixLQUFMLENBQVdpRixhQUFoQixFQUErQjtBQUM3QixTQUFLakYsS0FBTCxHQUFhOEUsbUJBQW1CLENBQUMsS0FBS3pHLFNBQU4sRUFBaUIsS0FBS3NFLE9BQXRCLEVBQStCLEtBQUszQyxLQUFwQyxFQUEyQyxLQUFLbUYsY0FBaEQsQ0FBaEM7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7O0FBTUEsU0FBU0Msb0JBQVQsQ0FBOEIvRyxTQUE5QixFQUF5QzJCLEtBQXpDLEVBQWdEO0FBQzlDO0FBQ0FxRSxXQUFTLENBQUNoRyxTQUFELENBQVQsQ0FBcUJnSCxtQkFBckIsQ0FBeUMsUUFBekMsRUFBbURyRixLQUFLLENBQUMrRSxXQUF6RCxFQUY4QyxDQUk5Qzs7QUFDQS9FLE9BQUssQ0FBQ3lFLGFBQU4sQ0FBb0J2QyxPQUFwQixDQUE0QixVQUFVbkgsTUFBVixFQUFrQjtBQUM1Q0EsVUFBTSxDQUFDc0ssbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNyRixLQUFLLENBQUMrRSxXQUEzQztBQUNELEdBRkQsRUFMOEMsQ0FTOUM7O0FBQ0EvRSxPQUFLLENBQUMrRSxXQUFOLEdBQW9CLElBQXBCO0FBQ0EvRSxPQUFLLENBQUN5RSxhQUFOLEdBQXNCLEVBQXRCO0FBQ0F6RSxPQUFLLENBQUNnRixhQUFOLEdBQXNCLElBQXRCO0FBQ0FoRixPQUFLLENBQUNpRixhQUFOLEdBQXNCLEtBQXRCO0FBQ0EsU0FBT2pGLEtBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTa0UscUJBQVQsR0FBaUM7QUFDL0IsTUFBSSxLQUFLbEUsS0FBTCxDQUFXaUYsYUFBZixFQUE4QjtBQUM1Qkssd0JBQW9CLENBQUMsS0FBS0gsY0FBTixDQUFwQjtBQUNBLFNBQUtuRixLQUFMLEdBQWFvRixvQkFBb0IsQ0FBQyxLQUFLL0csU0FBTixFQUFpQixLQUFLMkIsS0FBdEIsQ0FBakM7QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVN1RixTQUFULENBQW1CQyxDQUFuQixFQUFzQjtBQUNwQixTQUFPQSxDQUFDLEtBQUssRUFBTixJQUFZLENBQUNDLEtBQUssQ0FBQ3pMLFVBQVUsQ0FBQ3dMLENBQUQsQ0FBWCxDQUFsQixJQUFxQ0UsUUFBUSxDQUFDRixDQUFELENBQXBEO0FBQ0Q7QUFFRDs7Ozs7Ozs7OztBQVFBLFNBQVNHLFNBQVQsQ0FBbUJsUSxPQUFuQixFQUE0Qm1FLE1BQTVCLEVBQW9DO0FBQ2xDeUIsUUFBTSxDQUFDOEQsSUFBUCxDQUFZdkYsTUFBWixFQUFvQnNJLE9BQXBCLENBQTRCLFVBQVVULElBQVYsRUFBZ0I7QUFDMUMsUUFBSW1FLElBQUksR0FBRyxFQUFYLENBRDBDLENBRTFDOztBQUNBLFFBQUksQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixLQUFwQixFQUEyQixPQUEzQixFQUFvQyxRQUFwQyxFQUE4QyxNQUE5QyxFQUFzRHJSLE9BQXRELENBQThEa04sSUFBOUQsTUFBd0UsQ0FBQyxDQUF6RSxJQUE4RThELFNBQVMsQ0FBQzNMLE1BQU0sQ0FBQzZILElBQUQsQ0FBUCxDQUEzRixFQUEyRztBQUN6R21FLFVBQUksR0FBRyxJQUFQO0FBQ0Q7O0FBQ0RuUSxXQUFPLENBQUNxTyxLQUFSLENBQWNyQyxJQUFkLElBQXNCN0gsTUFBTSxDQUFDNkgsSUFBRCxDQUFOLEdBQWVtRSxJQUFyQztBQUNELEdBUEQ7QUFRRDtBQUVEOzs7Ozs7Ozs7O0FBUUEsU0FBU0MsYUFBVCxDQUF1QnBRLE9BQXZCLEVBQWdDZ04sVUFBaEMsRUFBNEM7QUFDMUNwSCxRQUFNLENBQUM4RCxJQUFQLENBQVlzRCxVQUFaLEVBQXdCUCxPQUF4QixDQUFnQyxVQUFVVCxJQUFWLEVBQWdCO0FBQzlDLFFBQUk3RixLQUFLLEdBQUc2RyxVQUFVLENBQUNoQixJQUFELENBQXRCOztBQUNBLFFBQUk3RixLQUFLLEtBQUssS0FBZCxFQUFxQjtBQUNuQm5HLGFBQU8sQ0FBQ3FRLFlBQVIsQ0FBcUJyRSxJQUFyQixFQUEyQmdCLFVBQVUsQ0FBQ2hCLElBQUQsQ0FBckM7QUFDRCxLQUZELE1BRU87QUFDTGhNLGFBQU8sQ0FBQ3VPLGVBQVIsQ0FBd0J2QyxJQUF4QjtBQUNEO0FBQ0YsR0FQRDtBQVFEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBU3NFLFVBQVQsQ0FBb0JqRSxJQUFwQixFQUEwQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBNkQsV0FBUyxDQUFDN0QsSUFBSSxDQUFDcEgsUUFBTCxDQUFjMEQsTUFBZixFQUF1QjBELElBQUksQ0FBQ2xJLE1BQTVCLENBQVQsQ0FMd0IsQ0FPeEI7QUFDQTs7QUFDQWlNLGVBQWEsQ0FBQy9ELElBQUksQ0FBQ3BILFFBQUwsQ0FBYzBELE1BQWYsRUFBdUIwRCxJQUFJLENBQUNXLFVBQTVCLENBQWIsQ0FUd0IsQ0FXeEI7O0FBQ0EsTUFBSVgsSUFBSSxDQUFDa0UsWUFBTCxJQUFxQjNLLE1BQU0sQ0FBQzhELElBQVAsQ0FBWTJDLElBQUksQ0FBQ1UsV0FBakIsRUFBOEJwTyxNQUF2RCxFQUErRDtBQUM3RHVSLGFBQVMsQ0FBQzdELElBQUksQ0FBQ2tFLFlBQU4sRUFBb0JsRSxJQUFJLENBQUNVLFdBQXpCLENBQVQ7QUFDRDs7QUFFRCxTQUFPVixJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7O0FBVUEsU0FBU21FLGdCQUFULENBQTBCNUgsU0FBMUIsRUFBcUNELE1BQXJDLEVBQTZDdUUsT0FBN0MsRUFBc0R1RCxlQUF0RCxFQUF1RWxHLEtBQXZFLEVBQThFO0FBQzVFO0FBQ0EsTUFBSVksZ0JBQWdCLEdBQUdiLG1CQUFtQixDQUFDQyxLQUFELEVBQVE1QixNQUFSLEVBQWdCQyxTQUFoQixFQUEyQnNFLE9BQU8sQ0FBQ0MsYUFBbkMsQ0FBMUMsQ0FGNEUsQ0FJNUU7QUFDQTtBQUNBOztBQUNBLE1BQUk3RCxTQUFTLEdBQUdELG9CQUFvQixDQUFDNkQsT0FBTyxDQUFDNUQsU0FBVCxFQUFvQjZCLGdCQUFwQixFQUFzQ3hDLE1BQXRDLEVBQThDQyxTQUE5QyxFQUF5RHNFLE9BQU8sQ0FBQ2QsU0FBUixDQUFrQmdCLElBQWxCLENBQXVCdEUsaUJBQWhGLEVBQW1Hb0UsT0FBTyxDQUFDZCxTQUFSLENBQWtCZ0IsSUFBbEIsQ0FBdUJ2RSxPQUExSCxDQUFwQztBQUVBRixRQUFNLENBQUMwSCxZQUFQLENBQW9CLGFBQXBCLEVBQW1DL0csU0FBbkMsRUFUNEUsQ0FXNUU7QUFDQTs7QUFDQTRHLFdBQVMsQ0FBQ3ZILE1BQUQsRUFBUztBQUFFMkUsWUFBUSxFQUFFSixPQUFPLENBQUNDLGFBQVIsR0FBd0IsT0FBeEIsR0FBa0M7QUFBOUMsR0FBVCxDQUFUO0FBRUEsU0FBT0QsT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxTQUFTd0QsaUJBQVQsQ0FBMkJyRSxJQUEzQixFQUFpQ3NFLFdBQWpDLEVBQThDO0FBQzVDLE1BQUlDLGFBQWEsR0FBR3ZFLElBQUksQ0FBQzVGLE9BQXpCO0FBQUEsTUFDSWtDLE1BQU0sR0FBR2lJLGFBQWEsQ0FBQ2pJLE1BRDNCO0FBQUEsTUFFSUMsU0FBUyxHQUFHZ0ksYUFBYSxDQUFDaEksU0FGOUI7QUFHQSxNQUFJaUksS0FBSyxHQUFHbk0sSUFBSSxDQUFDbU0sS0FBakI7QUFBQSxNQUNJQyxLQUFLLEdBQUdwTSxJQUFJLENBQUNvTSxLQURqQjs7QUFHQSxNQUFJQyxPQUFPLEdBQUcsU0FBU0EsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDaEMsV0FBT0EsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBSUMsY0FBYyxHQUFHSixLQUFLLENBQUNqSSxTQUFTLENBQUM3RCxLQUFYLENBQTFCO0FBQ0EsTUFBSW1NLFdBQVcsR0FBR0wsS0FBSyxDQUFDbEksTUFBTSxDQUFDNUQsS0FBUixDQUF2QjtBQUVBLE1BQUlvTSxVQUFVLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQnJTLE9BQWxCLENBQTBCdU4sSUFBSSxDQUFDL0MsU0FBL0IsTUFBOEMsQ0FBQyxDQUFoRTtBQUNBLE1BQUk4SCxXQUFXLEdBQUcvRSxJQUFJLENBQUMvQyxTQUFMLENBQWV4SyxPQUFmLENBQXVCLEdBQXZCLE1BQWdDLENBQUMsQ0FBbkQ7QUFDQSxNQUFJdVMsZUFBZSxHQUFHSixjQUFjLEdBQUcsQ0FBakIsS0FBdUJDLFdBQVcsR0FBRyxDQUEzRDtBQUNBLE1BQUlJLFlBQVksR0FBR0wsY0FBYyxHQUFHLENBQWpCLEtBQXVCLENBQXZCLElBQTRCQyxXQUFXLEdBQUcsQ0FBZCxLQUFvQixDQUFuRTtBQUVBLE1BQUlLLG1CQUFtQixHQUFHLENBQUNaLFdBQUQsR0FBZUksT0FBZixHQUF5QkksVUFBVSxJQUFJQyxXQUFkLElBQTZCQyxlQUE3QixHQUErQ1IsS0FBL0MsR0FBdURDLEtBQTFHO0FBQ0EsTUFBSVUsaUJBQWlCLEdBQUcsQ0FBQ2IsV0FBRCxHQUFlSSxPQUFmLEdBQXlCRixLQUFqRDtBQUVBLFNBQU87QUFDTDdNLFFBQUksRUFBRXVOLG1CQUFtQixDQUFDRCxZQUFZLElBQUksQ0FBQ0YsV0FBakIsSUFBZ0NULFdBQWhDLEdBQThDaEksTUFBTSxDQUFDM0UsSUFBUCxHQUFjLENBQTVELEdBQWdFMkUsTUFBTSxDQUFDM0UsSUFBeEUsQ0FEcEI7QUFFTEYsT0FBRyxFQUFFME4saUJBQWlCLENBQUM3SSxNQUFNLENBQUM3RSxHQUFSLENBRmpCO0FBR0xDLFVBQU0sRUFBRXlOLGlCQUFpQixDQUFDN0ksTUFBTSxDQUFDNUUsTUFBUixDQUhwQjtBQUlMRSxTQUFLLEVBQUVzTixtQkFBbUIsQ0FBQzVJLE1BQU0sQ0FBQzFFLEtBQVI7QUFKckIsR0FBUDtBQU1EOztBQUVELElBQUl3TixTQUFTLEdBQUdwVCxTQUFTLElBQUksV0FBVzRDLElBQVgsQ0FBZ0JyQyxTQUFTLENBQUNDLFNBQTFCLENBQTdCO0FBRUE7Ozs7Ozs7O0FBT0EsU0FBUzZTLFlBQVQsQ0FBc0JyRixJQUF0QixFQUE0QmEsT0FBNUIsRUFBcUM7QUFDbkMsTUFBSXhDLENBQUMsR0FBR3dDLE9BQU8sQ0FBQ3hDLENBQWhCO0FBQUEsTUFDSUUsQ0FBQyxHQUFHc0MsT0FBTyxDQUFDdEMsQ0FEaEI7QUFFQSxNQUFJakMsTUFBTSxHQUFHMEQsSUFBSSxDQUFDNUYsT0FBTCxDQUFha0MsTUFBMUIsQ0FIbUMsQ0FLbkM7O0FBRUEsTUFBSWdKLDJCQUEyQixHQUFHaEcsSUFBSSxDQUFDVSxJQUFJLENBQUNwSCxRQUFMLENBQWNtSCxTQUFmLEVBQTBCLFVBQVV2SSxRQUFWLEVBQW9CO0FBQ2xGLFdBQU9BLFFBQVEsQ0FBQ2dLLElBQVQsS0FBa0IsWUFBekI7QUFDRCxHQUZxQyxDQUFKLENBRS9CK0QsZUFGSDs7QUFHQSxNQUFJRCwyQkFBMkIsS0FBS3ZPLFNBQXBDLEVBQStDO0FBQzdDc0osV0FBTyxDQUFDQyxJQUFSLENBQWEsK0hBQWI7QUFDRDs7QUFDRCxNQUFJaUYsZUFBZSxHQUFHRCwyQkFBMkIsS0FBS3ZPLFNBQWhDLEdBQTRDdU8sMkJBQTVDLEdBQTBFekUsT0FBTyxDQUFDMEUsZUFBeEc7QUFFQSxNQUFJalEsWUFBWSxHQUFHSCxlQUFlLENBQUM2SyxJQUFJLENBQUNwSCxRQUFMLENBQWMwRCxNQUFmLENBQWxDO0FBQ0EsTUFBSWtKLGdCQUFnQixHQUFHbkwscUJBQXFCLENBQUMvRSxZQUFELENBQTVDLENBaEJtQyxDQWtCbkM7O0FBQ0EsTUFBSXdDLE1BQU0sR0FBRztBQUNYbUosWUFBUSxFQUFFM0UsTUFBTSxDQUFDMkU7QUFETixHQUFiO0FBSUEsTUFBSTdHLE9BQU8sR0FBR2lLLGlCQUFpQixDQUFDckUsSUFBRCxFQUFPL04sTUFBTSxDQUFDd1QsZ0JBQVAsR0FBMEIsQ0FBMUIsSUFBK0IsQ0FBQ0wsU0FBdkMsQ0FBL0I7QUFFQSxNQUFJcE4sS0FBSyxHQUFHcUcsQ0FBQyxLQUFLLFFBQU4sR0FBaUIsS0FBakIsR0FBeUIsUUFBckM7QUFDQSxNQUFJcEcsS0FBSyxHQUFHc0csQ0FBQyxLQUFLLE9BQU4sR0FBZ0IsTUFBaEIsR0FBeUIsT0FBckMsQ0ExQm1DLENBNEJuQztBQUNBO0FBQ0E7O0FBQ0EsTUFBSW1ILGdCQUFnQixHQUFHakUsd0JBQXdCLENBQUMsV0FBRCxDQUEvQyxDQS9CbUMsQ0FpQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFJOUosSUFBSSxHQUFHLEtBQUssQ0FBaEI7QUFBQSxNQUNJRixHQUFHLEdBQUcsS0FBSyxDQURmOztBQUVBLE1BQUlPLEtBQUssS0FBSyxRQUFkLEVBQXdCO0FBQ3RCO0FBQ0E7QUFDQSxRQUFJMUMsWUFBWSxDQUFDbkIsUUFBYixLQUEwQixNQUE5QixFQUFzQztBQUNwQ3NELFNBQUcsR0FBRyxDQUFDbkMsWUFBWSxDQUFDb0YsWUFBZCxHQUE2Qk4sT0FBTyxDQUFDMUMsTUFBM0M7QUFDRCxLQUZELE1BRU87QUFDTEQsU0FBRyxHQUFHLENBQUMrTixnQkFBZ0IsQ0FBQy9NLE1BQWxCLEdBQTJCMkIsT0FBTyxDQUFDMUMsTUFBekM7QUFDRDtBQUNGLEdBUkQsTUFRTztBQUNMRCxPQUFHLEdBQUcyQyxPQUFPLENBQUMzQyxHQUFkO0FBQ0Q7O0FBQ0QsTUFBSVEsS0FBSyxLQUFLLE9BQWQsRUFBdUI7QUFDckIsUUFBSTNDLFlBQVksQ0FBQ25CLFFBQWIsS0FBMEIsTUFBOUIsRUFBc0M7QUFDcEN3RCxVQUFJLEdBQUcsQ0FBQ3JDLFlBQVksQ0FBQ21GLFdBQWQsR0FBNEJMLE9BQU8sQ0FBQ3hDLEtBQTNDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELFVBQUksR0FBRyxDQUFDNk4sZ0JBQWdCLENBQUM5TSxLQUFsQixHQUEwQjBCLE9BQU8sQ0FBQ3hDLEtBQXpDO0FBQ0Q7QUFDRixHQU5ELE1BTU87QUFDTEQsUUFBSSxHQUFHeUMsT0FBTyxDQUFDekMsSUFBZjtBQUNEOztBQUNELE1BQUk0TixlQUFlLElBQUlHLGdCQUF2QixFQUF5QztBQUN2QzVOLFVBQU0sQ0FBQzROLGdCQUFELENBQU4sR0FBMkIsaUJBQWlCL04sSUFBakIsR0FBd0IsTUFBeEIsR0FBaUNGLEdBQWpDLEdBQXVDLFFBQWxFO0FBQ0FLLFVBQU0sQ0FBQ0UsS0FBRCxDQUFOLEdBQWdCLENBQWhCO0FBQ0FGLFVBQU0sQ0FBQ0csS0FBRCxDQUFOLEdBQWdCLENBQWhCO0FBQ0FILFVBQU0sQ0FBQ3FLLFVBQVAsR0FBb0IsV0FBcEI7QUFDRCxHQUxELE1BS087QUFDTDtBQUNBLFFBQUl3RCxTQUFTLEdBQUczTixLQUFLLEtBQUssUUFBVixHQUFxQixDQUFDLENBQXRCLEdBQTBCLENBQTFDO0FBQ0EsUUFBSTROLFVBQVUsR0FBRzNOLEtBQUssS0FBSyxPQUFWLEdBQW9CLENBQUMsQ0FBckIsR0FBeUIsQ0FBMUM7QUFDQUgsVUFBTSxDQUFDRSxLQUFELENBQU4sR0FBZ0JQLEdBQUcsR0FBR2tPLFNBQXRCO0FBQ0E3TixVQUFNLENBQUNHLEtBQUQsQ0FBTixHQUFnQk4sSUFBSSxHQUFHaU8sVUFBdkI7QUFDQTlOLFVBQU0sQ0FBQ3FLLFVBQVAsR0FBb0JuSyxLQUFLLEdBQUcsSUFBUixHQUFlQyxLQUFuQztBQUNELEdBNUVrQyxDQThFbkM7OztBQUNBLE1BQUkwSSxVQUFVLEdBQUc7QUFDZixtQkFBZVgsSUFBSSxDQUFDL0M7QUFETCxHQUFqQixDQS9FbUMsQ0FtRm5DOztBQUNBK0MsTUFBSSxDQUFDVyxVQUFMLEdBQWtCNUcsUUFBUSxDQUFDLEVBQUQsRUFBSzRHLFVBQUwsRUFBaUJYLElBQUksQ0FBQ1csVUFBdEIsQ0FBMUI7QUFDQVgsTUFBSSxDQUFDbEksTUFBTCxHQUFjaUMsUUFBUSxDQUFDLEVBQUQsRUFBS2pDLE1BQUwsRUFBYWtJLElBQUksQ0FBQ2xJLE1BQWxCLENBQXRCO0FBQ0FrSSxNQUFJLENBQUNVLFdBQUwsR0FBbUIzRyxRQUFRLENBQUMsRUFBRCxFQUFLaUcsSUFBSSxDQUFDNUYsT0FBTCxDQUFheUwsS0FBbEIsRUFBeUI3RixJQUFJLENBQUNVLFdBQTlCLENBQTNCO0FBRUEsU0FBT1YsSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVVBLFNBQVM4RixrQkFBVCxDQUE0Qi9GLFNBQTVCLEVBQXVDZ0csY0FBdkMsRUFBdURDLGFBQXZELEVBQXNFO0FBQ3BFLE1BQUlDLFVBQVUsR0FBRzNHLElBQUksQ0FBQ1MsU0FBRCxFQUFZLFVBQVVoRCxJQUFWLEVBQWdCO0FBQy9DLFFBQUl5RSxJQUFJLEdBQUd6RSxJQUFJLENBQUN5RSxJQUFoQjtBQUNBLFdBQU9BLElBQUksS0FBS3VFLGNBQWhCO0FBQ0QsR0FIb0IsQ0FBckI7QUFLQSxNQUFJRyxVQUFVLEdBQUcsQ0FBQyxDQUFDRCxVQUFGLElBQWdCbEcsU0FBUyxDQUFDd0IsSUFBVixDQUFlLFVBQVUvSixRQUFWLEVBQW9CO0FBQ2xFLFdBQU9BLFFBQVEsQ0FBQ2dLLElBQVQsS0FBa0J3RSxhQUFsQixJQUFtQ3hPLFFBQVEsQ0FBQytJLE9BQTVDLElBQXVEL0ksUUFBUSxDQUFDekIsS0FBVCxHQUFpQmtRLFVBQVUsQ0FBQ2xRLEtBQTFGO0FBQ0QsR0FGZ0MsQ0FBakM7O0FBSUEsTUFBSSxDQUFDbVEsVUFBTCxFQUFpQjtBQUNmLFFBQUlDLFdBQVcsR0FBRyxNQUFNSixjQUFOLEdBQXVCLEdBQXpDOztBQUNBLFFBQUlLLFNBQVMsR0FBRyxNQUFNSixhQUFOLEdBQXNCLEdBQXRDO0FBQ0EzRixXQUFPLENBQUNDLElBQVIsQ0FBYThGLFNBQVMsR0FBRywyQkFBWixHQUEwQ0QsV0FBMUMsR0FBd0QsMkRBQXhELEdBQXNIQSxXQUF0SCxHQUFvSSxHQUFqSjtBQUNEOztBQUNELFNBQU9ELFVBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTTCxLQUFULENBQWU3RixJQUFmLEVBQXFCYSxPQUFyQixFQUE4QjtBQUM1QixNQUFJd0YsbUJBQUosQ0FENEIsQ0FHNUI7OztBQUNBLE1BQUksQ0FBQ1Asa0JBQWtCLENBQUM5RixJQUFJLENBQUNwSCxRQUFMLENBQWNtSCxTQUFmLEVBQTBCLE9BQTFCLEVBQW1DLGNBQW5DLENBQXZCLEVBQTJFO0FBQ3pFLFdBQU9DLElBQVA7QUFDRDs7QUFFRCxNQUFJa0UsWUFBWSxHQUFHckQsT0FBTyxDQUFDbE4sT0FBM0IsQ0FSNEIsQ0FVNUI7O0FBQ0EsTUFBSSxPQUFPdVEsWUFBUCxLQUF3QixRQUE1QixFQUFzQztBQUNwQ0EsZ0JBQVksR0FBR2xFLElBQUksQ0FBQ3BILFFBQUwsQ0FBYzBELE1BQWQsQ0FBcUJnSyxhQUFyQixDQUFtQ3BDLFlBQW5DLENBQWYsQ0FEb0MsQ0FHcEM7O0FBQ0EsUUFBSSxDQUFDQSxZQUFMLEVBQW1CO0FBQ2pCLGFBQU9sRSxJQUFQO0FBQ0Q7QUFDRixHQVBELE1BT087QUFDTDtBQUNBO0FBQ0EsUUFBSSxDQUFDQSxJQUFJLENBQUNwSCxRQUFMLENBQWMwRCxNQUFkLENBQXFCNUYsUUFBckIsQ0FBOEJ3TixZQUE5QixDQUFMLEVBQWtEO0FBQ2hEN0QsYUFBTyxDQUFDQyxJQUFSLENBQWEsK0RBQWI7QUFDQSxhQUFPTixJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJL0MsU0FBUyxHQUFHK0MsSUFBSSxDQUFDL0MsU0FBTCxDQUFlZSxLQUFmLENBQXFCLEdBQXJCLEVBQTBCLENBQTFCLENBQWhCO0FBQ0EsTUFBSXVHLGFBQWEsR0FBR3ZFLElBQUksQ0FBQzVGLE9BQXpCO0FBQUEsTUFDSWtDLE1BQU0sR0FBR2lJLGFBQWEsQ0FBQ2pJLE1BRDNCO0FBQUEsTUFFSUMsU0FBUyxHQUFHZ0ksYUFBYSxDQUFDaEksU0FGOUI7QUFJQSxNQUFJdUksVUFBVSxHQUFHLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0JyUyxPQUFsQixDQUEwQndLLFNBQTFCLE1BQXlDLENBQUMsQ0FBM0Q7QUFFQSxNQUFJc0osR0FBRyxHQUFHekIsVUFBVSxHQUFHLFFBQUgsR0FBYyxPQUFsQztBQUNBLE1BQUkwQixlQUFlLEdBQUcxQixVQUFVLEdBQUcsS0FBSCxHQUFXLE1BQTNDO0FBQ0EsTUFBSWpPLElBQUksR0FBRzJQLGVBQWUsQ0FBQ0MsV0FBaEIsRUFBWDtBQUNBLE1BQUlDLE9BQU8sR0FBRzVCLFVBQVUsR0FBRyxNQUFILEdBQVksS0FBcEM7QUFDQSxNQUFJNkIsTUFBTSxHQUFHN0IsVUFBVSxHQUFHLFFBQUgsR0FBYyxPQUFyQztBQUNBLE1BQUk4QixnQkFBZ0IsR0FBR3hJLGFBQWEsQ0FBQzhGLFlBQUQsQ0FBYixDQUE0QnFDLEdBQTVCLENBQXZCLENBdkM0QixDQXlDNUI7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxNQUFJaEssU0FBUyxDQUFDb0ssTUFBRCxDQUFULEdBQW9CQyxnQkFBcEIsR0FBdUN0SyxNQUFNLENBQUN6RixJQUFELENBQWpELEVBQXlEO0FBQ3ZEbUosUUFBSSxDQUFDNUYsT0FBTCxDQUFha0MsTUFBYixDQUFvQnpGLElBQXBCLEtBQTZCeUYsTUFBTSxDQUFDekYsSUFBRCxDQUFOLElBQWdCMEYsU0FBUyxDQUFDb0ssTUFBRCxDQUFULEdBQW9CQyxnQkFBcEMsQ0FBN0I7QUFDRCxHQWpEMkIsQ0FrRDVCOzs7QUFDQSxNQUFJckssU0FBUyxDQUFDMUYsSUFBRCxDQUFULEdBQWtCK1AsZ0JBQWxCLEdBQXFDdEssTUFBTSxDQUFDcUssTUFBRCxDQUEvQyxFQUF5RDtBQUN2RDNHLFFBQUksQ0FBQzVGLE9BQUwsQ0FBYWtDLE1BQWIsQ0FBb0J6RixJQUFwQixLQUE2QjBGLFNBQVMsQ0FBQzFGLElBQUQsQ0FBVCxHQUFrQitQLGdCQUFsQixHQUFxQ3RLLE1BQU0sQ0FBQ3FLLE1BQUQsQ0FBeEU7QUFDRDs7QUFDRDNHLE1BQUksQ0FBQzVGLE9BQUwsQ0FBYWtDLE1BQWIsR0FBc0JuQyxhQUFhLENBQUM2RixJQUFJLENBQUM1RixPQUFMLENBQWFrQyxNQUFkLENBQW5DLENBdEQ0QixDQXdENUI7O0FBQ0EsTUFBSXVLLE1BQU0sR0FBR3RLLFNBQVMsQ0FBQzFGLElBQUQsQ0FBVCxHQUFrQjBGLFNBQVMsQ0FBQ2dLLEdBQUQsQ0FBVCxHQUFpQixDQUFuQyxHQUF1Q0ssZ0JBQWdCLEdBQUcsQ0FBdkUsQ0F6RDRCLENBMkQ1QjtBQUNBOztBQUNBLE1BQUk1UyxHQUFHLEdBQUdOLHdCQUF3QixDQUFDc00sSUFBSSxDQUFDcEgsUUFBTCxDQUFjMEQsTUFBZixDQUFsQztBQUNBLE1BQUl3SyxnQkFBZ0IsR0FBRzVPLFVBQVUsQ0FBQ2xFLEdBQUcsQ0FBQyxXQUFXd1MsZUFBWixDQUFKLEVBQWtDLEVBQWxDLENBQWpDO0FBQ0EsTUFBSU8sZ0JBQWdCLEdBQUc3TyxVQUFVLENBQUNsRSxHQUFHLENBQUMsV0FBV3dTLGVBQVgsR0FBNkIsT0FBOUIsQ0FBSixFQUE0QyxFQUE1QyxDQUFqQztBQUNBLE1BQUlRLFNBQVMsR0FBR0gsTUFBTSxHQUFHN0csSUFBSSxDQUFDNUYsT0FBTCxDQUFha0MsTUFBYixDQUFvQnpGLElBQXBCLENBQVQsR0FBcUNpUSxnQkFBckMsR0FBd0RDLGdCQUF4RSxDQWhFNEIsQ0FrRTVCOztBQUNBQyxXQUFTLEdBQUczTyxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDNE8sR0FBTCxDQUFTM0ssTUFBTSxDQUFDaUssR0FBRCxDQUFOLEdBQWNLLGdCQUF2QixFQUF5Q0ksU0FBekMsQ0FBVCxFQUE4RCxDQUE5RCxDQUFaO0FBRUFoSCxNQUFJLENBQUNrRSxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBbEUsTUFBSSxDQUFDNUYsT0FBTCxDQUFheUwsS0FBYixJQUFzQlEsbUJBQW1CLEdBQUcsRUFBdEIsRUFBMEI3TSxjQUFjLENBQUM2TSxtQkFBRCxFQUFzQnhQLElBQXRCLEVBQTRCd0IsSUFBSSxDQUFDbU0sS0FBTCxDQUFXd0MsU0FBWCxDQUE1QixDQUF4QyxFQUE0RnhOLGNBQWMsQ0FBQzZNLG1CQUFELEVBQXNCSyxPQUF0QixFQUErQixFQUEvQixDQUExRyxFQUE4SUwsbUJBQXBLO0FBRUEsU0FBT3JHLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTa0gsb0JBQVQsQ0FBOEJuSixTQUE5QixFQUF5QztBQUN2QyxNQUFJQSxTQUFTLEtBQUssS0FBbEIsRUFBeUI7QUFDdkIsV0FBTyxPQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLFNBQVMsS0FBSyxPQUFsQixFQUEyQjtBQUNoQyxXQUFPLEtBQVA7QUFDRDs7QUFDRCxTQUFPQSxTQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBLElBQUlvSixVQUFVLEdBQUcsQ0FBQyxZQUFELEVBQWUsTUFBZixFQUF1QixVQUF2QixFQUFtQyxXQUFuQyxFQUFnRCxLQUFoRCxFQUF1RCxTQUF2RCxFQUFrRSxhQUFsRSxFQUFpRixPQUFqRixFQUEwRixXQUExRixFQUF1RyxZQUF2RyxFQUFxSCxRQUFySCxFQUErSCxjQUEvSCxFQUErSSxVQUEvSSxFQUEySixNQUEzSixFQUFtSyxZQUFuSyxDQUFqQixDLENBRUE7O0FBQ0EsSUFBSUMsZUFBZSxHQUFHRCxVQUFVLENBQUNoSCxLQUFYLENBQWlCLENBQWpCLENBQXRCO0FBRUE7Ozs7Ozs7Ozs7O0FBVUEsU0FBU2tILFNBQVQsQ0FBbUJwSyxTQUFuQixFQUE4QjtBQUM1QixNQUFJcUssT0FBTyxHQUFHeFEsU0FBUyxDQUFDeEUsTUFBVixHQUFtQixDQUFuQixJQUF3QndFLFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJDLFNBQXpDLEdBQXFERCxTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxLQUFsRjtBQUVBLE1BQUl5USxLQUFLLEdBQUdILGVBQWUsQ0FBQzNVLE9BQWhCLENBQXdCd0ssU0FBeEIsQ0FBWjtBQUNBLE1BQUlzQyxHQUFHLEdBQUc2SCxlQUFlLENBQUNqSCxLQUFoQixDQUFzQm9ILEtBQUssR0FBRyxDQUE5QixFQUFpQ0MsTUFBakMsQ0FBd0NKLGVBQWUsQ0FBQ2pILEtBQWhCLENBQXNCLENBQXRCLEVBQXlCb0gsS0FBekIsQ0FBeEMsQ0FBVjtBQUNBLFNBQU9ELE9BQU8sR0FBRy9ILEdBQUcsQ0FBQ2tJLE9BQUosRUFBSCxHQUFtQmxJLEdBQWpDO0FBQ0Q7O0FBRUQsSUFBSW1JLFNBQVMsR0FBRztBQUNkQyxNQUFJLEVBQUUsTUFEUTtBQUVkQyxXQUFTLEVBQUUsV0FGRztBQUdkQyxrQkFBZ0IsRUFBRTtBQUhKLENBQWhCO0FBTUE7Ozs7Ozs7O0FBT0EsU0FBUzlHLElBQVQsQ0FBY2YsSUFBZCxFQUFvQmEsT0FBcEIsRUFBNkI7QUFDM0I7QUFDQSxNQUFJUSxpQkFBaUIsQ0FBQ3JCLElBQUksQ0FBQ3BILFFBQUwsQ0FBY21ILFNBQWYsRUFBMEIsT0FBMUIsQ0FBckIsRUFBeUQ7QUFDdkQsV0FBT0MsSUFBUDtBQUNEOztBQUVELE1BQUlBLElBQUksQ0FBQ1ksT0FBTCxJQUFnQlosSUFBSSxDQUFDL0MsU0FBTCxLQUFtQitDLElBQUksQ0FBQ2dCLGlCQUE1QyxFQUErRDtBQUM3RDtBQUNBLFdBQU9oQixJQUFQO0FBQ0Q7O0FBRUQsTUFBSXRELFVBQVUsR0FBR0wsYUFBYSxDQUFDMkQsSUFBSSxDQUFDcEgsUUFBTCxDQUFjMEQsTUFBZixFQUF1QjBELElBQUksQ0FBQ3BILFFBQUwsQ0FBYzJELFNBQXJDLEVBQWdEc0UsT0FBTyxDQUFDckUsT0FBeEQsRUFBaUVxRSxPQUFPLENBQUNwRSxpQkFBekUsRUFBNEZ1RCxJQUFJLENBQUNjLGFBQWpHLENBQTlCO0FBRUEsTUFBSTdELFNBQVMsR0FBRytDLElBQUksQ0FBQy9DLFNBQUwsQ0FBZWUsS0FBZixDQUFxQixHQUFyQixFQUEwQixDQUExQixDQUFoQjtBQUNBLE1BQUk4SixpQkFBaUIsR0FBR3JKLG9CQUFvQixDQUFDeEIsU0FBRCxDQUE1QztBQUNBLE1BQUljLFNBQVMsR0FBR2lDLElBQUksQ0FBQy9DLFNBQUwsQ0FBZWUsS0FBZixDQUFxQixHQUFyQixFQUEwQixDQUExQixLQUFnQyxFQUFoRDtBQUVBLE1BQUkrSixTQUFTLEdBQUcsRUFBaEI7O0FBRUEsVUFBUWxILE9BQU8sQ0FBQ21ILFFBQWhCO0FBQ0UsU0FBS04sU0FBUyxDQUFDQyxJQUFmO0FBQ0VJLGVBQVMsR0FBRyxDQUFDOUssU0FBRCxFQUFZNkssaUJBQVosQ0FBWjtBQUNBOztBQUNGLFNBQUtKLFNBQVMsQ0FBQ0UsU0FBZjtBQUNFRyxlQUFTLEdBQUdWLFNBQVMsQ0FBQ3BLLFNBQUQsQ0FBckI7QUFDQTs7QUFDRixTQUFLeUssU0FBUyxDQUFDRyxnQkFBZjtBQUNFRSxlQUFTLEdBQUdWLFNBQVMsQ0FBQ3BLLFNBQUQsRUFBWSxJQUFaLENBQXJCO0FBQ0E7O0FBQ0Y7QUFDRThLLGVBQVMsR0FBR2xILE9BQU8sQ0FBQ21ILFFBQXBCO0FBWEo7O0FBY0FELFdBQVMsQ0FBQzNILE9BQVYsQ0FBa0IsVUFBVTZILElBQVYsRUFBZ0JWLEtBQWhCLEVBQXVCO0FBQ3ZDLFFBQUl0SyxTQUFTLEtBQUtnTCxJQUFkLElBQXNCRixTQUFTLENBQUN6VixNQUFWLEtBQXFCaVYsS0FBSyxHQUFHLENBQXZELEVBQTBEO0FBQ3hELGFBQU92SCxJQUFQO0FBQ0Q7O0FBRUQvQyxhQUFTLEdBQUcrQyxJQUFJLENBQUMvQyxTQUFMLENBQWVlLEtBQWYsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBMUIsQ0FBWjtBQUNBOEoscUJBQWlCLEdBQUdySixvQkFBb0IsQ0FBQ3hCLFNBQUQsQ0FBeEM7QUFFQSxRQUFJK0IsYUFBYSxHQUFHZ0IsSUFBSSxDQUFDNUYsT0FBTCxDQUFha0MsTUFBakM7QUFDQSxRQUFJNEwsVUFBVSxHQUFHbEksSUFBSSxDQUFDNUYsT0FBTCxDQUFhbUMsU0FBOUIsQ0FUdUMsQ0FXdkM7O0FBQ0EsUUFBSWtJLEtBQUssR0FBR3BNLElBQUksQ0FBQ29NLEtBQWpCO0FBQ0EsUUFBSTBELFdBQVcsR0FBR2xMLFNBQVMsS0FBSyxNQUFkLElBQXdCd0gsS0FBSyxDQUFDekYsYUFBYSxDQUFDcEgsS0FBZixDQUFMLEdBQTZCNk0sS0FBSyxDQUFDeUQsVUFBVSxDQUFDdlEsSUFBWixDQUExRCxJQUErRXNGLFNBQVMsS0FBSyxPQUFkLElBQXlCd0gsS0FBSyxDQUFDekYsYUFBYSxDQUFDckgsSUFBZixDQUFMLEdBQTRCOE0sS0FBSyxDQUFDeUQsVUFBVSxDQUFDdFEsS0FBWixDQUF6SSxJQUErSnFGLFNBQVMsS0FBSyxLQUFkLElBQXVCd0gsS0FBSyxDQUFDekYsYUFBYSxDQUFDdEgsTUFBZixDQUFMLEdBQThCK00sS0FBSyxDQUFDeUQsVUFBVSxDQUFDelEsR0FBWixDQUF6TixJQUE2T3dGLFNBQVMsS0FBSyxRQUFkLElBQTBCd0gsS0FBSyxDQUFDekYsYUFBYSxDQUFDdkgsR0FBZixDQUFMLEdBQTJCZ04sS0FBSyxDQUFDeUQsVUFBVSxDQUFDeFEsTUFBWixDQUF6VDtBQUVBLFFBQUkwUSxhQUFhLEdBQUczRCxLQUFLLENBQUN6RixhQUFhLENBQUNySCxJQUFmLENBQUwsR0FBNEI4TSxLQUFLLENBQUMvSCxVQUFVLENBQUMvRSxJQUFaLENBQXJEO0FBQ0EsUUFBSTBRLGNBQWMsR0FBRzVELEtBQUssQ0FBQ3pGLGFBQWEsQ0FBQ3BILEtBQWYsQ0FBTCxHQUE2QjZNLEtBQUssQ0FBQy9ILFVBQVUsQ0FBQzlFLEtBQVosQ0FBdkQ7QUFDQSxRQUFJMFEsWUFBWSxHQUFHN0QsS0FBSyxDQUFDekYsYUFBYSxDQUFDdkgsR0FBZixDQUFMLEdBQTJCZ04sS0FBSyxDQUFDL0gsVUFBVSxDQUFDakYsR0FBWixDQUFuRDtBQUNBLFFBQUk4USxlQUFlLEdBQUc5RCxLQUFLLENBQUN6RixhQUFhLENBQUN0SCxNQUFmLENBQUwsR0FBOEIrTSxLQUFLLENBQUMvSCxVQUFVLENBQUNoRixNQUFaLENBQXpEO0FBRUEsUUFBSThRLG1CQUFtQixHQUFHdkwsU0FBUyxLQUFLLE1BQWQsSUFBd0JtTCxhQUF4QixJQUF5Q25MLFNBQVMsS0FBSyxPQUFkLElBQXlCb0wsY0FBbEUsSUFBb0ZwTCxTQUFTLEtBQUssS0FBZCxJQUF1QnFMLFlBQTNHLElBQTJIckwsU0FBUyxLQUFLLFFBQWQsSUFBMEJzTCxlQUEvSyxDQXBCdUMsQ0FzQnZDOztBQUNBLFFBQUl6RCxVQUFVLEdBQUcsQ0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQnJTLE9BQWxCLENBQTBCd0ssU0FBMUIsTUFBeUMsQ0FBQyxDQUEzRCxDQXZCdUMsQ0F5QnZDOztBQUNBLFFBQUl3TCxxQkFBcUIsR0FBRyxDQUFDLENBQUM1SCxPQUFPLENBQUM2SCxjQUFWLEtBQTZCNUQsVUFBVSxJQUFJL0csU0FBUyxLQUFLLE9BQTVCLElBQXVDcUssYUFBdkMsSUFBd0R0RCxVQUFVLElBQUkvRyxTQUFTLEtBQUssS0FBNUIsSUFBcUNzSyxjQUE3RixJQUErRyxDQUFDdkQsVUFBRCxJQUFlL0csU0FBUyxLQUFLLE9BQTdCLElBQXdDdUssWUFBdkosSUFBdUssQ0FBQ3hELFVBQUQsSUFBZS9HLFNBQVMsS0FBSyxLQUE3QixJQUFzQ3dLLGVBQTFPLENBQTVCLENBMUJ1QyxDQTRCdkM7O0FBQ0EsUUFBSUkseUJBQXlCLEdBQUcsQ0FBQyxDQUFDOUgsT0FBTyxDQUFDK0gsdUJBQVYsS0FBc0M5RCxVQUFVLElBQUkvRyxTQUFTLEtBQUssT0FBNUIsSUFBdUNzSyxjQUF2QyxJQUF5RHZELFVBQVUsSUFBSS9HLFNBQVMsS0FBSyxLQUE1QixJQUFxQ3FLLGFBQTlGLElBQStHLENBQUN0RCxVQUFELElBQWUvRyxTQUFTLEtBQUssT0FBN0IsSUFBd0N3SyxlQUF2SixJQUEwSyxDQUFDekQsVUFBRCxJQUFlL0csU0FBUyxLQUFLLEtBQTdCLElBQXNDdUssWUFBdFAsQ0FBaEM7QUFFQSxRQUFJTyxnQkFBZ0IsR0FBR0oscUJBQXFCLElBQUlFLHlCQUFoRDs7QUFFQSxRQUFJUixXQUFXLElBQUlLLG1CQUFmLElBQXNDSyxnQkFBMUMsRUFBNEQ7QUFDMUQ7QUFDQTdJLFVBQUksQ0FBQ1ksT0FBTCxHQUFlLElBQWY7O0FBRUEsVUFBSXVILFdBQVcsSUFBSUssbUJBQW5CLEVBQXdDO0FBQ3RDdkwsaUJBQVMsR0FBRzhLLFNBQVMsQ0FBQ1IsS0FBSyxHQUFHLENBQVQsQ0FBckI7QUFDRDs7QUFFRCxVQUFJc0IsZ0JBQUosRUFBc0I7QUFDcEI5SyxpQkFBUyxHQUFHbUosb0JBQW9CLENBQUNuSixTQUFELENBQWhDO0FBQ0Q7O0FBRURpQyxVQUFJLENBQUMvQyxTQUFMLEdBQWlCQSxTQUFTLElBQUljLFNBQVMsR0FBRyxNQUFNQSxTQUFULEdBQXFCLEVBQWxDLENBQTFCLENBWjBELENBYzFEO0FBQ0E7O0FBQ0FpQyxVQUFJLENBQUM1RixPQUFMLENBQWFrQyxNQUFiLEdBQXNCdkMsUUFBUSxDQUFDLEVBQUQsRUFBS2lHLElBQUksQ0FBQzVGLE9BQUwsQ0FBYWtDLE1BQWxCLEVBQTBCdUMsZ0JBQWdCLENBQUNtQixJQUFJLENBQUNwSCxRQUFMLENBQWMwRCxNQUFmLEVBQXVCMEQsSUFBSSxDQUFDNUYsT0FBTCxDQUFhbUMsU0FBcEMsRUFBK0N5RCxJQUFJLENBQUMvQyxTQUFwRCxDQUExQyxDQUE5QjtBQUVBK0MsVUFBSSxHQUFHRixZQUFZLENBQUNFLElBQUksQ0FBQ3BILFFBQUwsQ0FBY21ILFNBQWYsRUFBMEJDLElBQTFCLEVBQWdDLE1BQWhDLENBQW5CO0FBQ0Q7QUFDRixHQXJERDtBQXNEQSxTQUFPQSxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBUzhJLFlBQVQsQ0FBc0I5SSxJQUF0QixFQUE0QjtBQUMxQixNQUFJdUUsYUFBYSxHQUFHdkUsSUFBSSxDQUFDNUYsT0FBekI7QUFBQSxNQUNJa0MsTUFBTSxHQUFHaUksYUFBYSxDQUFDakksTUFEM0I7QUFBQSxNQUVJQyxTQUFTLEdBQUdnSSxhQUFhLENBQUNoSSxTQUY5QjtBQUlBLE1BQUlVLFNBQVMsR0FBRytDLElBQUksQ0FBQy9DLFNBQUwsQ0FBZWUsS0FBZixDQUFxQixHQUFyQixFQUEwQixDQUExQixDQUFoQjtBQUNBLE1BQUl5RyxLQUFLLEdBQUdwTSxJQUFJLENBQUNvTSxLQUFqQjtBQUNBLE1BQUlLLFVBQVUsR0FBRyxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCclMsT0FBbEIsQ0FBMEJ3SyxTQUExQixNQUF5QyxDQUFDLENBQTNEO0FBQ0EsTUFBSXBHLElBQUksR0FBR2lPLFVBQVUsR0FBRyxPQUFILEdBQWEsUUFBbEM7QUFDQSxNQUFJNkIsTUFBTSxHQUFHN0IsVUFBVSxHQUFHLE1BQUgsR0FBWSxLQUFuQztBQUNBLE1BQUkxRixXQUFXLEdBQUcwRixVQUFVLEdBQUcsT0FBSCxHQUFhLFFBQXpDOztBQUVBLE1BQUl4SSxNQUFNLENBQUN6RixJQUFELENBQU4sR0FBZTROLEtBQUssQ0FBQ2xJLFNBQVMsQ0FBQ29LLE1BQUQsQ0FBVixDQUF4QixFQUE2QztBQUMzQzNHLFFBQUksQ0FBQzVGLE9BQUwsQ0FBYWtDLE1BQWIsQ0FBb0JxSyxNQUFwQixJQUE4QmxDLEtBQUssQ0FBQ2xJLFNBQVMsQ0FBQ29LLE1BQUQsQ0FBVixDQUFMLEdBQTJCckssTUFBTSxDQUFDOEMsV0FBRCxDQUEvRDtBQUNEOztBQUNELE1BQUk5QyxNQUFNLENBQUNxSyxNQUFELENBQU4sR0FBaUJsQyxLQUFLLENBQUNsSSxTQUFTLENBQUMxRixJQUFELENBQVYsQ0FBMUIsRUFBNkM7QUFDM0NtSixRQUFJLENBQUM1RixPQUFMLENBQWFrQyxNQUFiLENBQW9CcUssTUFBcEIsSUFBOEJsQyxLQUFLLENBQUNsSSxTQUFTLENBQUMxRixJQUFELENBQVYsQ0FBbkM7QUFDRDs7QUFFRCxTQUFPbUosSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBWUEsU0FBUytJLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCNUosV0FBdEIsRUFBbUNKLGFBQW5DLEVBQWtERixnQkFBbEQsRUFBb0U7QUFDbEU7QUFDQSxNQUFJZCxLQUFLLEdBQUdnTCxHQUFHLENBQUNuSixLQUFKLENBQVUsMkJBQVYsQ0FBWjtBQUNBLE1BQUkvRixLQUFLLEdBQUcsQ0FBQ2tFLEtBQUssQ0FBQyxDQUFELENBQWxCO0FBQ0EsTUFBSThGLElBQUksR0FBRzlGLEtBQUssQ0FBQyxDQUFELENBQWhCLENBSmtFLENBTWxFOztBQUNBLE1BQUksQ0FBQ2xFLEtBQUwsRUFBWTtBQUNWLFdBQU9rUCxHQUFQO0FBQ0Q7O0FBRUQsTUFBSWxGLElBQUksQ0FBQ3JSLE9BQUwsQ0FBYSxHQUFiLE1BQXNCLENBQTFCLEVBQTZCO0FBQzNCLFFBQUlrQixPQUFPLEdBQUcsS0FBSyxDQUFuQjs7QUFDQSxZQUFRbVEsSUFBUjtBQUNFLFdBQUssSUFBTDtBQUNFblEsZUFBTyxHQUFHcUwsYUFBVjtBQUNBOztBQUNGLFdBQUssR0FBTDtBQUNBLFdBQUssSUFBTDtBQUNBO0FBQ0VyTCxlQUFPLEdBQUdtTCxnQkFBVjtBQVBKOztBQVVBLFFBQUkxSCxJQUFJLEdBQUcrQyxhQUFhLENBQUN4RyxPQUFELENBQXhCO0FBQ0EsV0FBT3lELElBQUksQ0FBQ2dJLFdBQUQsQ0FBSixHQUFvQixHQUFwQixHQUEwQnRGLEtBQWpDO0FBQ0QsR0FkRCxNQWNPLElBQUlnSyxJQUFJLEtBQUssSUFBVCxJQUFpQkEsSUFBSSxLQUFLLElBQTlCLEVBQW9DO0FBQ3pDO0FBQ0EsUUFBSW1GLElBQUksR0FBRyxLQUFLLENBQWhCOztBQUNBLFFBQUluRixJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQm1GLFVBQUksR0FBRzVRLElBQUksQ0FBQ0MsR0FBTCxDQUFTcEcsUUFBUSxDQUFDa0QsZUFBVCxDQUF5QnNGLFlBQWxDLEVBQWdEekksTUFBTSxDQUFDOEosV0FBUCxJQUFzQixDQUF0RSxDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xrTixVQUFJLEdBQUc1USxJQUFJLENBQUNDLEdBQUwsQ0FBU3BHLFFBQVEsQ0FBQ2tELGVBQVQsQ0FBeUJxRixXQUFsQyxFQUErQ3hJLE1BQU0sQ0FBQzZKLFVBQVAsSUFBcUIsQ0FBcEUsQ0FBUDtBQUNEOztBQUNELFdBQU9tTixJQUFJLEdBQUcsR0FBUCxHQUFhblAsS0FBcEI7QUFDRCxHQVRNLE1BU0E7QUFDTDtBQUNBO0FBQ0EsV0FBT0EsS0FBUDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7Ozs7Ozs7OztBQVdBLFNBQVNvUCxXQUFULENBQXFCbE4sTUFBckIsRUFBNkJnRCxhQUE3QixFQUE0Q0YsZ0JBQTVDLEVBQThEcUssYUFBOUQsRUFBNkU7QUFDM0UsTUFBSS9PLE9BQU8sR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQWQsQ0FEMkUsQ0FHM0U7QUFDQTtBQUNBOztBQUNBLE1BQUlnUCxTQUFTLEdBQUcsQ0FBQyxPQUFELEVBQVUsTUFBVixFQUFrQjNXLE9BQWxCLENBQTBCMFcsYUFBMUIsTUFBNkMsQ0FBQyxDQUE5RCxDQU4yRSxDQVEzRTtBQUNBOztBQUNBLE1BQUlFLFNBQVMsR0FBR3JOLE1BQU0sQ0FBQ2dDLEtBQVAsQ0FBYSxTQUFiLEVBQXdCVixHQUF4QixDQUE0QixVQUFVZ00sSUFBVixFQUFnQjtBQUMxRCxXQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELEdBRmUsQ0FBaEIsQ0FWMkUsQ0FjM0U7QUFDQTs7QUFDQSxNQUFJQyxPQUFPLEdBQUdILFNBQVMsQ0FBQzVXLE9BQVYsQ0FBa0I2TSxJQUFJLENBQUMrSixTQUFELEVBQVksVUFBVUMsSUFBVixFQUFnQjtBQUM5RCxXQUFPQSxJQUFJLENBQUNHLE1BQUwsQ0FBWSxNQUFaLE1BQXdCLENBQUMsQ0FBaEM7QUFDRCxHQUZtQyxDQUF0QixDQUFkOztBQUlBLE1BQUlKLFNBQVMsQ0FBQ0csT0FBRCxDQUFULElBQXNCSCxTQUFTLENBQUNHLE9BQUQsQ0FBVCxDQUFtQi9XLE9BQW5CLENBQTJCLEdBQTNCLE1BQW9DLENBQUMsQ0FBL0QsRUFBa0U7QUFDaEU0TixXQUFPLENBQUNDLElBQVIsQ0FBYSw4RUFBYjtBQUNELEdBdEIwRSxDQXdCM0U7QUFDQTs7O0FBQ0EsTUFBSW9KLFVBQVUsR0FBRyxhQUFqQjtBQUNBLE1BQUlDLEdBQUcsR0FBR0gsT0FBTyxLQUFLLENBQUMsQ0FBYixHQUFpQixDQUFDSCxTQUFTLENBQUNsSixLQUFWLENBQWdCLENBQWhCLEVBQW1CcUosT0FBbkIsRUFBNEJoQyxNQUE1QixDQUFtQyxDQUFDNkIsU0FBUyxDQUFDRyxPQUFELENBQVQsQ0FBbUJ4TCxLQUFuQixDQUF5QjBMLFVBQXpCLEVBQXFDLENBQXJDLENBQUQsQ0FBbkMsQ0FBRCxFQUFnRixDQUFDTCxTQUFTLENBQUNHLE9BQUQsQ0FBVCxDQUFtQnhMLEtBQW5CLENBQXlCMEwsVUFBekIsRUFBcUMsQ0FBckMsQ0FBRCxFQUEwQ2xDLE1BQTFDLENBQWlENkIsU0FBUyxDQUFDbEosS0FBVixDQUFnQnFKLE9BQU8sR0FBRyxDQUExQixDQUFqRCxDQUFoRixDQUFqQixHQUFtTCxDQUFDSCxTQUFELENBQTdMLENBM0IyRSxDQTZCM0U7O0FBQ0FNLEtBQUcsR0FBR0EsR0FBRyxDQUFDck0sR0FBSixDQUFRLFVBQVVzTSxFQUFWLEVBQWNyQyxLQUFkLEVBQXFCO0FBQ2pDO0FBQ0EsUUFBSW5JLFdBQVcsR0FBRyxDQUFDbUksS0FBSyxLQUFLLENBQVYsR0FBYyxDQUFDNkIsU0FBZixHQUEyQkEsU0FBNUIsSUFBeUMsUUFBekMsR0FBb0QsT0FBdEU7QUFDQSxRQUFJUyxpQkFBaUIsR0FBRyxLQUF4QjtBQUNBLFdBQU9ELEVBQUUsQ0FDVDtBQUNBO0FBRlMsS0FHUkUsTUFITSxDQUdDLFVBQVVyTSxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDdEIsVUFBSUQsQ0FBQyxDQUFDQSxDQUFDLENBQUNuTCxNQUFGLEdBQVcsQ0FBWixDQUFELEtBQW9CLEVBQXBCLElBQTBCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBV0csT0FBWCxDQUFtQmlMLENBQW5CLE1BQTBCLENBQUMsQ0FBekQsRUFBNEQ7QUFDMURELFNBQUMsQ0FBQ0EsQ0FBQyxDQUFDbkwsTUFBRixHQUFXLENBQVosQ0FBRCxHQUFrQm9MLENBQWxCO0FBQ0FtTSx5QkFBaUIsR0FBRyxJQUFwQjtBQUNBLGVBQU9wTSxDQUFQO0FBQ0QsT0FKRCxNQUlPLElBQUlvTSxpQkFBSixFQUF1QjtBQUM1QnBNLFNBQUMsQ0FBQ0EsQ0FBQyxDQUFDbkwsTUFBRixHQUFXLENBQVosQ0FBRCxJQUFtQm9MLENBQW5CO0FBQ0FtTSx5QkFBaUIsR0FBRyxLQUFwQjtBQUNBLGVBQU9wTSxDQUFQO0FBQ0QsT0FKTSxNQUlBO0FBQ0wsZUFBT0EsQ0FBQyxDQUFDK0osTUFBRixDQUFTOUosQ0FBVCxDQUFQO0FBQ0Q7QUFDRixLQWZNLEVBZUosRUFmSSxFQWdCUDtBQWhCTyxLQWlCTkosR0FqQk0sQ0FpQkYsVUFBVTBMLEdBQVYsRUFBZTtBQUNsQixhQUFPRCxPQUFPLENBQUNDLEdBQUQsRUFBTTVKLFdBQU4sRUFBbUJKLGFBQW5CLEVBQWtDRixnQkFBbEMsQ0FBZDtBQUNELEtBbkJNLENBQVA7QUFvQkQsR0F4QkssQ0FBTixDQTlCMkUsQ0F3RDNFOztBQUNBNkssS0FBRyxDQUFDdkosT0FBSixDQUFZLFVBQVV3SixFQUFWLEVBQWNyQyxLQUFkLEVBQXFCO0FBQy9CcUMsTUFBRSxDQUFDeEosT0FBSCxDQUFXLFVBQVVrSixJQUFWLEVBQWdCUyxNQUFoQixFQUF3QjtBQUNqQyxVQUFJdEcsU0FBUyxDQUFDNkYsSUFBRCxDQUFiLEVBQXFCO0FBQ25CbFAsZUFBTyxDQUFDbU4sS0FBRCxDQUFQLElBQWtCK0IsSUFBSSxJQUFJTSxFQUFFLENBQUNHLE1BQU0sR0FBRyxDQUFWLENBQUYsS0FBbUIsR0FBbkIsR0FBeUIsQ0FBQyxDQUExQixHQUE4QixDQUFsQyxDQUF0QjtBQUNEO0FBQ0YsS0FKRDtBQUtELEdBTkQ7QUFPQSxTQUFPM1AsT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7O0FBU0EsU0FBUzRCLE1BQVQsQ0FBZ0JnRSxJQUFoQixFQUFzQmpELElBQXRCLEVBQTRCO0FBQzFCLE1BQUlmLE1BQU0sR0FBR2UsSUFBSSxDQUFDZixNQUFsQjtBQUNBLE1BQUlpQixTQUFTLEdBQUcrQyxJQUFJLENBQUMvQyxTQUFyQjtBQUFBLE1BQ0lzSCxhQUFhLEdBQUd2RSxJQUFJLENBQUM1RixPQUR6QjtBQUFBLE1BRUlrQyxNQUFNLEdBQUdpSSxhQUFhLENBQUNqSSxNQUYzQjtBQUFBLE1BR0lDLFNBQVMsR0FBR2dJLGFBQWEsQ0FBQ2hJLFNBSDlCO0FBS0EsTUFBSTRNLGFBQWEsR0FBR2xNLFNBQVMsQ0FBQ2UsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFwQjtBQUVBLE1BQUk1RCxPQUFPLEdBQUcsS0FBSyxDQUFuQjs7QUFDQSxNQUFJcUosU0FBUyxDQUFDLENBQUN6SCxNQUFGLENBQWIsRUFBd0I7QUFDdEI1QixXQUFPLEdBQUcsQ0FBQyxDQUFDNEIsTUFBRixFQUFVLENBQVYsQ0FBVjtBQUNELEdBRkQsTUFFTztBQUNMNUIsV0FBTyxHQUFHOE8sV0FBVyxDQUFDbE4sTUFBRCxFQUFTTSxNQUFULEVBQWlCQyxTQUFqQixFQUE0QjRNLGFBQTVCLENBQXJCO0FBQ0Q7O0FBRUQsTUFBSUEsYUFBYSxLQUFLLE1BQXRCLEVBQThCO0FBQzVCN00sVUFBTSxDQUFDN0UsR0FBUCxJQUFjMkMsT0FBTyxDQUFDLENBQUQsQ0FBckI7QUFDQWtDLFVBQU0sQ0FBQzNFLElBQVAsSUFBZXlDLE9BQU8sQ0FBQyxDQUFELENBQXRCO0FBQ0QsR0FIRCxNQUdPLElBQUkrTyxhQUFhLEtBQUssT0FBdEIsRUFBK0I7QUFDcEM3TSxVQUFNLENBQUM3RSxHQUFQLElBQWMyQyxPQUFPLENBQUMsQ0FBRCxDQUFyQjtBQUNBa0MsVUFBTSxDQUFDM0UsSUFBUCxJQUFleUMsT0FBTyxDQUFDLENBQUQsQ0FBdEI7QUFDRCxHQUhNLE1BR0EsSUFBSStPLGFBQWEsS0FBSyxLQUF0QixFQUE2QjtBQUNsQzdNLFVBQU0sQ0FBQzNFLElBQVAsSUFBZXlDLE9BQU8sQ0FBQyxDQUFELENBQXRCO0FBQ0FrQyxVQUFNLENBQUM3RSxHQUFQLElBQWMyQyxPQUFPLENBQUMsQ0FBRCxDQUFyQjtBQUNELEdBSE0sTUFHQSxJQUFJK08sYUFBYSxLQUFLLFFBQXRCLEVBQWdDO0FBQ3JDN00sVUFBTSxDQUFDM0UsSUFBUCxJQUFleUMsT0FBTyxDQUFDLENBQUQsQ0FBdEI7QUFDQWtDLFVBQU0sQ0FBQzdFLEdBQVAsSUFBYzJDLE9BQU8sQ0FBQyxDQUFELENBQXJCO0FBQ0Q7O0FBRUQ0RixNQUFJLENBQUMxRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFPMEQsSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9BLFNBQVNnSyxlQUFULENBQXlCaEssSUFBekIsRUFBK0JhLE9BQS9CLEVBQXdDO0FBQ3RDLE1BQUlwRSxpQkFBaUIsR0FBR29FLE9BQU8sQ0FBQ3BFLGlCQUFSLElBQTZCdEgsZUFBZSxDQUFDNkssSUFBSSxDQUFDcEgsUUFBTCxDQUFjMEQsTUFBZixDQUFwRSxDQURzQyxDQUd0QztBQUNBO0FBQ0E7O0FBQ0EsTUFBSTBELElBQUksQ0FBQ3BILFFBQUwsQ0FBYzJELFNBQWQsS0FBNEJFLGlCQUFoQyxFQUFtRDtBQUNqREEscUJBQWlCLEdBQUd0SCxlQUFlLENBQUNzSCxpQkFBRCxDQUFuQztBQUNELEdBUnFDLENBVXRDO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSXdOLGFBQWEsR0FBR3hJLHdCQUF3QixDQUFDLFdBQUQsQ0FBNUM7QUFDQSxNQUFJeUksWUFBWSxHQUFHbEssSUFBSSxDQUFDcEgsUUFBTCxDQUFjMEQsTUFBZCxDQUFxQjBGLEtBQXhDLENBZHNDLENBY1M7O0FBQy9DLE1BQUl2SyxHQUFHLEdBQUd5UyxZQUFZLENBQUN6UyxHQUF2QjtBQUFBLE1BQ0lFLElBQUksR0FBR3VTLFlBQVksQ0FBQ3ZTLElBRHhCO0FBQUEsTUFFSXdTLFNBQVMsR0FBR0QsWUFBWSxDQUFDRCxhQUFELENBRjVCO0FBSUFDLGNBQVksQ0FBQ3pTLEdBQWIsR0FBbUIsRUFBbkI7QUFDQXlTLGNBQVksQ0FBQ3ZTLElBQWIsR0FBb0IsRUFBcEI7QUFDQXVTLGNBQVksQ0FBQ0QsYUFBRCxDQUFaLEdBQThCLEVBQTlCO0FBRUEsTUFBSXZOLFVBQVUsR0FBR0wsYUFBYSxDQUFDMkQsSUFBSSxDQUFDcEgsUUFBTCxDQUFjMEQsTUFBZixFQUF1QjBELElBQUksQ0FBQ3BILFFBQUwsQ0FBYzJELFNBQXJDLEVBQWdEc0UsT0FBTyxDQUFDckUsT0FBeEQsRUFBaUVDLGlCQUFqRSxFQUFvRnVELElBQUksQ0FBQ2MsYUFBekYsQ0FBOUIsQ0F2QnNDLENBeUJ0QztBQUNBOztBQUNBb0osY0FBWSxDQUFDelMsR0FBYixHQUFtQkEsR0FBbkI7QUFDQXlTLGNBQVksQ0FBQ3ZTLElBQWIsR0FBb0JBLElBQXBCO0FBQ0F1UyxjQUFZLENBQUNELGFBQUQsQ0FBWixHQUE4QkUsU0FBOUI7QUFFQXRKLFNBQU8sQ0FBQ25FLFVBQVIsR0FBcUJBLFVBQXJCO0FBRUEsTUFBSTNHLEtBQUssR0FBRzhLLE9BQU8sQ0FBQ3VKLFFBQXBCO0FBQ0EsTUFBSTlOLE1BQU0sR0FBRzBELElBQUksQ0FBQzVGLE9BQUwsQ0FBYWtDLE1BQTFCO0FBRUEsTUFBSWtELEtBQUssR0FBRztBQUNWNkssV0FBTyxFQUFFLFNBQVNBLE9BQVQsQ0FBaUJwTixTQUFqQixFQUE0QjtBQUNuQyxVQUFJbkQsS0FBSyxHQUFHd0MsTUFBTSxDQUFDVyxTQUFELENBQWxCOztBQUNBLFVBQUlYLE1BQU0sQ0FBQ1csU0FBRCxDQUFOLEdBQW9CUCxVQUFVLENBQUNPLFNBQUQsQ0FBOUIsSUFBNkMsQ0FBQzRELE9BQU8sQ0FBQ3lKLG1CQUExRCxFQUErRTtBQUM3RXhRLGFBQUssR0FBR3pCLElBQUksQ0FBQ0MsR0FBTCxDQUFTZ0UsTUFBTSxDQUFDVyxTQUFELENBQWYsRUFBNEJQLFVBQVUsQ0FBQ08sU0FBRCxDQUF0QyxDQUFSO0FBQ0Q7O0FBQ0QsYUFBT3pELGNBQWMsQ0FBQyxFQUFELEVBQUt5RCxTQUFMLEVBQWdCbkQsS0FBaEIsQ0FBckI7QUFDRCxLQVBTO0FBUVZ5USxhQUFTLEVBQUUsU0FBU0EsU0FBVCxDQUFtQnROLFNBQW5CLEVBQThCO0FBQ3ZDLFVBQUlpQyxRQUFRLEdBQUdqQyxTQUFTLEtBQUssT0FBZCxHQUF3QixNQUF4QixHQUFpQyxLQUFoRDtBQUNBLFVBQUluRCxLQUFLLEdBQUd3QyxNQUFNLENBQUM0QyxRQUFELENBQWxCOztBQUNBLFVBQUk1QyxNQUFNLENBQUNXLFNBQUQsQ0FBTixHQUFvQlAsVUFBVSxDQUFDTyxTQUFELENBQTlCLElBQTZDLENBQUM0RCxPQUFPLENBQUN5SixtQkFBMUQsRUFBK0U7QUFDN0V4USxhQUFLLEdBQUd6QixJQUFJLENBQUM0TyxHQUFMLENBQVMzSyxNQUFNLENBQUM0QyxRQUFELENBQWYsRUFBMkJ4QyxVQUFVLENBQUNPLFNBQUQsQ0FBVixJQUF5QkEsU0FBUyxLQUFLLE9BQWQsR0FBd0JYLE1BQU0sQ0FBQzVELEtBQS9CLEdBQXVDNEQsTUFBTSxDQUFDN0QsTUFBdkUsQ0FBM0IsQ0FBUjtBQUNEOztBQUNELGFBQU9lLGNBQWMsQ0FBQyxFQUFELEVBQUswRixRQUFMLEVBQWVwRixLQUFmLENBQXJCO0FBQ0Q7QUFmUyxHQUFaO0FBa0JBL0QsT0FBSyxDQUFDcUssT0FBTixDQUFjLFVBQVVuRCxTQUFWLEVBQXFCO0FBQ2pDLFFBQUlwRyxJQUFJLEdBQUcsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQnBFLE9BQWhCLENBQXdCd0ssU0FBeEIsTUFBdUMsQ0FBQyxDQUF4QyxHQUE0QyxTQUE1QyxHQUF3RCxXQUFuRTtBQUNBWCxVQUFNLEdBQUd2QyxRQUFRLENBQUMsRUFBRCxFQUFLdUMsTUFBTCxFQUFha0QsS0FBSyxDQUFDM0ksSUFBRCxDQUFMLENBQVlvRyxTQUFaLENBQWIsQ0FBakI7QUFDRCxHQUhEO0FBS0ErQyxNQUFJLENBQUM1RixPQUFMLENBQWFrQyxNQUFiLEdBQXNCQSxNQUF0QjtBQUVBLFNBQU8wRCxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBU3dLLEtBQVQsQ0FBZXhLLElBQWYsRUFBcUI7QUFDbkIsTUFBSS9DLFNBQVMsR0FBRytDLElBQUksQ0FBQy9DLFNBQXJCO0FBQ0EsTUFBSWtNLGFBQWEsR0FBR2xNLFNBQVMsQ0FBQ2UsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFwQjtBQUNBLE1BQUl5TSxjQUFjLEdBQUd4TixTQUFTLENBQUNlLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUIsQ0FBckIsQ0FBckIsQ0FIbUIsQ0FLbkI7O0FBQ0EsTUFBSXlNLGNBQUosRUFBb0I7QUFDbEIsUUFBSWxHLGFBQWEsR0FBR3ZFLElBQUksQ0FBQzVGLE9BQXpCO0FBQUEsUUFDSW1DLFNBQVMsR0FBR2dJLGFBQWEsQ0FBQ2hJLFNBRDlCO0FBQUEsUUFFSUQsTUFBTSxHQUFHaUksYUFBYSxDQUFDakksTUFGM0I7QUFJQSxRQUFJd0ksVUFBVSxHQUFHLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0JyUyxPQUFsQixDQUEwQjBXLGFBQTFCLE1BQTZDLENBQUMsQ0FBL0Q7QUFDQSxRQUFJdFMsSUFBSSxHQUFHaU8sVUFBVSxHQUFHLE1BQUgsR0FBWSxLQUFqQztBQUNBLFFBQUkxRixXQUFXLEdBQUcwRixVQUFVLEdBQUcsT0FBSCxHQUFhLFFBQXpDO0FBRUEsUUFBSTRGLFlBQVksR0FBRztBQUNqQnZVLFdBQUssRUFBRXFELGNBQWMsQ0FBQyxFQUFELEVBQUszQyxJQUFMLEVBQVcwRixTQUFTLENBQUMxRixJQUFELENBQXBCLENBREo7QUFFakJULFNBQUcsRUFBRW9ELGNBQWMsQ0FBQyxFQUFELEVBQUszQyxJQUFMLEVBQVcwRixTQUFTLENBQUMxRixJQUFELENBQVQsR0FBa0IwRixTQUFTLENBQUM2QyxXQUFELENBQTNCLEdBQTJDOUMsTUFBTSxDQUFDOEMsV0FBRCxDQUE1RDtBQUZGLEtBQW5CO0FBS0FZLFFBQUksQ0FBQzVGLE9BQUwsQ0FBYWtDLE1BQWIsR0FBc0J2QyxRQUFRLENBQUMsRUFBRCxFQUFLdUMsTUFBTCxFQUFhb08sWUFBWSxDQUFDRCxjQUFELENBQXpCLENBQTlCO0FBQ0Q7O0FBRUQsU0FBT3pLLElBQVA7QUFDRDtBQUVEOzs7Ozs7Ozs7QUFPQSxTQUFTMkssSUFBVCxDQUFjM0ssSUFBZCxFQUFvQjtBQUNsQixNQUFJLENBQUM4RixrQkFBa0IsQ0FBQzlGLElBQUksQ0FBQ3BILFFBQUwsQ0FBY21ILFNBQWYsRUFBMEIsTUFBMUIsRUFBa0MsaUJBQWxDLENBQXZCLEVBQTZFO0FBQzNFLFdBQU9DLElBQVA7QUFDRDs7QUFFRCxNQUFJOUMsT0FBTyxHQUFHOEMsSUFBSSxDQUFDNUYsT0FBTCxDQUFhbUMsU0FBM0I7QUFDQSxNQUFJcU8sS0FBSyxHQUFHdEwsSUFBSSxDQUFDVSxJQUFJLENBQUNwSCxRQUFMLENBQWNtSCxTQUFmLEVBQTBCLFVBQVV2SSxRQUFWLEVBQW9CO0FBQzVELFdBQU9BLFFBQVEsQ0FBQ2dLLElBQVQsS0FBa0IsaUJBQXpCO0FBQ0QsR0FGZSxDQUFKLENBRVQ5RSxVQUZIOztBQUlBLE1BQUlRLE9BQU8sQ0FBQ3hGLE1BQVIsR0FBaUJrVCxLQUFLLENBQUNuVCxHQUF2QixJQUE4QnlGLE9BQU8sQ0FBQ3ZGLElBQVIsR0FBZWlULEtBQUssQ0FBQ2hULEtBQW5ELElBQTREc0YsT0FBTyxDQUFDekYsR0FBUixHQUFjbVQsS0FBSyxDQUFDbFQsTUFBaEYsSUFBMEZ3RixPQUFPLENBQUN0RixLQUFSLEdBQWdCZ1QsS0FBSyxDQUFDalQsSUFBcEgsRUFBMEg7QUFDeEg7QUFDQSxRQUFJcUksSUFBSSxDQUFDMkssSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3RCLGFBQU8zSyxJQUFQO0FBQ0Q7O0FBRURBLFFBQUksQ0FBQzJLLElBQUwsR0FBWSxJQUFaO0FBQ0EzSyxRQUFJLENBQUNXLFVBQUwsQ0FBZ0IscUJBQWhCLElBQXlDLEVBQXpDO0FBQ0QsR0FSRCxNQVFPO0FBQ0w7QUFDQSxRQUFJWCxJQUFJLENBQUMySyxJQUFMLEtBQWMsS0FBbEIsRUFBeUI7QUFDdkIsYUFBTzNLLElBQVA7QUFDRDs7QUFFREEsUUFBSSxDQUFDMkssSUFBTCxHQUFZLEtBQVo7QUFDQTNLLFFBQUksQ0FBQ1csVUFBTCxDQUFnQixxQkFBaEIsSUFBeUMsS0FBekM7QUFDRDs7QUFFRCxTQUFPWCxJQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7O0FBT0EsU0FBUzZLLEtBQVQsQ0FBZTdLLElBQWYsRUFBcUI7QUFDbkIsTUFBSS9DLFNBQVMsR0FBRytDLElBQUksQ0FBQy9DLFNBQXJCO0FBQ0EsTUFBSWtNLGFBQWEsR0FBR2xNLFNBQVMsQ0FBQ2UsS0FBVixDQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFwQjtBQUNBLE1BQUl1RyxhQUFhLEdBQUd2RSxJQUFJLENBQUM1RixPQUF6QjtBQUFBLE1BQ0lrQyxNQUFNLEdBQUdpSSxhQUFhLENBQUNqSSxNQUQzQjtBQUFBLE1BRUlDLFNBQVMsR0FBR2dJLGFBQWEsQ0FBQ2hJLFNBRjlCO0FBSUEsTUFBSTBDLE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCeE0sT0FBbEIsQ0FBMEIwVyxhQUExQixNQUE2QyxDQUFDLENBQTVEO0FBRUEsTUFBSTJCLGNBQWMsR0FBRyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCclksT0FBaEIsQ0FBd0IwVyxhQUF4QixNQUEyQyxDQUFDLENBQWpFO0FBRUE3TSxRQUFNLENBQUMyQyxPQUFPLEdBQUcsTUFBSCxHQUFZLEtBQXBCLENBQU4sR0FBbUMxQyxTQUFTLENBQUM0TSxhQUFELENBQVQsSUFBNEIyQixjQUFjLEdBQUd4TyxNQUFNLENBQUMyQyxPQUFPLEdBQUcsT0FBSCxHQUFhLFFBQXJCLENBQVQsR0FBMEMsQ0FBcEYsQ0FBbkM7QUFFQWUsTUFBSSxDQUFDL0MsU0FBTCxHQUFpQndCLG9CQUFvQixDQUFDeEIsU0FBRCxDQUFyQztBQUNBK0MsTUFBSSxDQUFDNUYsT0FBTCxDQUFha0MsTUFBYixHQUFzQm5DLGFBQWEsQ0FBQ21DLE1BQUQsQ0FBbkM7QUFFQSxTQUFPMEQsSUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7OztBQVNBLElBQUlELFNBQVMsR0FBRztBQUNkOzs7Ozs7OztBQVFBeUssT0FBSyxFQUFFO0FBQ0w7QUFDQXpVLFNBQUssRUFBRSxHQUZGOztBQUdMO0FBQ0F3SyxXQUFPLEVBQUUsSUFKSjs7QUFLTDtBQUNBNU4sTUFBRSxFQUFFNlg7QUFOQyxHQVRPOztBQWtCZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0F4TyxRQUFNLEVBQUU7QUFDTjtBQUNBakcsU0FBSyxFQUFFLEdBRkQ7O0FBR047QUFDQXdLLFdBQU8sRUFBRSxJQUpIOztBQUtOO0FBQ0E1TixNQUFFLEVBQUVxSixNQU5FOztBQU9OOzs7QUFHQUEsVUFBTSxFQUFFO0FBVkYsR0F4RE07O0FBcUVkOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQWdPLGlCQUFlLEVBQUU7QUFDZjtBQUNBalUsU0FBSyxFQUFFLEdBRlE7O0FBR2Y7QUFDQXdLLFdBQU8sRUFBRSxJQUpNOztBQUtmO0FBQ0E1TixNQUFFLEVBQUVxWCxlQU5XOztBQU9mOzs7OztBQUtBSSxZQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixLQUFsQixFQUF5QixRQUF6QixDQVpLOztBQWFmOzs7Ozs7QUFNQTVOLFdBQU8sRUFBRSxDQW5CTTs7QUFvQmY7Ozs7O0FBS0FDLHFCQUFpQixFQUFFO0FBekJKLEdBdEZIOztBQWtIZDs7Ozs7Ozs7O0FBU0FxTSxjQUFZLEVBQUU7QUFDWjtBQUNBL1MsU0FBSyxFQUFFLEdBRks7O0FBR1o7QUFDQXdLLFdBQU8sRUFBRSxJQUpHOztBQUtaO0FBQ0E1TixNQUFFLEVBQUVtVztBQU5RLEdBM0hBOztBQW9JZDs7Ozs7Ozs7OztBQVVBakQsT0FBSyxFQUFFO0FBQ0w7QUFDQTlQLFNBQUssRUFBRSxHQUZGOztBQUdMO0FBQ0F3SyxXQUFPLEVBQUUsSUFKSjs7QUFLTDtBQUNBNU4sTUFBRSxFQUFFa1QsS0FOQzs7QUFPTDtBQUNBbFMsV0FBTyxFQUFFO0FBUkosR0E5SU87O0FBeUpkOzs7Ozs7Ozs7OztBQVdBb04sTUFBSSxFQUFFO0FBQ0o7QUFDQWhMLFNBQUssRUFBRSxHQUZIOztBQUdKO0FBQ0F3SyxXQUFPLEVBQUUsSUFKTDs7QUFLSjtBQUNBNU4sTUFBRSxFQUFFb08sSUFOQTs7QUFPSjs7Ozs7O0FBTUFpSCxZQUFRLEVBQUUsTUFiTjs7QUFjSjs7OztBQUlBeEwsV0FBTyxFQUFFLENBbEJMOztBQW1CSjs7Ozs7O0FBTUFDLHFCQUFpQixFQUFFLFVBekJmOztBQTBCSjs7Ozs7OztBQU9BaU0sa0JBQWMsRUFBRSxLQWpDWjs7QUFrQ0o7Ozs7Ozs7QUFPQUUsMkJBQXVCLEVBQUU7QUF6Q3JCLEdBcEtROztBQWdOZDs7Ozs7OztBQU9BaUMsT0FBSyxFQUFFO0FBQ0w7QUFDQTlVLFNBQUssRUFBRSxHQUZGOztBQUdMO0FBQ0F3SyxXQUFPLEVBQUUsS0FKSjs7QUFLTDtBQUNBNU4sTUFBRSxFQUFFa1k7QUFOQyxHQXZOTzs7QUFnT2Q7Ozs7Ozs7Ozs7QUFVQUYsTUFBSSxFQUFFO0FBQ0o7QUFDQTVVLFNBQUssRUFBRSxHQUZIOztBQUdKO0FBQ0F3SyxXQUFPLEVBQUUsSUFKTDs7QUFLSjtBQUNBNU4sTUFBRSxFQUFFZ1k7QUFOQSxHQTFPUTs7QUFtUGQ7Ozs7Ozs7Ozs7Ozs7OztBQWVBdEYsY0FBWSxFQUFFO0FBQ1o7QUFDQXRQLFNBQUssRUFBRSxHQUZLOztBQUdaO0FBQ0F3SyxXQUFPLEVBQUUsSUFKRzs7QUFLWjtBQUNBNU4sTUFBRSxFQUFFMFMsWUFOUTs7QUFPWjs7Ozs7QUFLQUUsbUJBQWUsRUFBRSxJQVpMOztBQWFaOzs7OztBQUtBbEgsS0FBQyxFQUFFLFFBbEJTOztBQW1CWjs7Ozs7QUFLQUUsS0FBQyxFQUFFO0FBeEJTLEdBbFFBOztBQTZSZDs7Ozs7Ozs7Ozs7Ozs7O0FBZUEwRixZQUFVLEVBQUU7QUFDVjtBQUNBbE8sU0FBSyxFQUFFLEdBRkc7O0FBR1Y7QUFDQXdLLFdBQU8sRUFBRSxJQUpDOztBQUtWO0FBQ0E1TixNQUFFLEVBQUVzUixVQU5NOztBQU9WO0FBQ0E4RyxVQUFNLEVBQUU1RyxnQkFSRTs7QUFTVjs7Ozs7O0FBTUFvQixtQkFBZSxFQUFFeE87QUFmUDtBQTVTRSxDQUFoQjtBQStUQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsSUFBSWlVLFFBQVEsR0FBRztBQUNiOzs7O0FBSUEvTixXQUFTLEVBQUUsUUFMRTs7QUFPYjs7OztBQUlBNkQsZUFBYSxFQUFFLEtBWEY7O0FBYWI7Ozs7QUFJQXFDLGVBQWEsRUFBRSxJQWpCRjs7QUFtQmI7Ozs7O0FBS0FkLGlCQUFlLEVBQUUsS0F4Qko7O0FBMEJiOzs7Ozs7QUFNQWxCLFVBQVEsRUFBRSxTQUFTQSxRQUFULEdBQW9CLENBQUUsQ0FoQ25COztBQWtDYjs7Ozs7Ozs7QUFRQUMsVUFBUSxFQUFFLFNBQVNBLFFBQVQsR0FBb0IsQ0FBRSxDQTFDbkI7O0FBNENiOzs7OztBQUtBckIsV0FBUyxFQUFFQTtBQWpERSxDQUFmO0FBb0RBOzs7OztBQUtBOzs7O0FBS0E7QUFDQTs7QUFDQSxJQUFJa0wsTUFBTSxHQUFHLFlBQVk7QUFDdkI7Ozs7Ozs7O0FBUUEsV0FBU0EsTUFBVCxDQUFnQjFPLFNBQWhCLEVBQTJCRCxNQUEzQixFQUFtQztBQUNqQyxRQUFJNE8sS0FBSyxHQUFHLElBQVo7O0FBRUEsUUFBSXJLLE9BQU8sR0FBRy9KLFNBQVMsQ0FBQ3hFLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0J3RSxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCQyxTQUF6QyxHQUFxREQsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsRUFBbEY7QUFDQTZCLGtCQUFjLENBQUMsSUFBRCxFQUFPc1MsTUFBUCxDQUFkOztBQUVBLFNBQUs1SCxjQUFMLEdBQXNCLFlBQVk7QUFDaEMsYUFBTzhILHFCQUFxQixDQUFDRCxLQUFLLENBQUMxSyxNQUFQLENBQTVCO0FBQ0QsS0FGRCxDQU5pQyxDQVVqQzs7O0FBQ0EsU0FBS0EsTUFBTCxHQUFjcE4sUUFBUSxDQUFDLEtBQUtvTixNQUFMLENBQVk0SyxJQUFaLENBQWlCLElBQWpCLENBQUQsQ0FBdEIsQ0FYaUMsQ0FhakM7O0FBQ0EsU0FBS3ZLLE9BQUwsR0FBZTlHLFFBQVEsQ0FBQyxFQUFELEVBQUtrUixNQUFNLENBQUNELFFBQVosRUFBc0JuSyxPQUF0QixDQUF2QixDQWRpQyxDQWdCakM7O0FBQ0EsU0FBSzNDLEtBQUwsR0FBYTtBQUNYdUMsaUJBQVcsRUFBRSxLQURGO0FBRVhTLGVBQVMsRUFBRSxLQUZBO0FBR1h5QixtQkFBYSxFQUFFO0FBSEosS0FBYixDQWpCaUMsQ0F1QmpDOztBQUNBLFNBQUtwRyxTQUFMLEdBQWlCQSxTQUFTLElBQUlBLFNBQVMsQ0FBQzhPLE1BQXZCLEdBQWdDOU8sU0FBUyxDQUFDLENBQUQsQ0FBekMsR0FBK0NBLFNBQWhFO0FBQ0EsU0FBS0QsTUFBTCxHQUFjQSxNQUFNLElBQUlBLE1BQU0sQ0FBQytPLE1BQWpCLEdBQTBCL08sTUFBTSxDQUFDLENBQUQsQ0FBaEMsR0FBc0NBLE1BQXBELENBekJpQyxDQTJCakM7O0FBQ0EsU0FBS3VFLE9BQUwsQ0FBYWQsU0FBYixHQUF5QixFQUF6QjtBQUNBeEcsVUFBTSxDQUFDOEQsSUFBUCxDQUFZdEQsUUFBUSxDQUFDLEVBQUQsRUFBS2tSLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQmpMLFNBQXJCLEVBQWdDYyxPQUFPLENBQUNkLFNBQXhDLENBQXBCLEVBQXdFSyxPQUF4RSxDQUFnRixVQUFVb0IsSUFBVixFQUFnQjtBQUM5RjBKLFdBQUssQ0FBQ3JLLE9BQU4sQ0FBY2QsU0FBZCxDQUF3QnlCLElBQXhCLElBQWdDekgsUUFBUSxDQUFDLEVBQUQsRUFBS2tSLE1BQU0sQ0FBQ0QsUUFBUCxDQUFnQmpMLFNBQWhCLENBQTBCeUIsSUFBMUIsS0FBbUMsRUFBeEMsRUFBNENYLE9BQU8sQ0FBQ2QsU0FBUixHQUFvQmMsT0FBTyxDQUFDZCxTQUFSLENBQWtCeUIsSUFBbEIsQ0FBcEIsR0FBOEMsRUFBMUYsQ0FBeEM7QUFDRCxLQUZELEVBN0JpQyxDQWlDakM7O0FBQ0EsU0FBS3pCLFNBQUwsR0FBaUJ4RyxNQUFNLENBQUM4RCxJQUFQLENBQVksS0FBS3dELE9BQUwsQ0FBYWQsU0FBekIsRUFBb0N6QyxHQUFwQyxDQUF3QyxVQUFVa0UsSUFBVixFQUFnQjtBQUN2RSxhQUFPekgsUUFBUSxDQUFDO0FBQ2R5SCxZQUFJLEVBQUVBO0FBRFEsT0FBRCxFQUVaMEosS0FBSyxDQUFDckssT0FBTixDQUFjZCxTQUFkLENBQXdCeUIsSUFBeEIsQ0FGWSxDQUFmO0FBR0QsS0FKZ0IsRUFLakI7QUFMaUIsS0FNaEJoRSxJQU5nQixDQU1YLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNwQixhQUFPRCxDQUFDLENBQUMxSCxLQUFGLEdBQVUySCxDQUFDLENBQUMzSCxLQUFuQjtBQUNELEtBUmdCLENBQWpCLENBbENpQyxDQTRDakM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBS2dLLFNBQUwsQ0FBZUssT0FBZixDQUF1QixVQUFVZ0UsZUFBVixFQUEyQjtBQUNoRCxVQUFJQSxlQUFlLENBQUM3RCxPQUFoQixJQUEyQmxOLFVBQVUsQ0FBQytRLGVBQWUsQ0FBQzJHLE1BQWpCLENBQXpDLEVBQW1FO0FBQ2pFM0csdUJBQWUsQ0FBQzJHLE1BQWhCLENBQXVCRyxLQUFLLENBQUMzTyxTQUE3QixFQUF3QzJPLEtBQUssQ0FBQzVPLE1BQTlDLEVBQXNENE8sS0FBSyxDQUFDckssT0FBNUQsRUFBcUV1RCxlQUFyRSxFQUFzRjhHLEtBQUssQ0FBQ2hOLEtBQTVGO0FBQ0Q7QUFDRixLQUpELEVBaERpQyxDQXNEakM7O0FBQ0EsU0FBS3NDLE1BQUw7QUFFQSxRQUFJMkMsYUFBYSxHQUFHLEtBQUt0QyxPQUFMLENBQWFzQyxhQUFqQzs7QUFDQSxRQUFJQSxhQUFKLEVBQW1CO0FBQ2pCO0FBQ0EsV0FBS0Msb0JBQUw7QUFDRDs7QUFFRCxTQUFLbEYsS0FBTCxDQUFXaUYsYUFBWCxHQUEyQkEsYUFBM0I7QUFDRCxHQXpFc0IsQ0EyRXZCO0FBQ0E7OztBQUdBcEssYUFBVyxDQUFDa1MsTUFBRCxFQUFTLENBQUM7QUFDbkJ4UixPQUFHLEVBQUUsUUFEYztBQUVuQkssU0FBSyxFQUFFLFNBQVN3UixTQUFULEdBQXFCO0FBQzFCLGFBQU85SyxNQUFNLENBQUMvTSxJQUFQLENBQVksSUFBWixDQUFQO0FBQ0Q7QUFKa0IsR0FBRCxFQUtqQjtBQUNEZ0csT0FBRyxFQUFFLFNBREo7QUFFREssU0FBSyxFQUFFLFNBQVN5UixVQUFULEdBQXNCO0FBQzNCLGFBQU90SixPQUFPLENBQUN4TyxJQUFSLENBQWEsSUFBYixDQUFQO0FBQ0Q7QUFKQSxHQUxpQixFQVVqQjtBQUNEZ0csT0FBRyxFQUFFLHNCQURKO0FBRURLLFNBQUssRUFBRSxTQUFTMFIsdUJBQVQsR0FBbUM7QUFDeEMsYUFBT3BJLG9CQUFvQixDQUFDM1AsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBUDtBQUNEO0FBSkEsR0FWaUIsRUFlakI7QUFDRGdHLE9BQUcsRUFBRSx1QkFESjtBQUVESyxTQUFLLEVBQUUsU0FBUzJSLHdCQUFULEdBQW9DO0FBQ3pDLGFBQU9ySixxQkFBcUIsQ0FBQzNPLElBQXRCLENBQTJCLElBQTNCLENBQVA7QUFDRDtBQUVEOzs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiQyxHQWZpQixDQUFULENBQVg7QUE4Q0EsU0FBT3dYLE1BQVA7QUFDRCxDQTlIWSxFQUFiO0FBZ0lBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkFBLE1BQU0sQ0FBQ1MsS0FBUCxHQUFlLENBQUMsT0FBT3paLE1BQVAsS0FBa0IsV0FBbEIsR0FBZ0NBLE1BQWhDLEdBQXlDMFosTUFBMUMsRUFBa0RDLFdBQWpFO0FBQ0FYLE1BQU0sQ0FBQzlELFVBQVAsR0FBb0JBLFVBQXBCO0FBQ0E4RCxNQUFNLENBQUNELFFBQVAsR0FBa0JBLFFBQWxCO0FBRWVDLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQzFpRkEsSUFBSVksQ0FBSixDLENBRUE7O0FBQ0FBLENBQUMsR0FBSSxZQUFXO0FBQ2YsU0FBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxHQUFDLEdBQUdBLENBQUMsSUFBSSxJQUFJQyxRQUFKLENBQWEsYUFBYixHQUFUO0FBQ0EsQ0FIRCxDQUdFLE9BQU94UixDQUFQLEVBQVU7QUFDWDtBQUNBLE1BQUksT0FBT3JJLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M0WixDQUFDLEdBQUc1WixNQUFKO0FBQ2hDLEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUVBOFosTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBOzs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUEsSUFBTUksSUFBSSxHQUF1QixVQUFqQztBQUNBLElBQU1DLE9BQU8sR0FBb0IsT0FBakM7QUFDQSxJQUFNQyxRQUFRLEdBQW1CLGFBQWpDO0FBQ0EsSUFBTUMsU0FBUyxjQUFzQkQsUUFBdEIsQ0FBZjtBQUNBLElBQU1FLFlBQVksR0FBZSxXQUFqQztBQUNBLElBQU1DLGtCQUFrQixHQUFTQyw2Q0FBQyxDQUFDNVosRUFBRixDQUFLc1osSUFBTCxDQUFqQztBQUNBLElBQU1PLGNBQWMsR0FBYSxFQUFqQyxDLENBQW9DOztBQUNwQyxJQUFNQyxhQUFhLEdBQWMsRUFBakMsQyxDQUFvQzs7QUFDcEMsSUFBTUMsV0FBVyxHQUFnQixDQUFqQyxDLENBQW1DOztBQUNuQyxJQUFNQyxnQkFBZ0IsR0FBVyxFQUFqQyxDLENBQW9DOztBQUNwQyxJQUFNQyxrQkFBa0IsR0FBUyxFQUFqQyxDLENBQW9DOztBQUNwQyxJQUFNQyx3QkFBd0IsR0FBRyxDQUFqQyxDLENBQW1DOztBQUNuQyxJQUFNQyxjQUFjLEdBQWEsSUFBSUMsTUFBSixXQUFjSixnQkFBZCxjQUFrQ0Msa0JBQWxDLGNBQXdESixjQUF4RCxFQUFqQztBQUVBLElBQU1RLEtBQUssR0FBRztBQUNaQyxNQUFJLGdCQUFzQmIsU0FBdEIsQ0FEUTtBQUVaYyxRQUFNLGtCQUFzQmQsU0FBdEIsQ0FGTTtBQUdaZSxNQUFJLGdCQUFzQmYsU0FBdEIsQ0FIUTtBQUlaZ0IsT0FBSyxpQkFBc0JoQixTQUF0QixDQUpPO0FBS1ppQixPQUFLLGlCQUFzQmpCLFNBQXRCLENBTE87QUFNWmtCLGdCQUFjLGlCQUFhbEIsU0FBYixTQUF5QkMsWUFBekIsQ0FORjtBQU9aa0Isa0JBQWdCLG1CQUFhbkIsU0FBYixTQUF5QkMsWUFBekIsQ0FQSjtBQVFabUIsZ0JBQWMsaUJBQWFwQixTQUFiLFNBQXlCQyxZQUF6QjtBQVJGLENBQWQ7QUFXQSxJQUFNb0IsU0FBUyxHQUFHO0FBQ2hCQyxVQUFRLEVBQVUsVUFERjtBQUVoQlAsTUFBSSxFQUFjLE1BRkY7QUFHaEJRLFFBQU0sRUFBWSxRQUhGO0FBSWhCQyxXQUFTLEVBQVMsV0FKRjtBQUtoQkMsVUFBUSxFQUFVLFVBTEY7QUFNaEJDLFdBQVMsRUFBUyxxQkFORjtBQU9oQkMsVUFBUSxFQUFVLG9CQVBGO0FBUWhCQyxpQkFBZSxFQUFHO0FBUkYsQ0FBbEI7QUFXQSxJQUFNQyxRQUFRLEdBQUc7QUFDZkMsYUFBVyxFQUFLLDBCQUREO0FBRWZDLFlBQVUsRUFBTSxnQkFGRDtBQUdmQyxNQUFJLEVBQVksZ0JBSEQ7QUFJZkMsWUFBVSxFQUFNLGFBSkQ7QUFLZkMsZUFBYSxFQUFHO0FBTEQsQ0FBakI7QUFRQSxJQUFNQyxhQUFhLEdBQUc7QUFDcEJDLEtBQUcsRUFBUyxXQURRO0FBRXBCQyxRQUFNLEVBQU0sU0FGUTtBQUdwQkMsUUFBTSxFQUFNLGNBSFE7QUFJcEJDLFdBQVMsRUFBRyxZQUpRO0FBS3BCQyxPQUFLLEVBQU8sYUFMUTtBQU1wQkMsVUFBUSxFQUFJLFdBTlE7QUFPcEJDLE1BQUksRUFBUSxZQVBRO0FBUXBCQyxTQUFPLEVBQUs7QUFSUSxDQUF0QjtBQVdBLElBQU1DLE9BQU8sR0FBRztBQUNkaFQsUUFBTSxFQUFNLENBREU7QUFFZCtFLE1BQUksRUFBUSxJQUZFO0FBR2RrTyxVQUFRLEVBQUksY0FIRTtBQUlkMVMsV0FBUyxFQUFHLFFBSkU7QUFLZDJTLFNBQU8sRUFBSztBQUxFLENBQWhCO0FBUUEsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCblQsUUFBTSxFQUFNLDBCQURNO0FBRWxCK0UsTUFBSSxFQUFRLFNBRk07QUFHbEJrTyxVQUFRLEVBQUksa0JBSE07QUFJbEIxUyxXQUFTLEVBQUcsa0JBSk07QUFLbEIyUyxTQUFPLEVBQUs7QUFMTSxDQUFwQjtBQVFBOzs7Ozs7SUFNTUUsUTs7O0FBQ0osb0JBQVl6YixPQUFaLEVBQXFCMGIsTUFBckIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0MsUUFBTCxHQUFpQjNiLE9BQWpCO0FBQ0EsU0FBSzRiLE9BQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWlCLEtBQUtDLFVBQUwsQ0FBZ0JKLE1BQWhCLENBQWpCO0FBQ0EsU0FBS0ssS0FBTCxHQUFpQixLQUFLQyxlQUFMLEVBQWpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLQyxhQUFMLEVBQWpCOztBQUVBLFNBQUtDLGtCQUFMO0FBQ0QsRyxDQUVEOzs7OztBQWNBOzZCQUVTO0FBQ1AsVUFBSSxLQUFLUixRQUFMLENBQWNTLFFBQWQsSUFBMEJ4RCw2Q0FBQyxDQUFDLEtBQUsrQyxRQUFOLENBQUQsQ0FBaUJVLFFBQWpCLENBQTBCdkMsU0FBUyxDQUFDQyxRQUFwQyxDQUE5QixFQUE2RTtBQUMzRTtBQUNEOztBQUVELFVBQU16UyxNQUFNLEdBQUttVSxRQUFRLENBQUNhLHFCQUFULENBQStCLEtBQUtYLFFBQXBDLENBQWpCOztBQUNBLFVBQU1ZLFFBQVEsR0FBRzNELDZDQUFDLENBQUMsS0FBS21ELEtBQU4sQ0FBRCxDQUFjTSxRQUFkLENBQXVCdkMsU0FBUyxDQUFDTixJQUFqQyxDQUFqQjs7QUFFQWlDLGNBQVEsQ0FBQ2UsV0FBVDs7QUFFQSxVQUFJRCxRQUFKLEVBQWM7QUFDWjtBQUNEOztBQUVELFVBQU1FLGFBQWEsR0FBRztBQUNwQkEscUJBQWEsRUFBRSxLQUFLZDtBQURBLE9BQXRCO0FBR0EsVUFBTWUsU0FBUyxHQUFHOUQsNkNBQUMsQ0FBQ1MsS0FBRixDQUFRQSxLQUFLLENBQUNHLElBQWQsRUFBb0JpRCxhQUFwQixDQUFsQjtBQUVBN0QsbURBQUMsQ0FBQ3RSLE1BQUQsQ0FBRCxDQUFVcVYsT0FBVixDQUFrQkQsU0FBbEI7O0FBRUEsVUFBSUEsU0FBUyxDQUFDRSxrQkFBVixFQUFKLEVBQW9DO0FBQ2xDO0FBQ0QsT0F2Qk0sQ0F5QlA7OztBQUNBLFVBQUksQ0FBQyxLQUFLWCxTQUFWLEVBQXFCO0FBQ25COzs7O0FBSUEsWUFBSSxPQUFPM0UsaURBQVAsS0FBa0IsV0FBdEIsRUFBbUM7QUFDakMsZ0JBQU0sSUFBSW5TLFNBQUosQ0FBYyxtRUFBZCxDQUFOO0FBQ0Q7O0FBRUQsWUFBSTBYLGdCQUFnQixHQUFHLEtBQUtsQixRQUE1Qjs7QUFFQSxZQUFJLEtBQUtFLE9BQUwsQ0FBYWpULFNBQWIsS0FBMkIsUUFBL0IsRUFBeUM7QUFDdkNpVSwwQkFBZ0IsR0FBR3ZWLE1BQW5CO0FBQ0QsU0FGRCxNQUVPLElBQUl3Viw2Q0FBSSxDQUFDQyxTQUFMLENBQWUsS0FBS2xCLE9BQUwsQ0FBYWpULFNBQTVCLENBQUosRUFBNEM7QUFDakRpVSwwQkFBZ0IsR0FBRyxLQUFLaEIsT0FBTCxDQUFhalQsU0FBaEMsQ0FEaUQsQ0FHakQ7O0FBQ0EsY0FBSSxPQUFPLEtBQUtpVCxPQUFMLENBQWFqVCxTQUFiLENBQXVCOE8sTUFBOUIsS0FBeUMsV0FBN0MsRUFBMEQ7QUFDeERtRiw0QkFBZ0IsR0FBRyxLQUFLaEIsT0FBTCxDQUFhalQsU0FBYixDQUF1QixDQUF2QixDQUFuQjtBQUNEO0FBQ0YsU0FwQmtCLENBc0JuQjtBQUNBO0FBQ0E7OztBQUNBLFlBQUksS0FBS2lULE9BQUwsQ0FBYVAsUUFBYixLQUEwQixjQUE5QixFQUE4QztBQUM1QzFDLHVEQUFDLENBQUN0UixNQUFELENBQUQsQ0FBVTBWLFFBQVYsQ0FBbUJsRCxTQUFTLENBQUNPLGVBQTdCO0FBQ0Q7O0FBQ0QsYUFBS3VCLE9BQUwsR0FBZSxJQUFJdEUsaURBQUosQ0FBV3VGLGdCQUFYLEVBQTZCLEtBQUtkLEtBQWxDLEVBQXlDLEtBQUtrQixnQkFBTCxFQUF6QyxDQUFmO0FBQ0QsT0F2RE0sQ0F5RFA7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFVBQUksa0JBQWtCMWUsUUFBUSxDQUFDa0QsZUFBM0IsSUFDQW1YLDZDQUFDLENBQUN0UixNQUFELENBQUQsQ0FBVTRWLE9BQVYsQ0FBa0I1QyxRQUFRLENBQUNJLFVBQTNCLEVBQXVDL2IsTUFBdkMsS0FBa0QsQ0FEdEQsRUFDeUQ7QUFDdkRpYSxxREFBQyxDQUFDcmEsUUFBUSxDQUFDcUMsSUFBVixDQUFELENBQWlCeUcsUUFBakIsR0FBNEI4VixFQUE1QixDQUErQixXQUEvQixFQUE0QyxJQUE1QyxFQUFrRHZFLDZDQUFDLENBQUN3RSxJQUFwRDtBQUNEOztBQUVELFdBQUt6QixRQUFMLENBQWMwQixLQUFkOztBQUNBLFdBQUsxQixRQUFMLENBQWN0TCxZQUFkLENBQTJCLGVBQTNCLEVBQTRDLElBQTVDOztBQUVBdUksbURBQUMsQ0FBQyxLQUFLbUQsS0FBTixDQUFELENBQWN1QixXQUFkLENBQTBCeEQsU0FBUyxDQUFDTixJQUFwQztBQUNBWixtREFBQyxDQUFDdFIsTUFBRCxDQUFELENBQ0dnVyxXQURILENBQ2V4RCxTQUFTLENBQUNOLElBRHpCLEVBRUdtRCxPQUZILENBRVcvRCw2Q0FBQyxDQUFDUyxLQUFGLENBQVFBLEtBQUssQ0FBQ0ksS0FBZCxFQUFxQmdELGFBQXJCLENBRlg7QUFHRDs7OzJCQUVNO0FBQ0wsVUFBSSxLQUFLZCxRQUFMLENBQWNTLFFBQWQsSUFBMEJ4RCw2Q0FBQyxDQUFDLEtBQUsrQyxRQUFOLENBQUQsQ0FBaUJVLFFBQWpCLENBQTBCdkMsU0FBUyxDQUFDQyxRQUFwQyxDQUExQixJQUEyRW5CLDZDQUFDLENBQUMsS0FBS21ELEtBQU4sQ0FBRCxDQUFjTSxRQUFkLENBQXVCdkMsU0FBUyxDQUFDTixJQUFqQyxDQUEvRSxFQUF1SDtBQUNySDtBQUNEOztBQUVELFVBQU1pRCxhQUFhLEdBQUc7QUFDcEJBLHFCQUFhLEVBQUUsS0FBS2Q7QUFEQSxPQUF0QjtBQUdBLFVBQU1lLFNBQVMsR0FBRzlELDZDQUFDLENBQUNTLEtBQUYsQ0FBUUEsS0FBSyxDQUFDRyxJQUFkLEVBQW9CaUQsYUFBcEIsQ0FBbEI7O0FBQ0EsVUFBTW5WLE1BQU0sR0FBR21VLFFBQVEsQ0FBQ2EscUJBQVQsQ0FBK0IsS0FBS1gsUUFBcEMsQ0FBZjs7QUFFQS9DLG1EQUFDLENBQUN0UixNQUFELENBQUQsQ0FBVXFWLE9BQVYsQ0FBa0JELFNBQWxCOztBQUVBLFVBQUlBLFNBQVMsQ0FBQ0Usa0JBQVYsRUFBSixFQUFvQztBQUNsQztBQUNEOztBQUVEaEUsbURBQUMsQ0FBQyxLQUFLbUQsS0FBTixDQUFELENBQWN1QixXQUFkLENBQTBCeEQsU0FBUyxDQUFDTixJQUFwQztBQUNBWixtREFBQyxDQUFDdFIsTUFBRCxDQUFELENBQ0dnVyxXQURILENBQ2V4RCxTQUFTLENBQUNOLElBRHpCLEVBRUdtRCxPQUZILENBRVcvRCw2Q0FBQyxDQUFDUyxLQUFGLENBQVFBLEtBQUssQ0FBQ0ksS0FBZCxFQUFxQmdELGFBQXJCLENBRlg7QUFHRDs7OzJCQUVNO0FBQ0wsVUFBSSxLQUFLZCxRQUFMLENBQWNTLFFBQWQsSUFBMEJ4RCw2Q0FBQyxDQUFDLEtBQUsrQyxRQUFOLENBQUQsQ0FBaUJVLFFBQWpCLENBQTBCdkMsU0FBUyxDQUFDQyxRQUFwQyxDQUExQixJQUEyRSxDQUFDbkIsNkNBQUMsQ0FBQyxLQUFLbUQsS0FBTixDQUFELENBQWNNLFFBQWQsQ0FBdUJ2QyxTQUFTLENBQUNOLElBQWpDLENBQWhGLEVBQXdIO0FBQ3RIO0FBQ0Q7O0FBRUQsVUFBTWlELGFBQWEsR0FBRztBQUNwQkEscUJBQWEsRUFBRSxLQUFLZDtBQURBLE9BQXRCO0FBR0EsVUFBTTRCLFNBQVMsR0FBRzNFLDZDQUFDLENBQUNTLEtBQUYsQ0FBUUEsS0FBSyxDQUFDQyxJQUFkLEVBQW9CbUQsYUFBcEIsQ0FBbEI7O0FBQ0EsVUFBTW5WLE1BQU0sR0FBR21VLFFBQVEsQ0FBQ2EscUJBQVQsQ0FBK0IsS0FBS1gsUUFBcEMsQ0FBZjs7QUFFQS9DLG1EQUFDLENBQUN0UixNQUFELENBQUQsQ0FBVXFWLE9BQVYsQ0FBa0JZLFNBQWxCOztBQUVBLFVBQUlBLFNBQVMsQ0FBQ1gsa0JBQVYsRUFBSixFQUFvQztBQUNsQztBQUNEOztBQUVEaEUsbURBQUMsQ0FBQyxLQUFLbUQsS0FBTixDQUFELENBQWN1QixXQUFkLENBQTBCeEQsU0FBUyxDQUFDTixJQUFwQztBQUNBWixtREFBQyxDQUFDdFIsTUFBRCxDQUFELENBQ0dnVyxXQURILENBQ2V4RCxTQUFTLENBQUNOLElBRHpCLEVBRUdtRCxPQUZILENBRVcvRCw2Q0FBQyxDQUFDUyxLQUFGLENBQVFBLEtBQUssQ0FBQ0UsTUFBZCxFQUFzQmtELGFBQXRCLENBRlg7QUFHRDs7OzhCQUVTO0FBQ1I3RCxtREFBQyxDQUFDNEUsVUFBRixDQUFhLEtBQUs3QixRQUFsQixFQUE0Qm5ELFFBQTVCO0FBQ0FJLG1EQUFDLENBQUMsS0FBSytDLFFBQU4sQ0FBRCxDQUFpQjhCLEdBQWpCLENBQXFCaEYsU0FBckI7QUFDQSxXQUFLa0QsUUFBTCxHQUFnQixJQUFoQjtBQUNBLFdBQUtJLEtBQUwsR0FBYSxJQUFiOztBQUNBLFVBQUksS0FBS0gsT0FBTCxLQUFpQixJQUFyQixFQUEyQjtBQUN6QixhQUFLQSxPQUFMLENBQWF0TixPQUFiOztBQUNBLGFBQUtzTixPQUFMLEdBQWUsSUFBZjtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFdBQUtLLFNBQUwsR0FBaUIsS0FBS0MsYUFBTCxFQUFqQjs7QUFDQSxVQUFJLEtBQUtOLE9BQUwsS0FBaUIsSUFBckIsRUFBMkI7QUFDekIsYUFBS0EsT0FBTCxDQUFhbE0sY0FBYjtBQUNEO0FBQ0YsSyxDQUVEOzs7O3lDQUVxQjtBQUFBOztBQUNuQmtKLG1EQUFDLENBQUMsS0FBSytDLFFBQU4sQ0FBRCxDQUFpQndCLEVBQWpCLENBQW9COUQsS0FBSyxDQUFDSyxLQUExQixFQUFpQyxVQUFDNUssS0FBRCxFQUFXO0FBQzFDQSxhQUFLLENBQUM0TyxjQUFOO0FBQ0E1TyxhQUFLLENBQUM2TyxlQUFOOztBQUNBLGFBQUksQ0FBQ0MsTUFBTDtBQUNELE9BSkQ7QUFLRDs7OytCQUVVbEMsTSxFQUFRO0FBQ2pCQSxZQUFNLHFCQUNELEtBQUttQyxXQUFMLENBQWlCeEMsT0FEaEIsTUFFRHpDLDZDQUFDLENBQUMsS0FBSytDLFFBQU4sQ0FBRCxDQUFpQnRQLElBQWpCLEVBRkMsTUFHRHFQLE1BSEMsQ0FBTjtBQU1Bb0IsbURBQUksQ0FBQ2dCLGVBQUwsQ0FDRXhGLElBREYsRUFFRW9ELE1BRkYsRUFHRSxLQUFLbUMsV0FBTCxDQUFpQnJDLFdBSG5CO0FBTUEsYUFBT0UsTUFBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQUksQ0FBQyxLQUFLSyxLQUFWLEVBQWlCO0FBQ2YsWUFBTXpVLE1BQU0sR0FBR21VLFFBQVEsQ0FBQ2EscUJBQVQsQ0FBK0IsS0FBS1gsUUFBcEMsQ0FBZjs7QUFFQSxZQUFJclUsTUFBSixFQUFZO0FBQ1YsZUFBS3lVLEtBQUwsR0FBYXpVLE1BQU0sQ0FBQ3FMLGFBQVAsQ0FBcUIySCxRQUFRLENBQUNHLElBQTlCLENBQWI7QUFDRDtBQUNGOztBQUNELGFBQU8sS0FBS3NCLEtBQVo7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTWdDLGVBQWUsR0FBR25GLDZDQUFDLENBQUMsS0FBSytDLFFBQUwsQ0FBY2xiLFVBQWYsQ0FBekI7QUFDQSxVQUFJNkksU0FBUyxHQUFHc1IsYUFBYSxDQUFDRyxNQUE5QixDQUZjLENBSWQ7O0FBQ0EsVUFBSWdELGVBQWUsQ0FBQzFCLFFBQWhCLENBQXlCdkMsU0FBUyxDQUFDRSxNQUFuQyxDQUFKLEVBQWdEO0FBQzlDMVEsaUJBQVMsR0FBR3NSLGFBQWEsQ0FBQ0MsR0FBMUI7O0FBQ0EsWUFBSWpDLDZDQUFDLENBQUMsS0FBS21ELEtBQU4sQ0FBRCxDQUFjTSxRQUFkLENBQXVCdkMsU0FBUyxDQUFDSyxTQUFqQyxDQUFKLEVBQWlEO0FBQy9DN1EsbUJBQVMsR0FBR3NSLGFBQWEsQ0FBQ0UsTUFBMUI7QUFDRDtBQUNGLE9BTEQsTUFLTyxJQUFJaUQsZUFBZSxDQUFDMUIsUUFBaEIsQ0FBeUJ2QyxTQUFTLENBQUNHLFNBQW5DLENBQUosRUFBbUQ7QUFDeEQzUSxpQkFBUyxHQUFHc1IsYUFBYSxDQUFDSyxLQUExQjtBQUNELE9BRk0sTUFFQSxJQUFJOEMsZUFBZSxDQUFDMUIsUUFBaEIsQ0FBeUJ2QyxTQUFTLENBQUNJLFFBQW5DLENBQUosRUFBa0Q7QUFDdkQ1USxpQkFBUyxHQUFHc1IsYUFBYSxDQUFDTyxJQUExQjtBQUNELE9BRk0sTUFFQSxJQUFJdkMsNkNBQUMsQ0FBQyxLQUFLbUQsS0FBTixDQUFELENBQWNNLFFBQWQsQ0FBdUJ2QyxTQUFTLENBQUNLLFNBQWpDLENBQUosRUFBaUQ7QUFDdEQ3USxpQkFBUyxHQUFHc1IsYUFBYSxDQUFDSSxTQUExQjtBQUNEOztBQUNELGFBQU8xUixTQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU9zUCw2Q0FBQyxDQUFDLEtBQUsrQyxRQUFOLENBQUQsQ0FBaUJ1QixPQUFqQixDQUF5QixTQUF6QixFQUFvQ3ZlLE1BQXBDLEdBQTZDLENBQXBEO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFVBQU0wSixNQUFNLEdBQUcsRUFBZjs7QUFFQSxVQUFJLE9BQU8sS0FBS3dULE9BQUwsQ0FBYXhULE1BQXBCLEtBQStCLFVBQW5DLEVBQStDO0FBQzdDQSxjQUFNLENBQUNySixFQUFQLEdBQVksVUFBQ3FOLElBQUQsRUFBVTtBQUNwQkEsY0FBSSxDQUFDNUYsT0FBTCxxQkFDSzRGLElBQUksQ0FBQzVGLE9BRFYsTUFFSyxNQUFJLENBQUNvVixPQUFMLENBQWF4VCxNQUFiLENBQW9CZ0UsSUFBSSxDQUFDNUYsT0FBekIsRUFBa0MsTUFBSSxDQUFDa1YsUUFBdkMsS0FBb0QsRUFGekQ7QUFLQSxpQkFBT3RQLElBQVA7QUFDRCxTQVBEO0FBUUQsT0FURCxNQVNPO0FBQ0xoRSxjQUFNLENBQUNBLE1BQVAsR0FBZ0IsS0FBS3dULE9BQUwsQ0FBYXhULE1BQTdCO0FBQ0Q7O0FBRUQsYUFBT0EsTUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU0yVixZQUFZLEdBQUc7QUFDbkIxVSxpQkFBUyxFQUFFLEtBQUsyVSxhQUFMLEVBRFE7QUFFbkI3UixpQkFBUyxFQUFFO0FBQ1QvRCxnQkFBTSxFQUFFLEtBQUs2VixVQUFMLEVBREM7QUFFVDlRLGNBQUksRUFBRTtBQUNKUixtQkFBTyxFQUFFLEtBQUtpUCxPQUFMLENBQWF6TztBQURsQixXQUZHO0FBS1RpSix5QkFBZSxFQUFFO0FBQ2Z2Tiw2QkFBaUIsRUFBRSxLQUFLK1MsT0FBTCxDQUFhUDtBQURqQjtBQUxSO0FBRlEsT0FBckIsQ0FEaUIsQ0FjakI7O0FBQ0EsVUFBSSxLQUFLTyxPQUFMLENBQWFOLE9BQWIsS0FBeUIsUUFBN0IsRUFBdUM7QUFDckN5QyxvQkFBWSxDQUFDNVIsU0FBYixDQUF1QmtFLFVBQXZCLEdBQW9DO0FBQ2xDMUQsaUJBQU8sRUFBRTtBQUR5QixTQUFwQztBQUdEOztBQUVELGFBQU9vUixZQUFQO0FBQ0QsSyxDQUVEOzs7O3FDQUV3QnRDLE0sRUFBUTtBQUM5QixhQUFPLEtBQUt5QyxJQUFMLENBQVUsWUFBWTtBQUMzQixZQUFJOVIsSUFBSSxHQUFHdU0sNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXZNLElBQVIsQ0FBYW1NLFFBQWIsQ0FBWDs7QUFDQSxZQUFNcUQsT0FBTyxHQUFHLFFBQU9ILE1BQVAsTUFBa0IsUUFBbEIsR0FBNkJBLE1BQTdCLEdBQXNDLElBQXREOztBQUVBLFlBQUksQ0FBQ3JQLElBQUwsRUFBVztBQUNUQSxjQUFJLEdBQUcsSUFBSW9QLFFBQUosQ0FBYSxJQUFiLEVBQW1CSSxPQUFuQixDQUFQO0FBQ0FqRCx1REFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdk0sSUFBUixDQUFhbU0sUUFBYixFQUF1Qm5NLElBQXZCO0FBQ0Q7O0FBRUQsWUFBSSxPQUFPcVAsTUFBUCxLQUFrQixRQUF0QixFQUFnQztBQUM5QixjQUFJLE9BQU9yUCxJQUFJLENBQUNxUCxNQUFELENBQVgsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkMsa0JBQU0sSUFBSXZXLFNBQUosNkJBQWtDdVcsTUFBbEMsUUFBTjtBQUNEOztBQUNEclAsY0FBSSxDQUFDcVAsTUFBRCxDQUFKO0FBQ0Q7QUFDRixPQWZNLENBQVA7QUFnQkQ7OztnQ0FFa0I1TSxLLEVBQU87QUFDeEIsVUFBSUEsS0FBSyxLQUFLQSxLQUFLLENBQUNzUCxLQUFOLEtBQWdCbEYsd0JBQWhCLElBQ1pwSyxLQUFLLENBQUN1UCxJQUFOLEtBQWUsT0FBZixJQUEwQnZQLEtBQUssQ0FBQ3NQLEtBQU4sS0FBZ0JyRixXQURuQyxDQUFULEVBQzBEO0FBQ3hEO0FBQ0Q7O0FBRUQsVUFBTXVGLE9BQU8sR0FBRyxHQUFHOVIsS0FBSCxDQUFTMU0sSUFBVCxDQUFjdkIsUUFBUSxDQUFDZ2dCLGdCQUFULENBQTBCakUsUUFBUSxDQUFDQyxXQUFuQyxDQUFkLENBQWhCOztBQUVBLFdBQUssSUFBSTdiLENBQUMsR0FBRyxDQUFSLEVBQVdrVSxHQUFHLEdBQUcwTCxPQUFPLENBQUMzZixNQUE5QixFQUFzQ0QsQ0FBQyxHQUFHa1UsR0FBMUMsRUFBK0NsVSxDQUFDLEVBQWhELEVBQW9EO0FBQ2xELFlBQU00SSxNQUFNLEdBQUdtVSxRQUFRLENBQUNhLHFCQUFULENBQStCZ0MsT0FBTyxDQUFDNWYsQ0FBRCxDQUF0QyxDQUFmOztBQUNBLFlBQU04ZixPQUFPLEdBQUc1Riw2Q0FBQyxDQUFDMEYsT0FBTyxDQUFDNWYsQ0FBRCxDQUFSLENBQUQsQ0FBYzJOLElBQWQsQ0FBbUJtTSxRQUFuQixDQUFoQjtBQUNBLFlBQU1pRSxhQUFhLEdBQUc7QUFDcEJBLHVCQUFhLEVBQUU2QixPQUFPLENBQUM1ZixDQUFEO0FBREYsU0FBdEI7O0FBSUEsWUFBSW9RLEtBQUssSUFBSUEsS0FBSyxDQUFDdVAsSUFBTixLQUFlLE9BQTVCLEVBQXFDO0FBQ25DNUIsdUJBQWEsQ0FBQ2dDLFVBQWQsR0FBMkIzUCxLQUEzQjtBQUNEOztBQUVELFlBQUksQ0FBQzBQLE9BQUwsRUFBYztBQUNaO0FBQ0Q7O0FBRUQsWUFBTUUsWUFBWSxHQUFHRixPQUFPLENBQUN6QyxLQUE3Qjs7QUFDQSxZQUFJLENBQUNuRCw2Q0FBQyxDQUFDdFIsTUFBRCxDQUFELENBQVUrVSxRQUFWLENBQW1CdkMsU0FBUyxDQUFDTixJQUE3QixDQUFMLEVBQXlDO0FBQ3ZDO0FBQ0Q7O0FBRUQsWUFBSTFLLEtBQUssS0FBS0EsS0FBSyxDQUFDdVAsSUFBTixLQUFlLE9BQWYsSUFDVixrQkFBa0JwZCxJQUFsQixDQUF1QjZOLEtBQUssQ0FBQ3hKLE1BQU4sQ0FBYXFaLE9BQXBDLENBRFUsSUFDc0M3UCxLQUFLLENBQUN1UCxJQUFOLEtBQWUsT0FBZixJQUEwQnZQLEtBQUssQ0FBQ3NQLEtBQU4sS0FBZ0JyRixXQURyRixDQUFMLElBRUFILDZDQUFDLENBQUM3VixRQUFGLENBQVd1RSxNQUFYLEVBQW1Cd0gsS0FBSyxDQUFDeEosTUFBekIsQ0FGSixFQUVzQztBQUNwQztBQUNEOztBQUVELFlBQU1pWSxTQUFTLEdBQUczRSw2Q0FBQyxDQUFDUyxLQUFGLENBQVFBLEtBQUssQ0FBQ0MsSUFBZCxFQUFvQm1ELGFBQXBCLENBQWxCO0FBQ0E3RCxxREFBQyxDQUFDdFIsTUFBRCxDQUFELENBQVVxVixPQUFWLENBQWtCWSxTQUFsQjs7QUFDQSxZQUFJQSxTQUFTLENBQUNYLGtCQUFWLEVBQUosRUFBb0M7QUFDbEM7QUFDRCxTQTlCaUQsQ0FnQ2xEO0FBQ0E7OztBQUNBLFlBQUksa0JBQWtCcmUsUUFBUSxDQUFDa0QsZUFBL0IsRUFBZ0Q7QUFDOUNtWCx1REFBQyxDQUFDcmEsUUFBUSxDQUFDcUMsSUFBVixDQUFELENBQWlCeUcsUUFBakIsR0FBNEJvVyxHQUE1QixDQUFnQyxXQUFoQyxFQUE2QyxJQUE3QyxFQUFtRDdFLDZDQUFDLENBQUN3RSxJQUFyRDtBQUNEOztBQUVEa0IsZUFBTyxDQUFDNWYsQ0FBRCxDQUFQLENBQVcyUixZQUFYLENBQXdCLGVBQXhCLEVBQXlDLE9BQXpDO0FBRUF1SSxxREFBQyxDQUFDOEYsWUFBRCxDQUFELENBQWdCRSxXQUFoQixDQUE0QjlFLFNBQVMsQ0FBQ04sSUFBdEM7QUFDQVoscURBQUMsQ0FBQ3RSLE1BQUQsQ0FBRCxDQUNHc1gsV0FESCxDQUNlOUUsU0FBUyxDQUFDTixJQUR6QixFQUVHbUQsT0FGSCxDQUVXL0QsNkNBQUMsQ0FBQ1MsS0FBRixDQUFRQSxLQUFLLENBQUNFLE1BQWQsRUFBc0JrRCxhQUF0QixDQUZYO0FBR0Q7QUFDRjs7OzBDQUU0QnpjLE8sRUFBUztBQUNwQyxVQUFJc0gsTUFBSjtBQUNBLFVBQU11WCxRQUFRLEdBQUcvQiw2Q0FBSSxDQUFDZ0Msc0JBQUwsQ0FBNEI5ZSxPQUE1QixDQUFqQjs7QUFFQSxVQUFJNmUsUUFBSixFQUFjO0FBQ1p2WCxjQUFNLEdBQUcvSSxRQUFRLENBQUNvVSxhQUFULENBQXVCa00sUUFBdkIsQ0FBVDtBQUNEOztBQUVELGFBQU92WCxNQUFNLElBQUl0SCxPQUFPLENBQUNTLFVBQXpCO0FBQ0QsSyxDQUVEOzs7OzJDQUM4QnFPLEssRUFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUksa0JBQWtCN04sSUFBbEIsQ0FBdUI2TixLQUFLLENBQUN4SixNQUFOLENBQWFxWixPQUFwQyxJQUNBN1AsS0FBSyxDQUFDc1AsS0FBTixLQUFnQnRGLGFBQWhCLElBQWlDaEssS0FBSyxDQUFDc1AsS0FBTixLQUFnQnZGLGNBQWhCLEtBQ2xDL0osS0FBSyxDQUFDc1AsS0FBTixLQUFnQm5GLGtCQUFoQixJQUFzQ25LLEtBQUssQ0FBQ3NQLEtBQU4sS0FBZ0JwRixnQkFBdEQsSUFDQ0osNkNBQUMsQ0FBQzlKLEtBQUssQ0FBQ3hKLE1BQVAsQ0FBRCxDQUFnQjRYLE9BQWhCLENBQXdCNUMsUUFBUSxDQUFDRyxJQUFqQyxFQUF1QzliLE1BRk4sQ0FEakMsR0FHaUQsQ0FBQ3dhLGNBQWMsQ0FBQ2xZLElBQWYsQ0FBb0I2TixLQUFLLENBQUNzUCxLQUExQixDQUh0RCxFQUd3RjtBQUN0RjtBQUNEOztBQUVEdFAsV0FBSyxDQUFDNE8sY0FBTjtBQUNBNU8sV0FBSyxDQUFDNk8sZUFBTjs7QUFFQSxVQUFJLEtBQUt2QixRQUFMLElBQWlCeEQsNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXlELFFBQVIsQ0FBaUJ2QyxTQUFTLENBQUNDLFFBQTNCLENBQXJCLEVBQTJEO0FBQ3pEO0FBQ0Q7O0FBRUQsVUFBTXpTLE1BQU0sR0FBS21VLFFBQVEsQ0FBQ2EscUJBQVQsQ0FBK0IsSUFBL0IsQ0FBakI7O0FBQ0EsVUFBTUMsUUFBUSxHQUFHM0QsNkNBQUMsQ0FBQ3RSLE1BQUQsQ0FBRCxDQUFVK1UsUUFBVixDQUFtQnZDLFNBQVMsQ0FBQ04sSUFBN0IsQ0FBakI7O0FBRUEsVUFBSSxDQUFDK0MsUUFBRCxJQUFhQSxRQUFRLEtBQUt6TixLQUFLLENBQUNzUCxLQUFOLEtBQWdCdkYsY0FBaEIsSUFBa0MvSixLQUFLLENBQUNzUCxLQUFOLEtBQWdCdEYsYUFBdkQsQ0FBekIsRUFBZ0c7QUFDOUYsWUFBSWhLLEtBQUssQ0FBQ3NQLEtBQU4sS0FBZ0J2RixjQUFwQixFQUFvQztBQUNsQyxjQUFNK0UsTUFBTSxHQUFHdFcsTUFBTSxDQUFDcUwsYUFBUCxDQUFxQjJILFFBQVEsQ0FBQ0MsV0FBOUIsQ0FBZjtBQUNBM0IsdURBQUMsQ0FBQ2dGLE1BQUQsQ0FBRCxDQUFVakIsT0FBVixDQUFrQixPQUFsQjtBQUNEOztBQUVEL0QscURBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStELE9BQVIsQ0FBZ0IsT0FBaEI7QUFDQTtBQUNEOztBQUVELFVBQU1vQyxLQUFLLEdBQUcsR0FBR3ZTLEtBQUgsQ0FBUzFNLElBQVQsQ0FBY3dILE1BQU0sQ0FBQ2lYLGdCQUFQLENBQXdCakUsUUFBUSxDQUFDSyxhQUFqQyxDQUFkLENBQWQ7O0FBRUEsVUFBSW9FLEtBQUssQ0FBQ3BnQixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCO0FBQ0Q7O0FBRUQsVUFBSWlWLEtBQUssR0FBR21MLEtBQUssQ0FBQ2pnQixPQUFOLENBQWNnUSxLQUFLLENBQUN4SixNQUFwQixDQUFaOztBQUVBLFVBQUl3SixLQUFLLENBQUNzUCxLQUFOLEtBQWdCcEYsZ0JBQWhCLElBQW9DcEYsS0FBSyxHQUFHLENBQWhELEVBQW1EO0FBQUU7QUFDbkRBLGFBQUs7QUFDTjs7QUFFRCxVQUFJOUUsS0FBSyxDQUFDc1AsS0FBTixLQUFnQm5GLGtCQUFoQixJQUFzQ3JGLEtBQUssR0FBR21MLEtBQUssQ0FBQ3BnQixNQUFOLEdBQWUsQ0FBakUsRUFBb0U7QUFBRTtBQUNwRWlWLGFBQUs7QUFDTjs7QUFFRCxVQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO0FBQ2JBLGFBQUssR0FBRyxDQUFSO0FBQ0Q7O0FBRURtTCxXQUFLLENBQUNuTCxLQUFELENBQUwsQ0FBYXlKLEtBQWI7QUFDRDs7O3dCQWpab0I7QUFDbkIsYUFBTzlFLE9BQVA7QUFDRDs7O3dCQUVvQjtBQUNuQixhQUFPOEMsT0FBUDtBQUNEOzs7d0JBRXdCO0FBQ3ZCLGFBQU9HLFdBQVA7QUFDRDs7Ozs7QUEwWUg7Ozs7Ozs7QUFNQTVDLDZDQUFDLENBQUNyYSxRQUFELENBQUQsQ0FDRzRlLEVBREgsQ0FDTTlELEtBQUssQ0FBQ08sZ0JBRFosRUFDOEJVLFFBQVEsQ0FBQ0MsV0FEdkMsRUFDb0RrQixRQUFRLENBQUN1RCxzQkFEN0QsRUFFRzdCLEVBRkgsQ0FFTTlELEtBQUssQ0FBQ08sZ0JBRlosRUFFOEJVLFFBQVEsQ0FBQ0csSUFGdkMsRUFFNkNnQixRQUFRLENBQUN1RCxzQkFGdEQsRUFHRzdCLEVBSEgsV0FHUzlELEtBQUssQ0FBQ00sY0FIZixjQUdpQ04sS0FBSyxDQUFDUSxjQUh2QyxHQUd5RDRCLFFBQVEsQ0FBQ2UsV0FIbEUsRUFJR1csRUFKSCxDQUlNOUQsS0FBSyxDQUFDTSxjQUpaLEVBSTRCVyxRQUFRLENBQUNDLFdBSnJDLEVBSWtELFVBQVV6TCxLQUFWLEVBQWlCO0FBQy9EQSxPQUFLLENBQUM0TyxjQUFOO0FBQ0E1TyxPQUFLLENBQUM2TyxlQUFOOztBQUNBbEMsVUFBUSxDQUFDd0QsZ0JBQVQsQ0FBMEJuZixJQUExQixDQUErQjhZLDZDQUFDLENBQUMsSUFBRCxDQUFoQyxFQUF3QyxRQUF4QztBQUNELENBUkgsRUFTR3VFLEVBVEgsQ0FTTTlELEtBQUssQ0FBQ00sY0FUWixFQVM0QlcsUUFBUSxDQUFDRSxVQVRyQyxFQVNpRCxVQUFDN1QsQ0FBRCxFQUFPO0FBQ3BEQSxHQUFDLENBQUNnWCxlQUFGO0FBQ0QsQ0FYSDtBQWFBOzs7Ozs7QUFNQS9FLDZDQUFDLENBQUM1WixFQUFGLENBQUtzWixJQUFMLElBQWFtRCxRQUFRLENBQUN3RCxnQkFBdEI7QUFDQXJHLDZDQUFDLENBQUM1WixFQUFGLENBQUtzWixJQUFMLEVBQVdwVCxXQUFYLEdBQXlCdVcsUUFBekI7O0FBQ0E3Qyw2Q0FBQyxDQUFDNVosRUFBRixDQUFLc1osSUFBTCxFQUFXNEcsVUFBWCxHQUF3QixZQUFNO0FBQzVCdEcsK0NBQUMsQ0FBQzVaLEVBQUYsQ0FBS3NaLElBQUwsSUFBYUssa0JBQWI7QUFDQSxTQUFPOEMsUUFBUSxDQUFDd0QsZ0JBQWhCO0FBQ0QsQ0FIRDs7QUFNZXhELHVFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2hpQkE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBRUE7Ozs7OztBQU1BLElBQU0wRCxjQUFjLEdBQUcsZUFBdkI7QUFDQSxJQUFNQyxPQUFPLEdBQUcsT0FBaEI7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyxJQUFoQyxDLENBRUE7O0FBQ0EsU0FBU0MsTUFBVCxDQUFnQnBaLEdBQWhCLEVBQXFCO0FBQ25CLFNBQU8sR0FBR3JHLFFBQUgsQ0FBWUMsSUFBWixDQUFpQm9HLEdBQWpCLEVBQXNCZ0csS0FBdEIsQ0FBNEIsYUFBNUIsRUFBMkMsQ0FBM0MsRUFBOEM0RyxXQUE5QyxFQUFQO0FBQ0Q7O0FBRUQsU0FBU3lNLDRCQUFULEdBQXdDO0FBQ3RDLFNBQU87QUFDTEMsWUFBUSxFQUFFTCxjQURMO0FBRUxNLGdCQUFZLEVBQUVOLGNBRlQ7QUFHTE8sVUFISyxrQkFHRTVRLEtBSEYsRUFHUztBQUNaLFVBQUk4Siw2Q0FBQyxDQUFDOUosS0FBSyxDQUFDeEosTUFBUCxDQUFELENBQWdCcWEsRUFBaEIsQ0FBbUIsSUFBbkIsQ0FBSixFQUE4QjtBQUM1QixlQUFPN1EsS0FBSyxDQUFDOFEsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXhCLENBQThCLElBQTlCLEVBQW9DM2MsU0FBcEMsQ0FBUCxDQUQ0QixDQUMwQjtBQUN2RDs7QUFDRCxhQUFPQyxTQUFQLENBSlksQ0FJSztBQUNsQjtBQVJJLEdBQVA7QUFVRDs7QUFFRCxTQUFTMmMscUJBQVQsQ0FBK0JDLFFBQS9CLEVBQXlDO0FBQUE7O0FBQ3ZDLE1BQUkvZ0IsTUFBTSxHQUFHLEtBQWI7QUFFQTJaLCtDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxSCxHQUFSLENBQVluRCxJQUFJLENBQUNxQyxjQUFqQixFQUFpQyxZQUFNO0FBQ3JDbGdCLFVBQU0sR0FBRyxJQUFUO0FBQ0QsR0FGRDtBQUlBTSxZQUFVLENBQUMsWUFBTTtBQUNmLFFBQUksQ0FBQ04sTUFBTCxFQUFhO0FBQ1g2ZCxVQUFJLENBQUNvRCxvQkFBTCxDQUEwQixLQUExQjtBQUNEO0FBQ0YsR0FKUyxFQUlQRixRQUpPLENBQVY7QUFNQSxTQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFTRyx1QkFBVCxHQUFtQztBQUNqQ3ZILCtDQUFDLENBQUM1WixFQUFGLENBQUtvaEIsb0JBQUwsR0FBNEJMLHFCQUE1QjtBQUNBbkgsK0NBQUMsQ0FBQzlKLEtBQUYsQ0FBUXVSLE9BQVIsQ0FBZ0J2RCxJQUFJLENBQUNxQyxjQUFyQixJQUF1Q0ksNEJBQTRCLEVBQW5FO0FBQ0Q7QUFFRDs7Ozs7OztBQU1BLElBQU16QyxJQUFJLEdBQUc7QUFFWHFDLGdCQUFjLEVBQUUsaUJBRkw7QUFJWG1CLFFBSlcsa0JBSUpuUyxNQUpJLEVBSUk7QUFDYixPQUFHO0FBQ0Q7QUFDQUEsWUFBTSxJQUFJLENBQUMsRUFBRXpKLElBQUksQ0FBQzZiLE1BQUwsS0FBZ0JuQixPQUFsQixDQUFYLENBRkMsQ0FFcUM7QUFDdkMsS0FIRCxRQUdTN2dCLFFBQVEsQ0FBQ2lpQixjQUFULENBQXdCclMsTUFBeEIsQ0FIVDs7QUFJQSxXQUFPQSxNQUFQO0FBQ0QsR0FWVTtBQVlYMlEsd0JBWlcsa0NBWVk5ZSxPQVpaLEVBWXFCO0FBQzlCLFFBQUk2ZSxRQUFRLEdBQUc3ZSxPQUFPLENBQUN5Z0IsWUFBUixDQUFxQixhQUFyQixDQUFmOztBQUVBLFFBQUksQ0FBQzVCLFFBQUQsSUFBYUEsUUFBUSxLQUFLLEdBQTlCLEVBQW1DO0FBQ2pDLFVBQU02QixRQUFRLEdBQUcxZ0IsT0FBTyxDQUFDeWdCLFlBQVIsQ0FBcUIsTUFBckIsQ0FBakI7QUFDQTVCLGNBQVEsR0FBRzZCLFFBQVEsSUFBSUEsUUFBUSxLQUFLLEdBQXpCLEdBQStCQSxRQUFRLENBQUM5SyxJQUFULEVBQS9CLEdBQWlELEVBQTVEO0FBQ0Q7O0FBRUQsUUFBSTtBQUNGLGFBQU9yWCxRQUFRLENBQUNvVSxhQUFULENBQXVCa00sUUFBdkIsSUFBbUNBLFFBQW5DLEdBQThDLElBQXJEO0FBQ0QsS0FGRCxDQUVFLE9BQU84QixHQUFQLEVBQVk7QUFDWixhQUFPLElBQVA7QUFDRDtBQUNGLEdBekJVO0FBMkJYQyxrQ0EzQlcsNENBMkJzQjVnQixPQTNCdEIsRUEyQitCO0FBQ3hDLFFBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osYUFBTyxDQUFQO0FBQ0QsS0FIdUMsQ0FLeEM7OztBQUNBLFFBQUk2Z0Isa0JBQWtCLEdBQUdqSSw2Q0FBQyxDQUFDNVksT0FBRCxDQUFELENBQVdLLEdBQVgsQ0FBZSxxQkFBZixDQUF6QjtBQUNBLFFBQUl5Z0IsZUFBZSxHQUFHbEksNkNBQUMsQ0FBQzVZLE9BQUQsQ0FBRCxDQUFXSyxHQUFYLENBQWUsa0JBQWYsQ0FBdEI7QUFFQSxRQUFNMGdCLHVCQUF1QixHQUFHeGMsVUFBVSxDQUFDc2Msa0JBQUQsQ0FBMUM7QUFDQSxRQUFNRyxvQkFBb0IsR0FBR3pjLFVBQVUsQ0FBQ3VjLGVBQUQsQ0FBdkMsQ0FWd0MsQ0FZeEM7O0FBQ0EsUUFBSSxDQUFDQyx1QkFBRCxJQUE0QixDQUFDQyxvQkFBakMsRUFBdUQ7QUFDckQsYUFBTyxDQUFQO0FBQ0QsS0FmdUMsQ0FpQnhDOzs7QUFDQUgsc0JBQWtCLEdBQUdBLGtCQUFrQixDQUFDeFcsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEIsQ0FBOUIsQ0FBckI7QUFDQXlXLG1CQUFlLEdBQUdBLGVBQWUsQ0FBQ3pXLEtBQWhCLENBQXNCLEdBQXRCLEVBQTJCLENBQTNCLENBQWxCO0FBRUEsV0FBTyxDQUFDOUYsVUFBVSxDQUFDc2Msa0JBQUQsQ0FBVixHQUFpQ3RjLFVBQVUsQ0FBQ3VjLGVBQUQsQ0FBNUMsSUFBaUV6Qix1QkFBeEU7QUFDRCxHQWpEVTtBQW1EWDRCLFFBbkRXLGtCQW1ESmpoQixPQW5ESSxFQW1ESztBQUNkLFdBQU9BLE9BQU8sQ0FBQ21ILFlBQWY7QUFDRCxHQXJEVTtBQXVEWCtZLHNCQXZEVyxnQ0F1RFVsZ0IsT0F2RFYsRUF1RG1CO0FBQzVCNFksaURBQUMsQ0FBQzVZLE9BQUQsQ0FBRCxDQUFXMmMsT0FBWCxDQUFtQndDLGNBQW5CO0FBQ0QsR0F6RFU7QUEyRFg7QUFDQStCLHVCQTVEVyxtQ0E0RGE7QUFDdEIsV0FBT0MsT0FBTyxDQUFDaEMsY0FBRCxDQUFkO0FBQ0QsR0E5RFU7QUFnRVhwQyxXQWhFVyxxQkFnRUQ3VyxHQWhFQyxFQWdFSTtBQUNiLFdBQU8sQ0FBQ0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxJQUFVQSxHQUFYLEVBQWdCaEcsUUFBdkI7QUFDRCxHQWxFVTtBQW9FWDRkLGlCQXBFVywyQkFvRUtzRCxhQXBFTCxFQW9Fb0IxRixNQXBFcEIsRUFvRTRCMkYsV0FwRTVCLEVBb0V5QztBQUNsRCxTQUFLLElBQU1waEIsUUFBWCxJQUF1Qm9oQixXQUF2QixFQUFvQztBQUNsQyxVQUFJemIsTUFBTSxDQUFDSyxTQUFQLENBQWlCTSxjQUFqQixDQUFnQ3pHLElBQWhDLENBQXFDdWhCLFdBQXJDLEVBQWtEcGhCLFFBQWxELENBQUosRUFBaUU7QUFDL0QsWUFBTXFoQixhQUFhLEdBQUdELFdBQVcsQ0FBQ3BoQixRQUFELENBQWpDO0FBQ0EsWUFBTWtHLEtBQUssR0FBV3VWLE1BQU0sQ0FBQ3piLFFBQUQsQ0FBNUI7QUFDQSxZQUFNc2hCLFNBQVMsR0FBT3BiLEtBQUssSUFBSTJXLElBQUksQ0FBQ0MsU0FBTCxDQUFlNVcsS0FBZixDQUFULEdBQ2xCLFNBRGtCLEdBQ05tWixNQUFNLENBQUNuWixLQUFELENBRHRCOztBQUdBLFlBQUksQ0FBQyxJQUFJaVQsTUFBSixDQUFXa0ksYUFBWCxFQUEwQnJnQixJQUExQixDQUErQnNnQixTQUEvQixDQUFMLEVBQWdEO0FBQzlDLGdCQUFNLElBQUlDLEtBQUosQ0FDSixVQUFHSixhQUFhLENBQUNsVCxXQUFkLEVBQUgsNkJBQ1dqTyxRQURYLGdDQUN1Q3NoQixTQUR2Qyx5Q0FFc0JELGFBRnRCLFFBREksQ0FBTjtBQUlEO0FBQ0Y7QUFDRjtBQUNGLEdBcEZVO0FBc0ZYRyxnQkF0RlcsMEJBc0ZJemhCLE9BdEZKLEVBc0ZhO0FBQ3RCLFFBQUksQ0FBQ3pCLFFBQVEsQ0FBQ2tELGVBQVQsQ0FBeUJpZ0IsWUFBOUIsRUFBNEM7QUFDMUMsYUFBTyxJQUFQO0FBQ0QsS0FIcUIsQ0FLdEI7OztBQUNBLFFBQUksT0FBTzFoQixPQUFPLENBQUMyaEIsV0FBZixLQUErQixVQUFuQyxFQUErQztBQUM3QyxVQUFNQyxJQUFJLEdBQUc1aEIsT0FBTyxDQUFDMmhCLFdBQVIsRUFBYjtBQUNBLGFBQU9DLElBQUksWUFBWUMsVUFBaEIsR0FBNkJELElBQTdCLEdBQW9DLElBQTNDO0FBQ0Q7O0FBRUQsUUFBSTVoQixPQUFPLFlBQVk2aEIsVUFBdkIsRUFBbUM7QUFDakMsYUFBTzdoQixPQUFQO0FBQ0QsS0FicUIsQ0FldEI7OztBQUNBLFFBQUksQ0FBQ0EsT0FBTyxDQUFDUyxVQUFiLEVBQXlCO0FBQ3ZCLGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU9xYyxJQUFJLENBQUMyRSxjQUFMLENBQW9CemhCLE9BQU8sQ0FBQ1MsVUFBNUIsQ0FBUDtBQUNEO0FBM0dVLENBQWI7QUE4R0EwZix1QkFBdUI7QUFFUnJELG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaExBLHdCIiwiZmlsZSI6ImRyb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiLyoqIVxuICogQGZpbGVPdmVydmlldyBLaWNrYXNzIGxpYnJhcnkgdG8gY3JlYXRlIGFuZCBwbGFjZSBwb3BwZXJzIG5lYXIgdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnRzLlxuICogQHZlcnNpb24gMS4xNS4wXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE2IEZlZGVyaWNvIFppdm9sbyBhbmQgY29udHJpYnV0b3JzXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqL1xudmFyIGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbnZhciBsb25nZXJUaW1lb3V0QnJvd3NlcnMgPSBbJ0VkZ2UnLCAnVHJpZGVudCcsICdGaXJlZm94J107XG52YXIgdGltZW91dER1cmF0aW9uID0gMDtcbmZvciAodmFyIGkgPSAwOyBpIDwgbG9uZ2VyVGltZW91dEJyb3dzZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gIGlmIChpc0Jyb3dzZXIgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKGxvbmdlclRpbWVvdXRCcm93c2Vyc1tpXSkgPj0gMCkge1xuICAgIHRpbWVvdXREdXJhdGlvbiA9IDE7XG4gICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsZWQgPSBmYWxzZTtcbiAgICAgIGZuKCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRhc2tEZWJvdW5jZShmbikge1xuICB2YXIgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHN1cHBvcnRzTWljcm9UYXNrcyA9IGlzQnJvd3NlciAmJiB3aW5kb3cuUHJvbWlzZTtcblxuLyoqXG4qIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiogYnV0IGNhbGxlZCBpbiB0aGUgbWluaW11bSB0aW1lIHBvc3NpYmxlLlxuKlxuKiBAbWV0aG9kXG4qIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiogQHJldHVybnMge0Z1bmN0aW9ufVxuKi9cbnZhciBkZWJvdW5jZSA9IHN1cHBvcnRzTWljcm9UYXNrcyA/IG1pY3JvdGFza0RlYm91bmNlIDogdGFza0RlYm91bmNlO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FueX0gZnVuY3Rpb25Ub0NoZWNrIC0gdmFyaWFibGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG86IGlzIGEgZnVuY3Rpb24/XG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIHZhciBnZXRUeXBlID0ge307XG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgdmFyIHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgdmFyIGNzcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICByZXR1cm4gcHJvcGVydHkgPyBjc3NbcHJvcGVydHldIDogY3NzO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBhcmVudE5vZGUgb3IgdGhlIGhvc3Qgb2YgdGhlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgfHwgZWxlbWVudC5ob3N0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHNjcm9sbCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgc3dpdGNoIChlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgY2FzZSAnSFRNTCc6XG4gICAgY2FzZSAnQk9EWSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgY2FzZSAnI2RvY3VtZW50JzpcbiAgICAgIHJldHVybiBlbGVtZW50LmJvZHk7XG4gIH1cblxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcblxuICB2YXIgX2dldFN0eWxlQ29tcHV0ZWRQcm9wID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WTtcblxuICBpZiAoLyhhdXRvfHNjcm9sbHxvdmVybGF5KS8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG59XG5cbnZhciBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEod2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSk7XG52YXIgaXNJRTEwID0gaXNCcm93c2VyICYmIC9NU0lFIDEwLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gaXNJRVxuICovXG5mdW5jdGlvbiBpc0lFKHZlcnNpb24pIHtcbiAgaWYgKHZlcnNpb24gPT09IDExKSB7XG4gICAgcmV0dXJuIGlzSUUxMTtcbiAgfVxuICBpZiAodmVyc2lvbiA9PT0gMTApIHtcbiAgICByZXR1cm4gaXNJRTEwO1xuICB9XG4gIHJldHVybiBpc0lFMTEgfHwgaXNJRTEwO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG9mZnNldCBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IG9mZnNldCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIHZhciBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgdmFyIG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IG51bGw7XG4gIC8vIFNraXAgaGlkZGVuIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gb2Zmc2V0UGFyZW50XG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgPT09IG5vT2Zmc2V0UGFyZW50ICYmIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gKGVsZW1lbnQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykub2Zmc2V0UGFyZW50O1xuICB9XG5cbiAgdmFyIG5vZGVOYW1lID0gb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZTtcblxuICBpZiAoIW5vZGVOYW1lIHx8IG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIC5vZmZzZXRQYXJlbnQgd2lsbCByZXR1cm4gdGhlIGNsb3Nlc3QgVEgsIFREIG9yIFRBQkxFIGluIGNhc2VcbiAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxuICBpZiAoWydUSCcsICdURCcsICdUQUJMRSddLmluZGV4T2Yob2Zmc2V0UGFyZW50Lm5vZGVOYW1lKSAhPT0gLTEgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcbn1cblxuZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudCkge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgcm9vdCBub2RlIChkb2N1bWVudCwgc2hhZG93RE9NIHJvb3QpIG9mIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IG5vZGVcbiAqIEByZXR1cm5zIHtFbGVtZW50fSByb290IG5vZGVcbiAqL1xuZnVuY3Rpb24gZ2V0Um9vdChub2RlKSB7XG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDFcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudDJcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBjb21tb24gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBlbGVtZW50Mikge1xuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICAvLyBIZXJlIHdlIG1ha2Ugc3VyZSB0byBnaXZlIGFzIFwic3RhcnRcIiB0aGUgZWxlbWVudCB0aGF0IGNvbWVzIGZpcnN0IGluIHRoZSBET01cbiAgdmFyIG9yZGVyID0gZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XG4gIHZhciBzdGFydCA9IG9yZGVyID8gZWxlbWVudDEgOiBlbGVtZW50MjtcbiAgdmFyIGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcblxuICAvLyBHZXQgY29tbW9uIGFuY2VzdG9yIGNvbnRhaW5lclxuICB2YXIgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICByYW5nZS5zZXRTdGFydChzdGFydCwgMCk7XG4gIHJhbmdlLnNldEVuZChlbmQsIDApO1xuICB2YXIgY29tbW9uQW5jZXN0b3JDb250YWluZXIgPSByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lcjtcblxuICAvLyBCb3RoIG5vZGVzIGFyZSBpbnNpZGUgI2RvY3VtZW50XG5cbiAgaWYgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJiBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgfHwgc3RhcnQuY29udGFpbnMoZW5kKSkge1xuICAgIGlmIChpc09mZnNldENvbnRhaW5lcihjb21tb25BbmNlc3RvckNvbnRhaW5lcikpIHtcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcbiAgdmFyIGVsZW1lbnQxcm9vdCA9IGdldFJvb3QoZWxlbWVudDEpO1xuICBpZiAoZWxlbWVudDFyb290Lmhvc3QpIHtcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MXJvb3QuaG9zdCwgZWxlbWVudDIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBnZXRSb290KGVsZW1lbnQyKS5ob3N0KTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIHNjcm9sbCB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBpbiB0aGUgZ2l2ZW4gc2lkZSAodG9wIGFuZCBsZWZ0KVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge1N0cmluZ30gc2lkZSBgdG9wYCBvciBgbGVmdGBcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFtb3VudCBvZiBzY3JvbGxlZCBwaXhlbHNcbiAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsKGVsZW1lbnQpIHtcbiAgdmFyIHNpZGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICd0b3AnO1xuXG4gIHZhciB1cHBlclNpZGUgPSBzaWRlID09PSAndG9wJyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICB2YXIgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgdmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBodG1sO1xuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFt1cHBlclNpZGVdO1xufVxuXG4vKlxuICogU3VtIG9yIHN1YnRyYWN0IHRoZSBlbGVtZW50IHNjcm9sbCB2YWx1ZXMgKGxlZnQgYW5kIHRvcCkgZnJvbSBhIGdpdmVuIHJlY3Qgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdCAtIFJlY3Qgb2JqZWN0IHlvdSB3YW50IHRvIGNoYW5nZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBlbGVtZW50IGZyb20gdGhlIGZ1bmN0aW9uIHJlYWRzIHRoZSBzY3JvbGwgdmFsdWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHN1YnRyYWN0IC0gc2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gc3VidHJhY3QgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjdCAtIFRoZSBtb2RpZmllciByZWN0IG9iamVjdFxuICovXG5mdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3QsIGVsZW1lbnQpIHtcbiAgdmFyIHN1YnRyYWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgdmFyIHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcbiAgdmFyIG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XG4gIHJlY3QudG9wICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0ICogbW9kaWZpZXI7XG4gIHJldHVybiByZWN0O1xufVxuXG4vKlxuICogSGVscGVyIHRvIGRldGVjdCBib3JkZXJzIG9mIGEgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZXNcbiAqIFJlc3VsdCBvZiBgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5YCBvbiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IGF4aXMgLSBgeGAgb3IgYHlgXG4gKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlcnMgLSBUaGUgYm9yZGVycyBzaXplIG9mIHRoZSBnaXZlbiBheGlzXG4gKi9cblxuZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCBheGlzKSB7XG4gIHZhciBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xuICB2YXIgc2lkZUIgPSBzaWRlQSA9PT0gJ0xlZnQnID8gJ1JpZ2h0JyA6ICdCb3R0b20nO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVBICsgJ1dpZHRoJ10sIDEwKSArIHBhcnNlRmxvYXQoc3R5bGVzWydib3JkZXInICsgc2lkZUIgKyAnV2lkdGgnXSwgMTApO1xufVxuXG5mdW5jdGlvbiBnZXRTaXplKGF4aXMsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGJvZHlbJ29mZnNldCcgKyBheGlzXSwgYm9keVsnc2Nyb2xsJyArIGF4aXNdLCBodG1sWydjbGllbnQnICsgYXhpc10sIGh0bWxbJ29mZnNldCcgKyBheGlzXSwgaHRtbFsnc2Nyb2xsJyArIGF4aXNdLCBpc0lFKDEwKSA/IHBhcnNlSW50KGh0bWxbJ29mZnNldCcgKyBheGlzXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCcpXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnKV0pIDogMCk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50KSB7XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSlcbiAgfTtcbn1cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG5cblxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvZmZzZXRzLCB7XG4gICAgcmlnaHQ6IG9mZnNldHMubGVmdCArIG9mZnNldHMud2lkdGgsXG4gICAgYm90dG9tOiBvZmZzZXRzLnRvcCArIG9mZnNldHMuaGVpZ2h0XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IGNsaWVudCByZWN0XG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0ge307XG5cbiAgLy8gSUUxMCAxMCBGSVg6IFBsZWFzZSwgZG9uJ3QgYXNrLCB0aGUgZWxlbWVudCBpc24ndFxuICAvLyBjb25zaWRlcmVkIGluIERPTSBpbiBzb21lIGNpcmN1bXN0YW5jZXMuLi5cbiAgLy8gVGhpcyBpc24ndCByZXByb2R1Y2libGUgaW4gSUUxMCBjb21wYXRpYmlsaXR5IG1vZGUgb2YgSUUxMVxuICB0cnkge1xuICAgIGlmIChpc0lFKDEwKSkge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICByZWN0LnRvcCArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdDtcbiAgICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG4gIH07XG5cbiAgLy8gc3VidHJhY3Qgc2Nyb2xsYmFyIHNpemUgZnJvbSBzaXplc1xuICB2YXIgc2l6ZXMgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcgPyBnZXRXaW5kb3dTaXplcyhlbGVtZW50Lm93bmVyRG9jdW1lbnQpIDoge307XG4gIHZhciB3aWR0aCA9IHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LnJpZ2h0IC0gcmVzdWx0LmxlZnQ7XG4gIHZhciBoZWlnaHQgPSBzaXplcy5oZWlnaHQgfHwgZWxlbWVudC5jbGllbnRIZWlnaHQgfHwgcmVzdWx0LmJvdHRvbSAtIHJlc3VsdC50b3A7XG5cbiAgdmFyIGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xuICB2YXIgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xuXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXG4gIC8vIHdlIG1ha2UgdGhpcyBjaGVjayBjb25kaXRpb25hbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xuICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gICAgaG9yaXpTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneCcpO1xuICAgIHZlcnRTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneScpO1xuXG4gICAgcmVzdWx0LndpZHRoIC09IGhvcml6U2Nyb2xsYmFyO1xuICAgIHJlc3VsdC5oZWlnaHQgLT0gdmVydFNjcm9sbGJhcjtcbiAgfVxuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShjaGlsZHJlbiwgcGFyZW50KSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICB2YXIgaXNJRTEwID0gaXNJRSgxMCk7XG4gIHZhciBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgdmFyIGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIHZhciBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgdmFyIGJvcmRlclRvcFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyVG9wV2lkdGgsIDEwKTtcbiAgdmFyIGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCwgMTApO1xuXG4gIC8vIEluIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgZml4ZWQsIHdlIG11c3QgaWdub3JlIG5lZ2F0aXZlIHNjcm9sbCBpbiBvZmZzZXQgY2FsY1xuICBpZiAoZml4ZWRQb3NpdGlvbiAmJiBpc0hUTUwpIHtcbiAgICBwYXJlbnRSZWN0LnRvcCA9IE1hdGgubWF4KHBhcmVudFJlY3QudG9wLCAwKTtcbiAgICBwYXJlbnRSZWN0LmxlZnQgPSBNYXRoLm1heChwYXJlbnRSZWN0LmxlZnQsIDApO1xuICB9XG4gIHZhciBvZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XG4gICAgdG9wOiBjaGlsZHJlblJlY3QudG9wIC0gcGFyZW50UmVjdC50b3AgLSBib3JkZXJUb3BXaWR0aCxcbiAgICBsZWZ0OiBjaGlsZHJlblJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCAtIGJvcmRlckxlZnRXaWR0aCxcbiAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxuICAgIGhlaWdodDogY2hpbGRyZW5SZWN0LmhlaWdodFxuICB9KTtcbiAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSAwO1xuICBvZmZzZXRzLm1hcmdpbkxlZnQgPSAwO1xuXG4gIC8vIFN1YnRyYWN0IG1hcmdpbnMgb2YgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgaXQncyBiZWluZyB1c2VkIGFzIHBhcmVudFxuICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcbiAgLy8gZGlmZmVyZW50bHkgd2hlbiBtYXJnaW5zIGFyZSBhcHBsaWVkIHRvIGl0LiBUaGUgbWFyZ2lucyBhcmUgaW5jbHVkZWQgaW5cbiAgLy8gdGhlIGJveCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBpbiB0aGUgb3RoZXIgY2FzZXMgbm90LlxuICBpZiAoIWlzSUUxMCAmJiBpc0hUTUwpIHtcbiAgICB2YXIgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wLCAxMCk7XG4gICAgdmFyIG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0LCAxMCk7XG5cbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLmxlZnQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XG5cbiAgICAvLyBBdHRhY2ggbWFyZ2luVG9wIGFuZCBtYXJnaW5MZWZ0IGJlY2F1c2UgaW4gc29tZSBjaXJjdW1zdGFuY2VzIHdlIG1heSBuZWVkIHRoZW1cbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xuICB9XG5cbiAgaWYgKGlzSUUxMCAmJiAhZml4ZWRQb3NpdGlvbiA/IHBhcmVudC5jb250YWlucyhzY3JvbGxQYXJlbnQpIDogcGFyZW50ID09PSBzY3JvbGxQYXJlbnQgJiYgc2Nyb2xsUGFyZW50Lm5vZGVOYW1lICE9PSAnQk9EWScpIHtcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShlbGVtZW50KSB7XG4gIHZhciBleGNsdWRlU2Nyb2xsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcbiAgdmFyIHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XG4gIHZhciBoZWlnaHQgPSBNYXRoLm1heChodG1sLmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuXG4gIHZhciBzY3JvbGxUb3AgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sKSA6IDA7XG4gIHZhciBzY3JvbGxMZWZ0ID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCwgJ2xlZnQnKSA6IDA7XG5cbiAgdmFyIG9mZnNldCA9IHtcbiAgICB0b3A6IHNjcm9sbFRvcCAtIHJlbGF0aXZlT2Zmc2V0LnRvcCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpblRvcCxcbiAgICBsZWZ0OiBzY3JvbGxMZWZ0IC0gcmVsYXRpdmVPZmZzZXQubGVmdCArIHJlbGF0aXZlT2Zmc2V0Lm1hcmdpbkxlZnQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG5cbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmaXhlZCBvciBpcyBpbnNpZGUgYSBmaXhlZCBwYXJlbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBjdXN0b21Db250YWluZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG8gXCJpc0ZpeGVkP1wiXG4gKi9cbmZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudCkge1xuICB2YXIgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG4gIGlmICghcGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gaXNGaXhlZChwYXJlbnROb2RlKTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtFbGVtZW50fSBmaXJzdCB0cmFuc2Zvcm1lZCBwYXJlbnQgb3IgZG9jdW1lbnRFbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0lFKCkpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG4gIHZhciBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgd2hpbGUgKGVsICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScpIHtcbiAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbn1cblxuLyoqXG4gKiBDb21wdXRlZCB0aGUgYm91bmRhcmllcyBsaW1pdHMgYW5kIHJldHVybiB0aGVtXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IHBhZGRpbmdcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50IC0gRWxlbWVudCB1c2VkIHRvIGRlZmluZSB0aGUgYm91bmRhcmllc1xuICogQHBhcmFtIHtCb29sZWFufSBmaXhlZFBvc2l0aW9uIC0gSXMgaW4gZml4ZWQgcG9zaXRpb24gbW9kZVxuICogQHJldHVybnMge09iamVjdH0gQ29vcmRpbmF0ZXMgb2YgdGhlIGJvdW5kYXJpZXNcbiAqL1xuZnVuY3Rpb24gZ2V0Qm91bmRhcmllcyhwb3BwZXIsIHJlZmVyZW5jZSwgcGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgdmFyIGZpeGVkUG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXG5cbiAgdmFyIGJvdW5kYXJpZXMgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCByZWZlcmVuY2UpO1xuXG4gIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXG4gIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgIGJvdW5kYXJpZXMgPSBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUob2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBIYW5kbGUgb3RoZXIgY2FzZXMgYmFzZWQgb24gRE9NIGVsZW1lbnQgdXNlZCBhcyBib3VuZGFyaWVzXG4gICAgdmFyIGJvdW5kYXJpZXNOb2RlID0gdm9pZCAwO1xuICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUocmVmZXJlbmNlKSk7XG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnd2luZG93Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBwb3BwZXIub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIG9mZnNldHMgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoYm91bmRhcmllc05vZGUsIG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XG5cbiAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cbiAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdIVE1MJyAmJiAhaXNGaXhlZChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICB2YXIgX2dldFdpbmRvd1NpemVzID0gZ2V0V2luZG93U2l6ZXMocG9wcGVyLm93bmVyRG9jdW1lbnQpLFxuICAgICAgICAgIGhlaWdodCA9IF9nZXRXaW5kb3dTaXplcy5oZWlnaHQsXG4gICAgICAgICAgd2lkdGggPSBfZ2V0V2luZG93U2l6ZXMud2lkdGg7XG5cbiAgICAgIGJvdW5kYXJpZXMudG9wICs9IG9mZnNldHMudG9wIC0gb2Zmc2V0cy5tYXJnaW5Ub3A7XG4gICAgICBib3VuZGFyaWVzLmJvdHRvbSA9IGhlaWdodCArIG9mZnNldHMudG9wO1xuICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSB3aWR0aCArIG9mZnNldHMubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXG4gICAgICBib3VuZGFyaWVzID0gb2Zmc2V0cztcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgcGFkZGluZ3NcbiAgcGFkZGluZyA9IHBhZGRpbmcgfHwgMDtcbiAgdmFyIGlzUGFkZGluZ051bWJlciA9IHR5cGVvZiBwYWRkaW5nID09PSAnbnVtYmVyJztcbiAgYm91bmRhcmllcy5sZWZ0ICs9IGlzUGFkZGluZ051bWJlciA/IHBhZGRpbmcgOiBwYWRkaW5nLmxlZnQgfHwgMDtcbiAgYm91bmRhcmllcy50b3AgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcudG9wIHx8IDA7XG4gIGJvdW5kYXJpZXMucmlnaHQgLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcucmlnaHQgfHwgMDtcbiAgYm91bmRhcmllcy5ib3R0b20gLT0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcuYm90dG9tIHx8IDA7XG5cbiAgcmV0dXJuIGJvdW5kYXJpZXM7XG59XG5cbmZ1bmN0aW9uIGdldEFyZWEoX3JlZikge1xuICB2YXIgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xufVxuXG4vKipcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcbiAqIGF2YWlsYWJsZSBzcGFjZS5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHBsYWNlbWVudCwgcmVmUmVjdCwgcG9wcGVyLCByZWZlcmVuY2UsIGJvdW5kYXJpZXNFbGVtZW50KSB7XG4gIHZhciBwYWRkaW5nID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgJiYgYXJndW1lbnRzWzVdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbNV0gOiAwO1xuXG4gIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xuICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMocG9wcGVyLCByZWZlcmVuY2UsIHBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50KTtcblxuICB2YXIgcmVjdHMgPSB7XG4gICAgdG9wOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuYm90dG9tIC0gcmVmUmVjdC5ib3R0b21cbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIHdpZHRoOiByZWZSZWN0LmxlZnQgLSBib3VuZGFyaWVzLmxlZnQsXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XG4gICAgfVxuICB9O1xuXG4gIHZhciBzb3J0ZWRBcmVhcyA9IE9iamVjdC5rZXlzKHJlY3RzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBrZXk6IGtleVxuICAgIH0sIHJlY3RzW2tleV0sIHtcbiAgICAgIGFyZWE6IGdldEFyZWEocmVjdHNba2V5XSlcbiAgICB9KTtcbiAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLmFyZWEgLSBhLmFyZWE7XG4gIH0pO1xuXG4gIHZhciBmaWx0ZXJlZEFyZWFzID0gc29ydGVkQXJlYXMuZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciB3aWR0aCA9IF9yZWYyLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBfcmVmMi5oZWlnaHQ7XG4gICAgcmV0dXJuIHdpZHRoID49IHBvcHBlci5jbGllbnRXaWR0aCAmJiBoZWlnaHQgPj0gcG9wcGVyLmNsaWVudEhlaWdodDtcbiAgfSk7XG5cbiAgdmFyIGNvbXB1dGVkUGxhY2VtZW50ID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwID8gZmlsdGVyZWRBcmVhc1swXS5rZXkgOiBzb3J0ZWRBcmVhc1swXS5rZXk7XG5cbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyAnLScgKyB2YXJpYXRpb24gOiAnJyk7XG59XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGZpeGVkUG9zaXRpb24gLSBpcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5mdW5jdGlvbiBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblxuICB2YXIgY29tbW9uT2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQocG9wcGVyKSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQocG9wcGVyLCByZWZlcmVuY2UpO1xuICByZXR1cm4gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKHJlZmVyZW5jZSwgY29tbW9uT2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG91dGVyIHNpemVzIG9mIHRoZSBnaXZlbiBlbGVtZW50IChvZmZzZXQgc2l6ZSArIG1hcmdpbnMpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG9iamVjdCBjb250YWluaW5nIHdpZHRoIGFuZCBoZWlnaHQgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgdmFyIHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCB8fCAwKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSB8fCAwKTtcbiAgdmFyIHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0IHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQgfHwgMCk7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGggKyB5LFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQgKyB4XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgb2YgdGhlIGdpdmVuIG9uZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudFxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnRcbiAqL1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHZhciBoYXNoID0geyBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwb3NpdGlvbiAtIENTUyBwb3NpdGlvbiB0aGUgUG9wcGVyIHdpbGwgZ2V0IGFwcGxpZWRcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIHRoZSBwb3BwZXIgZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHMgLSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgKHRoZSBwb3BwZXIgd2lsbCBiZSByZWxhdGl2ZSB0byB0aGlzKVxuICogQHBhcmFtIHtTdHJpbmd9IHBsYWNlbWVudCAtIG9uZSBvZiB0aGUgdmFsaWQgcGxhY2VtZW50IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IHBvcHBlck9mZnNldHMgLSBBbiBvYmplY3QgY29udGFpbmluZyB0aGUgb2Zmc2V0cyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlclxuICovXG5mdW5jdGlvbiBnZXRQb3BwZXJPZmZzZXRzKHBvcHBlciwgcmVmZXJlbmNlT2Zmc2V0cywgcGxhY2VtZW50KSB7XG4gIHBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIC8vIEdldCBwb3BwZXIgbm9kZSBzaXplc1xuICB2YXIgcG9wcGVyUmVjdCA9IGdldE91dGVyU2l6ZXMocG9wcGVyKTtcblxuICAvLyBBZGQgcG9zaXRpb24sIHdpZHRoIGFuZCBoZWlnaHQgdG8gb3VyIG9mZnNldHMgb2JqZWN0XG4gIHZhciBwb3BwZXJPZmZzZXRzID0ge1xuICAgIHdpZHRoOiBwb3BwZXJSZWN0LndpZHRoLFxuICAgIGhlaWdodDogcG9wcGVyUmVjdC5oZWlnaHRcbiAgfTtcblxuICAvLyBkZXBlbmRpbmcgYnkgdGhlIHBvcHBlciBwbGFjZW1lbnQgd2UgaGF2ZSB0byBjb21wdXRlIGl0cyBvZmZzZXRzIHNsaWdodGx5IGRpZmZlcmVudGx5XG4gIHZhciBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgdmFyIG1haW5TaWRlID0gaXNIb3JpeiA/ICd0b3AnIDogJ2xlZnQnO1xuICB2YXIgc2Vjb25kYXJ5U2lkZSA9IGlzSG9yaXogPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgdmFyIHNlY29uZGFyeU1lYXN1cmVtZW50ID0gIWlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgcG9wcGVyT2Zmc2V0c1ttYWluU2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW21haW5TaWRlXSArIHJlZmVyZW5jZU9mZnNldHNbbWVhc3VyZW1lbnRdIC8gMiAtIHBvcHBlclJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcbiAgaWYgKHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZSkge1xuICAgIHBvcHBlck9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPSByZWZlcmVuY2VPZmZzZXRzW3NlY29uZGFyeVNpZGVdIC0gcG9wcGVyUmVjdFtzZWNvbmRhcnlNZWFzdXJlbWVudF07XG4gIH0gZWxzZSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQoc2Vjb25kYXJ5U2lkZSldO1xuICB9XG5cbiAgcmV0dXJuIHBvcHBlck9mZnNldHM7XG59XG5cbi8qKlxuICogTWltaWNzIHRoZSBgZmluZGAgbWV0aG9kIG9mIEFycmF5XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmZ1bmN0aW9uIGZpbmQoYXJyLCBjaGVjaykge1xuICAvLyB1c2UgbmF0aXZlIGZpbmQgaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZCkge1xuICAgIHJldHVybiBhcnIuZmluZChjaGVjayk7XG4gIH1cblxuICAvLyB1c2UgYGZpbHRlcmAgdG8gb2J0YWluIHRoZSBzYW1lIGJlaGF2aW9yIG9mIGBmaW5kYFxuICByZXR1cm4gYXJyLmZpbHRlcihjaGVjaylbMF07XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hpbmcgb2JqZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FycmF5fSBhcnJcbiAqIEBhcmd1bWVudCBwcm9wXG4gKiBAYXJndW1lbnQgdmFsdWVcbiAqIEByZXR1cm5zIGluZGV4IG9yIC0xXG4gKi9cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHByb3AsIHZhbHVlKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZEluZGV4IGlmIHN1cHBvcnRlZFxuICBpZiAoQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xuICAgIHJldHVybiBhcnIuZmluZEluZGV4KGZ1bmN0aW9uIChjdXIpIHtcbiAgICAgIHJldHVybiBjdXJbcHJvcF0gPT09IHZhbHVlO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gdXNlIGBmaW5kYCArIGBpbmRleE9mYCBpZiBgZmluZEluZGV4YCBpc24ndCBzdXBwb3J0ZWRcbiAgdmFyIG1hdGNoID0gZmluZChhcnIsIGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqW3Byb3BdID09PSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiBhcnIuaW5kZXhPZihtYXRjaCk7XG59XG5cbi8qKlxuICogTG9vcCB0cm91Z2ggdGhlIGxpc3Qgb2YgbW9kaWZpZXJzIGFuZCBydW4gdGhlbSBpbiBvcmRlcixcbiAqIGVhY2ggb2YgdGhlbSB3aWxsIHRoZW4gZWRpdCB0aGUgZGF0YSBvYmplY3QuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICogQHBhcmFtIHtTdHJpbmd9IGVuZHMgLSBPcHRpb25hbCBtb2RpZmllciBuYW1lIHVzZWQgYXMgc3RvcHBlclxuICogQHJldHVybnMge2RhdGFPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHJ1bk1vZGlmaWVycyhtb2RpZmllcnMsIGRhdGEsIGVuZHMpIHtcbiAgdmFyIG1vZGlmaWVyc1RvUnVuID0gZW5kcyA9PT0gdW5kZWZpbmVkID8gbW9kaWZpZXJzIDogbW9kaWZpZXJzLnNsaWNlKDAsIGZpbmRJbmRleChtb2RpZmllcnMsICduYW1lJywgZW5kcykpO1xuXG4gIG1vZGlmaWVyc1RvUnVuLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKG1vZGlmaWVyWydmdW5jdGlvbiddKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgICAgY29uc29sZS53YXJuKCdgbW9kaWZpZXIuZnVuY3Rpb25gIGlzIGRlcHJlY2F0ZWQsIHVzZSBgbW9kaWZpZXIuZm5gIScpO1xuICAgIH1cbiAgICB2YXIgZm4gPSBtb2RpZmllclsnZnVuY3Rpb24nXSB8fCBtb2RpZmllci5mbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICBpZiAobW9kaWZpZXIuZW5hYmxlZCAmJiBpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgLy8gQWRkIHByb3BlcnRpZXMgdG8gb2Zmc2V0cyB0byBtYWtlIHRoZW0gYSBjb21wbGV0ZSBjbGllbnRSZWN0IG9iamVjdFxuICAgICAgLy8gd2UgZG8gdGhpcyBiZWZvcmUgZWFjaCBtb2RpZmllciB0byBtYWtlIHN1cmUgdGhlIHByZXZpb3VzIG9uZSBkb2Vzbid0XG4gICAgICAvLyBtZXNzIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMucG9wcGVyKTtcbiAgICAgIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UpO1xuXG4gICAgICBkYXRhID0gZm4oZGF0YSwgbW9kaWZpZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcHBlciwgY29tcHV0aW5nIHRoZSBuZXcgb2Zmc2V0cyBhbmQgYXBwbHlpbmdcbiAqIHRoZSBuZXcgc3R5bGUuPGJyIC8+XG4gKiBQcmVmZXIgYHNjaGVkdWxlVXBkYXRlYCBvdmVyIGB1cGRhdGVgIGJlY2F1c2Ugb2YgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gdXBkYXRlKCkge1xuICAvLyBpZiBwb3BwZXIgaXMgZGVzdHJveWVkLCBkb24ndCBwZXJmb3JtIGFueSBmdXJ0aGVyIHVwZGF0ZVxuICBpZiAodGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBkYXRhID0ge1xuICAgIGluc3RhbmNlOiB0aGlzLFxuICAgIHN0eWxlczoge30sXG4gICAgYXJyb3dTdHlsZXM6IHt9LFxuICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgIGZsaXBwZWQ6IGZhbHNlLFxuICAgIG9mZnNldHM6IHt9XG4gIH07XG5cbiAgLy8gY29tcHV0ZSByZWZlcmVuY2UgZWxlbWVudCBvZmZzZXRzXG4gIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHRoaXMuc3RhdGUsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIGNvbXB1dGUgYXV0byBwbGFjZW1lbnQsIHN0b3JlIHBsYWNlbWVudCBpbnNpZGUgdGhlIGRhdGEgb2JqZWN0LFxuICAvLyBtb2RpZmllcnMgd2lsbCBiZSBhYmxlIHRvIGVkaXQgYHBsYWNlbWVudGAgaWYgbmVlZGVkXG4gIC8vIGFuZCByZWZlciB0byBvcmlnaW5hbFBsYWNlbWVudCB0byBrbm93IHRoZSBvcmlnaW5hbCB2YWx1ZVxuICBkYXRhLnBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KHRoaXMub3B0aW9ucy5wbGFjZW1lbnQsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIHRoaXMucG9wcGVyLCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLm1vZGlmaWVycy5mbGlwLmJvdW5kYXJpZXNFbGVtZW50LCB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAucGFkZGluZyk7XG5cbiAgLy8gc3RvcmUgdGhlIGNvbXB1dGVkIHBsYWNlbWVudCBpbnNpZGUgYG9yaWdpbmFsUGxhY2VtZW50YFxuICBkYXRhLm9yaWdpbmFsUGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG5cbiAgZGF0YS5wb3NpdGlvbkZpeGVkID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQ7XG5cbiAgLy8gY29tcHV0ZSB0aGUgcG9wcGVyIG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IGdldFBvcHBlck9mZnNldHModGhpcy5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyLnBvc2l0aW9uID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJztcblxuICAvLyBydW4gdGhlIG1vZGlmaWVyc1xuICBkYXRhID0gcnVuTW9kaWZpZXJzKHRoaXMubW9kaWZpZXJzLCBkYXRhKTtcblxuICAvLyB0aGUgZmlyc3QgYHVwZGF0ZWAgd2lsbCBjYWxsIGBvbkNyZWF0ZWAgY2FsbGJhY2tcbiAgLy8gdGhlIG90aGVyIG9uZXMgd2lsbCBjYWxsIGBvblVwZGF0ZWAgY2FsbGJhY2tcbiAgaWYgKCF0aGlzLnN0YXRlLmlzQ3JlYXRlZCkge1xuICAgIHRoaXMuc3RhdGUuaXNDcmVhdGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9wdGlvbnMub25DcmVhdGUoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5vcHRpb25zLm9uVXBkYXRlKGRhdGEpO1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIHVzZWQgdG8ga25vdyBpZiB0aGUgZ2l2ZW4gbW9kaWZpZXIgaXMgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyRW5hYmxlZChtb2RpZmllcnMsIG1vZGlmaWVyTmFtZSkge1xuICByZXR1cm4gbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgICAgZW5hYmxlZCA9IF9yZWYuZW5hYmxlZDtcbiAgICByZXR1cm4gZW5hYmxlZCAmJiBuYW1lID09PSBtb2RpZmllck5hbWU7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgcHJlZml4ZWQgc3VwcG9ydGVkIHByb3BlcnR5IG5hbWVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eSAoY2FtZWxDYXNlKVxuICogQHJldHVybnMge1N0cmluZ30gcHJlZml4ZWQgcHJvcGVydHkgKGNhbWVsQ2FzZSBvciBQYXNjYWxDYXNlLCBkZXBlbmRpbmcgb24gdGhlIHZlbmRvciBwcmVmaXgpXG4gKi9cbmZ1bmN0aW9uIGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZShwcm9wZXJ0eSkge1xuICB2YXIgcHJlZml4ZXMgPSBbZmFsc2UsICdtcycsICdXZWJraXQnLCAnTW96JywgJ08nXTtcbiAgdmFyIHVwcGVyUHJvcCA9IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgdG9DaGVjayA9IHByZWZpeCA/ICcnICsgcHJlZml4ICsgdXBwZXJQcm9wIDogcHJvcGVydHk7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5LnN0eWxlW3RvQ2hlY2tdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRvQ2hlY2s7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIERlc3Ryb3lzIHRoZSBwb3BwZXIuXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIHRoaXMuc3RhdGUuaXNEZXN0cm95ZWQgPSB0cnVlO1xuXG4gIC8vIHRvdWNoIERPTSBvbmx5IGlmIGBhcHBseVN0eWxlYCBtb2RpZmllciBpcyBlbmFibGVkXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZCh0aGlzLm1vZGlmaWVycywgJ2FwcGx5U3R5bGUnKSkge1xuICAgIHRoaXMucG9wcGVyLnJlbW92ZUF0dHJpYnV0ZSgneC1wbGFjZW1lbnQnKTtcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnRvcCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmxlZnQgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZS5yaWdodCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLmJvdHRvbSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLndpbGxDaGFuZ2UgPSAnJztcbiAgICB0aGlzLnBvcHBlci5zdHlsZVtnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpXSA9ICcnO1xuICB9XG5cbiAgdGhpcy5kaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAvLyByZW1vdmUgdGhlIHBvcHBlciBpZiB1c2VyIGV4cGxpY2l0eSBhc2tlZCBmb3IgdGhlIGRlbGV0aW9uIG9uIGRlc3Ryb3lcbiAgLy8gZG8gbm90IHVzZSBgcmVtb3ZlYCBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0IGl0XG4gIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlT25EZXN0cm95KSB7XG4gICAgdGhpcy5wb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHBlcik7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogR2V0IHRoZSB3aW5kb3cgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtXaW5kb3d9XG4gKi9cbmZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtZW50KSB7XG4gIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxQYXJlbnQsIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cykge1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50Lm5vZGVOYW1lID09PSAnQk9EWSc7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBzY3JvbGxQYXJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHNjcm9sbFBhcmVudDtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgaWYgKCFpc0JvZHkpIHtcbiAgICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoZ2V0U2Nyb2xsUGFyZW50KHRhcmdldC5wYXJlbnROb2RlKSwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKTtcbiAgfVxuICBzY3JvbGxQYXJlbnRzLnB1c2godGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBTZXR1cCBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBvcHRpb25zLCBzdGF0ZSwgdXBkYXRlQm91bmQpIHtcbiAgLy8gUmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBzdGF0ZS51cGRhdGVCb3VuZCA9IHVwZGF0ZUJvdW5kO1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIC8vIFNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICB2YXIgc2Nyb2xsRWxlbWVudCA9IGdldFNjcm9sbFBhcmVudChyZWZlcmVuY2UpO1xuICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsRWxlbWVudCwgJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kLCBzdGF0ZS5zY3JvbGxQYXJlbnRzKTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IHNjcm9sbEVsZW1lbnQ7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSB0cnVlO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIGFkZCByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgc3RhcnQgcmVjYWxjdWxhdGluZ1xuICogcG9zaXRpb24gb2YgdGhlIHBvcHBlciBlbGVtZW50IHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKCF0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICB0aGlzLnN0YXRlID0gc2V0dXBFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLCB0aGlzLnN0YXRlLCB0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBzdGF0ZSkge1xuICAvLyBSZW1vdmUgcmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG5cbiAgLy8gUmVtb3ZlIHNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG4gIH0pO1xuXG4gIC8vIFJlc2V0IHN0YXRlXG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gbnVsbDtcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IFtdO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGZhbHNlO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogSXQgd2lsbCByZW1vdmUgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHdvbid0IHJlY2FsY3VsYXRlIHBvcHBlciBwb3NpdGlvblxuICogd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuIEl0IGFsc28gd29uJ3QgdHJpZ2dlciBgb25VcGRhdGVgIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG5cbi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09IC0xICYmIGlzTnVtZXJpYyhzdHlsZXNbcHJvcF0pKSB7XG4gICAgICB1bml0ID0gJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXSArIHVuaXQ7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEpIHtcbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgLy8gQmUgYXdhcmUsIG1vZGlmaWVycyBjb3VsZCBvdmVycmlkZSB0aGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBwcmV2aW91c1xuICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5hdHRyaWJ1dGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgZGVmaW5lZCBhbmQgYXJyb3dTdHlsZXMgaGFzIHNvbWUgcHJvcGVydGllc1xuICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUG9wcGVyLmpzIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBzdGF0ZSkge1xuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgdmFyIHJlZmVyZW5jZU9mZnNldHMgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgdmFyIHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KG9wdGlvbnMucGxhY2VtZW50LCByZWZlcmVuY2VPZmZzZXRzLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG5cbiAgLy8gQXBwbHkgYHBvc2l0aW9uYCB0byBwb3BwZXIgYmVmb3JlIGFueXRoaW5nIGVsc2UgYmVjYXVzZVxuICAvLyB3aXRob3V0IHRoZSBwb3NpdGlvbiBhcHBsaWVkIHdlIGNhbid0IGd1YXJhbnRlZSBjb3JyZWN0IGNvbXB1dGF0aW9uc1xuICBzZXRTdHlsZXMocG9wcGVyLCB7IHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gc2hvdWxkUm91bmQgLSBJZiB0aGUgb2Zmc2V0cyBzaG91bGQgYmUgcm91bmRlZCBhdCBhbGxcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwb3BwZXIncyBwb3NpdGlvbiBvZmZzZXRzIHJvdW5kZWRcbiAqXG4gKiBUaGUgdGFsZSBvZiBwaXhlbC1wZXJmZWN0IHBvc2l0aW9uaW5nLiBJdCdzIHN0aWxsIG5vdCAxMDAlIHBlcmZlY3QsIGJ1dCBhc1xuICogZ29vZCBhcyBpdCBjYW4gYmUgd2l0aGluIHJlYXNvbi5cbiAqIERpc2N1c3Npb24gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvcHVsbC83MTVcbiAqXG4gKiBMb3cgRFBJIHNjcmVlbnMgY2F1c2UgYSBwb3BwZXIgdG8gYmUgYmx1cnJ5IGlmIG5vdCB1c2luZyBmdWxsIHBpeGVscyAoU2FmYXJpXG4gKiBhcyB3ZWxsIG9uIEhpZ2ggRFBJIHNjcmVlbnMpLlxuICpcbiAqIEZpcmVmb3ggcHJlZmVycyBubyByb3VuZGluZyBmb3IgcG9zaXRpb25pbmcgYW5kIGRvZXMgbm90IGhhdmUgYmx1cnJpbmVzcyBvblxuICogaGlnaCBEUEkgc2NyZWVucy5cbiAqXG4gKiBPbmx5IGhvcml6b250YWwgcGxhY2VtZW50IGFuZCBsZWZ0L3JpZ2h0IHZhbHVlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHNob3VsZFJvdW5kKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICAgIGZsb29yID0gTWF0aC5mbG9vcjtcblxuICB2YXIgbm9Sb3VuZCA9IGZ1bmN0aW9uIG5vUm91bmQodikge1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIHZhciByZWZlcmVuY2VXaWR0aCA9IHJvdW5kKHJlZmVyZW5jZS53aWR0aCk7XG4gIHZhciBwb3BwZXJXaWR0aCA9IHJvdW5kKHBvcHBlci53aWR0aCk7XG5cbiAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBpc1ZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LmluZGV4T2YoJy0nKSAhPT0gLTE7XG4gIHZhciBzYW1lV2lkdGhQYXJpdHkgPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IHBvcHBlcldpZHRoICUgMjtcbiAgdmFyIGJvdGhPZGRXaWR0aCA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gMSAmJiBwb3BwZXJXaWR0aCAlIDIgPT09IDE7XG5cbiAgdmFyIGhvcml6b250YWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogaXNWZXJ0aWNhbCB8fCBpc1ZhcmlhdGlvbiB8fCBzYW1lV2lkdGhQYXJpdHkgPyByb3VuZCA6IGZsb29yO1xuICB2YXIgdmVydGljYWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogcm91bmQ7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBob3Jpem9udGFsVG9JbnRlZ2VyKGJvdGhPZGRXaWR0aCAmJiAhaXNWYXJpYXRpb24gJiYgc2hvdWxkUm91bmQgPyBwb3BwZXIubGVmdCAtIDEgOiBwb3BwZXIubGVmdCksXG4gICAgdG9wOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIudG9wKSxcbiAgICBib3R0b206IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci5ib3R0b20pLFxuICAgIHJpZ2h0OiBob3Jpem9udGFsVG9JbnRlZ2VyKHBvcHBlci5yaWdodClcbiAgfTtcbn1cblxudmFyIGlzRmlyZWZveCA9IGlzQnJvd3NlciAmJiAvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIHZhciB4ID0gb3B0aW9ucy54LFxuICAgICAgeSA9IG9wdGlvbnMueTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgLy8gUmVtb3ZlIHRoaXMgbGVnYWN5IHN1cHBvcnQgaW4gUG9wcGVyLmpzIHYyXG5cbiAgdmFyIGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSc7XG4gIH0pLmdwdUFjY2VsZXJhdGlvbjtcbiAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzIScpO1xuICB9XG4gIHZhciBncHVBY2NlbGVyYXRpb24gPSBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuXG4gIC8vIFN0eWxlc1xuICB2YXIgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb25cbiAgfTtcblxuICB2YXIgb2Zmc2V0cyA9IGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMiB8fCAhaXNGaXJlZm94KTtcblxuICB2YXIgc2lkZUEgPSB4ID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHZhciBzaWRlQiA9IHkgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gIC8vIGlmIGdwdUFjY2VsZXJhdGlvbiBpcyBzZXQgdG8gYHRydWVgIGFuZCB0cmFuc2Zvcm0gaXMgc3VwcG9ydGVkLFxuICAvLyAgd2UgdXNlIGB0cmFuc2xhdGUzZGAgdG8gYXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBwb3BwZXIgd2VcbiAgLy8gYXV0b21hdGljYWxseSB1c2UgdGhlIHN1cHBvcnRlZCBwcmVmaXhlZCB2ZXJzaW9uIGlmIG5lZWRlZFxuICB2YXIgcHJlZml4ZWRQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG5cbiAgLy8gbm93LCBsZXQncyBtYWtlIGEgc3RlcCBiYWNrIGFuZCBsb29rIGF0IHRoaXMgY29kZSBjbG9zZWx5ICh3dGY/KVxuICAvLyBJZiB0aGUgY29udGVudCBvZiB0aGUgcG9wcGVyIGdyb3dzIG9uY2UgaXQncyBiZWVuIHBvc2l0aW9uZWQsIGl0XG4gIC8vIG1heSBoYXBwZW4gdGhhdCB0aGUgcG9wcGVyIGdldHMgbWlzcGxhY2VkIGJlY2F1c2Ugb2YgdGhlIG5ldyBjb250ZW50XG4gIC8vIG92ZXJmbG93aW5nIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUbyBhdm9pZCB0aGlzIHByb2JsZW0sIHdlIHByb3ZpZGUgdHdvIG9wdGlvbnMgKHggYW5kIHkpLCB3aGljaCBhbGxvd1xuICAvLyB0aGUgY29uc3VtZXIgdG8gZGVmaW5lIHRoZSBvZmZzZXQgb3JpZ2luLlxuICAvLyBJZiB3ZSBwb3NpdGlvbiBhIHBvcHBlciBvbiB0b3Agb2YgYSByZWZlcmVuY2UgZWxlbWVudCwgd2UgY2FuIHNldFxuICAvLyBgeGAgdG8gYHRvcGAgdG8gbWFrZSB0aGUgcG9wcGVyIGdyb3cgdG93YXJkcyBpdHMgdG9wIGluc3RlYWQgb2ZcbiAgLy8gaXRzIGJvdHRvbS5cbiAgdmFyIGxlZnQgPSB2b2lkIDAsXG4gICAgICB0b3AgPSB2b2lkIDA7XG4gIGlmIChzaWRlQSA9PT0gJ2JvdHRvbScpIHtcbiAgICAvLyB3aGVuIG9mZnNldFBhcmVudCBpcyA8aHRtbD4gdGhlIHBvc2l0aW9uaW5nIGlzIHJlbGF0aXZlIHRvIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiAoZXhjbHVkaW5nIHRoZSBzY3JvbGxiYXIpXG4gICAgLy8gYW5kIG5vdCB0aGUgYm90dG9tIG9mIHRoZSBodG1sIGVsZW1lbnRcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnRSZWN0LmhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0b3AgPSBvZmZzZXRzLnRvcDtcbiAgfVxuICBpZiAoc2lkZUIgPT09ICdyaWdodCcpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnRSZWN0LndpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVmdCA9IG9mZnNldHMubGVmdDtcbiAgfVxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uICYmIHByZWZpeGVkUHJvcGVydHkpIHtcbiAgICBzdHlsZXNbcHJlZml4ZWRQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgsIDApJztcbiAgICBzdHlsZXNbc2lkZUFdID0gMDtcbiAgICBzdHlsZXNbc2lkZUJdID0gMDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xuICB9IGVsc2Uge1xuICAgIC8vIG90aHdlcmlzZSwgd2UgdXNlIHRoZSBzdGFuZGFyZCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCBhbmQgYHJpZ2h0YCBwcm9wZXJ0aWVzXG4gICAgdmFyIGludmVydFRvcCA9IHNpZGVBID09PSAnYm90dG9tJyA/IC0xIDogMTtcbiAgICB2YXIgaW52ZXJ0TGVmdCA9IHNpZGVCID09PSAncmlnaHQnID8gLTEgOiAxO1xuICAgIHN0eWxlc1tzaWRlQV0gPSB0b3AgKiBpbnZlcnRUb3A7XG4gICAgc3R5bGVzW3NpZGVCXSA9IGxlZnQgKiBpbnZlcnRMZWZ0O1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gc2lkZUEgKyAnLCAnICsgc2lkZUI7XG4gIH1cblxuICAvLyBBdHRyaWJ1dGVzXG4gIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgICd4LXBsYWNlbWVudCc6IGRhdGEucGxhY2VtZW50XG4gIH07XG5cbiAgLy8gVXBkYXRlIGBkYXRhYCBhdHRyaWJ1dGVzLCBzdHlsZXMgYW5kIGFycm93U3R5bGVzXG4gIGRhdGEuYXR0cmlidXRlcyA9IF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBkYXRhLmF0dHJpYnV0ZXMpO1xuICBkYXRhLnN0eWxlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMsIGRhdGEuc3R5bGVzKTtcbiAgZGF0YS5hcnJvd1N0eWxlcyA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMuYXJyb3csIGRhdGEuYXJyb3dTdHlsZXMpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGluZ05hbWUgLSBuYW1lIG9mIHJlcXVlc3RpbmcgbW9kaWZpZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQobW9kaWZpZXJzLCByZXF1ZXN0aW5nTmFtZSwgcmVxdWVzdGVkTmFtZSkge1xuICB2YXIgcmVxdWVzdGluZyA9IGZpbmQobW9kaWZpZXJzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHJldHVybiBuYW1lID09PSByZXF1ZXN0aW5nTmFtZTtcbiAgfSk7XG5cbiAgdmFyIGlzUmVxdWlyZWQgPSAhIXJlcXVlc3RpbmcgJiYgbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09IHJlcXVlc3RlZE5hbWUgJiYgbW9kaWZpZXIuZW5hYmxlZCAmJiBtb2RpZmllci5vcmRlciA8IHJlcXVlc3Rpbmcub3JkZXI7XG4gIH0pO1xuXG4gIGlmICghaXNSZXF1aXJlZCkge1xuICAgIHZhciBfcmVxdWVzdGluZyA9ICdgJyArIHJlcXVlc3RpbmdOYW1lICsgJ2AnO1xuICAgIHZhciByZXF1ZXN0ZWQgPSAnYCcgKyByZXF1ZXN0ZWROYW1lICsgJ2AnO1xuICAgIGNvbnNvbGUud2FybihyZXF1ZXN0ZWQgKyAnIG1vZGlmaWVyIGlzIHJlcXVpcmVkIGJ5ICcgKyBfcmVxdWVzdGluZyArICcgbW9kaWZpZXIgaW4gb3JkZXIgdG8gd29yaywgYmUgc3VyZSB0byBpbmNsdWRlIGl0IGJlZm9yZSAnICsgX3JlcXVlc3RpbmcgKyAnIScpO1xuICB9XG4gIHJldHVybiBpc1JlcXVpcmVkO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gYXJyb3coZGF0YSwgb3B0aW9ucykge1xuICB2YXIgX2RhdGEkb2Zmc2V0cyRhcnJvdztcblxuICAvLyBhcnJvdyBkZXBlbmRzIG9uIGtlZXBUb2dldGhlciBpbiBvcmRlciB0byB3b3JrXG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnYXJyb3cnLCAna2VlcFRvZ2V0aGVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBhcnJvd0VsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGEgc3RyaW5nLCBzdXBwb3NlIGl0J3MgYSBDU1Mgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdGhlIGFycm93RWxlbWVudCBpc24ndCBhIHF1ZXJ5IHNlbGVjdG9yIHdlIG11c3QgY2hlY2sgdGhhdCB0aGVcbiAgICAvLyBwcm92aWRlZCBET00gbm9kZSBpcyBjaGlsZCBvZiBpdHMgcG9wcGVyIG5vZGVcbiAgICBpZiAoIWRhdGEuaW5zdGFuY2UucG9wcGVyLmNvbnRhaW5zKGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignV0FSTklORzogYGFycm93LmVsZW1lbnRgIG11c3QgYmUgY2hpbGQgb2YgaXRzIHBvcHBlciBlbGVtZW50IScpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIHZhciBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIHZhciBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgdmFyIGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcblxuICAvL1xuICAvLyBleHRlbmRzIGtlZXBUb2dldGhlciBiZWhhdmlvciBtYWtpbmcgc3VyZSB0aGUgcG9wcGVyIGFuZCBpdHNcbiAgLy8gcmVmZXJlbmNlIGhhdmUgZW5vdWdoIHBpeGVscyBpbiBjb25qdW5jdGlvblxuICAvL1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHBvcHBlcltzaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLT0gcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gIH1cbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gKz0gcmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSAtIHBvcHBlcltvcFNpZGVdO1xuICB9XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSBwb3BwZXJcbiAgdmFyIGNlbnRlciA9IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCBwb3BwZXIgb2Zmc2V0c1xuICAvLyB0YWtlIHBvcHBlciBtYXJnaW4gaW4gYWNjb3VudCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhpcyBpbmZvIGF2YWlsYWJsZVxuICB2YXIgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgdmFyIHBvcHBlck1hcmdpblNpZGUgPSBwYXJzZUZsb2F0KGNzc1snbWFyZ2luJyArIHNpZGVDYXBpdGFsaXplZF0sIDEwKTtcbiAgdmFyIHBvcHBlckJvcmRlclNpZGUgPSBwYXJzZUZsb2F0KGNzc1snYm9yZGVyJyArIHNpZGVDYXBpdGFsaXplZCArICdXaWR0aCddLCAxMCk7XG4gIHZhciBzaWRlVmFsdWUgPSBjZW50ZXIgLSBkYXRhLm9mZnNldHMucG9wcGVyW3NpZGVdIC0gcG9wcGVyTWFyZ2luU2lkZSAtIHBvcHBlckJvcmRlclNpZGU7XG5cbiAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgcG9wcGVyXG4gIHNpZGVWYWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHBvcHBlcltsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XG5cbiAgZGF0YS5hcnJvd0VsZW1lbnQgPSBhcnJvd0VsZW1lbnQ7XG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IChfZGF0YSRvZmZzZXRzJGFycm93ID0ge30sIGRlZmluZVByb3BlcnR5KF9kYXRhJG9mZnNldHMkYXJyb3csIHNpZGUsIE1hdGgucm91bmQoc2lkZVZhbHVlKSksIGRlZmluZVByb3BlcnR5KF9kYXRhJG9mZnNldHMkYXJyb3csIGFsdFNpZGUsICcnKSwgX2RhdGEkb2Zmc2V0cyRhcnJvdyk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgdmFyaWF0aW9uIG9mIHRoZSBnaXZlbiBvbmVcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudCB2YXJpYXRpb25cbiAqL1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKSB7XG4gIGlmICh2YXJpYXRpb24gPT09ICdlbmQnKSB7XG4gICAgcmV0dXJuICdzdGFydCc7XG4gIH0gZWxzZSBpZiAodmFyaWF0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgcmV0dXJuICdlbmQnO1xuICB9XG4gIHJldHVybiB2YXJpYXRpb247XG59XG5cbi8qKlxuICogTGlzdCBvZiBhY2NlcHRlZCBwbGFjZW1lbnRzIHRvIHVzZSBhcyB2YWx1ZXMgb2YgdGhlIGBwbGFjZW1lbnRgIG9wdGlvbi48YnIgLz5cbiAqIFZhbGlkIHBsYWNlbWVudHMgYXJlOlxuICogLSBgYXV0b2BcbiAqIC0gYHRvcGBcbiAqIC0gYHJpZ2h0YFxuICogLSBgYm90dG9tYFxuICogLSBgbGVmdGBcbiAqXG4gKiBFYWNoIHBsYWNlbWVudCBjYW4gaGF2ZSBhIHZhcmlhdGlvbiBmcm9tIHRoaXMgbGlzdDpcbiAqIC0gYC1zdGFydGBcbiAqIC0gYC1lbmRgXG4gKlxuICogVmFyaWF0aW9ucyBhcmUgaW50ZXJwcmV0ZWQgZWFzaWx5IGlmIHlvdSB0aGluayBvZiB0aGVtIGFzIHRoZSBsZWZ0IHRvIHJpZ2h0XG4gKiB3cml0dGVuIGxhbmd1YWdlcy4gSG9yaXpvbnRhbGx5IChgdG9wYCBhbmQgYGJvdHRvbWApLCBgc3RhcnRgIGlzIGxlZnQgYW5kIGBlbmRgXG4gKiBpcyByaWdodC48YnIgLz5cbiAqIFZlcnRpY2FsbHkgKGBsZWZ0YCBhbmQgYHJpZ2h0YCksIGBzdGFydGAgaXMgdG9wIGFuZCBgZW5kYCBpcyBib3R0b20uXG4gKlxuICogU29tZSB2YWxpZCBleGFtcGxlcyBhcmU6XG4gKiAtIGB0b3AtZW5kYCAob24gdG9wIG9mIHJlZmVyZW5jZSwgcmlnaHQgYWxpZ25lZClcbiAqIC0gYHJpZ2h0LXN0YXJ0YCAob24gcmlnaHQgb2YgcmVmZXJlbmNlLCB0b3AgYWxpZ25lZClcbiAqIC0gYGJvdHRvbWAgKG9uIGJvdHRvbSwgY2VudGVyZWQpXG4gKiAtIGBhdXRvLWVuZGAgKG9uIHRoZSBzaWRlIHdpdGggbW9yZSBzcGFjZSBhdmFpbGFibGUsIGFsaWdubWVudCBkZXBlbmRzIGJ5IHBsYWNlbWVudClcbiAqXG4gKiBAc3RhdGljXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAZW51bSB7U3RyaW5nfVxuICogQHJlYWRvbmx5XG4gKiBAbWV0aG9kIHBsYWNlbWVudHNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIHBsYWNlbWVudHMgPSBbJ2F1dG8tc3RhcnQnLCAnYXV0bycsICdhdXRvLWVuZCcsICd0b3Atc3RhcnQnLCAndG9wJywgJ3RvcC1lbmQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQnLCAncmlnaHQtZW5kJywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdsZWZ0LWVuZCcsICdsZWZ0JywgJ2xlZnQtc3RhcnQnXTtcblxuLy8gR2V0IHJpZCBvZiBgYXV0b2AgYGF1dG8tc3RhcnRgIGFuZCBgYXV0by1lbmRgXG52YXIgdmFsaWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cy5zbGljZSgzKTtcblxuLyoqXG4gKiBHaXZlbiBhbiBpbml0aWFsIHBsYWNlbWVudCwgcmV0dXJucyBhbGwgdGhlIHN1YnNlcXVlbnQgcGxhY2VtZW50c1xuICogY2xvY2t3aXNlIChvciBjb3VudGVyLWNsb2Nrd2lzZSkuXG4gKlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHBsYWNlbWVudCAtIEEgdmFsaWQgcGxhY2VtZW50IChpdCBhY2NlcHRzIHZhcmlhdGlvbnMpXG4gKiBAYXJndW1lbnQge0Jvb2xlYW59IGNvdW50ZXIgLSBTZXQgdG8gdHJ1ZSB0byB3YWxrIHRoZSBwbGFjZW1lbnRzIGNvdW50ZXJjbG9ja3dpc2VcbiAqIEByZXR1cm5zIHtBcnJheX0gcGxhY2VtZW50cyBpbmNsdWRpbmcgdGhlaXIgdmFyaWF0aW9uc1xuICovXG5mdW5jdGlvbiBjbG9ja3dpc2UocGxhY2VtZW50KSB7XG4gIHZhciBjb3VudGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICB2YXIgaW5kZXggPSB2YWxpZFBsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpO1xuICB2YXIgYXJyID0gdmFsaWRQbGFjZW1lbnRzLnNsaWNlKGluZGV4ICsgMSkuY29uY2F0KHZhbGlkUGxhY2VtZW50cy5zbGljZSgwLCBpbmRleCkpO1xuICByZXR1cm4gY291bnRlciA/IGFyci5yZXZlcnNlKCkgOiBhcnI7XG59XG5cbnZhciBCRUhBVklPUlMgPSB7XG4gIEZMSVA6ICdmbGlwJyxcbiAgQ0xPQ0tXSVNFOiAnY2xvY2t3aXNlJyxcbiAgQ09VTlRFUkNMT0NLV0lTRTogJ2NvdW50ZXJjbG9ja3dpc2UnXG59O1xuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gZmxpcChkYXRhLCBvcHRpb25zKSB7XG4gIC8vIGlmIGBpbm5lcmAgbW9kaWZpZXIgaXMgZW5hYmxlZCwgd2UgY2FuJ3QgdXNlIHRoZSBgZmxpcGAgbW9kaWZpZXJcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaW5uZXInKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEuZmxpcHBlZCAmJiBkYXRhLnBsYWNlbWVudCA9PT0gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCkge1xuICAgIC8vIHNlZW1zIGxpa2UgZmxpcCBpcyB0cnlpbmcgdG8gbG9vcCwgcHJvYmFibHkgdGhlcmUncyBub3QgZW5vdWdoIHNwYWNlIG9uIGFueSBvZiB0aGUgZmxpcHBhYmxlIHNpZGVzXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIG9wdGlvbnMuYm91bmRhcmllc0VsZW1lbnQsIGRhdGEucG9zaXRpb25GaXhlZCk7XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzFdIHx8ICcnO1xuXG4gIHZhciBmbGlwT3JkZXIgPSBbXTtcblxuICBzd2l0Y2ggKG9wdGlvbnMuYmVoYXZpb3IpIHtcbiAgICBjYXNlIEJFSEFWSU9SUy5GTElQOlxuICAgICAgZmxpcE9yZGVyID0gW3BsYWNlbWVudCwgcGxhY2VtZW50T3Bwb3NpdGVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEJFSEFWSU9SUy5DT1VOVEVSQ0xPQ0tXSVNFOlxuICAgICAgZmxpcE9yZGVyID0gY2xvY2t3aXNlKHBsYWNlbWVudCwgdHJ1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZmxpcE9yZGVyID0gb3B0aW9ucy5iZWhhdmlvcjtcbiAgfVxuXG4gIGZsaXBPcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICAgIHBsYWNlbWVudE9wcG9zaXRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBwb3BwZXJPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcbiAgICB2YXIgcmVmT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyBtYXkgY29udGFpbiBkZWNpbWFscyB3ZSBhcmUgbm90IGdvaW5nIHRvIGNvbnNpZGVyIGhlcmVcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICAgIHZhciBvdmVybGFwc1JlZiA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIGZsb29yKHBvcHBlck9mZnNldHMucmlnaHQpID4gZmxvb3IocmVmT2Zmc2V0cy5sZWZ0KSB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKHJlZk9mZnNldHMucmlnaHQpIHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy5ib3R0b20pID4gZmxvb3IocmVmT2Zmc2V0cy50b3ApIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IocmVmT2Zmc2V0cy5ib3R0b20pO1xuXG4gICAgdmFyIG92ZXJmbG93c0xlZnQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLmxlZnQpIDwgZmxvb3IoYm91bmRhcmllcy5sZWZ0KTtcbiAgICB2YXIgb3ZlcmZsb3dzUmlnaHQgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKGJvdW5kYXJpZXMucmlnaHQpO1xuICAgIHZhciBvdmVyZmxvd3NUb3AgPSBmbG9vcihwb3BwZXJPZmZzZXRzLnRvcCkgPCBmbG9vcihib3VuZGFyaWVzLnRvcCk7XG4gICAgdmFyIG92ZXJmbG93c0JvdHRvbSA9IGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKGJvdW5kYXJpZXMuYm90dG9tKTtcblxuICAgIHZhciBvdmVyZmxvd3NCb3VuZGFyaWVzID0gcGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgcGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3AgfHwgcGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b207XG5cbiAgICAvLyBmbGlwIHRoZSB2YXJpYXRpb24gaWYgcmVxdWlyZWRcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgICAvLyBmbGlwcyB2YXJpYXRpb24gaWYgcmVmZXJlbmNlIGVsZW1lbnQgb3ZlcmZsb3dzIGJvdW5kYXJpZXNcbiAgICB2YXIgZmxpcHBlZFZhcmlhdGlvbkJ5UmVmID0gISFvcHRpb25zLmZsaXBWYXJpYXRpb25zICYmIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NMZWZ0IHx8IGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnZW5kJyAmJiBvdmVyZmxvd3NSaWdodCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzVG9wIHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzQm90dG9tKTtcblxuICAgIC8vIGZsaXBzIHZhcmlhdGlvbiBpZiBwb3BwZXIgY29udGVudCBvdmVyZmxvd3MgYm91bmRhcmllc1xuICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50ID0gISFvcHRpb25zLmZsaXBWYXJpYXRpb25zQnlDb250ZW50ICYmIChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3N0YXJ0JyAmJiBvdmVyZmxvd3NSaWdodCB8fCBpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzQm90dG9tIHx8ICFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzVG9wKTtcblxuICAgIHZhciBmbGlwcGVkVmFyaWF0aW9uID0gZmxpcHBlZFZhcmlhdGlvbkJ5UmVmIHx8IGZsaXBwZWRWYXJpYXRpb25CeUNvbnRlbnQ7XG5cbiAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcyB8fCBmbGlwcGVkVmFyaWF0aW9uKSB7XG4gICAgICAvLyB0aGlzIGJvb2xlYW4gdG8gZGV0ZWN0IGFueSBmbGlwIGxvb3BcbiAgICAgIGRhdGEuZmxpcHBlZCA9IHRydWU7XG5cbiAgICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzKSB7XG4gICAgICAgIHBsYWNlbWVudCA9IGZsaXBPcmRlcltpbmRleCArIDFdO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgICB2YXJpYXRpb24gPSBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBkYXRhLnBsYWNlbWVudCA9IHBsYWNlbWVudCArICh2YXJpYXRpb24gPyAnLScgKyB2YXJpYXRpb24gOiAnJyk7XG5cbiAgICAgIC8vIHRoaXMgb2JqZWN0IGNvbnRhaW5zIGBwb3NpdGlvbmAsIHdlIHdhbnQgdG8gcHJlc2VydmUgaXQgYWxvbmcgd2l0aFxuICAgICAgLy8gYW55IGFkZGl0aW9uYWwgcHJvcGVydHkgd2UgbWF5IGFkZCBpbiB0aGUgZnV0dXJlXG4gICAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gX2V4dGVuZHMoe30sIGRhdGEub2Zmc2V0cy5wb3BwZXIsIGdldFBvcHBlck9mZnNldHMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEub2Zmc2V0cy5yZWZlcmVuY2UsIGRhdGEucGxhY2VtZW50KSk7XG5cbiAgICAgIGRhdGEgPSBydW5Nb2RpZmllcnMoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGRhdGEsICdmbGlwJyk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBrZWVwVG9nZXRoZXIoZGF0YSkge1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gIHZhciBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcbiAgdmFyIHNpZGUgPSBpc1ZlcnRpY2FsID8gJ3JpZ2h0JyA6ICdib3R0b20nO1xuICB2YXIgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gIGlmIChwb3BwZXJbc2lkZV0gPCBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbb3BTaWRlXSkgLSBwb3BwZXJbbWVhc3VyZW1lbnRdO1xuICB9XG4gIGlmIChwb3BwZXJbb3BTaWRlXSA+IGZsb29yKHJlZmVyZW5jZVtzaWRlXSkpIHtcbiAgICBkYXRhLm9mZnNldHMucG9wcGVyW29wU2lkZV0gPSBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgY29udGFpbmluZyB2YWx1ZSArIHVuaXQgaW50byBhIHB4IHZhbHVlIG51bWJlclxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IHN0ciAtIFZhbHVlICsgdW5pdCBzdHJpbmdcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBtZWFzdXJlbWVudCAtIGBoZWlnaHRgIG9yIGB3aWR0aGBcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBwb3BwZXJPZmZzZXRzXG4gKiBAYXJndW1lbnQge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0c1xuICogQHJldHVybnMge051bWJlcnxTdHJpbmd9XG4gKiBWYWx1ZSBpbiBwaXhlbHMsIG9yIG9yaWdpbmFsIHN0cmluZyBpZiBubyB2YWx1ZXMgd2VyZSBleHRyYWN0ZWRcbiAqL1xuZnVuY3Rpb24gdG9WYWx1ZShzdHIsIG1lYXN1cmVtZW50LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzKSB7XG4gIC8vIHNlcGFyYXRlIHZhbHVlIGZyb20gdW5pdFxuICB2YXIgc3BsaXQgPSBzdHIubWF0Y2goLygoPzpcXC18XFwrKT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuICB2YXIgdmFsdWUgPSArc3BsaXRbMV07XG4gIHZhciB1bml0ID0gc3BsaXRbMl07XG5cbiAgLy8gSWYgaXQncyBub3QgYSBudW1iZXIgaXQncyBhbiBvcGVyYXRvciwgSSBndWVzc1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIGlmICh1bml0LmluZGV4T2YoJyUnKSA9PT0gMCkge1xuICAgIHZhciBlbGVtZW50ID0gdm9pZCAwO1xuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgY2FzZSAnJXAnOlxuICAgICAgICBlbGVtZW50ID0gcG9wcGVyT2Zmc2V0cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICclJzpcbiAgICAgIGNhc2UgJyVyJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVsZW1lbnQgPSByZWZlcmVuY2VPZmZzZXRzO1xuICAgIH1cblxuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdChlbGVtZW50KTtcbiAgICByZXR1cm4gcmVjdFttZWFzdXJlbWVudF0gLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIGlmICh1bml0ID09PSAndmgnIHx8IHVuaXQgPT09ICd2dycpIHtcbiAgICAvLyBpZiBpcyBhIHZoIG9yIHZ3LCB3ZSBjYWxjdWxhdGUgdGhlIHNpemUgYmFzZWQgb24gdGhlIHZpZXdwb3J0XG4gICAgdmFyIHNpemUgPSB2b2lkIDA7XG4gICAgaWYgKHVuaXQgPT09ICd2aCcpIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpemUgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICAgIH1cbiAgICByZXR1cm4gc2l6ZSAvIDEwMCAqIHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIC8vIGlmIGlzIGFuIGV4cGxpY2l0IHBpeGVsIHVuaXQsIHdlIGdldCByaWQgb2YgdGhlIHVuaXQgYW5kIGtlZXAgdGhlIHZhbHVlXG4gICAgLy8gaWYgaXMgYW4gaW1wbGljaXQgdW5pdCwgaXQncyBweCwgYW5kIHdlIHJldHVybiBqdXN0IHRoZSB2YWx1ZVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGFuIGBvZmZzZXRgIHN0cmluZyB0byBleHRyYXBvbGF0ZSBgeGAgYW5kIGB5YCBudW1lcmljIG9mZnNldHMuXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiB7bW9kaWZpZXJzfm9mZnNldH1cbiAqIEBwcml2YXRlXG4gKiBAYXJndW1lbnQge1N0cmluZ30gb2Zmc2V0XG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBiYXNlUGxhY2VtZW50XG4gKiBAcmV0dXJucyB7QXJyYXl9IGEgdHdvIGNlbGxzIGFycmF5IHdpdGggeCBhbmQgeSBvZmZzZXRzIGluIG51bWJlcnNcbiAqL1xuZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXJPZmZzZXRzLCByZWZlcmVuY2VPZmZzZXRzLCBiYXNlUGxhY2VtZW50KSB7XG4gIHZhciBvZmZzZXRzID0gWzAsIDBdO1xuXG4gIC8vIFVzZSBoZWlnaHQgaWYgcGxhY2VtZW50IGlzIGxlZnQgb3IgcmlnaHQgYW5kIGluZGV4IGlzIDAgb3RoZXJ3aXNlIHVzZSB3aWR0aFxuICAvLyBpbiB0aGlzIHdheSB0aGUgZmlyc3Qgb2Zmc2V0IHdpbGwgdXNlIGFuIGF4aXMgYW5kIHRoZSBzZWNvbmQgb25lXG4gIC8vIHdpbGwgdXNlIHRoZSBvdGhlciBvbmVcbiAgdmFyIHVzZUhlaWdodCA9IFsncmlnaHQnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuXG4gIC8vIFNwbGl0IHRoZSBvZmZzZXQgc3RyaW5nIHRvIG9idGFpbiBhIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kc1xuICAvLyBUaGUgcmVnZXggYWRkcmVzc2VzIHZhbHVlcyB3aXRoIHRoZSBwbHVzIG9yIG1pbnVzIHNpZ24gaW4gZnJvbnQgKCsxMCwgLTIwLCBldGMpXG4gIHZhciBmcmFnbWVudHMgPSBvZmZzZXQuc3BsaXQoLyhcXCt8XFwtKS8pLm1hcChmdW5jdGlvbiAoZnJhZykge1xuICAgIHJldHVybiBmcmFnLnRyaW0oKTtcbiAgfSk7XG5cbiAgLy8gRGV0ZWN0IGlmIHRoZSBvZmZzZXQgc3RyaW5nIGNvbnRhaW5zIGEgcGFpciBvZiB2YWx1ZXMgb3IgYSBzaW5nbGUgb25lXG4gIC8vIHRoZXkgY291bGQgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hIG9yIHNwYWNlXG4gIHZhciBkaXZpZGVyID0gZnJhZ21lbnRzLmluZGV4T2YoZmluZChmcmFnbWVudHMsIGZ1bmN0aW9uIChmcmFnKSB7XG4gICAgcmV0dXJuIGZyYWcuc2VhcmNoKC8sfFxccy8pICE9PSAtMTtcbiAgfSkpO1xuXG4gIGlmIChmcmFnbWVudHNbZGl2aWRlcl0gJiYgZnJhZ21lbnRzW2RpdmlkZXJdLmluZGV4T2YoJywnKSA9PT0gLTEpIHtcbiAgICBjb25zb2xlLndhcm4oJ09mZnNldHMgc2VwYXJhdGVkIGJ5IHdoaXRlIHNwYWNlKHMpIGFyZSBkZXByZWNhdGVkLCB1c2UgYSBjb21tYSAoLCkgaW5zdGVhZC4nKTtcbiAgfVxuXG4gIC8vIElmIGRpdmlkZXIgaXMgZm91bmQsIHdlIGRpdmlkZSB0aGUgbGlzdCBvZiB2YWx1ZXMgYW5kIG9wZXJhbmRzIHRvIGRpdmlkZVxuICAvLyB0aGVtIGJ5IG9mc2V0IFggYW5kIFkuXG4gIHZhciBzcGxpdFJlZ2V4ID0gL1xccyosXFxzKnxcXHMrLztcbiAgdmFyIG9wcyA9IGRpdmlkZXIgIT09IC0xID8gW2ZyYWdtZW50cy5zbGljZSgwLCBkaXZpZGVyKS5jb25jYXQoW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVswXV0pLCBbZnJhZ21lbnRzW2RpdmlkZXJdLnNwbGl0KHNwbGl0UmVnZXgpWzFdXS5jb25jYXQoZnJhZ21lbnRzLnNsaWNlKGRpdmlkZXIgKyAxKSldIDogW2ZyYWdtZW50c107XG5cbiAgLy8gQ29udmVydCB0aGUgdmFsdWVzIHdpdGggdW5pdHMgdG8gYWJzb2x1dGUgcGl4ZWxzIHRvIGFsbG93IG91ciBjb21wdXRhdGlvbnNcbiAgb3BzID0gb3BzLm1hcChmdW5jdGlvbiAob3AsIGluZGV4KSB7XG4gICAgLy8gTW9zdCBvZiB0aGUgdW5pdHMgcmVseSBvbiB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBvcHBlclxuICAgIHZhciBtZWFzdXJlbWVudCA9IChpbmRleCA9PT0gMSA/ICF1c2VIZWlnaHQgOiB1c2VIZWlnaHQpID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgIHJldHVybiBvcFxuICAgIC8vIFRoaXMgYWdncmVnYXRlcyBhbnkgYCtgIG9yIGAtYCBzaWduIHRoYXQgYXJlbid0IGNvbnNpZGVyZWQgb3BlcmF0b3JzXG4gICAgLy8gZS5nLjogMTAgKyArNSA9PiBbMTAsICssICs1XVxuICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChhW2EubGVuZ3RoIC0gMV0gPT09ICcnICYmIFsnKycsICctJ10uaW5kZXhPZihiKSAhPT0gLTEpIHtcbiAgICAgICAgYVthLmxlbmd0aCAtIDFdID0gYjtcbiAgICAgICAgbWVyZ2VXaXRoUHJldmlvdXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0gZWxzZSBpZiAobWVyZ2VXaXRoUHJldmlvdXMpIHtcbiAgICAgICAgYVthLmxlbmd0aCAtIDFdICs9IGI7XG4gICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGEuY29uY2F0KGIpO1xuICAgICAgfVxuICAgIH0sIFtdKVxuICAgIC8vIEhlcmUgd2UgY29udmVydCB0aGUgc3RyaW5nIHZhbHVlcyBpbnRvIG51bWJlciB2YWx1ZXMgKGluIHB4KVxuICAgIC5tYXAoZnVuY3Rpb24gKHN0cikge1xuICAgICAgcmV0dXJuIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIExvb3AgdHJvdWdoIHRoZSBvZmZzZXRzIGFycmF5cyBhbmQgZXhlY3V0ZSB0aGUgb3BlcmF0aW9uc1xuICBvcHMuZm9yRWFjaChmdW5jdGlvbiAob3AsIGluZGV4KSB7XG4gICAgb3AuZm9yRWFjaChmdW5jdGlvbiAoZnJhZywgaW5kZXgyKSB7XG4gICAgICBpZiAoaXNOdW1lcmljKGZyYWcpKSB7XG4gICAgICAgIG9mZnNldHNbaW5kZXhdICs9IGZyYWcgKiAob3BbaW5kZXgyIC0gMV0gPT09ICctJyA/IC0xIDogMSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAYXJndW1lbnQge051bWJlcnxTdHJpbmd9IG9wdGlvbnMub2Zmc2V0PTBcbiAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBvZmZzZXQoZGF0YSwgX3JlZikge1xuICB2YXIgb2Zmc2V0ID0gX3JlZi5vZmZzZXQ7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudCxcbiAgICAgIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgdmFyIG9mZnNldHMgPSB2b2lkIDA7XG4gIGlmIChpc051bWVyaWMoK29mZnNldCkpIHtcbiAgICBvZmZzZXRzID0gWytvZmZzZXQsIDBdO1xuICB9IGVsc2Uge1xuICAgIG9mZnNldHMgPSBwYXJzZU9mZnNldChvZmZzZXQsIHBvcHBlciwgcmVmZXJlbmNlLCBiYXNlUGxhY2VtZW50KTtcbiAgfVxuXG4gIGlmIChiYXNlUGxhY2VtZW50ID09PSAnbGVmdCcpIHtcbiAgICBwb3BwZXIudG9wICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLmxlZnQgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgLT0gb2Zmc2V0c1sxXTtcbiAgfSBlbHNlIGlmIChiYXNlUGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgIHBvcHBlci5sZWZ0ICs9IG9mZnNldHNbMF07XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzFdO1xuICB9XG5cbiAgZGF0YS5wb3BwZXIgPSBwb3BwZXI7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YSwgb3B0aW9ucykge1xuICB2YXIgYm91bmRhcmllc0VsZW1lbnQgPSBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50IHx8IGdldE9mZnNldFBhcmVudChkYXRhLmluc3RhbmNlLnBvcHBlcik7XG5cbiAgLy8gSWYgb2Zmc2V0UGFyZW50IGlzIHRoZSByZWZlcmVuY2UgZWxlbWVudCwgd2UgcmVhbGx5IHdhbnQgdG9cbiAgLy8gZ28gb25lIHN0ZXAgdXAgYW5kIHVzZSB0aGUgbmV4dCBvZmZzZXRQYXJlbnQgYXMgcmVmZXJlbmNlIHRvXG4gIC8vIGF2b2lkIHRvIG1ha2UgdGhpcyBtb2RpZmllciBjb21wbGV0ZWx5IHVzZWxlc3MgYW5kIGxvb2sgbGlrZSBicm9rZW5cbiAgaWYgKGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlID09PSBib3VuZGFyaWVzRWxlbWVudCkge1xuICAgIGJvdW5kYXJpZXNFbGVtZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGJvdW5kYXJpZXNFbGVtZW50KTtcbiAgfVxuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXNldHMgdGhlIHBvcHBlcidzIHBvc2l0aW9uIHNvIHRoYXQgdGhlIGRvY3VtZW50IHNpemUgY2FuIGJlIGNhbGN1bGF0ZWQgZXhjbHVkaW5nXG4gIC8vIHRoZSBzaXplIG9mIHRoZSBwb3BwZXIgZWxlbWVudCBpdHNlbGZcbiAgdmFyIHRyYW5zZm9ybVByb3AgPSBnZXRTdXBwb3J0ZWRQcm9wZXJ0eU5hbWUoJ3RyYW5zZm9ybScpO1xuICB2YXIgcG9wcGVyU3R5bGVzID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIuc3R5bGU7IC8vIGFzc2lnbm1lbnQgdG8gaGVscCBtaW5pZmljYXRpb25cbiAgdmFyIHRvcCA9IHBvcHBlclN0eWxlcy50b3AsXG4gICAgICBsZWZ0ID0gcG9wcGVyU3R5bGVzLmxlZnQsXG4gICAgICB0cmFuc2Zvcm0gPSBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF07XG5cbiAgcG9wcGVyU3R5bGVzLnRvcCA9ICcnO1xuICBwb3BwZXJTdHlsZXMubGVmdCA9ICcnO1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSAnJztcblxuICB2YXIgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuaW5zdGFuY2UucmVmZXJlbmNlLCBvcHRpb25zLnBhZGRpbmcsIGJvdW5kYXJpZXNFbGVtZW50LCBkYXRhLnBvc2l0aW9uRml4ZWQpO1xuXG4gIC8vIE5PVEU6IERPTSBhY2Nlc3MgaGVyZVxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcbiAgcG9wcGVyU3R5bGVzLnRvcCA9IHRvcDtcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSBsZWZ0O1xuICBwb3BwZXJTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XG5cbiAgb3B0aW9ucy5ib3VuZGFyaWVzID0gYm91bmRhcmllcztcblxuICB2YXIgb3JkZXIgPSBvcHRpb25zLnByaW9yaXR5O1xuICB2YXIgcG9wcGVyID0gZGF0YS5vZmZzZXRzLnBvcHBlcjtcblxuICB2YXIgY2hlY2sgPSB7XG4gICAgcHJpbWFyeTogZnVuY3Rpb24gcHJpbWFyeShwbGFjZW1lbnQpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBvcHBlcltwbGFjZW1lbnRdO1xuICAgICAgaWYgKHBvcHBlcltwbGFjZW1lbnRdIDwgYm91bmRhcmllc1twbGFjZW1lbnRdICYmICFvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2UpIHtcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heChwb3BwZXJbcGxhY2VtZW50XSwgYm91bmRhcmllc1twbGFjZW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgcGxhY2VtZW50LCB2YWx1ZSk7XG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IGZ1bmN0aW9uIHNlY29uZGFyeShwbGFjZW1lbnQpIHtcbiAgICAgIHZhciBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgdmFyIHZhbHVlID0gcG9wcGVyW21haW5TaWRlXTtcbiAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4ocG9wcGVyW21haW5TaWRlXSwgYm91bmRhcmllc1twbGFjZW1lbnRdIC0gKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IHBvcHBlci53aWR0aCA6IHBvcHBlci5oZWlnaHQpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgbWFpblNpZGUsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgdmFyIHNpZGUgPSBbJ2xlZnQnLCAndG9wJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMSA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknO1xuICAgIHBvcHBlciA9IF9leHRlbmRzKHt9LCBwb3BwZXIsIGNoZWNrW3NpZGVdKHBsYWNlbWVudCkpO1xuICB9KTtcblxuICBkYXRhLm9mZnNldHMucG9wcGVyID0gcG9wcGVyO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBzaGlmdChkYXRhKSB7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgLy8gaWYgc2hpZnQgc2hpZnR2YXJpYXRpb24gaXMgc3BlY2lmaWVkLCBydW4gdGhlIG1vZGlmaWVyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xuICAgIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXI7XG5cbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xuICAgIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgIHZhciBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG5cbiAgICB2YXIgc2hpZnRPZmZzZXRzID0ge1xuICAgICAgc3RhcnQ6IGRlZmluZVByb3BlcnR5KHt9LCBzaWRlLCByZWZlcmVuY2Vbc2lkZV0pLFxuICAgICAgZW5kOiBkZWZpbmVQcm9wZXJ0eSh7fSwgc2lkZSwgcmVmZXJlbmNlW3NpZGVdICsgcmVmZXJlbmNlW21lYXN1cmVtZW50XSAtIHBvcHBlclttZWFzdXJlbWVudF0pXG4gICAgfTtcblxuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBzaGlmdE9mZnNldHNbc2hpZnR2YXJpYXRpb25dKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gaGlkZShkYXRhKSB7XG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnaGlkZScsICdwcmV2ZW50T3ZlcmZsb3cnKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIHJlZlJlY3QgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuICB2YXIgYm91bmQgPSBmaW5kKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICByZXR1cm4gbW9kaWZpZXIubmFtZSA9PT0gJ3ByZXZlbnRPdmVyZmxvdyc7XG4gIH0pLmJvdW5kYXJpZXM7XG5cbiAgaWYgKHJlZlJlY3QuYm90dG9tIDwgYm91bmQudG9wIHx8IHJlZlJlY3QubGVmdCA+IGJvdW5kLnJpZ2h0IHx8IHJlZlJlY3QudG9wID4gYm91bmQuYm90dG9tIHx8IHJlZlJlY3QucmlnaHQgPCBib3VuZC5sZWZ0KSB7XG4gICAgLy8gQXZvaWQgdW5uZWNlc3NhcnkgRE9NIGFjY2VzcyBpZiB2aXNpYmlsaXR5IGhhc24ndCBjaGFuZ2VkXG4gICAgaWYgKGRhdGEuaGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gdHJ1ZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9ICcnO1xuICB9IGVsc2Uge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBkYXRhLmhpZGUgPSBmYWxzZTtcbiAgICBkYXRhLmF0dHJpYnV0ZXNbJ3gtb3V0LW9mLWJvdW5kYXJpZXMnXSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGlubmVyKGRhdGEpIHtcbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyLFxuICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2U7XG5cbiAgdmFyIGlzSG9yaXogPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICB2YXIgc3VidHJhY3RMZW5ndGggPSBbJ3RvcCcsICdsZWZ0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA9PT0gLTE7XG5cbiAgcG9wcGVyW2lzSG9yaXogPyAnbGVmdCcgOiAndG9wJ10gPSByZWZlcmVuY2VbYmFzZVBsYWNlbWVudF0gLSAoc3VidHJhY3RMZW5ndGggPyBwb3BwZXJbaXNIb3JpeiA/ICd3aWR0aCcgOiAnaGVpZ2h0J10gOiAwKTtcblxuICBkYXRhLnBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KHBvcHBlcik7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogTW9kaWZpZXIgZnVuY3Rpb24sIGVhY2ggbW9kaWZpZXIgY2FuIGhhdmUgYSBmdW5jdGlvbiBvZiB0aGlzIHR5cGUgYXNzaWduZWRcbiAqIHRvIGl0cyBgZm5gIHByb3BlcnR5LjxiciAvPlxuICogVGhlc2UgZnVuY3Rpb25zIHdpbGwgYmUgY2FsbGVkIG9uIGVhY2ggdXBkYXRlLCB0aGlzIG1lYW5zIHRoYXQgeW91IG11c3RcbiAqIG1ha2Ugc3VyZSB0aGV5IGFyZSBwZXJmb3JtYW50IGVub3VnaCB0byBhdm9pZCBwZXJmb3JtYW5jZSBib3R0bGVuZWNrcy5cbiAqXG4gKiBAZnVuY3Rpb24gTW9kaWZpZXJGblxuICogQGFyZ3VtZW50IHtkYXRhT2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtkYXRhT2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cblxuLyoqXG4gKiBNb2RpZmllcnMgYXJlIHBsdWdpbnMgdXNlZCB0byBhbHRlciB0aGUgYmVoYXZpb3Igb2YgeW91ciBwb3BwZXJzLjxiciAvPlxuICogUG9wcGVyLmpzIHVzZXMgYSBzZXQgb2YgOSBtb2RpZmllcnMgdG8gcHJvdmlkZSBhbGwgdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdGllc1xuICogbmVlZGVkIGJ5IHRoZSBsaWJyYXJ5LlxuICpcbiAqIFVzdWFsbHkgeW91IGRvbid0IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGBvcmRlcmAsIGBmbmAgYW5kIGBvbkxvYWRgIHByb3BzLlxuICogQWxsIHRoZSBvdGhlciBwcm9wZXJ0aWVzIGFyZSBjb25maWd1cmF0aW9ucyB0aGF0IGNvdWxkIGJlIHR3ZWFrZWQuXG4gKiBAbmFtZXNwYWNlIG1vZGlmaWVyc1xuICovXG52YXIgbW9kaWZpZXJzID0ge1xuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBzaGlmdCB0aGUgcG9wcGVyIG9uIHRoZSBzdGFydCBvciBlbmQgb2YgaXRzIHJlZmVyZW5jZVxuICAgKiBlbGVtZW50LjxiciAvPlxuICAgKiBJdCB3aWxsIHJlYWQgdGhlIHZhcmlhdGlvbiBvZiB0aGUgYHBsYWNlbWVudGAgcHJvcGVydHkuPGJyIC8+XG4gICAqIEl0IGNhbiBiZSBvbmUgZWl0aGVyIGAtZW5kYCBvciBgLXN0YXJ0YC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIHNoaWZ0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTEwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogc2hpZnRcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGBvZmZzZXRgIG1vZGlmaWVyIGNhbiBzaGlmdCB5b3VyIHBvcHBlciBvbiBib3RoIGl0cyBheGlzLlxuICAgKlxuICAgKiBJdCBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgdW5pdHM6XG4gICAqIC0gYHB4YCBvciB1bml0LWxlc3MsIGludGVycHJldGVkIGFzIHBpeGVsc1xuICAgKiAtIGAlYCBvciBgJXJgLCBwZXJjZW50YWdlIHJlbGF0aXZlIHRvIHRoZSBsZW5ndGggb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50XG4gICAqIC0gYCVwYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSBwb3BwZXIgZWxlbWVudFxuICAgKiAtIGB2d2AsIENTUyB2aWV3cG9ydCB3aWR0aCB1bml0XG4gICAqIC0gYHZoYCwgQ1NTIHZpZXdwb3J0IGhlaWdodCB1bml0XG4gICAqXG4gICAqIEZvciBsZW5ndGggaXMgaW50ZW5kZWQgdGhlIG1haW4gYXhpcyByZWxhdGl2ZSB0byB0aGUgcGxhY2VtZW50IG9mIHRoZSBwb3BwZXIuPGJyIC8+XG4gICAqIFRoaXMgbWVhbnMgdGhhdCBpZiB0aGUgcGxhY2VtZW50IGlzIGB0b3BgIG9yIGBib3R0b21gLCB0aGUgbGVuZ3RoIHdpbGwgYmUgdGhlXG4gICAqIGB3aWR0aGAuIEluIGNhc2Ugb2YgYGxlZnRgIG9yIGByaWdodGAsIGl0IHdpbGwgYmUgdGhlIGBoZWlnaHRgLlxuICAgKlxuICAgKiBZb3UgY2FuIHByb3ZpZGUgYSBzaW5nbGUgdmFsdWUgKGFzIGBOdW1iZXJgIG9yIGBTdHJpbmdgKSwgb3IgYSBwYWlyIG9mIHZhbHVlc1xuICAgKiBhcyBgU3RyaW5nYCBkaXZpZGVkIGJ5IGEgY29tbWEgb3Igb25lIChvciBtb3JlKSB3aGl0ZSBzcGFjZXMuPGJyIC8+XG4gICAqIFRoZSBsYXR0ZXIgaXMgYSBkZXByZWNhdGVkIG1ldGhvZCBiZWNhdXNlIGl0IGxlYWRzIHRvIGNvbmZ1c2lvbiBhbmQgd2lsbCBiZVxuICAgKiByZW1vdmVkIGluIHYyLjxiciAvPlxuICAgKiBBZGRpdGlvbmFsbHksIGl0IGFjY2VwdHMgYWRkaXRpb25zIGFuZCBzdWJ0cmFjdGlvbnMgYmV0d2VlbiBkaWZmZXJlbnQgdW5pdHMuXG4gICAqIE5vdGUgdGhhdCBtdWx0aXBsaWNhdGlvbnMgYW5kIGRpdmlzaW9ucyBhcmVuJ3Qgc3VwcG9ydGVkLlxuICAgKlxuICAgKiBWYWxpZCBleGFtcGxlcyBhcmU6XG4gICAqIGBgYFxuICAgKiAxMFxuICAgKiAnMTAlJ1xuICAgKiAnMTAsIDEwJ1xuICAgKiAnMTAlLCAxMCdcbiAgICogJzEwICsgMTAlJ1xuICAgKiAnMTAgLSA1dmggKyAzJSdcbiAgICogJy0xMHB4ICsgNXZoLCA1cHggLSA2JSdcbiAgICogYGBgXG4gICAqID4gKipOQioqOiBJZiB5b3UgZGVzaXJlIHRvIGFwcGx5IG9mZnNldHMgdG8geW91ciBwb3BwZXJzIGluIGEgd2F5IHRoYXQgbWF5IG1ha2UgdGhlbSBvdmVybGFwXG4gICAqID4gd2l0aCB0aGVpciByZWZlcmVuY2UgZWxlbWVudCwgdW5mb3J0dW5hdGVseSwgeW91IHdpbGwgaGF2ZSB0byBkaXNhYmxlIHRoZSBgZmxpcGAgbW9kaWZpZXIuXG4gICAqID4gWW91IGNhbiByZWFkIG1vcmUgb24gdGhpcyBhdCB0aGlzIFtpc3N1ZV0oaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvaXNzdWVzLzM3MykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBvZmZzZXQ6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAyMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBvZmZzZXQsXG4gICAgLyoqIEBwcm9wIHtOdW1iZXJ8U3RyaW5nfSBvZmZzZXQ9MFxuICAgICAqIFRoZSBvZmZzZXQgdmFsdWUgYXMgZGVzY3JpYmVkIGluIHRoZSBtb2RpZmllciBkZXNjcmlwdGlvblxuICAgICAqL1xuICAgIG9mZnNldDogMFxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIHByZXZlbnQgdGhlIHBvcHBlciBmcm9tIGJlaW5nIHBvc2l0aW9uZWQgb3V0c2lkZSB0aGUgYm91bmRhcnkuXG4gICAqXG4gICAqIEEgc2NlbmFyaW8gZXhpc3RzIHdoZXJlIHRoZSByZWZlcmVuY2UgaXRzZWxmIGlzIG5vdCB3aXRoaW4gdGhlIGJvdW5kYXJpZXMuPGJyIC8+XG4gICAqIFdlIGNhbiBzYXkgaXQgaGFzIFwiZXNjYXBlZCB0aGUgYm91bmRhcmllc1wiIOKAlCBvciBqdXN0IFwiZXNjYXBlZFwiLjxiciAvPlxuICAgKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBkZWNpZGUgd2hldGhlciB0aGUgcG9wcGVyIHNob3VsZCBlaXRoZXI6XG4gICAqXG4gICAqIC0gZGV0YWNoIGZyb20gdGhlIHJlZmVyZW5jZSBhbmQgcmVtYWluIFwidHJhcHBlZFwiIGluIHRoZSBib3VuZGFyaWVzLCBvclxuICAgKiAtIGlmIGl0IHNob3VsZCBpZ25vcmUgdGhlIGJvdW5kYXJ5IGFuZCBcImVzY2FwZSB3aXRoIGl0cyByZWZlcmVuY2VcIlxuICAgKlxuICAgKiBXaGVuIGBlc2NhcGVXaXRoUmVmZXJlbmNlYCBpcyBzZXQgdG9gdHJ1ZWAgYW5kIHJlZmVyZW5jZSBpcyBjb21wbGV0ZWx5XG4gICAqIG91dHNpZGUgaXRzIGJvdW5kYXJpZXMsIHRoZSBwb3BwZXIgd2lsbCBvdmVyZmxvdyAob3IgY29tcGxldGVseSBsZWF2ZSlcbiAgICogdGhlIGJvdW5kYXJpZXMgaW4gb3JkZXIgdG8gcmVtYWluIGF0dGFjaGVkIHRvIHRoZSBlZGdlIG9mIHRoZSByZWZlcmVuY2UuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9MzAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiAzMDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gICAgLyoqXG4gICAgICogQHByb3Age0FycmF5fSBbcHJpb3JpdHk9WydsZWZ0JywncmlnaHQnLCd0b3AnLCdib3R0b20nXV1cbiAgICAgKiBQb3BwZXIgd2lsbCB0cnkgdG8gcHJldmVudCBvdmVyZmxvdyBmb2xsb3dpbmcgdGhlc2UgcHJpb3JpdGllcyBieSBkZWZhdWx0LFxuICAgICAqIHRoZW4sIGl0IGNvdWxkIG92ZXJmbG93IG9uIHRoZSBsZWZ0IGFuZCBvbiB0b3Agb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwcmlvcml0eTogWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nPTVcbiAgICAgKiBBbW91bnQgb2YgcGl4ZWwgdXNlZCB0byBkZWZpbmUgYSBtaW5pbXVtIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvdW5kYXJpZXNcbiAgICAgKiBhbmQgdGhlIHBvcHBlci4gVGhpcyBtYWtlcyBzdXJlIHRoZSBwb3BwZXIgYWx3YXlzIGhhcyBhIGxpdHRsZSBwYWRkaW5nXG4gICAgICogYmV0d2VlbiB0aGUgZWRnZXMgb2YgaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHBhZGRpbmc6IDUsXG4gICAgLyoqXG4gICAgICogQHByb3Age1N0cmluZ3xIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQ9J3Njcm9sbFBhcmVudCdcbiAgICAgKiBCb3VuZGFyaWVzIHVzZWQgYnkgdGhlIG1vZGlmaWVyLiBDYW4gYmUgYHNjcm9sbFBhcmVudGAsIGB3aW5kb3dgLFxuICAgICAqIGB2aWV3cG9ydGAgb3IgYW55IERPTSBlbGVtZW50LlxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAnc2Nyb2xsUGFyZW50J1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2Ugc3VyZSB0aGUgcmVmZXJlbmNlIGFuZCBpdHMgcG9wcGVyIHN0YXkgbmVhciBlYWNoIG90aGVyXG4gICAqIHdpdGhvdXQgbGVhdmluZyBhbnkgZ2FwIGJldHdlZW4gdGhlIHR3by4gRXNwZWNpYWxseSB1c2VmdWwgd2hlbiB0aGUgYXJyb3cgaXNcbiAgICogZW5hYmxlZCBhbmQgeW91IHdhbnQgdG8gZW5zdXJlIHRoYXQgaXQgcG9pbnRzIHRvIGl0cyByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogSXQgY2FyZXMgb25seSBhYm91dCB0aGUgZmlyc3QgYXhpcy4gWW91IGNhbiBzdGlsbCBoYXZlIHBvcHBlcnMgd2l0aCBtYXJnaW5cbiAgICogYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBrZWVwVG9nZXRoZXI6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NDAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA0MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBrZWVwVG9nZXRoZXJcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtb2RpZmllciBpcyB1c2VkIHRvIG1vdmUgdGhlIGBhcnJvd0VsZW1lbnRgIG9mIHRoZSBwb3BwZXIgdG8gbWFrZVxuICAgKiBzdXJlIGl0IGlzIHBvc2l0aW9uZWQgYmV0d2VlbiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgYW5kIGl0cyBwb3BwZXIgZWxlbWVudC5cbiAgICogSXQgd2lsbCByZWFkIHRoZSBvdXRlciBzaXplIG9mIHRoZSBgYXJyb3dFbGVtZW50YCBub2RlIHRvIGRldGVjdCBob3cgbWFueVxuICAgKiBwaXhlbHMgb2YgY29uanVuY3Rpb24gYXJlIG5lZWRlZC5cbiAgICpcbiAgICogSXQgaGFzIG5vIGVmZmVjdCBpZiBubyBgYXJyb3dFbGVtZW50YCBpcyBwcm92aWRlZC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFycm93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTUwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXJyb3csXG4gICAgLyoqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGVsZW1lbnQ9J1t4LWFycm93XScgLSBTZWxlY3RvciBvciBub2RlIHVzZWQgYXMgYXJyb3cgKi9cbiAgICBlbGVtZW50OiAnW3gtYXJyb3ddJ1xuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGZsaXAgdGhlIHBvcHBlcidzIHBsYWNlbWVudCB3aGVuIGl0IHN0YXJ0cyB0byBvdmVybGFwIGl0c1xuICAgKiByZWZlcmVuY2UgZWxlbWVudC5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKlxuICAgKiAqKk5PVEU6KiogdGhpcyBtb2RpZmllciB3aWxsIGludGVycnVwdCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUgYW5kIHdpbGxcbiAgICogcmVzdGFydCBpdCBpZiBpdCBkZXRlY3RzIHRoZSBuZWVkIHRvIGZsaXAgdGhlIHBsYWNlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGZsaXA6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9NjAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA2MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBmbGlwLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8QXJyYXl9IGJlaGF2aW9yPSdmbGlwJ1xuICAgICAqIFRoZSBiZWhhdmlvciB1c2VkIHRvIGNoYW5nZSB0aGUgcG9wcGVyJ3MgcGxhY2VtZW50LiBJdCBjYW4gYmUgb25lIG9mXG4gICAgICogYGZsaXBgLCBgY2xvY2t3aXNlYCwgYGNvdW50ZXJjbG9ja3dpc2VgIG9yIGFuIGFycmF5IHdpdGggYSBsaXN0IG9mIHZhbGlkXG4gICAgICogcGxhY2VtZW50cyAod2l0aCBvcHRpb25hbCB2YXJpYXRpb25zKVxuICAgICAqL1xuICAgIGJlaGF2aW9yOiAnZmxpcCcsXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogVGhlIHBvcHBlciB3aWxsIGZsaXAgaWYgaXQgaGl0cyB0aGUgZWRnZXMgb2YgdGhlIGBib3VuZGFyaWVzRWxlbWVudGBcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSd2aWV3cG9ydCdcbiAgICAgKiBUaGUgZWxlbWVudCB3aGljaCB3aWxsIGRlZmluZSB0aGUgYm91bmRhcmllcyBvZiB0aGUgcG9wcGVyIHBvc2l0aW9uLlxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBuZXZlciBiZSBwbGFjZWQgb3V0c2lkZSBvZiB0aGUgZGVmaW5lZCBib3VuZGFyaWVzXG4gICAgICogKGV4Y2VwdCBpZiBga2VlcFRvZ2V0aGVyYCBpcyBlbmFibGVkKVxuICAgICAqL1xuICAgIGJvdW5kYXJpZXNFbGVtZW50OiAndmlld3BvcnQnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBmbGlwVmFyaWF0aW9ucz1mYWxzZVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBzd2l0Y2ggcGxhY2VtZW50IHZhcmlhdGlvbiBiZXR3ZWVuIGAtc3RhcnRgIGFuZCBgLWVuZGAgd2hlblxuICAgICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudCBvdmVybGFwcyBpdHMgYm91bmRhcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW5hbCBwbGFjZW1lbnQgc2hvdWxkIGhhdmUgYSBzZXQgdmFyaWF0aW9uLlxuICAgICAqL1xuICAgIGZsaXBWYXJpYXRpb25zOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQ9ZmFsc2VcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgc3dpdGNoIHBsYWNlbWVudCB2YXJpYXRpb24gYmV0d2VlbiBgLXN0YXJ0YCBhbmQgYC1lbmRgIHdoZW5cbiAgICAgKiB0aGUgcG9wcGVyIGVsZW1lbnQgb3ZlcmxhcHMgaXRzIHJlZmVyZW5jZSBib3VuZGFyaWVzLlxuICAgICAqXG4gICAgICogVGhlIG9yaWdpbmFsIHBsYWNlbWVudCBzaG91bGQgaGF2ZSBhIHNldCB2YXJpYXRpb24uXG4gICAgICovXG4gICAgZmxpcFZhcmlhdGlvbnNCeUNvbnRlbnQ6IGZhbHNlXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gbWFrZSB0aGUgcG9wcGVyIGZsb3cgdG93YXJkIHRoZSBpbm5lciBvZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEJ5IGRlZmF1bHQsIHdoZW4gdGhpcyBtb2RpZmllciBpcyBkaXNhYmxlZCwgdGhlIHBvcHBlciB3aWxsIGJlIHBsYWNlZCBvdXRzaWRlXG4gICAqIHRoZSByZWZlcmVuY2UgZWxlbWVudC5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGlubmVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTcwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD1mYWxzZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBpbm5lclxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIGhpZGUgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXRzaWRlIG9mIHRoZVxuICAgKiBwb3BwZXIgYm91bmRhcmllcy4gSXQgd2lsbCBzZXQgYSBgeC1vdXQtb2YtYm91bmRhcmllc2AgYXR0cmlidXRlIHdoaWNoIGNhblxuICAgKiBiZSB1c2VkIHRvIGhpZGUgd2l0aCBhIENTUyBzZWxlY3RvciB0aGUgcG9wcGVyIHdoZW4gaXRzIHJlZmVyZW5jZSBpc1xuICAgKiBvdXQgb2YgYm91bmRhcmllcy5cbiAgICpcbiAgICogUmVxdWlyZXMgdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIG1vZGlmaWVyIGJlZm9yZSBpdCBpbiBvcmRlciB0byB3b3JrLlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgaGlkZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDgwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGhpZGVcbiAgfSxcblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIHN0eWxlIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgZWxlbWVudCB0byBnZXRzXG4gICAqIHByb3Blcmx5IHBvc2l0aW9uZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIG1vZGlmaWVyIHdpbGwgbm90IHRvdWNoIHRoZSBET00sIGl0IGp1c3QgcHJlcGFyZXMgdGhlIHN0eWxlc1xuICAgKiBzbyB0aGF0IGBhcHBseVN0eWxlYCBtb2RpZmllciBjYW4gYXBwbHkgaXQuIFRoaXMgc2VwYXJhdGlvbiBpcyB1c2VmdWxcbiAgICogaW4gY2FzZSB5b3UgbmVlZCB0byByZXBsYWNlIGBhcHBseVN0eWxlYCB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBUaGlzIG1vZGlmaWVyIGhhcyBgODUwYCBhcyBgb3JkZXJgIHZhbHVlIHRvIG1haW50YWluIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICogd2l0aCBwcmV2aW91cyB2ZXJzaW9ucyBvZiBQb3BwZXIuanMuIEV4cGVjdCB0aGUgbW9kaWZpZXJzIG9yZGVyaW5nIG1ldGhvZFxuICAgKiB0byBjaGFuZ2UgaW4gZnV0dXJlIG1ham9yIHZlcnNpb25zIG9mIHRoZSBsaWJyYXJ5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgY29tcHV0ZVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTg1MCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogODUwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogY29tcHV0ZVN0eWxlLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtCb29sZWFufSBncHVBY2NlbGVyYXRpb249dHJ1ZVxuICAgICAqIElmIHRydWUsIGl0IHVzZXMgdGhlIENTUyAzRCB0cmFuc2Zvcm1hdGlvbiB0byBwb3NpdGlvbiB0aGUgcG9wcGVyLlxuICAgICAqIE90aGVyd2lzZSwgaXQgd2lsbCB1c2UgdGhlIGB0b3BgIGFuZCBgbGVmdGAgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGdwdUFjY2VsZXJhdGlvbjogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7c3RyaW5nfSBbeD0nYm90dG9tJ11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFggYXhpcyAoYGJvdHRvbWAgb3IgYHRvcGApLiBBS0EgWCBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGBib3R0b21gXG4gICAgICovXG4gICAgeDogJ2JvdHRvbScsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2xlZnQnXVxuICAgICAqIFdoZXJlIHRvIGFuY2hvciB0aGUgWSBheGlzIChgbGVmdGAgb3IgYHJpZ2h0YCkuIEFLQSBZIG9mZnNldCBvcmlnaW4uXG4gICAgICogQ2hhbmdlIHRoaXMgaWYgeW91ciBwb3BwZXIgc2hvdWxkIGdyb3cgaW4gYSBkaXJlY3Rpb24gZGlmZmVyZW50IGZyb20gYHJpZ2h0YFxuICAgICAqL1xuICAgIHk6ICdyaWdodCdcbiAgfSxcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgY29tcHV0ZWQgc3R5bGVzIHRvIHRoZSBwb3BwZXIgZWxlbWVudC5cbiAgICpcbiAgICogQWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyBhcmUgbGltaXRlZCB0byB0aGlzIG1vZGlmaWVyLiBUaGlzIGlzIHVzZWZ1bCBpbiBjYXNlXG4gICAqIHlvdSB3YW50IHRvIGludGVncmF0ZSBQb3BwZXIuanMgaW5zaWRlIGEgZnJhbWV3b3JrIG9yIHZpZXcgbGlicmFyeSBhbmQgeW91XG4gICAqIHdhbnQgdG8gZGVsZWdhdGUgYWxsIHRoZSBET00gbWFuaXB1bGF0aW9ucyB0byBpdC5cbiAgICpcbiAgICogTm90ZSB0aGF0IGlmIHlvdSBkaXNhYmxlIHRoaXMgbW9kaWZpZXIsIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogaGFzIGl0cyBwb3NpdGlvbiBzZXQgdG8gYGFic29sdXRlYCBiZWZvcmUgUG9wcGVyLmpzIGNhbiBkbyBpdHMgd29yayFcbiAgICpcbiAgICogSnVzdCBkaXNhYmxlIHRoaXMgbW9kaWZpZXIgYW5kIGRlZmluZSB5b3VyIG93biB0byBhY2hpZXZlIHRoZSBkZXNpcmVkIGVmZmVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGFwcGx5U3R5bGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9OTAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA5MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBhcHBseVN0eWxlLFxuICAgIC8qKiBAcHJvcCB7RnVuY3Rpb259ICovXG4gICAgb25Mb2FkOiBhcHBseVN0eWxlT25Mb2FkLFxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4xMC4wLCB0aGUgcHJvcGVydHkgbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXJcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHVuZGVmaW5lZFxuICB9XG59O1xuXG4vKipcbiAqIFRoZSBgZGF0YU9iamVjdGAgaXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvcm1hdGlvbiB1c2VkIGJ5IFBvcHBlci5qcy5cbiAqIFRoaXMgb2JqZWN0IGlzIHBhc3NlZCB0byBtb2RpZmllcnMgYW5kIHRvIHRoZSBgb25DcmVhdGVgIGFuZCBgb25VcGRhdGVgIGNhbGxiYWNrcy5cbiAqIEBuYW1lIGRhdGFPYmplY3RcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmluc3RhbmNlIFRoZSBQb3BwZXIuanMgaW5zdGFuY2VcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLnBsYWNlbWVudCBQbGFjZW1lbnQgYXBwbGllZCB0byBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBkYXRhLm9yaWdpbmFsUGxhY2VtZW50IFBsYWNlbWVudCBvcmlnaW5hbGx5IGRlZmluZWQgb24gaW5pdFxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmZsaXBwZWQgVHJ1ZSBpZiBwb3BwZXIgaGFzIGJlZW4gZmxpcHBlZCBieSBmbGlwIG1vZGlmaWVyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGRhdGEuaGlkZSBUcnVlIGlmIHRoZSByZWZlcmVuY2UgZWxlbWVudCBpcyBvdXQgb2YgYm91bmRhcmllcywgdXNlZnVsIHRvIGtub3cgd2hlbiB0byBoaWRlIHRoZSBwb3BwZXJcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGRhdGEuYXJyb3dFbGVtZW50IE5vZGUgdXNlZCBhcyBhcnJvdyBieSBhcnJvdyBtb2RpZmllclxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuc3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyLiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYXJyb3dTdHlsZXMgQW55IENTUyBwcm9wZXJ0eSBkZWZpbmVkIGhlcmUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIgYXJyb3cuIEl0IGV4cGVjdHMgdGhlIEphdmFTY3JpcHQgbm9tZW5jbGF0dXJlIChlZy4gYG1hcmdpbkJvdHRvbWApXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5ib3VuZGFyaWVzIE9mZnNldHMgb2YgdGhlIHBvcHBlciBib3VuZGFyaWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzIFRoZSBtZWFzdXJlbWVudHMgb2YgcG9wcGVyLCByZWZlcmVuY2UgYW5kIGFycm93IGVsZW1lbnRzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnBvcHBlciBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMucmVmZXJlbmNlIGB0b3BgLCBgbGVmdGAsIGB3aWR0aGAsIGBoZWlnaHRgIHZhbHVlc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5hcnJvd10gYHRvcGAgYW5kIGBsZWZ0YCBvZmZzZXRzLCBvbmx5IG9uZSBvZiB0aGVtIHdpbGwgYmUgZGlmZmVyZW50IGZyb20gMFxuICovXG5cbi8qKlxuICogRGVmYXVsdCBvcHRpb25zIHByb3ZpZGVkIHRvIFBvcHBlci5qcyBjb25zdHJ1Y3Rvci48YnIgLz5cbiAqIFRoZXNlIGNhbiBiZSBvdmVycmlkZGVuIHVzaW5nIHRoZSBgb3B0aW9uc2AgYXJndW1lbnQgb2YgUG9wcGVyLmpzLjxiciAvPlxuICogVG8gb3ZlcnJpZGUgYW4gb3B0aW9uLCBzaW1wbHkgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZVxuICogc3RydWN0dXJlIG9mIHRoZSBgb3B0aW9uc2Agb2JqZWN0LCBhcyB0aGUgM3JkIGFyZ3VtZW50LiBGb3IgZXhhbXBsZTpcbiAqIGBgYFxuICogbmV3IFBvcHBlcihyZWYsIHBvcCwge1xuICogICBtb2RpZmllcnM6IHtcbiAqICAgICBwcmV2ZW50T3ZlcmZsb3c6IHsgZW5hYmxlZDogZmFsc2UgfVxuICogICB9XG4gKiB9KVxuICogYGBgXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHN0YXRpY1xuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG52YXIgRGVmYXVsdHMgPSB7XG4gIC8qKlxuICAgKiBQb3BwZXIncyBwbGFjZW1lbnQuXG4gICAqIEBwcm9wIHtQb3BwZXIucGxhY2VtZW50c30gcGxhY2VtZW50PSdib3R0b20nXG4gICAqL1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuXG4gIC8qKlxuICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIHlvdSB3YW50IHBvcHBlciB0byBwb3NpdGlvbiBpdCBzZWxmIGluICdmaXhlZCcgbW9kZVxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcG9zaXRpb25GaXhlZD1mYWxzZVxuICAgKi9cbiAgcG9zaXRpb25GaXhlZDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgZXZlbnRzIChyZXNpemUsIHNjcm9sbCkgYXJlIGluaXRpYWxseSBlbmFibGVkLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gZXZlbnRzRW5hYmxlZD10cnVlXG4gICAqL1xuICBldmVudHNFbmFibGVkOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBTZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgcG9wcGVyIHdoZW5cbiAgICogeW91IGNhbGwgdGhlIGBkZXN0cm95YCBtZXRob2QuXG4gICAqIEBwcm9wIHtCb29sZWFufSByZW1vdmVPbkRlc3Ryb3k9ZmFsc2VcbiAgICovXG4gIHJlbW92ZU9uRGVzdHJveTogZmFsc2UsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgY3JlYXRlZC48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25DcmVhdGV9XG4gICAqL1xuICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoKSB7fSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHBvcHBlciBpcyB1cGRhdGVkLiBUaGlzIGNhbGxiYWNrIGlzIG5vdCBjYWxsZWRcbiAgICogb24gdGhlIGluaXRpYWxpemF0aW9uL2NyZWF0aW9uIG9mIHRoZSBwb3BwZXIsIGJ1dCBvbmx5IG9uIHN1YnNlcXVlbnRcbiAgICogdXBkYXRlcy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgaXQgaXMgc2V0IHRvIG5vLW9wLjxiciAvPlxuICAgKiBBY2Nlc3MgUG9wcGVyLmpzIGluc3RhbmNlIHdpdGggYGRhdGEuaW5zdGFuY2VgLlxuICAgKiBAcHJvcCB7b25VcGRhdGV9XG4gICAqL1xuICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoKSB7fSxcblxuICAvKipcbiAgICogTGlzdCBvZiBtb2RpZmllcnMgdXNlZCB0byBtb2RpZnkgdGhlIG9mZnNldHMgYmVmb3JlIHRoZXkgYXJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci5cbiAgICogVGhleSBwcm92aWRlIG1vc3Qgb2YgdGhlIGZ1bmN0aW9uYWxpdGllcyBvZiBQb3BwZXIuanMuXG4gICAqIEBwcm9wIHttb2RpZmllcnN9XG4gICAqL1xuICBtb2RpZmllcnM6IG1vZGlmaWVyc1xufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgb25DcmVhdGVcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIG9uVXBkYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vLyBVdGlsc1xuLy8gTWV0aG9kc1xudmFyIFBvcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgUG9wcGVyLmpzIGluc3RhbmNlLlxuICAgKiBAY2xhc3MgUG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudHxyZWZlcmVuY2VPYmplY3R9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSBUaGUgSFRNTCAvIFhNTCBlbGVtZW50IHVzZWQgYXMgdGhlIHBvcHBlclxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIFlvdXIgY3VzdG9tIG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIG9uZXMgZGVmaW5lZCBpbiBbRGVmYXVsdHNdKCNkZWZhdWx0cylcbiAgICogQHJldHVybiB7T2JqZWN0fSBpbnN0YW5jZSAtIFRoZSBnZW5lcmF0ZWQgUG9wcGVyLmpzIGluc3RhbmNlXG4gICAqL1xuICBmdW5jdGlvbiBQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHBlcik7XG5cbiAgICB0aGlzLnNjaGVkdWxlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShfdGhpcy51cGRhdGUpO1xuICAgIH07XG5cbiAgICAvLyBtYWtlIHVwZGF0ZSgpIGRlYm91bmNlZCwgc28gdGhhdCBpdCBvbmx5IHJ1bnMgYXQgbW9zdCBvbmNlLXBlci10aWNrXG4gICAgdGhpcy51cGRhdGUgPSBkZWJvdW5jZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIHdpdGgge30gd2UgY3JlYXRlIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvcHRpb25zIGluc2lkZSBpdFxuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgLy8gaW5pdCBzdGF0ZVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0Rlc3Ryb3llZDogZmFsc2UsXG4gICAgICBpc0NyZWF0ZWQ6IGZhbHNlLFxuICAgICAgc2Nyb2xsUGFyZW50czogW11cbiAgICB9O1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSBhbmQgcG9wcGVyIGVsZW1lbnRzIChhbGxvdyBqUXVlcnkgd3JhcHBlcnMpXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLmpxdWVyeSA/IHJlZmVyZW5jZVswXSA6IHJlZmVyZW5jZTtcbiAgICB0aGlzLnBvcHBlciA9IHBvcHBlciAmJiBwb3BwZXIuanF1ZXJ5ID8gcG9wcGVyWzBdIDogcG9wcGVyO1xuXG4gICAgLy8gRGVlcCBtZXJnZSBtb2RpZmllcnMgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucy5tb2RpZmllcnMgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVycywgb3B0aW9ucy5tb2RpZmllcnMpKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBfdGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA9IF9leHRlbmRzKHt9LCBQb3BwZXIuRGVmYXVsdHMubW9kaWZpZXJzW25hbWVdIHx8IHt9LCBvcHRpb25zLm1vZGlmaWVycyA/IG9wdGlvbnMubW9kaWZpZXJzW25hbWVdIDoge30pO1xuICAgIH0pO1xuXG4gICAgLy8gUmVmYWN0b3JpbmcgbW9kaWZpZXJzJyBsaXN0IChPYmplY3QgPT4gQXJyYXkpXG4gICAgdGhpcy5tb2RpZmllcnMgPSBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMubW9kaWZpZXJzKS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICAgIH0sIF90aGlzLm9wdGlvbnMubW9kaWZpZXJzW25hbWVdKTtcbiAgICB9KVxuICAgIC8vIHNvcnQgdGhlIG1vZGlmaWVycyBieSBvcmRlclxuICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XG4gICAgfSk7XG5cbiAgICAvLyBtb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byBleGVjdXRlIGFyYml0cmFyeSBjb2RlIHdoZW4gUG9wcGVyLmpzIGdldCBpbml0ZWRcbiAgICAvLyBzdWNoIGNvZGUgaXMgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgb2YgaXRzIG1vZGlmaWVyXG4gICAgLy8gdGhleSBjb3VsZCBhZGQgbmV3IHByb3BlcnRpZXMgdG8gdGhlaXIgb3B0aW9ucyBjb25maWd1cmF0aW9uXG4gICAgLy8gQkUgQVdBUkU6IGRvbid0IGFkZCBvcHRpb25zIHRvIGBvcHRpb25zLm1vZGlmaWVycy5uYW1lYCBidXQgdG8gYG1vZGlmaWVyT3B0aW9uc2AhXG4gICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXJPcHRpb25zKSB7XG4gICAgICBpZiAobW9kaWZpZXJPcHRpb25zLmVuYWJsZWQgJiYgaXNGdW5jdGlvbihtb2RpZmllck9wdGlvbnMub25Mb2FkKSkge1xuICAgICAgICBtb2RpZmllck9wdGlvbnMub25Mb2FkKF90aGlzLnJlZmVyZW5jZSwgX3RoaXMucG9wcGVyLCBfdGhpcy5vcHRpb25zLCBtb2RpZmllck9wdGlvbnMsIF90aGlzLnN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGZpcmUgdGhlIGZpcnN0IHVwZGF0ZSB0byBwb3NpdGlvbiB0aGUgcG9wcGVyIGluIHRoZSByaWdodCBwbGFjZVxuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICB2YXIgZXZlbnRzRW5hYmxlZCA9IHRoaXMub3B0aW9ucy5ldmVudHNFbmFibGVkO1xuICAgIGlmIChldmVudHNFbmFibGVkKSB7XG4gICAgICAvLyBzZXR1cCBldmVudCBsaXN0ZW5lcnMsIHRoZXkgd2lsbCB0YWtlIGNhcmUgb2YgdXBkYXRlIHRoZSBwb3NpdGlvbiBpbiBzcGVjaWZpYyBzaXR1YXRpb25zXG4gICAgICB0aGlzLmVuYWJsZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZS5ldmVudHNFbmFibGVkID0gZXZlbnRzRW5hYmxlZDtcbiAgfVxuXG4gIC8vIFdlIGNhbid0IHVzZSBjbGFzcyBwcm9wZXJ0aWVzIGJlY2F1c2UgdGhleSBkb24ndCBnZXQgbGlzdGVkIGluIHRoZVxuICAvLyBjbGFzcyBwcm90b3R5cGUgYW5kIGJyZWFrIHN0dWZmIGxpa2UgU2lub24gc3R1YnNcblxuXG4gIGNyZWF0ZUNsYXNzKFBvcHBlciwgW3tcbiAgICBrZXk6ICd1cGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUkJDEoKSB7XG4gICAgICByZXR1cm4gdXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3kkJDEoKSB7XG4gICAgICByZXR1cm4gZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuYWJsZUV2ZW50TGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlRXZlbnRMaXN0ZW5lcnMkJDEoKSB7XG4gICAgICByZXR1cm4gZW5hYmxlRXZlbnRMaXN0ZW5lcnMuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlRXZlbnRMaXN0ZW5lcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMkJDEoKSB7XG4gICAgICByZXR1cm4gZGlzYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2NoZWR1bGVzIGFuIHVwZGF0ZS4gSXQgd2lsbCBydW4gb24gdGhlIG5leHQgVUkgdXBkYXRlIGF2YWlsYWJsZS5cbiAgICAgKiBAbWV0aG9kIHNjaGVkdWxlVXBkYXRlXG4gICAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIHV0aWxpdGllcyB1c2VmdWwgd2hlbiB3cml0aW5nIGN1c3RvbSBtb2RpZmllcnMuXG4gICAgICogU3RhcnRpbmcgZnJvbSB2ZXJzaW9uIDEuNywgdGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIG9ubHkgaWYgeW91XG4gICAgICogaW5jbHVkZSBgcG9wcGVyLXV0aWxzLmpzYCBiZWZvcmUgYHBvcHBlci5qc2AuXG4gICAgICpcbiAgICAgKiAqKkRFUFJFQ0FUSU9OKio6IFRoaXMgd2F5IHRvIGFjY2VzcyBQb3BwZXJVdGlscyBpcyBkZXByZWNhdGVkXG4gICAgICogYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2MiEgVXNlIHRoZSBQb3BwZXJVdGlscyBtb2R1bGUgZGlyZWN0bHkgaW5zdGVhZC5cbiAgICAgKiBEdWUgdG8gdGhlIGhpZ2ggaW5zdGFiaWxpdHkgb2YgdGhlIG1ldGhvZHMgY29udGFpbmVkIGluIFV0aWxzLCB3ZSBjYW4ndFxuICAgICAqIGd1YXJhbnRlZSB0aGVtIHRvIGZvbGxvdyBzZW12ZXIuIFVzZSB0aGVtIGF0IHlvdXIgb3duIHJpc2shXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuOFxuICAgICAqIEBtZW1iZXIgVXRpbHNcbiAgICAgKiBAbWVtYmVyb2YgUG9wcGVyXG4gICAgICovXG5cbiAgfV0pO1xuICByZXR1cm4gUG9wcGVyO1xufSgpO1xuXG4vKipcbiAqIFRoZSBgcmVmZXJlbmNlT2JqZWN0YCBpcyBhbiBvYmplY3QgdGhhdCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgY29tcGF0aWJsZSB3aXRoIFBvcHBlci5qc1xuICogYW5kIGxldHMgeW91IHVzZSBpdCBhcyByZXBsYWNlbWVudCBvZiBhIHJlYWwgRE9NIG5vZGUuPGJyIC8+XG4gKiBZb3UgY2FuIHVzZSB0aGlzIG1ldGhvZCB0byBwb3NpdGlvbiBhIHBvcHBlciByZWxhdGl2ZWx5IHRvIGEgc2V0IG9mIGNvb3JkaW5hdGVzXG4gKiBpbiBjYXNlIHlvdSBkb24ndCBoYXZlIGEgRE9NIG5vZGUgdG8gdXNlIGFzIHJlZmVyZW5jZS5cbiAqXG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmZXJlbmNlT2JqZWN0LCBwb3BwZXJOb2RlKTtcbiAqIGBgYFxuICpcbiAqIE5COiBUaGlzIGZlYXR1cmUgaXNuJ3Qgc3VwcG9ydGVkIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuICogQG5hbWUgcmVmZXJlbmNlT2JqZWN0XG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBkYXRhLmdldEJvdW5kaW5nQ2xpZW50UmVjdFxuICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzZXQgb2YgY29vcmRpbmF0ZXMgY29tcGF0aWJsZSB3aXRoIHRoZSBuYXRpdmUgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGAgbWV0aG9kLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50V2lkdGhcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgd2lkdGggb2YgdGhlIHZpcnR1YWwgcmVmZXJlbmNlIGVsZW1lbnQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZGF0YS5jbGllbnRIZWlnaHRcbiAqIEFuIEVTNiBnZXR0ZXIgdGhhdCB3aWxsIHJldHVybiB0aGUgaGVpZ2h0IG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICovXG5cblxuUG9wcGVyLlV0aWxzID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogZ2xvYmFsKS5Qb3BwZXJVdGlscztcblBvcHBlci5wbGFjZW1lbnRzID0gcGxhY2VtZW50cztcblBvcHBlci5EZWZhdWx0cyA9IERlZmF1bHRzO1xuXG5leHBvcnQgZGVmYXVsdCBQb3BwZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3BwZXIuanMubWFwXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgKHY0LjMuMSk6IGRyb3Bkb3duLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcydcbmltcG9ydCBVdGlsIGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvbnN0YW50c1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTkFNRSAgICAgICAgICAgICAgICAgICAgID0gJ2Ryb3Bkb3duJ1xuY29uc3QgVkVSU0lPTiAgICAgICAgICAgICAgICAgID0gJzQuMy4xJ1xuY29uc3QgREFUQV9LRVkgICAgICAgICAgICAgICAgID0gJ2JzLmRyb3Bkb3duJ1xuY29uc3QgRVZFTlRfS0VZICAgICAgICAgICAgICAgID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSAgICAgICAgICAgICA9ICcuZGF0YS1hcGknXG5jb25zdCBKUVVFUllfTk9fQ09ORkxJQ1QgICAgICAgPSAkLmZuW05BTUVdXG5jb25zdCBFU0NBUEVfS0VZQ09ERSAgICAgICAgICAgPSAyNyAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XG5jb25zdCBTUEFDRV9LRVlDT0RFICAgICAgICAgICAgPSAzMiAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBzcGFjZSBrZXlcbmNvbnN0IFRBQl9LRVlDT0RFICAgICAgICAgICAgICA9IDkgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxuY29uc3QgQVJST1dfVVBfS0VZQ09ERSAgICAgICAgID0gMzggLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdXAgYXJyb3cga2V5XG5jb25zdCBBUlJPV19ET1dOX0tFWUNPREUgICAgICAgPSA0MCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBkb3duIGFycm93IGtleVxuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OX1dISUNIID0gMyAvLyBNb3VzZUV2ZW50LndoaWNoIHZhbHVlIGZvciB0aGUgcmlnaHQgYnV0dG9uIChhc3N1bWluZyBhIHJpZ2h0LWhhbmRlZCBtb3VzZSlcbmNvbnN0IFJFR0VYUF9LRVlET1dOICAgICAgICAgICA9IG5ldyBSZWdFeHAoYCR7QVJST1dfVVBfS0VZQ09ERX18JHtBUlJPV19ET1dOX0tFWUNPREV9fCR7RVNDQVBFX0tFWUNPREV9YClcblxuY29uc3QgRXZlbnQgPSB7XG4gIEhJREUgICAgICAgICAgICAgOiBgaGlkZSR7RVZFTlRfS0VZfWAsXG4gIEhJRERFTiAgICAgICAgICAgOiBgaGlkZGVuJHtFVkVOVF9LRVl9YCxcbiAgU0hPVyAgICAgICAgICAgICA6IGBzaG93JHtFVkVOVF9LRVl9YCxcbiAgU0hPV04gICAgICAgICAgICA6IGBzaG93biR7RVZFTlRfS0VZfWAsXG4gIENMSUNLICAgICAgICAgICAgOiBgY2xpY2ske0VWRU5UX0tFWX1gLFxuICBDTElDS19EQVRBX0FQSSAgIDogYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgS0VZRE9XTl9EQVRBX0FQSSA6IGBrZXlkb3duJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YCxcbiAgS0VZVVBfREFUQV9BUEkgICA6IGBrZXl1cCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbn1cblxuY29uc3QgQ2xhc3NOYW1lID0ge1xuICBESVNBQkxFRCAgICAgICAgOiAnZGlzYWJsZWQnLFxuICBTSE9XICAgICAgICAgICAgOiAnc2hvdycsXG4gIERST1BVUCAgICAgICAgICA6ICdkcm9wdXAnLFxuICBEUk9QUklHSFQgICAgICAgOiAnZHJvcHJpZ2h0JyxcbiAgRFJPUExFRlQgICAgICAgIDogJ2Ryb3BsZWZ0JyxcbiAgTUVOVVJJR0hUICAgICAgIDogJ2Ryb3Bkb3duLW1lbnUtcmlnaHQnLFxuICBNRU5VTEVGVCAgICAgICAgOiAnZHJvcGRvd24tbWVudS1sZWZ0JyxcbiAgUE9TSVRJT05fU1RBVElDIDogJ3Bvc2l0aW9uLXN0YXRpYydcbn1cblxuY29uc3QgU2VsZWN0b3IgPSB7XG4gIERBVEFfVE9HR0xFICAgOiAnW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl0nLFxuICBGT1JNX0NISUxEICAgIDogJy5kcm9wZG93biBmb3JtJyxcbiAgTUVOVSAgICAgICAgICA6ICcuZHJvcGRvd24tbWVudScsXG4gIE5BVkJBUl9OQVYgICAgOiAnLm5hdmJhci1uYXYnLFxuICBWSVNJQkxFX0lURU1TIDogJy5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xufVxuXG5jb25zdCBBdHRhY2htZW50TWFwID0ge1xuICBUT1AgICAgICAgOiAndG9wLXN0YXJ0JyxcbiAgVE9QRU5EICAgIDogJ3RvcC1lbmQnLFxuICBCT1RUT00gICAgOiAnYm90dG9tLXN0YXJ0JyxcbiAgQk9UVE9NRU5EIDogJ2JvdHRvbS1lbmQnLFxuICBSSUdIVCAgICAgOiAncmlnaHQtc3RhcnQnLFxuICBSSUdIVEVORCAgOiAncmlnaHQtZW5kJyxcbiAgTEVGVCAgICAgIDogJ2xlZnQtc3RhcnQnLFxuICBMRUZURU5EICAgOiAnbGVmdC1lbmQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIG9mZnNldCAgICA6IDAsXG4gIGZsaXAgICAgICA6IHRydWUsXG4gIGJvdW5kYXJ5ICA6ICdzY3JvbGxQYXJlbnQnLFxuICByZWZlcmVuY2UgOiAndG9nZ2xlJyxcbiAgZGlzcGxheSAgIDogJ2R5bmFtaWMnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBvZmZzZXQgICAgOiAnKG51bWJlcnxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgZmxpcCAgICAgIDogJ2Jvb2xlYW4nLFxuICBib3VuZGFyeSAgOiAnKHN0cmluZ3xlbGVtZW50KScsXG4gIHJlZmVyZW5jZSA6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgZGlzcGxheSAgIDogJ3N0cmluZydcbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENsYXNzIERlZmluaXRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNsYXNzIERyb3Bkb3duIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgdGhpcy5fZWxlbWVudCAgPSBlbGVtZW50XG4gICAgdGhpcy5fcG9wcGVyICAgPSBudWxsXG4gICAgdGhpcy5fY29uZmlnICAgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX21lbnUgICAgID0gdGhpcy5fZ2V0TWVudUVsZW1lbnQoKVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcblxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcblxuICBzdGF0aWMgZ2V0IFZFUlNJT04oKSB7XG4gICAgcmV0dXJuIFZFUlNJT05cbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudC5kaXNhYmxlZCB8fCAkKHRoaXMuX2VsZW1lbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5ESVNBQkxFRCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHBhcmVudCAgID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG4gICAgY29uc3QgaXNBY3RpdmUgPSAkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgRHJvcGRvd24uX2NsZWFyTWVudXMoKVxuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHRvdGFsbHkgUG9wcGVyLmpzIGZvciBEcm9wZG93biBpbiBOYXZiYXJcbiAgICBpZiAoIXRoaXMuX2luTmF2YmFyKSB7XG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGZvciBQb3BwZXIgZGVwZW5kZW5jeVxuICAgICAgICogUG9wcGVyIC0gaHR0cHM6Ly9wb3BwZXIuanMub3JnXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb290c3RyYXBcXCdzIGRyb3Bkb3ducyByZXF1aXJlIFBvcHBlci5qcyAoaHR0cHM6Ly9wb3BwZXIuanMub3JnLyknKVxuICAgICAgfVxuXG4gICAgICBsZXQgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRcblxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBwYXJlbnRcbiAgICAgIH0gZWxzZSBpZiAoVXRpbC5pc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGpRdWVyeSBlbGVtZW50XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZS5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVmZXJlbmNlRWxlbWVudCA9IHRoaXMuX2NvbmZpZy5yZWZlcmVuY2VbMF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBib3VuZGFyeSBpcyBub3QgYHNjcm9sbFBhcmVudGAsIHRoZW4gc2V0IHBvc2l0aW9uIHRvIGBzdGF0aWNgXG4gICAgICAvLyB0byBhbGxvdyB0aGUgbWVudSB0byBcImVzY2FwZVwiIHRoZSBzY3JvbGwgcGFyZW50J3MgYm91bmRhcmllc1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8yNDI1MVxuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5ib3VuZGFyeSAhPT0gJ3Njcm9sbFBhcmVudCcpIHtcbiAgICAgICAgJChwYXJlbnQpLmFkZENsYXNzKENsYXNzTmFtZS5QT1NJVElPTl9TVEFUSUMpXG4gICAgICB9XG4gICAgICB0aGlzLl9wb3BwZXIgPSBuZXcgUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHRoaXMuX2dldFBvcHBlckNvbmZpZygpKVxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSBhZGQgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHRvIHRoZSBib2R5J3MgaW1tZWRpYXRlIGNoaWxkcmVuO1xuICAgIC8vIG9ubHkgbmVlZGVkIGJlY2F1c2Ugb2YgYnJva2VuIGV2ZW50IGRlbGVnYXRpb24gb24gaU9TXG4gICAgLy8gaHR0cHM6Ly93d3cucXVpcmtzbW9kZS5vcmcvYmxvZy9hcmNoaXZlcy8yMDE0LzAyL21vdXNlX2V2ZW50X2J1Yi5odG1sXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJlxuICAgICAgICAkKHBhcmVudCkuY2xvc2VzdChTZWxlY3Rvci5OQVZCQVJfTkFWKS5sZW5ndGggPT09IDApIHtcbiAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vbignbW91c2VvdmVyJywgbnVsbCwgJC5ub29wKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuZm9jdXMoKVxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcblxuICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LlNIT1dOLCByZWxhdGVkVGFyZ2V0KSlcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZGlzYWJsZWQgfHwgJCh0aGlzLl9lbGVtZW50KS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpIHx8ICQodGhpcy5fbWVudSkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cbiAgICBjb25zdCBzaG93RXZlbnQgPSAkLkV2ZW50KEV2ZW50LlNIT1csIHJlbGF0ZWRUYXJnZXQpXG4gICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAkKHBhcmVudCkudHJpZ2dlcihzaG93RXZlbnQpXG5cbiAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAkKHRoaXMuX21lbnUpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICQocGFyZW50KVxuICAgICAgLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgLnRyaWdnZXIoJC5FdmVudChFdmVudC5TSE9XTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LmRpc2FibGVkIHx8ICQodGhpcy5fZWxlbWVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLkRJU0FCTEVEKSB8fCAhJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuU0hPVykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiB0aGlzLl9lbGVtZW50XG4gICAgfVxuICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBjb25zdCBwYXJlbnQgPSBEcm9wZG93bi5fZ2V0UGFyZW50RnJvbUVsZW1lbnQodGhpcy5fZWxlbWVudClcblxuICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcblxuICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgICQodGhpcy5fbWVudSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgJChwYXJlbnQpXG4gICAgICAudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LkhJRERFTiwgcmVsYXRlZFRhcmdldCkpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgICQucmVtb3ZlRGF0YSh0aGlzLl9lbGVtZW50LCBEQVRBX0tFWSlcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9mZihFVkVOVF9LRVkpXG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9tZW51ID0gbnVsbFxuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5kZXN0cm95KClcbiAgICAgIHRoaXMuX3BvcHBlciA9IG51bGxcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3BvcHBlci5zY2hlZHVsZVVwZGF0ZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAkKHRoaXMuX2VsZW1lbnQpLm9uKEV2ZW50LkNMSUNLLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0LFxuICAgICAgLi4uJCh0aGlzLl9lbGVtZW50KS5kYXRhKCksXG4gICAgICAuLi5jb25maWdcbiAgICB9XG5cbiAgICBVdGlsLnR5cGVDaGVja0NvbmZpZyhcbiAgICAgIE5BTUUsXG4gICAgICBjb25maWcsXG4gICAgICB0aGlzLmNvbnN0cnVjdG9yLkRlZmF1bHRUeXBlXG4gICAgKVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2dldE1lbnVFbGVtZW50KCkge1xuICAgIGlmICghdGhpcy5fbWVudSkge1xuICAgICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRoaXMuX2VsZW1lbnQpXG5cbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5fbWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKFNlbGVjdG9yLk1FTlUpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9tZW51XG4gIH1cblxuICBfZ2V0UGxhY2VtZW50KCkge1xuICAgIGNvbnN0ICRwYXJlbnREcm9wZG93biA9ICQodGhpcy5fZWxlbWVudC5wYXJlbnROb2RlKVxuICAgIGxldCBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkJPVFRPTVxuXG4gICAgLy8gSGFuZGxlIGRyb3B1cFxuICAgIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BVUCkpIHtcbiAgICAgIHBsYWNlbWVudCA9IEF0dGFjaG1lbnRNYXAuVE9QXG4gICAgICBpZiAoJCh0aGlzLl9tZW51KS5oYXNDbGFzcyhDbGFzc05hbWUuTUVOVVJJR0hUKSkge1xuICAgICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlRPUEVORFxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoJHBhcmVudERyb3Bkb3duLmhhc0NsYXNzKENsYXNzTmFtZS5EUk9QUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLlJJR0hUXG4gICAgfSBlbHNlIGlmICgkcGFyZW50RHJvcGRvd24uaGFzQ2xhc3MoQ2xhc3NOYW1lLkRST1BMRUZUKSkge1xuICAgICAgcGxhY2VtZW50ID0gQXR0YWNobWVudE1hcC5MRUZUXG4gICAgfSBlbHNlIGlmICgkKHRoaXMuX21lbnUpLmhhc0NsYXNzKENsYXNzTmFtZS5NRU5VUklHSFQpKSB7XG4gICAgICBwbGFjZW1lbnQgPSBBdHRhY2htZW50TWFwLkJPVFRPTUVORFxuICAgIH1cbiAgICByZXR1cm4gcGxhY2VtZW50XG4gIH1cblxuICBfZGV0ZWN0TmF2YmFyKCkge1xuICAgIHJldHVybiAkKHRoaXMuX2VsZW1lbnQpLmNsb3Nlc3QoJy5uYXZiYXInKS5sZW5ndGggPiAwXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IHt9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuX2NvbmZpZy5vZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9mZnNldC5mbiA9IChkYXRhKSA9PiB7XG4gICAgICAgIGRhdGEub2Zmc2V0cyA9IHtcbiAgICAgICAgICAuLi5kYXRhLm9mZnNldHMsXG4gICAgICAgICAgLi4udGhpcy5fY29uZmlnLm9mZnNldChkYXRhLm9mZnNldHMsIHRoaXMuX2VsZW1lbnQpIHx8IHt9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQub2Zmc2V0ID0gdGhpcy5fY29uZmlnLm9mZnNldFxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoKSB7XG4gICAgY29uc3QgcG9wcGVyQ29uZmlnID0ge1xuICAgICAgcGxhY2VtZW50OiB0aGlzLl9nZXRQbGFjZW1lbnQoKSxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpLFxuICAgICAgICBmbGlwOiB7XG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmZsaXBcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgICAgICAgYm91bmRhcmllc0VsZW1lbnQ6IHRoaXMuX2NvbmZpZy5ib3VuZGFyeVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIuanMgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kaXNwbGF5ID09PSAnc3RhdGljJykge1xuICAgICAgcG9wcGVyQ29uZmlnLm1vZGlmaWVycy5hcHBseVN0eWxlID0ge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb3BwZXJDb25maWdcbiAgfVxuXG4gIC8vIFN0YXRpY1xuXG4gIHN0YXRpYyBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpXG4gICAgICBjb25zdCBfY29uZmlnID0gdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgPyBjb25maWcgOiBudWxsXG5cbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICBkYXRhID0gbmV3IERyb3Bkb3duKHRoaXMsIF9jb25maWcpXG4gICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSlcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YVtjb25maWddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgICAgfVxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgX2NsZWFyTWVudXMoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LndoaWNoID09PSBSSUdIVF9NT1VTRV9CVVRUT05fV0hJQ0ggfHxcbiAgICAgIGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggIT09IFRBQl9LRVlDT0RFKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5EQVRBX1RPR0dMRSkpXG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdG9nZ2xlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgcGFyZW50ID0gRHJvcGRvd24uX2dldFBhcmVudEZyb21FbGVtZW50KHRvZ2dsZXNbaV0pXG4gICAgICBjb25zdCBjb250ZXh0ID0gJCh0b2dnbGVzW2ldKS5kYXRhKERBVEFfS0VZKVxuICAgICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogdG9nZ2xlc1tpXVxuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHJvcGRvd25NZW51ID0gY29udGV4dC5fbWVudVxuICAgICAgaWYgKCEkKHBhcmVudCkuaGFzQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJyAmJlxuICAgICAgICAgIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpIHx8IGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQud2hpY2ggPT09IFRBQl9LRVlDT0RFKSAmJlxuICAgICAgICAgICQuY29udGFpbnMocGFyZW50LCBldmVudC50YXJnZXQpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhpZGVFdmVudCA9ICQuRXZlbnQoRXZlbnQuSElERSwgcmVsYXRlZFRhcmdldClcbiAgICAgICQocGFyZW50KS50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAgIGlmIChoaWRlRXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgd2UgYWRkZWQgZm9yIGlPUyBzdXBwb3J0XG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkuY2hpbGRyZW4oKS5vZmYoJ21vdXNlb3ZlcicsIG51bGwsICQubm9vcClcbiAgICAgIH1cblxuICAgICAgdG9nZ2xlc1tpXS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuXG4gICAgICAkKGRyb3Bkb3duTWVudSkucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLlNIT1cpXG4gICAgICAkKHBhcmVudClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5TSE9XKVxuICAgICAgICAudHJpZ2dlcigkLkV2ZW50KEV2ZW50LkhJRERFTiwgcmVsYXRlZFRhcmdldCkpXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9nZXRQYXJlbnRGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IHBhcmVudFxuICAgIGNvbnN0IHNlbGVjdG9yID0gVXRpbC5nZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpXG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmVudCB8fCBlbGVtZW50LnBhcmVudE5vZGVcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIHN0YXRpYyBfZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIEFuZCBub3QgYSBrZXkgaW4gUkVHRVhQX0tFWURPV04gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhOlxuICAgIC8vICAtIElmIHNwYWNlIGtleSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG4gICAgLy8gIC0gSWYga2V5IGlzIG90aGVyIHRoYW4gZXNjYXBlXG4gICAgLy8gICAgLSBJZiBrZXkgaXMgbm90IHVwIG9yIGRvd24gPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vICAgIC0gSWYgdHJpZ2dlciBpbnNpZGUgdGhlIG1lbnUgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIGlmICgvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGV2ZW50LnRhcmdldC50YWdOYW1lKVxuICAgICAgPyBldmVudC53aGljaCA9PT0gU1BBQ0VfS0VZQ09ERSB8fCBldmVudC53aGljaCAhPT0gRVNDQVBFX0tFWUNPREUgJiZcbiAgICAgIChldmVudC53aGljaCAhPT0gQVJST1dfRE9XTl9LRVlDT0RFICYmIGV2ZW50LndoaWNoICE9PSBBUlJPV19VUF9LRVlDT0RFIHx8XG4gICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFNlbGVjdG9yLk1FTlUpLmxlbmd0aCkgOiAhUkVHRVhQX0tFWURPV04udGVzdChldmVudC53aGljaCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgJCh0aGlzKS5oYXNDbGFzcyhDbGFzc05hbWUuRElTQUJMRUQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwYXJlbnQgICA9IERyb3Bkb3duLl9nZXRQYXJlbnRGcm9tRWxlbWVudCh0aGlzKVxuICAgIGNvbnN0IGlzQWN0aXZlID0gJChwYXJlbnQpLmhhc0NsYXNzKENsYXNzTmFtZS5TSE9XKVxuXG4gICAgaWYgKCFpc0FjdGl2ZSB8fCBpc0FjdGl2ZSAmJiAoZXZlbnQud2hpY2ggPT09IEVTQ0FQRV9LRVlDT0RFIHx8IGV2ZW50LndoaWNoID09PSBTUEFDRV9LRVlDT0RFKSkge1xuICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgICBjb25zdCB0b2dnbGUgPSBwYXJlbnQucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5EQVRBX1RPR0dMRSlcbiAgICAgICAgJCh0b2dnbGUpLnRyaWdnZXIoJ2ZvY3VzJylcbiAgICAgIH1cblxuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjbGljaycpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IFtdLnNsaWNlLmNhbGwocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuVklTSUJMRV9JVEVNUykpXG5cbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgaW5kZXggPSBpdGVtcy5pbmRleE9mKGV2ZW50LnRhcmdldClcblxuICAgIGlmIChldmVudC53aGljaCA9PT0gQVJST1dfVVBfS0VZQ09ERSAmJiBpbmRleCA+IDApIHsgLy8gVXBcbiAgICAgIGluZGV4LS1cbiAgICB9XG5cbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IEFSUk9XX0RPV05fS0VZQ09ERSAmJiBpbmRleCA8IGl0ZW1zLmxlbmd0aCAtIDEpIHsgLy8gRG93blxuICAgICAgaW5kZXgrK1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGluZGV4ID0gMFxuICAgIH1cblxuICAgIGl0ZW1zW2luZGV4XS5mb2N1cygpXG4gIH1cbn1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4kKGRvY3VtZW50KVxuICAub24oRXZlbnQuS0VZRE9XTl9EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIERyb3Bkb3duLl9kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG4gIC5vbihFdmVudC5LRVlET1dOX0RBVEFfQVBJLCBTZWxlY3Rvci5NRU5VLCBEcm9wZG93bi5fZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuICAub24oYCR7RXZlbnQuQ0xJQ0tfREFUQV9BUEl9ICR7RXZlbnQuS0VZVVBfREFUQV9BUEl9YCwgRHJvcGRvd24uX2NsZWFyTWVudXMpXG4gIC5vbihFdmVudC5DTElDS19EQVRBX0FQSSwgU2VsZWN0b3IuREFUQV9UT0dHTEUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2UuY2FsbCgkKHRoaXMpLCAndG9nZ2xlJylcbiAgfSlcbiAgLm9uKEV2ZW50LkNMSUNLX0RBVEFfQVBJLCBTZWxlY3Rvci5GT1JNX0NISUxELCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgfSlcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGpRdWVyeVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuJC5mbltOQU1FXSA9IERyb3Bkb3duLl9qUXVlcnlJbnRlcmZhY2VcbiQuZm5bTkFNRV0uQ29uc3RydWN0b3IgPSBEcm9wZG93blxuJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gKCkgPT4ge1xuICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUXG4gIHJldHVybiBEcm9wZG93bi5falF1ZXJ5SW50ZXJmYWNlXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCAodjQuMy4xKTogdXRpbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmNvbnN0IFRSQU5TSVRJT05fRU5EID0gJ3RyYW5zaXRpb25lbmQnXG5jb25zdCBNQVhfVUlEID0gMTAwMDAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5cbi8vIFNob3V0b3V0IEFuZ3VzQ3JvbGwgKGh0dHBzOi8vZ29vLmdsL3B4d1FHcClcbmZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpdKykvaSlbMV0udG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBnZXRTcGVjaWFsVHJhbnNpdGlvbkVuZEV2ZW50KCkge1xuICByZXR1cm4ge1xuICAgIGJpbmRUeXBlOiBUUkFOU0lUSU9OX0VORCxcbiAgICBkZWxlZ2F0ZVR5cGU6IFRSQU5TSVRJT05fRU5ELFxuICAgIGhhbmRsZShldmVudCkge1xuICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xuICAgICAgICByZXR1cm4gZXZlbnQuaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmaW5lZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xuICAgIGNhbGxlZCA9IHRydWVcbiAgfSlcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzKVxuICAgIH1cbiAgfSwgZHVyYXRpb24pXG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNpdGlvbkVuZFN1cHBvcnQoKSB7XG4gICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kRW11bGF0b3JcbiAgJC5ldmVudC5zcGVjaWFsW1V0aWwuVFJBTlNJVElPTl9FTkRdID0gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpXG59XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1YmxpYyBVdGlsIEFwaVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5jb25zdCBVdGlsID0ge1xuXG4gIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcblxuICBnZXRVSUQocHJlZml4KSB7XG4gICAgZG8ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgIHByZWZpeCArPSB+fihNYXRoLnJhbmRvbSgpICogTUFYX1VJRCkgLy8gXCJ+flwiIGFjdHMgbGlrZSBhIGZhc3RlciBNYXRoLmZsb29yKCkgaGVyZVxuICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG4gICAgcmV0dXJuIHByZWZpeFxuICB9LFxuXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGxldCBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSAnIycpIHtcbiAgICAgIGNvbnN0IGhyZWZBdHRyID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBocmVmQXR0ciAmJiBocmVmQXR0ciAhPT0gJyMnID8gaHJlZkF0dHIudHJpbSgpIDogJydcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfSxcblxuICBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIC8vIEdldCB0cmFuc2l0aW9uLWR1cmF0aW9uIG9mIHRoZSBlbGVtZW50XG4gICAgbGV0IHRyYW5zaXRpb25EdXJhdGlvbiA9ICQoZWxlbWVudCkuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJylcbiAgICBsZXQgdHJhbnNpdGlvbkRlbGF5ID0gJChlbGVtZW50KS5jc3MoJ3RyYW5zaXRpb24tZGVsYXknKVxuXG4gICAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICBjb25zdCBmbG9hdFRyYW5zaXRpb25EZWxheSA9IHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gICAgLy8gUmV0dXJuIDAgaWYgZWxlbWVudCBvciB0cmFuc2l0aW9uIGR1cmF0aW9uIGlzIG5vdCBmb3VuZFxuICAgIGlmICghZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gJiYgIWZsb2F0VHJhbnNpdGlvbkRlbGF5KSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIC8vIElmIG11bHRpcGxlIGR1cmF0aW9ucyBhcmUgZGVmaW5lZCwgdGFrZSB0aGUgZmlyc3RcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICAgIHRyYW5zaXRpb25EZWxheSA9IHRyYW5zaXRpb25EZWxheS5zcGxpdCgnLCcpWzBdXG5cbiAgICByZXR1cm4gKHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIHBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KSkgKiBNSUxMSVNFQ09ORFNfTVVMVElQTElFUlxuICB9LFxuXG4gIHJlZmxvdyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH0sXG5cbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQoZWxlbWVudCkge1xuICAgICQoZWxlbWVudCkudHJpZ2dlcihUUkFOU0lUSU9OX0VORClcbiAgfSxcblxuICAvLyBUT0RPOiBSZW1vdmUgaW4gdjVcbiAgc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkge1xuICAgIHJldHVybiBCb29sZWFuKFRSQU5TSVRJT05fRU5EKVxuICB9LFxuXG4gIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXG4gIH0sXG5cbiAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGNvbmZpZ1R5cGVzKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZ1R5cGVzLCBwcm9wZXJ0eSkpIHtcbiAgICAgICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCB2YWx1ZSAgICAgICAgID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgICBjb25zdCB2YWx1ZVR5cGUgICAgID0gdmFsdWUgJiYgVXRpbC5pc0VsZW1lbnQodmFsdWUpXG4gICAgICAgICAgPyAnZWxlbWVudCcgOiB0b1R5cGUodmFsdWUpXG5cbiAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGAke2NvbXBvbmVudE5hbWUudG9VcHBlckNhc2UoKX06IGAgK1xuICAgICAgICAgICAgYE9wdGlvbiBcIiR7cHJvcGVydHl9XCIgcHJvdmlkZWQgdHlwZSBcIiR7dmFsdWVUeXBlfVwiIGAgK1xuICAgICAgICAgICAgYGJ1dCBleHBlY3RlZCB0eXBlIFwiJHtleHBlY3RlZFR5cGVzfVwiLmApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZmluZFNoYWRvd1Jvb3QoZWxlbWVudCkge1xuICAgIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQuZ2V0Um9vdE5vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSBlbGVtZW50LmdldFJvb3ROb2RlKClcbiAgICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIC8vIHdoZW4gd2UgZG9uJ3QgZmluZCBhIHNoYWRvdyByb290XG4gICAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIFV0aWwuZmluZFNoYWRvd1Jvb3QoZWxlbWVudC5wYXJlbnROb2RlKVxuICB9XG59XG5cbnNldFRyYW5zaXRpb25FbmRTdXBwb3J0KClcblxuZXhwb3J0IGRlZmF1bHQgVXRpbFxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==