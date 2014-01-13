/**
 * Created by 世宁 on 14-1-3.
 */
"use strict";
define(["layout","angular",'controllers/centerCtrl',"routes/appRoutes","routes/northRoutes","less!style/index.less"],function(){

    $(function(){

        angular.bootstrap(document,['app']);
    });
});