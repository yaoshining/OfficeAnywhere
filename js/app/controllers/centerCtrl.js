/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','services/centerService','factories/UserInfo'] , function (angular,app) {
    app.controller('centerCtrl' , function ($scope,centerService,UserInfo,$rootScope) {
        var userInfo = UserInfo.query(function(){
            $rootScope.userInfo = userInfo;
        });
        $scope.template = centerService.template;
        $scope.templates = centerService.templates;
        $scope.$on("center.update",function(event,template,apply){
            $scope.template = template;
            if(apply){
                $scope.$apply();
            }
        });
        $scope.$watch("template",function(newTpl,oldTpl){

        });
        $scope.$on("$includeContentLoaded",function(){
            $scope.height = document.getElementById("center").clientHeight;
        });
    })
});