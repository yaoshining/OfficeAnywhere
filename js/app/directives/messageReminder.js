/**
 * Created by 世宁 on 14-2-20.
 */
define(["modules/App","services/messengerService"],function(app){
    app.directive("messageReminder",function(messengerService,$interval){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/MessageReminder.html",
            replace: true,
            link: function(scope,element){
                var count = 0;
                $interval(function(){
                    messengerService.reminder.getRemindMessages(count++%2+1,function(remindQueue){
                        scope.remindItem = remindQueue[0];
                    });
                },10000);
//                scope.$watch(function(){
//                    return messengerService.reminder.remindQueue;
//                },function(newValue){
//                    console.log(newValue);
//                    scope.remindItem = newValue.shift();
//                },true);
                scope.remindItem = messengerService.latest;
                scope.reminder = messengerService.reminder;
                scope.showQueue = false;
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
                scope.openChatBox = function(item){
                    scope.$emit("chatbox.show",item);
                }
            }
        }
    });
});