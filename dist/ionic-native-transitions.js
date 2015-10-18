/*!
 * ionic-native-transitions
 *  ---
 * Native transitions for Ionic applications
 * @version: v1.0.0-beta3
 * @author: shprink <contact@julienrenaux.fr>
 * @link: https://github.com/shprink/ionic-native-transitions
 * @license: MIT
 * 
 */
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
	
	var _nativeSrefJs = __webpack_require__(/*! ./nativeSref.js */ 2);
	
	var _nativeSrefJs2 = _interopRequireDefault(_nativeSrefJs);
	
	var _runJs = __webpack_require__(/*! ./run.js */ 3);
	
	var _runJs2 = _interopRequireDefault(_runJs);
	
	var mod = angular.module('ionic-native-transitions', ['ionic', 'ui.router']);
	
	mod.directive('nativeUiSref', _nativeSrefJs2['default']);
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
	        defaultTransition = {
	        type: 'slide',
	        direction: 'left'
	    },
	        defaultBackTransition = {
	        type: 'slide',
	        direction: 'right'
	    },
	        defaultOptions = {
	        duration: 400, // in milliseconds (ms), default 400,
	        slowdownfactor: 4, // overlap views (higher number is more) or no overlap (1), default 4
	        iosdelay: -1, // ms to wait for the iOS webview to update before animation kicks in, default -1
	        androiddelay: -1, // same as above but for Android, default -1
	        winphonedelay: -1, // same as above but for Windows Phone, default -1,
	        fixedPixelsTop: 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
	        fixedPixelsBottom: 0, // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android),
	        pendingTransitionDelay: 100 // internal ionic-native-transitions option that delay the transition when the state is loaded. default 100
	    };
	
	    $get.$inject = ["$log", "$ionicConfig", "$rootScope", "$timeout"];
	    return {
	        $get: $get,
	        enable: enable,
	        setDefaultTransition: setDefaultTransition,
	        setDefaultBackTransition: setDefaultBackTransition,
	        setDefaultOptions: setDefaultOptions
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
	        if (!enabled) {
	            unregisterToRouteEvents();
	        }
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
	     * @name ionic-native-transitions.$ionicNativeTransitionsProvider#setDefaultOptions
	     * @access public
	     * @methodOf ionic-native-transitions.$ionicNativeTransitionsProvider
	     *
	     * @description
	     * Overwrite default nativepagetransitions plugin options
	     * @param {object} injectedOptions  options that will overwrite defaults
	     */
	    function setDefaultOptions() {
	        var injectedOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        angular.extend(defaultOptions, injectedOptions);
	        return this;
	    }
	
	    /**
	     * @ngdoc function
	     * @name ionic-native-transitions.$ionicNativeTransitionsProvider#setDefaultTransition
	     * @access public
	     * @methodOf ionic-native-transitions.$ionicNativeTransitionsProvider
	     *
	     * @description
	     * Overwrite default transitions
	     * @param {object} transitionOptions  options that will overwrite defaults
	     */
	    function setDefaultTransition() {
	        var transition = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        angular.extend(defaultTransition, transition);
	        return this;
	    }
	
	    /**
	     * @ngdoc function
	     * @name ionic-native-transitions.$ionicNativeTransitionsProvider#setDefaultBackTransition
	     * @access public
	     * @methodOf ionic-native-transitions.$ionicNativeTransitionsProvider
	     *
	     * @description
	     * Overwrite default back transitions
	     * @param {object} transitionOptions  options that will overwrite defaults
	     */
	    function setDefaultBackTransition() {
	        var transition = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        angular.extend(defaultBackTransition, transition);
	        return this;
	    }
	
	    function $get($log, $ionicConfig, $rootScope, $timeout) {
	        'ngInject';
	
	        return {
	            init: init,
	            getDefaultOptions: getDefaultOptions,
	            isEnabled: isEnabled,
	            transition: transition,
	            registerToRouteEvents: registerToRouteEvents,
	            unregisterToRouteEvents: unregisterToRouteEvents,
	            registerToStateChangeStartEvent: registerToStateChangeStartEvent,
	            unregisterToStateChangeStartEvent: unregisterToStateChangeStartEvent
	        };
	
	        function transition() {
	            if (!isEnabled()) {
	                return;
	            }
	            var options = {};
	            if (angular.isObject(arguments[0])) {
	                options = arguments[0];
	            } else if (angular.isString(arguments[0])) {
	                switch (arguments[0]) {
	                    case 'back':
	                        options = defaultBackTransition;
	                        break;
	                }
	            } else {
	                options = defaultTransition;
	            }
	            options = angular.copy(options);
	            $log.debug('[native transition]', options);
	            switch (options.type) {
	                case 'flip':
	                    window.plugins.nativepagetransitions.flip(options);
	                    break;
	                case 'fade':
	                    window.plugins.nativepagetransitions.fade(options);
	                    break;
	                case 'curl':
	                    window.plugins.nativepagetransitions.curl(options);
	                    break;
	                case 'drawer':
	                    window.plugins.nativepagetransitions.drawer(options);
	                    break;
	                case 'slide':
	                default:
	                    window.plugins.nativepagetransitions.slide(options);
	                    break;
	            }
	        }
	
	        function executePendingTransition() {
	            setTimeout(function () {
	                window.plugins.nativepagetransitions.executePendingTransition();
	                registerToStateChangeStartEvent();
	            }, getDefaultOptions().pendingTransitionDelay);
	        }
	
	        function registerToRouteEvents() {
	            unregisterToRouteEvents();
	            registerToStateChangeStartEvent();
	            $stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', executePendingTransition);
	            $stateChangeError = $rootScope.$on('$stateChangeError', executePendingTransition);
	        }
	
	        function registerToStateChangeStartEvent() {
	            if ($stateChangeStart) {
	                return;
	            }
	            $stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
	                var options = null;
	                // Disable native transition for this state
	                if (toState.nativeTransitions === null) {
	                    return;
	                }
	                if (angular.isObject(toState.nativeTransitionsIOS) && ionic.Platform.isIOS()) {
	                    options = toState.nativeTransitionsIOS;
	                } else if (angular.isObject(toState.nativeTransitionsAndroid) && ionic.Platform.isAndroid()) {
	                    options = toState.nativeTransitionsAndroid;
	                } else if (angular.isObject(toState.nativeTransitionsWindowsPhone) && ionic.Platform.isWindowsPhone()) {
	                    options = toState.nativeTransitionsWindowsPhone;
	                } else if (angular.isObject(toState.nativeTransitions)) {
	                    options = toState.nativeTransitions;
	                }
	                $log.debug('[native transition] $stateChangeStart', toState, options);
	                transition(options);
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
	         * @name ionic-native-transitions.$ionicNativeTransitions#getDefaultOptions
	         * @access public
	         * @methodOf ionic-native-transitions.$ionicNativeTransitions
	         *
	         * @description
	         * Get default options
	         */
	        function getDefaultOptions() {
	            return defaultOptions;
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
	                $log.debug('nativepagetransitions is disabled or nativepagetransitions plugin is not present');
	                return;
	            }
	            $ionicConfig.views.transition('none');
	            angular.extend(window.plugins.nativepagetransitions.globalOptions, getDefaultOptions());
	            registerToRouteEvents();
	        }
	    }
	};
	
	;
	module.exports = exports['default'];

