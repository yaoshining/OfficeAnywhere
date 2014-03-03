/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/App' , 'controllers/appCtrl','controllers/northCtrl','directives/carousel','directives/shortcuts','directives/shortcut','directives/desktopManager'] , function (app) {
    "use strict";
    return app.config(['$routeProvider' ,'$logProvider', function ($routeProvider,$logProvider) {
//        $routeProvider.when('/' , {controller: 'appCtrl' ,templateUrl: 'js/app/templates/Desktop.html'});
//        $routeProvider.when('/:module' , {
////            controller: 'listCtrl' ,
//            templateUrl: function(routeParams){
//                return 'js/app/templates/'+routeParams.module+'.html';
//            }
//        });
          $logProvider.debugEnabled(true);
    }]).run(function($rootScope,$log,$lazyload){
        $lazyload.init(app);
        app.register = $lazyload.register;
        $rootScope.$log = $log;
        $rootScope.hideMask = true;
        $log.debug("Modules are now loaded completely!");
    });
});