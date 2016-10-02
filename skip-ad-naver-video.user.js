// ==UserScript==
// @name         Skip AD on Naver Video
// @namespace    http://elegwance.com
// @version      0.2
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

            console.log('reload video');
        }, 1000);
    }

    function skipAd() {
        var intervalId = setInterval(function() {
            var time = rmcPlayer.getCurrentTime();

            if (typeof time == 'undefined') return;

            rmcPlayer.init();
            clearInterval(intervalId);

            console.log('called skipAd');
        }, 1000);
    }

    reloadVideo();
}, false);
