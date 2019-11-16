$(document).ready(function(){

    //Activar animaciones
    
    $(window).scroll(function(){
        let seccion= document.querySelector('.p-seccion').offsetTop;

        
        //busqueda
        if($(this).scrollTop() >= seccion-800){
            $('.p-seccion .col-md-6:last-of-type').addClass('apBefore')
        }
        //busqueda
        if($(this).scrollTop() >= seccion-200){
            $('.busqueda-form').css({'display':'block'})
            $('.busqueda-form').addClass('fadeInUp')
        }
    })
})