/**
 * Created by 世宁 on 14-1-12.
 */
define(['modules/App','jquery-ui'],function(app){
    app.directive('sortable',function(){
        return {
            restrict: "A",
            link: function(scope,element){
                element.sortable();
                element.disableSelection();
            }
        };
    });
});