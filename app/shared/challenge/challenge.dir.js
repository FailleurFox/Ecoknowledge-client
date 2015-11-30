/**
 * <challenge> directive
 */
challengeMdl
    .directive('challenge', function () {
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
                    console.log("Challenge #"+scope.challenge.id+" accepted !");
                };
                // more information on challenge
                scope.moreInfo  = function () {
                    console.log("More #"+scope.challenge.id+"...");
                };
            }
        };
    });