$(function(){
  $('.accordion .content').eq(0).slideDown()
  $('.accordion .title').click(function(){
    $(this).siblings('.accordion .content').slideUp()
    $(this).next().stop().slideToggle()
    $(this).siblings().removeClass('active')
    $(this).toggleClass('active')
  })



})