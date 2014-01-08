/**
 * Created by 世宁 on 14-1-3.
 */
"use strict";
define(["layout","angular","routes/centerRoutes","routes/northRoutes","less!style/index.less"],function(){
    var layoutSettings = {
        name: "layout",
        defaults: {
            spacing_open: 0,
            togglerLength_open: 0,
            paneClass: "pane",
            togglerLength_closed: -1,
            resizable: false,
            slidable: false,
            fxName: "none"
        },
        north: {
            size: 140
        },
        south: {
            size: 20,
            padding: 0
        }
    };
    $(function(){
        $('body').layout(layoutSettings);
        angular.bootstrap(document,['app']);
    });
});