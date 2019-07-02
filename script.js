$(function()
{
  "use strict";
  $('.title_box').click(function()
  {
     $(this).toggleClass('open');
     $(this).next('.list_link').toggleClass('open');
  });


});
