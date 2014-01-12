/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/App'] , function (app) {
    app.factory('Item' , ['$resource' , function ($resource) {
        return $resource('item/:page' , {page: '@page'});
    }]);
});