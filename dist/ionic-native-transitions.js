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
	/**
	 * @ngdoc service
	 * @name ionic-native-transitions.$ionicNativeTransitionsProvider
	 * @description
	 * ionic-native-transitions provider
	 */
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports["default"] = function () {
	    'ngInject';
	
	    var enabled = true,
	        options = {
	        "duration": 400, // in milliseconds (ms), default 400
	        "slowdownfactor": 4, // overlap views (higher number is more) or no overlap (1), default 4
	        "iosdelay": 60, // ms to wait for the iOS webview to update before animation kicks in, default 60
	        "androiddelay": 70, // same as above but for Android, default 70
	        "winphonedelay": 200, // same as above but for Windows Phone, default 200,
	        "fixedPixelsTop": 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
	        "fixedPixelsBottom": 0 // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
	    };
	
	    $get.$inject = ["$log", "$ionicConfig"];
	    return {
	        $get: $get,
	        enable: enable,
	        setOptions: setOptions
	    };
	
	    /**
	     * @ngdoc function
	     * @name ionic-native-transitions.$ionicNativeTransitionsProvider#enable
	     * @access public
	     * @methodOf ionic-native-transitions.$ionicNativeTransitionsProvider
	     *
	     * @description
	     * Overwrite default nativepagetransitions plugin options
	     * @param {object} injectedOptions  options that will overwrite defaults
	     */
	    function enable() {
	        var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	        enable = enabled;
	        return this;
	    }
	
	    /**
	     * @ngdoc function
	     * @name ionic-native-transitions.$ionicNativeTransitionsProvider#isEnabled
	     * @access public
	     * @methodOf ionic-native-transitions.$ionicNativeTransitionsProvider
	     *
	     * @description
	     * Is ionic-native-transitions enabled or not?
	     */
	    /**
	     * @ngdoc function
	     * @name ionic-native-transitions.$ionicNativeTransitions#isEnabled
	     * @access public
	     * @methodOf ionic-native-transitions.$ionicNativeTransitions
	     *
	     * @description
	     * Is ionic-native-transitions enabled or not?
	     */
	    function isEnabled() {
	        return enable;
	    }
	
	    /**
	     * @ngdoc function
	     * @name ionic-native-transitions.$ionicNativeTransitionsProvider#setOptions
	     * @access public
	     * @methodOf ionic-native-transitions.$ionicNativeTransitionsProvider
	     *
	     * @description
	     * Overwrite default nativepagetransitions plugin options
	     * @param {object} injectedOptions  options that will overwrite defaults
	     */
	    function setOptions() {
	        var injectedOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        angular.extend(options, injectedOptions);
	        return this;
	    }
	
	    function $get($log, $ionicConfig) {
	        'ngInject';
	
	        return {
	            init: init,
	            isEnabled: isEnabled
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
	            if (!enable) {
	                $log.info('nativepagetransitions is disabled');
	                return;
	            }
	            if (window.cordova && window.plugins && window.plugins.nativepagetransitions) {
	                $ionicConfig.views.transition('none');
	                angular.extend(window.plugins.nativepagetransitions.globalOptions, options);
	            } else {
	                $log.info('nativepagetransitions plugin does not exist, cannot initialize.');
	            }
	        }
	    }
	};
	
	;
	module.exports = exports["default"];

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
	
	exports['default'] = ["$log", "$ionicNativeTransitions", function ($log, $ionicNativeTransitions) {
	    'ngInject';
	
	    Link.$inject = ["scope", "element", "attrs"];
	    return {
	        link: Link,
	        restrict: 'A',
	        scope: false
	    };
	
	    function Link(scope, element, attrs) {
	        'ngInject';
	
	        if (!$ionicNativeTransitions.isEnabled()) {
	            return;
	        }
	
	        var options = {};
	
	        attrs.$observe('nativeTransitionsOptions', function (newOptions) {
	            var evalOptions = scope.$eval(newOptions);
	            options = angular.isObject(evalOptions) ? evalOptions : {};
	        });
	
	        element.on('click', function (event) {
	            if (window.cordova && window.plugins && window.plugins.nativepagetransitions) {
	                var plugin = window.plugins.nativepagetransitions;
	                switch (options.type) {
	                    case 'flip':
	                        window.plugins.nativepagetransitions.flip(options, success, error);
	                        break;
	                    case 'fade':
	                        window.plugins.nativepagetransitions.fade(options, success, error);
	                        break;
	                    case 'curl':
	                        window.plugins.nativepagetransitions.curl(options, success, error);
	                        break;
	                    case 'drawer':
	                        window.plugins.nativepagetransitions.drawer(options, success, error);
	                        break;
	                    case 'slide':
	                    default:
	                        window.plugins.nativepagetransitions.slide(options, success, error);
	                        break;
	                }
	            }
	        });
	
	        function success(msg) {
	            $log.info('transition success', msg);
	        }
	
	        function error(msg) {
	            $log.info('transition error', msg);
	        }
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