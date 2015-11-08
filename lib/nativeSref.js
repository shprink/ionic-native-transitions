export default function($log, $ionicNativeTransitions, $state) {
    'ngInject';

    return {
        link: link,
        restrict: 'A',
        scope: false
    };

    function link(scope, element, attrs) {
        'ngInject';

        let state = attrs.nativeUiSref;
        let optionsOverride = scope.$eval(attrs.nativeUiSrefOpts) || {};
        let options = null;

        attrs.$observe('nativeOptions', (newOptions) => {
            let evalOptions = scope.$eval(newOptions);
            options = angular.isObject(evalOptions) ? evalOptions : {};
        });

        if (!state) {
            return;
        }

        element.on('click', (event) => {
            if (!$ionicNativeTransitions.isEnabled()) {
                $state.go(state, optionsOverride);
                return;
            }

            $ionicNativeTransitions.stateGo(state, optionsOverride, options);
        });
    }
}
