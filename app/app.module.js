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
    'ngCookies'
]);

// routing
ecoknowledgeApp.config(
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'app/components/home/home.view.html'
            }).
            when('/challenges', {
                templateUrl: 'app/components/challenges/challenges.view.html',
            }).
            when('/users', {
                templateUrl: 'app/components/users/users.view.html',
            }).
            when('/profile/:profileId', {
                templateUrl: 'app/components/profile/profile.view.html',
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
);