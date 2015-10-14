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

    return {
        $get,
        enable,
        setOptions
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
     * @name ionic-native-transitions.$ionicNativeTransitionsProvider#setOptions
     * @access public
     * @methodOf ionic-native-transitions.$ionicNativeTransitionsProvider
     *
     * @description
     * Overwrite default nativepagetransitions plugin options
     * @param {object} injectedOptions  options that will overwrite defaults
     */
    function setOptions(injectedOptions = {}) {
        angular.extend(options, injectedOptions);
        return this;
    }

    function $get($log, $ionicConfig, $rootScope) {
        'ngInject';

        return {
            init,
            getOptions,
            isEnabled,
            transition,
            registerToRouteEvents,
            unregisterToRouteEvents,
            unregisterToStateChangeStartEvent
        };

        function transition(options = {}) {
            let plugin = window.plugins.nativepagetransitions;
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

            let plugin = window.plugins.nativepagetransitions;

            $stateChangeStart = $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
                let options = getOptions();
                if (angular.isObject(toState.nativepagetransitions)) {
                    options = angular.extend(getOptions(), toState.nativepagetransitions);
                } else if (toState.nativepagetransitions === null) {
                    return;
                }

                $log.debug('transition start', options, event, toState, toParams, fromState, fromParams);
                transition(options);
            });
            $stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
                plugin.executePendingTransition();
            });
            $stateChangeError = $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
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
