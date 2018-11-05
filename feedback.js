$(document).ready(function(){

	function randNumb(min,max)
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

	$("#appDiv1").append('<font color="green"><b>Select the subject and professor and when the form shows up click on Populate button</b></font>')
	$("#appDiv1").append(' <input type="button" id="selecctall" value="Populate fields"/></li>');

 	$(document).on("click", "#selecctall" , function() {
 	            $("textarea").each(function() {
 	                   $(this).val('NA');
 	               });
 	            i = 0;
 	            flag = 0;
 	            $("input[type='radio']").each(function() {
 	                   // console.log($(this).attr("value"), i, flag)
 	                   
 	                   condition = ($(this).attr("value") == randNumb(1,4))
 	                   
 	                   if(i==4 && flag == 0){
 	                   	condition = true;
 	                   }
 	                   if(condition){
 	                   	$(this).prop( "checked", true );
 	                   	flag = 1;
 	                   }
 	                   i = i+1
 	                   if($(this).attr("value") > 5 || i > 4){
 	                   	i = 0;
 	                   	flag = 0;
 	                   }
 	               });
 	            $('html, body').animate({
 	                 scrollTop: $("#passline").offset().top
 	             }, 1000);
 	            $("#passline").focus();
 	        });
 	$(document).on("change keyup", "#passline" , function() {
 	    if( $(this).val().length == 6 )
 	        $("#sub").click();
 	});

});