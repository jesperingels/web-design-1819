const links = document.querySelectorAll('a');
const audioBlop = document.getElementById('blop');
const constantBleep = document.getElementById('constant');
const headerBg = document.querySelector('.swiper-wrapper');
const images = document.querySelectorAll('img');
const synth = document.getElementById('synth');


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


addEvent(document, "mouseout", function() {
    constantBleep.play();
});

addEvent(document, "mouseover", function() {
    constantBleep.pause();
});


// document.addEventListener('mousemove', (e)=>{
//     const pos = {
//         x:e.clientX,
//         y:e.clientY
//     };
//
//
//
//     mousePos = {x:pos.x,y:pos.y};
//
//
// });


images.forEach((image)=>{
    image.addEventListener('mouseover', () => {
        synth.volume = 0.1;
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
    synth.volume = 0.1;
    synth.play();
});









