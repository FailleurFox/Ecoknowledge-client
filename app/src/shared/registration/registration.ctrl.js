/**
 * Registration component controller
 */
registrationMdl.controller('registrationCtrl', function ($rootScope, $http, $scope, AuthenticationService) {
  $scope.captorTypes = ['TMP_CLIM', 'TMP_AMB', 'SWITCH_LIGHT', 'SWITCH_DOOR'];
  $scope.captors = [];

  // submit registration information
  $scope.onSubmit = function () {
    if($scope.password != $scope.confirmPassword)return;

    $.ajaxPrefilter("json script", function (options) {
      options.crossDomain = true;
    });

    // TODO add real mapping
    var data = {
      "firstName": $scope.firstName,
      "lastName": $scope.lastName,
      "mail": $scope.mail,
      "password": $scope.password,
      "symbolicNameToSensorNameMap": {}
    };

    $http.post($rootScope.serverURL + 'users', data).success(function (data, status, headers, config) {
      AuthenticationService.connect(data.id);
    });
  };

  $scope.addCaptor = function () {
    $scope.captors.push({'type': $scope.captorTypes[0], 'name': undefined});
  };

  $scope.removeCaptor = function (id) {
    $scope.captors.splice(id, 1);
  }
});
