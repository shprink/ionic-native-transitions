export default function($log, $ionicNativeTransitions, $ionicHistory) {
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
}
