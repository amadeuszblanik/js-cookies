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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MeCookies = function () {
    function MeCookies() {
        var devmode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, MeCookies);

        this.devmode = devmode;
    }

    _createClass(MeCookies, [{
        key: "set",
        value: function set(name, value, time) {
            var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";

            var date = new Date();
            var now = Number.parseInt(new Date().getTime());
            if (time.indexOf("h") == 1) {
                date = Number.parseInt(time) * 3600000 + now;
            } else if (time.indexOf("d") == 1) {
                date = Number.parseInt(time) * 86400000 + now;
            } else if (time.indexOf("m") == 1) {
                date = now + Number.parseInt(time) * 86400000 * 30;
            } else if (time.indexOf("y") == 1) {
                date = now + Number.parseInt(time) * 86400000 * 365;
            }
            date = new Date(date);
            if (this.devmode == true) {
                console.log("🍪 meCookies\n🍪 Cookie name: " + name + "\n🍪 Value: " + value + "\n🍪 Date:" + date + "\n🍪 Path:" + path);
            }
            document.cookie = name + "=" + value + ";expires=" + date + ";path=" + path;
        }
    }, {
        key: "get",
        value: function get(name) {
            name = name + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var decodedCookieArray = decodedCookie.split(';');
            for (var index in decodedCookieArray) {
                var tempThis = decodedCookieArray[index];
                while (tempThis.charAt(0) == ' ') {
                    tempThis = tempThis.substring(1);
                }
                if (tempThis.indexOf(name) > -1) {
                    if (this.devmode == true) {
                        console.log("🍪 meCookies\n🍪 Cookie name: " + name + "\n🍪 Value: " + tempThis.substring(name.length, tempThis.length));
                    }
                    return tempThis.substring(name.length, tempThis.length);
                }
            }
            if (this.devmode == true) {
                console.log("🍪 meCookies\n🍪 Cookie name: " + name + "\n🍪 Not found");
            }
            return null;
        }
    }]);

    return MeCookies;
}();

/***/ })

/******/ });
//# sourceMappingURL=mecookies.js.map