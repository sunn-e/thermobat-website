$(document).ready(function(){

	/* Start: inquiry form validation */
	$("form#inquiryForm").validate({
		errorElement: 'small', errorClass: 'helpinq',
		rules: {
		mobile : {
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			}
		},
		messages: {
		mobile : "Please enter a valid 10 digit mobile number",
		},
		invalidHandler: function(event, validator) {

		},
		highlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		success: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		submitHandler: function(form){
			var form = $('form#inquiryForm')[0]; 
			var formData = new FormData(form);
			$.ajax({
				url: $("#inquiryForm").attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success: function(response) {
					var data = $.parseJSON(response);
					if (data.status === true) {
						$("#inquiryForm .message").html('<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Thanks!</strong> '+data.message+'</div>');
						$("#inquiryForm")[0].reset();
						setTimeout(function() {
							$(".alert").remove();
						}, 8000);
					} else {
						$("#inquiryForm .message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> '+data.message+'</div>');
						setTimeout(function(){
							$(".alert").remove();
						}, 8000);
					}
				}
			});
			return false;
		}
	});
	/* End: inquiry form validation */
	
	/* Start: query form validation */
	$("form#queryForm").validate({
		errorElement: 'small', errorClass: 'help-block',
		rules: {
			first_name : "required",
			
			mobile : {
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			},
			email : {
				  required: false,
				  email: true
			  },
			
			pin_code: {
				required: false,
				digits: true,
				minlength: 6,
				maxlength: 6
			},
			
		},
		messages: {
			first_name : "First name is required",
			last_name : "last name is required",
			mobile : {
				required: "Mobile no. is required",
				digits: "only digit",
				minlength: "minimum 10 digit",
				maxlength: "maximum 10 digit"
			},
			email : {
				required :"Email is required",
				email: "please enter valid email"
			},
			city : "City is required",
			pin_code: {
				required: "Pin code is required",
				minlength: "minimum 6 digit",
				maxlength: "maximum 6 digit",
				digits: "only digit"
			},
			purpose : "Purpose is required",
			query : "Query is required"
		},
		invalidHandler: function(event, validator) {

		},
		highlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		success: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		submitHandler: function(form){
			var form = $('form#queryForm')[0]; 
			var formData = new FormData(form);
			$.ajax({
				url: $("#queryForm").attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success: function(response) {
					var data = $.parseJSON(response);
					if (data.status === true) {
						$("#queryForm .message").html('<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Thanks!</strong> '+data.message+'</div>');
						$("#queryForm")[0].reset();
						setTimeout(function() {
							$(".alert").remove();
						}, 8000);
					} else {
						$("#queryForm .message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> '+data.message+'</div>');
						setTimeout(function(){
							$(".alert").remove();
						}, 8000);
					}
				}
			});
			return false;
		}
	});
	/* End: query form validation */
	
	/* Start: orp form validation */
	$("form#orpForm").validate({
		errorElement: 'small', errorClass: 'help-block',
		rules: {
			first_name : "required",
			last_name : "required",
			mobile : {
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			},
			email : {
				  required: true,
				  email: true
			  },
			city : "required",
			country : "required",
			states : "required",
			pin_code: {
				required: true,
				minlength: 6,
				maxlength: 6,
				digits: true
			},
		},
		messages: {
			first_name : "First name is required",
			last_name : "last name is required",
			mobile : {
				required: "Mobile no. is required",
				minlength: "minimum 10 digit",
				maxlength: "maximum 10 digit",
				digits: "only digit"
			},
			email : {
				required :"Email is required",
				email: "please enter valid email"
			},
			city : "City is required",
			country : "Country is required",
			states : "State is required",
			pin_code: {
				required: "Pin code is required",
				minlength: "minimum 6 digit",
				maxlength: "maximum 6 digit",
				digits: "only digit"
			}
		},
		invalidHandler: function(event, validator) {

		},
		highlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		success: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		submitHandler: function(form){
			var form = $('form#orpForm')[0]; 
			var formData = new FormData(form);
			$.ajax({
				url: $("#orpForm").attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success: function(response) {
					var data = $.parseJSON(response);
					if (data.status === true) {
						$("#orpForm .message").html('<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Thanks!</strong> '+data.message+'</div>');
						$("#orpForm")[0].reset();
						window.location.href='https://okayapower.com/okaya-corporate/orp-thanks.php';
						setTimeout(function() {
							$(".alert").remove();
						}, 8000);
					} else {
						$("#orpForm .message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> '+data.message+'</div>');
						setTimeout(function(){
							$(".alert").remove();
						}, 8000);
					}
				}
			});
			return false;
		}
	});
	/* End: orp form validation */
	
	$(document).on('click','a.close', function(){
		$('div.alert-dismissable').remove();
	});
	
	/* Start: product registrtion form validation */
	$("form#productRegistrtionForm").validate({
		errorElement: 'small', errorClass: 'help-block',
		rules: {
			name: "required",
			order_source: "required",
			invoice_no: "required",
			invoice_date: "required",
			mobile : {
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			},
			email : {
				required :true,
				email: true
			},
			address: "required",
			pin_code: {
				required: true,
				minlength: 6,
				maxlength: 6,
				digits: true
			},
			city: "required",
			states: "required",
			product: "required",
			category: "required",
			product_serial_no: "required",
			remarks: "required"
		},
		messages: {
			name: "Name is required",
			order_source: "order source is required",
			invoice_no: "Invoice number required",
			invoice_date: "Invoice date is required",
			mobile : {
				required: "Mobile no. is required",
				minlength: "minimum 10 digit",
				maxlength: "maximum 10 digit",
				digits: "only digit"
			},
			email : {
				required :"Email is required",
				email: "please enter valid email"
			},
			address: "Address is required",
			pin_code: {
				required: "Pin code is required",
				minlength: "minimum 6 digit",
				maxlength: "maximum 6 digit",
				digits: "only digit"
			},
			city: "City is required",
			states: "State is required",
			product: "Product is required",
			category: "Category required",
			product_serial_no: "Product serial number required",
			remarks: "Remarks is required"
		},
		invalidHandler: function(event, validator) {

		},
		highlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		success: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		submitHandler: function(form){
			var form = $('form#productRegistrtionForm')[0]; 
			var formData = new FormData(form);
			$.ajax({
				url: $("#productRegistrtionForm").attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success: function(response) {
					var data = $.parseJSON(response);
					if (data.status === true) {
						$("#productRegistrtionForm .message").html('<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+data.message+'</div>');
						$("#productRegistrtionForm")[0].reset();
						setTimeout(function() {
							$(".alert").remove();
						}, 8000);
					} else {
						$("#productRegistrtionForm .message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> '+data.message+'</div>');
						setTimeout(function(){
							$(".alert").remove();
						}, 8000);
					}
				}
			});
			return false;
		}
	});
	/* End: product registrtion form validation */
	
	/* Start: escalate form validation */
	$("form#escalateForm").validate({
		errorElement: 'small', errorClass: 'help-block',
		rules: {
			name: "required",
			mobile : {
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			},
			email : {
				required :true,
				email: true
			},
			complaint_number: "required",
			remarks: "required"
		},
		messages: {
			name: "Name is required",
			mobile : {
				required: "Mobile no. is required",
				minlength: "minimum 10 digit",
				maxlength: "maximum 10 digit",
				digits: "only digit"
			},
			email : {
				required :"Email is required",
				email: "please enter valid email"
			},
			complaint_number: "Please enter complaint number",
			remarks: "Remarks is required"
		},
		invalidHandler: function(event, validator) {

		},
		highlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		success: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		submitHandler: function(form){
			var form = $('form#escalateForm')[0]; 
			var formData = new FormData(form);
			$.ajax({
				url: $("#escalateForm").attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success: function(response) {
					var data = $.parseJSON(response);
					if (data.status === true){
						$("#escalateForm .message").html('<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Thanks!</strong> '+data.message+'</div>');
						$("#escalateForm")[0].reset();
						setTimeout(function() {
							$(".alert").remove();
						}, 8000);
					} else {
						$("#escalateForm .message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> '+data.message+'</div>');
						setTimeout(function(){
							$(".alert").remove();
						}, 8000);
					}
				}
			});
			return false;
		}
	});
	/* End: escalate form validation */
	
	/* Start: complaint form validation */
	$("form#complaintForm").validate({
		errorElement: 'small', errorClass: 'help-block',
		rules: {
			name: "required",
			mobile : {
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			},
			email : {
				required :true,
				email: true
			},
			city: "required",
			pin_code: {
				required: true,
				minlength: 6,
				maxlength: 6,
				digits: true
			},
			product: "required",
			product_serial_no: "required",
			remarks: "required"
		},
		messages: {
			name: "Name is required",
			mobile : {
				required: "Mobile no. is required",
				minlength: "minimum 10 digit",
				maxlength: "maximum 10 digit",
				digits: "only digit"
			},
			email : {
				required :"Email is required",
				email: "please enter valid email"
			},
			city: "City is required",
			pin_code: {
				required: "Pin code is required",
				minlength: "minimum 6 digit",
				maxlength: "maximum 6 digit",
				digits: "only digit"
			},
			product: "Product is required",
			product_serial_no: "Product serial number required",
			remarks: "Remarks is required"
		},
		invalidHandler: function(event, validator) {

		},
		highlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		success: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		submitHandler: function(form){
			var form = $('form#complaintForm')[0]; 
			var formData = new FormData(form);
			$.ajax({
				url: $("#complaintForm").attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success: function(response) {
					var data = $.parseJSON(response);
					if (data.status === true){
						$("#complaintForm .message").html('<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Thanks!</strong> '+data.message+'</div>');
						$("#complaintForm")[0].reset();
					} else {
						$("#complaintForm .message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> '+data.message+'</div>');
					}
				}
			});
			return false;
		}
	});
	/* End: complaint form validation */
	
	
	/* Start: application form validation */
	$("form#applicationForm").validate({
		errorElement: 'small', 
		errorClass: 'help-block',
		rules: {
			first_name: "required",
			last_name: "required",
			mobile : {
				required: true,
				minlength: 10,
				maxlength: 10,
				digits: true
			},
			email : {
				required :true,
				email: true
			}
		},
		messages: {
			first_name: "First Name is required",
			last_name: "Last Name is required",
			mobile : {
				required: "Mobile no. is required",
				minlength: "minimum 10 digit",
				maxlength: "maximum 10 digit",
				digits: "only digit"
			},
			email : {
				required :"Email is required",
				email: "please enter valid email"
			}
		},
		invalidHandler: function(event, validator) {

		},
		highlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		success: function(element) {
			$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
		},
		submitHandler: function(form){
			var form = $('form#applicationForm')[0]; 
			var formData = new FormData(form);
			$.ajax({
				url: $("#applicationForm").attr('action'),
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success: function(response) {
					var data = $.parseJSON(response);
					if (data.status === true){
						$("#applicationForm .message").html('<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Thanks!</strong> '+data.message+'</div>');
						$("#applicationForm")[0].reset();
						setTimeout(function() {
							$(".alert").remove();
						}, 8000);
					} else {
						$("#applicationForm .message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Sorry!</strong> '+data.message+'</div>');
						setTimeout(function(){
							$(".alert").remove();
						}, 8000);
					}
				}
			});
			return false;
		}
	});
	/* End: application form validation */
	
	/* Start: filter Batter form validation */
	$("form#filterBatteryForm").validate({
			errorElement: 'small', errorClass: 'help-block',
			rules: {
			  brand: "required",
			  category: "required"
			},
			messages: {
			  username: "Please Select Brand",
			  password: "Please Select Type"
			},
			invalidHandler: function(event, validator) {

			},
			highlight: function(element) {
				$(element).closest('.col-md-6,.col-md-12').addClass('has-error');
			},
			unhighlight: function(element) {
				$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
			},
			success: function(element) {
				$(element).closest('.col-md-6,.col-md-12').removeClass('has-error');
			},
			submitHandler: function(form){
				$.ajax({
					url: $("#filterBatteryForm").attr('action'),
					data: $("#filterBatteryForm").serialize(),
					type: 'GET',
					success: function(response) {
						$('table#filterResultBattery tbody').html(response);
					}
				});
				return false;
			}
		});
	/* End: filter Batter  form validation */
	
	
	/* Start: News Letters form validation */
	$("form#newsletterForm").validate({
		errorElement: 'small', errorClass: 'newsletterError',
		rules: {
			email : {
				  required: true,
				  email: true
			  }
		},
		messages: {
			email : {
				required :"Email is required",
				email: "please enter valid email"
			}
		},
		submitHandler: function(form){
			$.ajax({
				url: $("#newsletterForm").attr('action'),
				data: $("#newsletterForm").serialize(),
				type: $("#newsletterForm").attr('method'),
				success: function(response) {
					var data = $.parseJSON(response);
					if (data.status === true) {
						$("#newsletterForm .message").html('<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+data.message+' </div>');
						$("#newsletterForm")[0].reset();
					} else {
						$("#newsletterForm .message").html('<div class="alert alert-danger alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+data.message+'</div>');
					}
				}
			});
			return false;
		}
	});
	/* End: News Letters form validation */
	
});
