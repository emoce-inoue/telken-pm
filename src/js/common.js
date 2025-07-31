document.addEventListener('DOMContentLoaded', () => {
  setSlider();
  setSliderStickyScroll();
});

/* global Splide */
const setSlider = () => {
  const splideOptions = {
    arrows: false,
    pagination: false,
    autoWidth: true,
    type: 'loop',
    drag: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoScroll: {
      speed: 0.4,
      pauseOnHover: false,
    },
  };
  const sliderIds = ['#slider1', '#slider2'];
  sliderIds.forEach((id) => {
    new Splide(id, splideOptions).mount(window.splide.Extensions);
  });
};

const setSliderStickyScroll = () => {
  const sliderContainer = document.getElementById('slider-container');

  if (!sliderContainer) {
    return;
  }

  // スライダーの初期位置と高さを取得
  const sliderTop = sliderContainer.offsetTop;
  const sliderHeight = sliderContainer.offsetHeight;
  
  // レイアウトシフト防止用のスペーサーを作成
  const spacer = document.createElement('div');
  spacer.style.height = '0px';
  spacer.style.transition = 'none';
  sliderContainer.parentNode.insertBefore(spacer, sliderContainer.nextSibling);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    // スライダーの上端が画面上端に達した時点で固定表示
    if (scrollTop >= sliderTop) {
      sliderContainer.classList.add('l-slider--fixed');
      // スペーサーの高さをスライダーの高さに設定してレイアウトシフトを防ぐ
      spacer.style.height = `${sliderHeight}px`;
    } else {
      sliderContainer.classList.remove('l-slider--fixed');
      // スペーサーの高さを0にリセット
      spacer.style.height = '0px';
    }
  };

  window.addEventListener('scroll', handleScroll);
};
