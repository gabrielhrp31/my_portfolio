
$(document).ready(function(){
    var last = null;
    $(window).scroll(function() {

        if($(this).scrollTop() == 0) {
                $('#service-title').addClass('invisible');
                $('#service1').addClass('invisible');
                $('#service4').addClass('invisible');
                $('#service2').addClass('invisible');
                $('#service3').addClass('invisible');
                $('#resumo').addClass('invisible');
                $('#trabalho').addClass('invisible');
        }

        if($(this).scrollTop() > 64) { 
            $('.navbar-fixed nav').addClass('scrolled');
        } else {
            $('.navbar-fixed nav').removeClass('scrolled');
        }
    });

    $('.sidenav').sidenav();
    
    $('.parallax').parallax();

    $('.scrollspy').scrollSpy({
        activeClass: 'active',
        scrollOffset: (window.innerHeight)-200,
        throttle:10,
        getActiveElement: function getActiveElement(id){
            if(id != last){
                $('a[href="#'+last+'"').parent().removeClass('active');
                $('a[href="#'+id+'"').parent().addClass('active');
                switch(id){
                    case "home":    
                        animate('#home-container h3, #home-container h4','slideInLeft');
                        animate('#home-container h1','slideInRight');
                        animate('#home-container #social-links','fadeInUp');
                        break;
                    case "sobre":
                        animate('#home-container h3, #home-container h4','slideInLeft');
                        animate('#home-container h1','slideInRight');
                        animate('#home-container #social-links','fadeInUp');
                        animate('#sobre-foto','rollIn');
                        animate('#sobre-info','flipInX');
                        $('#resumo').addClass('invisible');
                        $('#trabalho').addClass('invisible');
                        break;
                    case "servicos":
                        $('#home-container h3, #home-container h4').addClass('invisible');
                        $('#home-container h1').addClass('invisible');
                        $('#home-container #social-links').addClass('invisible');
                        $('#trabalho').addClass('invisible');
                        animate('#service-title', 'zoomIn');
                        animate('#service1', 'bounceInRight');
                        animate('#service4', 'bounceInRight');
                        animate('#service2', 'bounceInRight');
                        animate('#service3', 'bounceInRight');
                        animate('#sobre-foto','rollIn');
                        animate('#sobre-info','flipInX');
                        break;
                    case "resumo":
                        $('#sobre-foto').addClass('invisible');
                        $('#sobre-info').addClass('invisible');
                        $('#trabalho').addClass('invisible');
                        animate('#service-title', 'zoomIn');
                        animate('#service1', 'bounceInRight');
                        animate('#service4', 'bounceInRight');
                        animate('#service2', 'bounceInRight');
                        animate('#service3', 'bounceInRight');
                        animate('#resumo', 'bounceInLeft');
                        break;
                    case "trabalho":
                        $('#service-title').addClass('invisible');
                        $('#service1').addClass('invisible');
                        $('#service4').addClass('invisible');
                        $('#service2').addClass('invisible');
                        $('#service3').addClass('invisible');
                        animate('#resumo', 'bounceInLeft');
                        animate('#trabalho', 'fadeIn');
                        break;
                }
            }
            last = id;
        }
    });
    //  '#home-container h1' '#home-container #social-links'
    function animate(id, animation){
        if($(id).hasClass('invisible')){
            $(id).removeClass('invisible');
            $(id).addClass('animated').addClass(animation);
            $(id).on('animationend', function() {
                $(id).removeClass('animated').removeClass(animation);
            })
        }
    }
});