angular
	.module('ngDoctors')
	.controller('doctorsController', function($scope, doctorsFactory) {

		$scope.doctors = doctorsFactory.getDoctors();
		// scope calls the factory to run the getDoctors function
	});