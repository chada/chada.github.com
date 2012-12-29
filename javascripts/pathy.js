
$(document).ready(function() {        
  $(window).scroll(function() {
    if($(this).scrollTop() > 300) {
      $('#to-top').fadeIn(); 
    } else {
      $('#to-top').fadeOut();
    }
  });
 
  $('#to-top').click(function() {
    $('body,html').animate({scrollTop:0},800);
  }); 
});

jQuery.fn.spectragram.accessData = {
    accessToken: '111489.60f493f.d0e7cbf622ee434386ee8de6cda375b8',
    clientID: '60f493f7f82b47a8baead3279ea8c35c'        
};

$('div.instagram ul').spectragram('getUserFeed',{
    query: 'ichada',
    max: 12
});

