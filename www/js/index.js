$(document).ready(function() {
    /*   $('.tabs').tabs({ 'swipeable': true });

       $("#btn-avancar").click(function() {
           $('.carousel.carousel-slider').carousel("next");
       })*/

    //Btns tela inicio
    $('#btn-entrar-tela-1').click(function() {
        $('#tela-1').hide();
        $('#tela-3').show();

    })
    $('#btn-cadastro-tela-1').click(function() {
            $('#tela-1').hide();
            $('#tela-2').show();
        })
        /*$('#btn-aparecer').click(function() {
            $('#btn-aparecer').hide();
            $('#btn-sumir').show();
            $('#cad').show();
        })

        $('#btn-sumir').click(function() {
            $('#btn-aparecer').show();
            $('#btn-sumir').hide();
            $('#cad').hide();
        })*/
});