;
jQuery(function($){
    'use strict';

    var App = {

        /* *************************************
         *                Setup                *
         * *********************************** */

        /**
         * This runs when the page initially loads.
         */
        init: function () {
            App.cacheElements();
            App.bindEvents();
            App.showInitScreen();
        },

        /**
         * Create references to on-screen elements used throughout the game.
         */
        cacheElements: function () {
            App.$doc = $(document);
        },

        /**
         * Create some click handlers for the various buttons that appear on-screen.
         */
        bindEvents: function () {
            // Player
            App.$doc.on('click', '#btnStart',App.onPlayerStartClick);
        },

        /**
         * Show the initial Anagrammatix Title Screen
         * (with Start and Join buttons)
         */
        showInitScreen: function() {
            App.doTextFit('#name');
            // App.doTextFit('#role');
            // App.doTextFit('#story');
            // App.doTextFit('#tasks');
        },

        /**
         * The player entered their name and gameId (hopefully)
         * and clicked Start.
         */
        onPlayerStartClick: function() {
            // console.log('Player clicked "Start"');

            var playerCode = $('#inputPlayerCode').val();
            if(playerCode){
                window.location.replace(window.location.href.length-5+"roles/"+playerCode);
            }
        },

        /**
         * Make the text inside the given element as big as possible
         * See: https://github.com/STRML/textFit
         *
         * @param el The parent element of some text
         */
        doTextFit : function(el) {
            textFit(
                $(el)[0],
                {
                    alignHoriz:true,
                    alignVert:false,
                    widthOnly:true,
                    reProcess:true,
                    maxFontSize:300
                }
            );
        }

    };

    App.init();

}($));