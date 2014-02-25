/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App','factories/Resource'] , function (app) {
    app.service('userService' , ['$rootScope' ,'$http','Resources','$resource', function ($rootScope,$http,Resources,$resource) {
        var logoutUrl;
        var resources = Resources.query(function(){
            logoutUrl = resources[0].paths.logout;
        });
        var User = $resource('user/:id' , {id: '@id'});
        return {
            logout: function(callback){
//                $http.get(logoutUrl).success(callback);
                callback(logoutUrl);
            },
            Resource: User
        };
    }]);
});