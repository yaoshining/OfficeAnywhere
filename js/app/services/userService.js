/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App'] , function (app) {
    app.service('userService' , ['$rootScope' ,'$http', function ($rootScope,$http) {
        var logoutUrl = "logout";
        return {
            logout: function(callback){
                $http.get(logoutUrl).success(callback);
            }
        };
    }]);
});