'use strict';

angular.module('tvheadend.views.recordings', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/recordings', {
            templateUrl: 'app/views/recordings/recordings.html',
            controller: 'RecordingsViewController'
        });
    }])

    .controller('RecordingsViewController', [function() {

    }]);