/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/App'] , function (app) {
    app.factory('TogglePanel' , ['$resource' , function ($resource) {
        return $resource('togglePanel/:id' , {id: '@id'});
    }]);
});