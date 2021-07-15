$(document).ready(function () {
    const circle = $('.circle');
    let r,g,b,top,left,height,width;
    circle.click(function() {
        height = Math.round(Math.random() * 250);
        width = Math.round(Math.random() * 250);
        r = Math.round(Math.random() * 250);
        g = Math.round(Math.random() * 250);
        b = Math.round(Math.random() * 250);
        top = Math.round(Math.random() * window.innerHeight -  height);
        left = Math.round(Math.random() * window.innerWidth - width);
        $(this).animate({
            height: height,
            width: width,
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            top: top,
            left: left
        }, 3000, 'linear');
    })
})