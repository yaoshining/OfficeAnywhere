/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','jquery.dropdown','css!style/css/jquery.dropdown','factories/Menus','directives/accordion','directives/calendar','services/centerService'] , function (angular,app) {
    app.controller('northCtrl' , ['$rootScope','$scope','Menus','$location','centerService','$route', function ($rootScope,$scope,Menus,$location,centerService,$route,$window) {
        $scope.template = {
            name: 'template',
            url: 'js/app/templates/North.html'
        };
//        var menus = Menus.query(function(){
//            $scope.menus = menus;
//        });
        $scope.menus = Menus.menus;
        $scope.newTab = function(item,apply){
            if(_.where($scope.menus,{id: item.id}).length<1){
                Menus.menus.push(item);
            }
            Menus.active(item);
            centerService.open(item,apply);
        };
        window.newTab = function(item,apply){
            $scope.newTab(item,apply);
        };
        $scope.closeTab = function($event,menu){
            $event.preventDefault();
            Menus.close(menu);
//            centerService.close();
            $("#startMenu").dropdown("hide");
        };
        $("#startMenu").dropdown();
    }]);
});