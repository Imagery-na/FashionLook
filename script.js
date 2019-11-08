'use strict';
//работа с корзиной
const products = document.querySelectorAll('.list_product .product');
const contentCart = document.querySelector('.content_cart');
products.forEach((product) => {
  const btn = product.querySelector('button');
  btn.addEventListener('click', () => {
    const productClone = product.cloneNode(true);
    contentCart.appendChild(productClone);
    showData();
    productClone.style.height = '';
    const removeBtn = productClone.querySelector('button');
    removeBtn.textContent = 'Удалить из корзины';
    removeBtn.addEventListener('click', () => {
      productClone.remove();
      showData();
    });
  });

  function showData() {
    const productsCart = contentCart.querySelectorAll('.product'),
        productsPrice = contentCart.querySelectorAll('.product .price'), // все цены
        priceTotal = document.querySelector('.price_total'), // строка с общей суммой
        countGoods = document.querySelector('.counter');
    let sum = 0;
    countGoods.textContent = productsCart.length;
    productsPrice.forEach((Price) => {
        let price = parseFloat(Price.textContent.slice(1));
        sum += price;
    });
    priceTotal.textContent = sum;
}
});
//изменение страны и валюты
const country = document.querySelector('#location span');
country.addEventListener('click', () =>{
  if(country.textContent == 'РОССИЯ') {
    country.textContent = 'УКРАИНА';
  }else{
    country.textContent = 'РОССИЯ';
  }
});
const currency = document.querySelector('#currency span');
currency.addEventListener('click', () =>{
  if(currency.textContent == 'US DOLLAR') {
    currency.textContent = 'RU РУБЛЬ';
  }else{
    currency.textContent = 'US DOLLAR';
  }
});



$(function()
{
  $('.title_box').click(function() //раскрытие списков категорий
  {
     $(this).toggleClass('open');
     $(this).next('.list_link').toggleClass('open');
  });
  $('#slider_price').slider({  //фильтр по цене
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

  $('#cart').click(function(){ //открытие окна корзины и регистрации
    $('#cart_box').toggleClass('open');
    document.body.style.overflow = 'hidden';
  });
  $('#order, .title_cart').click(function(){ //открытие окна корзины и регистрации
    $('#cart_box').toggleClass('open');
    document.body.style.overflow = '';
  });
  $('#sign').click(function(){
    $('#black_fill').toggleClass('open');
    $('#modal').toggleClass('open');
    document.body.style.overflow = 'hidden';
  });
  $('#close_mod, #black_fill').click(function(){
    $('#black_fill').toggleClass('open');
    $('#modal').toggleClass('open');
    document.body.style.overflow = '';
  });
  $('#search_button').click(function(){ // поиск
    $('#search_panel').toggleClass('open');
  });
  $('#loadmore').click(function(event){
    event.preventDefault();
    $('.list_product').append('<a class="product box anime"><div class="img_product"><img src="img/clothes2.png" alt=""></div><h2>Худи</h2><p>Fashion-professional</p><p class="price">$270</p></a><a class="product box anime"><div class="tag box">NEW</div><div class="img_product"><img src="img/clothes4.png" alt=""></div><h2>Кофта</h2><p>Burberries</p><p class="price">$180</p></a><a class="product box anime"><div class="img_product"><img src="img/clothes6.png" alt=""></div><h2>Бомбер</h2><p>Be yourself</p><p class="price">$290</p></a>')
  });

});
