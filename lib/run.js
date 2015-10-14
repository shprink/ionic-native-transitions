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
export default function($ionicNativeTransitions, $ionicPlatform, $ionicHistory) {
    'ngInject';

    $ionicPlatform.ready(() => {
        $ionicNativeTransitions.init();

        if (!$ionicNativeTransitions.isEnabled()) {
            return;
        }

        $ionicNativeTransitions.registerToRouteEvents();
    });

    $ionicPlatform.onHardwareBackButton((event) => {
        event.preventDefault();
        $ionicNativeTransitions.unregisterToStateChangeStartEvent();
        $ionicNativeTransitions.transition({
            type: 'slide',
            direction: 'right'
        });
        $ionicHistory.goBack();
        $ionicNativeTransitions.registerToRouteEvents();
    });
};
