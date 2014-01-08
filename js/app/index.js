/**
 * Created by 世宁 on 14-1-2.
 */
var layoutSettings = {
    name: "layout",
    defaults: {
        spacing_open: 0,
        togglerLength_open: 0,
        paneClass: "pane",
        togglerLength_closed: -1,
        resizable: false,
        slidable: false,
        fxName: "none"
    },
    north: {
        size: 140
    },
    south: {
        size: 20,
        padding: 0
    }
};
$(function(){
    $('body').layout(layoutSettings);
    $('#tabs').tabs();
    $(".indicator_container a").on("click",function(){
        var index = $(this).index()+1;
    });
});
