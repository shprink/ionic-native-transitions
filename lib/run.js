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
export default function($ionicNativeTransitions, $ionicPlatform, $ionicHistory, $rootScope) {
    'ngInject';

    $ionicPlatform.ready(() => {
        $ionicNativeTransitions.init();

        if (!$ionicNativeTransitions.isEnabled()) {
            return;
        }

        $rootScope.$ionicGoBack = goBack;

        $ionicPlatform.onHardwareBackButton((event) => goBack());

        function goBack() {
            if (!$ionicHistory.backView()) {
                return;
            }
            $ionicNativeTransitions.unregisterToStateChangeStartEvent();
            $ionicHistory.goBack();
            $ionicNativeTransitions.transition('back');
        }
    });


};
