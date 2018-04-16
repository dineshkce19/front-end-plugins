jQuery('.nav-option').click(function(){
  var index = jQuery(this).index('.nav-option');		
  jQuery('.nav-option').removeClass('nav-option-active'); //add styles for active
  jQuery(this).addClass('nav-option-active');
  jQuery('.nav-content').hide();
  jQuery(jQuery('.nav-content')[index]).show();
});
