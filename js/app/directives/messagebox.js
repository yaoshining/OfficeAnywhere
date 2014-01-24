/**
 * Created by 世宁 on 14-1-15.
 */
define(['modules/App'],function(app){
    app.directive('messagebox',function($log){
        return {
            restrict: "A",
            template: undefined,
            replace: false,
            transclude: false,
            scope:false,
            link: function(scope,element,attrs,controller,transcludeFn){
                element.html($("<div>").addClass("building"));
            },
            controller: function($scope,$element){
                $scope.$on("messagebox.show",function(event,template,apply){
                    $element.show();
                    $log.debug("Message box is begin to show!");
                    $element.animate({
                        bottom: "0%"
                    },1000,function(){
                        $log.debug("Message box is been showed completely!");
                    });
                });
                $scope.$on("messagebox.hide",function(event,template,apply){
                    $log.debug("Message box is begin to close!");
                    $element.animate({
                        bottom: "-60%"
                    },1000,function(){
                        $(this).hide();
                        $log.debug("Message box is been closed completely!");
                    });
                });
            }
        };
    });
});