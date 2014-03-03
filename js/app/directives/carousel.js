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
                        $rootScope.loadingPhrase = "正在初始化桌面...";
                    },
                    post: function postLink(scope, element, iAttrs, controller) {
                        element.css("visibility","hidden");
                        $timeout(function(){
                            scope.$watch(function(){
                                return element.find(".desktop").length;
                            },function(){
                                element.find(".desktop").height($("#center").height()).droppable({
                                    accept: ".menu-node",
                                    drop: function(event, ui){
                                        var menu = ui.helper.data("menu");
                                        scope.$apply(function(){
                                            scope.items[scope.page-1].shortcuts.push({
                                                id: menu.id,
                                                name: menu.name,
                                                url: menu.url,
                                                iframe: menu.iframe,
                                                img: menu.img
                                            });
                                        });
                                    }
                                });
                                element.find(".shortcutPane").css("margin-top",0-element.find(".shortcutPane").height()/2+"px");
                            });
                            element.find(".desktop").height($("#center").height());
                            element.find(".shortcutPane").css("margin-top",0-element.find(".shortcutPane").height()/2+"px");
                            scope.$on("layout.center.resize",function(e,h,w){
                                element.height(h);
                                element.find(".desktop").height(h);
                                element.width(w);
                                element.children("ul").children("li").width(w);
                            });
                            var slidey = element.unslider({
                                dots: false,
                                autoplay: false,
                                keys: false
                            }).css("visibility","visible");
                            var data = slidey.data('unslider');
                            scope.$watch(function(){
                                return element.children().first().find("> li").length;
                            },function(newValue,oldValue,scope){
                                data.refresh();
                            });
                            scope.$watch('page',function(newValue){
                                console.log(newValue);
                                data.stop().to(newValue-1);
                            });
                            $("body").keydown(function(e) {
                                var key = e.which;

                                if (key == 37)
                                    scope.page=scope.page-1<1?element.children("ul").children("li").length:scope.page-1; // Left
                                else if (key == 39)
                                    scope.page=scope.page+1>element.children("ul").children("li").length?1:scope.page+1; // Right
                                else if (key == 27)
                                    data.stop(); // Esc
                                scope.$apply();
                            });
                            element.on("mousedown",function(event){
                                if($(event.target).is(".shortcut")){
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
                                        if(predictPage>scope.items.length-1){
                                            predictPage=scope.items.length-1
                                        }
                                        if(scope.page == predictPage+1){
                                            data.stop().to(predictPage);
                                        }else{
                                            scope.page = predictPage+1;
                                        }
                                        scope.$apply();
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