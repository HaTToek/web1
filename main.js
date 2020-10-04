let target = document.querySelector("#dyname");
let bar = document.querySelector("#header");
var flip = document.querySelector("#container");
var home = document.querySelector("#home");
var me = document.querySelector("#about_me");
var works = document.querySelector("#works");
var connect = document.querySelector("#connect");
var menu = document.querySelector("#menu");
var nav = document.querySelector("#nav");
var prevScrollTop = 0;
var nowScrollTop = 0;
var currentScrollValue = 0;
var befor = 0;
var btn = 0;
var evn = 0;

// 화면 이벤트
function Evn(evn){
    if (evn == 1){
        home.style.transform = "perspective(0) scale(1) translate3d(0,0,0) rotate3d(0,0,0,0)"
    }else if (evn == 2){
        me.style.transform = "perspective(0) scale(1) translate3d(0,0,0) rotate3d(0,0,0,0)"
    }else if (evn == 3){
        works.style.transform = "perspective(0) scale(1) translate3d(0,0,0) rotate3d(0,0,0,0)"
    }else if (evn == 4){
        connect.style.transform = "perspective(0) scale(1) translate3d(0,0,0) rotate3d(0,0,0,0)"
    }
}

// navbar
document.addEventListener('scroll', function() {
    currentScrollValue = document.documentElement.scrollTop;
    nav.style.top = currentScrollValue +'px' ;
    console.log(currentScrollValue);
});

// 버튼
function btntest(btn){
    if(btn==1)
    {
        home.style.transform = "perspective(1000px) scale(1) translate3d(0,42vh,0) rotate3d(1,0,0,72deg)";
        home.style.opacity = "0.5";
        home.style.display = "flex";
        nav.style.display = "none";
        me.style.display = "none";
        works.style.display = "none";
        connect.style.display = "none";
        menu.style.display = "flex";
    }
    else if(btn==2){
        home.style.display = "none";
        me.style.display = "flex";
        works.style.display = "none";
        connect.style.display = "none";
        menu.style.display = "none";
        nav.style.display = "flex";
        me.style.transform = "perspective(1000px) scale(0) translate3d(0,42vh,0) rotate3d(1,0,0,72deg)";
        setTimeout(function(){ Evn(2); },300);
    }
    else if(btn==3){
        home.style.display = "none";
        me.style.display = "none";
        works.style.display = "block";
        connect.style.display = "none";
        menu.style.display = "none";
        nav.style.display = "flex";
        works.style.transform = "perspective(1000px) scale(0) translate3d(0,42vh,0) rotate3d(1,0,0,72deg)";
        setTimeout(function(){ Evn(3); },300);
    }
    else if(btn==4){
        home.style.display = "none";
        me.style.display = "none";
        works.style.display = "none";
        connect.style.display = "flex";
        connect.style.transform = "perspective(1000px) scale(0) translate3d(0,42vh,0) rotate3d(1,0,0,72deg)";
        setTimeout(function(){ Evn(4); },300);
        menu.style.display = "none";
        nav.style.display = "flex";
    }else if(btn == 5){
        home.style.opacity = "1";
        home.style.display = "flex";
        home.style.transform = "perspective(0) scale(1) translate3d(0,0,0) rotate3d(0,0,0,0)"
        nav.style.display = "none";
        me.style.display = "none";
        works.style.display = "none";
        connect.style.display = "none";
        menu.style.display = "none";
    }else if(btn == 6){
        home.style.opacity = "1";
        home.style.display = "flex";
        home.style.transform = "perspective(0) scale(1) translate3d(0,0,0) rotate3d(0,0,0,0)"
        home.style.transform = "perspective(1000px) scale(0) translate3d(0,42vh,0) rotate3d(1,0,0,72deg)";
        setTimeout(function(){ Evn(1); },300);
        nav.style.display = "flex";
        me.style.display = "none";
        works.style.display = "none";
        connect.style.display = "none";
        menu.style.display = "none";
    }
}

// 큰 글씨
function randomString(){
    // let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let stringArr = ["이호윤의 포트폴리오 입니다."]
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");
    return selectStringArr;
}

function resetTyping(){
    target.textContent = "";
    dyname(randomString());
}

function dyname(randomArr){
    if(randomArr.length > 0){
        target.textContent +=randomArr.shift();
        setTimeout(function(){
            dyname(randomArr);
        }, 160);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dyname(randomString());

function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);