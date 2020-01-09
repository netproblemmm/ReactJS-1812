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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\src\\\\index.jsx: Unexpected token (5:11)\\n\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 5 | \\u001b[39m\\u001b[36mconst\\u001b[39m el \\u001b[33m=\\u001b[39m \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"element\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mSome\\u001b[39m react here\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 6 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 7 | \\u001b[39m\\u001b[33mReactDom\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[0m\\n\\u001b[0m \\u001b[90m 8 | \\u001b[39m    el\\u001b[33m,\\u001b[39m\\u001b[0m\\n    at Parser.raise (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7012:17)\\n    at Parser.unexpected (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8405:16)\\n    at Parser.parseExprAtom (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9661:20)\\n    at Parser.parseExprSubscripts (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9237:23)\\n    at Parser.parseMaybeUnary (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9217:21)\\n    at Parser.parseExprOps (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9083:23)\\n    at Parser.parseMaybeConditional (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9056:23)\\n    at Parser.parseMaybeAssign (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9015:21)\\n    at Parser.parseVar (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11341:26)\\n    at Parser.parseVarStatement (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11160:10)\\n    at Parser.parseStatementContent (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10757:21)\\n    at Parser.parseStatement (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10690:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11266:25)\\n    at Parser.parseBlockBody (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11253:10)\\n    at Parser.parseTopLevel (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10621:10)\\n    at Parser.parse (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12131:10)\\n    at parse (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12182:38)\\n    at parser (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:187:34)\\n    at normalizeFile (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:113:11)\\n    at runSync (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at D:\\\\Marina\\\\Documents\\\\Marina Vinogradova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34\\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)\");\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ })

/******/ });