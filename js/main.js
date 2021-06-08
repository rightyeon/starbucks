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
            // 투명도만 0으로 낮추면 사라진 것이 아니라 영역이 잡힌다.
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