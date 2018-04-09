;
jQuery(function ($) {
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
            App.$tasksList = $(".tasks-list");
        },

        /**
         * Create some click handlers for the various buttons that appear on-screen.
         */
        bindEvents: function () {
            App.$doc.on('click', '#mainTaskAnswer', App.checkMainTaskAnswer);
            App.$doc.on('click', '#subTaskOneAnswer', App.checkSubTaskOneAnswer);
            App.$doc.on('click', '#subTaskTwoAnswer', App.checkSubTaskTwoAnswer);
        },

        showInitScreen: function () {

        },

        checkMainTaskAnswer: function () {
            var answer = $('#main-task').val();
            if (answer) {
                console.log(answer);
                $.ajax({
                    url: window.location+"/answer/main",
                    method: "POST",
                    data: {answer: answer},
                })
                    .done(function (data) {
                        if (console && console.log) {
                            console.log("Sample of data:", data.slice(0, 100));
                        }
                    });
            }
        },

        checkSubTaskOneAnswer: function () {
            var answer = $('#sub-task-1').val();
            if (answer) {
                console.log(answer);
                $.ajax({
                    url: window.location+"/answer/subone",
                    method: "POST",
                    data: {answer: answer},
                })
                    .done(function (data) {
                        if (console && console.log) {
                            console.log("Sample of data:", data.slice(0, 100));
                        }
                    });
            }
        },

        checkSubTaskTwoAnswer: function () {
            var answer = $('#sub-task-2').val();
            if (answer) {
                console.log(answer);
                $.ajax({
                    url: window.location+"/answer/subtwo",
                    method: "POST",
                    data: {answer: answer},
                })
                    .done(function (data) {
                        if (console && console.log) {
                            console.log("Sample of data:", data.slice(0, 100));
                        }
                    });
            }
        },

        /**
         * Make the text inside the given element as big as possible
         * See: https://github.com/STRML/textFit
         *
         * @param el The parent element of some text
         */
        doTextFit: function (el) {
            textFit(
                $(el)[0],
                {
                    alignHoriz: true,
                    alignVert: false,
                    widthOnly: true,
                    reProcess: true,
                    maxFontSize: 300
                }
            );
        }

    };

    App.init();

}($));