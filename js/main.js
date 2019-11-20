$(document).ready(function(){

    //Activar animaciones
    
    $(window).scroll(function(){
        let seccion= document.querySelector('.p-seccion').offsetTop;
        let seccionFamilia= document.querySelector('.familia').offsetTop;

        
        //busqueda
        if($(this).scrollTop() >= seccion-800){
            $('.p-seccion .col-md-6:last-of-type').addClass('apBefore')
        }
        //busqueda
        if($(this).scrollTop() >= seccion-400){
            $('.busqueda-form').css({'display':'block'})
            $('.busqueda-form').addClass('fadeInUp')
        }

        //Collage
        $('.familia .col-md-7 img').css({'visibility':'none'})
        $('.familia .col-md-8 img').css({'visibility':'none'})
        if($(this).scrollTop() >= seccionFamilia-300){
            $('.familia .col-md-7 img').addClass('animated slideInRight')
        }
        if($(this).scrollTop() >= seccionFamilia-100){
            $('.familia .col-md-8 img').addClass('animated fadeIn')

        }
    })
})