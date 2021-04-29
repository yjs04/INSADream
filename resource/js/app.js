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
        });

        $("#all_menu_close").click(()=>{
            $(".all_menu_area").removeClass("on");
        })
    }
}

window.onload = () =>{
    let app = new App();
}