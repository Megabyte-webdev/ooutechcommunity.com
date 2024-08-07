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
    nav.onmouseleave = function () {
        menu.className = "menu-toggle";
        nav.classList.remove("responsive");    }
}
function DayAndNight(){
    var r = document.querySelector(':root');
    var mode=document.querySelector(".mode");
    mode.classList.toggle("active");
 var rs = getComputedStyle(r);
if(mode.classList.contains("active")){
    r.style.setProperty('--white', '#000');
    r.style.setProperty('--sec-white', '#333');
    r.style.setProperty('--black-opac-hover', 'rgba(255, 255, 255, .8)');
    r.style.setProperty('--black-opac', 'rgba(255, 255, 255, .6)');
r.style.setProperty('--black', 'white');
r.style.setProperty('--grey', '#666');
}else{
    r.style.setProperty('--white', '');
    r.style.setProperty('--sec-white', '');
r.style.setProperty('--black', '');
r.style.setProperty('--black-opac-hover', '');
    r.style.setProperty('--black-opac', '');
r.style.setProperty('--grey', '');
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
        let link_con = links[p].innerText.toLowerCase();
        if ( address.match(link_con)) {
            links[p].classList.add("active");
        }else if(address.match("index")){
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