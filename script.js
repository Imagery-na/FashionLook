$(function()
{
  "use strict";
  $('.title_box').click(function()
  {
     $(this).toggleClass('open');
     $(this).next('.list_link').toggleClass('open');
  });
  $('#slider_price').slider({
    max: 1000, 
    min: 0,
    range: true,
    values: [190, 728],
    slide: function( event, ui) {
      $('input[name="minPrice"]').val( '$'+ ui.values[0]);
      $('input[name="maxPrice"]').val( '$'+ ui.values[1]);
    }
  });

  $('input[name="minPrice"]').val( 
    $('#slider_price').slider('values', 0) );
  $('input[name="maxPrice"]').val( 
      $('#slider_price').slider('values', 1) );

  $('#cart, .title_cart').click(function(){
    $('#cart_box').toggleClass('open');
  });
  $('#sign').click(function(){
    $('#black_fill').toggleClass('open');
    $('#modal').toggleClass('open');
  });
  $('#close_mod, #black_fill').click(function(){
    $('#black_fill').toggleClass('open');
    $('#modal').toggleClass('open');
  });
  $('#search_button').click(function(){
    $('#search_panel').toggleClass('open');
  });
  $('#loadmore').click(function(event){
    event.preventDefault();
    $('.list_product').append('<a class="product box anime flex_main flex_nowrap flex_jcontent-between flex_aitem-center"><div class="img_product"><img src="img/clothes2.png" alt=""></div><h2>Худи</h2><p>Fashion-professional</p><p class="price">$270</p></a><a class="product box anime flex_main flex_nowrap flex_jcontent-between flex_aitem-center"><div class="tag box">NEW</div><div class="img_product"><img src="img/clothes4.png" alt=""></div><h2>Кофта</h2><p>Burberries</p><p class="price">$180</p></a><a class="product box anime flex_main flex_nowrap flex_jcontent-between flex_aitem-center"><div class="img_product"><img src="img/clothes6.png" alt=""></div><h2>Бомбер</h2><p>Be yourself</p><p class="price">$290</p></a>')
  });

});
