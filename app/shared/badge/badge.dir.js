/**
 * <badge> directive
 */
badgeMdl
    .directive('badge', function () {
        return {
            templateUrl:'app/shared/badge/badge.view.html',
            restrict: 'E',
            replace: true,
            scope : {
                badge: '=badge'
            }
        };
    });