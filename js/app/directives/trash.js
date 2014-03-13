/**
 * Created by 世宁 on 14-3-5.
 */
define(["modules/App","services/desktopService"],function(app){
    app.directive("trash",function(desktopService){
        return {
            restrict: "A",
            link: function(scope,element){
                element.droppable({
                    hoverClass: "drop-hover",
                    drop: function(event,ui){
                        var index = $(ui.draggable).index();
                        desktopService.removeShortcut(index,scope.page);
                    }
                });
            },
            controller: function($scope,$element){
                $scope.$on("trash.show",function(){
                    $element.stop().fadeIn();
                });
                $scope.$on("trash.hide",function(){
                    $element.stop().fadeOut();
                });
            }
        }
    });
});