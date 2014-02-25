/**
 * Created by 世宁 on 14-2-24.
 */
define(["modules/App","underscore","emojiarea","css!style/css/jquery.emojiarea","emojis"],function(app){
    app.directive("chatBox",function(){
        return {
            restrict: "A",
            link: function(scope,element){
                requirejs(["jquery-ui"],function(){
//                    element.draggable({
//                        containment: $("#center"),
//                        opacity: 0.5
//                    });
                });
                scope.close = function(){
                    scope.chatBoxes.splice(_.indexOf(this),1);
                }
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
            }
        }
    });
});