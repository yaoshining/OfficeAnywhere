/**
 * Created by 世宁 on 14-1-3.
 * This factory is use to get the site configurations from server such as site URL path or any other properties.
 */
define(['modules/App'] , function (app) {
    app.factory('Resources' , ['$resource' , function ($resource) {
        return  $resource('resources/:key' , {key: '@key'});
    }]);
});