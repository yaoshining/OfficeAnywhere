/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/App'] , function (app) {
    app.factory('DropdownMenus' , ['$resource' , function ($resource) {
        return $resource('dropdownMenus/:pid' , {pid: '@pid'});
    }]);
});