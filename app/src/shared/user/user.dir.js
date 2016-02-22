/**
 * <user> directive
 */
userMdl
    .directive('user', function () {
        return {
            templateUrl:'src/shared/user/user.view.html',
            restrict: 'E',
            replace: true,
            scope : {
                user: '=user'
            }
        };
    });
