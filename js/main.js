const searchEl      = document.querySelector('.search');
const searchInput   = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInput.focus();
});

searchInput.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    // searchInput.placeholder='검색어를 입력하세요'; 이것도 됨
    searchInput.setAttribute('placeholder','통합검색');
});

searchInput.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInput.setAttribute('placeholder','');
    searchInput.value = "";
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // hide badge
        gsap.to(badgeEl, .6, {
            opacity:0,
            display:'none'
            // 투명도만 0으로 낮추면 사라진 것이 아니라 영역이 잡히기 때문에 none 처리 해준다.
        });
    }
    else {
        // show badge
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
        })
    }
}),300);

// gsap.to(요소, 지속시간, 옵션);
// _.throttle(함수, 시간);


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(el, idx){
    gsap.to(el, 1, {
        // 순차적으로 나타내기 위함. (zero-base = idx+1)
        delay: (idx + 1) * .7, //0.7, 1.4, 2.1, 2.7...
        opacity: 1,
    })
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay:true,
    loop:true
});

new Swiper('.promotion .swiper-container', {
    slidesPerView : 3,      // 한번에 보여줄 갯수
    spaceBetween : 10,      // 슬라이드 사이 여백
    centeredSlides: true,   // 첫번째 슬라이드가 가운데로 
    loop:true,
    autoplay: {
        delay: 3000
    },
    pagination : {
        el:'.promotion .swiper-pagination',
        clickable:true  // 사용자 페이지 번호 요소 제어 기능 추가
    },
    navigation : {
        prevEl : '.promotion .swiper-prev',
        nextEl : '.promotion .swiper-next'
    }
});

// PROMOTION AREA
const promotionEl           = document.querySelector('.promotion');
const promotionToggleBtn    = document.querySelector('.toggle-promotion');
let isHidePromotion         = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
        // hide
        promotionEl.classList.add('hide');
    } else {
        // show
        promotionEl.classList.remove('hide');
    }

});
