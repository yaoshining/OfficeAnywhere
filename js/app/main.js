/**
 * Created by 世宁 on 14-1-3.
 */
"use strict";
define(["layout","angular",'controllers/centerCtrl',"routes/appRoutes","routes/northRoutes","less!style/index.less","jquery.contextMenu"],function(){
    var onBeforeUnLoad = function(e){
        var a = "确定要离开新T9（安全OA）吗？";
        e = e || window.event;
        e.returnValue = a;
        return a;
    }
    if(window.addEventListener){
        window.addEventListener ("beforeunload", onBeforeUnLoad, false);
    } else if(window.attachEvent){
        window.attachEvent ("onbeforeunload", onBeforeUnLoad);
    }
    $(function(){
        angular.bootstrap(document,['app']);
    });
});