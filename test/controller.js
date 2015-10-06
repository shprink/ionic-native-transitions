export default function(
    $scope,
    $log,
    $ionicNativeTransitions
) {

    'ngInject';

    var vm = this;

    $log.info('setting options via controller');

    $ionicNativeTransitions.setOptions({
        "duration": 2000
    });

    $ionicNativeTransitions.setOptions({
        "direction": "down", // 'left|right|up|down', default 'left' (which is like 'next')
        "duration": 1500, // in milliseconds (ms), default 400
        "slowdownfactor": 13, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 1100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 1150, // same as above but for Android, default 70
        "winphonedelay": 1250, // same as above but for Windows Phone, default 200,
        "fixedPixelsTop": 10, // the number of pixels of your fixed header, default 0 (iOS and Android)
        "fixedPixelsBottom": 160 // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
    });

    $ionicNativeTransitions.setOptions();
}
