/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(document).ready(function ($) {

  var siteNav = $('.site-nav'),
      searchForm = $('.search-form'),
      sortForm = $('.sort-form'),
      menuIcon = $('#menu-icon'),
      closeIcon = $('#close-icon'),
      searchIcon = $('#search-icon'),
      sortIcon = $('#sort-icon');

  function toggleSiteNav() {
    if (sortForm.hasClass('sort-form--is-visible')) {
      toggleSort();
    } else if (searchForm.hasClass('search-form--is-visible')) {
      toggleSearch();
    }
    siteNav.toggleClass('site-nav--is-visible');
    menuIcon.toggleClass('menu-icon--is-visible');
    closeIcon.toggleClass('close-icon--is-visible');
  }

  function toggleSearch() {
    if (sortForm.hasClass('sort-form--is-visible')) {
      toggleSort();
    };
    searchForm.toggleClass('search-form--is-visible');
  }

  function toggleSort() {
    if (searchForm.hasClass('search-form--is-visible')) {
      toggleSearch();
    };
    sortForm.toggleClass('sort-form--is-visible');
  }

  menuIcon.on('click', toggleSiteNav);
  closeIcon.on('click', toggleSiteNav);
  searchIcon.on('click', toggleSearch);
  sortIcon.on('click', toggleSort);
});

/***/ })
/******/ ]);