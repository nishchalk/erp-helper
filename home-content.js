$(document).ready(function(){
	// $("#moduleUL").append('<li><a href="menulist.htm?module_id=16"><i class="fa fa-graduation-cap fa-lg"></i> <strong>Academic</strong></a></li>')
	$("#moduleUL").append('<li><a href="https://erp.iitkgp.ac.in/Acad/feedback/rev_feedbac_stu.jsp?action=first" target="_blank"><i class="fa fa-check-square fa-lg"></i> <strong>Feedback</strong></a></li>')
	$("#message_pannel").append('<iframe src="https://erp.iitkgp.ac.in/TrainingPlacementSSO/Notice.jsp" style="border:none; height:320px;width:100%;"></iframe>')

	setTimeout(function(){
		$("#message_pannel").append('<iframe src="https://erp.iitkgp.ac.in/TrainingPlacementSSO/TPStudent.jsp" style="border:none; height:600px;width:100%;"></iframe>');
		$("#action_pannel").append('<div class="well well-sm col-md-1" style="margin: 0px; float: right;"><i class="fa fa-lg fa-reddit"></i>&nbsp;&nbsp;NK</div>');
	}, 1500);

});
