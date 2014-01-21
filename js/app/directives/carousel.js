/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App','unslider','factories/Item','controllers/desktopCtrl'],function(app){
    app.directive('carousel',function(Item,$timeout,$rootScope){
        return {
            restrict: "A",
            link: function(scope,element){

            },
            controller: "desktopCtrl"
            ,compile: function compile(tElement,tAttrs,transclude){
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) {
                        $rootScope.loadingPhase = "正在初始化桌面...";
                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        element.css("visibility","hidden");
                        $timeout(function(){
                            element.find(".desktop").height($("#center").height());
                            scope.$on("layout.center.resize",function(e,h){
                                element.height(h);
                                element.find(".desktop").height(h);
                            });
                            element.find(".shortcutPane").css("margin-top",0-element.find(".shortcutPane").height()/2+"px");
                            var slidey = element.unslider({
                                dots: false,
                                autoplay: false,
                                keys: true
                            }).css("visibility","visible");
                            var data = slidey.data('unslider');
                            scope.$watch('page',function(newValue){
                                data.to(newValue-1);
                            });
                            element.on("mousedown",function(event){
                                if(_.contains($(event.target).attr("class").split(" "),"shortcut")||_.contains($(event.target).attr("class").split(" "),"shortcut-title")){
                                    return false;
                                }
                                var ox = event.pageX;
                                var oy = event.pageY;
                                var left = parseFloat($(this).find("ul").css("left"));
                                $("body").on("mousemove",function(e){
                                    var dx = e.pageX-ox;
                                    element.find("ul:first").css("left",(left+dx)/element.width()*100+"%");
                                }).one("mouseup",function(e){
                                        var predictPage = -Math.round(parseFloat(element.find("ul:first").css("left"))/element.width());
                                        if(predictPage<0){
                                            predictPage=0;
                                        }
                                        if(predictPage>4){
                                            predictPage=4
                                        }
                                        scope.page = predictPage+1;
                                        data.to(predictPage);
                                        $(this).off("mousemove");
                                    }).one("mouseleave",function(){
                                        $(this).trigger("mouseup");
                                    });
                            });
                        },500);
                    }
                }
            }
        };
    });
});