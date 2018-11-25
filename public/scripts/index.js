let GPAdata;


$( document ).ready(function() {
	
	// SUBMIT FORM
    $("#transcript-submit").submit(function(event) {
        // Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    function ajaxPost(){
        // DO POST
		const form = $('#transcript-submit')[0];
		let formdata = new FormData(form);
    	$.ajax({
			type : "POST",
			url: $('#transcript-submit').attr('action'),
			data: formdata, 
        	contentType: false,                  
			processData:false,    
			success: (res) => {
				GPAdata=res;
				$("#gpa_result").text(GPAdata.fpo_avg);
				$("#gpa_result").removeAttr("hidden");
                console.log(GPAdata);
              },
			error : function(e) {
				alert("Error!")
				throw new Error("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
 
    }
	
	function editTranscript(){
		$('#upload-page').hide();

	}
})
