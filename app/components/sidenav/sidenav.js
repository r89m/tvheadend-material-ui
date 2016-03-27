app.controller('AppController', ['$scope', '$mdSidenav', '$route', '$routeParams', '$location', function($scope, $mdSidenav, $route, $routeParams, $location){

    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;


    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.links = [
        { name: 'Overview', url: 'overview'},
        { name: 'Guide', url: 'guide'},
        { name: 'Recordings', url: 'recordings'}
    ];

    $scope.sublinks = [
        { name: 'Settings', url: 'settings'},
        { name: 'Send Feedback', url: 'feedback'}
    ];

    $scope.goToSection = function(section, event){

        $location.path(section);
    }
}]);