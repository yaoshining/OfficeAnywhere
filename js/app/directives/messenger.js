/**
 * Created by 世宁 on 14-2-14.
 */
define(['modules/App','directives/tabs','directives/businessCard','services/userService','directives/messageReminder','directives/chatBox','factories/Organization'],function(app){
    app.directive('messenger',function($q,$rootScope,$compile,userService,$interval,Organizations){
       return {
           restrict: "A",
           link: function(scope,element){
               scope.businessCard = {templateUrl: "js/app/templates/BusinessCard.html"};
               scope.chatBox = {templateUrl: "js/app/templates/ChatBox.html"};
//               scope.chatBoxes = [{
//                   id: 1,
//                   to: {
//                     id: 1,
//                     name: "魅影貂蝉"
//                   },
//                   show: true
//               }];
               scope.chatBoxes = [];
               scope.$on("chatbox.close",function(event,box){
                   scope.chatBoxes.splice(_.indexOf(scope.chatBoxes, box),1);
               });
               scope.$on("chatbox.show",function(event,to){
                    var newBox = {
                        id: to.id,
                        to: to,
                        show: true
                    };
                   scope.$apply(function(){
                       scope.chatBoxes.push(newBox);
                   });
               });
               requirejs(['ztree.core','ztree.exedit','css!style/css/zTreeStyle','less!style/messenger','less!style/businessCard','underscore'],function(){
                   var setting = {
                       view: {
                           dblClickExpand: dblClickExpand,
                           showLine: false,
                           showIcon: showIconForTree,
                           addDiyDom: addDiyDom,
                           addHoverDom: addHoverDom,
                           removeHoverDom: removeHoverDom
                       },
                       data: {
                           simpleData: {
                               enable: true
                           }
                       },
                       callback: {
                           beforeClick: beforeClick,
                           onDblClick: onDblClick
                       }
                   };
//                   var zNodes = [
//                       { id:1, pId:0, name:"中国兵器工业信息中心", open:true,iconSkin: "house"},
//                       { id:11, pId:1, name:"软件部领导", open:false},
//                       { id:111, pId:11, name:"陈荣",icon:"images/messenger_online.png",userId:1},
//                       { id:12, pId:1, name:"规划及管理研究院", open:false},
//                       { id:121, pId:12, name:"王雪栋",icon:"images/messenger_online.png",userId:2},
//                       { id:122, pId:12, name:"夏勇",icon:"images/messenger_online.png",userId:3},
//                       { id:123, pId:12, name:"李鹏",icon:"images/messenger_online.png"},
//                       { id:13, pId:1, name:"技术及产品研究院", open:false},
//                       { id:131, pId:13, name:"李鑫",icon:"images/messenger_online.png"},
//                       { id:132, pId:13, name:"吴道全",icon:"images/messenger_online.png"},
//                       { id:133, pId:13, name:"林河水",icon:"images/messenger_online.png"},
//                       { id:15, pId:1, name:"品牌战略部",open:false},
//                       { id:151, pId:15, name:"盛亚辉",icon:"images/messenger_online.png"},
//                       { id:152, pId:15, name:"陈晓影",icon:"images/messenger_online.png"},
//                       { id:153, pId:15, name:"刘永红",icon:"images/messenger_online.png"},
//                       { id:16, pId:1, name:"人才战略部",open:false},
//                       { id:161, pId:16, name:"张然",icon:"images/messenger_online.png"},
//                       { id:162, pId:16, name:"孙明雄",icon:"images/messenger_online.png"},
//                       { id:17, pId:1, name:"运营管理部",open:false},
//                       { id:171, pId:17, name:"伊曼",icon:"images/messenger_online.png"}
////                       { id:18, pId:1, name:"市场战略部",open:false},
////                       { id:19, pId:1, name:"销售部",open:false},
////                       { id:110, pId:1, name:"电子政务部",open:false}
//                   ];
                   function dblClickExpand(treeId, treeNode) {
                       return treeNode.level > 0;
                   }
                   function showIconForTree(treeId, treeNode){
                       return treeNode.level == 0 || !treeNode.isParent;
                   }
                   function addDiyDom(treeId, treeNode){
                       if(treeNode.isParent && treeNode.getParentNode()){
                           $("#"+treeNode.tId+"_a").append($("<span>").text("["+treeNode.children.length+"/"+treeNode.children.length+"]").css({
                               "margin-left": "5px"
                           })).css("margin-left","5px");
                       }
                   }
                   function addHoverDom(treeId, treeNode){
                        if(!treeNode.isParent){
                            var userId = treeNode.userId;
                            if(_.findWhere(scope.cards,{id: userId})){
                                scope.$apply(function(){
                                    scope.$broadcast("businessCard.show",$("#"+treeNode.tId+"_a").position(),userId);
                                });
                            }else{
                                var user = userService.Resource.get({id:userId},function(){
                                    scope.cards.push({
                                        id: user.id,
                                        userInfo: {
                                            name: user.name,
                                            role: user.role
                                        },
                                        show: true,
                                        top: $("#"+treeNode.tId+"_a").position().top
                                    });
                                    treeNode.user = user;
                                });
                            }
                        }
                   }
                   function removeHoverDom(treeId, treeNode){
                        if(!treeNode.isParent){
                            scope.$apply(function(){
                                scope.$broadcast("businessCard.hide",treeNode.userId);
                            });
                        }
                   }
                   function beforeClick(event, treeId, treeNode){
                        if(!treeNode.isParent){
                            return false;
                        }
                   }
                   function onDblClick(event, treeId, treeNode){
                        if(!treeNode.isParent){
                            scope.$broadcast("chatbox.show",treeNode.user);
                        }
                   }
                   var zNodes = Organizations.query(function(){
                       var t = element.find("#orgTree");
                       t = $.fn.zTree.init(t, setting, zNodes);
                   });
                   scope.$apply(function(){
                       scope.cards = [];
                   });
                   scope.$broadcast("messageReminder.show");
               });
           }
       }
    });
});