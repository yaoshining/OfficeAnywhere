/**
 * Created by 世宁 on 14-2-20.
 */
define(["modules/App"],function(app){
    app.directive("messageReminder",function(){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/MessageReminder.html",
            replace: true,
            link: function(scope,element){
                scope.from = {
                  id: 2,
                  name: "王雪栋"
                };
                scope.$on("messageReminder.show",function(){
                    element.slideDown(1000,function(){
//                        $timeout(function(){
//                            element.slideUp(1000,function(){
//                                $timeout(function(){
//                                    scope.$broadcast("messageReminder.show");
//                                },4000);
//                            });
//                        },4000);
                    });
                });
                element.click(function(){
                    scope.$emit("chatbox.show",scope.from);
                });
            }
        }
    });
});