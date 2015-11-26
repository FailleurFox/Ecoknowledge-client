/**
 * Created by Hugo on 26/11/2015.
 */
ecoknowledgeApp
    .directive('user', [function () {
        return {
            templateUrl:'app/shared/user/user.view.html',
            restrict: 'E',
            replace: true,
            scope : {
                user: '=user'
            }
        };
    }]);