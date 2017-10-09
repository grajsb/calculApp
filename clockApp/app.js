var app = angular.module("clockApp", []);
app.controller("TimeCtrl", timeCtrl);

function timeCtrl($scope) {
    var currentDate = new Date();
    $scope.timeString = currentDate.toTimeString();
    $scope.updateTime = function(){
        console.log("Button clicked");
        var currentDate = new Date();
        $scope.timeString = currentDate.toTimeString();
    }
}