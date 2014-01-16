/**
 * Created by 世宁 on 14-1-13.
 */
define(['modules/App','directives/togglepanel','directives/messagebox'],function(app){
    app.directive('layout',function($timeout,$rootScope){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/Layout.html",
            link: function(scope,element){
            },
            controller: function($scope){
                var show = false;
                $scope.toggleMessageBox = function(){
                    if(!show){
                        $rootScope.$broadcast("messagebox.show");
                        show = true;
                    }else{
                        $rootScope.$broadcast("messagebox.hide");
                        show = false;
                    }

                }
            }
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
                            }
                        };
                        element.layout(layoutSettings);
                        $rootScope.hideMask = true;
                    }
                }
            }
        };
    });
});