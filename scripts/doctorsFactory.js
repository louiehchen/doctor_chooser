angular
	.module('ngDoctors')
	.factory('doctorsFactory', function() {
		// using a factory to be more modular for the future, can add/delete entries
		var doctorsData = [
			{
				"Name": "House",
				"Specialty": "Disease",
				"Area": "Princeton",
				"Rating": 4
			},

			{
				"Name": "Dorian",
				"Specialty": "Internal",
				"Area": "Los Angeles",
				"Rating": 3
			},

			{
				"Name": "Cox",
				"Specialty": "Internal",
				"Area": "Los Angeles",
				"Rating": 5
			},

			{
				"Name": "Grey",
				"Specialty": "Internal",
				"Area": "Seattle",
				"Rating": 4
			},

			{
				"Name": "Octopus",
				"Specialty": "Robotics",
				"Area": "New York",
				"Rating": 2
			},

			{
				"Name": "Doom",
				"Specialty": "Robotics",
				"Area": "Space",
				"Rating": 5
			},

			{
				"Name": "Who",
				"Specialty": "Time",
				"Area": "Space",
				"Rating": 2
			},

			{
				"Name": "Cameron",
				"Specialty": "Disease",
				"Area": "Princeton",
				"Rating": 2
			},

			{
				"Name": "Spaceman",
				"Specialty": "Disease",
				"Area": "New York",
				"Rating": 1
			},

			{
				"Name": "Turk",
				"Specialty": "Surgery",
				"Area": "Los Angeles",
				"Rating": 5
			}
		];

		function getDoctors() {
			return doctorsData;
			// factory function to get the data
		}

		return {
			getDoctors: getDoctors
		}
		// calls the function
	});