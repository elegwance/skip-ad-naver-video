// ==UserScript==
// @name         Skip AD on Naver Video
// @namespace    http://elegwance.com
// @version      0.1
// @description  enjoy it
// @author       me@elegwance.com
// @include      *://*.naver.com/*/vod/index.nhn*
// ==/UserScript==

window.addEventListener('load', function() {
    function reloadVideo() {
        var intervalId = setInterval(function() {
            if (typeof rmcPlayer == "undefined") return;

            rmcPlayer.properties.advertiseUrl = '';
            rmcPlayer.displayRMCPlayer(player);
            clearInterval(intervalId);

            skipAd();

        }, 1000);
    }

    function skipAd() {
        var intervalId = setInterval(function() {
            var time = rmcPlayer.getCurrentTime();

            if (typeof time == 'undefined' || !isNaN(time)) return;

            rmcPlayer.stop();
            rmcPlayer.play();
            clearInterval(intervalId);

        }, 1000);
    }

    reloadVideo();
}, false);