$(document).ready(function () {
let r, g, b, r2, g2, b2, topPos, left, height;
height = Math.round(Math.random() * 120);
const circle = $('.circle');
    function getStarted() {
        r = Math.round(Math.random() * 250);
        g = Math.round(Math.random() * 250);
        b = Math.round(Math.random() * 250);
        r2 = Math.round(Math.random() * 250);
        g2 = Math.round(Math.random() * 250);
        b2 = Math.round(Math.random() * 250);
        topPos = Math.round(Math.random() * window.innerHeight - circle.height());
        left = Math.round(Math.random() * window.innerWidth - circle.width());
        console.log(r);
    }

    circle.css({
        left: left,
        top: topPos,
        height: height,
        width: height,
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        borderColor: `rgb(${r2}, ${g2}, ${b2})`,
        borderWidth: '5px', 
        borderStyle: 'solid'
    })

    setInterval(function () {
        circle.animate({
            left: left,
            top: topPos,
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            borderColor: `rgb(${r2}, ${g2}, ${b2})`,
            callback: getStarted()
        }, 2000, 'linear')
    }, 2000)
})