/**
 * Created by 世宁 on 14-1-15.
 */
define(['modules/App'],function(app){
    app.directive('shader',function($rootScope){
        return {
            restrict: "A",
            template: undefined,
            replace: false,
            transclude: false,
            scope:false,
            link: function(scope,element,attrs,controller,transcludeFn){
                var loading = $("<div>",{
                    id: "loading"
                }).css({
                        "position": "absolute",
                        top: "50%",
                        left: "50%",
                        width: "64px",
                        height: "64px",
                        "margin-left": "-32px",
                        "margin-top": "-32px"
                    })
//                    .text(scope.loadingPhase)
                    .addClass("loading");
                var mask = $("<div>",{
                    id: "loading-mask"
                }).css({
                    "background-color": "#FFFFFF",
                    "z-index": 999,
                    "position": "absolute",
                    "top": 0,
                    "width": "100%",
                    "height": "100%"
                }).append(loading).appendTo(element);
                scope.$watch("loadingPhase",function(newValue){
//                    loading.text(newValue);
                    console.log(newValue);
                });
                scope.$watch("hideMask",function(newValue){
                    if(newValue){
                        mask.fadeOut();
                    }
                });
            },
            controller: function($scope){
                $rootScope.loadingPhase = "正在载入基本样式和图片...";
            }
//            ,compile: function compile(tElement,tAttrs,transclude){
//                return {
//                    pre: function preLink(scope, iElement, iAttrs, controller) {
//                    },
//                    post: function postLink(scope, iElement, iAttrs, controller) {
//                    }
//                }
//            }
        };
    });
});