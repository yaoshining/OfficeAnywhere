/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/Center' , 'controllers/listCtrl'] , function (center) {
    return center.config(['$routeProvider' , function ($routeProvider) {
        $routeProvider.when('/' , {controller: 'listCtrl' , templateUrl: 'js/app/templates/Center.html'});
    }]);

});