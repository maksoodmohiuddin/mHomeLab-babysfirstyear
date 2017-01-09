/**
 * Created by maksood.mohiuddin on 1/6/17.
 */

angular.module('mHomeLab.controllers')
.controller("PhotoCardsCtrl", function ($scope, $ionicPopup, $ionicLoading, $timeout, MenuFactory, config) {

    $scope.getChildren = getChildren();
    $scope.childrens = [];

    console.log("PhotoCardsCtrl Launched --");

    function getChildren() {

        $ionicLoading.show({
            template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Please wait, getting all children.'
        });

        $timeout(function () {

            if(config.dataMode === 0) {

                var key = "children";

                var value = [
                    { title: 'Reggae', id: 1 },
                    { title: 'Chill', id: 2 },
                    { title: 'Dubstep', id: 3 },
                    { title: 'Indie', id: 4 },
                    { title: 'Rap', id: 5 },
                    { title: 'Cowbell', id: 6 }
                ];

                window.localStorage[key] = JSON.stringify(value);

                var data = JSON.parse(window.localStorage[key] || '{}');

                $scope.childrens = data;
                $ionicLoading.hide();
            }
            else {
                MenuFactory.getChildren().then(function (children) {
                    $scope.childrens = children.childrens;
                    console.log($scope.childrens);
                    $ionicLoading.hide();
                }, function (error) {
                    $ionicLoading.hide();
                    $scope.errorMessage = "Unable to retrieve children at this time.";
                    console.log("Connection error");
                });
            }

        }, 1000);
    }

});
