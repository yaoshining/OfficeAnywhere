/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','jquery.dropdown','css!style/css/jquery.dropdown','factories/Menus','directives/accordion','services/centerService'] , function (angular,app) {
    app.controller('northCtrl' , ['$rootScope','$scope','Menus','$location','centerService','$route', function ($rootScope,$scope,Menus,$location,centerService,$route) {
        $scope.template = {
            name: 'template',
            url: 'js/app/templates/North.html'
        };
        var menus = Menus.query(function(){
            $scope.menus = menus;
        });
        $scope.newTab = function(item,apply){
            if(_.where($scope.menus,{name: item.name}).length<1){
                $scope.menus.push(item);
            }
            centerService.open(item,apply);
        };
        $scope.closeTab = function($event,menu){
            $event.preventDefault();
            $scope.menus.splice(_.indexOf($scope.menus,menu),1);
            centerService.close();
            $("#startMenu").dropdown("hide");
        };
        $("#startMenu").dropdown();
    }]);
});