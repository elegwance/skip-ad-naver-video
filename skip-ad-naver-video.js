// ==UserScript==
// @name         Skip AD on Naver Video
// @namespace    http://elegwance.com
// @version      0.1
// @description  enjoy it
// @author       me@elegwance.com
// @match        *://*.naver.com/*/vod/index.nhn*
// ==/UserScript==

window.addEventListener('load', function() {
    rmcPlayer.properties.advertiseUrl = '';
    rmcPlayer.displayRMCPlayer(player);
}, false);