$(document).ready(function(){

	$("#des").click(function(event){
		$('.infor_description').show();
		$('.infor_reviews').hide();
		$(this).addClass('des');
		$('#rev').removeClass('rev');
	
	});

	$("#rev").click(function(event){
		$('.infor_reviews').show();
		$('.infor_description').hide();
		$(this).addClass('rev');
		$('#des').removeClass('des');
	});

});