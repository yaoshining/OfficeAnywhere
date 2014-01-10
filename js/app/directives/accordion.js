/**
 * Created by 世宁 on 14-1-10.
 */
define(['modules/App','zTree.core','css!style/css/zTreeStyle'],function(app){
    app.directive('tree',function($timeout){
        return {
            restrict: "A",
            templateUrl: "js/app/templates/DropdownMenus.html",
            link: function(scope,element){
                var curMenu = null, zTree_Menu = null;
                var setting = {
                    view: {
                        showLine: false,
                        showIcon: true,
                        selectedMulti: false,
                        dblClickExpand: false,
                        addDiyDom: addDiyDom
                    },
                    data: {
                        simpleData: {
                            enable: true
                        }
                    },
                    callback: {
//                        beforeClick: beforeClick,
                        beforeExpand: beforeExpand,
                        onExpand: onExpand,
                        onClick: onClick
                    }
                };

                var zNodes =[
                    { id:1, pId:0, name:"主菜单1", open:false},
                    { id:11, pId:1, name:"菜单11"},
                    { id:111, pId:11, name:"菜单111"},
                    { id:112, pId:111, name:"菜单112"},
                    { id:113, pId:112, name:"菜单113"},
                    { id:114, pId:113, name:"菜单114"},
                    { id:12, pId:1, name:"菜单12"},
                    { id:13, pId:1, name:"菜单13"},
                    { id:14, pId:1, name:"菜单14"},
                    { id:15, pId:1, name:"菜单15"},
                    { id:3, pId:0, name:"主菜单2"},
                    { id:31, pId:3, name:"菜单31"},
                    { id:32, pId:3, name:"菜单32"}
                ];

                function addDiyDom(treeId, treeNode) {
                    var spaceWidth = 5;
                    var switchObj = $("#" + treeNode.tId + "_switch"),
                        icoObj = $("#" + treeNode.tId + "_ico");
                    switchObj.remove();
                    icoObj.before(switchObj);

                    if (treeNode.level > 1) {
                        var spaceStr = "<span style='display: inline-block;width:" + (spaceWidth * treeNode.level)+ "px'></span>";
                        switchObj.before(spaceStr);
                    }
                }

                function beforeClick(treeId, treeNode) {
                    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                    zTree.expandNode(treeNode);
                    return true;
//                    if (treeNode.level == 0 ) {
//                        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
//                        zTree.expandNode(treeNode);
//                        return false;
//                    }
//                    return true;
                }
                var curExpandNode = null;
                function beforeExpand(treeId, treeNode) {
                    var pNode = curExpandNode ? curExpandNode.getParentNode():null;
                    var treeNodeP = treeNode.parentTId ? treeNode.getParentNode():null;
                    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                    for(var i=0, l=!treeNodeP ? 0:treeNodeP.children.length; i<l; i++ ) {
                        if (treeNode !== treeNodeP.children[i]) {
                            zTree.expandNode(treeNodeP.children[i], false);
                        }
                    }
                    while (pNode) {
                        if (pNode === treeNode) {
                            break;
                        }
                        pNode = pNode.getParentNode();
                    }
                    if (!pNode) {
                        singlePath(treeNode);
                    }

                }
                function singlePath(newNode) {
                    if (newNode === curExpandNode) return;
                    if (curExpandNode && curExpandNode.open==true) {
                        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                        if (newNode.parentTId === curExpandNode.parentTId) {
                            zTree.expandNode(curExpandNode, false);
                        } else {
                            var newParents = [];
                            while (newNode) {
                                newNode = newNode.getParentNode();
                                if (newNode === curExpandNode) {
                                    newParents = null;
                                    break;
                                } else if (newNode) {
                                    newParents.push(newNode);
                                }
                            }
                            if (newParents!=null) {
                                var oldNode = curExpandNode;
                                var oldParents = [];
                                while (oldNode) {
                                    oldNode = oldNode.getParentNode();
                                    if (oldNode) {
                                        oldParents.push(oldNode);
                                    }
                                }
                                if (newParents.length>0) {
                                    zTree.expandNode(oldParents[Math.abs(oldParents.length-newParents.length)-1], false);
                                } else {
                                    zTree.expandNode(oldParents[oldParents.length-1], false);
                                }
                            }
                        }
                    }
                    curExpandNode = newNode;
                }

                function onExpand(event, treeId, treeNode) {
                    curExpandNode = treeNode;
                }

                function onClick(e,treeId, treeNode) {
                    var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                    zTree.expandNode(treeNode, null, null, null, true);
                }
                var treeObj = element.find("ul:first");
                $.fn.zTree.init(treeObj, setting, zNodes);
                zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
                curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
                zTree_Menu.selectNode(curMenu);

//                treeObj.hover(function () {
//                    if (!treeObj.hasClass("showIcon")) {
//                        treeObj.addClass("showIcon");
//                    }
//                }, function() {
//                    treeObj.removeClass("showIcon");
//                });
//                scope.dropdownMenus = [{name:1},{name:2},{name:3},{name:4},{name:5}];
//                $timeout(function(){
//                    element.accordion({
//                        heightStyle: "content",
//                        header: "h3"
//                    });
//                },500);
            },
            controller: function($scope){

            }
        };
    });
});