// ==UserScript==
// @name         Skip AD on Naver Video
// @namespace    http://elegwance.com
// @version      0.5
// @description  enjoy it
// @author       me@elegwance.com
// @include      *://*.naver.com/*/vod/index.nhn*
// @include      *://tv.naver.com/v/*
// ==/UserScript==

window.addEventListener('load', function() {
    var intervalId;

    function skipHtml5() {
        playerOptions.advertiseInfo = null;
        playerOptions.advertiseUrl = null;
        WrapPlayer.init(playerOptions);
    }


    function skipFlash() {
        if (rmcPlayer === null || !rmcPlayer.isPlaying()) {
            return;
        }

        var nonskip = document.getElementsByClassName('u_rmc_txt_nonskip');
        if (nonskip.length === 0) {
            return;
        }

        if (nonskip[0].style.display == 'block') {
            rmcPlayer.displayPlayer(player);
            return;
        }

        clickSkipButton();
        clearInterval(intervalId);
    }


    function clickSkipButton() {
        var button = document.getElementsByClassName('u_rmc_btn_skip')[0];

        button.style.display = 'block';
        button.click();
    }


    if (typeof WrapPlayer !== 'undefined') {
        // html5 video
        skipHtml5();
    } else {
        // flash video
        intervalId = setInterval(checkNonSkip, 500);
    }
}, false);
