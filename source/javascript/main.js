//  @codekit-prepend "plugins.js";
/**
 *
 *  @function
 *  @description:   Anonimous function autoexecutable
 *  @params jQuery $.- An jQuery object instance
 *  @params window window.- A Window object Instance
 *  @author: @_Chucho_
 *
 */
( function ( $, window, document, undefined ) {
    //  Revisa la disponibilidad de localStorage
    var storage;
    if( 'localStorage' in window && window.localStorage !== null ) {
        storage = localStorage;
    } else {
        try {
            if ( localStorage.getItem ) {
                storage = localStorage;
            }
        } catch( e ) {
            storage = {};
        }
    }

    //  When DOM is loaded
    // $( function ( ) {

    // } );

    //  When page is finished loaded
    $( document ).ready( function () {
        if ( $( '.stars li' ).exists() ) {
            $( '.stars li' ).on( 'click', 'a', function ( e ) {
                e.preventDefault();
                e.stopPropagation();

                $( '.stars li a' ).removeClass('Star-1').addClass('Star-2');

                var _quality = $( e.currentTarget ).data( 'quality' ),
                    _section = $( e.currentTarget ).parents( 'ul' ).data( 'section' ),
                    _month   = $( e.currentTarget ).parents( 'ul' ).data( 'month' ),
                    _year    = $( e.currentTarget ).parents( 'ul' ).data( 'year' ),
                    _options = {
                        data: {
                            star:    _quality,
                            section: _section,
                            month:   _month,
                            year:    _year,
                        },
                        type: 'POST'
                    };
                $( '.stars li' ).each( function ( index ) {
                    if ( _quality >= ( index + 1 ) ) {
                        $( '.stars li' ).eq( index ).children('a').removeClass('Star-2').addClass('Star-1');
                    } else {
                        return;
                    }
                } );
                $.ajax( 'inicio/starPost', _options )
                 .done( function () { } )
                 .then( function ( response ) {
                    response = $.parseJSON( response );
                    if ( response.code === 'fail' ) {
                        $( '.stars li a' ).removeClass('Star-1').addClass('Star-2');
                    }
                 } )
                 .fail( function () { $( '.stars li a' ).removeClass('Star-1').addClass('Star-2'); } );
            } );
        }
    } );
} ) ( jQuery, window, document );