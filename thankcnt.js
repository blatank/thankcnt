(function() {
    'use strict';

    // 定数
    const reachCnt = 100;   // あとで変更可能にする
    const result = document.getElementById('result');
    const cntButton = document.getElementById('cntButton');
    const reach = document.getElementById('reach');
    let thankCnt = 0;

    // ありがとうボタンクリック時の処理
    cntButton.onclick = (event) => {
        thankCnt++;
        result.innerText = `今日は${thankCnt}回、「ありがとう」と言いました。`;

        if (thankCnt >= reachCnt) {
            reach.innerText = `今日の目標を達成しました！`
        }
    }
})();