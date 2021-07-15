$(document).ready(function () {
    let top;
    let left;
    let backgroundColor;
    let element;
    $('.animate').each(function (index, elem) {
        function getPos() {
            top = elem.offsetTop;
            left = elem.offsetLeft;
            backgroundColor = $(elem).css('backgroundColor');
            console.log('top', top, 'left', left, 'backgroundColor', backgroundColor);
        }

        $(elem).click(function () {
            getPos();
            console.log();
            $(this).css('opacity', 0);
            element = $(this)
            console.log(element);
            backgroundColor = $(elem).css('backgroundColor');
            $('.modal').css({
                top: top,
                left: left,
                backgroundColor: backgroundColor,
                display: 'block',
                zIndex: 55
            })
            $('.modal').animate({
                left: '200px',
                top: '50px',
                height: '300px',
                display: 'block',
                width: '300px',
                zIndex: 55
            }, 700)

            $('.modal-container').show();
        })
    })

    $('.modal').click(function () {
        $('.modal').animate({
            top: top,
            left: left,
            opacity: 1,
            backgroundColor: backgroundColor,
            display: 'none',
            zIndex: 55,
            height: '140px',
            width: '130px'
        }, 700, function () {
            element.css('opacity', 1);
            $('.modal').hide();
            $('.modal-container').hide();
        })
    })
})