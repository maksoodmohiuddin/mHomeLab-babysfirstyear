/**
 * Created by maksood.mohiuddin on 1/6/17.
 */
angular.module('mHomeLab.services').factory('MenuFactory', MenuFactory);

function MenuFactory($http, config) {
    var children = [];

    var childrenUrl = "";

    return {
        getChildren: function () {

            // use local storage
            //local file mock
            if(config.dataMode === 1) {
                return $http.get("http://10.39.125.90:8100/app/data/mocks/listchildrenmock.json").then(function (response) {
                    children = response.data;
                    console.log("getChildren: ->" + response.data);
                    return children;
                });
            }

            ////use http call, maybe use lambda/firebase
            if(config.dataMode === 2) {
                childrenUrl = config.dataUrl;

                return $http.get(childrenUrl).then(function (response) {
                    children = response.data;
                    console.log("getChildren: ->" + response.data);
                    return children;
                });
            }
        }
    };
}
