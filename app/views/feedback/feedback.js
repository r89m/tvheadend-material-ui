'use strict';

angular.module('tvheadend.views.feedback', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/feedback', {
            templateUrl: 'app/views/feedback/feedback.html',
            controller: 'FeedbackViewController'
        });
    }])

    .controller('FeedbackViewController', [function() {

    }]);