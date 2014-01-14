/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App','directives/sortable'],function(app){
    app.directive('layout',function($timeout){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/Layout.html",
            link: function(scope,element){
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
                $timeout(function(){
                    element.layout(layoutSettings);
                },500);
            }
        };
    });
});