const links = document.querySelectorAll('a');
const audioBlop = document.getElementById('blop');
const constantBleep = document.getElementById('constant');
const headerBg = document.querySelector('.swiper-wrapper');
const images = document.querySelectorAll('img');
const synth = document.getElementById('synth');
const zoneLeft = document.getElementById('zone-left');
const zoneLeftOff = document.getElementById('zone-left-off');
const zoneRight = document.getElementById('zone-right');
const zoneRightOff = document.getElementById('zone-right-off');
const zoneTop = document.getElementById('zone-top');
const zoneTopOff = document.getElementById('zone-top-off');
const zoneBottom = document.getElementById('zone-bottom');
const zoneBottomOff = document.getElementById('zone-bottom-off');


let mousePos ={
    x:0,
    y:0
};

function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}


links.forEach((item) => {
    item.addEventListener('mouseenter', ()=>{
        audioBlop.play();
        constantBleep.pause();
    })
});

const getInnerText = (ID) => {
    let ariaLive = document.getElementById('live');
    let linkName = document.getElementById(ID).getAttribute('datatype');

    document.addEventListener('keydown', (e) => {
        if(e.altKey) {
            ariaLive.innerText = '';
            ariaLive.innerText = linkName;
        }
    });

};



// addEvent(document, "mouseout", function() {
//     constantBleep.play();
// });
//
// addEvent(document, "mouseover", function() {
//     constantBleep.pause();
// });


images.forEach((image)=>{
    image.addEventListener('mouseover', () => {
        synth.volume = 0.5;
        synth.play();
    });

    image.addEventListener('mouseout', ()=>{
        synth.pause();
    });
});

headerBg.addEventListener('mouseout', ()=>{
    synth.pause();
});

headerBg.addEventListener('mouseover', ()=>{
    synth.volume = 0.5;
    synth.play();
});




zoneLeft.addEventListener('mouseover', function () {
    constantBleep.play();
    console.log('mouse = left')
});

zoneLeftOff.addEventListener('mouseover', function () {
    constantBleep.pause();
});

zoneRight.addEventListener('mouseover', function () {
    constantBleep.play();
    console.log('mouse = right')

});

zoneRightOff.addEventListener('mouseover', function () {
    constantBleep.pause();
});

zoneTop.addEventListener('mouseover', function () {
    constantBleep.play();
    console.log('mouse = top')
});

zoneTopOff.addEventListener('mouseover', function () {
    constantBleep.pause();
});


zoneBottom.addEventListener('mouseover', function () {
    constantBleep.play();
    console.log('mouse = bottom')
});

zoneBottomOff.addEventListener('mouseover', function () {
    constantBleep.pause();
});







