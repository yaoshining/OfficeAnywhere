/**
 * Created by 世宁 on 14-1-10.
 */
define(['modules/App','zTree.core','css!style/css/zTreeStyle','factories/DropdownMenus'],function(app){
    app.directive('tree',function(DropdownMenus){
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
                        },
                        key: {
                            url: "xUrl"
                        }
                    },
                    callback: {
                        beforeExpand: beforeExpand,
                        onExpand: onExpand,
                        onClick: onClick
                    }
                };
                var menus = DropdownMenus.query(function(){
                    var zNodes = menus;
                    var treeObj = element.find("ul:first");
                    $.fn.zTree.init(treeObj, setting, zNodes);
                    zTree_Menu = $.fn.zTree.getZTreeObj("treeDemo");
                    curMenu = zTree_Menu.getNodes()[0].children[0];
                    zTree_Menu.selectNode(curMenu);
                });


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
                    if(!treeNode.isParent){
                        if(treeNode.url){
                            $("#north").scope().newTab({name:treeNode.name,url: treeNode.url},true);
                            $(document).trigger('click.dropdown');
                        }
                    }
                }


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