/**
 * Created by 世宁 on 14-3-13.
 */
define(["modules/App"],function(app){
    app.factory('Organizations' , ['$resource' , function ($resource) {
        return $resource('data/organizations/:pId' , {pId: '@pId'},{
            'update': {method: 'PUT'}
        });
    }]);
});