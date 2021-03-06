/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','directives/layout','directives/shader','services/userService','controllers/emailCtrl'] , function (angular,app) {
    app.controller('appCtrl' ,function ($scope,$rootScope,userService,$q) {
        var show = false;
        $scope.toggleMessageBox = function(){
            if(!show){
                $rootScope.$broadcast("messagebox.show");
                show = true;
            }else{
                $rootScope.$broadcast("messagebox.hide");
                show = false;
            }
        }
        $scope.logout = function(){
            userService.logout(function(url){
                window.location.href = url;
            });
        }
    })
});
