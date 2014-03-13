/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App',"factories/Item"],function(app){
    app.directive('shortcuts',function($timeout,$log,Item){
        return {
            restrict: "A",
            link: function(scope,element){
                element.disableSelection();
                element.on("mousemove",function(event){
                    var targetGroup = event ? $(event.target).parents().addBack() : null;
                    if(targetGroup && targetGroup.is("li.repeated-item")){
                        $(this).find("ul[ui-sortable]").sortable("disable");
//                        console.log("disable");
                    }
                    if($(event.target).is(".shortcut")) {
                        $(this).find("ul[ui-sortable]").sortable("enable");
//                        console.log("enable");
                    }
                });
            },
            controller: function($scope,$element){
                var items = $scope.desktop.shortcuts;
                $scope.shortcutsSortableOptions = {
                    start: function(e,ui){
                        $scope.$apply(function(){
                            $scope.$emit("trash.show");
                        });
                    },
                    stop: function(e, ui) {
                        var logEntry = items.map(function(i,k){
                            return JSON.stringify(i);
                        }).join(', ');
                        Item.update(items);
                        $scope.$apply(function(){
                            $scope.$emit("trash.hide");
                        });
                    },
                    opacity: 0.5
                };
            }
        };
    });
});