/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App'] , function (app) {
    app.factory('Menus' , ['$resource' , function ($resource) {
        return $resource('menus/:page' , {page: '@page'});
    }]);
});