var abrir = 0;
var desp = 0;
$(document).ready(function ()
{

    $('.axa_dropdown').on('click', function() {
        if (abrir === 1) {
            var id = $(this).attr('id');
            //$('#dropdown_' + id).fadeOut();
            abrir = 0;
        } else if (abrir === 0) {
            var id = jQuery(this).attr('id');
            //jQuery('#dropdown_' + id).fadeIn();
            abrir = 1;
        }
    });

    $('#acotamiento').on("click", function() {
        var id = $(this).attr('id');
        $('#dropdown_' + id).fadeOut();
        abrir = 0;
    });

    $("#cuerpo-gral").on("click", function() {
        var id = $(this).attr('id');
        $('#dropdown_' + id).fadeOut();
        abrir = 0;
    });


    jQuery('.axa_dropdown').click(function() {
        if($('#wrapper').innerWidth()>=979){
            var id = jQuery(this).attr('id');
            jQuery('#dropdown_'+id).slideToggle(400);
        }
    })
    .mouseleave(function(){
        if($('#wrapper').innerWidth()>=979){

            var id = jQuery(this).attr('id');
            jQuery('#dropdown_'+id).fadeOut(400);

        }
    }
    );



    $( "#iconMainMenu" ).click(function() {
        $( "#axa_close_mainMenu" ).show();
        if($('#wrapper').innerWidth()>=719){
            $( "#navigationBar_container" ).animate({
            right: "0",
            width: "370px",
            paddingLeft: "50px"
            }, 800 );
        }
        else{
            $( "#navigationBar_container" ).animate({
            right: "0",
            width: "270px",
            paddingLeft: "50px"
            }, 800 );
        }


    });

    $('#axa_close_mainMenu').click(function(event) {
        $(this).hide();
        $( "#navigationBar_container" ).animate({
        right: "0",
        width: "0px",
        paddingLeft: "0px"
        }, 800 );
    });

    jQuery('.axa_dropdown').click(function() {
        if($('#wrapper').innerWidth()<980){
            var id = jQuery(this).attr('id');
            jQuery('#dropdown_'+id).slideToggle(1000);
        }
    });

    /*$('#carousel[data-mixed] ul').anoSlide({
        items: 5,
        speed: 500,
        prev: 'a.prev[data-prev]',
        next: 'a.next[data-next]',
        lazy: false,
        delay: 50
    });*/

    $(document).click(function(event)
        {
            var id = jQuery(this).attr('id');
            //jQuery('#dropdown_'+id).fadeOut(400);
        });


});