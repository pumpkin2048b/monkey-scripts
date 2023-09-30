// ==UserScript==
// @name         Highlight purchased item on DLsite
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  購入済みアイテムの背景色を変更します
// @author       PUMPKIN
// @match        https://www.dlsite.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    const backgroundColor = "gray";

    document.querySelectorAll('#search_result_list a.btn_dl').forEach(element => {
        if(element.closest('.search_result_img_box_inner')) {
            //割引中、サークル情報等
            element.closest('.search_result_img_box_inner').style.backgroundColor = backgroundColor;
        } else if(element.closest('.n_worklist_item')) {
            //サークル情報の割引中作品
            element.closest('.n_worklist_item').style.backgroundColor = backgroundColor;
        } else if(element.closest('tr')) {
            //検索結果
            element.closest('tr').style.backgroundColor = backgroundColor;
        }
    });

})();