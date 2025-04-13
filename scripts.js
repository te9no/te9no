// scripts.js
const slider = document.querySelector('.image-slider');

let scrollAmount = 0;
const autoScroll = () => {
    scrollAmount += 2; // スクロール速度を調整
    slider.scrollLeft = scrollAmount;

    // スクロールが終端に達した場合は戻る
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    }
    requestAnimationFrame(autoScroll);
};

autoScroll();