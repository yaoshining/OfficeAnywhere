/**
 * Created by 世宁 on 14-2-24.
 */
define(["modules/App","underscore","emojiarea","css!style/css/jquery.emojiarea","emojis","services/messengerService"],function(app){
    app.directive("chatBox",function($http,messengerService){
        return {
            restrict: "A",
            link: function(scope,element){
                requirejs(["jquery-ui"],function(){
                    element.draggable({
                        containment: $("#center"),
                        opacity: 0.8
                    });
                    element.find("#chatEmotions").position({
                        of: element.find(".chat-box-emotion"),
                        my: "center bottom",
                        at: "center top-2"
                    }).hide().on("chatEmotions.hide",function(){
                        $(this).hide();
                    });
                    $(document).on("click.chatEmotions",function(event){
                        var targetGroup = event ? $(event.target).parents().addBack() : null;
                        if(targetGroup && (targetGroup.is("#chatEmotions")||targetGroup.is(".chat-box-emotion"))){
                            return;
                        }
                        $("#chatEmotions").hide();
                    });
                    element.find(".chat-box-emotion").click(function(){
                        if(element.find("#chatEmotions").css("display")!="none"){
                            element.find("#chatEmotions").hide();
                        }else{
                            element.find("#chatEmotions").show();
                        }
                    });
                    element.find(".chat-box-shake").click(function(){
                        var oleft = parseInt(element.css("left"));
                        var obottom = parseInt(element.css("bottom"));
                        var count = 0;
                        var amp = 2;
                        var shadeFrame = function(){
                            element.animate({
                                left: count%2==1?oleft:(count%4<2?oleft+amp:oleft-amp),
                                bottom: count%2==0?obottom:(count%4<2?obottom+amp:obottom-amp)
                            },32,function(){
                                count++;
                                if(count>15){
                                    element.animate({
                                        left: oleft,
                                        bottom: obottom
                                    },32);
                                    return;
                                }
                                shadeFrame();
                            });
                        }
                        shadeFrame();
                    });
                });
//                var $wysiwyg = element.find(".chat-box-input-area > textarea").emojiarea({
//                    wysiwyg: true,
//                    button: element.find(".chat-box-emotion")
//                });
//                $wysiwyg.on("change",function(){
//                    console.log(element.find(".chat-box-input-area > textarea").val());
//                });
//                $.getScript("//tinymce.cachefly.net/4.0/tinymce.min.js",function(){
//                    tinymce.init({
//                        selector: ".chat-box-input-area > textarea",
//                        toolbar: "mybutton",
//                        menubar: false,
//                        statusbar: false,
//                        resize: true,
//                        height: 30,
//                        setup: function(editor) {
//                            editor.addButton('mybutton', {
//                                text: 'My button',
//                                icon: false,
//                                onclick: function() {
//                                    editor.insertContent('Main button');
//                                }
//                            });
//                        }
//                    });
//                })
            },
            controller: function($scope,$element){
                $scope.scrollBarOptions = {
                    theme:"dark-thick",
                    mouseWheel:true,
                    mouseWheelPixels: 300,
                    autoHideScrollbar: true,
                    scrollButtons:{
                        enable:true
                    },
                    advanced:{
                        updateOnContentResize: true,
                        updateOnBrowserResize: true,
                        autoScrollOnFocus: false
                    }
                }
                $scope.close = function(box){
                    $scope.$emit("chatbox.close",box);
                }
                $scope.send = function(){
                    if($scope.message && $scope.message!=""){
                        messengerService.chatBox.send($scope.box, $scope.message);
//                        $http.post("data/messages/send",{receiverId: $scope.box.to.id,message: $scope.message}).success(function(){
//                            alert(1);
//                        }).error(function(){
//                                alert(2);
//                            });
//                        alert($scope.message);
                    }
                }
            }
        }
    });
});