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
export default function() {
    'ngInject';

    let enabled = true,
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

    return {
        $get,
        enable,
        setDefaultTransition,
        setDefaultBackTransition,
        setDefaultOptions
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
    function enable(enabled = true) {
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
     * @name ionic-native-transitions.$ionicNativeTransitionsProvider#setDefaultOptions
     * @access public
     * @methodOf ionic-native-transitions.$ionicNativeTransitionsProvider
     *
     * @description
     * Overwrite default nativepagetransitions plugin options
     * @param {object} injectedOptions  options that will overwrite defaults
     */
    function setDefaultOptions(injectedOptions = {}) {
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
    function setDefaultTransition(transition = {}) {
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
    function setDefaultBackTransition(transition = {}) {
        angular.extend(defaultBackTransition, transition);
        return this;
    }

    function $get($log, $ionicConfig, $rootScope, $timeout) {
        'ngInject';

        return {
            init,
            getDefaultOptions,
            isEnabled,
            transition,
            registerToRouteEvents,
            unregisterToRouteEvents,
            registerToStateChangeStartEvent,
            unregisterToStateChangeStartEvent
        };

        function transition() {
            if (!isEnabled()) {
                return;
            }
            let options = {}
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
            setTimeout(() => {
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
            $stateChangeStart = $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
                let options = null;
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
