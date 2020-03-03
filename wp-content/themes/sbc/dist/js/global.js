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

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  function read_more() {
    var maxLength = 300;
    $(".service-desc").each(function () {
      var myStr = $(this).text();

      if ($.trim(myStr).length > maxLength) {
        var newStr = myStr.substring(0, maxLength);
        var removedStr = myStr.substring(maxLength, $.trim(myStr).length);
        $(this).empty().html(newStr);
        $(this).append('<span class="more-text">' + removedStr + '</span>');
        $(this).append(' <a href="javascript:void(0)" class="read-more">read more <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></a>');
      }
    });
    $(".read-more").click(function () {
      if ($(this).hasClass('read-less') == 1) {
        $(this).siblings(".more-text").removeClass('d-inline');
        $(this).addClass('read-more');
        $(this).removeClass('read-less');
        $(this).html('read more <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>');
      } else {
        $(this).siblings(".more-text").addClass('d-inline');
        $(this).addClass('read-less');
        $(this).removeClass('read-more');
        $(this).html('read less <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i>');
      }
    });
  }

  ;
  read_more();
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/global.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sites\hydrosystems-kdi\wp-content\themes\sbc\src\js\global.js */"./src/js/global.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJqUXVlcnkiLCIkIiwicmVhZF9tb3JlIiwibWF4TGVuZ3RoIiwiZWFjaCIsIm15U3RyIiwidGV4dCIsInRyaW0iLCJsZW5ndGgiLCJuZXdTdHIiLCJzdWJzdHJpbmciLCJyZW1vdmVkU3RyIiwiZW1wdHkiLCJodG1sIiwiYXBwZW5kIiwiY2xpY2siLCJoYXNDbGFzcyIsInNpYmxpbmdzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQUMsVUFBU0MsQ0FBVCxFQUFZO0FBRWYsV0FBU0MsU0FBVCxHQUFvQjtBQUNoQixRQUFJQyxTQUFTLEdBQUcsR0FBaEI7QUFDQUYsS0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkcsSUFBbkIsQ0FBd0IsWUFBVTtBQUM5QixVQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssSUFBUixFQUFaOztBQUNBLFVBQUdMLENBQUMsQ0FBQ00sSUFBRixDQUFPRixLQUFQLEVBQWNHLE1BQWQsR0FBdUJMLFNBQTFCLEVBQW9DO0FBQ2hDLFlBQUlNLE1BQU0sR0FBR0osS0FBSyxDQUFDSyxTQUFOLENBQWdCLENBQWhCLEVBQW1CUCxTQUFuQixDQUFiO0FBQ0EsWUFBSVEsVUFBVSxHQUFHTixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JQLFNBQWhCLEVBQTJCRixDQUFDLENBQUNNLElBQUYsQ0FBT0YsS0FBUCxFQUFjRyxNQUF6QyxDQUFqQjtBQUNBUCxTQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLEtBQVIsR0FBZ0JDLElBQWhCLENBQXFCSixNQUFyQjtBQUNBUixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFhLE1BQVIsQ0FBZSw2QkFBNkJILFVBQTdCLEdBQTBDLFNBQXpEO0FBQ0FWLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsTUFBUixDQUFlLHdJQUFmO0FBRUg7QUFDSixLQVZEO0FBYUFiLEtBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JjLEtBQWhCLENBQXNCLFlBQVU7QUFDNUIsVUFBSWQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZSxRQUFSLENBQWlCLFdBQWpCLEtBQWlDLENBQXJDLEVBQXVDO0FBQ25DZixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFnQixRQUFSLENBQWlCLFlBQWpCLEVBQStCQyxXQUEvQixDQUEyQyxVQUEzQztBQUNBakIsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0IsUUFBUixDQUFpQixXQUFqQjtBQUNBbEIsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUIsV0FBUixDQUFvQixXQUFwQjtBQUNBakIsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRWSxJQUFSLENBQWEsb0ZBQWI7QUFDSCxPQUxELE1BS007QUFDRlosU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0IsUUFBUixDQUFpQixZQUFqQixFQUErQkUsUUFBL0IsQ0FBd0MsVUFBeEM7QUFDQWxCLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLFFBQVIsQ0FBaUIsV0FBakI7QUFDQWxCLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlCLFdBQVIsQ0FBb0IsV0FBcEI7QUFDQWpCLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVksSUFBUixDQUFhLG9GQUFiO0FBQ0g7QUFDSixLQVpEO0FBY0g7O0FBQUE7QUFDRFgsV0FBUztBQUtaLENBckNLLENBQU4sQyIsImZpbGUiOiJnbG9iYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJqUXVlcnkoZnVuY3Rpb24oJCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWRfbW9yZSgpe1xyXG4gICAgICAgIHZhciBtYXhMZW5ndGggPSAzMDA7XHJcbiAgICAgICAgJChcIi5zZXJ2aWNlLWRlc2NcIikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgbXlTdHIgPSAkKHRoaXMpLnRleHQoKTtcclxuICAgICAgICAgICAgaWYoJC50cmltKG15U3RyKS5sZW5ndGggPiBtYXhMZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgdmFyIG5ld1N0ciA9IG15U3RyLnN1YnN0cmluZygwLCBtYXhMZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZWRTdHIgPSBteVN0ci5zdWJzdHJpbmcobWF4TGVuZ3RoLCAkLnRyaW0obXlTdHIpLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmVtcHR5KCkuaHRtbChuZXdTdHIpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwibW9yZS10ZXh0XCI+JyArIHJlbW92ZWRTdHIgKyAnPC9zcGFuPicpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlbmQoJyA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJyZWFkLW1vcmVcIj5yZWFkIG1vcmUgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYT4nKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICQoXCIucmVhZC1tb3JlXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCAkKHRoaXMpLmhhc0NsYXNzKCdyZWFkLWxlc3MnKSA9PSAxKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoXCIubW9yZS10ZXh0XCIpLnJlbW92ZUNsYXNzKCdkLWlubGluZScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncmVhZC1tb3JlJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdyZWFkLWxlc3MnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuaHRtbCgncmVhZCBtb3JlIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4nKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncyhcIi5tb3JlLXRleHRcIikuYWRkQ2xhc3MoJ2QtaW5saW5lJyk7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdyZWFkLWxlc3MnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3JlYWQtbW9yZScpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKCdyZWFkIGxlc3MgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuICAgIHJlYWRfbW9yZSgpO1xyXG5cclxuXHJcblxyXG5cclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==