/**
 * Registration component controller
 */
registrationMdl.controller('registrationCtrl', function ($rootScope, $http, $scope, AuthenticationService) {
    // submit registration information
    $scope.onSubmit = function(){

        $.ajaxPrefilter( "json script", function( options ) {
            options.crossDomain = true;
        });

        // TODO add real mapping
        var data ={
            "firstName" : $scope.firstName,
            "lastName" : $scope.lastName,
            "mail" : $scope.mail,
            "password" : $scope.password,
            "symbolicNameToSensorNameMap":{}
        };

        $http.post($rootScope.serverURL + 'users', data).success(function (data, status, headers, config) {
            AuthenticationService.connect(data.id);
        });
    }
});