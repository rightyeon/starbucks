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
});