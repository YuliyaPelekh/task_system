$(document).ready(function(){

    //dropdown menu
  $('.toggle').click(function(){
    $('.submenu-toggle').slideToggle('slow');     
  });

    //table search button
  $('#searchfor').click(function(){
    searchedText = $('#searchinput').val();
    $("td:contains('"+searchedText+"')").toggleClass("yellow");
  });

});
