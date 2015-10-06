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
export default function($ionicConfigProvider) {
    'ngInject';

    let options = {
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

    return {
        $get,
        setOptions
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
    function setOptions(injectedOptions = {}) {
        angular.merge(options, injectedOptions);
        console.log(options);
        return this;
    }

    function $get($log) {
        'ngInject';

        return {
            init,
            setOptions
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
};
