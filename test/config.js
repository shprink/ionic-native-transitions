export default function($ionicNativeTransitionsProvider, $stateProvider, $urlRouterProvider) {
    'ngInject';
    $ionicNativeTransitionsProvider.setOptions({
        "duration": 2000
    });


    $ionicNativeTransitionsProvider.setOptions({
        "direction": "down", // 'left|right|up|down', default 'left' (which is like 'next')
        "duration": 1500, // in milliseconds (ms), default 400
        "slowdownfactor": 13, // overlap views (higher number is more) or no overlap (1), default 4
        "iosdelay": 1100, // ms to wait for the iOS webview to update before animation kicks in, default 60
        "androiddelay": 1150, // same as above but for Android, default 70
        "winphonedelay": 1250, // same as above but for Windows Phone, default 200,
        "fixedPixelsTop": 10, // the number of pixels of your fixed header, default 0 (iOS and Android)
        "fixedPixelsBottom": 160 // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
    });


    $ionicNativeTransitionsProvider.setOptions();


    $stateProvider
        .state('tabs', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
        })
        .state('tabs.home', {
            url: "/home",
            views: {
                'home-tab': {
                    templateUrl: "templates/home.html"
                }
            }
        })
        .state('tabs.facts', {
            url: "/facts",
            views: {
                'home-tab': {
                    templateUrl: "templates/facts.html"
                }
            }
        })
        .state('tabs.facts2', {
            url: "/facts2",
            views: {
                'home-tab': {
                    templateUrl: "templates/facts2.html"
                }
            }
        })
        .state('tabs.about', {
            url: "/about",
            views: {
                'about-tab': {
                    templateUrl: "templates/about.html"
                }
            }
        })
        .state('tabs.navstack', {
            url: "/navstack",
            views: {
                'about-tab': {
                    templateUrl: "templates/nav-stack.html"
                }
            }
        })
        .state('tabs.contact', {
            url: "/contact",
            views: {
                'contact-tab': {
                    templateUrl: "templates/contact.html"
                }
            }
        });


    $urlRouterProvider.otherwise("/tab/home");
}
