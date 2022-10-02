'use strict';

$(function(){
  // gnb slide toggle
  $('.gnb').on('mouseenter', function(){
    $('.gnb-all-wrap').css('transform', 'translateY(0px)');
  });
  $('.gnb-all-main').on({
    'mouseenter': function(){
      $('.gnb-all-wrap').css('transform', 'translateY(0px)');
    },
    'mousemove': function(){
      $('.gnb-all-wrap').css('transform', 'translateY(0px)');
    },
    'mouseleave': function(){
      $('.gnb-all-wrap').css('transform', 'translateY(-772px)');
    }
  });

  // login, language toggle
  $('.login-menu-btn').click(function(){
    $('.login-menu').toggleClass('on');
  });
  $('.lan-menu-btn').click(function(){
    $('.lan-menu').toggleClass('on');
  });
  $(document).click(function(e){
    let cName = e.target.className;
    if(cName != 'login-menu-btn' && cName != 'login-menu on'
      && cName != 'login-menu-list' && cName != 'fa-solid fa-caret-down'){
      if($('.util-area > div').eq(0).hasClass('on')){
        $('.util-area > div').eq(0).removeClass('on');
      }
    };
    if(cName != 'fa-solid fa-caret-down' && cName != 'lan-menu-btn'
      && cName != 'lan-menu on' && cName != 'lan-menu-list'){
      if($('.util-area > div').eq(1).hasClass('on')){
        $('.util-area > div').eq(1).removeClass('on');
      }
    };
  });

  // search modal open
  $('.search-icon').on('click', function(){
    $('.search-all-wrap').css({'opacity': '1', 'visibility': 'visible'});
  });

  // search modal label click event
  $('.search-label').on('click', function(){
    $(this).css({'opacity': '0', 'visibility': 'hidden'});
  });
  $('.search-header .search-input').on('click', function(){
    $(this).next().css({'opacity': '0', 'visibility': 'hidden'});
  });
  $(document).on('click',function(e){
    if(e.target.className != 'search-label' && e.target.className != 'search-input' && $('.search-input').val() == ''){
      $('.search-label').css({'opacity': '1', 'visibility': 'visible'});
    }
  });

  // search model topic click
  $('.topic-list a').on('click', function(){
    $('.topic-list a').parent().removeClass('on');
    $(this).parent().addClass('on');
  });

  // search modal close
  $('.search-footer').on('click', function(){
    $(this).parent().parent().css({'opacity': '0', 'visibility': 'hidden'});
  });
  $('.search-all-wrap').on('click',function(e){
    if(e.target == e.currentTarget){
      $(this).css({'opacity': '0', 'visibility': 'hidden'});
    }
  });

  // main slide
  let imgNum = 1;
  let slideToNext = function(){
    if(imgNum == 6){
      imgNum = 0;
    };
    $('.main-img a, .main-txt-con').css({
      'opacity': '0',
      'visibility': 'hidden'
    });
    $('.main-img a').eq(imgNum).css({
      'opacity': '1',
      'visibility': 'visible'
    });
    $('.main-txt-con').eq(imgNum).css({
      'opacity': '1',
      'visibility': 'visible'
    });
    $('.main-txt-num').text(imgNum+1);
    imgNum++;
    console.log(imgNum);
  };

  let slideToPrev = function(){
    if(imgNum == 1){
      imgNum = 7;
    };
    $('.main-img a, .main-txt-con').css({
      'opacity': '0',
      'visibility': 'hidden'
    });
    $('.main-img a').eq(imgNum-2).css({
      'opacity': '1',
      'visibility': 'visible'
    });
    $('.main-txt-con').eq(imgNum-2).css({
      'opacity': '1',
      'visibility': 'visible'
    });
    $('.main-txt-num').text(imgNum-1);
    imgNum--;
  };

  let next = setInterval(slideToNext,3500);

  // play, pause btn
  $('.main-txt-btn button:last-child').on('click', function(){
    if($(this).attr('class') == 'main-txt-pause'){
    clearInterval(next);
    $(this).attr('class', 'main-txt-play');
    $(this).children().attr('class', 'fa-solid fa-play');
    }else{
      clearInterval(next);
      next = setInterval(slideToNext,3500);
      $(this).attr('class', 'main-txt-pause');
      $(this).children().attr('class', 'fa-solid fa-pause');
    }
  });

  // left, right btn
  $('.main-txt-left').on('click', function(){
    clearInterval(next);
    slideToPrev();
    next = setInterval(slideToNext,3500);
    console.log(imgNum);
  });
  $('.main-txt-right').on('click', function(){
    clearInterval(next);
    slideToNext();
    next = setInterval(slideToNext,3500);
  });

  // notice btn list animation
  $('.notice-info li a').click(function(e){
    e.preventDefault();
    $('.notice-info li').removeClass('notice-on');
    $(this).parent().addClass('notice-on');
    $('.notice-info li i').attr('class', 'fa-solid fa-minus');
    $(this).next().attr('class', 'fa-solid fa-plus');
    let noticeNum = $(this).data("num");
    console.log(noticeNum, $('.notice-contents'));
    $('.notice-contents').addClass('hidden');
    $('.notice-contents').eq(noticeNum).removeClass('hidden');
  });

  //notice contents show hidden

})
