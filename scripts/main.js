window.addEventListener('load', ()=>{
    let elementsToShow = document.querySelectorAll('.show-on-scroll');
    let body = document.querySelector('body') || document.body;

function loadAnims() {
        var elementsToShow = document.querySelectorAll('.animate');
        elementsToShow.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('is-visible');
            }
        });

    }
    body.onscroll = loadAnims;
    function isElementInViewport(el) {

        var rect = el.getBoundingClientRect();
        return ((rect.top <= 0 && rect.bottom >= 0) || (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)));
    }
    loadAnims()
    
})