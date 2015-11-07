export default function(
    $scope,
    $log,
    $ionicNativeTransitions
) {

    'ngInject';

    var vm = this;
    vm.isEnable = $ionicNativeTransitions.isEnabled();
    vm.enable = enable;
    vm.disable = disable;
    vm.disableWithoutDisablingIonicTransitions = disableWithoutDisablingIonicTransitions;

    function enable(){
        $ionicNativeTransitions.enable();
        vm.isEnable = $ionicNativeTransitions.isEnabled();
    }

    function disable(){
        $ionicNativeTransitions.enable(false);
        vm.isEnable = $ionicNativeTransitions.isEnabled();
    }

    function disableWithoutDisablingIonicTransitions(){
        $ionicNativeTransitions.enable(false, true);
        vm.isEnable = $ionicNativeTransitions.isEnabled();
    }
}
