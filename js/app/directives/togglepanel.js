/**
 * Created by 世宁 on 14-1-15.
 */
define(['modules/App','factories/TogglePanel'],function(app){
    app.directive('togglepanel',function(TogglePanel){
        return {
            restrict: "A",
            link: function(scope,element){
                element.find(".toggleButton").toggle(function(){
                    var button = this;
                    element.animate({
                        right: "0px"
                    },1000,function(){
                        $(button).find(".button-name").text("关闭");
                    });
                },function(){
                    var button = this;
                    element.animate({
                        right: "-240px"
                    },1000,function(){
                        $(button).find(".button-name").text("打开");
                    });
                });
            },
            controller: function($scope){
                var togglePanel = TogglePanel.query(function(){
                    $scope.togglePanel = togglePanel[0];
                });
            }
        };
    });
});