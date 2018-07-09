$(document).ready(function(){
	chrome.storage.sync.get(function(json) {
	    console.log(json);

		// Roll number goes here
		var Roll_No = json['roll_no'];
		// Pasword
		var Password = json['pwd'];

		// Specify all the questions and answers as it is considering Uppercase and Lowercase
		var qt1 = json['ques1'];
		var ans1 = json['ans1'];

		var qt2 = json['ques2'];
		var ans2 = json['ans2'];

		var qt3 = json['ques3'];
		var ans3 = json['ans3'];

		//******************************************************************//

		$('#user_id').val(Roll_No);
		$('#password').val(Password);
		$('#user_id').select();
		$('#password').select();

		setTimeout(function() {
		    if($('#question').text()==qt1){
		    	$('#answer').val(ans1);
		    }
		    else if($('#question').text()==qt2){
		    	$('#answer').val(ans2);
		    }
		    else if($('#question').text()==qt3){
		    	$('#answer').val(ans3);
		    }
		    else{
		    	location.reload(true);
		    }
		    $('input[type=submit]').click();
	 	 }, 500);
	});
});
