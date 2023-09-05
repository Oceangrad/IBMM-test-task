$(document).ready(function(){
    
})

$(".content-box").mouseenter(function(){
    $(this).find("img").stop();
    $(this).find("img").animate({scale: "1.2"}, 'slow');
})

$(".content-box").mouseleave(function(){
    $(this).find("img").stop();
    $(this).find("img").animate({scale: "1"}, 'slow');
})