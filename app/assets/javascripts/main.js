
$(document).ready(function(){

  $('.toggle').click(function(){
    $('.submenu-toggle').slideToggle('slow');     
  });

  $('#searchfor').click(function(){
         searchedText = $('#searchinput').val();
         $("td:contains('"+searchedText+"')").toggleClass("yellow");
    });

});
