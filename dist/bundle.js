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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elementEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementEvents */ \"./src/js/elementEvents.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () { \n    const contentWrapper = document.querySelector('.content .container')\n    const optionElements = document.querySelectorAll('.options div')\n    let currentElement, oldElement;\n    // remove active class when clicked on other component\n    document.onclick = function(e){\n        \n        if(currentElement !== oldElement) {\n            if(oldElement) {\n                oldElement.classList.remove('active')\n                oldElement.replaceWith(oldElement);\n            }\n        } \n        oldElement = currentElement\n     };\n\n    optionElements.forEach(option => {\n        option.addEventListener('dragstart', onDragStart)\n    })\n    \n    \n    contentWrapper.addEventListener('dragover', onDragOver)\n    contentWrapper.addEventListener('drop', onDrop)\n    \n    function onDragStart(event) {\n        // the dataTransfer object’s property setData\n        // first param declares the format\n        // second param declares the actual data\n        event\n            .dataTransfer\n            .setData('text/plain', event.target.classList[0]);\n    }\n    \n    function onDragOver(event) {\n        // the browser prevents dropping by default\n        event.preventDefault();\n    }\n    \n    function onDrop(event) {\n        // the data set before in $onDragStart\n        const className = event.dataTransfer.getData('text');\n        const draggableElement = document.querySelector(`.${className}`);\n        // since the element should stay in the option container, the element gets cloned\n        let nodeCopy = draggableElement.cloneNode(true)\n        // set the same class for upcoming functions\n        nodeCopy.className = className\n        \n        contentWrapper.appendChild(nodeCopy);\n      \n        event\n          .dataTransfer\n          .clearData();\n        \n        nodeCopy.addEventListener('click', function() {\n            currentElement = this\n        })\n        Object(_elementEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nodeCopy)\n      }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZHJhZ0V2ZW50cy5qcz9jZjUyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBMkM7O0FBRTVCLDRFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsVUFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLDhEQUFhO0FBQ3JCO0FBQ0EsQyIsImZpbGUiOiIuL3NyYy9qcy9kcmFnRXZlbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVsZW1lbnRFdmVudHMgZnJvbSAnLi9lbGVtZW50RXZlbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7IFxuICAgIGNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQgLmNvbnRhaW5lcicpXG4gICAgY29uc3Qgb3B0aW9uRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3B0aW9ucyBkaXYnKVxuICAgIGxldCBjdXJyZW50RWxlbWVudCwgb2xkRWxlbWVudDtcbiAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzIHdoZW4gY2xpY2tlZCBvbiBvdGhlciBjb21wb25lbnRcbiAgICBkb2N1bWVudC5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIFxuICAgICAgICBpZihjdXJyZW50RWxlbWVudCAhPT0gb2xkRWxlbWVudCkge1xuICAgICAgICAgICAgaWYob2xkRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG9sZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBvbGRFbGVtZW50LnJlcGxhY2VXaXRoKG9sZEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgICAgICBvbGRFbGVtZW50ID0gY3VycmVudEVsZW1lbnRcbiAgICAgfTtcblxuICAgIG9wdGlvbkVsZW1lbnRzLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIG9uRHJhZ1N0YXJ0KVxuICAgIH0pXG4gICAgXG4gICAgXG4gICAgY29udGVudFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBvbkRyYWdPdmVyKVxuICAgIGNvbnRlbnRXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBvbkRyb3ApXG4gICAgXG4gICAgZnVuY3Rpb24gb25EcmFnU3RhcnQoZXZlbnQpIHtcbiAgICAgICAgLy8gdGhlIGRhdGFUcmFuc2ZlciBvYmplY3TigJlzIHByb3BlcnR5IHNldERhdGFcbiAgICAgICAgLy8gZmlyc3QgcGFyYW0gZGVjbGFyZXMgdGhlIGZvcm1hdFxuICAgICAgICAvLyBzZWNvbmQgcGFyYW0gZGVjbGFyZXMgdGhlIGFjdHVhbCBkYXRhXG4gICAgICAgIGV2ZW50XG4gICAgICAgICAgICAuZGF0YVRyYW5zZmVyXG4gICAgICAgICAgICAuc2V0RGF0YSgndGV4dC9wbGFpbicsIGV2ZW50LnRhcmdldC5jbGFzc0xpc3RbMF0pO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgIC8vIHRoZSBicm93c2VyIHByZXZlbnRzIGRyb3BwaW5nIGJ5IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gb25Ecm9wKGV2ZW50KSB7XG4gICAgICAgIC8vIHRoZSBkYXRhIHNldCBiZWZvcmUgaW4gJG9uRHJhZ1N0YXJ0XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XG4gICAgICAgIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtjbGFzc05hbWV9YCk7XG4gICAgICAgIC8vIHNpbmNlIHRoZSBlbGVtZW50IHNob3VsZCBzdGF5IGluIHRoZSBvcHRpb24gY29udGFpbmVyLCB0aGUgZWxlbWVudCBnZXRzIGNsb25lZFxuICAgICAgICBsZXQgbm9kZUNvcHkgPSBkcmFnZ2FibGVFbGVtZW50LmNsb25lTm9kZSh0cnVlKVxuICAgICAgICAvLyBzZXQgdGhlIHNhbWUgY2xhc3MgZm9yIHVwY29taW5nIGZ1bmN0aW9uc1xuICAgICAgICBub2RlQ29weS5jbGFzc05hbWUgPSBjbGFzc05hbWVcbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKG5vZGVDb3B5KTtcbiAgICAgIFxuICAgICAgICBldmVudFxuICAgICAgICAgIC5kYXRhVHJhbnNmZXJcbiAgICAgICAgICAuY2xlYXJEYXRhKCk7XG4gICAgICAgIFxuICAgICAgICBub2RlQ29weS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSB0aGlzXG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnRFdmVudHMobm9kZUNvcHkpXG4gICAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/dragEvents.js\n");

