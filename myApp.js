angular.module('myApp', [])
    .controller('FormCtrl', ['$scope',
        function($scope) {
            $scope.submit = function() {
                if ($scope.myForm.$valid) {
                    console.log('The form is valid');
		    $scope.results = true;
		    $scope.inputFrm = true;
		    $scope.submitted = false;
                } else {
                    console.log('The form is invalid');
                }
            };
	    $scope.reset = function() {
		    $scope.results = false;
		    $scope.inputFrm = false;
		    $scope.data = {};
		    $scope.myForm.$setPristine();
		    $scope.submitted = false;
	    };

        }
    ]);
