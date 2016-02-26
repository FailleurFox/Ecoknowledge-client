/**
 * Registration component controller
 */
registrationMdl.controller('registrationCtrl', function ($rootScope, $http, $scope, AuthenticationService) {
  $scope.sensorTypes = ['TMP_CLIM', 'TMP_AMB', 'SWITCH_LIGHT', 'SWITCH_DOOR'];
  $scope.sensors = [];

  // submit registration information
  $scope.onSubmit = function () {
    if($scope.password != $scope.confirmPassword)return;

    $.ajaxPrefilter("json script", function (options) {
      options.crossDomain = true;
    });

    var finalSensors = {};
    for(var index in $scope.sensors){
      var sensor = $scope.sensors[index];
      finalSensors[sensor.type] = sensor.name;
    }

    var data = {
      "firstName": $scope.firstName,
      "lastName": $scope.lastName,
      "mail": $scope.mail,
      "password": $scope.password,
      "symbolicNameToSensorNameMap": finalSensors
    };
    $http.post($rootScope.serverURL + 'users', data).success(function (data, status, headers, config) {
      AuthenticationService.connect(data.id);
    });
  };

  $scope.addSensor = function () {
    $scope.sensors.push({'type': $scope.sensorTypes[0], 'name': undefined});
  };

  $scope.removeSensor = function (id) {
    $scope.sensors.splice(id, 1);
  }
});
