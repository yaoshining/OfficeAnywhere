/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App','directives/shortcuts'],function(app){
    app.directive('shortcut',function($rootScope){
        return {
            restrict: "A",
            scope: {
              shortcut:"=",
              image: "@src",
              page:"="
            },
            link: function(scope,element){
                if(scope.image){
                    element.css({
                        "background-image": "url('"+scope.image+"')",
                        "background-size": "cover"
                    });
                }
                element.on("mousedown",function(e){
                    if(e.which!=1){
                        return;
                    }
                    var sort = false;
                    var delay = setTimeout(function(){
                        sort =true;
                    },2000);
                    var isDrag = false;
                    $(this).one("mousemove",function(e){
                        clearTimeout(delay);
                        if(sort){
                            e.stopPropagation();
                        }
                        isDrag = true;
                    });
                    $(this).one("mouseup",function(){
                        clearTimeout(delay);
                        if(!isDrag){
                            var shortcut = scope.shortcut;
                            if(shortcut.url){
                                $rootScope.$broadcast("tab.open",shortcut,true);
                            }
                        }
                    });
                });
            }
        };
    });
});