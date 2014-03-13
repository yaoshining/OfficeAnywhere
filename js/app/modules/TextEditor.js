/**
 * Created by 世宁 on 14-3-11.
 */
define(['angular','angular-lazyload'] , function (angular) {
    return angular.module('textEditor',['angular-lazyload'])
        .value("textEditorConfig",{})
        .config(function(){

        })
        .run(function($lazyload){
            $lazyload.init(this);
            this.register = $lazyload.register;
            this.register.directive("textEditor",function(){
                "use restrict"
                return {
                    restrict: "A",
                    link: function(scope,element,attrs){
                        $.getScript("//tinymce.cachefly.net/4.0/jquery.tinymce.min.js",function(){
                            element.tinymce({
                                menubar : true,
                                plugins: "fullpage,fullscreen,emoticons,textcolor",
                                statusbar : false,
                                toolbar: "undo redo | styleselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | link image | emoticons | forecolor fontselect fontsizeselect | fullscreen fullpage",
                                height : 150,
                                script_url: "//tinymce.cachefly.net/4.0/tinymce.min.js",
                                language_url: "js/lib/tinymce/langs/zh_CN.js"
                            });
                        });
                    }
                }
            });
        });
});