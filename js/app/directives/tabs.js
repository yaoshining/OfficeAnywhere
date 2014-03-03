/**
 * Created by 世宁 on 14-2-18.
 */
define(["modules/App"],function(app){
    app.directive("tabs",function(){
        return {
            restrict: "A",
            scope: {
              average: "="
            },
            compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                        scope.ajaxPanels = new Array();
                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        requirejs(["jquery-ui"],function(){
                            element.tabs();
                            if(scope.average){
                                var tabs = element.find("li[role='tab']");
                                tabs.width(element.width()/tabs.length);
                            }
                        });
                    }
                }
            }
        }
    });
});