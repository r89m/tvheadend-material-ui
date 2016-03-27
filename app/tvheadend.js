var app = angular.module('tvheadend',
    [
        'ngMaterial',
        'ngRoute',

        'tvheadend.views.overview',
        'tvheadend.views.guide',
        'tvheadend.views.recordings',
        'tvheadend.views.settings',
        'tvheadend.views.feedback'
    ]).config(function($locationProvider, $routeProvider, $mdThemingProvider, $mdIconProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('orange');

        $mdIconProvider
            .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
            .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
            .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);

        $locationProvider.html5Mode(false).hashPrefix("!");
        $routeProvider.otherwise({redirectTo:'overview'});
});

/*
angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo:'/projectsinfo'});
}]);

angular.module('app').controller('HeaderController', ['$scope', '$location', '$route', 'breadcrumbs', 'notifications', 'httpRequestTracker',
    function ($scope, $location, $route, breadcrumbs, notifications, httpRequestTracker) {
        $scope.location = $location;
        $scope.breadcrumbs = breadcrumbs;

        $scope.home = function () {
            $location.path('/overview');
        };

        $scope.isNavbarActive = function (navBarPath) {
            return navBarPath === breadcrumbs.getFirst().name;
        };

        $scope.hasPendingRequests = function () {
            return httpRequestTracker.hasPendingRequests();
        };
    }]);
*/