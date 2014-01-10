/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App'],function(app){
    app.directive('shortcuts',function($timeout){
        return {
            restrict: "A",
            link: function(scope,element){
                $timeout(function(){
                    element.find("li").on("click",function(e){
                        e.preventDefault();
                    });
                },500);
            }
        };
    });
});