const menuItems = document.querySelectorAll('.menu-item');
const audioBlop = document.getElementById('blop');
const audioError = document.getElementById('error');


menuItems.forEach((item)=>{
    item.addEventListener('mouseenter', ()=>{
        audioBlop.play();
    })
});

// document.addEventListener('mouseout', (e)=>{
//     // audioError.play();
//     console.log('outside of window');
//     console.log(e);
// });

function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, "mouseout", function(e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName === "HTML") {

        audioError.play();
    }
});








