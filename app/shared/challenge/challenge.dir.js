/**
 * <challenge> directive
 */
challengeMdl
    .directive('challenge', function ($uibModal, $http, AuthenticationService) {

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

                    var userID = AuthenticationService.getUserId();

                    console.log("USERID : ", userID);

                    var req = {
                        method: 'POST',
                        url: 'http://localhost:8081/Ecoknowledge/goals',
                        data: {
                            challenge : scope.challenge.id,
                            user : userID
                        }
                    };

                    $http(req).then(function(){
                        console.log("Goal pris sans problème ma gueule !");
                        scope.refreshFunction();
                        // TODO
                    }, function(){
                        console.log("Erreur en prenant le goal... tooo baaaad");
                        scope.refreshFunction();
                        // TODO
                    });
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