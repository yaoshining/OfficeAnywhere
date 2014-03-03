/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App'],function(app){
    app.directive('shortcuts',function($timeout,$log){
        return {
            restrict: "A",
            link: function(scope,element){
                element.on("mousemove",function(event){
                    var targetGroup = event ? $(event.target).parents().addBack() : null;
                    if(targetGroup && targetGroup.is("li.repeated-item")){
                        $(this).find("ul[ui-sortable]").sortable("disable");
                    }
                    if($(event.target).is(".shortcut")) {
                        $(this).find("ul[ui-sortable]").sortable("enable");
                    }
                });
            },
            controller: function($scope,$element){
                var items = $scope.desktop.shortcuts;
                $scope.shortcutsSortableOptions = {
                    stop: function(e, ui) {
                        var logEntry = items.map(function(i,k){
                            return JSON.stringify(i);
                        }).join(', ');
                        $log.debug(logEntry);
                    }
                };
            }
        };
    });
});