// ==UserScript==
// @name         Skip AD on Naver Video
// @namespace    http://elegwance.com
// @version      0.4
// @description  enjoy it
// @author       me@elegwance.com
// @include      *://*.naver.com/*/vod/index.nhn*
// @include      *://tv.naver.com/v/*
// ==/UserScript==

window.addEventListener('load', function() {
    function checkNonSkip() {
        console.log('checkNonSkip');

        if (rmcPlayer === null || !rmcPlayer.isPlaying()) {
            console.log('not init rmcPlayer');
            return;
        }

        var nonskip = document.getElementsByClassName('u_rmc_txt_nonskip');
        if (nonskip.length === 0) {
            return;
        }
        if (nonskip[0].style.display == 'block') {
            rmcPlayer.displayPlayer(player);
            console.log('nonskip video');
            return;
        }

        skipAd();
        clearInterval(intervalId);
    }

    function skipAd() {
        var button = document.getElementsByClassName('u_rmc_btn_skip')[0];

        button.style.display = 'block';
        button.click();
        console.log('skipAd');
    }

    var intervalId = setInterval(checkNonSkip, 500);
}, false);
