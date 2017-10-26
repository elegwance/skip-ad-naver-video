// ==UserScript==
// @name         Skip AD on Naver Video
// @namespace    http://elegwance.com
// @version      0.3
// @description  enjoy it
// @author       me@elegwance.com
// @include      *://*.naver.com/*/vod/index.nhn*
// ==/UserScript==

$.cookie("fromAutoPlay", true);

window.addEventListener('load', function() {
    function checkNonSkip() {
        console.log('checkNonSkip');

        if (rmcPlayer === null || !rmcPlayer.isPlaying()) {
            console.log('not init rmcPlayer');
            return;
        }

        if ($('.u_rmc_txt_nonskip').css('display') == 'block') {
            rmcPlayer.displayPlayer(player);
            console.log('nonskip video');
            return;
        }

        skipAd();
        clearInterval(intervalId);
    }

    function skipAd() {
        var $button = $('.u_rmc_btn_skip');

        $button.css('display', 'block');
        $button.trigger('click');

        console.log('skipAd');
    }

    var intervalId = setInterval(checkNonSkip, 1000);
}, false);
