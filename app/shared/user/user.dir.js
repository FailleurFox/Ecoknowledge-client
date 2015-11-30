/**
 * <user> directive
 */
userMdl
    .directive('user', function () {
        return {
            templateUrl:'app/shared/user/user.view.html',
            restrict: 'E',
            replace: true,
            scope : {
                user: '=user'
            }
        };
    });