$(document).ready(function(){
	chrome.storage.sync.get(function(json) {	  
  	for(var key in json){
  		$('#'+key).val(json[key]);
  	  console.log("Key: " + key + "\nValue: " + json[key]);      	
      }
	  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
	  //     chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box", data: json}, function(response) {});  
	  // });	  
	});

	var nrPost = 3;

	var getQuestion = function ()
    {
        // $.ajaxSetup({async:false});
        var url = "https://erp.iitkgp.ac.in/SSOAdministration/getSecurityQues.htm";
        var data = { user_id: $('#roll_no').val() };
        $.post(url, data, Callback);
    };

    var Callback = function (response)
    {
        $('#ques'+nrPost).val(response);
        console.log(nrPost);
        console.log($('#ques'+(nrPost+2)).val());
        console.log($('#ques'+(nrPost+1)).val());
        console.log($('#ques'+nrPost).val());

        if($('#ques'+nrPost).val() == $('#ques'+(nrPost+1)).val() || $('#ques'+nrPost).val() == $('#ques'+(nrPost+2)).val()){
        	getQuestion();
        	return;
        }
        if (response.error)
        {
            return;
        }

        nrPost--;

        if(nrPost>0)
            getQuestion();
        else
            return;
    };

	$("#roll_no").change(function(){
		getQuestion();
		nrPost = 3;
	});

	$("#save").click(function(){
		json = ConvertFormToJSON($('#erpCredentials'))
	    console.log(json);
	    chrome.storage.sync.set(json, function() {
	      console.log('Saved');
	    });
	    $('#status-display').show();
	});

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