/***/ },
/* 2 */
/*!***************************!*\
  !*** ./lib/nativeSref.js ***!
  \***************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = ["$log", "$ionicNativeTransitions", "$state", function ($log, $ionicNativeTransitions, $state) {
	    'ngInject';
	
	    link.$inject = ["scope", "element", "attrs"];
	    return {
	        link: link,
	        restrict: 'A',
	        scope: false
	    };
	
	    function link(scope, element, attrs) {
	        'ngInject';
	
	        var state = attrs.nativeUiSref;
	        var optionsOverride = scope.$eval(attrs.nativeUiSrefOpts) || {};
	        var options = null;
	
	        attrs.$observe('nativeOptions', function (newOptions) {
	            var evalOptions = scope.$eval(newOptions);
	            options = angular.isObject(evalOptions) ? evalOptions : {};
	        });
	
	        if (!state) {
	            return;
	        }
	
	        element.on('click', function (event) {
	            if (!$ionicNativeTransitions.isEnabled()) {
	                $state.go(state, optionsOverride);
	                return;
	            }
	
	            $ionicNativeTransitions.unregisterToStateChangeStartEvent();
	            $state.go(state, optionsOverride);
	            $ionicNativeTransitions.transition(options);
	            $ionicNativeTransitions.registerToStateChangeStartEvent();
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
	
	exports['default'] = ["$ionicNativeTransitions", "$ionicPlatform", "$ionicHistory", "$rootScope", function ($ionicNativeTransitions, $ionicPlatform, $ionicHistory, $rootScope) {
	    'ngInject';
	
	    $ionicPlatform.ready(function () {
	        $ionicNativeTransitions.init();
	
	        if (!$ionicNativeTransitions.isEnabled()) {
	            return;
	        }
	
	        $rootScope.$ionicGoBack = goBack;
	
	        $ionicPlatform.onHardwareBackButton(function (event) {
	            return goBack();
	        });
	
	        function goBack() {
	            if (!$ionicHistory.backView()) {
	                return;
	            }
	            $ionicNativeTransitions.unregisterToStateChangeStartEvent();
	            $ionicHistory.goBack();
	            $ionicNativeTransitions.transition('back');
	        }
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