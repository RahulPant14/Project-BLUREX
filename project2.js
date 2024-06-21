$(function(){

    $ (".btnmob").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle();
    });

    if(screen.width<981){
        $(".collapse a").click(function(e){
            $(".collapse").slideUp();
            $("header .mob").removeClass("active");
        });
    }

    $(".wrap-2 .tab").click(function(e){
        e.preventDefault();
        $(".wrap-2 .tab").removeClass("active");
        $(this).addClass("active");

        if($(this).text()=="WEB DESIGN"){
            $(".wrap-2 .tab1").fadeIn();
            $(".wrap-2 .tab2, .tab3, .tab4").fadeOut(0);
            $(".readmore").attr("href", "project.2.3.html");
        }

        else if($(this).text()=="MOBILE APP"){
            $(".wrap-2 .tab1, .tab3, .tab4").fadeOut(0);
            $(".wrap-2 .tab2").fadeIn();
            $(".readmore").attr("href", "project.2.4.html");
        }

        else if($(this).text()=="BRANDIN"){
            $(".wrap-2 .tab1, .tab2, .tab4").fadeOut(0);
            $(".wrap-2 .tab3").fadeIn();
            $(".readmore").attr("href", "project.2.5.html");
        }

        else if($(this).text()=="BRANDING"){
            $(".wrap-2 .tab1, .tab2, .tab3").fadeOut(0);
            $(".wrap-2 .tab4").fadeIn();
            $(".readmore").attr("href", "project.2.6.html");
        }
    });

    $(".wrap-4 .readmore").click(function(e){
        e.preventDefault();
        $(".wrap-4 .p-1").toggle(1000);
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(".wrap-4 .readmore").text("READ LESS");
        }
        else{
            $(".wrap-4 .readmore").text("READ MORE");
        }
    });


    $(".wrap-6 .tab").click(function(e){
        e.preventDefault();
        $(".wrap-6 .tab").removeClass("active");
        $(this).addClass("active");
        $(".wrap-6 .readmore").text("MORE");
        

        if($(this).text()=="WEB DESIGN"){
            $(".wrap-6 .web").fadeIn();
            $(".wrap-6 .mob, .brandin, .branding").fadeOut(0);
        }

        else if($(this).text()=="MOBILE APP"){
            $(".wrap-6 .web, .brandin, .branding").fadeOut(0);
            $(".wrap-6 .mob").fadeIn();
        }

        else if($(this).text()=="BRANDIN"){
            $(".wrap-6 .web, .branding, .mob").fadeOut(0);
            $(".wrap-6 .brandin").fadeIn();
        }

        else if($(this).text()=="BRANDING"){
            $(".wrap-6 .web, .brandin, .mob").fadeOut(0);
            $(".wrap-6 .branding").fadeIn();
        }
    });

    $(".wrap-6 .readmore").click(function(e){
        e.preventDefault();
        $(".wrap-6 .all").toggle(1000);
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            $(".wrap-6 .readmore").text("LESS");
        }
        else{
            $(".wrap-6 .readmore").text("MORE");
        }
        
    
    });

});