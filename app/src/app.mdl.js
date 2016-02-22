var ecoknowledgeApp = angular.module('ecoknowledgeApp', [
    'ui.bootstrap',
    'ngRoute',
    'navbarMdl',
    'homeMdl',
    'challengesMdl',
    'usersMdl',
    'profileMdl',
    'authenticationMdl',
    'registrationMdl',
    'challengeMdl',
    'userMdl',
    'ngCookies',
    'badgeMdl'
])
    //iInitializing rootScope
    .run(function ($rootScope) {
        $rootScope.serverURL = "http://localhost:8080/Ecoknowledge/";
    })

    // routing
    .config(
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'src/components/home/home.view.html'
            }).
            when('/challenges', {
                templateUrl: 'src/components/challenges/challenges.view.html',
            }).
            when('/users', {
                templateUrl: 'src/components/users/users.view.html',
            }).
            when('/profile/:profileId', {
                templateUrl: 'src/components/profile/profile.view.html',
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
);
