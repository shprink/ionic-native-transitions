import Provider from './provider.js';
import Directive from './directive.js';
import Run from './run.js';

let mod = angular.module('ionic-native-transitions', [
    'ionic'
]);

mod.directive('nativeTransitions', Directive);
mod.provider('$ionicNativeTransitions', Provider);
mod.run(Run);

export default mod = mod.name;
