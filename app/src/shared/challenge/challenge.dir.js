/**
 * <challenge> directive
 */
challengeMdl
    .directive('challenge', function ($uibModal, $http, $rootScope, AuthenticationService) {

        return {
            templateUrl:'src/shared/challenge/challenge.view.html',
            restrict: 'E',
            replace: true,
            scope : {
                challenge: '=challenge',
                refreshFunction: '&onServerResponse'
            },
            link: function(scope, elem, attrs) {

                scope.takeUpChallenge  = function () {

                    $.ajaxPrefilter( "json script", function( options ) {
                        options.crossDomain = true;
                    });

                    var data ={'challenge': scope.challenge.id,
                        'user': AuthenticationService.getUserId};
                    $http.post($rootScope.serverURL + 'goals/', data).success(function (data, status, headers, config) {});

                    scope.refreshFunction();
                };
                // more information on challenge
                scope.moreInfo  = function (challenge) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'src/shared/challenge/challenge.modal.view.html',
                        controller: 'challengeModalCtrl',
                        size: 'lg',
                        resolve: {
                            challenge: function(){
                                return challenge;
                            },
                            refreshFunction: function(){
                                return scope.refreshFunction;
                            }
                        }
                    });
                };
                scope.isLoggedIn = AuthenticationService.isLoggedIn;
            }
        };
    });
