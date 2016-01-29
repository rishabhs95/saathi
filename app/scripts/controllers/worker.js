'use strict';

angular.module('mytodoApp')
    .controller('WorkerCtrl', function($scope, localStorageService) {
        var workersInStore = localStorageService.get('workers');
        $scope.workers = workersInStore || {
            worker: [{
                name: '',
                location: '',
                pref: '',
                exp: ''
            }]
        };
        $scope.$watch('workers', function() {
            localStorageService.set('workers', $scope.workers);
        }, true);

        $scope.save = function() {
            $scope.workers.push($scope.workers);
            $scope.workers = {
                worker: [{
                    name: '',
                    location: '',
                    pref: '',
                    exp: ''
                }]
            };
        };

        $scope.addWorker = function() {
            $scope.workers.worker.push({
                name: '',
                location: '',
                pref: '',
                exp: ''
            });
        };

        $scope.removeWorker = function(index, workers) {
            workers.worker.splice(index, 1);
        };

    });
