
$('.cof_extra_details').addClass('animate__animated') //add class on additional content that will open
$('.card').click(function (event) {
    event.stopPropagation(); //fix outside click event
    var elem = $(this).parent().find('.cof_extra_details') //Target content element
    
    if (elem.is(":visible")) { // Checks if content is visible and removes it on click
        elem.removeClass('animate__bounceIn'); 
        $(this).parent().removeClass('active') //Hover fix if there is any required
        elem.addClass('animate__zoomOut');
        elem.fadeOut(500)
    } else { // Else displays content
        if ($('.cof_extra_details').hasClass('animate__bounceIn')) {  //Remove other already opened content -- fixes duplicate content box openning. Disable to keep opened multiple content
                $('.cof_extra_details').removeClass('animate__bounceIn');
                $('.cof_extra_details').addClass('animate__zoomOut')
                $('.cof_card').removeClass('active');
                $('.cof_extra_details').fadeOut(500)
        }
        if (elem.hasClass('animate__zoomOut')) { //Opens clicked elements target content box.
            elem.removeClass('animate__zoomOut');
            }
            $(this).parent().addClass('active')
            elem.addClass('animate__bounceIn');
            elem.css('display','block');
        
        // content.fadeOut(0).eq(elem.index($(this))).fadeIn(200)
        elem.fadeOut(0).eq($(this).index(elem)).fadeIn(200) //Reopens content when closed.. Currently doesn't work

    }
});

$(window).click(function() { // closes content when clicked outside.
    if ($('.cof_extra_details').hasClass('animate__bounceIn')) {
        if ($('.cof_card').hasClass('hovered')==false && $('.cof_extra_details').hasClass('hovered')==false) {
            $('.cof_extra_details').removeClass('animate__bounceIn');
            $('.cof_extra_details').addClass('animate__zoomOut')
            $('.cof_card').removeClass('active');
            $('.cof_extra_details').fadeOut(500)
        }
    }
});

//git_committed