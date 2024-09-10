"use strict";
function toggle() {
    let menu = document.querySelector(".menu-toggle");
let nav = document.querySelector(".nav");
let icon = document.querySelector(".icon");
    if (!(menu.className === "menu-toggle active" && nav.className.match("responsive"))) {
        menu.className = "menu-toggle active";
        nav.classList.add("responsive");
    } else {
        menu.className = "menu-toggle";
        nav.classList.remove("responsive");
    }
    // nav.onmouseleave = function () {
    //     menu.className = "menu-toggle";
    //     nav.classList.remove("responsive");    
    // }
}
function DayAndNight(){
    var r = document.querySelector(':root');
    var mode=document.querySelector(".mode");
    mode.classList.toggle("active");
 var rs = getComputedStyle(r);
if(mode.classList.contains("active")){
    document.querySelectorAll('.logo').forEach(logo=> logo.src='./images/logo_white.png');
     r.style.setProperty('--main-bg', 'radial-gradient(126.96% 275.84% at 90.24% 16.36%, #5C11CC 0px, rgba(102, 19, 198, 0.8) 0.01%, rgba(112, 29, 218, 0.7) 19.27%, rgba(122, 39, 238, 0.75) 30.73%, rgba(142, 59, 258, 0.7) 81.77%, rgba(102, 19, 198, 0.7) 100%)');
    r.style.setProperty('--white', '#000');
    r.style.setProperty('--secondary-white', '#464646');
    r.style.setProperty('--sec-white', '#333');
    r.style.setProperty('--black-opac-hover', 'rgba(255, 255, 255, .8)');
    r.style.setProperty('--black-opac', 'rgba(255, 255, 255, .6)');
r.style.setProperty('--black', 'white');
r.style.setProperty('--grey', '#666');
r.style.setProperty('--primary-blue', '#87A2FF');
r.style.setProperty('--medium-black', '#999');
r.style.setProperty('--light-black', '#ddd');
r.style.setProperty('--grey-gradient', 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 38%, rgba(0, 0, 0, 0.6) 100%)');
}else{
    document.querySelectorAll('.logo').forEach(logo=> logo.src='./images/logo1.png');
    r.style.setProperty('--light-black', '');
    r.style.setProperty('--main-bg', '');
    r.style.setProperty('--white', '');
    r.style.setProperty('--secondary-white', '');
    r.style.setProperty('--sec-white', '');
r.style.setProperty('--black', '');
r.style.setProperty('--black-opac-hover', '');
    r.style.setProperty('--black-opac', '');
r.style.setProperty('--grey', '');
r.style.setProperty('--primary-blue', '');

r.style.setProperty('--medium-black', '');
r.style.setProperty('--grey-gradient', '');
}
}

window.addEventListener("scroll", function () {
    let scrll = document.body.scrollTop || document.documentElement.scrollTop;
    if (scrll > 30) {
        document.querySelector('.nav').classList.add('wake');

    } else  {
        document.querySelector('.nav').classList.remove('wake');
    }
});


window.addEventListener("load", ()=>{
let links = document.querySelectorAll(".nav a");

function activeNavigation(){
        let address = window.location.href;
    for (let p = 0; p < links.length; p++) {
        links[p].classList.remove("active");
        let link_con = links[p].href;
        if (address.indexOf(link_con) !== -1){
         links[p].classList.add("active");
        }else if ((!address.match(".html") && address.match("ooutechcommunity"))  || address.match("index")){
            links[0].classList.add("active");
        }
    }
}
activeNavigation()
    links.forEach((e, index)=>{
        
        e.onclick=function(){
            links.forEach(e=> e.classList.remove('active'))
            this.classList.add("active");
            menu.classList.remove("active");
            nav.classList.remove("responsive");
            contentNavigation(academy_sections[index-1], index-1)
        };
    })
    
})