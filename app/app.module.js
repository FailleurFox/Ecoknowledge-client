var ecoknowledgeApp = angular.module('ecoknowledgeApp', [
    'ngRoute',
    'navbarMdl',
    'homeMdl',
    'challengesMdl',
    'usersMdl',
    'profileMdl'
]);

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
            when('/profile', {
                redirectTo: '/profile/0', // TODO id current user
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
);