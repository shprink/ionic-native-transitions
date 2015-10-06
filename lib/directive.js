export default function($log, $ionicNativeTransitions) {
    'ngInject';

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

        let options = {};

        attrs.$observe('nativeTransitionsOptions', (newOptions) => {
            let evalOptions = scope.$eval(newOptions);
            options = angular.isObject(evalOptions) ? evalOptions : {};
        });

        element.on('click', (event) => {
            if (window.cordova && window.plugins && window.plugins.nativepagetransitions) {
                let plugin = window.plugins.nativepagetransitions;
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
}
