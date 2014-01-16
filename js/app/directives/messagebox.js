/**
 * Created by 世宁 on 14-1-15.
 */
define(['modules/App'],function(app){
    app.directive('messagebox',function(){
        return {
            restrict: "A",
            template: undefined,
            replace: false,
            transclude: false,
            scope:false,
            link: function(scope,element,attrs,controller,transcludeFn){
                element.text("消息提示");
            },
            controller: function($scope,$element){
                $scope.$on("messagebox.show",function(event,template,apply){
                    $element.animate({
                        bottom: "0%"
                    },1000);
                });
                $scope.$on("messagebox.hide",function(event,template,apply){
                    $element.animate({
                        bottom: "-60%"
                    },1000);
                });
            }
        };
    });
});