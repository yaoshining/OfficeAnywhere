/**
 * Created by 世宁 on 14-1-3.
 */
define(['angular','modules/App','factories/Item'] , function (angular,app) {
    app.controller('listCtrl' , function ($scope,Item,$rootElement,$rootScope) {
        var items = Item.query(function(){
//            console.log($rootElement);
        });
        $scope.page = 1;
        $scope.items = items;
        $scope.openTab = function(item){
            $("#north").scope().newTab(item);
        }
    })
//    .animation('.repeated-item',function(){
//            return {
//                enter : function(element, done) {
//                    element.css('opacity',0);
//                    jQuery(element).animate({
//                        opacity: 1
//                    },2000,done);
//
//                    return function(isCancelled) {
//                        if(isCancelled) {
//                            jQuery(element).stop();
//                        }
//                    }
//                },
//                leave : function(element, done) {
//                    element.css('opacity', 1);
//                    jQuery(element).animate({
//                        opacity: 0
//                    }, done);
//
//                    return function(isCancelled) {
//                        if(isCancelled) {
//                            jQuery(element).stop();
//                        }
//                    }
//                },
//                move : function(element, done) {
//                    element.css('opacity', 0);
//                    jQuery(element).animate({
//                        opacity: 1
//                    }, done);
//
//                    return function(isCancelled) {
//                        if(isCancelled) {
//                            jQuery(element).stop();
//                        }
//                    }
//                },
//
//                addClass : function(element, className, done) {},
//                removeClass : function(element, className, done) {}
//            }
//        });
});