/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','jquery.dropdown','css!style/css/jquery.dropdown','factories/Menus','directives/accordion'] , function (angular,app) {
    app.controller('northCtrl' , ['$rootScope','$scope','Menus','$location','$route', function ($rootScope,$scope,Menus,$location,$route) {
        $scope.template = {
            name: 'template',
            url: 'js/app/templates/North.html'
        };
        var menus = Menus.query(function(){
            $scope.menus = menus;
        });
        $scope.newTab = function(item){

            if(_.where($scope.menus,{name: item.name}).length<1){
                $scope.menus.push(item);
            }
            $location.path(item.url);
            $route.reload();
        };
        $scope.closeTab = function($event,menu){
            $event.preventDefault();
            $scope.menus.splice(_.indexOf($scope.menus,menu),1);
            $location.path("/");
            $("#startMenu").dropdown("hide");
        }
        $("#startMenu").dropdown();
    }]);
});