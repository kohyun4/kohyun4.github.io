let window_width = $(window).width();
let window_height = $(window).height();
let nowScroll = $(window).scrollTop();
const mobile_width = 750;
const headerHeight = 56;


$(function() {
    //alert('hi'); 
    
    $('.pageTop_btn').click(scrollToTop);
    
    function scrollToTop() {
        $('body, html').animate({ scrollTop: 0 }, 500);
    }
});


