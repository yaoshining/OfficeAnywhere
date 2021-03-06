/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App','controllers/appCtrl','directives/togglepanel','directives/messagebox','directives/slogan'],function(app){
    app.directive('layout',function($timeout,$rootScope,$log){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/Layout.html",
            link: function(scope,element){
            },
            controller: "appCtrl"
            ,compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                        $rootScope.loadingPhase = "正在初始化页面布局...";
                    },
                    post: function postLink(scope, element, iAttrs, controller) {
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
                                size: 149
                            },
                            south: {
                                size: 20,
                                padding: 0
                            },
                            center: {
                                onresize: function(a,element,c){
                                    element.height(c.innerHeight);
                                    $rootScope.$broadcast("layout.center.resize", c.innerHeight, c.innerWidth);
                                    $log.debug("Layout center is resized to width "+c.innerWidth+"px and height "+c.innerHeight+"px");
                                }
                            }
                        };
                        element.css("height","100%");
                        var appLayout = element.layout(layoutSettings);
                        scope.$on("layout.resize",function(e,direction,value){
                            appLayout.sizePane(direction,value);
                        });
//                        $rootScope.hideMask = true;
                    }
                }
            }
        };
    });
});