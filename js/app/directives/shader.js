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
//                var loading = $("<div>",{
//                    id: "loading"
//                }).css({
//                        "position": "absolute",
//                        top: "50%",
//                        left: "50%",
//                        width: "64px",
//                        height: "64px",
//                        "margin-left": "-32px",
//                        "margin-top": "-32px"
//                    })
////                    .text(scope.loadingPhase)
//                    .addClass("loading");
//                var mask = $("<div>",{
//                    id: "loading-mask"
//                }).css({
//                    "background-color": "#FFFFFF",
//                    "z-index": 999,
//                    "position": "absolute",
//                    "top": 0,
//                    "width": "100%",
//                    "height": "100%"
//                }).append(loading).appendTo(element);
                scope.$watch("loadingPhrase",function(newValue){
//                    loading.text(newValue);
                    console.log(newValue);
                });
                scope.$watch("hideMask",function(newValue){
                    if(newValue){
//                        element.animate({
//                            opacity: 0
//                        },250,function(){
//                            element.remove();
//                        });
                        element.fadeOut(1000,function(){
                            element.remove();
                        });
                    }
                });
            },
            controller: function($scope){
                $rootScope.loadingPhrase = "开始初始化...";
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