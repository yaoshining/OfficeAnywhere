/**
 * Created by 世宁 on 14-1-12.
 */
define(['modules/App'],function(app){
    app.directive('sortable',function(){
        return {
            restrict: "A",
            scope: {
              sortableArray: "=array"
            },
            link: function(scope,element){
                var array = scope.sortableArray;
                requirejs(["jquery-ui"],function(){
                    element.on("mousedown",function(event){
                        if(!(_.contains($(event.originalEvent.target).attr("class").split(" "),"shortcut"))){
                            $(this).sortable("disable");
                        }else{
                            $(this).sortable("enable");
                        }
                    });
                    element.sortable({
                        helper: "clone",
                        opacity: 0.5,
                        delay: 50,
                        revert: true,
//                    placeholder: "sortable-placeholder",
                        tolerance: "pointer",
                        start: function(event,ui){
                            ui.item.data('start', ui.item.index());
//                        if(!(_.contains($(event.originalEvent.target).attr("class").split(" "),"shortcut"))){
//                            $(this).sortable("disable");
//                        }
                        },
                        deactivate: function(event,ui){
                            var start = ui.item.data('start'),
                                end = ui.item.index();
//                        console.log(end);
//                        console.log(ui);
//                        console.log(array);
                            array.splice(end, 0,
                                array.splice(start, 1)[0]);
//                        scope.$apply();
                        }
                    });
                    element.disableSelection();
                    element.sortable("disable");
                });
            },
            controller: function($scope,$element){

            }
        };
    });
});