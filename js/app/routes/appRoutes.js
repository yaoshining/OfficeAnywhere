/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/App' , 'controllers/appCtrl','controllers/northCtrl','directives/carousel','directives/shortcuts','directives/shortcut'] , function (app) {
    return app.config(['$routeProvider' ,'$logProvider', function ($routeProvider,$logProvider) {
//        $routeProvider.when('/' , {controller: 'appCtrl' ,templateUrl: 'js/app/templates/Desktop.html'});
//        $routeProvider.when('/:module' , {
////            controller: 'listCtrl' ,
//            templateUrl: function(routeParams){
//                return 'js/app/templates/'+routeParams.module+'.html';
//            }
//        });
          $logProvider.debugEnabled(true);
    }]).run(function($rootScope,$log){
        $rootScope.$log = $log;
        $log.debug("Modules are now loaded completely!");
    });
});