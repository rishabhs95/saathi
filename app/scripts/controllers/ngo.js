'use strict';

angular.module('mytodoApp')
    .controller('NgoCtrl', function($scope, localStorageService) {
        var ngosInStore = localStorageService.get('ngos');
        $scope.ngos = ngosInStore || {
            ngo: [{
                name: '',
                location: '',
                regno: ''
            }]
        };
        $scope.$watch('ngos', function() {
            localStorageService.set('ngos', $scope.ngos);
        }, true);

        $scope.save = function() {
            $scope.ngos.push($scope.ngos);
            $scope.ngos = {
                ngo: [{
                    name: '',
                    location: '',
                    regno: ''
                }]
            };
        };

        $scope.addNgo = function() {
            $scope.ngos.ngo.push({
                name: '',
                location: '',
                regno: ''
            });
        };

        $scope.removeNgo = function(index, ngos) {
            ngos.ngo.splice(index, 1);
        };

    });