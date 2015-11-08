export default function(
    $scope,
    $rootScope,
    $log,
    $ionicNativeTransitions
) {

    'ngInject';

    var vm = this;
    vm.isEnable = $ionicNativeTransitions.isEnabled();
    vm.enable = enable;
    vm.disable = disable;
    vm.stateGo = stateGo;
    vm.locationUrl = locationUrl;
    vm.disableWithoutDisablingIonicTransitions = disableWithoutDisablingIonicTransitions;

    $rootScope.$on('ionicNativeTransitions.success', function() {
        $log.info('yeah!');
    });

    $rootScope.$on('ionicNativeTransitions.error', function() {
        $log.info(':(');
    });

    function enable() {
        $ionicNativeTransitions.enable();
        vm.isEnable = $ionicNativeTransitions.isEnabled();
    }

    function disable() {
        $ionicNativeTransitions.enable(false);
        vm.isEnable = $ionicNativeTransitions.isEnabled();
    }

    function disableWithoutDisablingIonicTransitions() {
        $ionicNativeTransitions.enable(false, true);
        vm.isEnable = $ionicNativeTransitions.isEnabled();
    }

    function stateGo() {
        $ionicNativeTransitions.stateGo('four', {
            test: 'buyakacha!'
        }, {
            "type": "slide",
            "direction": "up", // 'left|right|up|down', default 'left' (which is like 'next')
            "duration": 1500, // in milliseconds (ms), default 400
        });
    }

    function locationUrl() {
        $ionicNativeTransitions.locationUrl('/three');
    }
}
