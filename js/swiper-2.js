const lifeSwiper = new Swiper(".life-swiper", {
    centeredSlides: true,
    loop: true,
    speed: 500,

    // 💡【変更点】デフォルト（スマホ）では1.5枚くらい見せる設定にします
    // これにより、中央に1枚がドカンと座り、両隣がハミ出て見えます
    slidesPerView: 1.5,
    spaceBetween: -20, // スマホ用のカード同士の重なり具合

    // 💡【追加】PC（画面幅769px以上）の時は、今までの大成功している設定に切り替える
    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: -30,
        }
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // 前後の矢印
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});