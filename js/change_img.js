
$(document).ready(function(){
	
  $(".source").mousemove(function(event){
  	var sourceimg = $(this).attr('src');
    $('.show_img').removeAttr('src').attr('src',sourceimg);


    $(".source").mouseleave(function(event){
    $('.show_img').removeAttr(sourceimg).attr();
  });
  });
 
});
