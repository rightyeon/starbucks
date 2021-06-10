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
const toTopEl = document.querySelector('#to-top');


// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // hide badge
        gsap.to(badgeEl, .6, {
            opacity:0,
            display:'none'
            // 투명도만 0으로 낮추면 사라진 것이 아니라 영역이 잡히기 때문에 none 처리 해준다.
        });
        gsap.to('toTopEl', .2, {
            x:0
        })
    }
    else {
        // show badge
        gsap.to(badgeEl, .6, {
            opacity:1,
            display:'block'
        });
        gsap.to('toTopEl', .2, {
            x:100
        })
    }
}),300);

// gsap.to(요소, 지속시간, 옵션);
// _.throttle(함수, 시간);


toTopEl.addEventListener('click', function(){
    // window.scrollTo({top:0, behavior:'smooth'})
    gsap.to(window, .7, {
        scrollTo:0
    })
 }) 

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


new Swiper('.awards .swiper-container', {
    slidesPerView:5,
    loop:true,
    navigation : {
        prevEl : '.awards .swiper-prev',
        nextEl : '.awards .swiper-next',
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

function random(min,max) {
    // .toFixed()를 통해 반환된 문자 데이터를,
    // parseFloat 를 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max-min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    gsap.to
        (selector,
         random(1.5, 2.5),{
            y: size,
            repeat:-1, //infinite
            yoyo:true, // 재생<->역재생 반복
            ease:Power1.easeInOut,
            delay: random(0, delay)
        });
}
floatingObject('.floating1',1, 15);
floatingObject('.floating2',.5, 15);
floatingObject('.floating3',1.5, 20);


// FOOTER date

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