/***/ }),

/***/ "./src/js/elementEvents.js":
/*!*********************************!*\
  !*** ./src/js/elementEvents.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (node) {\n    const coords = node.getBoundingClientRect()\n    // get all childs\n    const childNodes = node.childNodes\n    node.addEventListener('click', function() {        \n        // add active to block to display input\n        node.classList.add('active')\n        \n        // get first tagname\n        const targetElement = childNodes[1]\n    \n        const inputIndex = getIndex(node, 'input')\n        if(inputIndex !== -1) {\n            const inputField = childNodes[inputIndex]\n            console.log(inputField, targetElement, childNodes)\n            // change first tagname on input\n            inputField.addEventListener('input', function() {\n                const value = inputField.value\n                targetElement.textContent = value\n            })\n        } else {\n            console.log('not found')\n        }\n    })\n\n    // position absolute\n    const checkboxIndex = getIndex(node, 'checkbox')\n    const checkboxEl = childNodes[checkboxIndex]\n    if(checkboxEl ) {\n        checkboxEl.addEventListener('click', function() {\n            if(checkboxEl.checked) {\n                node.classList.add('float')\n            } else {\n                node.classList.remove('float')\n                node.style.left = 0;\n                node.style.top = 0;\n            }\n            \n        })   \n        node.addEventListener('dragend', function(e) {\n            let x = e.pageX - coords.x\n            let y = e.pageY - coords.y\n            if (x < 0) x = 0\n            if (y < 0) y = 0\n            event.currentTarget.style.left = x + 'px';\n            event.currentTarget.style.top = y + 'px';\n        })\n    }\n\n    function getIndex(el, className) {\n        const children = el.childNodes\n        let index;\n        children.forEach((child, i) => {\n            if(child.classList) {\n                if (child.classList.contains(`${className}`)) {\n                    index = i\n                }\n            }\n        });    \n        return index ? index : -1\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZWxlbWVudEV2ZW50cy5qcz9kYWU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSwrQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRTtBQUNUO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Ii4vc3JjL2pzL2VsZW1lbnRFdmVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobm9kZSkge1xuICAgIGNvbnN0IGNvb3JkcyA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAvLyBnZXQgYWxsIGNoaWxkc1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlLmNoaWxkTm9kZXNcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7ICAgICAgICBcbiAgICAgICAgLy8gYWRkIGFjdGl2ZSB0byBibG9jayB0byBkaXNwbGF5IGlucHV0XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgXG4gICAgICAgIC8vIGdldCBmaXJzdCB0YWduYW1lXG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBjaGlsZE5vZGVzWzFdXG4gICAgXG4gICAgICAgIGNvbnN0IGlucHV0SW5kZXggPSBnZXRJbmRleChub2RlLCAnaW5wdXQnKVxuICAgICAgICBpZihpbnB1dEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGNoaWxkTm9kZXNbaW5wdXRJbmRleF1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlucHV0RmllbGQsIHRhcmdldEVsZW1lbnQsIGNoaWxkTm9kZXMpXG4gICAgICAgICAgICAvLyBjaGFuZ2UgZmlyc3QgdGFnbmFtZSBvbiBpbnB1dFxuICAgICAgICAgICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXRGaWVsZC52YWx1ZVxuICAgICAgICAgICAgICAgIHRhcmdldEVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgZm91bmQnKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIHBvc2l0aW9uIGFic29sdXRlXG4gICAgY29uc3QgY2hlY2tib3hJbmRleCA9IGdldEluZGV4KG5vZGUsICdjaGVja2JveCcpXG4gICAgY29uc3QgY2hlY2tib3hFbCA9IGNoaWxkTm9kZXNbY2hlY2tib3hJbmRleF1cbiAgICBpZihjaGVja2JveEVsICkge1xuICAgICAgICBjaGVja2JveEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZihjaGVja2JveEVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2Zsb2F0JylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdmbG9hdCcpXG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLnRvcCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSkgICBcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgbGV0IHggPSBlLnBhZ2VYIC0gY29vcmRzLnhcbiAgICAgICAgICAgIGxldCB5ID0gZS5wYWdlWSAtIGNvb3Jkcy55XG4gICAgICAgICAgICBpZiAoeCA8IDApIHggPSAwXG4gICAgICAgICAgICBpZiAoeSA8IDApIHkgPSAwXG4gICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc3R5bGUudG9wID0geSArICdweCc7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5kZXgoZWwsIGNsYXNzTmFtZSkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGVsLmNoaWxkTm9kZXNcbiAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYoY2hpbGQuY2xhc3NMaXN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyhgJHtjbGFzc05hbWV9YCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICAgXG4gICAgICAgIHJldHVybiBpbmRleCA/IGluZGV4IDogLTFcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/elementEvents.js\n");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragEvents */ \"./src/js/dragEvents.js\");\n\n\nfunction init() {\n    Object(_dragEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n}\n\n\ninit()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0LmpzPzQ0YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFxQzs7QUFFckM7QUFDQSxJQUFJLDJEQUFVO0FBQ2Q7OztBQUdBIiwiZmlsZSI6Ii4vc3JjL2pzL3NjcmlwdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkcmFnRXZlbnRzIGZyb20gJy4vZHJhZ0V2ZW50cydcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBkcmFnRXZlbnRzKClcbn1cblxuXG5pbml0KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/script.js\n");

/***/ })

/******/ });