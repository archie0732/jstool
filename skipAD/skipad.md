# 使用腳本自動跳過/skip ad on yt/ YouTube広告をスキップする

* 需先安裝擴充功能`竄改猴`  ==> 新增腳本 ==>將本腳本加入  
* Install the extension `Tampermonkey` first ==> Add script ==> Insert this script.  
* まず拡張機能 'Tampermonkey' をインストールしてください ==> スクリプトを追加 ==> このスクリプトを挿入してください。

[script](https://github.com/archie0732/jstool/blob/main/skipAD/skipAD.js)
```js
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
```

聲明:  
完成上述步驟後，"Tampermonkey" 應該會在 YouTube 上自動執行腳本，幫助你跳過廣告。請注意，使用腳本修改網站行為可能違反網站的使用條款，請謹慎使用。     

Statement:  
After completing the above steps, "Tampermonkey" should automatically execute the script on YouTube, 
helping you skip ads. Please be aware that using scripts to modify website behavior may violate the terms of service of the website. Please use caution.


声明：  
上記の手順を完了した後、「Tampermonkey」はYouTubeで自動的にスクリプトを実行し、広告をスキップするのに役立ちます。ただし
、ウェブサイトの行動を変更するためにスクリプトを使用することは、ウェブサイトの利用規約に違反する可能性があります。注意してご使用ください。
