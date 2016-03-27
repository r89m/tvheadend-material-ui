'use strict';

angular.module('tvheadend.views.guide', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/guide', {
            templateUrl: 'app/views/guide/guide.html',
            controller: 'GuideViewController'
        });
    }])

    .controller('GuideViewController', [function() {

    }]);