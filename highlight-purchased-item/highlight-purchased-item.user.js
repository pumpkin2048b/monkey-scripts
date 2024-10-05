// ==UserScript==
// @name         Highlight purchased item on DLsite
// @namespace    http://tampermonkey.net/
// @version      0.3.1
// @description  購入済みアイテムの背景色を変更します
// @author       PUMPKIN
// @match        https://www.dlsite.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @license      MIT
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const backgroundColor = "gray";

    // 購入済みアイテムに対して背景色を設定する関数
    function highlightPurchasedItems() {
        document.querySelectorAll('.btn_dl').forEach(btn => {
            if (btn.closest('.search_result_img_box_inner')) {
                // 割引中、サークル情報等
                btn.closest('.search_result_img_box_inner').style.backgroundColor = backgroundColor;
            } else if (btn.closest('.n_worklist_item')) {
                // サークル情報の割引中作品
                btn.closest('.n_worklist_item').style.backgroundColor = backgroundColor;
            } else if (btn.closest('tr')) {
                // 検索結果
                btn.closest('tr').style.backgroundColor = backgroundColor;
            }
        });
    }

    // 初期ロード時に一度実行
    highlightPurchasedItems();

    // 動的な変更を監視して、追加された要素にも適用する
    const observer = new MutationObserver(() => {
       highlightPurchasedItems(); // 追加されたノードに対してハイライトを適用
    });

    observer.observe(document, {
        subtree: true,
        childList: true, // 子要素の追加・削除を監視
        attributes: false, // 属性の変化は無視
    });
})();
