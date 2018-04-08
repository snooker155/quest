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
            App.displayNewGameScreen();
            App.startTimer();
        },




        /* *************************************
         *             Game Logic              *
         * *********************************** */


        /**
         * Show the Host screen containing the game URL and unique game ID
         */
        displayNewGameScreen : function() {
            // Display the URL on screen
            $('#gameURL').text(window.location.href.substring(0,window.location.href.length-5));
            App.doTextFit('#gameURL');
            // App.doTextFit('#timer');
        },

        startTimer : function() {
            // Display the URL on screen
            var $secondsLeft = $('#timer-value');
            App.countDown($secondsLeft, 5400, function(){});
        },

        /* **************************
                  UTILITY CODE
           ************************** */

        /**
         * Display the countdown timer on the Host screen
         *
         * @param $el The container element for the countdown timer
         * @param startTime
         * @param callback The function to call when the timer ends.
         */
        countDown : function($el, startTime, callback) {

            // Display the starting time on the screen.
            $el.text(App.parseTime(startTime));
            // App.doTextFit('#timer');

            // console.log('Starting Countdown...');

            // Start a 1 second timer
            var timer = setInterval(countItDown,1000);

            // Decrement the displayed timer value on each 'tick'
            function countItDown(){
                startTime -= 1
                $el.text(App.parseTime(startTime));
                // App.doTextFit('#timer');

                if( startTime <= 0 ){
                    // console.log('Countdown Finished.');

                    // Stop the timer and do the callback.
                    clearInterval(timer);
                    callback();
                    return;
                }
            }

        },

        parseTime: function(timer) {
          return Math.floor(Math.floor(timer / 60) / 60) +":"+ Math.floor(timer / 60) % 60 +":"+ timer % 60;
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