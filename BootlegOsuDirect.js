// ==UserScript==
// @name        BootlegOsuDirect
// @namespace   xdddva
// @namespace   http://tampermonkey.net/
// @grant       c
// @version     6.0
// @author      Hellfie
// @description This one might be a violation of some license agreements
// @match       https://osu.ppy.sh/beatmapsets/*
// ==/UserScript==

(function() {
    'use strict';
    const $ = document.querySelector.bind(document);
    var html = window.location.href;
    $('body.t-section > div.js-pinned-header > div.nav2-header__body').insertAdjacentHTML('afterend', stylin() );
    chicha.textContent = "Direct download";
    let cpw = html.substring(31);
    let cpw2 = cpw.substring(0, 0);
    let i = 0;
    let i2 = 0;
    while (i < 99 && i2 < 1) {
        let ci = cpw.substring(i, i+1);
        if (ci == 0 || ci == 1 || ci == 2 || ci == 3 || ci == 4 || ci == 5 || ci == 6 || ci == 7 || ci == 8 || ci == 9){   //yes i did that
          cpw2 = cpw.substring(0, i);
        }
        else{
          cpw2 = cpw.substring(0, i);
          ++i2;
        }
      ++i;
    }
  //  old error catcher:
  //
 //   if (i>97) {
 //   alert('Osu beatmap page URL layout has changed, update DirectDownload script');
  //  imagineIfJShadAfunctionForHalting;
 //   }
    setTimeout(() => {
        //setTimeout needed to allow a few ms for the new Btn to be injected onto page
        $('#chicha').addEventListener('click', () => {
            let mapurl = "https://osu.direct/api/d/" + cpw2;
            window.open(mapurl,"_self")
        });
    },500);
})();
function stylin(){
    return `
    <button id="chicha"></button>
    <style>
        #chicha{
                position:relative;
                height:40px;
                background-color:#21201e;
                text-align:center;
                z-index:99999;
                border: none;
                border-radius: 4px;
                color:#c3c2c2;
                }
    </style>
    `;
}
