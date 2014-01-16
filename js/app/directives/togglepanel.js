/**
 * Created by 世宁 on 14-1-15.
 */
define(['modules/App','factories/TogglePanel'],function(app){
    app.directive('togglepanel',function(TogglePanel,$rootScope){
        return {
            restrict: "A",
            link: function(scope,element){
                $(function(){
                    var togglePanel = TogglePanel.query(function(){
                        scope.togglePanel = togglePanel[0];
                        $rootScope.loadingPhase = "正在初始化右侧面板...";
                        element.find(".toggleButton").css("right","-240px");
                        element.find(".toggleButton").toggle(function(){
                            var button = this;
                            var frame = element.find("#contentFrame");
                            var osrc = frame.attr("src");
                            if(osrc!=scope.togglePanel.url){
                                frame.hide().attr("src",scope.togglePanel.url).load(function(){
                                    frame.show();
                                    element.animate({
                                        right: "0px"
                                    },1000,function(){
                                        $(button).find(".button-name").text("关闭");
                                    });
                                });
                            }else{
                                frame.show();
                                element.animate({
                                    right: "0px"
                                },1000,function(){
                                    $(button).find(".button-name").text("关闭");
                                });
                            }
                        },function(){
                            var button = this;
                            element.animate({
                                right: "-240px"
                            },1000,function(){
                                $(button).find(".button-name").text("打开");
                                element.find("#contentFrame").hide();
                            });
                        });
                    });
                });
            },
            controller: function($scope){

            }
        };
    });
});