var ecoknowledgeApp = angular.module('ecoknowledgeApp', [
    'ngRoute',
    'navbarMdl',
    'homeMdl',
    'challengesMdl',
    'usersMdl',
    'myProfileMdl'
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
            when('/myProfile', {
                templateUrl: 'app/components/myProfile/myProfile.view.html',
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
);