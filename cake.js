//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let page1Dom = document.querySelector('.page1');
let SliderDom = page1Dom.querySelector('.page1 .list');
let sboxBorderDom = document.querySelector('.page1 .sbox');
let sboxItemsDom = sboxBorderDom.querySelectorAll('.sbox .item');
let timeDom = document.querySelector('.page1 .time');

sboxBorderDom.appendChild(sboxItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.page1 .list .item');
    let  sboxItemsDom = document.querySelectorAll('.page1 .sbox .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        sboxBorderDom.appendChild(sboxItemsDom[0]);
        page1Dom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        sboxBorderDom.prepend(sboxItemsDom[sboxItemsDom.length - 1]);
        page1Dom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        page1Dom.classList.remove('next');
        page1Dom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}