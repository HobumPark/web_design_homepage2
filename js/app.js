var slideIndex,slideWidth;

$(document).ready(function(){
    init();
    menu(); 
    slide();
    popup();
});

function menu(){
    var idx=0;

    $(".gnb > li").hover(function(){

        $(".lnb").stop().slideDown(500);
        $("#left-back,#right-back").stop().slideDown(500);
    },function(){
        $(".lnb").stop().slideUp(500);
        $("#left-back,#right-back").stop().slideUp(500);
    });
}

function init(){
    slideIndex=0;
    slideWidth=1200;
}

function slide(){
    setInterval(slide_move,3000);
}

function slide_move(){
    var newLeft= -slideWidth*slideIndex;

    $("#slide_contents").animate(
        {left:newLeft},400,"swing");

    if(slideIndex>=2) { 
        slideIndex=0;                
    } else {
        slideIndex++;    
    }
}

function popup(){

    $(".notice_list>li").eq(0).click(function(){
        $("#popup").show();
    });

    $("#popup>#closeBtn").click(function(){
        $("#popup").hide();
    });

}