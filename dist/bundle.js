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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/dragEvents.js":
/*!******************************!*\
  !*** ./src/js/dragEvents.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () { \n    const contentWrapper = document.querySelector('.content')\n    const optionElements = document.querySelectorAll('.options div')\n    let currentElement, oldElement;\n    // remove active class when clicked on other component\n    document.onclick = function(e){\n        if(currentElement !== oldElement) {\n            if(oldElement) oldElement.classList.remove('active')\n        } \n        oldElement = currentElement\n     };\n\n    optionElements.forEach(option => {\n        option.addEventListener('dragstart', onDragStart)\n    })\n    \n    \n    contentWrapper.addEventListener('dragover', onDragOver)\n    contentWrapper.addEventListener('drop', onDrop)\n    \n    function onDragStart(event) {\n        // the dataTransfer object’s property setData\n        // first param declares the format\n        // second param declares the actual data\n        event\n            .dataTransfer\n            .setData('text/plain', event.target.classList[0]);\n    }\n    \n    function onDragOver(event) {\n        // the browser prevents dropping by default\n        event.preventDefault();\n    }\n    \n    function onDrop(event) {\n        // the data set before in $onDragStart\n        const className = event.dataTransfer.getData('text');\n        const draggableElement = document.querySelector(`.${className}`);\n        // since the element should stay in the option container, the element gets cloned\n        let nodeCopy = draggableElement.cloneNode(true)\n        // set the same class for upcoming functions\n        nodeCopy.className = className\n        const content = event.target;\n        content.appendChild(nodeCopy);\n      \n        event\n          .dataTransfer\n          .clearData();\n        \n        setupElementEvents(nodeCopy)\n      }\n    \n    function setupElementEvents (node) {\n        node.addEventListener('click', function() {\n            // add active to block to display input\n            node.classList.add('active')\n            // get all childs\n            const childNodes = this.childNodes\n            // get first tagname\n            const tagName = childNodes[1].tagName\n\n            // get input field\n            const changeIndex = getIndex(node, tagName)\n            const changeField = childNodes[changeIndex]\n        \n            const inputIndex = getIndex(node, 'input')\n            const inputField = childNodes[inputIndex]\n            \n            // change first tagname on input\n            inputField.addEventListener('input', function() {\n                const value = inputField.value\n                changeField.textContent = value\n            })\n            currentElement = node\n        })\n    }\n    function getIndex(el, type) {\n        const children = el.childNodes\n        let index = Number\n        children.forEach((child, i) => {\n            if (child.tagName == type.toUpperCase()) {\n                index = i\n            }\n        });    \n        return index ? index : -1\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJhZ0V2ZW50cy5qcz9jZjUyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsNEU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFVBQVU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRTtBQUNUO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Ii4vc3JjL2pzL2RyYWdFdmVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7IFxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIGNvbnN0IG9wdGlvbkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9wdGlvbnMgZGl2JylcbiAgICBsZXQgY3VycmVudEVsZW1lbnQsIG9sZEVsZW1lbnQ7XG4gICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzcyB3aGVuIGNsaWNrZWQgb24gb3RoZXIgY29tcG9uZW50XG4gICAgZG9jdW1lbnQub25jbGljayA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICBpZihjdXJyZW50RWxlbWVudCAhPT0gb2xkRWxlbWVudCkge1xuICAgICAgICAgICAgaWYob2xkRWxlbWVudCkgb2xkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICB9IFxuICAgICAgICBvbGRFbGVtZW50ID0gY3VycmVudEVsZW1lbnRcbiAgICAgfTtcblxuICAgIG9wdGlvbkVsZW1lbnRzLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0KVxuICAgIH0pXG4gICAgXG4gICAgXG4gICAgY29udGVudFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWdPdmVyKVxuICAgIGNvbnRlbnRXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3ApXG4gICAgXG4gICAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgLy8gdGhlIGRhdGFUcmFuc2ZlciBvYmplY3TigJlzIHByb3BlcnR5IHNldERhdGFcbiAgICAgICAgLy8gZmlyc3QgcGFyYW0gZGVjbGFyZXMgdGhlIGZvcm1hdFxuICAgICAgICAvLyBzZWNvbmQgcGFyYW0gZGVjbGFyZXMgdGhlIGFjdHVhbCBkYXRhXG4gICAgICAgIGV2ZW50XG4gICAgICAgICAgICAuZGF0YVRyYW5zZmVyXG4gICAgICAgICAgICAuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgIC8vIHRoZSBicm93c2VyIHByZXZlbnRzIGRyb3BwaW5nIGJ5IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gb25Ecm9wKGV2ZW50KSB7XG4gICAgICAgIC8vIHRoZSBkYXRhIHNldCBiZWZvcmUgaW4gJG9uRHJhZ1N0YXJ0XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gICAgICAgIC8vIHNpbmNlIHRoZSBlbGVtZW50IHNob3VsZCBzdGF5IGluIHRoZSBvcHRpb24gY29udGFpbmVyLCB0aGUgZWxlbWVudCBnZXRzIGNsb25lZFxuICAgICAgICBsZXQgbm9kZUNvcHkgPSBkcmFnZ2FibGVFbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAvLyBzZXQgdGhlIHNhbWUgY2xhc3MgZm9yIHVwY29taW5nIGZ1bmN0aW9uc1xuICAgICAgICBub2RlQ29weS5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgICAgICAgY29uc3QgY29udGVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChub2RlQ29weSk7XG4gICAgICBcbiAgICAgICAgZXZlbnRcbiAgICAgICAgICAuZGF0YVRyYW5zZmVyXG4gICAgICAgICAgLmNsZWFyRGF0YSgpO1xuICAgICAgICBcbiAgICAgICAgc2V0dXBFbGVtZW50RXZlbnRzKG5vZGVDb3B5KVxuICAgICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldHVwRWxlbWVudEV2ZW50cyAobm9kZSkge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBhZGQgYWN0aXZlIHRvIGJsb2NrIHRvIGRpc3BsYXkgaW5wdXRcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIC8vIGdldCBhbGwgY2hpbGRzXG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzXG4gICAgICAgICAgICAvLyBnZXQgZmlyc3QgdGFnbmFtZVxuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9IGNoaWxkTm9kZXNbMV0udGFnTmFtZVxuXG4gICAgICAgICAgICAvLyBnZXQgaW5wdXQgZmllbGRcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUluZGV4ID0gZ2V0SW5kZXgobm9kZSwgdGFnTmFtZSlcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZUZpZWxkID0gY2hpbGROb2Rlc1tjaGFuZ2VJbmRleF1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBpbnB1dEluZGV4ID0gZ2V0SW5kZXgobm9kZSwgJ2lucHV0JylcbiAgICAgICAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBjaGlsZE5vZGVzW2lucHV0SW5kZXhdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNoYW5nZSBmaXJzdCB0YWduYW1lIG9uIGlucHV0XG4gICAgICAgICAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dEZpZWxkLnZhbHVlXG4gICAgICAgICAgICAgICAgY2hhbmdlRmllbGQudGV4dENvbnRlbnQgPSB2YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50ID0gbm9kZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRJbmRleChlbCwgdHlwZSkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGVsLmNoaWxkTm9kZXNcbiAgICAgICAgbGV0IGluZGV4ID0gTnVtYmVyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQudGFnTmFtZSA9PSB0eXBlLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7ICAgIFxuICAgICAgICByZXR1cm4gaW5kZXggPyBpbmRleCA6IC0xXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/dragEvents.js\n");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragEvents */ \"./src/js/dragEvents.js\");\n\n\nObject(_dragEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0LmpzPzQ0YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFxQzs7QUFFckMsMkRBQVUiLCJmaWxlIjoiLi9zcmMvanMvc2NyaXB0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRyYWdFdmVudHMgZnJvbSAnLi9kcmFnRXZlbnRzJ1xuXG5kcmFnRXZlbnRzKCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/script.js\n");

/***/ })

/******/ });