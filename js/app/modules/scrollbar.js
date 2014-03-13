/**
 * Created by 世宁 on 14-3-9.
 */
define(['angular','jquery.scrollbar'] , function (angular) {
    return angular.module('ui.scrollbar',[])
        .value("scrollBarConfig",{})
        .directive("scrollBar",function(scrollBarConfig){
            "use restrict"
            return {
                restrict: "A",
                scope: {
                  scrollBar: "="
                },
                link: function(scope,element,attrs){
                    var opts = scope.scrollBar;
                    element.mCustomScrollbar(opts);
                }
            }
        });
});