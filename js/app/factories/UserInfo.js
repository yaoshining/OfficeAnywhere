/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/App'] , function (app) {
    app.factory('UserInfo' , ['$resource' , function ($resource) {
        return $resource('userInfo/:id' , {id: '@id'});
    }]);
});