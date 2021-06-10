const searchEl = document.querySelector('.search');
const searchInput = searchEl.querySelector('input');

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