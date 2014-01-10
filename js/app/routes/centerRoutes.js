/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/App' , 'controllers/listCtrl','controllers/northCtrl','directives/carousel','directives/shortcuts'] , function (app) {
    return app.config(['$routeProvider' , function ($routeProvider) {
        $routeProvider.when('/' , {controller: 'listCtrl' ,templateUrl: 'js/app/templates/Desktop.html'});
        $routeProvider.when('/:module' , {
//            controller: 'listCtrl' ,
            templateUrl: function(routeParams){
                return 'js/app/templates/'+routeParams.module+'.html';
            }
        });
    }]);
});