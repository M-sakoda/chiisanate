document.addEventListener('DOMContentLoaded', () => {
    const spBtn = document.querySelector('.sp-btn');
    const navi = document.querySelector('.navi');

    if (spBtn && navi) {
        spBtn.addEventListener('click', () => {
            // クラスの付け外しをしてCSSアニメーションをトリガーする
            spBtn.classList.toggle('is-active');
            navi.classList.toggle('is-active');
        });

        // リンクをクリックしたら自動でメニューを閉じる設定（ページ内リンク対策）
        const naviLinks = navi.querySelectorAll('a');
        naviLinks.forEach(link => {
            link.addEventListener('click', () => {
                spBtn.classList.remove('is-active');
                navi.classList.remove('is-active');
            });
        });
    }
});