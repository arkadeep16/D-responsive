

    $(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
 });
       $(window).on('load scroll',function(){

        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });
        });


    
  // var s = skrollr.init();

$(window).on('scroll load',function(){

        if($(window).scrollTop() > 20){
            $('header').css({
                'background':'#fff',
                'box-shadow':'0 .1rem .8rem #000'
            });
        }else{
            $('header').css({
                'background':'#fff',
                'box-shadow':'none'
            });
        }

    });

