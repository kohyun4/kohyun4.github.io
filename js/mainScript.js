let window_width = $(window).width();
let window_height = $(window).height();
let nowScroll = $(window).scrollTop();
const mobile_width = 750;
const headerHeight = 56;


$(function() {
    //alert('hi'); 
    let gnbPos = $('#gnb').position().top;
    let aboutPos = $('#main > #about').position().top - 56 - 48 - 100;
    let worksPos = $('#main > #works').position().top - 56 - 48 - 100;
    let contactPos = $('#main > #contact').position().top - 56 - 48 - 100;
    let booleanVar = false;
    
    
    $(window).resize(resizeVar);
    $(window).scroll(pageScroll);
    $('.top_btn').click(scrollToTop);
    $('#gnb .list > li > a').click(contActive);

    
    function pageScroll() {
        nowScroll = $(window).scrollTop();

        if(nowScroll >= (gnbPos - headerHeight)) {
            $('#gnb').addClass('fixed');  
            $('#main').addClass('header_change');
        } else {
            $('#gnb').removeClass('fixed');
            $('#main').removeClass('header_change');
        }

        if(nowScroll >= aboutPos && nowScroll < worksPos) {
            $('#gnb .list li a, #main > section').removeClass('active');
            $('#gnb .list li #about, #main > #about').addClass('active');
            if(booleanVar == false) {
                progressCircle();
                booleanVar = true;
            }
        } else if(nowScroll >= worksPos && nowScroll < contactPos) {
            $('#gnb .list li a, #main > section').removeClass('active');
            $('#gnb .list li #works, #main > #works').addClass('active');
        } else if(nowScroll >= contactPos) {
            $('#gnb .list li a, #main > section').removeClass('active');
            $('#gnb .list li #contact, #main > #contact').addClass('active');
        } else {
            $('#gnb .list li a, #main > section').removeClass('active');
        }
    }
    function contActive() {
        let idVal = $(this).attr('id');
        let idPos = $('#main').find('#'+idVal).position().top;
        $('body, html').animate({ scrollTop: idPos - 56 - 48 - 24});
        $('#gnb .list li a').removeClass('active');
        $('#gnb .list li').find('#'+idVal).addClass('active');
        console.log(idVal);
    }
    function scrollToTop() {
        $('body, html').animate({ scrollTop: 0 }, 500);
    }
    function resizeVar() {
        window_width = $(window).width();
        gnbPos = $('#gnb').position().top;
    }
    function progressCircle() {
        var bar = [];
        for(var i=0; i<4; i++) { 
            var idName = '#circleProgress-' + i;
            bar[i] = new ProgressBar.Circle(idName, {
              color: '#F39C12',
              strokeWidth: 4,
              trailWidth: 1,
              easing: 'easeInOut',
              duration: 2500,
              text: { autoStyleContainer: false },
              from: { color: '#DBDBDB', width: 1 },
              to: { color: '#FFC400', width: 4 },
              step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                  circle.setText('');
                } else {
                  circle.setText(value);
                }
              }
            });
            bar[i].text.style.fontFamily = '"Roboto", sans-serif';
            bar[i].text.style.fontSize = '4.0rem';
            var percentage = $(idName).attr('level');
            var percentNum = parseInt(percentage)/100;
            bar[i].animate(percentNum);  // Number from 0.0 to 1.0
        }
    }
});


