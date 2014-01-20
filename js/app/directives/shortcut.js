/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App','directives/shortcuts'],function(app){
    app.directive('shortcut',function(){
        return {
            restrict: "A",
            scope: {
              image: "@src"
            },
            link: function(scope,element){
                if(scope.image){
                    element.css({
                        "background-image": "url('"+scope.image+"')",
                        "background-size": "cover"
                    });
                }
            }
        };
    });
});