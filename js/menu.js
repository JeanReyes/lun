$(document).ready(function(){
    $('#btn-menu').click(function(){
        if ( $ ('.btn-menu span').attr('class') ==='fas fa-bars'){
            $('.btn-menu span').removeClass('fas fa-bars').addClass('far fa-window-close');
            $ ('.menu-link').css({'left': '0'});
        }else{
            $('.btn-menu span').removeClass('far fa-window-close').addClass('fas fa-bars');
            $ ('.menu-link').css({'left': '-100%'});
        }
    })
})