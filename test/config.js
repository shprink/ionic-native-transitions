export default function($ionicNativeTransitionsProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    'ngInject';
    $ionicNativeTransitionsProvider.setOptions({
        duration: 500,
        type: 'slide',
        direction: 'left'
    });

    // $ionicNativeTransitionsProvider.enable(false);

    $ionicConfigProvider.tabs.position('top');

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
        .state('facts', {
            url: "/facts",
            nativepagetransitions: {
                type: "flip"
            },
            templateUrl: "templates/facts.html"
        })
        .state('tabs.about', {
            url: "/about",
            nativepagetransitions: null,
            views: {
                'about-tab': {
                    templateUrl: "templates/about.html"
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
