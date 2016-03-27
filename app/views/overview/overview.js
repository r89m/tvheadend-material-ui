'use strict';

angular.module('tvheadend.views.overview',
    ['ngRoute']
    )

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/overview', {
            templateUrl: 'app/views/overview/overview.html',
            controller: 'OverviewViewController'
        });
    }])

    .controller('OverviewViewController', ["$scope", function($scope) {

        $scope.sections = [
            {
                title: "Active Recordings",
                src: "recordings-active",
                width: 3
            },{
                title: "Upcoming Recordings",
                src: "recordings-upcoming",
                width: 3
            },{
                title: "Latest Recordings",
                src: "recordings-latest",
                width: 3
            },{
                title: "Storage Status",
                src: "storage-status",
                width: 2
            },{
                title: "Active Live Streams",
                src: "live-streams",
                width: 2
            }
        ]

    }])

    .directive("overviewCard", function(){

        return {
            scope: {
                section: "=",
                cardSrc: "="
            },
            restrict: "EA",
            link: function(scope, element, attrs) {

            },
            templateUrl: 'app/views/overview/overview.card.html'
        }
    });