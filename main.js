$(document).ready(function(){
    
})

$(".content-box").mouseenter(function(){
    $(this).find("img").stop();
    $(this).find("img").animate({scale: "1.1"}, 'fast');
})

$(".content-box").mouseleave(function(){
    $(this).find("img").stop();
    $(this).find("img").animate({scale: "1"}, 'fast');
})

$(".mid-header-block button").mouseenter(function(){
    console.log(this)
    $(this).stop();
    $(this).animate({backgroundColor: "rgb(0, 255, 255)"}, 'fast');
})