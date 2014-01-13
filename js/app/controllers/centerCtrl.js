/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','services/centerService'] , function (angular,app) {
    app.controller('centerCtrl' , function ($scope,centerService) {
        $scope.template = centerService.template;
        $scope.$on("center.update",function(event,template,apply){
            $scope.template = template;
            if(apply){
                $scope.$apply();
            }
        });
        $scope.$on("$includeContentLoaded",function(){
            $scope.height = document.getElementById("center").clientHeight;
        });
    })
});