'use strict';

$(function(){
  // left menu toggle
  let liNum = $('.menu-list-title:eq(0)>a').text();
  $('.menu-list-title').click(function(e){
    if(liNum == $(e.target).text()){
      $(this).toggleClass('on');
      // $(this).find('.sub-menu-title:eq(0)').toggleClass('on');
      // $(this).find('.sub-menu-list> li:eq(0)').toggleClass('on');
      $(this).find('ul:eq(0)').toggleClass('active');
    }else{
      $('.menu-list-title').removeClass('on');
      $('.menu-list-title>ul').removeClass('active');
      $('.sub-menu-title').removeClass('on');
      $('.sub-menu-list>li').removeClass('on');
      $(this).addClass('on');
      if($(e.target).text() == '행정정보공개'){
        $(this).find('.sub-menu-title:eq(1)').addClass('on');
      }else{
        $(this).find('.sub-menu-title:eq(0)').addClass('on');
      }
      $(this).find('.sub-menu-list> li:eq(0)').addClass('on');
      $(this).find('ul:eq(0)').addClass('active');
    }
    liNum = $(e.target).text();
  });

  $('.menu-list-title>a').click(function(e){
    e.preventDefault();
  });

  $('.sub-menu-title>a').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.sub-menu-title').removeClass('on');
    $('.sub-menu-list>li').removeClass('on');
    $(this).next().find('li:eq(0)').addClass('on');
    $(this).parent().addClass('on');
  });

  $('.sub-menu-list>li').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.sub-menu-title').removeClass('on');
    $('.sub-menu-list>li').removeClass('on');
    $(this).addClass('on');
    $(this).parent().parent().addClass('on');
  });

  //민원실 이미지 변경
  $('.page-btns button').click(function(){
    $('.page-btns button').removeClass('on');
    $(this).addClass('on');
    if($('.page-btns button:eq(0)').attr('class') == 'on'){
      $('.tac img').attr('src', './img/img_minwon_room01.gif');
    }else if($('.page-btns button:eq(1)').attr('class') == 'on'){
      $('.tac img').attr('src', './img/img_minwon_room02.jpg');
    }
  })
})
