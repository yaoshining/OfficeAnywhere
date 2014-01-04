/**
 * Created by 世宁 on 14-1-3.
 */
define(['modules/Center' , 'factories/Item'] , function (center) {
    center.controller('listCtrl' , ['$scope' , 'Item' ,'$rootElement', function ($scope , Item,$rootElement) {
        var items = Item.query(function(){
            console.log($rootElement);
        });
        $scope.items = items;
    }]);
});