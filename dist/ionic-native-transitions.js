(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["ionicNativeTransitions"] = factory();
	else
		root["ionicNativeTransitions"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
	
	var mod = angular.module('ionic-native-transitions', ['ionic', 'ui.router']);
	
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
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function () {
	    'ngInject';
	
	    var enabled = true,
	        $stateChangeStart = null,
	        $stateChangeSuccess = null,
	        $stateChangeError = null,
	        options = {
	        "type": 'slide', // transition type
	        "duration": 400, // in milliseconds (ms), default 400,
	        "direction": 'left',
	        "slowdownfactor": 4, // overlap views (higher number is more) or no overlap (1), default 4
	        "iosdelay": -1, // ms to wait for the iOS webview to update before animation kicks in, default 60
	        "androiddelay": -1, // same as above but for Android, default 70
	        "winphonedelay": 200, // same as above but for Windows Phone, default 200,
	        "fixedPixelsTop": 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
	        "fixedPixelsBottom": 0 // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
	    };
	
	    $get.$inject = ["$log", "$ionicConfig", "$rootScope"];
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
	        if (window.cordova && window.plugins && window.plugins.nativepagetransitions) {
	            return enable;
	        }
	        return false;
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
	
	    function $get($log, $ionicConfig, $rootScope) {
	        'ngInject';
	
	        return {
	            init: init,
	            getOptions: getOptions,
	            isEnabled: isEnabled,
	            transition: transition,
	            registerToRouteEvents: registerToRouteEvents,
	            unregisterToRouteEvents: unregisterToRouteEvents,
	            unregisterToStateChangeStartEvent: unregisterToStateChangeStartEvent
	        };
	
	        function transition() {
	            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	            var plugin = window.plugins.nativepagetransitions;
	            switch (options.type) {
	                case 'flip':
	                    plugin.flip(options);
	                    break;
	                case 'fade':
	                    plugin.fade(options);
	                    break;
	                case 'curl':
	                    plugin.curl(options);
	                    break;
	                case 'drawer':
	                    plugin.drawer(options);
	                    break;
	                case 'slide':
	                default:
	                    plugin.slide(options);
	                    break;
	            }
	        }
	
	        function registerToRouteEvents() {
	            unregisterToRouteEvents();
	
	            var plugin = window.plugins.nativepagetransitions;
	
	            $stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
	                var options = getOptions();
	                if (angular.isObject(toState.nativepagetransitions)) {
	                    options = angular.extend(getOptions(), toState.nativepagetransitions);
	                } else if (toState.nativepagetransitions === null) {
	                    return;
	                }
	
	                $log.debug('transition start', options, event, toState, toParams, fromState, fromParams);
	                transition(options);
	            });
	            $stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
	                plugin.executePendingTransition();
	            });
	            $stateChangeError = $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
	                plugin.executePendingTransition();
	            });
	        }
	
	        function unregisterToStateChangeStartEvent() {
	            if ($stateChangeStart && angular.isFunction($stateChangeStart)) {
	                $stateChangeStart();
	                $stateChangeStart = null;
	            }
	        }
	
	        function unregisterToRouteEvents() {
	            if ($stateChangeStart && angular.isFunction($stateChangeStart)) {
	                $stateChangeStart();
	                $stateChangeStart = null;
	            }
	            if ($stateChangeSuccess && angular.isFunction($stateChangeSuccess)) {
	                $stateChangeSuccess();
	                $stateChangeSuccess = null;
	            }
	            if ($stateChangeError && angular.isFunction($stateChangeError)) {
	                $stateChangeError();
	                $stateChangeError = null;
	            }
	        }
	
	        /**
	         * @ngdoc function
	         * @name ionic-native-transitions.$ionicNativeTransitions#getOptions
	         * @access public
	         * @methodOf ionic-native-transitions.$ionicNativeTransitions
	         *
	         * @description
	         * Get default options
	         */
	        function getOptions() {
	            return options;
	        }
	
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
	            if (!isEnabled()) {
	                $log.info('nativepagetransitions is disabled or nativepagetransitions plugin is not present');
	                return;
	            }
	            $ionicConfig.views.transition('none');
	            angular.extend(window.plugins.nativepagetransitions.globalOptions, options);
	        }
	    }
	};
	
	;
	module.exports = exports['default'];

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
	
	exports['default'] = ["$log", "$ionicNativeTransitions", "$ionicHistory", function ($log, $ionicNativeTransitions, $ionicHistory) {
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
	            event.preventDefault();
	            $ionicNativeTransitions.unregisterToStateChangeStartEvent();
	            $ionicNativeTransitions.transition(options);
	            $ionicHistory.goBack();
	            $ionicNativeTransitions.registerToRouteEvents();
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
	
	exports['default'] = ["$ionicNativeTransitions", "$ionicPlatform", "$ionicHistory", function ($ionicNativeTransitions, $ionicPlatform, $ionicHistory) {
	    'ngInject';
	
	    $ionicPlatform.ready(function () {
	        $ionicNativeTransitions.init();
	
	        if (!$ionicNativeTransitions.isEnabled()) {
	            return;
	        }
	
	        $ionicNativeTransitions.registerToRouteEvents();
	    });
	
	    $ionicPlatform.onHardwareBackButton(function (event) {
	        event.preventDefault();
	        $ionicNativeTransitions.unregisterToStateChangeStartEvent();
	        $ionicNativeTransitions.transition({
	            type: 'slide',
	            direction: 'right'
	        });
	        $ionicHistory.goBack();
	        $ionicNativeTransitions.registerToRouteEvents();
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
/******/ ])
});
;
//# sourceMappingURL=ionic-native-transitions.js.map