document.addEventListener('DOMContentLoaded', () => {
  setSlider();
  setSliderStickyScroll();
});

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
  
  if (!sliderContainer) return;
  
  // スライダーの初期位置と高さを取得
  const sliderTop = sliderContainer.offsetTop;
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    
    // スライダーの上端が画面上端に達した時点で固定表示
    if (scrollTop >= sliderTop) {
      sliderContainer.classList.add('l-slider--fixed');
    } else {
      sliderContainer.classList.remove('l-slider--fixed');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
};