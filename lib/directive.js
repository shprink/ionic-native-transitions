export default function($ionicGesture) {
    'ngInject';

    return {
        link: Link,
        restrict: 'A',
        scope: {
            nativeTransitionsOptions: '='
        }
    };

    function Link(scope, element, attrs) {
        'ngInject';

        // let direction = (angular.isDefined(attrs.nativeTransitionsDirection) && (attrs.nativeTransitionsDirection === 'left' || attrs.nativeTransitionsDirection === 'right' || attrs.nativeTransitionsDirection === 'up' || attrs.nativeTransitionsDirection === 'down')) ? attrs.nativeTransitionsDirection : 'left';
        // let type = (angular.isDefined(attrs.nativeTransitionsType) && (attrs.nativeTransitionsType === 'slide' || attrs.nativeTransitionsType === 'flip' || attrs.nativeTransitionsType === 'fade' || attrs.nativeTransitionsType === 'drawer' || attrs.nativeTransitionsType === 'curl')) ? attrs.nativeTransitionsType : 'slide';
        let options = scope.nativeTransitionsOptions || {
            type: 'slide',
            direction: 'left'
        };
        console.log('scope', scope);
        $ionicGesture.on('tap', function(e) {
            if (window.cordova && window.plugins && window.plugins.nativepagetransitions) {
                switch (type) {
                    case 'slide':
                    case 'flip':
                    case 'fade':
                    case 'curl':
                    case 'drawer':
                        window.plugins.nativepagetransitions[type].apply(this, options);
                        break;

                }
            }
        });
    }
}
