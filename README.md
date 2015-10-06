## Installation

### npm

```
npm install ionic-native-transitions --save

cordova plugin add https://github.com/Telerik-Verified-Plugins/NativePageTransitions#0.4.2
```

## Configuration

```
angular.module('yourApp', [
    'ionic-native-transitions'
]);
```

### Set default options

```
.config(function($ionicNativeTransitionsProvider){
    $ionicNativeTransitionsProvider.setOptions({
        "duration": 400, // in milliseconds (ms), default 400
        "slowdownfactor": 4, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 60, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 70, // same as above but for Android, default 70
        "winphonedelay": 200, // same as above but for Windows Phone, default 200,
        "fixedPixelsTop": 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
        "fixedPixelsBottom": 0 // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
    });
});
```

For more information about options please see the documentation: <http://plugins.telerik.com/cordova/plugin/native-page-transitions>

## Animations

Here is animations specific options:

### Slide (default animation)

* ***direction***: 'left|right|up|down', default 'left' (which is like 'next')

### Flip

* ***direction***: 'left|right|up|down', default 'right' (Android currently only supports left and right)

### Fade (iOS and Android only)

### Drawer (iOS and Android only)

* ***origin***: 'left|right', open the drawer from this side of the view, default 'left'
* ***action***: 'open|close', default 'open', note that close is not behaving nicely on Crosswalk

### Curl (iOS only, direction up and down only)

* ***direction***: 'up|down', default 'up'

## Usage

You can use `native-transitions` and `native-transitions-options` directives.

Using `native-transitions` alone will use the slide left animation.

```
<a class="button" native-transitions" ui-sref="facts">Next</a>
```

### Using scope

You can overwrite any default options and set the animation type using the scope:

```
$scope.options = {
    direction: "left",
    type: "flip"
}
```

```
<a class="button" native-transitions native-transitions-options="{{options}}" ui-sref="facts">Next</a>
```

### Inline options

```
<a class="button" native-transitions native-transitions-options="{type: 'slide', direction:'right'}" ui-sref="facts">Next</a>
```

## Contribute

### Development

```
npm install

# Open two terminals
# and run watch to build on the lib files changes
npm run watch

# in the other terminal run following to build the test page and the doc
npm run devserver
```

Open ```http://localhost:8080```

### Tests on device

```
npm run platformAddAndroid
npm run platformAddIOS
npm run pluginAddAll

# run iOS devices
npm run runIosDevice

# run iOS devices
npm run runAndroid
```

## Thanks

* GAJOTRES for his great post: <http://www.gajotres.net/handling-native-view-animations-with-ionic-framework/>
