class App{
    constructor(){
        this.setEvent();
    }

    setEvent(){
        $(".one_dep").mouseover(()=>{
            $("header::after").stop().slideDown(100);
            $(".two_dep").stop().fadeIn(200);
            $("header").addClass("hover");
        });

        $(".one_dep").mouseout(()=>{
            $("header::after").stop().slideUp(100);
            $(".two_dep").stop().fadeOut(200);
            $("header").removeClass("hover");
        });

        $("#all_menu_open").click(()=>{
            $(".all_menu_area").addClass("on");
            $("body").css({"overflow":"hidden"});
        });

        $("#all_menu_close").click(()=>{
            $(".all_menu_area").removeClass("on");
            $("body").css({"overflow":"auto"});
        });

        $("#slider-left").click(()=>{
            $(".visual_box").css({"transform": "translateX(0)"});
            $("#slider-left").css({"pointer-events":"none"});
            $("#slider-right").css({"pointer-events":"all"});
        });

        $("#slider-right").click(()=>{
            $(".visual_box").css({"transform": "translateX(-50%)"});
            $("#slider-right").css({"pointer-events":"none"});
            $("#slider-left").css({"pointer-events":"all"});
        });

        let lastScrollTop = 0;
        let headerHeight = $("header").outerHeight();
        $(window).scroll(function(){
            let st = $(this).scrollTop();
            if(lastScrollTop < st && st > headerHeight) $("header").css({"top":`-${headerHeight}px`,"box-shadow":"none"});
            else if(st == 0) $("header").css({"box-shadow":"none"});
            else $("header").css({"top":"0px","box-shadow":"0 10px 20px rgba(0,0,0,0.1)"});

            lastScrollTop = st;
        });
        
    }
}

window.onload = () =>{
    let app = new App();
}