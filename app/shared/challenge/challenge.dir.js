/**
 * Created by Hugo on 26/11/2015.
 */
ecoknowledgeApp
    .directive('challenge', [function () {
        return {
            templateUrl:'app/shared/challenge/challenge.view.html',
            restrict: 'E',
            replace: true,
            scope : {
                challenge: '=challenge'
            },
            link: function(scope, elem, attrs) {
                scope.takeUpChallenge  = function () {
                    console.log("Challenge #"+scope.challenge.id+" accepted !");
                };
            }
        };
    }]);