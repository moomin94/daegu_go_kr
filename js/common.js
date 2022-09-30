'use strict';

$(function(){
  // gnb slide toggle
  $('.gnb').hover(function(){
    $('.gnb-all-wrap').slideDown();
  }, function(){
    $('.gnb-all-wrap').css('display', 'none');
  });
  $('.gnb-all-wrap').hover(function(){
    $('.gnb-all-wrap').css('display', 'block');
  }, function(){
    $('.gnb-all-wrap').slideUp();
  });

  // login, language toggle
  let loginN = 0;
  let lanN = 0;

  $(document).on('click',function(e){
    if(loginN == 1 && $(e.target).eq(0).text() !== '로그인'){
      $('.login-menu-btn').children().css('transform', 'rotate(0deg)');
      $('.login-menu-btn').next().css('display', 'none');
      loginN = 0;
    };
    if(lanN == 1 && $(e.target).eq(0).text() !== 'LANGUAGE'){
      $('.lan-menu-btn').children().css('transform', 'rotate(0deg)');
      $('.lan-menu-btn').next().css('display', 'none');
      lanN = 0;
    };
  });
  $('.login-menu-btn').click(function(){
    if(loginN == 0){
      $(this).children().css('transform', 'rotate(180deg)');
      $(this).next().css('display', 'block');
      loginN = 1;
    }else{
      $(this).children().css('transform', 'rotate(0deg)');
      $(this).next().css('display', 'none');
      loginN = 0;
    }
  });
  $('.lan-menu-btn').click(function(){
    if(lanN == 0){
      $(this).children().css('transform', 'rotate(180deg)');
      $(this).next().css('display', 'block');
      lanN = 1;
    }else{
      $(this).children().css('transform', 'rotate(0deg)');
      $(this).next().css('display', 'none');
      lanN = 0;
    }
  });

})
