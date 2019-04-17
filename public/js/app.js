const menuItems = document.querySelectorAll('a');
const audioBlop = document.getElementById('blop');
const constantBleep = document.getElementById('constant');
const headerBg = document.querySelector('.swiper-wrapper');
const images = document.querySelectorAll('img');
const synth = document.getElementById('synth');


let mousePos ={
    x:0,
    y:0
};

menuItems.forEach((item)=>{
    item.addEventListener('mouseenter', ()=>{
        audioBlop.play();
        constantBleep.pause();
    })
});


function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, "mouseout", function() {
    constantBleep.play();
});

addEvent(document, "mouseover", function() {
    constantBleep.pause();
});


document.addEventListener('mousemove', (e)=>{
    const pos = {
        x:e.clientX,
        y:e.clientY
    };

    // pos.x >= mousePos.x ? console.log("right") : console.log("left");
    // pos.y >= mousePos.y ? console.log("down") : console.log("up");
    // document.querySelector('#mouseHelper').setAttribute('style',`transform:translate(${pos.x}px,0)`)


    mousePos = {x:pos.x,y:pos.y};

    // console.log(`dit is x ${pos.x}`);
    // console.log(`dit is y ${pos.y}`);

});

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
    synth.play();
});


document.addEventListener('keydown', (e)=>{
    console.log(e.key);
});







