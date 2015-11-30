/**
 * <challenge> directive
 */
challengeMdl
    .directive('challenge', function ($uibModal) {
        return {
            templateUrl:'app/shared/challenge/challenge.view.html',
            restrict: 'E',
            replace: true,
            scope : {
                challenge: '=challenge'
            },
            link: function(scope, elem, attrs) {
                // accept challenge
                scope.takeUpChallenge  = function () {
                    // TODO take up challenge
                    console.log("Challenge #"+scope.challenge.id+" accepted !");
                };
                // more information on challenge
                scope.moreInfo  = function (challenge) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'app/shared/challenge/challenge.modal.view.html',
                        controller: 'challengeModalCtrl',
                        resolve: {
                            challenge: function(){
                                return challenge;
                            }
                        }
                    });
                };
            }
        };
    });