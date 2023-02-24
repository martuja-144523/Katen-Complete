$(function (){
    $('.slide_show').slick({
        slidesToShow:2 ,
        arrows: false ,
    })
    $('.ar_cle_slide').slick({
        arrows: false ,
        
    })
    $('.nav_btn').on('click', function () {
        $('.nav_btn').addClass('.pop_active');
    })
    $('.cross').on('click', function () {
        $('.cross').removeClass('.pop_active');
    })

    $("#back_to_top").on("click", function () {
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          1000
        );
      });

      $(window).on("scroll", function(){
        let scrollSize = $(window).scrollTop();
        if (scrollSize > 80) {
           $(".my-nab").addClass("nav_active");
         } else {
           $(".my-nab").removeClass("nav_active");
         }
     });
})