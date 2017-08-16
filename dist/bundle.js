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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Html__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Html__);


function header() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__Html__["div"])([{ class: 'header' }], [Object(__WEBPACK_IMPORTED_MODULE_0__Html__["h1"])([{ text: 'Header' }], [])]);
}

function mainSection() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__Html__["div"])([{ class: 'main-section' }], [Object(__WEBPACK_IMPORTED_MODULE_0__Html__["h3"])([{ text: 'Main Section' }], []), Object(__WEBPACK_IMPORTED_MODULE_0__Html__["div"])([{ class: 'intro' }], [Object(__WEBPACK_IMPORTED_MODULE_0__Html__["p"])([{ text: 'Some stuff goes here.' }], [])])]);
}

function view() {
  return [Object(__WEBPACK_IMPORTED_MODULE_0__Html__["div"])([{ id: 'app', class: 'container' }], [header(), mainSection()])];
}

Object(__WEBPACK_IMPORTED_MODULE_0__Html__["render"])(view);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__) {

"use strict";
let node = (type = '', attributes = [], children = []) => {
  return {
    type,
    attributes,
    children
  };
};

function renderTree(tree, parent) {
  tree.map(v => {
    let el = createElement(v);
    setAttributes(v, el);
    renderElement(parent, el);

    if (v.children.length > 0) {
      renderTree(v.children, el);
    }
  });
}

function createElement(node) {
  return document.createElement(node.type);
}

function setAttributes(node, element) {
  node.attributes.map(a => {
    for (let prop in a) {
      switch (prop) {
        case 'id':
          setId(element, a[prop]);
          break;
        case 'class':
          setClass(element, a[prop]);
          break;
        case 'text':
          setText(element, a[prop]);
          break;
      }
    }
  });
}

function setText(element, text) {
  element.innerText = text;
}

function setId(element, val) {
  element.setAttribute('id', val);
}

function setClass(element, val) {
  element.setAttribute('class', val);
}

function renderElement(parent, element) {
  parent.appendChild(element);
}

function render(view) {
  renderTree(view(), document.body);
}

function toExport() {
  let elements = [{ type: 'div' }, { type: 'span' }, { type: 'h1' }, { type: 'h2' }, { type: 'h3' }, { type: 'h4' }, { type: 'h5' }, { type: 'h6' }, { type: 'p' }];

  let toExport = {};

  elements.map(v => {
    toExport[v.type] = (attributes, children) => {
      return node(v.type, attributes, children);
    };
  });

  toExport['render'] = render;

  return toExport;
}

module.exports = toExport();

/***/ })
/******/ ]);