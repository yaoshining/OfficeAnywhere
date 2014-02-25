/**
 * Created by 世宁 on 14-2-19.
 */
define(["modules/App"],function(app){
    app.directive("businessCard",function(){
        return {
            restrict: "A",
            link: function(scope,element){
                scope.$watch("card",function(newValue){
                    element.css("top",newValue.top+"px");
                });
                scope.$on("businessCard.show",function(ev,position,userId){
                    if(scope.card.id==userId){
                        scope.card.top = position.top;
                        scope.card.show = true;
                    }
                });
                scope.$on("businessCard.hide",function(ev,userId){
                    if(scope.card.id==userId){
                        scope.card.show = false;
                    }
                });
            }
        }
    });
});