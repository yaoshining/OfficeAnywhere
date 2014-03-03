/**
 * Created by 世宁 on 14-1-15.
 */
define(['modules/App','factories/TogglePanel',"directives/messenger"],function(app){
    app.directive('togglepanel',function(TogglePanel,$rootScope,$log){
        return {
            restrict: "A",
            link: function(scope,element){
                scope.href = "js/app/templates/Messenger.html";
                $(function(){
                    var togglePanel = TogglePanel.query(function(){
                        scope.togglePanel = togglePanel[0];
                        $rootScope.loadingPhrase = "正在初始化右侧面板...";
                        element.find(".toggleButton").css("right","-240px");
                        element.find(".toggleButton").toggle(function(){
                            var button = this;
                            if(scope.togglePanel.iframe){
                                var frame = element.find("#contentFrame").length>0?element.find("#contentFrame"):$("<iframe>",{
                                   id: "contentFrame",
                                   width: "100%",
                                   height: "100%",
                                   border: 0,
                                   frameborder: "no",
                                   scrolling: "no"
                                }).appendTo(element);
                                console.log(element.find("#contentFrame"));
                                var osrc = frame.attr("src");
                                if(osrc!=scope.togglePanel.url){
                                    frame.hide().attr("src",scope.togglePanel.url).load(function(){
                                        frame.show();
                                    });
                                }else{
                                    frame.show();
                                }
                            }else{
                                scope.href = scope.togglePanel.url;
                                scope.$apply();
                            }
                            $log.debug("The right toggled panel is now opening! ");
                            element.animate({
                                right: "0px"
                            },500,function(){
                                $(button).find(".button-name").text(">");
                                $log.debug("The right toggled panel has been opened completely! ");
                            });
                        },function(){
                            var button = this;
                            $log.debug("The right toggled panel is now closing! ");
                            element.animate({
                                right: "-240px"
                            },500,function(){
                                $(button).find(".button-name").text("<");
                                element.find("#contentFrame").hide();
                                $log.debug("The right toggled panel has been closed completely! ");
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