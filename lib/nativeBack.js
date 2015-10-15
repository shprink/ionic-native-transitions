export default function($log, $ionicNativeTransitions, $ionicHistory) {
    'ngInject';

    return {
        link: link,
        restrict: 'A',
        scope: false
    };

    function link(scope, element, attrs) {
        'ngInject';

        if (!$ionicNativeTransitions.isEnabled()) {
            return;
        }

        element.on('click', (event) => {
            event.preventDefault();
            $ionicNativeTransitions.unregisterToStateChangeStartEvent();
            $ionicNativeTransitions.transition('back');
            $ionicHistory.goBack();
            $ionicNativeTransitions.registerToRouteEvents();
        });
    }
}
