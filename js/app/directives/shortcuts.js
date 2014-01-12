/**
 * Created by 世宁 on 14-1-8.
 */
define(['modules/App','directives/sortable'],function(app){
    app.directive('shortcuts',function($timeout){
        return {
            restrict: "A",
            link: function(scope,element){
                $timeout(function(){
                    element.find("li").on("mousedown",function(e){
                        var sort = false;
                        var delay = setTimeout(function(){
                            sort =true;
                            console.log("ok");
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
                                var shortcut = scope.items[scope.page-1].shortcuts[$(this).index()];
                                if(shortcut.url){
                                    scope.openTab(shortcut);
                                }
                            }
                        });
                    });
                },500);
            }
        };
    });
});