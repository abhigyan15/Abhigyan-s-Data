
myApp.controller("introCntrl", function ($scope, $rootScope, $location) {
        $rootScope.showHeader = false;
        $rootScope.pageHeading = "";
        $rootScope.showMenuIcon = false;

        $scope.showHelp = 1;
        $scope.goToLandingPage = function () {
                $location.path('/newsPaper')
        }
});
