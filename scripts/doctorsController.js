angular
	.module('ngDoctors')
	.controller('doctorsController', function($scope, doctorsFactory) {

		$scope.doctors = doctorsFactory.getDoctors();

	});