/**
 * <badge> directive
 */
badgeMdl
    .directive('badge', function () {
        return {
            templateUrl:'src/shared/badge/badge.view.html',
            restrict: 'E',
            replace: true,
            scope : {
                badge: '=badge'
            }
        };
    });
