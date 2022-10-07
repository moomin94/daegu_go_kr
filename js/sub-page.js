'use strict';

$(function(){
  // left menu toggle
  let liNum = '민원안내';
  $('.menu-list-title').click(function(e){
    if(liNum == $(e.target).text()){
      $(this).toggleClass('on');
      $(this).find('.sub-menu-title:eq(0)').toggleClass('on');
      $(this).find('.sub-menu-list> li:eq(0)').toggleClass('on');
      $(this).find('ul:eq(0)').toggleClass('active');
    }else{
      $('.menu-list-title').removeClass('on');
      $('.menu-list-title>ul').removeClass('active');
      $('.sub-menu-title').removeClass('on');
      $('.sub-menu-list>li').removeClass('on');
      $(this).addClass('on');
      $(this).find('.sub-menu-title:eq(0)').addClass('on');
      $(this).find('.sub-menu-list> li:eq(0)').addClass('on');
      $(this).find('ul:eq(0)').addClass('active');
    }
    liNum = $(e.target).text();
  });

  $('.menu-list-title>a').click(function(e){
    e.preventDefault();
  })

  $('.sub-menu-title>a').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.sub-menu-title').removeClass('on');
    $('.sub-menu-list>li').removeClass('on');
    $(this).next().find('li:eq(0)').addClass('on');
    $(this).parent().addClass('on');
  })

  $('.sub-menu-list>li').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    $('.sub-menu-list>li').removeClass('on');
    $(this).addClass('on');
  })
})
