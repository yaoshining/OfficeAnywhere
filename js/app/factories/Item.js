/**
 * Created by 世宁 on 14-1-3.
 * The resource of desktop shortcuts,use to implement the CRUD functionality of personalized desktop.
 */
define(['modules/App'] , function (app) {
    app.factory('Item' , ['$resource' , function ($resource) {
        return $resource('item/:page' , {page: '@page'},{
            'update': {method: 'PUT'}
        });
}]);
});