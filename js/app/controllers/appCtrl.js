/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','directives/layout','directives/shader','factories/UserInfo'] , function (angular,app) {
    app.controller('appCtrl' ,'UserInfo', function ($scope,$rootScope,UserInfo) {
        console.log(UserInfo);
        var user = UserInfo.query(function(){
            alert(1);
            console.log(user);
        });
    })
});
