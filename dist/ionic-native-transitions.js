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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _providerJs = __webpack_require__(/*! ./provider.js */ 1);
	
	var _providerJs2 = _interopRequireDefault(_providerJs);
	
	var _directiveJs = __webpack_require__(/*! ./directive.js */ 2);
	
	var _directiveJs2 = _interopRequireDefault(_directiveJs);
	
	var _runJs = __webpack_require__(/*! ./run.js */ 3);
	
	var _runJs2 = _interopRequireDefault(_runJs);
	
	var mod = angular.module('ionic-native-transitions', ['ionic']);
	
	// 'ui-router'
	mod.directive('nativeTransitions', _directiveJs2['default']);
	mod.provider('$ionicNativeTransitions', _providerJs2['default']);
	mod.run(_runJs2['default']);
	
	exports['default'] = mod = mod.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/*!*************************!*\
  !*** ./lib/provider.js ***!
  \*************************/
/***/ function(module, exports) {

	/**
	 * @ngdoc service
	 * @name ionic-native-transitions.$ionicNativeTransitions
	 * @description
	 * ionic-native-transitions service
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports["default"] = ["$ionicConfigProvider", function ($ionicConfigProvider) {
	    'ngInject';
	
	    var options = {
	        "direction": "left", // 'left|right|up|down', default 'left' (which is like 'next')
	        "duration": 400, // in milliseconds (ms), default 400
	        "slowdownfactor": 4, // overlap views (higher number is more) or no overlap (1), default 4
	        "iosdelay": 60, // ms to wait for the iOS webview to update before animation kicks in, default 60
	        "androiddelay": 70, // same as above but for Android, default 70
	        "winphonedelay": 200, // same as above but for Windows Phone, default 200,
	        "fixedPixelsTop": 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
	        "fixedPixelsBottom": 0 // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
	    };
	
	    $ionicConfigProvider.views.transition('none');
	
	    $get.$inject = ["$log"];
	    return {
	        $get: $get,
	        setOptions: setOptions
	    };
	
	    /**
	     * @ngdoc function
	     * @name ionic-native-transitions.$ionicNativeTransitionsProvider#setBasicCredentials
	     * @access public
	     * @methodOf ionic-native-transitions.$ionicNativeTransitionsProvider
	     *
	     * @description
	     * Overwrite default nativepagetransitions plugin options
	     * @param {object} injectedOptions  options that will overwrite defaults
	     */
	
	    /**
	     * @ngdoc function
	     * @name ionic-native-transitions.$ionicNativeTransitions#setBasicCredentials
	     * @access public
	     * @methodOf ionic-native-transitions.$ionicNativeTransitions
	     *
	     * @description
	     * Overwrite default nativepagetransitions plugin options
	     * @param {object} injectedOptions  options that will overwrite defaults
	     */
	    function setOptions() {
	        var injectedOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        angular.merge(options, injectedOptions);
	        console.log(options);
	        return this;
	    }
	
	    function $get($log) {
	        'ngInject';
	
	        return {
	            init: init,
	            setOptions: setOptions
	        };
	
	        /**
	         * @ngdoc function
	         * @name ionic-native-transitions.$ionicNativeTransitions#init
	         * @access public
	         * @methodOf ionic-native-transitions.$ionicNativeTransitions
	         *
	         * @description
	         * Init nativepagetransitions plugin
	         */
	        function init() {
	
	            if (window.cordova && window.plugins && window.plugins.nativepagetransitions) {
	                angular.merge(window.plugins.nativepagetransitions.globalOptions, options);
	            } else {
	                $log.info('nativepagetransitions plugin does not exist, cannot initialize.');
	            }
	        }
	    }
	}];
	
	;
	module.exports = exports["default"];
	/**
	 * @ngdoc service
	 * @name ionic-native-transitions.$ionicNativeTransitionsProvider
	 * @description
	 * ionic-native-transitions provider
	 */

/***/ },
/* 2 */
/*!**************************!*\
  !*** ./lib/directive.js ***!
  \**************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = ["$ionicGesture", function ($ionicGesture) {
	    'ngInject';
	
	    Link.$inject = ["scope", "element", "attrs"];
	    return {
	        link: Link,
	        restrict: 'A',
	        scope: {
	            nativeTransitionsOptions: '='
	        }
	    };
	
	    function Link(scope, element, attrs) {
	        'ngInject';
	
	        // let direction = (angular.isDefined(attrs.nativeTransitionsDirection) && (attrs.nativeTransitionsDirection === 'left' || attrs.nativeTransitionsDirection === 'right' || attrs.nativeTransitionsDirection === 'up' || attrs.nativeTransitionsDirection === 'down')) ? attrs.nativeTransitionsDirection : 'left';
	        // let type = (angular.isDefined(attrs.nativeTransitionsType) && (attrs.nativeTransitionsType === 'slide' || attrs.nativeTransitionsType === 'flip' || attrs.nativeTransitionsType === 'fade' || attrs.nativeTransitionsType === 'drawer' || attrs.nativeTransitionsType === 'curl')) ? attrs.nativeTransitionsType : 'slide';
	        var options = scope.nativeTransitionsOptions || {
	            type: 'slide',
	            direction: 'left'
	        };
	        console.log('scope', scope);
	        $ionicGesture.on('tap', function (e) {
	            if (window.cordova && window.plugins && window.plugins.nativepagetransitions) {
	                switch (type) {
	                    case 'slide':
	                    case 'flip':
	                    case 'fade':
	                    case 'curl':
	                    case 'drawer':
	                        window.plugins.nativepagetransitions[type].apply(this, options);
	                        break;
	
	                }
	            }
	        });
	    }
	}];
	
	module.exports = exports['default'];

/***/ },
/* 3 */
/*!********************!*\
  !*** ./lib/run.js ***!
  \********************/
/***/ function(module, exports) {

	/**
	 * @ngdoc service
	 * @name ionic-native-transitions.$ionicNativeTransitions
	 * @description
	 * ionic-native-transitions service
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = ["$ionicNativeTransitions", "$ionicPlatform", function ($ionicNativeTransitions, $ionicPlatform) {
	  'ngInject';
	
	  $ionicPlatform.ready(function () {
	    $ionicNativeTransitions.init();
	  });
	}];
	
	;
	module.exports = exports['default'];
	/**
	 * @ngdoc service
	 * @name ionic-native-transitions.$ionicNativeTransitionsProvider
	 * @description
	 * ionic-native-transitions provider
	 */

/***/ }
/******/ ]);
//# sourceMappingURL=ionic-native-transitions.js.map