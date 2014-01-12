/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App','unslider','factories/Item'],function(app){
    app.directive('carousel',function(Item,$timeout){
        return {
            restrict: "A",
            link: function(scope,element){
                element.css("visibility","hidden");
                $timeout(function(){
                    element.find(".desktop").height($("#center").height());
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
            },
            controller: 'listCtrl'
        };
    });
});