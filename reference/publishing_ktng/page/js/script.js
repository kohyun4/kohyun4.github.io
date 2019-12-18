$(function() {
    
    //alert('hi');  
    
    const $langBtn = $('#header .util_top');
    const $langList = $('#header .util_top .list_lang');
    const $mainIntro = $('.main .mask #intro');
    const $familyBtn = $('#footer .relations .family_btn');
    const $familyList = $('#footer .family');
    const $introContents1 = $('.sub #contents .parts.num1').find('.box');
    const $introContents2 = $('.sub #contents .parts.num2').find('.box');
    const $introContents3 = $('.sub #contents .parts.num3').find('.box');
    let nowScroll;
    
    
    
    $(window).scroll(scrollEvent);
    $langBtn.hover(openLangList);
    $familyBtn.click(familySlide);
    $familyBtn.trigger('click');

    
    
    if($(window).width() <= 750) {
        $('#visual').find('iframe').attr('src', "https://www.youtube.com/embed/_umv_AaJyaw?rel=0&amp;controls=0&amp;showinfo=0");
    }
    
    function scrollEvent() {
        
        if($('body').hasClass('main')) {
            headerChange();
            mainItroShow();
        } else if($('body').hasClass('sub')) {
            subPageShow();   
        }
        
        /*
        headerChange();
        mainItroShow();
        subPageShow();
        
        This way doesn't work
        */
    }
    function headerChange() {
        nowScroll = $(window).scrollTop();
        //alert(nowScroll);
        
        if(nowScroll > 2) {
            $('.main #header').addClass('fixed');   
        } else {
            $('.main #header').removeClass('fixed');   
        }   
    }  
    function openLangList() {
        //alert('hi');
        //$langBtn.find('i').css('transform', 'rotate(180deg)');
        $langBtn.find('.go_lang').toggleClass('on');
        $langList.fadeToggle(500);
    }
    function mainItroShow() {
        nowScroll = $(window).scrollTop();
        const visualHeight = $('.main #visual').height();
        const mainIntroPosTop = $('.main .mask').position().top;
        const dist = nowScroll / visualHeight * 100 ;
        
        if(nowScroll > 2 && nowScroll <= mainIntroPosTop) {
            $mainIntro.width(dist+'%').height(dist+'%');
        } else if (nowScroll > mainIntroPosTop) {
            $mainIntro.width('100%').height('100%');   
        }
    }
    function familySlide() {
        $familyBtn.toggleClass('on');
        $familyList.stop().slideToggle();
    }
    function subPageShow() {
        nowScroll = $(window).scrollTop();
        const posDelay = 128;
        //alert(nowScroll);
        
        if(nowScroll > ($introContents1.position().top + posDelay)) { 
            $introContents1.find('.curtain > ul > li').eq(0).animate({
                top: 0,
                opacity: 1
            }, 1000); 
            $introContents1.find('.curtain > ul > li').eq(1).delay(400).animate({
                top: 0,
                opacity: 1
            }, 1000); 
            $introContents1.find('.curtain > ul > li').eq(2).delay(800).animate({
                top: 0,
                opacity: 1
            }, 1000); 
        }
        
        if(nowScroll > ($introContents3.position().top + posDelay)) { 
            $introContents3.find('.curtain .txt .corp').animate({
                top: 0,
                opacity: 1
            }, 1000);  
            $introContents3.find('.curtain .txt .ci').delay(500).animate({
                top: 0,
                opacity: 1
            }, 1000);
        }
        
    }

})
