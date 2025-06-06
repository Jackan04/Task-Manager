/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* =========================\n   Root Variables & Resets\n   ========================= */\n:root {\n    --color-main: #ffff;\n    --color-secondary: #CCDEFC;\n    --color-secondary-light: #e6f0fa;\n    --color-text-neutral: #074095;\n    --color-success: #D5F5D9;\n    --color-danger: #FACDD7;\n    --color-text: #202225;\n    --text-color-success: #2F943B;\n    --text-color-danger: #A30D30;\n    --color-border: #ccc;\n    --color-sidebar: #F0F0F2;\n\n    --space-small: 15px;\n    --space-large: 30px;\n    --space-button: 12px 18px;\n\n    --border-radius: 8px;\n\n    --font-size-h1: 2rem;\n    --font-size-h2: 1.75rem;\n    --font-size-h3: 1.5rem;\n    --font-size-h4: 1.25rem;\n    --font-size-body: 1rem;\n    --font-size-small: 0.875rem;\n    --font-size-caption: 0.75rem;\n\n    --transition: 0.2s ease-in-out;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n/* =========================\n   Layout\n   ========================= */\nbody {\n    font-family: 'Inter', sans-serif;\n    display: grid;\n    grid-template-columns: minmax(150px, 270px) 1fr;\n    height: 100vh;\n    line-height: 1.5;\n    font-weight: 400;\n}\n\n#app {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    flex-wrap: wrap;\n}\n\n/* =========================\n   Sidebar & Navigation\n   ========================= */\nnav {\n    display: grid;\n    grid-template-rows: auto 1fr 1fr;\n    gap: 4rem;\n    padding: var(--space-large);\n    background-color: var(--color-sidebar);\n}\n\n#navbar-header {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n    width: 100%;\n    gap: 30px;\n}\n\n#projects-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-small);\n}\n\n.project-list-item {\n    padding: 7px;\n    border-radius: var(--border-radius);\n}\n\n.project-list-item:hover, .project-list-item.active {\n    cursor: pointer;\n    background-color: #DEE0E4;\n}\n\n\n/* =========================\n   Buttons\n   ========================= */\nbutton {\n    font-size: var(--font-size-body);\n    border: none;\n    padding: var(--space-button);\n    border-radius: var(--border-radius);\n    transition: var(--transition);\n}\n\nbutton:focus{\n    outline: none;\n}\n\nbutton:hover,\ninput:hover, \n.task-item:hover {\n    opacity: 0.7;\n    cursor: pointer;\n}\n\n\n\n.btn-neutral {\n    background-color: var(--color-secondary);\n    color: var(--color-text-neutral);\n}\n\n.btn-danger,\n.color-danger {\n    background-color: var(--color-danger);\n    color: var(--text-color-danger);\n}\n\n.btn-success,\n.color-success {\n    background-color: var(--color-success);\n    color: var(--text-color-success);\n}\n\n/* =========================\n   Task List & Items\n   ========================= */\n\n#task-list {\n    display: flex;\n    flex-direction: column;\n    margin: 2rem;\n    gap: var(--space-small);\n\n}\n\n.task-item {\n    display: flex;\n    gap: 15px;\n}\n\n.task-item.completed {\n    text-decoration: line-through;\n    opacity: 0.7;\n}\n\n#task-details-modal{\n    width: 400px;\n    height: fit-content;\n}\n\n\n\n/* =========================\n   Checkbox Styling\n   ========================= */\ninput[type=\"checkbox\"] {\n    appearance: none;\n    padding: 10px;\n    border-radius: 100%;\n    border: solid 2px #ccc;\n    cursor: pointer;\n}\n\ninput[type=\"checkbox\"].completed {\n    background-color: #ccc;\n}\n\n/* =========================\n   Forms & Dialogs\n   ========================= */\ndialog {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: none;\n    border-radius: var(--border-radius);\n    z-index: 9999;\n    background: white;\n    padding: 2rem;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n}\n\ndialog > div {\n    display: flex;\n    gap: var(--space-small);\n}\n\n#newTaskForm {\n    width: 500px;\n}\n\n#newTaskForm > div {\n    display: flex;\n    flex-direction: column;\n}\n\n/* =========================\n   Inputs & Textareas\n   ========================= */\ninput:not([type=\"checkbox\"]) {\n    border: 2px #ccc solid;\n    border-radius: var(--border-radius);\n    padding: var(--space-small);\n    font-size: 16px;\n    transition: var(--transition);\n    font-family: 'Inter', sans-serif;\n}\n\ninput:not([type=\"checkbox\"]):focus,\ntextarea:focus {\n    outline: none;\n    border: 3px solid var(--color-secondary);\n}\n\ntextarea {\n    border: 2px #ccc solid;\n    border-radius: var(--border-radius);\n    padding: var(--space-small);\n    font-size: 16px;\n    transition: var(--transition);\n    max-width: 100%;\n    min-width: 100%;\n    font-family: 'Inter', sans-serif;\n}\n\n/* =========================\n   Headers & Typography\n   ========================= */\nheader {\n    width: 100%;\n    background-color: var(--color-secondary);\n    color: var(--color-text-neutral);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: var(--space-large);\n    margin-bottom: 1rem;\n}\n\nh1, h2, h3 {\n    font-weight: 600;\n}\n\np, li {\n    font-size: var(--font-size-body);\n}\n\n/* =========================\n   Utility\n   ========================= */\nul, li {\n    list-style: none;\n}\n\n#btn-new-task {\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n}\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://task-manager/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://task-manager/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://task-manager/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://task-manager/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/taskManager */ \"./src/modules/taskManager.js\");\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n \n\n\n\n\n\n\n\n(0,_modules_ui__WEBPACK_IMPORTED_MODULE_3__.renderProjectsList)()\n\n\n\n\n\n//# sourceURL=webpack://task-manager/./src/index.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(title){\n        this.id = crypto.randomUUID(),\n        this.title = title\n    }\n\n    set title(newTitle){\n        this._title = newTitle\n    }\n\n    get title(){\n        return this._title\n    }\n\n}\n\n\n\n//# sourceURL=webpack://task-manager/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectStorage: () => (/* binding */ projectStorage),\n/* harmony export */   taskStorage: () => (/* binding */ taskStorage)\n/* harmony export */ });\nconst taskStorage = {\n    \n    save: (tasks) => {\n        localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n    },\n    load:() =>{\n        const tasksData = localStorage.getItem(\"tasks\");\n        if (!tasksData) {\n            return []; \n        }\n        try {\n            return JSON.parse(tasksData);\n        } catch (error) {\n            console.error(\"Failed to load tasks from localStorage:\", error);\n            return []; \n        }\n       \n    }\n}\n\nconst projectStorage = {\n\n    save: (projects) => {\n        localStorage.setItem(\"projects\", JSON.stringify(projects));\n    },\n\n    load: () => {\n         const projectsData = localStorage.getItem(\"projects\");\n        if (!projectsData) {\n            return [];\n        }\n        try {\n            return JSON.parse(projectsData);\n        } catch (error) {\n            console.error(\"Failed to load projects from localStorage:\", error);\n            return [];\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://task-manager/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\n    \n    constructor(title, notes, date, projectId){\n        this.id = crypto.randomUUID(),\n        this.title = title,\n        this.notes = notes,\n        this.isCompleted = false,\n        this.date = date,\n        this.projectId = projectId\n    }\n\n    set title(newTitle){\n        this._title = newTitle\n    }\n\n    get title(){\n        return this._title\n    }\n\n    set notes(newNotes){\n        this._notes = newNotes\n    }\n\n    get notes(){\n        return this._notes\n    }\n\n    set date(newDate){\n        this._date = newDate\n    }\n\n    get date(){\n        return this._date\n    }\n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://task-manager/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/taskManager.js":
/*!************************************!*\
  !*** ./src/modules/taskManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewTask: () => (/* binding */ addNewTask),\n/* harmony export */   createNewProject: () => (/* binding */ createNewProject),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui */ \"./src/modules/ui.js\");\n\n\n\n\n\nconst tasks = _storage__WEBPACK_IMPORTED_MODULE_1__.taskStorage.load()\nconst projects = _storage__WEBPACK_IMPORTED_MODULE_1__.projectStorage.load()\n\nfunction addNewTask(title, notes, date, projectId){\n\n    if(title){\n        const newTask = new _task__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, notes, date, projectId)\n        tasks.push(newTask)\n        _storage__WEBPACK_IMPORTED_MODULE_1__.taskStorage.save(tasks)\n        return newTask\n    }else{\n        return\n    }\n   \n}\n\nfunction deleteTask(taskId){\n    const newTaskList = tasks.filter(task => task.id !== taskId)\n    _storage__WEBPACK_IMPORTED_MODULE_1__.taskStorage.save(newTaskList)\n    return newTaskList\n\n}\n\nfunction createNewProject(title){\n\n    if(title){\n        const newProject = new _project__WEBPACK_IMPORTED_MODULE_2__.Project(title)\n        projects.push(newProject)\n        _storage__WEBPACK_IMPORTED_MODULE_1__.projectStorage.save(projects)\n        ;(0,_ui__WEBPACK_IMPORTED_MODULE_3__.renderProjectsList)()\n    }else{\n        return\n    }\n \n\n}\n\nfunction deleteProject(projectId){\n    const projectsToKeep = projects.filter((project) => project.id !== projectId)\n    const tasksToKeep = tasks.filter((task) => task.projectId !== projectId)\n    _storage__WEBPACK_IMPORTED_MODULE_1__.projectStorage.save(projectsToKeep)\n    _storage__WEBPACK_IMPORTED_MODULE_1__.taskStorage.save(tasksToKeep)\n    projects.push(projectsToKeep)\n}\n\n\n\n\n//# sourceURL=webpack://task-manager/./src/modules/taskManager.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjectPage: () => (/* binding */ renderProjectPage),\n/* harmony export */   renderProjectsList: () => (/* binding */ renderProjectsList)\n/* harmony export */ });\n/* harmony import */ var _taskManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager */ \"./src/modules/taskManager.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\nconst body = document.querySelector(\"body\")\nconst app = document.querySelector(\"#app\")\nlet currentProject = \"\"\n\nfunction clearAndCloseForm(form) {\n    form.close()\n    form.remove()\n}\n\nfunction renderNewProjectForm() {\n    const form = document.createElement(\"dialog\")\n    const formContent = document.createElement(\"div\")\n    const inputTitle = document.createElement(\"input\")\n    const buttonAddProject = document.createElement(\"button\")\n    const buttonCloseForm = document.createElement(\"button\")\n\n    buttonAddProject.textContent = \"Add\"\n    buttonCloseForm.textContent = \"Close\"\n    inputTitle.placeholder = \"Enter project title\"\n\n    form.setAttribute(\"id\", \"newProjectForm\")\n    inputTitle.setAttribute(\"id\", \"inputProjectTitle\")\n    buttonAddProject.setAttribute(\"id\", \"buttonAddProject\")\n    buttonCloseForm.setAttribute(\"class\", \"btn-danger\")\n    buttonAddProject.setAttribute(\"class\", \"btn-success\")\n\n    formContent.appendChild(inputTitle)\n    formContent.appendChild(buttonAddProject)\n    formContent.appendChild(buttonCloseForm)\n\n    form.appendChild(formContent)\n    body.appendChild(form)\n    form.showModal()\n\n    buttonCloseForm.addEventListener(\"click\", () => clearAndCloseForm(form))\n\n    buttonAddProject.addEventListener(\"click\", () => {\n        ;(0,_taskManager__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(inputTitle.value)\n        clearAndCloseForm(form)\n        renderProjectsList()\n    })\n}\n\nfunction renderProjectPage(projectTitle, projectId) {\n    app.innerHTML = \"\"\n    const pageHeader = document.createElement(\"header\")\n    const pageTitle = document.createElement(\"h1\")\n    const buttonAddNewTask = document.createElement(\"button\")\n    const buttonDeleteProject = document.createElement(\"button\")\n    let taskList = document.createElement(\"ul\")\n\n    buttonAddNewTask.textContent = \"New Task\"\n    pageTitle.textContent = projectTitle\n    buttonDeleteProject.textContent = \"Delete Project\"\n    taskList.setAttribute(\"id\", \"task-list\")\n\n    buttonAddNewTask.setAttribute(\"class\", \"btn-neutral\")\n    buttonAddNewTask.setAttribute(\"id\", \"btn-new-task\")\n    buttonDeleteProject.setAttribute(\"class\", \"btn-danger\")\n    buttonDeleteProject.setAttribute(\"id\", \"btn-delete-project\")\n\n    pageHeader.appendChild(pageTitle)\n    pageHeader.appendChild(buttonDeleteProject)\n    app.appendChild(pageHeader)\n    app.appendChild(buttonAddNewTask)\n    app.appendChild(taskList)\n\n    currentProject = projectId\n    renderTasks(currentProject)\n\n\n    buttonAddNewTask.addEventListener(\"click\", renderNewTaskForm)\n    buttonDeleteProject.addEventListener(\"click\", () => {\n                const confirmation = confirm(\"This will permanently delete the project and all it's tasks. Are you sure you want to continue?\")\n        if (confirmation) {\n            (0,_taskManager__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(currentProject)\n            renderProjectsList()\n            app.innerHTML = \"\" \n        }\n    })\n}\n\nfunction renderTasks(projectId) {\n    const taskList = document.querySelector(\"#task-list\")\n    taskList.innerHTML = \"\"\n    const tasks = _storage__WEBPACK_IMPORTED_MODULE_1__.taskStorage.load()\n    const projectTasks = tasks.filter((task) => task.projectId === projectId)\n\n\n\n    projectTasks.forEach(task => {\n        const listItem = document.createElement(\"li\")\n        listItem.setAttribute(\"class\", \"task-item\")\n        listItem.dataset.id = task.id\n\n        const checkbox = document.createElement(\"input\")\n        checkbox.type = \"checkbox\"\n        checkbox.checked = task.isCompleted\n\n        if (task.isCompleted) {\n            listItem.classList.add(\"completed\")\n            checkbox.classList.add(\"completed\")\n        }\n\n        const titleSpan = document.createElement(\"span\")\n        titleSpan.textContent = task._title\n\n        listItem.appendChild(checkbox)\n        listItem.appendChild(titleSpan)\n        taskList.appendChild(listItem)\n\n        titleSpan.addEventListener(\"click\", () =>{\n            showTaskDetails(task._title, task._notes, task._date)\n        })\n\n        checkbox.addEventListener(\"click\", () => {\n            task.isCompleted = !task.isCompleted\n            listItem.classList.toggle(\"completed\", task.isCompleted)\n            checkbox.classList.toggle(\"completed\", task.isCompleted)\n\n            const allTasks = _storage__WEBPACK_IMPORTED_MODULE_1__.taskStorage.load()\n            const idx = allTasks.findIndex(t => t.id === task.id)\n            if (idx !== -1) {\n                allTasks[idx].isCompleted = task.isCompleted\n                _storage__WEBPACK_IMPORTED_MODULE_1__.taskStorage.save(allTasks)\n            }\n        })\n    })\n}\n\nfunction showTaskDetails(title, notes, date) {\n    const modal = document.createElement(\"dialog\")\n    modal.setAttribute(\"id\", \"task-details-modal\")\n\n    const content = document.createElement(\"div\")\n    content.style.display = \"flex\"\n    content.style.flexDirection = \"column\"\n    content.style.gap = \"1rem\"\n\n    const titleElem = document.createElement(\"h2\")\n    titleElem.textContent = title\n\n    const notesElem = document.createElement(\"p\")\n    notesElem.textContent = notes ? notes : \"No notes for this task.\"\n\n    const dateElem = document.createElement(\"p\")\n    dateElem.textContent = date ? `Due: ${date}` : \"No due date set.\"\n\n    const closeBtn = document.createElement(\"button\")\n    closeBtn.textContent = \"Close\"\n    closeBtn.className = \"btn-danger\"\n\n    content.appendChild(titleElem)\n    content.appendChild(notesElem)\n    content.appendChild(dateElem)\n    content.appendChild(closeBtn)\n\n    modal.appendChild(content)\n    document.body.appendChild(modal)\n    modal.showModal()\n\n    closeBtn.addEventListener(\"click\", () => {\n        modal.close()\n        modal.remove()\n    })\n}\n\nfunction renderNewTaskForm() {\n    const form = document.createElement(\"dialog\")\n    const formContent = document.createElement(\"div\")\n    const inputTitle = document.createElement(\"input\")\n    const inputNotes = document.createElement(\"textarea\")\n    const inputDate = document.createElement(\"input\")\n    const buttonAddTask = document.createElement(\"button\")\n    const buttonCloseForm = document.createElement(\"button\")\n\n    inputTitle.placeholder = \"Enter task title\"\n    inputNotes.placeholder = \"Enter notes\"\n    inputDate.type = \"date\"\n    buttonAddTask.textContent = \"Add Task\"\n    buttonCloseForm.textContent = \"Close\"\n\n    form.setAttribute(\"id\", \"newTaskForm\")\n    inputTitle.setAttribute(\"id\", \"inputTaskTitle\")\n    inputNotes.setAttribute(\"id\", \"inputTaskNotes\")\n    inputDate.setAttribute(\"id\", \"inputTaskDate\")\n    buttonAddTask.setAttribute(\"id\", \"buttonAddTask\")\n    buttonAddTask.setAttribute(\"class\", \"btn-success\")\n    buttonCloseForm.setAttribute(\"class\", \"btn-danger\")\n\n    formContent.appendChild(inputTitle)\n    formContent.appendChild(inputNotes)\n    formContent.appendChild(inputDate)\n    formContent.appendChild(buttonAddTask)\n    formContent.appendChild(buttonCloseForm)\n\n    form.appendChild(formContent)\n    body.appendChild(form)\n    form.showModal()\n\n    buttonCloseForm.addEventListener(\"click\", () => {\n        clearAndCloseForm(form)\n        renderTasks(currentProject)\n    })\n\n    buttonAddTask.addEventListener(\"click\", () => {\n        ;(0,_taskManager__WEBPACK_IMPORTED_MODULE_0__.addNewTask)(\n            inputTitle.value,\n            inputNotes.value,\n            inputDate.value,\n            currentProject\n        )\n        clearAndCloseForm(form)\n        renderTasks(currentProject)\n    })\n}\n\nfunction renderProjectsList() {\n    const buttonAddNewProject = document.querySelector(\"#btn-new-project\")\n    const projectsList = document.querySelector(\"#projects-list\")\n    projectsList.innerHTML = \"\"\n    const projects = _storage__WEBPACK_IMPORTED_MODULE_1__.projectStorage.load()\n\n    projects.forEach(project => {\n        const listItem = document.createElement(\"li\")\n        listItem.textContent = project._title\n        listItem.setAttribute(\"class\", \"project-list-item\")\n        listItem.dataset.id = project.id\n        \n        projectsList.appendChild(listItem)\n        listItem.addEventListener(\"click\", () => {\n            document.querySelectorAll('.project-list-item').forEach(item => {\n                item.classList.remove('active')\n            })\n            listItem.classList.add('active')\n\n            const projectId = listItem.dataset.id\n            renderProjectPage(project._title, projectId)\n        })\n    })\n\n    buttonAddNewProject.addEventListener(\"click\", renderNewProjectForm)\n}\n\n\n\n\n\n//# sourceURL=webpack://task-manager/./src/modules/ui.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://task-manager/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;