/**
 * Created by 世宁 on 14-1-12.
 */
define(['modules/App','jquery-ui'],function(app){
    app.directive('sortable',function(){
        return {
            restrict: "A",
            scope: {
              sortableArray: "=array"
            },
            link: function(scope,element){
                var array = scope.sortableArray;
                element.sortable({
                    helper: "clone",
                    opacity: 0.5,
                    delay: 100,
                    revert: true,
//                    placeholder: "sortable-placeholder",
                    tolerance: "pointer",
                    start: function(event,ui){
                        ui.item.data('start', ui.item.index());
                    },
                    update: function(event,ui){
                        var start = ui.item.data('start'),
                            end = ui.item.index();
                        console.log(end);
//                        console.log(ui);
//                        console.log(array);
                        array.splice(end, 0,
                            array.splice(start, 1)[0]);
//                        console.log(ui);
//                        scope.$apply();
                    }
                });
                element.disableSelection();
            },
            controller: function($scope,$element){

            }
        };
    });
});