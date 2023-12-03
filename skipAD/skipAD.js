// ==UserScript==
// @name         自動跳過YouTube廣告
// @namespace    youtube
// @version      1.0
// @description  跳過YouTube廣告
// @author       神里綾華的狗
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function skipAd() {
        var skipButton = document.querySelector('.ytp-ad-text.ytp-ad-skip-button-text');
        if (skipButton) {
            skipButton.click();
            console.log("sucessfully");
        }
    }

    
    var timer = setInterval(skipAd, 1000); 
})();