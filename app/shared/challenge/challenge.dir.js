/**
 * <challenge> directive
 */
challengeMdl
    .directive('challenge', function ($uibModal, AuthenticationService) {
        return {
            templateUrl:'app/shared/challenge/challenge.view.html',
            restrict: 'E',
            replace: true,
            scope : {
                challenge: '=challenge',
                refreshFunction: '&onServerResponse'
            },
            link: function(scope, elem, attrs) {
                // accept challenge
                scope.takeUpChallenge  = function () {
                    // TODO take up challenge
                    console.log("Challenge #"+scope.challenge.id+" accepted !");
                    scope.refreshFunction();
                };
                // more information on challenge
                scope.moreInfo  = function (challenge) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'app/shared/challenge/challenge.modal.view.html',
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