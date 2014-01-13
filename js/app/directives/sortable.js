/**
 * Created by 世宁 on 14-1-12.
 */
define(['modules/App','jquery-ui'],function(app){
    app.directive('sortable',function(){
        return {
            restrict: "A",
            link: function(scope,element){
                element.sortable({
                    helper: "clone",
                    opacity: 0.5,
                    delay: 100,
                    revert: true,
                    tolerance: "pointer",
                    stop: function(event,ui){
                        var data = $(this).sortable("serialize");
                        console.log(data);
                    }
                });
                element.disableSelection();
            }
        };
    });
});