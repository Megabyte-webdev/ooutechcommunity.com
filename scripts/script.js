window.onload=()=>{
let directors= document.querySelectorAll('.floating-btn');
let modalContent=document.querySelector('.modal-ad .content');
let modal=document.querySelector('.modal-ad');
let modal_heading=document.querySelector('.modal-nav .heading');
let form_url="https://docs.google.com/forms/d/e/1FAIpQLScTMCtHuyuJcBoiOwtcP8i8CkXIew-wSpqU-q6kFLa7fgiIqw/viewform";


let back=document.querySelector('.modal-nav .back');
let whatsapp_btn=document.querySelector("#whatsapp-btn")
let iframe= document.querySelector("#iframe");


function waitForMs(ms) {

    return new Promise(resolve => setTimeout(resolve, ms))

  }

back.onclick = function(e) {
            modal.classList.remove("active");
          }
    
directors.forEach((elem)=>{
	

elem.onclick=function(){
          let location=this.getAttribute("title");
	 	alert('Before moving to "'+location+'" please fill this form' )
	 	
	 modal_heading.innerHTML=location
	 modal.classList.add("active");
	
        }
        
})

  

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
    
   

}

	
