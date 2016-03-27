'use strict';

angular.module('tvheadend.views.settings', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/settings', {
            templateUrl: 'app/views/settings/settings.html',
            controller: 'SettingsViewController'
        });
    }])

    .controller('SettingsViewController', [function() {

    }]);