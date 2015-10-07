export default function($ionicNativeTransitionsProvider, $stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    'ngInject';
    $ionicNativeTransitionsProvider.setOptions({
        duration: 500,
        direction: 'up'
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
            templateUrl: "templates/facts.html"
        })
        .state('tabs.about', {
            url: "/about",
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
