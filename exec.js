$(document).ready(function(){
	chrome.storage.sync.get(function(json) {
	  console.log(json);
	  for(var key in json){
	  	$('#'+key).val(json[key]);
	  	// console.log(key);
	  	// console.log(json[key]);
	  }
	  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	  //     chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box", data: json}, function(response) {});  
	  // });
	  $('#user_id').val(json['roll_no']);
	  $('#password').val(json['pwd']);
	  $('#user_id').select();
	  $('#password').select();
	});
	
	// Roll number goes here
	var Roll_No = $('#roll_no').val();
	// Pasword
	var Password = $('#pwd').val();

	// Specify all the questions and answers as it is considering Uppercase and Lowercase
	var ques1 = $('#ques1').val();
	var ans1 = $('#ans1').val();

	var ques2 = $('#ques2').val();
	var ans2 = $('#ans2').val();

	var ques3 = $('#ques3').val();
	var ans3 = $('#ans3').val();

	$("#save").click(function(){
		json = ConvertFormToJSON($('#erpCredentials'))
	    console.log(json);
	    chrome.storage.sync.set(json, function() {
	      console.log('Saved');
	    });
	    $('#status-display').show();
	});

	//******************************************************************//

	// setTimeout(function() {
	//     if($('#question').text()==qt1){
	//     	$('#answer').val(ans1);
	//     }
	//     else if($('#question').text()==qt2){
	//     	$('#answer').val(ans2);
	//     }
	//     else if($('#question').text()==qt3){
	//     	$('#answer').val(ans3);
	//     }
	//     else{
	//     	alert('Please reload this page !!');
	//     }
	//     $('input[type=submit]').click();
 // 	 }, 500);
});
function ConvertFormToJSON(form){
    var array = jQuery(form).serializeArray();
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });
    
    return json;
}
function saveChanges() {
        // Get a value saved in a form.
        var theValue = textarea.value;
        // Check that there's some code there.
        if (!theValue) {
          message('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': theValue}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
      }