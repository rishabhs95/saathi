'use strict';

angular.module('mytodoApp')
    .controller('HireCtrl', function($scope) {
        $scope.services = {
        	service: [{
	            name: 'Construction',
	            number: '17'
	        }, {
	            name: 'Farming',
	            number: '80'
	        }, {
	            name: 'Distribution',
	            number: '42'
	        }
	        ]
	    };
    });
