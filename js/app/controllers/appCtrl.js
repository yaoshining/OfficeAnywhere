/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','directives/layout'] , function (angular,app) {
    app.controller('appCtrl' , function ($scope) {
        $scope.tpl = "js/app/templates/Desktop.html";
    })
});