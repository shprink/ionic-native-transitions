import Provider from './provider.js';
import nativeBack from './nativeBack.js';
import nativeSref from './nativeSref.js';
import Run from './run.js';

let mod = angular.module('ionic-native-transitions', [
    'ionic',
    'ui.router'
]);

mod.directive('nativeBack', nativeBack);
mod.directive('nativeUiSref', nativeSref);
mod.provider('$ionicNativeTransitions', Provider);
mod.run(Run);

export default mod = mod.name;
