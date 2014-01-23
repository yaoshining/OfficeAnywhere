/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/App'] , function (app) {
    app.factory('Resources' , ['$resource' , function ($resource) {
        return  $resource('resources/:key' , {key: '@key'});
    }]);
});