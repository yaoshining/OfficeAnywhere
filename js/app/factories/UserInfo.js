/**
 * Created by 世宁 on 14-1-3.
 * This factory is use to retrieve the current login user's information from server.
 */
define(['modules/App'] , function (app) {
    "use strict"
    app.factory('UserInfo' , ['$resource' , function ($resource) {
        return $resource('userInfo/:id' , {id: '@id'});
    }]);
});